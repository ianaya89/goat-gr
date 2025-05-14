import { NextResponse } from "next/server"
import { google } from "googleapis"

// Función para autenticar con Google Sheets
async function getGoogleSheetsAuth() {
  try {
    // Obtener las credenciales desde las variables de entorno
    const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL
    let privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY || ""

    // Verificar que tenemos las credenciales necesarias
    if (!clientEmail) {
      throw new Error("GOOGLE_SHEETS_CLIENT_EMAIL no está configurado")
    }

    if (!privateKey) {
      throw new Error("GOOGLE_SHEETS_PRIVATE_KEY no está configurado")
    }

    // Asegurarse de que los saltos de línea estén correctamente formateados
    if (privateKey.includes("\\n")) {
      privateKey = privateKey.replace(/\\n/g, "\n")
    }

    // Crear el cliente de autenticación
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })

    // Crear el cliente de Google Sheets
    const sheets = google.sheets({ version: "v4", auth })

    return sheets
  } catch (error) {
    console.error("Error detallado al autenticar con Google Sheets:", error)
    throw new Error(
      `Error de autenticación con Google Sheets: ${error instanceof Error ? error.message : String(error)}`,
    )
  }
}

// Función para asegurarse de que la hoja de pagos existe
async function ensurePaymentsSheetExists(sheets: any, spreadsheetId: string) {
  const sheetName = "Pagos Campus"

  try {
    // Obtener todas las hojas del documento
    const sheetsResponse = await sheets.spreadsheets.get({
      spreadsheetId,
      fields: "sheets.properties",
    })

    // Verificar si la hoja específica existe
    const existingSheet = sheetsResponse.data.sheets?.find((sheet: any) => sheet.properties?.title === sheetName)

    if (existingSheet) {
      return existingSheet.properties?.sheetId
    }

    // La hoja no existe, intentar crearla
    console.log(`Hoja "${sheetName}" no encontrada. Intentando crearla...`)

    const addSheetResponse = await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [
          {
            addSheet: {
              properties: {
                title: sheetName,
              },
            },
          },
        ],
      },
    })

    const newSheetId = addSheetResponse.data.replies?.[0]?.addSheet?.properties?.sheetId

    // Añadir encabezados
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: `'${sheetName}'!A1:E1`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [["ID de Pago", "Estado", "Referencia Externa", "Fecha de Registro", "Detalles"]],
      },
    })

    return newSheetId
  } catch (error) {
    console.error(`Error al verificar/crear la hoja "${sheetName}":`, error)
    throw error
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { paymentId, status, externalReference } = data

    // Validar datos requeridos
    if (!paymentId || !status) {
      return NextResponse.json({ success: false, message: "Faltan datos requeridos" }, { status: 400 })
    }

    // ID de la hoja de cálculo
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID

    if (!spreadsheetId) {
      console.error("Error: GOOGLE_SHEETS_SPREADSHEET_ID no está configurada")
      return NextResponse.json(
        { success: false, message: "Falta configuración del ID de la hoja de cálculo" },
        { status: 500 },
      )
    }

    // Obtener la instancia autenticada de Google Sheets
    let sheets
    try {
      sheets = await getGoogleSheetsAuth()
    } catch (authError) {
      console.error("Error de autenticación:", authError)
      return NextResponse.json(
        {
          success: false,
          message: "Error de autenticación con Google Sheets",
          error: authError instanceof Error ? authError.message : String(authError),
        },
        { status: 500 },
      )
    }

    // Asegurarse de que la hoja de pagos existe
    try {
      await ensurePaymentsSheetExists(sheets, spreadsheetId)
    } catch (sheetError) {
      console.error("Error al verificar/crear la hoja de pagos:", sheetError)
      return NextResponse.json(
        {
          success: false,
          message: "Error al verificar/crear la hoja de pagos",
          error: sheetError instanceof Error ? sheetError.message : String(sheetError),
        },
        { status: 500 },
      )
    }

    // Fecha actual formateada
    const registrationDate = new Date().toLocaleString("es-AR", {
      timeZone: "America/Argentina/Buenos_Aires",
    })

    // Preparar los datos para insertar en la hoja
    const values = [[paymentId, status, externalReference || "", registrationDate, ""]]

    // Insertar los datos en la hoja
    try {
      const response = await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: `'Pagos Campus'!A:E`,
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values,
        },
      })

      return NextResponse.json({
        success: true,
        message: "Pago registrado correctamente",
      })
    } catch (appendError) {
      console.error("Error al insertar datos de pago:", appendError)
      return NextResponse.json(
        {
          success: false,
          message: "Error al insertar datos de pago en la hoja",
          error: appendError instanceof Error ? appendError.message : String(appendError),
        },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("Error general al registrar el pago:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Error al registrar el pago",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}

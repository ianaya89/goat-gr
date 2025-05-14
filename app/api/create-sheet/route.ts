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

export async function GET(request: Request) {
  try {
    // ID de la hoja de cálculo y nombre de la hoja
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID
    const sheetName = "Inscripciones Campus"

    if (!spreadsheetId) {
      return NextResponse.json(
        { success: false, message: "GOOGLE_SHEETS_SPREADSHEET_ID no está configurado" },
        { status: 400 },
      )
    }

    // Obtener la instancia autenticada de Google Sheets
    let sheets
    try {
      sheets = await getGoogleSheetsAuth()
      console.log("✅ Autenticación exitosa")
    } catch (authError) {
      console.error("❌ Error de autenticación:", authError)
      return NextResponse.json(
        {
          success: false,
          step: "authentication",
          message: "Error de autenticación",
          error: authError instanceof Error ? authError.message : String(authError),
        },
        { status: 401 },
      )
    }

    // Verificar acceso a la hoja de cálculo
    try {
      const response = await sheets.spreadsheets.get({
        spreadsheetId,
        fields: "properties.title",
      })
      console.log("✅ Acceso a la hoja de cálculo verificado:", response.data.properties?.title)
    } catch (accessError: any) {
      console.error("❌ Error al acceder a la hoja de cálculo:", accessError)

      if (accessError.code === 403 || (accessError.response && accessError.response.status === 403)) {
        return NextResponse.json(
          {
            success: false,
            step: "spreadsheet_access",
            message: "Error de permisos: La cuenta de servicio no tiene acceso a la hoja de cálculo",
            details:
              "Por favor, comparte la hoja de cálculo con la cuenta de servicio y asegúrate de darle permisos de editor",
            accountEmail: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
            spreadsheetId,
          },
          { status: 403 },
        )
      }

      return NextResponse.json(
        {
          success: false,
          step: "spreadsheet_access",
          message: "Error al acceder a la hoja de cálculo",
          error: accessError instanceof Error ? accessError.message : String(accessError),
          spreadsheetId,
        },
        { status: 500 },
      )
    }

    // Verificar si la hoja específica existe
    let existingSheetId: number | null = null
    let sheetExists = false

    try {
      // Obtener todas las hojas del documento
      const sheetsResponse = await sheets.spreadsheets.get({
        spreadsheetId,
        fields: "sheets.properties",
      })

      // Verificar si la hoja específica existe
      const existingSheet = sheetsResponse.data.sheets?.find((sheet: any) => sheet.properties?.title === sheetName)

      if (existingSheet) {
        existingSheetId = existingSheet.properties?.sheetId || null
        sheetExists = true
        console.log(`✅ Hoja "${sheetName}" encontrada con ID: ${existingSheetId}`)
      } else {
        console.log(`❌ Hoja "${sheetName}" no encontrada`)
      }
    } catch (sheetError) {
      console.error("❌ Error al verificar la hoja específica:", sheetError)
      return NextResponse.json(
        {
          success: false,
          step: "check_sheet",
          message: "Error al verificar la hoja específica",
          error: sheetError instanceof Error ? sheetError.message : String(sheetError),
        },
        { status: 500 },
      )
    }

    // Si la hoja no existe, intentar crearla
    if (!sheetExists) {
      try {
        console.log(`Intentando crear la hoja "${sheetName}"...`)

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

        existingSheetId = addSheetResponse.data.replies?.[0]?.addSheet?.properties?.sheetId || null
        console.log(`✅ Hoja "${sheetName}" creada con ID: ${existingSheetId}`)

        // Añadir encabezados
        await sheets.spreadsheets.values.update({
          spreadsheetId,
          range: `'${sheetName}'!A1:G1`,
          valueInputOption: "USER_ENTERED",
          requestBody: {
            values: [["Nombre", "Email", "Teléfono", "Edad", "Experiencia", "Club", "Fecha de Registro"]],
          },
        })

        console.log(`✅ Encabezados añadidos a la hoja "${sheetName}"`)
      } catch (createError) {
        console.error(`❌ Error al crear la hoja "${sheetName}":`, createError)
        return NextResponse.json(
          {
            success: false,
            step: "create_sheet",
            message: `Error al crear la hoja "${sheetName}"`,
            error: createError instanceof Error ? createError.message : String(createError),
          },
          { status: 500 },
        )
      }
    }

    // Verificar que podemos escribir en la hoja
    try {
      console.log("Verificando permisos de escritura...")

      // Intentar escribir un valor de prueba
      const testResponse = await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: `'${sheetName}'!A:A`,
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [["TEST_WRITE_PERMISSION"]],
        },
      })

      console.log("✅ Permisos de escritura verificados")

      // Eliminar el valor de prueba si es posible
      try {
        if (existingSheetId !== null && testResponse.data.updates?.updatedRange) {
          const match = testResponse.data.updates.updatedRange.match(/!A(\d+)/)
          if (match && match[1]) {
            const rowIndex = Number.parseInt(match[1]) - 1

            await sheets.spreadsheets.batchUpdate({
              spreadsheetId,
              requestBody: {
                requests: [
                  {
                    deleteDimension: {
                      range: {
                        sheetId: existingSheetId,
                        dimension: "ROWS",
                        startIndex: rowIndex,
                        endIndex: rowIndex + 1,
                      },
                    },
                  },
                ],
              },
            })

            console.log("✅ Valor de prueba eliminado")
          }
        }
      } catch (cleanupError) {
        console.log("⚠️ No se pudo eliminar el valor de prueba:", cleanupError)
        // No fallamos por esto, es solo limpieza
      }
    } catch (writeError) {
      console.error("❌ Error al verificar permisos de escritura:", writeError)
      return NextResponse.json(
        {
          success: false,
          step: "write_permission",
          message: "Error al verificar permisos de escritura",
          error: writeError instanceof Error ? writeError.message : String(writeError),
        },
        { status: 500 },
      )
    }

    // Todo está bien
    return NextResponse.json({
      success: true,
      message: `Hoja "${sheetName}" verificada y lista para usar`,
      details: {
        spreadsheetId,
        sheetName,
        sheetId: existingSheetId,
        wasCreated: !sheetExists,
      },
    })
  } catch (error) {
    console.error("Error general:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Error general",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}

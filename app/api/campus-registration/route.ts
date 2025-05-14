import { NextResponse } from "next/server"
import { google } from "googleapis"

// Configuración para la autenticación con Google Sheets
async function getGoogleSheetsAuth() {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })

    const sheets = google.sheets({ version: "v4", auth })
    return sheets
  } catch (error) {
    console.error("Error al autenticar con Google Sheets:", error)
    throw new Error("Error de autenticación con Google Sheets")
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, email, phone, age, experience, club } = data

    // Validar datos requeridos
    if (!name || !email || !phone || !age || !experience) {
      return NextResponse.json({ success: false, message: "Faltan campos requeridos" }, { status: 400 })
    }

    // ID de la hoja de cálculo y nombre de la hoja
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID
    const sheetName = "Inscripciones Campus"

    if (!spreadsheetId) {
      return NextResponse.json(
        { success: false, message: "Falta configuración del ID de la hoja de cálculo" },
        { status: 500 },
      )
    }

    // Obtener la instancia autenticada de Google Sheets
    const sheets = await getGoogleSheetsAuth()

    // Fecha actual formateada
    const registrationDate = new Date().toLocaleString("es-AR", {
      timeZone: "America/Argentina/Buenos_Aires",
    })

    // Preparar los datos para insertar en la hoja
    const values = [[name, email, phone, age, experience, club || "No especificado", registrationDate]]

    // Insertar los datos en la hoja
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}!A:G`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values,
      },
    })

    return NextResponse.json({
      success: true,
      message: "Inscripción registrada correctamente",
    })
  } catch (error) {
    console.error("Error al procesar la inscripción:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Error al procesar la inscripción",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}

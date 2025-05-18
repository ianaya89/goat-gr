import { NextResponse } from "next/server"
import { google } from "googleapis"
import { Readable } from "stream"
import ExcelJS from "exceljs"

// Configuración para autenticar con Google
async function getGoogleAuth() {
  const credentials = {
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: (process.env.GOOGLE_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
  }

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/drive", "https://www.googleapis.com/auth/spreadsheets"],
  })

  return auth
}

// Función para crear una carpeta en Google Drive
async function createFolder(auth: any, folderName: string, parentFolderId?: string) {
  const drive = google.drive({ version: "v3", auth })

  const folderMetadata = {
    name: folderName,
    mimeType: "application/vnd.google-apps.folder",
    ...(parentFolderId && { parents: [parentFolderId] }),
  }

  try {
    const response = await drive.files.create({
      requestBody: folderMetadata,
      fields: "id",
    })

    return response.data.id
  } catch (error) {
    console.error("Error al crear la carpeta:", error)
    throw error
  }
}

// Función para subir un archivo a Google Drive
async function uploadFile(auth: any, fileName: string, mimeType: string, fileContent: Buffer, folderId: string) {
  const drive = google.drive({ version: "v3", auth })

  const fileMetadata = {
    name: fileName,
    parents: [folderId],
  }

  const media = {
    mimeType,
    body: Readable.from(fileContent),
  }

  try {
    const response = await drive.files.create({
      requestBody: fileMetadata,
      media: media,
      fields: "id,webViewLink",
    })

    return {
      id: response.data.id,
      webViewLink: response.data.webViewLink,
    }
  } catch (error) {
    console.error("Error al subir el archivo:", error)
    throw error
  }
}

// Función para crear un archivo Excel con los datos del jugador
async function createExcelFile(playerData: any) {
  const workbook = new ExcelJS.Workbook()
  const worksheet = workbook.addWorksheet("Datos del Jugador")

  // Definir las columnas
  worksheet.columns = [
    { header: "Campo", key: "field", width: 30 },
    { header: "Valor", key: "value", width: 50 },
  ]

  // Añadir los datos
  const rows = [
    { field: "Nombre", value: playerData.firstName },
    { field: "Apellido", value: playerData.lastName },
    { field: "Email", value: playerData.email },
    { field: "Teléfono", value: playerData.phone },
    { field: "Fecha de Nacimiento", value: playerData.birthDate },
    { field: "Club", value: playerData.club },
    { field: "Categoría", value: playerData.category },
    { field: "Tipo de Entrenamiento", value: playerData.trainingType },
    { field: "Alergias", value: playerData.allergies || "No especificado" },
    { field: "Objetivos", value: playerData.objectives },
  ]

  // Añadir disponibilidad
  const availabilityText = Object.entries(playerData.availability)
    .map(([day, hours]: [string, any]) => {
      if (hours.length === 0) return null
      const formattedHours = hours.map((hour: number) => `${hour}:00 - ${hour + 1}:00`).join(", ")
      return `${day}: ${formattedHours}`
    })
    .filter(Boolean)
    .join("\n")

  rows.push({ field: "Disponibilidad", value: availabilityText || "No especificado" })

  // Añadir fecha de registro
  rows.push({
    field: "Fecha de Registro",
    value: new Date().toLocaleString("es-AR", {
      timeZone: "America/Argentina/Buenos_Aires",
    }),
  })

  worksheet.addRows(rows)

  // Dar formato a las celdas
  worksheet.getRow(1).font = { bold: true }
  worksheet.eachRow((row, rowNumber) => {
    row.eachCell((cell) => {
      cell.border = {
        top: { style: "thin" },
        left: { style: "thin" },
        bottom: { style: "thin" },
        right: { style: "thin" },
      }
    })
  })

  // Generar el buffer del archivo Excel
  const buffer = await workbook.xlsx.writeBuffer()
  return buffer
}

// Función para actualizar la hoja de cálculo maestra con todos los jugadores
async function updateMasterSpreadsheet(auth: any, playerData: any, folderLink: string, fileLink: string) {
  const sheets = google.sheets({ version: "v4", auth })

  // ID de la hoja de cálculo maestra (debe crearse previamente)
  const spreadsheetId = process.env.GOOGLE_MASTER_SPREADSHEET_ID

  if (!spreadsheetId) {
    console.error("No se ha configurado el ID de la hoja de cálculo maestra")
    return
  }

  try {
    // Verificar si la hoja existe, si no, crearla
    const response = await sheets.spreadsheets.get({
      spreadsheetId,
    })

    let sheetExists = false
    const sheetName = "Jugadoras"

    for (const sheet of response.data.sheets || []) {
      if (sheet.properties?.title === sheetName) {
        sheetExists = true
        break
      }
    }

    if (!sheetExists) {
      // Crear la hoja si no existe
      await sheets.spreadsheets.batchUpdate({
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

      // Añadir encabezados
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: `${sheetName}!A1:M1`,
        valueInputOption: "RAW",
        requestBody: {
          values: [
            [
              "Nombre",
              "Apellido",
              "Email",
              "Teléfono",
              "Fecha de Nacimiento",
              "Club",
              "Categoría",
              "Tipo de Entrenamiento",
              "Alergias",
              "Objetivos",
              "Carpeta",
              "Apto Físico",
              "Fecha de Registro",
            ],
          ],
        },
      })
    }

    // Obtener la fecha actual
    const registrationDate = new Date().toLocaleString("es-AR", {
      timeZone: "America/Argentina/Buenos_Aires",
    })

    // Añadir los datos del jugador a la hoja
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}!A:M`,
      valueInputOption: "RAW",
      requestBody: {
        values: [
          [
            playerData.firstName,
            playerData.lastName,
            playerData.email,
            playerData.phone,
            playerData.birthDate,
            playerData.club,
            playerData.category,
            playerData.trainingType,
            playerData.allergies || "",
            playerData.objectives,
            folderLink,
            fileLink,
            registrationDate,
          ],
        ],
      },
    })

    return true
  } catch (error) {
    console.error("Error al actualizar la hoja de cálculo maestra:", error)
    throw error
  }
}

export async function POST(request: Request) {
  try {
    // Procesar la solicitud multipart/form-data
    const formData = await request.formData()

    // Extraer los datos del formulario
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const birthDate = formData.get("birthDate") as string
    const club = formData.get("club") as string
    const category = formData.get("category") as string
    const trainingType = formData.get("trainingType") as string
    const allergies = formData.get("allergies") as string
    const objectives = formData.get("objectives") as string
    const availabilityJson = formData.get("availability") as string
    const availability = JSON.parse(availabilityJson)

    // Obtener el archivo del apto físico
    const medicalCertificate = formData.get("medicalCertificate") as File

    if (!medicalCertificate) {
      return NextResponse.json({ success: false, message: "No se ha proporcionado el apto físico" }, { status: 400 })
    }

    // Leer el contenido del archivo
    const fileArrayBuffer = await medicalCertificate.arrayBuffer()
    const fileBuffer = Buffer.from(fileArrayBuffer)

    // Obtener el tipo MIME y la extensión del archivo
    const mimeType = medicalCertificate.type
    const fileExtension = mimeType.split("/")[1]

    // Autenticar con Google
    const auth = await getGoogleAuth()

    // ID de la carpeta principal donde se crearán las carpetas de las jugadoras
    const parentFolderId = process.env.GOOGLE_PARENT_FOLDER_ID

    if (!parentFolderId) {
      return NextResponse.json(
        { success: false, message: "No se ha configurado el ID de la carpeta principal" },
        { status: 500 },
      )
    }

    // Crear una carpeta para la jugadora
    const folderName = `${firstName} ${lastName} - ${new Date().toISOString().split("T")[0]}`
    const folderId = await createFolder(auth, folderName, parentFolderId)

    // Obtener el enlace a la carpeta
    const drive = google.drive({ version: "v3", auth })
    const folderResponse = await drive.files.get({
      fileId: folderId,
      fields: "webViewLink",
    })
    const folderLink = folderResponse.data.webViewLink

    // Crear y subir el archivo Excel con los datos
    const playerData = {
      firstName,
      lastName,
      email,
      phone,
      birthDate,
      club,
      category,
      trainingType,
      allergies,
      objectives,
      availability,
    }

    const excelBuffer = await createExcelFile(playerData)
    const excelFileName = `${firstName} ${lastName} - Datos.xlsx`
    const excelFile = await uploadFile(
      auth,
      excelFileName,
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      excelBuffer,
      folderId,
    )

    // Subir el apto físico
    const medicalFileName = `${firstName} ${lastName} - Apto Físico.${fileExtension}`
    const medicalFile = await uploadFile(auth, medicalFileName, mimeType, fileBuffer, folderId)

    // Actualizar la hoja de cálculo maestra
    await updateMasterSpreadsheet(auth, playerData, folderLink || "", medicalFile.webViewLink || "")

    return NextResponse.json({
      success: true,
      message: "Jugadora registrada correctamente",
      data: {
        folderLink,
        excelFileLink: excelFile.webViewLink,
        medicalFileLink: medicalFile.webViewLink,
      },
    })
  } catch (error) {
    console.error("Error al procesar la solicitud:", error)
    return NextResponse.json(
      { success: false, message: "Error al procesar la solicitud", error: String(error) },
      { status: 500 },
    )
  }
}

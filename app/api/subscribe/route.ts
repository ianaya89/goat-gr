import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ message: "Email es requerido" }, { status: 400 })
    }

    // Configuración de Brevo (SendinBlue)
    const API_KEY = process.env.BREVO_API_KEY
    const LIST_ID = process.env.BREVO_LIST_ID

    // Verificación más detallada de las variables de entorno
    if (!API_KEY) {
      console.error("Error: BREVO_API_KEY no está configurada")
      return NextResponse.json({ message: "Configuración de Brevo incompleta: Falta API_KEY" }, { status: 500 })
    }

    if (!LIST_ID) {
      console.error("Error: BREVO_LIST_ID no está configurada")
      return NextResponse.json({ message: "Configuración de Brevo incompleta: Falta LIST_ID" }, { status: 500 })
    }

    // Convertir LIST_ID a número, con manejo de errores
    let listIdNumber: number
    try {
      listIdNumber = Number.parseInt(LIST_ID, 10)
      if (isNaN(listIdNumber)) {
        throw new Error("LIST_ID no es un número válido")
      }
    } catch (error) {
      console.error(`Error al convertir LIST_ID: ${LIST_ID}`, error)
      return NextResponse.json({ message: "Configuración de Brevo incompleta: LIST_ID no es válido" }, { status: 500 })
    }

    console.log(`Procesando suscripción para: ${email} a la lista: ${listIdNumber}`)

    // Primero verificamos si el contacto ya existe
    const checkContactUrl = `https://api.brevo.com/v3/contacts/${encodeURIComponent(email)}`

    console.log(`Verificando si el contacto existe: ${checkContactUrl}`)
    const checkResponse = await fetch(checkContactUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "api-key": API_KEY,
      },
    })

    // Si el contacto existe (código 200), lo actualizamos
    // Si no existe (código 404), lo creamos
    const contactExists = checkResponse.status === 200
    console.log(`Contacto existe: ${contactExists}, Status: ${checkResponse.status}`)

    if (contactExists) {
      // Actualizar el contacto existente (añadir a la lista)
      const updateContactUrl = `https://api.brevo.com/v3/contacts`

      console.log(`Actualizando contacto existente: ${updateContactUrl}`)
      const updateResponse = await fetch(updateContactUrl, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "api-key": API_KEY,
        },
        body: JSON.stringify({
          email,
          listIds: [listIdNumber],
          updateEnabled: true,
        }),
      })

      if (!updateResponse.ok) {
        const errorData = await updateResponse.json().catch(() => ({}))
        console.error(`Error al actualizar contacto: ${updateResponse.status}`, errorData)
        return NextResponse.json(
          { message: errorData.message || `Error al actualizar el contacto: ${updateResponse.statusText}` },
          { status: updateResponse.status },
        )
      }

      return NextResponse.json({ message: "Suscripción actualizada correctamente" }, { status: 200 })
    } else {
      // Crear un nuevo contacto
      const createContactUrl = "https://api.brevo.com/v3/contacts"

      console.log(`Creando nuevo contacto: ${createContactUrl}`)
      const createResponse = await fetch(createContactUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "api-key": API_KEY,
        },
        body: JSON.stringify({
          email,
          listIds: [listIdNumber],
          updateEnabled: true,
        }),
      })

      if (!createResponse.ok) {
        const errorData = await createResponse.json().catch(() => ({}))
        console.error(`Error al crear contacto: ${createResponse.status}`, errorData)
        return NextResponse.json(
          { message: errorData.message || `Error al crear el contacto: ${createResponse.statusText}` },
          { status: createResponse.status },
        )
      }

      return NextResponse.json({ message: "¡Suscripción exitosa!" }, { status: 201 })
    }
  } catch (error) {
    console.error("Error en la API de suscripción:", error)
    return NextResponse.json(
      { message: `Error interno del servidor: ${error instanceof Error ? error.message : String(error)}` },
      { status: 500 },
    )
  }
}

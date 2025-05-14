import { NextResponse } from "next/server"
import mercadopago from "mercadopago"

// Configurar Mercado Pago con el token de acceso
mercadopago.configure({
  access_token: process.env.MERCADO_PAGO_ACCESS_TOKEN || "",
})

export async function POST(request: Request) {
  try {
    // Verificar que el token de acceso esté configurado
    if (!process.env.MERCADO_PAGO_ACCESS_TOKEN) {
      console.error("Error: MERCADO_PAGO_ACCESS_TOKEN no está configurado")
      return NextResponse.json({ success: false, message: "Falta configuración de Mercado Pago" }, { status: 500 })
    }

    // Obtener los datos del cuerpo de la solicitud
    const data = await request.json()
    const { name, email, description, amount } = data

    // Validar datos requeridos
    if (!name || !email || !description || !amount) {
      return NextResponse.json(
        { success: false, message: "Faltan datos requeridos para crear el pago" },
        { status: 400 },
      )
    }

    // Crear la preferencia de pago
    const preference = {
      items: [
        {
          title: description,
          quantity: 1,
          currency_id: "ARS",
          unit_price: amount,
        },
      ],
      payer: {
        name,
        email,
      },
      back_urls: {
        success: `${process.env.NEXT_PUBLIC_BASE_URL || "https://goatsports.ar"}/inscripcion-campus/success`,
        failure: `${process.env.NEXT_PUBLIC_BASE_URL || "https://goatsports.ar"}/inscripcion-campus/failure`,
        pending: `${process.env.NEXT_PUBLIC_BASE_URL || "https://goatsports.ar"}/inscripcion-campus/pending`,
      },
      auto_return: "approved",
      statement_descriptor: "GOAT Sports Campus",
      external_reference: `CAMPUS_${Date.now()}`,
    }

    // Crear la preferencia en Mercado Pago
    const response = await mercadopago.preferences.create(preference)

    // Generar el código QR para el pago
    let qrCodeBase64 = null
    try {
      if (response.body.id) {
        const qrResponse = await mercadopago.qr.create({
          external_reference: preference.external_reference,
          amount: amount,
          description: description,
          payer_email: email,
        })

        if (qrResponse.body.qr_data) {
          // Generar imagen QR usando una API pública
          const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(
            qrResponse.body.qr_data,
          )}`

          // Convertir la imagen QR a base64
          const qrImageResponse = await fetch(qrCodeUrl)
          const qrImageBuffer = await qrImageResponse.arrayBuffer()
          qrCodeBase64 = Buffer.from(qrImageBuffer).toString("base64")
        }
      }
    } catch (qrError) {
      console.error("Error al generar el código QR:", qrError)
      // No fallamos por esto, simplemente no mostramos el QR
    }

    // Devolver la respuesta con los datos del pago
    return NextResponse.json({
      success: true,
      message: "Pago creado correctamente",
      paymentId: response.body.id,
      checkoutUrl: response.body.init_point,
      qrCodeBase64,
    })
  } catch (error) {
    console.error("Error al crear el pago:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Error al crear el pago",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}

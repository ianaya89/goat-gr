"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { CheckCircle } from "lucide-react"

export default function PaymentSuccess() {
  // Efecto para registrar el pago exitoso
  useEffect(() => {
    const registerPaymentSuccess = async () => {
      // Obtener los parámetros de la URL
      const urlParams = new URLSearchParams(window.location.search)
      const paymentId = urlParams.get("payment_id")
      const status = urlParams.get("status")
      const externalReference = urlParams.get("external_reference")

      if (paymentId && status === "approved") {
        try {
          // Registrar el pago exitoso en tu sistema
          await fetch("/api/register-payment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              paymentId,
              status,
              externalReference,
            }),
          })
        } catch (error) {
          console.error("Error al registrar el pago exitoso:", error)
        }
      }
    }

    registerPaymentSuccess()
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8 flex flex-col items-center">
                <div className="bg-green-100 p-4 rounded-full mb-6">
                  <CheckCircle className="h-16 w-16 text-green-600" />
                </div>

                <h1 className="text-3xl font-bold text-center mb-4">¡Pago Exitoso!</h1>

                <p className="text-gray-600 text-center mb-8">
                  Tu pago ha sido procesado correctamente. Tu inscripción al Campus de Invierno 2024 está confirmada.
                  Recibirás un correo electrónico con los detalles de tu inscripción.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg w-full mb-8">
                  <h2 className="text-lg font-semibold mb-4">Detalles de la inscripción:</h2>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-gray-600">Evento:</span>
                      <span className="font-medium">Campus de Invierno 2024</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Fecha:</span>
                      <span className="font-medium">15-30 Julio, 2024</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Lugar:</span>
                      <span className="font-medium">Buenos Aires, Argentina</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Estado del pago:</span>
                      <span className="font-medium text-green-600">Completado</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full">
                  <Link href="/" className="w-full">
                    <Button variant="outline" className="w-full">
                      Volver al inicio
                    </Button>
                  </Link>
                  <Link href="/#campus" className="w-full">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Ver más campus</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

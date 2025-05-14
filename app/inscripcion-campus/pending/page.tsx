"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Clock } from "lucide-react"

export default function PaymentPending() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8 flex flex-col items-center">
                <div className="bg-yellow-100 p-4 rounded-full mb-6">
                  <Clock className="h-16 w-16 text-yellow-600" />
                </div>

                <h1 className="text-3xl font-bold text-center mb-4">Pago en Proceso</h1>

                <p className="text-gray-600 text-center mb-8">
                  Tu pago está siendo procesado. Tu inscripción ha sido registrada, pero el pago está pendiente de
                  confirmación. Te notificaremos por correo electrónico cuando se complete el proceso.
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
                      <span className="font-medium text-yellow-600">Pendiente</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full">
                  <Link href="/" className="w-full">
                    <Button variant="outline" className="w-full">
                      Volver al inicio
                    </Button>
                  </Link>
                  <Link href="/#contact" className="w-full">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Contactar soporte</Button>
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

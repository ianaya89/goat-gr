"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { AlertCircle } from "lucide-react"

export default function PaymentFailure() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8 flex flex-col items-center">
                <div className="bg-red-100 p-4 rounded-full mb-6">
                  <AlertCircle className="h-16 w-16 text-red-600" />
                </div>

                <h1 className="text-3xl font-bold text-center mb-4">Pago no completado</h1>

                <p className="text-gray-600 text-center mb-8">
                  Hubo un problema al procesar tu pago. Tu inscripción ha sido registrada, pero el pago no se ha
                  completado. Puedes intentar nuevamente o elegir otro método de pago.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg w-full mb-8">
                  <h2 className="text-lg font-semibold mb-4">¿Qué puedo hacer ahora?</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 flex-shrink-0">1</span>
                      <span>Intenta nuevamente con otro método de pago</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 flex-shrink-0">2</span>
                      <span>Verifica que tu tarjeta tenga fondos suficientes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 flex-shrink-0">3</span>
                      <span>Contacta a tu banco si el problema persiste</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 flex-shrink-0">4</span>
                      <span>Comunícate con nosotros para asistencia</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full">
                  <Link href="/inscripcion-campus" className="w-full">
                    <Button variant="outline" className="w-full">
                      Volver al formulario
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

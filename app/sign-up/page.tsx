"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import RegistrationForm from "@/components/registration-form"

export default function PlayerRegistrationPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmitSuccess = () => {
    setIsSubmitting(false)
    setIsSuccess(true)

    // Redirigir a la página principal después de 5 segundos
    setTimeout(() => {
      router.push("/")
    }, 5000)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link href="/" className="text-blue-600 hover:underline flex items-center">
                ← Volver a Inicio
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 relative">
                <img
                  src="/images/sign-up.jpg"
                  alt="Entrenamiento de hockey femenino"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h1 className="text-3xl font-bold">Formulario de Alta de Jugadoras</h1>
                    <p className="text-lg">Completa tus datos para unirte a GOAT Sports</p>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8">
                {isSuccess ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-md">
                    <h3 className="font-bold text-lg mb-2">¡Registro Exitoso!</h3>
                    <p className="mb-4">
                      Tu solicitud ha sido registrada correctamente. En breve nos pondremos en contacto contigo para
                      confirmar los detalles y coordinar tu primera sesión.
                    </p>
                    <p className="text-sm">Serás redirigido a la página principal en 5 segundos...</p>
                  </div>
                ) : (
                  <RegistrationForm
                    onSubmitStart={() => setIsSubmitting(true)}
                    onSubmitSuccess={handleSubmitSuccess}
                    isSubmitting={isSubmitting}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

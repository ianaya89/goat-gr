"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function CampusRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    experience: "",
    club: "",
    paymentMethod: "",
  })

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error" | "payment_pending">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [showQR, setShowQR] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handlePaymentMethodChange = (value: string) => {
    setFormData((prev) => ({ ...prev, paymentMethod: value }))
    // Si selecciona mercadopago, mostrar el QR
    setShowQR(value === "mercadopago")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")

    try {
      // Enviar a tu endpoint de API
      const response = await fetch("/api/campus-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || "Error al enviar el formulario")
      }

      setStatus("success")
      // Limpiar el formulario después del éxito
      setFormData({
        name: "",
        email: "",
        phone: "",
        age: "",
        experience: "",
        club: "",
        paymentMethod: "",
      })
    } catch (error) {
      console.error("Error al enviar la inscripción:", error)
      setStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "Error al procesar la inscripción")
    }
  }

  // Función para manejar la finalización del pago
  const handlePaymentComplete = () => {
    setStatus("success")
    setShowQR(false)
    // Limpiar el formulario después del éxito
    setFormData({
      name: "",
      email: "",
      phone: "",
      age: "",
      experience: "",
      club: "",
      paymentMethod: "",
    })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <Link href="/#campus" className="text-blue-600 hover:underline flex items-center">
                ← Volver a Campus
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-64 relative">
                <img
                  src="/placeholder.svg?key=upcoming-campus"
                  alt="Campus de Invierno 2025"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h1 className="text-3xl font-bold">Inscripción: Campus de Invierno 2025</h1>
                    <p className="text-lg">28 de Julio al 1 de Agosto, 2025 • Buenos Aires, Argentina</p>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-xl font-bold mb-4">Información del Campus</h2>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 flex-shrink-0">✓</span>
                        <span>Entrenamiento técnico y táctico diario</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 flex-shrink-0">✓</span>
                        <span>Sesiones con entrenadores internacionales</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 flex-shrink-0">✓</span>
                        <span>Análisis de video personalizado</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 flex-shrink-0">✓</span>
                        <span>Competencias y partidos amistosos</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 flex-shrink-0">✓</span>
                        <span>Alojamiento y comidas incluidas</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 flex-shrink-0">✓</span>
                        <span>Kit de entrenamiento GOAT Sports</span>
                      </li>
                    </ul>

                    <div className="mt-6">
                      <h3 className="font-semibold mb-2">Precio:</h3>
                      <p className="text-2xl font-bold text-blue-600">$120.000 ARS</p>
                      <p className="text-sm text-gray-500">Posibilidad de pago en cuotas</p>
                    </div>

                    {/* QR de Mercado Pago (visible solo cuando se selecciona) */}
                    {showQR && (
                      <div className="mt-6 p-4 border border-gray-200 rounded-lg">
                        <h3 className="font-semibold text-center mb-3">Pagar con Mercado Pago</h3>
                        <div className="flex justify-center mb-3">
                          <img src="/mercadopago-qr.png" alt="Código QR de Mercado Pago" className="w-48 h-48" />
                        </div>
                        <p className="text-sm text-gray-600 text-center">
                          Escanea este código QR con la app de Mercado Pago para pagar
                        </p>
                      </div>
                    )}
                  </div>

                  <div>
                    {status === "payment_pending" ? (
                      <div className="bg-white border border-gray-200 p-6 rounded-md">
                        <h3 className="font-bold text-lg mb-4 text-center">Pagar con Mercado Pago</h3>

                        <div className="flex flex-col items-center justify-center mb-6">
                          <div className="mb-4">
                            <img src="/mercadopago-qr.png" alt="Código QR para pago" className="w-64 h-64" />
                          </div>

                          <p className="text-sm text-gray-600 mb-4 text-center">
                            Escanea el código QR con la app de Mercado Pago para completar tu pago
                          </p>
                        </div>

                        <div className="mt-6 flex flex-col space-y-4">
                          <Button onClick={handlePaymentComplete} className="w-full bg-blue-600 hover:bg-blue-700">
                            Ya realicé el pago
                          </Button>

                          <Button onClick={() => setStatus("idle")} variant="outline" className="w-full">
                            Volver al formulario
                          </Button>
                        </div>
                      </div>
                    ) : status === "success" ? (
                      <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-md">
                        <h3 className="font-bold text-lg mb-2">¡Inscripción Exitosa!</h3>
                        <p className="mb-4">
                          Tu inscripción al Campus de Invierno 2024 ha sido registrada correctamente. En breve nos
                          pondremos en contacto contigo para confirmar los detalles
                          {formData.paymentMethod !== "mercadopago" && " y el proceso de pago"}.
                        </p>
                        <Button onClick={() => setStatus("idle")} className="bg-green-600 hover:bg-green-700">
                          Realizar otra inscripción
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <h2 className="text-xl font-bold mb-4">Formulario de Inscripción</h2>

                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Nombre completo
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                            required
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                            required
                          />
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Teléfono
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                            required
                          />
                        </div>

                        <div>
                          <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                            Edad
                          </label>
                          <input
                            type="number"
                            id="age"
                            name="age"
                            min="8"
                            max="30"
                            value={formData.age}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                            required
                          />
                        </div>

                        <div>
                          <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                            Nivel de experiencia
                          </label>
                          <select
                            id="experience"
                            name="experience"
                            value={formData.experience}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                            required
                          >
                            <option value="">Seleccionar nivel</option>
                            <option value="Principiante">Principiante</option>
                            <option value="Intermedio">Intermedio</option>
                            <option value="Avanzado">Avanzado</option>
                            <option value="Elite">Elite</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="club" className="block text-sm font-medium text-gray-700 mb-1">
                            Club actual (opcional)
                          </label>
                          <input
                            type="text"
                            id="club"
                            name="club"
                            value={formData.club}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                          />
                        </div>

                        {/* Método de pago */}
                        <div className="mt-6">
                          <label className="block text-sm font-medium text-gray-700 mb-3">Método de pago</label>
                          <RadioGroup
                            value={formData.paymentMethod}
                            onValueChange={handlePaymentMethodChange}
                            className="flex flex-col space-y-3"
                            required
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="cash" id="cash" />
                              <Label htmlFor="cash" className="cursor-pointer">
                                Efectivo (pago en persona)
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="transfer" id="transfer" />
                              <Label htmlFor="transfer" className="cursor-pointer">
                                Transferencia bancaria
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="mercadopago" id="mercadopago" />
                              <Label htmlFor="mercadopago" className="cursor-pointer">
                                Mercado Pago (pago online)
                              </Label>
                            </div>
                          </RadioGroup>
                        </div>

                        {status === "error" && (
                          <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-md">
                            <p>
                              {errorMessage ||
                                "Hubo un error al procesar tu inscripción. Por favor, intenta nuevamente."}
                            </p>
                          </div>
                        )}

                        <div className="pt-4">
                          <Button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700"
                            disabled={status === "submitting"}
                          >
                            {status === "submitting" ? (
                              <span className="flex items-center justify-center">
                                <svg
                                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                  ></circle>
                                  <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                  ></path>
                                </svg>
                                Procesando...
                              </span>
                            ) : (
                              "Completar Inscripción"
                            )}
                          </Button>
                        </div>
                      </form>
                    )}
                  </div>
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

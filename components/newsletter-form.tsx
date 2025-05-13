"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) return

    setStatus("loading")

    try {
      // Enviar a tu endpoint de API que se conectará con Brevo
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const result = await response.json()

      if (!response.ok) {
        console.error("Error de suscripción:", result)
        throw new Error(result.message || `Error ${response.status}: ${response.statusText}`)
      }

      setStatus("success")
      setEmail("")
    } catch (error) {
      console.error("Error completo:", error)
      setStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "Hubo un error al suscribirte")
    }
  }

  return (
    <div className="max-w-xl mx-auto text-center">
      <h2 className="text-2xl tablet:text-3xl font-bold mb-4">Mantente Actualizado</h2>
      <p className="text-gray-600 mb-6">
        Suscríbete a nuestro boletín para recibir consejos de entrenamiento, anuncios de eventos y ofertas exclusivas.
      </p>

      {status === "success" ? (
        <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md">
          <p className="font-medium">¡Gracias por suscribirte!</p>
          <p className="text-sm mt-1">Te has suscrito correctamente a nuestro newsletter.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingresa tu email"
            className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
          <Button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto h-[50px]"
            disabled={status === "loading"}
          >
            {status === "loading" ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Suscribiendo...
              </span>
            ) : (
              <span className="flex items-center">
                Suscribirse <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            )}
          </Button>
        </form>
      )}

      {status === "error" && <div className="mt-2 text-red-600 text-sm">{errorMessage}</div>}
    </div>
  )
}

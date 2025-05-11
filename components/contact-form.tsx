"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Send } from "lucide-react"

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    submitted: false,
    submitting: false,
    error: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setFormState((prev) => ({ ...prev, submitting: true }))

    // Simulación de envío de formulario
    setTimeout(() => {
      setFormState((prev) => ({
        ...prev,
        submitted: true,
        submitting: false,
      }))
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  if (formState.submitted) {
    return (
      <Card className="bg-white/10 backdrop-blur-sm border-white/20">
        <CardContent className="p-6 text-center">
          <div className="bg-green-500/20 text-white p-4 rounded-lg mb-4">
            <h3 className="text-xl font-bold mb-2">¡Mensaje Enviado!</h3>
            <p>Gracias por contactarnos. Nos pondremos en contacto contigo lo antes posible.</p>
          </div>
          <Button
            onClick={() => setFormState((prev) => ({ ...prev, submitted: false }))}
            className="bg-white text-blue-600 hover:bg-white/90"
          >
            Enviar otro mensaje
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-white/10 backdrop-blur-sm border-white/20">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
                Nombre completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                placeholder="Tu nombre"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                placeholder="tu@email.com"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-white mb-1">
              Teléfono (opcional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formState.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="+54 9 11 1234 5678"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="¿En qué podemos ayudarte?"
              required
            ></textarea>
          </div>

          <div className="flex justify-center pt-2">
            <Button
              type="submit"
              disabled={formState.submitting}
              className="bg-white text-blue-600 hover:bg-white/90 px-8 py-2 h-auto"
            >
              {formState.submitting ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-blue-600"
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
                  Enviando...
                </span>
              ) : (
                <span className="flex items-center">
                  <Send className="mr-2 h-4 w-4" />
                  Enviar mensaje
                </span>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

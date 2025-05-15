"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { getWhatsAppLink } from "@/utils/whatsapp-link"

// Obtener el enlace de WhatsApp correctamente formateado
const whatsappLink = getWhatsAppLink(
  "Hola, me gustaria obtener mas informacion sobre los planes de entrenamiento. Muchas gracias!",
)

// Array de objetivos para el slogan dinámico
const objetivos = [
  "aprender a jugar",
  "mejorar tu técnica",
  "dominar el juego",
  "competir al más alto nivel",
  "llegar a la selección",
  "superar tus límites",
  "convertirte en profesional",
  "desarrollar tu potencial",
  "formar parte de un equipo",
]

export default function HeroSection() {
  const [currentObjetivo, setCurrentObjetivo] = useState(0)
  const [displayedObjetivo, setDisplayedObjetivo] = useState(objetivos[0])
  const [isChanging, setIsChanging] = useState(false)

  // Rotate objetivos every 3 seconds with smooth transition
  useEffect(() => {
    const rotateObjetivos = () => {
      setIsChanging(true)

      setTimeout(() => {
        const nextIndex = (currentObjetivo + 1) % objetivos.length
        setCurrentObjetivo(nextIndex)
        setDisplayedObjetivo(objetivos[nextIndex])

        setTimeout(() => {
          setIsChanging(false)
        }, 300)
      }, 500)
    }

    const interval = setInterval(rotateObjetivos, 3500)
    return () => clearInterval(interval)
  }, [currentObjetivo])

  // Función para manejar el scroll suave a la sección de programas
  const scrollToPrograms = (e: React.MouseEvent) => {
    e.preventDefault()
    const programsSection = document.getElementById("services")
    if (programsSection) {
      programsSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section
      className="relative py-16 md:py-24 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #00237c 0%, #1a56db 50%, #3b82f6 100%)",
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-24 w-96 h-96 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-24 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl tablet:text-6xl font-bold text-white">
          <span className="block mb-4">Entrena con GOAT para</span>

          {/* Contenedor para el texto animado */}
          <div className="relative h-[1.5em] flex items-center justify-center mb-6 overflow-hidden">
            {/* Texto con gradiente */}
            <span
              className={`
                inline-block
                text-5xl sm:text-6xl tablet:text-7xl
                transition-all duration-500 ease-in-out
                ${isChanging ? "opacity-0 transform translate-y-8" : "opacity-100 transform translate-y-0"}
              `}
              style={{
                background: "linear-gradient(to right, white, #6A5ACD, white)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                fontWeight: "800",
                animation: "gradient 3s linear infinite",
                backgroundSize: "200% auto",
              }}
            >
              {displayedObjetivo}
            </span>
          </div>
        </h1>

        <p className="text-xl text-white/90 max-w-2xl mb-8">
          No importa cual sea tu objetivo, nosotros tenemos un plan para llevarlo a cabo. Programas grupales y
          personalizados, diseñados para llevarte al siguiente nivel, sea cual sea tu punto de partida.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-white text-blue-700 hover:bg-blue-50 flex items-center gap-2 w-full sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" />
              Reservar una Sesión
            </Button>
          </a>
          <Button
            size="lg"
            className="bg-transparent text-white hover:bg-white/10 border border-white w-full sm:w-auto"
            onClick={scrollToPrograms}
          >
            Explorar Programas
          </Button>
        </div>
      </div>
    </section>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, MessageCircle } from "lucide-react"

// Mensaje predeterminado codificado para URL
const whatsappMessage = encodeURIComponent(
  "Hola, me gustaria obtener mas informacion sobre los planes de entrenamiento. Muchas gracias!",
)
const whatsappLink = `https://wa.me/5491126578585?text="${whatsappMessage}"`

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Función para manejar el scroll suave
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      // Cerrar el menú móvil si está abierto
      if (isMenuOpen) {
        setIsMenuOpen(false)
      }

      // Scroll suave con animación
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })

      // Actualizar la URL sin recargar la página
      window.history.pushState(null, "", `#${targetId}`)
    }
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img src="/images/goat-sports-logo.png" alt="GOAT Sports Logo" className="h-8 md:h-10 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-gray-600 hover:text-blue-600 font-medium"
              onClick={(e) => handleSmoothScroll(e, "services")}
            >
              Programas
            </a>
            <a
              href="#staff"
              className="text-gray-600 hover:text-blue-600 font-medium"
              onClick={(e) => handleSmoothScroll(e, "staff")}
            >
              Staff
            </a>
            <a
              href="#training-center"
              className="text-gray-600 hover:text-blue-600 font-medium"
              onClick={(e) => handleSmoothScroll(e, "training-center")}
            >
              Centro de Entrenamiento
            </a>
            <a
              href="#campus"
              className="text-gray-600 hover:text-blue-600 font-medium"
              onClick={(e) => handleSmoothScroll(e, "campus")}
            >
              Campus
            </a>
            <a
              href="#consulting"
              className="text-gray-600 hover:text-blue-600 font-medium"
              onClick={(e) => handleSmoothScroll(e, "consulting")}
            >
              Consultoría
            </a>
            <a
              href="#testimonials"
              className="text-gray-600 hover:text-blue-600 font-medium"
              onClick={(e) => handleSmoothScroll(e, "testimonials")}
            >
              Testimonios
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-blue-600 font-medium"
              onClick={(e) => handleSmoothScroll(e, "contact")}
            >
              Contacto
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Anotate!
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <a
              href="#services"
              className="block text-gray-600 hover:text-blue-600 font-medium py-2"
              onClick={(e) => handleSmoothScroll(e, "services")}
            >
              Programas
            </a>
            <a
              href="#staff"
              className="block text-gray-600 hover:text-blue-600 font-medium py-2"
              onClick={(e) => handleSmoothScroll(e, "staff")}
            >
              Staff
            </a>
            <a
              href="#training-center"
              className="block text-gray-600 hover:text-blue-600 font-medium py-2"
              onClick={(e) => handleSmoothScroll(e, "training-center")}
            >
              Centro de Entrenamiento
            </a>
            <a
              href="#campus"
              className="block text-gray-600 hover:text-blue-600 font-medium py-2"
              onClick={(e) => handleSmoothScroll(e, "campus")}
            >
              Campus
            </a>
            <a
              href="#consulting"
              className="block text-gray-600 hover:text-blue-600 font-medium py-2"
              onClick={(e) => handleSmoothScroll(e, "consulting")}
            >
              Consultoría
            </a>
            <a
              href="#testimonials"
              className="block text-gray-600 hover:text-blue-600 font-medium py-2"
              onClick={(e) => handleSmoothScroll(e, "testimonials")}
            >
              Testimonios
            </a>
            <a
              href="#contact"
              className="block text-gray-600 hover:text-blue-600 font-medium py-2"
              onClick={(e) => handleSmoothScroll(e, "contact")}
            >
              Contacto
            </a>
            <div className="pt-4 flex flex-col space-y-2">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="bg-blue-600 hover:bg-blue-700 w-full flex items-center justify-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Anotate!
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

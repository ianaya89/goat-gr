"use client"

import type React from "react"

import { useState, useEffect } from "react"
import StaffCarousel from "./staff-carousel"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react"

interface StaffMember {
  id: number
  name: string
  position: string
  bio: string
  imageQuery: string
}

export default function StaffSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [slidesToShow, setSlidesToShow] = useState(4)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  // Ajustar el número de slides según el tamaño de la pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1)
      } else if (window.innerWidth < 980) {
        setSlidesToShow(2)
      } else if (window.innerWidth < 1280) {
        setSlidesToShow(3)
      } else {
        setSlidesToShow(4)
      }
    }

    // Establecer el valor inicial
    handleResize()

    // Añadir event listener
    window.addEventListener("resize", handleResize)

    // Limpiar event listener
    return () => window.removeEventListener("resize", handleResize)
  }, [])


  return (
    <div className="container mx-auto px-4">
      {/* Enhanced About Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl tablet:text-4xl font-bold mb-4">Sobre Nosotros</h2>
        <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed text-lg">
          Somos socios, amigos y compañeros de equipo, motivados por la pasión de acompañar a deportistas en el
          camino hacia sus sueños. Nos propusimos crear un lugar donde poder darte las herramientas, respaldo y
          acompañamiento que necesitas, para que alcances cualquier meta que propongas.
          <br />
          <br />
          En GOAT Sports nos dedicamos a formar jugadores de hockey sobre césped que destaquen dentro y fuera de la
          cancha. Con un enfoque integral trabajamos tu técnica, visión táctica, condición física y fortaleza mental.
        </p>
      </div>

      {/* Enhanced About Section with modern styling */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
          <img
            src="/images/team-training.jpeg"
            alt="Equipo de Entrenadores de GOAT Sports"
            className="relative rounded-2xl shadow-2xl w-full transform group-hover:scale-105 transition-transform duration-500 hover-lift"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div className="space-y-6">
          {[
            {
              title: "Entrenadores Expertos",
              description: "Nuestro equipo de entrenadores incluye ex jugadores nacionales e instructores certificados con años de experiencia."
            },
            {
              title: "Desarrollo Personalizado",
              description: "Creamos planes de entrenamiento individualizados basados en tus habilidades actuales y objetivos futuros."
            },
            {
              title: "Instalaciones de primer nivel",
              description: "Entrena en instalaciones premium con el equipo y la tecnología más avanzados."
            },
            {
              title: "Resultados Probados",
              description: "Nuestros atletas han logrado resultados a nivel universitario, nacional e internacional."
            }
          ].map((item, index) => (
            <div key={index} className="flex items-start group hover:bg-blue-50/50 p-4 rounded-xl transition-all duration-300">
              <div className="p-2 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors duration-300 mr-4">
                <CheckCircle2 className="h-5 w-5 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 group-hover:text-blue-700 transition-colors duration-300">{item.title}</h4>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Staff Team Section */}
      <div className="relative">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-purple-100/30 rounded-full blur-2xl animate-float animation-delay-2000"></div>

        <div className="text-center mb-8 relative z-10">
          <h3 className="text-3xl font-bold mb-4">Nuestro Equipo</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
            Conoce a las personas que se encargarán de acompañarte en tu crecimiento deportivo. Cada uno de nuestros entrenadores aporta su experiencia única y pasión por el deporte para ayudarte a alcanzar tu máximo potencial.
          </p>
        </div>

        <div className="relative z-10">
          <StaffCarousel />
        </div>
      </div>
    </div>
  )
}

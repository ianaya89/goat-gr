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
      <div className="text-center mb-16">
        <h2 className="text-3xl tablet:text-4xl font-bold mb-4">Sobre Nosotros</h2>
        <p className="text-gray-600 max-w-4xl mx-auto">
          Somos socios, amigos y compañero de equipo, motivados por la pasión de acompañar a deportistas en el
          camino hacia sus sueños. Nos propusimos crear un lugar donde poder darte las herramientas, respaldo y
          acompañamiento que necesitas, para que alcances cualquier meta que propongas.
          <br />
          <br />
          En GOAT Sports nos dedicamos a formar jugadores de hockey sobre césped que destaquen dentro y fuera de la
          cancha. Con un enfoque integral trabajamos tu técnica, visión táctica, condición física y fortaleza mental.
        </p>
      </div>
      {/* About Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <img
            src="/images/team-training.png"
            alt="Equipo de Entrenadores de GOAT Sports"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        <div>
          <div className="space-y-4">
            <div className="flex items-start">
              <CheckCircle2 className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-lg">Entrenadores Expertos</h4>
                <p className="text-gray-600">
                  Nuestro equipo de entrenadores incluye ex jugadores nacionales e instructores certificados con años de
                  experiencia.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle2 className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-lg">Desarrollo Personalizado</h4>
                <p className="text-gray-600">
                  Creamos planes de entrenamiento individualizados basados en tus habilidades actuales y objetivos
                  futuros.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle2 className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-lg">Instalaciones de primer nivel</h4>
                <p className="text-gray-600">
                  Entrena en instalaciones premium con el equipo y la tecnología más avanzados.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle2 className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-lg">Resultados Probados</h4>
                <p className="text-gray-600">
                  Nuestros atletas han logrado resultados a nivel universitario, nacional e internacional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Staff Carousel */}
      <h3 className="text-2xl font-bold mb-8 text-center">Equipo de Entrenadores</h3>

      <StaffCarousel />
    </div>
  )
}

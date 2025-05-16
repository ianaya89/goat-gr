"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface StaffMember {
  id: number
  name: string
  position: string
  bio: string
  imageQuery: string
}

const staffMembers: StaffMember[] = [
  {
    id: 1,
    name: "Ignacio Anaya",
    position: "Co-Fundador",
    bio: "bio",
    imageQuery: "professional female field hockey coach",
  },
  {
    id: 2,
    name: "Santiago Tarazona",
    position: "Co-Fundador",
    bio: "bio",
    imageQuery: "male field hockey coach with clipboard",
  },
  {
    id: 3,
    name: "Gonzalo Basualdo",
    position: "Co-Fundador",
    bio: "bio",
    imageQuery: "young female field hockey coach with children",
  },
  {
    id: 4,
    name: "Thomas Habif",
    position: "Co-Fundador",
    bio: "bio",
    imageQuery: "sports performance analyst with laptop",
  },
  {
    id: 5,
    name: "Olivia Williams",
    position: "Especialista en Portería",
    bio: "Ex portera internacional con formación especializada en técnicas de portería. Olivia desarrolla programas de entrenamiento personalizados para porteros de todos los niveles.",
    imageQuery: "female field hockey goalkeeper coach",
  },
  {
    id: 6,
    name: "Carlos Mendoza",
    position: "Entrenador de Rugby",
    bio: "Ex jugador profesional con amplia experiencia internacional. Carlos se especializa en técnicas avanzadas de juego y estrategias de equipo para rugby.",
    imageQuery: "professional rugby coach",
  },
  {
    id: 7,
    name: "Laura Fernández",
    position: "Preparadora Física",
    bio: "Licenciada en Educación Física con especialización en alto rendimiento. Laura diseña programas personalizados para optimizar la condición física y prevenir lesiones.",
    imageQuery: "female sports physical trainer",
  },
  {
    id: 8,
    name: "Martín Gómez",
    position: "Entrenador de Fútbol",
    bio: "Ex futbolista profesional con licencia de entrenador UEFA. Martín combina técnicas modernas con su amplia experiencia para desarrollar jugadores completos.",
    imageQuery: "professional soccer coach",
  },
  {
    id: 9,
    name: "Alejandra Vázquez",
    position: "Nutricionista Deportiva",
    bio: "Especialista en nutrición deportiva con maestría en ciencias del deporte. Alejandra desarrolla planes nutricionales personalizados para optimizar el rendimiento y la recuperación.",
    imageQuery: "sports nutritionist female",
  },
  {
    id: 10,
    name: "Roberto Sánchez",
    position: "Fisioterapeuta",
    bio: "Fisioterapeuta deportivo con experiencia en equipos de élite. Roberto se especializa en la prevención y rehabilitación de lesiones específicas de deportes de campo.",
    imageQuery: "sports physiotherapist male",
  },
  {
    id: 11,
    name: "Lucía Morales",
    position: "Psicóloga Deportiva",
    bio: "Psicóloga especializada en rendimiento deportivo y gestión del estrés competitivo. Lucía trabaja con los atletas para desarrollar mentalidad ganadora y resiliencia.",
    imageQuery: "sports psychologist female",
  },
]

export default function StaffCarousel() {
  const [currentPage, setCurrentPage] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  // Number of cards per page
  const cardsPerPage = 4

  // Calculate total number of pages
  const totalPages = Math.ceil(staffMembers.length / cardsPerPage)

  // The minimum swipe distance (in px) to trigger a slide change
  const minSwipeDistance = 50

  const nextPage = () => {
    setCurrentPage((prevPage) => (prevPage === totalPages - 1 ? 0 : prevPage + 1))
  }

  const prevPage = () => {
    setCurrentPage((prevPage) => (prevPage === 0 ? totalPages - 1 : prevPage - 1))
  }

  const goToPage = (page: number) => {
    setCurrentPage(page)
  }

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      nextPage()
    } else if (isRightSwipe) {
      prevPage()
    }
  }

  // Get current page items
  const getCurrentPageItems = () => {
    const startIdx = currentPage * cardsPerPage
    const endIdx = Math.min(startIdx + cardsPerPage, staffMembers.length)
    return staffMembers.slice(startIdx, endIdx)
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-8">
      <div className="overflow-hidden" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentPage * 100}%)` }}
        >
          {Array.from({ length: totalPages }).map((_, pageIndex) => {
            const startIdx = pageIndex * cardsPerPage
            const pageItems = staffMembers.slice(
              startIdx,
              Math.min(startIdx + cardsPerPage, staffMembers.length)
            )

            return (
              <div key={pageIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {pageItems.map((member) => (
                    <Card key={member.id} className="border-none shadow-lg h-full">
                      <CardContent className="p-0 flex flex-col h-full">
                        <div className="w-full h-48">
                          <img
                            src={`/abstract-geometric-shapes.png?height=200&width=300&query=${member.imageQuery}`}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4 flex flex-col flex-grow">
                          <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                          <p className="text-blue-600 font-medium mb-2">{member.position}</p>
                          <p className="text-gray-600 text-sm">{member.bio}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border-gray-200 text-gray-700 rounded-full z-10 shadow-md md:-left-5"
        onClick={prevPage}
        aria-label="Página anterior"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border-gray-200 text-gray-700 rounded-full z-10 shadow-md md:-right-5"
        onClick={nextPage}
        aria-label="Página siguiente"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentPage ? "bg-blue-600" : "bg-gray-300"}`}
            aria-label={`Ir a página ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

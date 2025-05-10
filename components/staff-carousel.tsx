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
    name: "Sara Thompson",
    position: "Entrenadora Principal",
    bio: "Ex jugadora del equipo nacional con más de 15 años de experiencia como entrenadora. Sara se especializa en el desarrollo de habilidades técnicas y conciencia táctica.",
    imageQuery: "professional female field hockey coach",
  },
  {
    id: 2,
    name: "Miguel Rodríguez",
    position: "Director Técnico",
    bio: "Medallista olímpico de oro y especialista certificado en fuerza y acondicionamiento. Miguel se centra en desarrollar un rendimiento de élite a través de metodologías avanzadas de entrenamiento.",
    imageQuery: "male field hockey coach with clipboard",
  },
  {
    id: 3,
    name: "Emma Chen",
    position: "Entrenadora de Desarrollo Juvenil",
    bio: "Especializada en desarrollo juvenil con formación en psicología deportiva. Emma crea programas de entrenamiento atractivos que desarrollan confianza y habilidades en jóvenes atletas.",
    imageQuery: "young female field hockey coach with children",
  },
  {
    id: 4,
    name: "David Patel",
    position: "Analista de Rendimiento",
    bio: "Graduado en ciencias del deporte con experiencia en análisis de video y métricas de rendimiento. David ayuda a los jugadores a entender su juego a través de información basada en datos.",
    imageQuery: "sports performance analyst with laptop",
  },
  {
    id: 5,
    name: "Olivia Williams",
    position: "Especialista en Portería",
    bio: "Ex portera internacional con formación especializada en técnicas de portería. Olivia desarrolla programas de entrenamiento personalizados para porteros de todos los niveles.",
    imageQuery: "female field hockey goalkeeper coach",
  },
]

export default function StaffCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  // The minimum swipe distance (in px) to trigger a slide change
  const minSwipeDistance = 50

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === staffMembers.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? staffMembers.length - 1 : prevIndex - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
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
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 py-8">
      <div className="overflow-hidden" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {staffMembers.map((member) => (
            <div key={member.id} className="w-full flex-shrink-0">
              <Card className="border-none shadow-lg">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/3">
                      <img
                        src={`/abstract-geometric-shapes.png?height=400&width=300&query=${member.imageQuery}`}
                        alt={member.name}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="w-full md:w-2/3 p-6 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                      <p className="text-blue-600 font-medium mb-4">{member.position}</p>
                      <p className="text-gray-600">{member.bio}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border-gray-200 text-gray-700 rounded-full z-10 shadow-md md:-left-5"
        onClick={prevSlide}
        aria-label="Miembro anterior del equipo"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border-gray-200 text-gray-700 rounded-full z-10 shadow-md md:-right-5"
        onClick={nextSlide}
        aria-label="Siguiente miembro del equipo"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {staffMembers.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
            aria-label={`Ir a diapositiva ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

"use client"

import type React from "react"

import { useState, useEffect } from "react"
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
      } else if (window.innerWidth < 1024) {
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

  // Calcular el número total de páginas
  const totalPages = Math.ceil(staffMembers.length / slidesToShow)

  // The minimum swipe distance (in px) to trigger a slide change
  const minSwipeDistance = 50

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + slidesToShow
      return nextIndex >= staffMembers.length ? 0 : nextIndex
    })
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - slidesToShow
      return nextIndex < 0 ? Math.max(staffMembers.length - slidesToShow, 0) : nextIndex
    })
  }

  const goToPage = (pageIndex: number) => {
    const newIndex = pageIndex * slidesToShow
    setCurrentIndex(Math.min(newIndex, staffMembers.length - slidesToShow))
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

  // Calcular el índice de la página actual
  const currentPage = Math.floor(currentIndex / slidesToShow)

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Staff</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          En GOAT Sports, nos apasiona desarrollar jugadores de hockey sobre césped que sobresalgan tanto dentro como
          fuera del campo. Nuestro enfoque integral se centra en habilidades técnicas, conciencia táctica,
          acondicionamiento físico y resiliencia mental.
        </p>
      </div>
      {/* About Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <img
            src="/field-hockey-coach-team.png"
            alt="Equipo de Entrenadores de GOAT Sports"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-6">Sobre Nosotros</h3>

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
                <h4 className="font-semibold text-lg">Instalaciones de Última Generación</h4>
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
                  Nuestros ex alumnos han llegado a jugar a nivel universitario, nacional e internacional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Staff Carousel */}
      <h3 className="text-2xl font-bold mb-8 text-center">Nuestro Equipo de Entrenadores</h3>

      <div className="relative w-full max-w-6xl mx-auto px-4 py-8">
        <div className="overflow-hidden" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / slidesToShow}%)`,
              width: `${(staffMembers.length * 100) / slidesToShow}%`,
            }}
          >
            {staffMembers.map((member) => (
              <div key={member.id} className="px-2" style={{ width: `${100 / staffMembers.length}%` }}>
                <Card className="h-full border shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={`/abstract-geometric-shapes.png?height=300&width=400&query=${member.imageQuery}`}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 flex-grow flex flex-col">
                      <h4 className="text-lg font-bold text-gray-900">{member.name}</h4>
                      <p className="text-blue-600 font-medium text-sm mb-2">{member.position}</p>
                      <p className="text-gray-600 text-sm line-clamp-4 flex-grow">{member.bio}</p>
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
          aria-label="Miembros anteriores del equipo"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border-gray-200 text-gray-700 rounded-full z-10 shadow-md md:-right-5"
          onClick={nextSlide}
          aria-label="Siguientes miembros del equipo"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        {/* Dots Indicator - Ahora muestra páginas en lugar de slides individuales */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentPage ? "bg-blue-600" : "bg-gray-300"
              }`}
              aria-label={`Ir a página ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

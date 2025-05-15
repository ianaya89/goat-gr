"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, ImageIcon } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface CampusEvent {
  id: string
  title: string
  date: string
  location: string
  description: string
  imageUrl: string
  isPast: boolean
}

const campusEvents: CampusEvent[] = [
  {
    id: "summer-2023",
    title: "Campus de Verano 2023",
    date: "15-30 Enero, 2023",
    location: "Buenos Aires, Argentina",
    description:
      "Nuestro campus de verano 2023 fue un éxito rotundo con más de 100 participantes de todas las edades. Los jugadores disfrutaron de entrenamientos intensivos, partidos amistosos y sesiones con entrenadores internacionales.",
    imageUrl: "/images/campus-goalkeeper-training.jpg",
    isPast: true,
  },
  {
    id: "winter-2023",
    title: "Campus de Invierno 2023",
    date: "10-20 Julio, 2023",
    location: "Mendoza, Argentina",
    description:
      "El campus de invierno 2023 se centró en técnicas avanzadas y estrategias de juego en equipo. Los participantes trabajaron en condiciones de alta intensidad para mejorar su rendimiento en situaciones de presión.",
    imageUrl: "/images/campus-young-goalkeeper.jpg",
    isPast: true,
  },
  {
    id: "summer-2024",
    title: "Campus de Verano 2024",
    date: "10-25 Enero, 2024",
    location: "Córdoba, Argentina",
    description:
      "El campus de verano 2024 ofreció una experiencia inmersiva con entrenadores de élite internacional. Los participantes mejoraron significativamente sus habilidades técnicas y tácticas.",
    imageUrl: "/images/campus-coaches-players.jpg",
    isPast: true,
  },
]

const upcomingCampus = {
  id: "winter-2024",
  title: "Campus de Invierno 2024",
  date: "15-30 Julio, 2024",
  location: "Buenos Aires, Argentina",
  description:
    "¡No te pierdas nuestro próximo Campus de Invierno! Dos semanas intensivas de entrenamiento con los mejores coaches nacionales e internacionales. Perfecciona tu técnica, mejora tu condición física y desarrolla tu visión táctica en un ambiente profesional y divertido. Plazas limitadas, ¡reserva tu lugar ahora!",
  imageUrl: "/images/campus-group-photo.jpg",
  isPast: false,
}

export default function CampusSection() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming")
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({
      ...prev,
      [id]: true,
    }))
  }

  return (
    <div className="container mx-auto px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-24 w-96 h-96 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-24 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      {/* Tabs */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            className={`px-5 py-2.5 text-sm font-medium rounded-l-lg ${
              activeTab === "upcoming"
                ? "bg-white text-blue-600 font-semibold"
                : "bg-blue-700/50 text-white border border-white/20 hover:bg-blue-700/70"
            }`}
            onClick={() => setActiveTab("upcoming")}
          >
            Próximo Campus
          </button>
          <button
            type="button"
            className={`px-5 py-2.5 text-sm font-medium rounded-r-lg ${
              activeTab === "past"
                ? "bg-white text-blue-600 font-semibold"
                : "bg-blue-700/50 text-white border border-white/20 hover:bg-blue-700/70"
            }`}
            onClick={() => setActiveTab("past")}
          >
            Campus Anteriores
          </button>
        </div>
      </div>

      {/* Upcoming Campus */}
      {activeTab === "upcoming" && (
        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="h-64 lg:h-auto">
              <img
                src={
                  imageErrors[upcomingCampus.id]
                    ? "/placeholder.svg?height=400&width=800&query=hockey%20sports%20camp"
                    : upcomingCampus.imageUrl
                }
                alt="Campus de Invierno 2024 - Grupo de participantes en campo de hockey"
                className="w-full h-full object-cover"
                onError={() => handleImageError(upcomingCampus.id)}
              />
            </div>
            <div className="p-6 md:p-8 flex flex-col">
              <h3 className="text-2xl font-bold mb-4">{upcomingCampus.title}</h3>

              <div className="flex items-center mb-3">
                <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-gray-700">{upcomingCampus.date}</span>
              </div>

              <div className="flex items-center mb-4">
                <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-gray-700">{upcomingCampus.location}</span>
              </div>

              <p className="text-gray-600 mb-6">{upcomingCampus.description}</p>

              <div className="mt-auto">
                <Link href="/inscripcion-campus">
                  <Button className="bg-blue-600 hover:bg-blue-700 w-full md:w-auto">Inscribirse</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Past Campus - Cambiado a 1 columna para tablet y menos */}
      {activeTab === "past" && (
        <div className="grid grid-cols-1 tablet:grid-cols-3 gap-8">
          {campusEvents.map((event, index) => (
            <Card key={event.id} className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src={
                    imageErrors[event.id]
                      ? `/placeholder.svg?height=300&width=400&query=past%20hockey%20camp%20${index}`
                      : event.imageUrl
                  }
                  alt={`${event.title} - Imagen de participantes`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  onError={() => handleImageError(event.id)}
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">{event.title}</h3>

                <div className="flex items-center mb-2">
                  <Calendar className="h-4 w-4 text-blue-600 mr-2" />
                  <span className="text-sm text-gray-700">{event.date}</span>
                </div>

                <div className="flex items-center mb-4">
                  <MapPin className="h-4 w-4 text-blue-600 mr-2" />
                  <span className="text-sm text-gray-700">{event.location}</span>
                </div>

                <p className="text-gray-600 text-sm mb-6 line-clamp-3">{event.description}</p>

                <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                  <ImageIcon className="h-4 w-4 mr-2" /> Ver Galería
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

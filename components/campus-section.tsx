"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, ImageIcon } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import ImageWithFallback from "./image-with-fallback"

interface CampusEvent {
  id: string
  title: string
  date: string
  location: string
  description: string
  imageUrl: string
  isPast: boolean
  link?: string
}

const campusEvents: CampusEvent[] = [
  {
    id: "summer-2023",
    title: "Campus de Verano 2023",
    date: "15-30 Enero, 2023",
    location: "Ciudad de Buenos Aires",
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

const upcomingCampus: CampusEvent[] = [
  {
    id: "winter-2025",
    title: "Campus Invierno 2025 en GEBA",
    date: "28 de Julio al 1 de Agosto, 2025",
    location: "Ciudad de Buenos Aires",
    description:
      "¡No te pierdas nuestro próximo Campus de Invierno! de 2 a 3 dias de entrenamiento intensivos con los mejores coaches. Perfecciona tu técnica, mejora tu condición física y desarrolla tu visión táctica en un ambiente profesional y divertido. Cupos limitadas, ¡reserva tu lugar ahora!",
    imageUrl: "/images/campus-group-photo.jpg",
    isPast: false,
    link: "https://winter25.goatsports.ar",
  },
  {
    id: "gba-sur-2025",
    title: "Campus GBA Sur 2025 en MGRC",
    date: "21, 22 y 23 Julio, 2025",
    location: "Monte Grande, Provincia de Buenos Aires",
    description:
      "¡Ustedes lo pidieron y nosotros los escuchamos, llegamos a Zona Sur! Te presentamos el Campus de Invierno en Monte Grande Rugby Club. La misma experiencia de siempre, pero mas cerca tuyo.",
    imageUrl: "/images/campus-goalkeeper-training.jpg",
    isPast: false,
    link: "https://winter25.goatsports.ar",
  },
]

export default function CampusSection() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming")

  return (
    <div className="container mx-auto px-4">
      {/* Tabs */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          {/* <button
            type="button"
            className={`px-5 py-2.5 text-sm font-medium rounded-l-lg ${
              activeTab === "upcoming"
                ? "bg-blue-600 text-white font-semibold"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setActiveTab("upcoming")}
          >
            Próximo Campus
          </button> */}
          {/* <button
            type="button"
            className={`px-5 py-2.5 text-sm font-medium rounded-r-lg ${
              activeTab === "past"
                ? "bg-blue-600 text-white font-semibold"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setActiveTab("past")}
          >
            Campus Anteriores
          </button> */}
        </div>
      </div>

      {/* Upcoming Campus */}
      {activeTab === "upcoming" && (
        <div>
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Próximos Campus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {upcomingCampus.map((campus, index) => (
            <Card key={campus.id} className="overflow-hidden border border-gray-200 bg-white shadow-lg flex flex-col min-h-[600px]">
              <div className="h-48 overflow-hidden">
                <ImageWithFallback
                  src={campus.imageUrl || "/placeholder.svg"}
                  alt={`${campus.title} - Grupo de participantes en campo de hockey`}
                  fallbackSrc="/placeholder-kngc1.png"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-4">{campus.title}</h3>

                <div className="flex items-center mb-3">
                  <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-gray-700">{campus.date}</span>
                </div>

                <div className="flex items-center mb-4">
                  <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-gray-700">{campus.location}</span>
                </div>

                <p className="text-gray-600 mb-6 flex-grow">{campus.description}</p>

                <div className="mt-auto space-y-3">
                  <a href={`${campus.link}/inscripcion`} target="_blank" className="block">
                    <Button className="bg-blue-600 hover:bg-blue-700 w-full text-lg py-3">
                      Inscribirse Ahora
                    </Button>
                  </a>
                  <a href={campus.link} target="_blank" className="block">
                  <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                    Más Información
                  </Button>
                  </a>
                </div>

              </CardContent>
            </Card>
          ))}
          </div>
        </div>
      )}

      {/* Past Campus - Cambiado a 1 columna para tablet y menos */}
      {activeTab === "past" && (
        <div className="grid grid-cols-1 tablet:grid-cols-3 gap-8">
          {campusEvents.map((event, index) => (
            <Card key={event.id} className="overflow-hidden border border-gray-200">
              <div className="h-48 overflow-hidden">
                <ImageWithFallback
                  src={event.imageUrl || "/placeholder.svg"}
                  alt={`${event.title} - Imagen de participantes`}
                  fallbackSrc={`/placeholder.svg?height=300&width=400&query=past%20hockey%20camp%20${index}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
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

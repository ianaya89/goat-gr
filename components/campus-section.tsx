"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, ImageIcon, Instagram } from "lucide-react"
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
  galleryUrl?: string
  comingSoon?: boolean
  openRegistration?: boolean
}

const upcomingCampus: CampusEvent[] = [
  {
    id: "spring-2025",
    title: "CAMPUS Primavera 2025 VERSIÓN 2.0 GBA SUR",
    date: "Primavera 2025",
    location: "Monte Grande, Provincia de Buenos Aires",
    description:
      "El éxito fue rotundo! Después del primer campus que superó todas las expectativas, presentamos la Versión 2.0 - Una jornada única de hockey en Monte Grande Rugby Club.",
    imageUrl: "https://montegrande.goatsports.ar/images/new/5.JPG",
    isPast: false,
    link: "https://montegrande.goatsports.ar",
    openRegistration: true,
  },
  {
    id: "rosario-2025",
    title: "Campus Verano 2025 en Rosario",
    date: "Diciembre 2025",
    location: "Rosario, Santa Fe",
    description:
      "Mudamos toda la experiencia GOAT a la ciudad de Rosario, y te invitamos a vivir esta edición en las instalaciones de primer nivel que nos ofrece Estancia Damfield.",
    imageUrl: "/images/damfield.jpg",
    isPast: false,
    comingSoon: true,
  },{
    id: "summer-2025",
    title: "Campus Verano 2025 en GEBA",
    date: "Diciembre 2025",
    location: "Ciudad de Buenos Aires",
    description:
      "Nuestro Campus en GEBA ya se convirtió un clásico del verano que mejora cada año, y el 2025 no sera la excepción. Seguinos en Instagram para enterarte primero cuando abramos inscripciones.",
    imageUrl: "/images/campus-coaches-players.jpg",
    isPast: false,
    comingSoon: true,
  },
  {
    id: "winter-2025",
    title: "Campus Invierno 2025 en GEBA",
    date: "28 de Julio al 1 de Agosto, 2025",
    location: "Ciudad de Buenos Aires",
    description:
      "¡No te pierdas nuestro próximo Campus de Invierno! de 2 a 3 dias de entrenamiento intensivos con los mejores coaches. Perfecciona tu técnica, mejora tu condición física y desarrolla tu visión táctica en un ambiente profesional y divertido. Cupos limitadas, ¡reserva tu lugar ahora!",
    imageUrl: "/images/winter25.jpeg",
    isPast: true,
    link: "https://winter25.goatsports.ar",
    galleryUrl: "https://drive.google.com/drive/folders/1EbotRoIMf4MHTL7ar82Q1Ku6ftFJKHo7",
  },
  {
    id: "gba-sur-2025",
    title: "Campus GBA Sur 2025 en MGRC",
    date: "21, 22 y 23 Julio, 2025",
    location: "Monte Grande, Provincia de Buenos Aires",
    description:
      "¡Ustedes lo pidieron y nosotros los escuchamos, llegamos a Zona Sur! Te presentamos el Campus de Invierno en Monte Grande Rugby Club. La misma experiencia de siempre, pero mas cerca tuyo.",
    imageUrl: "/images/mgrc25.jpeg",
    isPast: true,
    link: "https://montegrande.goatsports.ar",
    galleryUrl: "https://drive.google.com/drive/u/0/folders/1eTnvBJl8nGCrNiUJOQlleytsRagyDOb_",
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
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Featured Campus - First Item */}
            {upcomingCampus.length > 0 && (
              <Card className="overflow-hidden border border-gray-200 bg-white shadow-lg flex flex-col md:flex-row relative">
                <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                  <ImageWithFallback
                    src={upcomingCampus[0].imageUrl || "/placeholder.svg"}
                    alt={`${upcomingCampus[0].title} - Grupo de participantes en campo de hockey`}
                    fallbackSrc="/placeholder-kngc1.png"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                {upcomingCampus[0].openRegistration && (
                  <span className="absolute top-3 left-3 bg-green-600 text-white text-sm font-bold px-3 py-1.5 rounded animate-pulse">
                    Inscripciones abiertas
                  </span>
                )}
                {upcomingCampus[0].isPast && (
                  <span className="absolute top-3 left-3 bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded">
                    Finalizado
                  </span>
                )}
                {upcomingCampus[0].comingSoon && !upcomingCampus[0].isPast && (
                  <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
                    Próximamente
                  </span>
                )}
                <CardContent className="md:w-1/2 p-8 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-4">{upcomingCampus[0].title}</h3>

                  <div className="flex items-center mb-3">
                    <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-gray-700 text-lg">{upcomingCampus[0].date}</span>
                  </div>

                  <div className="flex items-center mb-4">
                    <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-gray-700 text-lg">{upcomingCampus[0].location}</span>
                  </div>

                  <p className="text-gray-600 mb-6 text-lg">{upcomingCampus[0].description}</p>

                  <div className="space-y-3">
                    {upcomingCampus[0].comingSoon ? (
                      <a href="https://www.instagram.com/goatsports.arg" target="_blank" className="block">
                        <Button variant="outline" className="w-full md:w-auto border-pink-600 text-pink-600 hover:bg-pink-50">
                          <Instagram className="h-5 w-5 mr-2" /> Seguinos en Instagram
                        </Button>
                      </a>
                    ) : upcomingCampus[0].isPast ? (
                      <a href={upcomingCampus[0].galleryUrl || "https://www.instagram.com/goatsports.arg"} target="_blank" className="block">
                        <Button variant="outline" className="w-full md:w-auto border-blue-600 text-blue-600 hover:bg-blue-50">
                          <ImageIcon className="h-4 w-4 mr-2" /> Ver Galería de Fotos
                        </Button>
                      </a>
                    ) : (
                      <div className="flex flex-col md:flex-row gap-3">
                        <a href={`${upcomingCampus[0].link}/inscripcion`} target="_blank" className="block">
                          <Button className="bg-blue-600 hover:bg-blue-700 text-lg py-3 px-6">
                            Inscribirse Ahora
                          </Button>
                        </a>
                        <a href={upcomingCampus[0].link} target="_blank" className="block">
                          <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                            Más Información
                          </Button>
                        </a>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Other Campus - Grid */}
            {upcomingCampus.length > 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {upcomingCampus.slice(1).map((campus, index) => (
                  <Card key={campus.id} className="overflow-hidden border border-gray-200 bg-white shadow-lg flex flex-col min-h-[600px] relative">
                    <div className="h-48 overflow-hidden">
                      <ImageWithFallback
                        src={campus.imageUrl || "/placeholder.svg"}
                        alt={`${campus.title} - Grupo de participantes en campo de hockey`}
                        fallbackSrc="/placeholder-kngc1.png"
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    {campus.openRegistration && (
                      <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">
                        Inscripciones abiertas
                      </span>
                    )}
                    {campus.isPast && (
                      <span className="absolute top-3 left-3 bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded">
                        Finalizado
                      </span>
                    )}
                    {campus.comingSoon && !campus.isPast && (
                      <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
                        Próximamente
                      </span>
                    )}
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
                        {campus.comingSoon ? (
                          <a href="https://www.instagram.com/goatsports.arg" target="_blank" className="block">
                            <Button variant="outline" className="w-full border-pink-600 text-pink-600 hover:bg-pink-50">
                              <Instagram className="h-5 w-5 mr-2" /> Seguinos en Instagram
                            </Button>
                          </a>
                        ) : campus.isPast ? (
                          <a href={campus.galleryUrl || "https://www.instagram.com/goatsports.arg"} target="_blank" className="block">
                            <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                              <ImageIcon className="h-4 w-4 mr-2" /> Ver Galería de Fotos
                            </Button>
                          </a>
                        ) : (
                          <>
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
                          </>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
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

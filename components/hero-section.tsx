"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react"

// Mensaje predeterminado codificado para URL
const whatsappMessage = encodeURIComponent(
  "Hola, me gustaria obtener mas informacion sobre los planes de entrenamiento. Muchas gracias!",
)
const whatsappLink = `https://wa.me/5491126578585?text=${whatsappMessage}`

const heroImages = [
  {
    src: "/field-hockey-action.png",
    alt: "Jugadores de hockey sobre césped",
    sport: "Hockey",
  },
  {
    src: "/rugby-action.png",
    alt: "Jugadores de rugby",
    sport: "Rugby",
  },
  {
    src: "/soccer-action.png",
    alt: "Jugadores de fútbol",
    sport: "Fútbol",
  },
]

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
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentObjetivo, setCurrentObjetivo] = useState(0)
  const [displayedObjetivo, setDisplayedObjetivo] = useState(objetivos[0])
  const [isChanging, setIsChanging] = useState(false)

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

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
        }, 100)
      }, 500)
    }

    const interval = setInterval(rotateObjetivos, 3500)
    return () => clearInterval(interval)
  }, [currentObjetivo])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1))
  }

  return (
    <section className="relative h-[80vh] min-h-[600px]">
      {/* Image Slider */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="w-full h-full object-cover brightness-50"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        aria-label="Imagen anterior"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        aria-label="Siguiente imagen"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
            aria-label={`Ir a diapositiva ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          <span className="block mb-2">Entrenate con nosotros</span>
          <span className="relative inline-block overflow-hidden h-[1.2em] min-w-[280px] md:min-w-[400px]">
            <span
              className={`absolute w-full transition-all duration-500 ease-in-out ${
                isChanging ? "opacity-0 transform -translate-y-10" : "opacity-100 transform translate-y-0"
              }`}
            >
              {/* Contenedor con fondo blanco */}
              <span className="inline-block bg-white px-4 py-1 rounded-md">
                {/* Texto con gradiente */}
                <span
                  className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                  style={{
                    backgroundSize: "200% auto",
                    animation: "gradient 3s linear infinite",
                  }}
                >
                  {displayedObjetivo}
                </span>
              </span>
            </span>
          </span>
        </h1>
        <p className="text-xl text-white/90 max-w-2xl mb-8">
          Entrenamiento experto, formación personalizada y programas inmersivos diseñados para elevar tus habilidades
          deportivas al siguiente nivel.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Reservar una Sesión
            </Button>
          </a>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 border border-white">
            Explorar Programas
          </Button>
        </div>
      </div>
    </section>
  )
}

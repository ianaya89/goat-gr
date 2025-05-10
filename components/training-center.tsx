import { Button } from "@/components/ui/button"
import { Award, Zap, Shield, MessageCircle } from "lucide-react"

// Mensaje predeterminado codificado para URL
const whatsappMessage = encodeURIComponent(
  "Hola, me gustaria obtener mas informacion sobre los planes de entrenamiento. Muchas gracias!",
)
const whatsappLink = `https://wa.me/5491126578585?text=${whatsappMessage}`

export default function TrainingCenter() {
  return (
    <div className="container mx-auto px-4">
      {/* Main Facility Image */}
      <div className="relative rounded-xl overflow-hidden mb-12">
        <img
          src="/modern-field-hockey-facility.png"
          alt="Centro de Entrenamiento GOAT Sports"
          className="w-full h-[400px] md:h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-6 md:p-10 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Instalaciones de Clase Mundial</h3>
            <p className="text-lg md:text-xl max-w-2xl">
              Nuestro centro de entrenamiento cuenta con la última tecnología y equipamiento para maximizar tu
              desarrollo en hockey sobre césped.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="/placeholder.svg?key=vao72"
            alt="Césped Sintético Profesional"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <div className="flex items-center mb-3">
              <Award className="h-5 w-5 text-blue-600 mr-2" />
              <h4 className="font-bold text-lg">Césped Sintético Profesional</h4>
            </div>
            <p className="text-gray-600">
              Superficie de juego de última generación que cumple con los estándares internacionales para un
              entrenamiento óptimo.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="/placeholder.svg?key=zdyzb"
            alt="Gimnasio de Alto Rendimiento"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <div className="flex items-center mb-3">
              <Zap className="h-5 w-5 text-blue-600 mr-2" />
              <h4 className="font-bold text-lg">Gimnasio de Alto Rendimiento</h4>
            </div>
            <p className="text-gray-600">
              Equipado con tecnología avanzada para el entrenamiento de fuerza, resistencia y recuperación específica
              para hockey.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="/placeholder.svg?key=9zt2e" alt="Campo Físico Cognitivo" className="w-full h-48 object-cover" />
          <div className="p-6">
            <div className="flex items-center mb-3">
              <Shield className="h-5 w-5 text-blue-600 mr-2" />
              <h4 className="font-bold text-lg">Campo Físico Cognitivo</h4>
            </div>
            <p className="text-gray-600">
              Espacio especializado para el desarrollo de habilidades cognitivas y físicas, mejorando la toma de
              decisiones y el rendimiento en el campo.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-4">¿Quieres conocer nuestras instalaciones?</h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Te invitamos a visitar nuestro centro de entrenamiento y experimentar de primera mano todo lo que GOAT Sports
          tiene para ofrecer.
        </p>
        <div className="flex justify-center">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Programar una Visita
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}

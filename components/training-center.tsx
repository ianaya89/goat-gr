"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { getWhatsAppLink } from "@/utils/whatsapp-link"
import ImageWithFallback from "./image-with-fallback"

// Obtener el enlace de WhatsApp correctamente formateado
const whatsappLink = getWhatsAppLink("Hola, me gustaría programar una visita a las instalaciones. Gracias!")

export default function TrainingCenter() {
  return (
    <div className="container mx-auto px-4">
      {/* Main Facility Image */}
      <div className="relative rounded-xl overflow-hidden mb-12">
        <ImageWithFallback
          src="/images/training-center.jpg"
          alt="Centro de Entrenamiento GOAT Sports"
          fallbackSrc="/placeholder-sejrx.png"
          className="w-full h-[300px] sm:h-[400px] tablet:h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-6 tablet:p-10 text-white">
            <h3 className="text-xl sm:text-2xl tablet:text-3xl font-bold mb-2">Instalaciones de primer nivel</h3>
            <p className="text-base sm:text-lg tablet:text-xl max-w-2xl">
              Nuestro centro de entrenamiento cuenta con dos campos de cesped sintetico, gimnasio y todo lo necesario
              para el desarrollo deportivo en un ambiente profesional.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-4">¿Querés conocer nuestras instalaciones?</h3>
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

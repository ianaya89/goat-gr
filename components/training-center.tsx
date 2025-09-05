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
      {/* Enhanced Main Facility Image with multiple design layers */}
      <div className="relative group mb-12">
        {/* Decorative background elements */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

        {/* Main image container with multiple effects */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          {/* Image with enhanced styling */}
          <div className="relative overflow-hidden">
            <ImageWithFallback
              src="/images/training-center.jpg"
              alt="Training Center GOAT Sports"
              fallbackSrc="/placeholder-sejrx.png"
              className="w-full h-[300px] sm:h-[400px] tablet:h-[500px] object-cover transform group-hover:scale-105 transition-all duration-700 filter brightness-125 saturate-150 contrast-125 hue-rotate-[10deg] group-hover:brightness-135 group-hover:saturate-175 group-hover:contrast-130"
            />

            {/* Pastel color overlay effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-200/25 via-purple-200/15 to-cyan-200/20 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-pink-100/20 via-transparent to-blue-100/25 mix-blend-soft-light"></div>

            {/* Soft dreamy overlay for pastel effect */}
            <div className="absolute inset-0 bg-white/15 mix-blend-overlay"></div>

            {/* Detail-hiding effects */}
            <div className="absolute inset-0 backdrop-blur-[0.5px] bg-white/8"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 mix-blend-soft-light"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>

            {/* Subtle vignette effect */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.15)_100%)]"></div>

            {/* Light leak effect for modern touch */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-blue-300/20 to-transparent rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>

            {/* Multiple overlay layers for better visual effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent"></div>

            {/* Subtle pattern overlay to help with image quality */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
          </div>

          {/* Enhanced content overlay */}
          <div className="absolute inset-0 flex items-end">
            <div className="p-6 tablet:p-10 text-white relative z-10">
              {/* Decorative accent */}
              <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mb-4 rounded-full"></div>

              <h3 className="text-xl sm:text-2xl tablet:text-3xl font-bold mb-4 drop-shadow-lg">
                Instalaciones de primer nivel
              </h3>
              <p className="text-base sm:text-lg tablet:text-xl max-w-2xl leading-relaxed drop-shadow-md opacity-90">
                Nuestro centro de entrenamiento ubicado en Vicente López, cuenta con dos campos de césped sintético, gimnasio y todo lo necesario
                para el desarrollo deportivo en un ambiente profesional.
              </p>

              {/* Additional visual elements */}
              <div className="flex items-center mt-6 space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm opacity-75">Disponible ahora</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-sm opacity-75">Vicente López</span>
                </div>
              </div>
            </div>
          </div>

          {/* Corner accent decoration */}
          <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/30 rounded-tr-lg"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/30 rounded-bl-lg"></div>
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

"use client"

import { Button } from "@/components/ui/button"
import { Building2, GraduationCap, Users, ClipboardList, Target, MessageCircle } from "lucide-react"
import { getWhatsAppLink } from "@/utils/whatsapp-link"
import DiagonalImageSplit from "./diagonal-image-split"

// Obtener el enlace de WhatsApp correctamente formateado
const whatsappLink = getWhatsAppLink(
  "Hola, me gustaría obtener información sobre los servicios de consultoría. Gracias!",
)

export default function ConsultingServices() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 order-2 lg:order-1 relative">
          <DiagonalImageSplit
            image1="/images/consulting-services.jpg" // Invertido el orden de las imágenes
            image2="/images/hockey-coaching-demo.jpg" // Invertido el orden de las imágenes
            alt1="Servicios de Consultoría GOAT Sports"
            alt2="Demostración de técnicas de hockey por entrenador GOAT"
            className="h-[500px] rounded-lg shadow-lg overflow-hidden" // Aumentado de 400px a 500px
          />
        </div>
        <div className="lg:col-span-5 order-1 lg:order-2">
          <h2 className="text-2xl font-bold mb-6 text-white">Servicios de Consultoría</h2>

          <div className="space-y-5">
            <div className="flex items-start">
              <div className="bg-white/20 p-3 rounded-full mr-4 flex-shrink-0">
                <Building2 className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-white">Consultoría para Clubes</h3>
                <p className="text-white/90 text-sm">
                  Asesoramiento integral para mejorar programas de hockey, desde la estructura organizativa hasta
                  métodos de entrenamiento.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-white/20 p-3 rounded-full mr-4 flex-shrink-0">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-white">Programas para Colegios</h3>
                <p className="text-white/90 text-sm">
                  Desarrollo de programas educativos de hockey adaptados al entorno escolar, integrando valores
                  deportivos con objetivos académicos.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-white/20 p-3 rounded-full mr-4 flex-shrink-0">
                <Users className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-white">Servicios para Countries</h3>
                <p className="text-white/90 text-sm">
                  Creación y gestión de programas recreativos y competitivos para comunidades residenciales.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-white/20 p-3 rounded-full mr-4 flex-shrink-0">
                <ClipboardList className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-white">Métodos de Entrenamiento</h3>
                <p className="text-white/90 text-sm">
                  Implementación de metodologías innovadoras basadas en las últimas tendencias y respaldadas por la
                  ciencia deportiva.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-white/20 p-3 rounded-full mr-4 flex-shrink-0">
                <Target className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-white">Clínicas Personalizadas</h3>
                <p className="text-white/90 text-sm">
                  Diseño y ejecución de clínicas adaptadas a necesidades específicas, enfocadas en áreas técnicas,
                  tácticas o físicas.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center lg:justify-start">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="bg-white text-blue-600 hover:bg-white/90 flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Solicitar Información
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

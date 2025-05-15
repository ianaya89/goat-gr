"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { getWhatsAppLink } from "@/utils/whatsapp-link"
import { useState } from "react"

export interface ServiceDetails {
  title: string
  description: string
  longDescription: string
  schedule: string[]
  features: string[]
  images: {
    src: string
    alt: string
  }[]
}

interface ServiceModalProps {
  isOpen: boolean
  onClose: () => void
  service: ServiceDetails | null
}

export default function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

  if (!service) return null

  // Generar un enlace de WhatsApp con un mensaje personalizado para este servicio
  const whatsappMessage = `Hola, me gustaría obtener información sobre precios y disponibilidad del programa "${service.title}". Gracias!`
  const whatsappLink = getWhatsAppLink(whatsappMessage)

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({
      ...prev,
      [index]: true,
    }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl font-bold">{service.title}</DialogTitle>
        </DialogHeader>

        <div className="mt-4">
          {/* Galería de imágenes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {service.images.map((image, index) => (
              <div key={index} className="relative h-48 rounded-md overflow-hidden">
                <img
                  src={
                    imageErrors[index]
                      ? `/placeholder.svg?height=300&width=400&query=${encodeURIComponent(image.alt)}`
                      : image.src
                  }
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  onError={() => handleImageError(index)}
                />
              </div>
            ))}
          </div>

          {/* Descripción detallada */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Descripción</h3>
            <p className="text-gray-700">{service.longDescription}</p>
          </div>

          {/* Horarios */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Horarios</h3>
            <ul className="space-y-1">
              {service.schedule.map((time, index) => (
                <li key={index} className="text-gray-700 flex items-start">
                  <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 flex-shrink-0 mt-0.5">✓</span>
                  <span>{time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Características */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Características</h3>
            <ul className="space-y-1">
              {service.features.map((feature, index) => (
                <li key={index} className="text-gray-700 flex items-start">
                  <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 flex-shrink-0 mt-0.5">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Botón de WhatsApp */}
          <div className="mt-8 flex justify-center">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button className="bg-blue-600 hover:bg-blue-700 w-full flex items-center justify-center gap-2 py-6">
                <MessageCircle className="h-5 w-5" />
                Consultar precios y disponibilidad
              </Button>
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

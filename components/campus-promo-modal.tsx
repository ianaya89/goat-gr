"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, X } from "lucide-react"
import ImageWithFallback from "./image-with-fallback"

interface CampusPromoModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CampusPromoModal({ isOpen, onClose }: CampusPromoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[650px] max-h-[90vh] overflow-y-auto p-0">
        {/* Header with close button */}
        <div className="relative">
          {/* <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-white/90 p-2"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Cerrar</span>
          </button> */}

          {/* Hero Image */}
          <div className="h-64 overflow-hidden rounded-t-lg">
            <ImageWithFallback
              src="/images/campus-group-photo.jpg"
              alt="Campus de Invierno 2025 - Grupo de participantes en campo de hockey"
              fallbackSrc="/placeholder-kngc1.png"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <DialogHeader className="text-center mb-6">
            <DialogTitle className="text-2xl sm:text-3xl text-center font-bold text-blue-600 mb-2">
              🐐 🏑 Campus GOAT Invierno 2025
            </DialogTitle>
            <div className="flex justify-center mb-4">
              <span className="inline-flex items-center rounded-full font-semibold bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm px-4 py-2">
                ¡Cupos Limitados!
              </span>
            </div>
          </DialogHeader>

          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-center">
              <Calendar className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-lg font-semibold">28 de Julio al 1 de Agosto, 2025</span>
            </div>

            <div className="flex items-center justify-center">
              <MapPin className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-lg font-semibold">Club Gimnasia y Esgrima de Buenos Aires (GEBA)</span>
            </div>
          </div>

          <div className="text-center mb-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              <strong>¡No te pierdas nuestro próximo Campus de Invierno!</strong> De 2 a 3 días de entrenamiento intensivos con los mejores coaches.
              <br /><br />
              Perfecciona tu técnica y desarrolla tu visión táctica en un ambiente profesional y divertido.
            </p>
          </div>

          {/* Features */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-center mb-3 text-gray-800">¿Qué incluye?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              <div className="flex items-center">
                <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 flex-shrink-0">✓</span>
                <span>Actividades Recreativas</span>
              </div>
              <div className="flex items-center">
                <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 flex-shrink-0">✓</span>
                <span>Actividades Deportivas</span>
              </div>
              <div className="flex items-center">
                <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 flex-shrink-0">✓</span>
                <span>2 Almuerzos Incluidos</span>
              </div>
              <div className="flex items-center">
                <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 flex-shrink-0">✓</span>
                <span>Colaciones</span>
              </div>
              <div className="flex items-center">
                <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 flex-shrink-0">✓</span>
                <span>Premios y Sorteos</span>
              </div>
              <div className="flex items-center">
                <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 flex-shrink-0">✓</span>
                <span>Remera del Campus</span>
              </div>
              <div className="flex items-center">
                <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 flex-shrink-0">✓</span>
                <span>Figuras del Deporte</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="https://winter25.goatsports.ar" target="_blank" className="flex-1">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 text-lg">
                ¡Inscribirse Ahora!
              </Button>
            </a>
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 py-3"
            >
              Más tarde
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
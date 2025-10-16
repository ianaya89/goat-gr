"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, X, Star, Users, Trophy, ArrowRight } from "lucide-react"
import ImageWithFallback from "./image-with-fallback"

interface CampusPromoModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CampusPromoModal({ isOpen, onClose }: CampusPromoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[650px] max-h-[90vh] m-4 sm:m-0 overflow-y-auto p-0 border-0">
        {/* Hidden Dialog Title for Accessibility */}
        <DialogTitle className="sr-only">Campus Verano 2025 Rosario - Inscripciones Abiertas</DialogTitle>

        {/* Hero Section with Overlay */}
        <div className="relative h-72">
          {/* Background Image with Gradient Overlay */}
          <div className="absolute inset-0">
            <ImageWithFallback
              src="/images/damfield.jpg"
              alt="Campus Verano 2025 Rosario"
              fallbackSrc="/placeholder-kngc1.png"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </div>

          {/* Close Button - Mobile Friendly */}
          <button
            onClick={onClose}
            className="absolute top-4 left-4 z-20 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm text-gray-900 hover:bg-white transition-all shadow-lg flex items-center justify-center touch-manipulation"
            aria-label="Cerrar"
          >
            <X className="h-5 w-5 font-bold" />
          </button>

          {/* Floating Badge */}
          <div className="absolute top-4 right-4 z-10">
            <span className="inline-flex items-center gap-1 rounded-full bg-green-500/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 shadow-lg animate-pulse">
              <Star className="h-3 w-3" />
              INSCRIPCIONES ABIERTAS
            </span>
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-px bg-white/50 flex-1" />
              <span className="text-xs uppercase tracking-widest text-white/80 font-medium">GOAT SPORTS</span>
              <div className="h-px bg-white/50 flex-1" />
            </div>
            <h2 className="text-3xl font-black mb-1">
              CAMPUS VERANO 2025
            </h2>
            <p className="text-xl font-bold text-yellow-400">
              ROSARIO • SANTA FE
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 bg-gradient-to-b from-gray-50 to-white">
          {/* Location and Date Cards */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <Calendar className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-medium">Fecha</p>
                  <p className="text-sm font-bold text-gray-900">9-11 Diciembre</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-medium">Lugar</p>
                  <p className="text-sm font-bold text-gray-900">Estancia Damfield</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Info */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 mb-6 border border-green-100">
            <div className="flex items-start gap-3">
              <Trophy className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-gray-900 mb-2">
                  ¡Cuanto más temprano asegures tu lugar, más dinero te ahorrás!
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Primer Lote (1-31 Oct):</span>
                    <span className="text-sm font-bold text-green-600">$170.000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Segundo Lote (1-20 Nov):</span>
                    <span className="text-sm font-bold text-orange-600">$185.000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Último Lote (21 Nov-5 Dic):</span>
                    <span className="text-sm font-bold text-red-600">$200.000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* CTA Buttons */}
          <div className="space-y-3">
            <a href="https://rosario.goatsports.ar" target="_blank" className="block">
              <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 group">
                <span>¡RESERVÁ TU LUGAR AHORA!</span>
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <Button
              variant="ghost"
              onClick={onClose}
              className="w-full text-gray-500 hover:text-gray-700 hover:bg-gray-50 py-4 text-sm font-medium touch-manipulation"
            >
              Tal vez más tarde
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
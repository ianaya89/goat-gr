"use client"

import { useState } from "react"
import { UserCog, GraduationCap, Tent, Users, Trophy } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ServiceModal, { type ServiceDetails } from "./service-modal"
import ImageWithFallback from "./image-with-fallback"
import type { JSX } from "react"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  imageSrc: string
  details: ServiceDetails
}

export default function ServiceCard({ title, description, icon, imageSrc, details }: ServiceCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const getIcon = (): JSX.Element => {
    switch (icon) {
      case "UserCog":
        return <UserCog className="h-6 w-6 text-blue-600" />
      case "GraduationCap":
        return <GraduationCap className="h-6 w-6 text-blue-600" />
      case "Tent":
        return <Tent className="h-6 w-6 text-blue-600" />
      case "Users":
        return <Users className="h-6 w-6 text-blue-600" />
      case "Trophy":
        return <Trophy className="h-6 w-6 text-blue-600" />
      default:
        return <UserCog className="h-6 w-6 text-blue-600" />
    }
  }

  // Usar la primera imagen del array de imágenes si está disponible, de lo contrario usar imageSrc
  const displayImage = details.images && details.images.length > 0 ? details.images[0].src : imageSrc
  const fallbackImage = `/placeholder.svg?height=300&width=400&query=${encodeURIComponent(title)}`

  return (
    <>
      <Card className="group overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 h-full border-0 bg-white hover-lift relative">

        <div className="h-48 overflow-hidden relative">
          {/* Shimmer effect on hover */}
          <div className="absolute inset-0 bg-shimmer opacity-0 group-hover:opacity-100 animate-shimmer z-10"></div>
          <ImageWithFallback
            src={displayImage || "/placeholder.svg"}
            alt={title}
            fallbackSrc={fallbackImage}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
          />
        </div>

        <CardContent className="p-6 flex flex-col h-[calc(100%-12rem)] relative z-20">
          <div className="flex items-center mb-4 group-hover:transform group-hover:scale-105 transition-transform duration-300">
            <div className="p-2 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
              {getIcon()}
            </div>
            <h3 className="text-xl font-bold ml-3 group-hover:text-blue-700 transition-colors duration-300">{title}</h3>
          </div>

          <p className="text-gray-600 mb-6 flex-grow group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
            {description}
          </p>

          <Button
            variant="outline"
            className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white mt-auto transition-all duration-300 font-semibold hover:shadow-lg hover:shadow-blue-500/25 group-hover:border-blue-700 relative overflow-hidden"
            onClick={() => setIsModalOpen(true)}
          >
            Más Información
          </Button>
        </CardContent>
      </Card>

      <ServiceModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} service={details} />
    </>
  )
}

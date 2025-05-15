"use client"

import { useState } from "react"
import { UserCog, GraduationCap, Tent, Users, Trophy } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ServiceModal, { type ServiceDetails } from "./service-modal"
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

  return (
    <>
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg h-full">
        <div className="h-48 overflow-hidden">
          <img
            src={imageSrc || `/placeholder.svg?height=300&width=400&query=${encodeURIComponent(title)}`}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.onerror = null
              target.src = `/placeholder.svg?height=300&width=400&query=${encodeURIComponent(title)}`
            }}
          />
        </div>
        <CardContent className="p-6 flex flex-col h-[calc(100%-12rem)]">
          <div className="flex items-center mb-4">
            {getIcon()}
            <h3 className="text-xl font-bold ml-2">{title}</h3>
          </div>
          <p className="text-gray-600 mb-6 flex-grow">{description}</p>
          <Button
            variant="outline"
            className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 mt-auto"
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

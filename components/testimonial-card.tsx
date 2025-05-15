import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import ImageWithFallback from "./image-with-fallback"

interface TestimonialCardProps {
  quote: string
  name: string
  title: string
  imageQuery: string
}

export default function TestimonialCard({ quote, name, title, imageQuery }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <Quote className="h-8 w-8 text-blue-600 mb-4" />
        <p className="text-gray-600 mb-6 flex-grow">"{quote}"</p>
        <div className="flex items-center">
          <ImageWithFallback
            src={`/abstract-geometric-shapes.png?height=60&width=60&query=${imageQuery}`}
            alt={name}
            className="h-12 w-12 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="font-semibold">{name}</h4>
            <p className="text-sm text-gray-500">{title}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

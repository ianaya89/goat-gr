import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import ImageWithFallback from "./image-with-fallback"

interface TestimonialCardProps {
  quote: string
  name: string
  title: string
  // imageQuery: string
}

export default function TestimonialCard({ quote, name, title, imageQuery }: TestimonialCardProps) {
  return (
    <Card className="group h-full border-0 bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover-lift relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <CardContent className="p-6 flex flex-col h-full relative z-10">
        <div className="flex justify-between items-start mb-4">
          <Quote className="h-8 w-8 text-blue-600 group-hover:text-blue-700 group-hover:scale-110 transform transition-all duration-300" />
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-blue-300 rounded-full group-hover:bg-blue-500 transition-colors duration-300"></div>
            ))}
          </div>
        </div>

        <p className="text-gray-600 group-hover:text-gray-700 mb-6 flex-grow leading-relaxed transition-colors duration-300 italic">
          "{quote}"
        </p>

        <div className="flex items-center">
          {/* Avatar placeholder with gradient */}
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 mr-4 flex items-center justify-center text-white font-bold text-lg group-hover:scale-105 transition-transform duration-300">
            {name.charAt(0)}
          </div>
          <div>
            <h4 className="font-semibold group-hover:text-blue-700 transition-colors duration-300">{name}</h4>
            <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">{title}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

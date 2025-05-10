import { UserCog, GraduationCap, Tent, Users, Trophy } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  imageQuery: string
}

export default function ServiceCard({ title, description, icon, imageQuery }: ServiceCardProps) {
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
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg h-full">
      <div className="h-48 overflow-hidden">
        <img
          src={`/abstract-geometric-shapes.png?key=445u9&height=300&width=500&query=${imageQuery}`}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardContent className="p-6 flex flex-col h-[calc(100%-12rem)]">
        <div className="flex items-center mb-4">
          {getIcon()}
          <h3 className="text-xl font-bold ml-2">{title}</h3>
        </div>
        <p className="text-gray-600 mb-6 flex-grow">{description}</p>
        <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 mt-auto">
          Más Información
        </Button>
      </CardContent>
    </Card>
  )
}

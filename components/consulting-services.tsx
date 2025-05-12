import { Button } from "@/components/ui/button"
import { GraduationCap, Users, Building2, ClipboardList, Target, MessageCircle } from "lucide-react"
import { getWhatsAppLink } from "@/utils/whatsapp-link"

// Obtener el enlace de WhatsApp correctamente formateado
const whatsappLink = getWhatsAppLink(
  "Hola, me gustaría obtener información sobre los servicios de consultoría. Gracias!",
)

export default function ConsultingServices() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="lg:h-[600px] order-2 lg:order-1">
          <img
            src="/field-hockey-consultation.png"
            alt="Servicios de Consultoría GOAT Sports"
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-3xl font-bold mb-6">Servicios de Consultoría</h2>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                <Building2 className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Consultoría para Clubes</h3>
                <p className="text-gray-600">
                  Asesoramiento integral para mejorar programas de hockey, desde la estructura organizativa hasta
                  métodos de entrenamiento.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                <GraduationCap className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Programas para Colegios</h3>
                <p className="text-gray-600">
                  Desarrollo de programas educativos de hockey adaptados al entorno escolar, integrando valores
                  deportivos con objetivos académicos.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Servicios para Countries</h3>
                <p className="text-gray-600">
                  Creación y gestión de programas recreativos y competitivos para comunidades residenciales.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                <ClipboardList className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Métodos de Entrenamiento</h3>
                <p className="text-gray-600">
                  Implementación de metodologías innovadoras basadas en las últimas tendencias y respaldadas por la
                  ciencia deportiva.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                <Target className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Clínicas Personalizadas</h3>
                <p className="text-gray-600">
                  Diseño y ejecución de clínicas adaptadas a necesidades específicas, enfocadas en áreas técnicas,
                  tácticas o físicas.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2">
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

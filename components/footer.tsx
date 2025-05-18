import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, MessageCircle, ExternalLink } from "lucide-react"
import { getWhatsAppLink } from "@/utils/whatsapp-link"

// Obtener el enlace de WhatsApp correctamente formateado
const whatsappLink = getWhatsAppLink(
  "Hola, me gustaria obtener mas informacion sobre los planes de entrenamiento. Muchas gracias!",
)

// Componente personalizado para el icono de TikTok
function TikTok({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 tablet:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <img src="/images/horizontal-logo-white.png" alt="GOAT Sports Logo" className="h-12 w-auto" />
            </div>
            <p className="text-gray-400 mb-4">
              Ahora somos GOAT Sports, mucho más que un training center.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61575793396752" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/goatsports.ar/" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/goatsportsar" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white">
                  Programas
                </Link>
              </li>
              <li>
                <Link href="#staff" className="text-gray-400 hover:text-white">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="#training-center" className="text-gray-400 hover:text-white">
                  Training Center
                </Link>
              </li>
              <li>
                <Link href="#campus" className="text-gray-400 hover:text-white">
                  Campus
                </Link>
              </li>
              <li>
                <Link href="#consulting" className="text-gray-400 hover:text-white">
                  Consultoría
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-400 hover:text-white">
                  Testimonios
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                <span className="text-gray-400">San Martin 1649 (Vicente Lopez CP1638), Buenos Aires - Argentina</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                <a href={`tel:+5491126578585`} className="text-gray-400 hover:text-white">
                  +54 9 11 2567 8585
                </a>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                <a href="mailto:hola@goatsports.ar" className="text-gray-400 hover:text-white">
                  hola@goatsports.ar
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Horarios</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="font-medium">Lunes a Viernes:</span> 8:00 - 21:00
              </li>
            </ul>

            {/* Trabaja con nosotros - Badge (Movido aquí) */}
            <div className="mt-6">
              <a
                href="https://www.linkedin.com/jobs/goat-sports-jobs-worldwide"
                className="inline-flex items-center bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 transition-colors px-4 py-2 rounded-full font-medium"
              >
                Unite a nuestro equipo
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col tablet:flex-row justify-center items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} GOAT Sports. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

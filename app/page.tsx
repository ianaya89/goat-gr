import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ServiceCard from "@/components/service-card"
import TestimonialCard from "@/components/testimonial-card"
import StaffSection from "@/components/staff-section"
import TrainingCenter from "@/components/training-center"
import ConsultingServices from "@/components/consulting-services"
import CampusSection from "@/components/campus-section"
import HeroSection from "@/components/hero-section"
import ContactForm from "@/components/contact-form"
import { ArrowRight } from "lucide-react"
import { getWhatsAppLink } from "@/utils/whatsapp-link"

// Obtener el enlace de WhatsApp correctamente formateado
const whatsappLink = getWhatsAppLink()

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Programas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Programas completos adaptados a deportistas de todos los niveles y ambiciones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Entrenamiento Personal"
              description="Sesiones individuales adaptadas a tus necesidades específicas. Desarrolla tus habilidades en hockey, fútbol, rugby o alto rendimiento con atención personalizada de nuestros entrenadores expertos."
              icon="UserCog"
              imageQuery="sports personal training session"
            />
            <ServiceCard
              title="Academia de Hockey y Rugby"
              description="Únete a nuestro programa estructurado con sesiones regulares de entrenamiento, talleres de desarrollo de habilidades y oportunidades de juego competitivo en hockey y rugby."
              icon="GraduationCap"
              imageQuery="hockey and rugby academy training"
            />
            <ServiceCard
              title="Vení a entrenar con tu equipo"
              description="Alquilá nuestras instalaciones de primer nivel para entrenamientos con tu equipo. Acceso completo a campos, equipamiento y espacios de análisis para elevar el rendimiento grupal."
              icon="Users"
              imageQuery="team training session sports"
            />
          </div>
        </div>
      </section>

      {/* Staff Section (Combined About and Team) */}
      <section className="py-16 md:py-24 bg-gray-50" id="staff">
        <div className="container mx-auto px-4">
          <StaffSection />
        </div>
      </section>

      {/* Training Center Section */}
      <section className="py-16 md:py-24 bg-white" id="training-center">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Centro de Entrenamiento</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubre nuestras instalaciones de primer nivel diseñadas para maximizar tu rendimiento y experiencia de
              entrenamiento.
            </p>
          </div>

          <TrainingCenter />
        </div>
      </section>

      {/* Campus Section */}
      <section className="py-16 md:py-24 bg-gray-50" id="campus">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Campus</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experiencias inmersivas deportivas para jugadores de todos los niveles.
            </p>
          </div>

          <CampusSection />
        </div>
      </section>

      {/* Consulting Services Section */}
      <section className="py-16 md:py-24 bg-white" id="consulting">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Consultoría</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Servicios profesionales de consultoría deportiva para clubes, colegios y countries que buscan elevar su
              nivel deportivo.
            </p>
          </div>

          <ConsultingServices />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50" id="testimonials">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo Que Dicen Nuestros Deportistas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Escucha a los atletas que han transformado su juego con GOAT Sports.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="El programa de entrenamiento personal en GOAT Sports transformó completamente mi juego. Mis habilidades técnicas y conciencia táctica mejoraron dramáticamente en solo unos meses."
              name="Sara Jiménez"
              title="Jugadora Universitaria"
              imageQuery="female field hockey player portrait"
            />
            <TestimonialCard
              quote="El enfoque estructurado de la academia me ayudó a desarrollar una rutina de práctica consistente. Los entrenadores son increíblemente conocedores y solidarios."
              name="Miguel Chen"
              title="Jugador de Secundaria"
              imageQuery="male field hockey player portrait"
            />
            <TestimonialCard
              quote="El campus de verano fue lo más destacado de mi año. Hice grandes amigos, aprendí mucho y me divertí muchísimo. No puedo esperar para volver el próximo verano."
              name="Emma Rodríguez"
              title="Jugadora Juvenil"
              imageQuery="young female field hockey player portrait"
            />
          </div>
        </div>
      </section>

      {/* Contact Section - Reemplazado con formulario */}
      <section className="py-16 md:py-24 bg-blue-600 text-white" id="contact">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para Elevar tu Juego?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contáctanos hoy y comienza tu camino hacia la excelencia deportiva.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Mantente Actualizado</h2>
            <p className="text-gray-600 mb-6">
              Suscríbete a nuestro boletín para recibir consejos de entrenamiento, anuncios de eventos y ofertas
              exclusivas.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Ingresa tu email"
                className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto h-[50px]">
                Suscribirse <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

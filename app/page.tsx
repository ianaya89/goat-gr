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
import NewsletterForm from "@/components/newsletter-form"
import SponsorsSection from "@/components/sponsors-section"
import { getWhatsAppLink } from "@/utils/whatsapp-link"
import { servicesData } from "@/data/services-data"

// Obtener el enlace de WhatsApp correctamente formateado
const whatsappLink = getWhatsAppLink()

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <section className="py-16 tablet:py-24 bg-white" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl tablet:text-4xl font-bold mb-4">Programas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Programas completos diseñados para potenciar el desarrollo deportivo en todas sus facetas. Ofrecemos
              entrenamientos específicos para cada disciplina, adaptados a las necesidades individuales y objetivos de
              cada deportista, desde principiantes hasta profesionales.
            </p>
          </div>

          {/* Cambiado a 1 columna para tablet y menos */}
          <div className="grid grid-cols-1 tablet:grid-cols-3 gap-8">
            <ServiceCard
              title={servicesData[0].title}
              description={servicesData[0].description}
              icon="UserCog"
              imageSrc="/images/personal-training.jpg"
              details={servicesData[0]}
            />
            <ServiceCard
              title={servicesData[1].title}
              description={servicesData[1].description}
              icon="GraduationCap"
              imageSrc="/images/hockey-academy.jpg"
              details={servicesData[1]}
            />
            <ServiceCard
              title={servicesData[2].title}
              description={servicesData[2].description}
              icon="Users"
              imageSrc="/placeholder-u7g4m.png"
              details={servicesData[2]}
            />
          </div>
        </div>
      </section>

      {/* Staff Section (Combined About and Team) */}
      <section className="py-16 tablet:py-24 bg-gradient-to-b from-gray-50 to-white" id="staff">
        <div className="container mx-auto px-4">
          <StaffSection />
        </div>
      </section>

      {/* Training Center Section */}
      <section className="py-16 tablet:py-24 bg-white" id="training-center">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl tablet:text-4xl font-bold mb-4">Centro de Entrenamiento</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubre nuestras instalaciones de primer nivel diseñadas para maximizar tu rendimiento y experiencia de
              entrenamiento.
            </p>
          </div>

          <TrainingCenter />
        </div>
      </section>

      {/* Campus Section - Ahora con fondo blanco */}
      <section className="py-16 tablet:py-24 bg-white" id="campus">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl tablet:text-4xl font-bold mb-4">Campus</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experiencias inmersivas deportivas para jugadores de todos los niveles.
            </p>
          </div>

          <CampusSection />
        </div>
      </section>

      {/* Consulting Services Section - Ahora con gradiente azul */}
      <section
        className="py-16 tablet:py-24 relative overflow-hidden"
        id="consulting"
        style={{
          background: "linear-gradient(135deg, #00237c 0%, #1a56db 50%, #3b82f6 100%)",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl tablet:text-4xl font-bold mb-4 text-white">Consultoría</h2>
            <p className="text-white/90 max-w-2xl mx-auto">
              Servicios profesionales de consultoría deportiva para clubes, colegios y countries que buscan elevar su
              nivel deportivo.
            </p>
          </div>

          <ConsultingServices />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 tablet:py-24 bg-gray-50" id="testimonials">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl tablet:text-4xl font-bold mb-4">Lo Que Dicen Nuestros Deportistas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Escucha a los atletas que han transformado su juego con GOAT Sports.
            </p>
          </div>

          {/* Cambiado a 1 columna para tablet y menos */}
          <div className="grid grid-cols-1 tablet:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <TestimonialCard
              quote="Entrenar en Goat, no solo potenció y llevó a otro nivel mis habilades técnicas y físicas, sino que además, es un lugar con una energía y clima increíbles que te empujan a ir por más y donde de verdad aprendes de los mejores"
              name="Angie Belosio"
              title="Jugadora de Banco Nacion"
              imageQuery="female field hockey player portrait"
            />
            <TestimonialCard
              quote="Disfruto mucho los campus de GOAT! Porque me permite mejorar mis habilidades y aprender nuevos gestos técnicos. Los profes son Increíbles!!! siempre están pendientes de nosotros cuidándonos en todo momento"
              name="Martina Giannini"
              title="Jugadora de GEBA"
              imageQuery="young female field hockey player portrait"
            />
          </div>
        </div>
      </section>

      {/* Contact Section - Ahora con gradiente */}
      <section
        className="py-16 tablet:py-24 text-white relative overflow-hidden"
        id="contact"
        style={{
          background: "linear-gradient(135deg, #1a56db 0%, #3b82f6 50%, #60a5fa 100%)",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl tablet:text-4xl font-bold mb-6">¿Listo para Elevar tu Juego?</h2>
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
          <NewsletterForm />
        </div>
      </section>

      {/* Sponsors Section */}
      <SponsorsSection />

      <Footer />
    </div>
  )
}

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
            <h2 className="text-3xl tablet:text-4xl font-bold mb-4">Nuestros Programas</h2>
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
              imageSrc="/images/team-rental.jpg"
              details={servicesData[2]}
            />
          </div>
        </div>
      </section>

      {/* Staff Section (Combined About and Team) */}
      <section className="py-16 tablet:py-24 bg-gray-50" id="staff">
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

      {/* Campus Section */}
      <section className="py-16 tablet:py-24 bg-gray-50" id="campus">
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

      {/* Consulting Services Section */}
      <section className="py-16 tablet:py-24 bg-white" id="consulting">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl tablet:text-4xl font-bold mb-4">Consultoría</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
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
          <div className="grid grid-cols-1 tablet:grid-cols-3 gap-8">
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
      <section className="py-16 tablet:py-24 bg-blue-600 text-white" id="contact">
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

      <Footer />
    </div>
  )
}

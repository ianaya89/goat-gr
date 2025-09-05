"use client"

import { useState, useEffect } from "react"
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
import CampusPromoModal from "@/components/campus-promo-modal"
import { getWhatsAppLink } from "@/utils/whatsapp-link"
import { servicesData } from "@/data/services-data"

// Obtener el enlace de WhatsApp correctamente formateado
const whatsappLink = getWhatsAppLink()

export default function Home() {
  // State for the promotional modal
  const [isPromoModalOpen, setIsPromoModalOpen] = useState(false)
  const isPromoEnabled = process.env.NEXT_PUBLIC_SHOW_CAMPUS_PROMO === "true"

  // Auto-open modal when page loads
  useEffect(() => {
    if (!isPromoEnabled) return
    const timer = setTimeout(() => {
      setIsPromoModalOpen(true)
    }, 1000) // Open after 1.5 seconds to let the page load

    return () => clearTimeout(timer)
  }, [isPromoEnabled])

  const handleClosePromoModal = () => {
    setIsPromoModalOpen(false)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <section className="py-12 tablet:py-18 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden" id="services">
        {/* Subtle background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-10 right-10 w-32 h-32 bg-blue-100/50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-purple-100/50 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl tablet:text-4xl font-bold mb-4">Programas de Entrenamiento</h2>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Programas completos diseñados para potenciar el desarrollo deportivo en todas sus facetas. Ofrecemos
              entrenamientos específicos para cada disciplina, adaptados a las necesidades individuales y objetivos de
              cada deportista, desde principiantes hasta profesionales.
            </p>
          </div>

          {/* Enhanced grid with staggered animations */}
          <div className="grid grid-cols-1 tablet:grid-cols-3 gap-8">
            <div className="animate-fade-in-left opacity-0" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
              <ServiceCard
                title={servicesData[0].title}
                description={servicesData[0].description}
                icon="UserCog"
                imageSrc="/images/personal-training.jpg"
                details={servicesData[0]}
              />
            </div>
            <div className="animate-fade-in-up opacity-0" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
              <ServiceCard
                title={servicesData[1].title}
                description={servicesData[1].description}
                icon="GraduationCap"
                imageSrc="/images/hockey-academy.jpg"
                details={servicesData[1]}
              />
            </div>
            <div className="animate-fade-in-right opacity-0" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
              <ServiceCard
                title={servicesData[2].title}
                description={servicesData[2].description}
                icon="Users"
                imageSrc="/placeholder-u7g4m.png"
                details={servicesData[2]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Staff Section (Combined About and Team) */}
      <section className="py-12 tablet:py-18 bg-gradient-to-b from-gray-50 via-white to-gray-50/50 relative overflow-hidden" id="staff">
        {/* Subtle background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-32 right-16 w-28 h-28 bg-blue-100/40 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-40 left-32 w-20 h-20 bg-purple-100/40 rounded-full blur-2xl animate-float animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <StaffSection />
        </div>
      </section>

      {/* Training Center Section - Enhanced with modern styling */}
      <section className="py-12 tablet:py-18 bg-gradient-to-br from-gray-100 via-gray-50 to-blue-50/20 relative overflow-hidden" id="training-center">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-36 h-36 bg-gray-200/50 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-28 right-20 w-24 h-24 bg-blue-200/30 rounded-full blur-2xl animate-float animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl tablet:text-4xl font-bold mb-6">Training Center</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-lg">
              Descubre nuestras instalaciones de primer nivel diseñadas para maximizar tu rendimiento y experiencia de
              entrenamiento.
            </p>
          </div>

          <TrainingCenter />
        </div>
      </section>

      {/* Campus Section - Enhanced with modern styling */}
      <section className="py-12 tablet:py-18 bg-gradient-to-br from-white via-blue-50/10 to-purple-50/10 relative overflow-hidden" id="campus">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-24 right-24 w-32 h-32 bg-purple-100/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-32 left-16 w-28 h-28 bg-blue-100/30 rounded-full blur-2xl animate-float animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl tablet:text-4xl font-bold mb-6">Campus & Clínicas</h2>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed text-lg">
            Nuestros Campus de Hockey GOAT Sports son experiencias inmersivas pensadas para jugadores de todos los niveles: desde quienes se inician hasta atletas de alto rendimiento. Durante varios días combinarás entrenamientos técnicos, trabajo táctico, preparación física específica y dinámicas de fortalecimiento mental, mientras creamos un ambiente divertido a inculcamos la pasión por el deporte.
            <br />
            <br />
            Vení a perfeccionar tu juego, conocer nuevas amistades y vivir el deporte con la energía y el respaldo de GOAT Sports.
            </p>
          </div>

          <CampusSection />
        </div>
      </section>

      {/* Consulting Services Section - Enhanced with modern gradients */}
      <section
        className="py-12 tablet:py-18 relative overflow-hidden"
        id="consulting"
        style={{
          background: "linear-gradient(135deg, #00237c 0%, #1a56db 30%, #3b82f6 60%, #06b6d4 100%)",
        }}
      >
        {/* Advanced background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 via-transparent to-cyan-500/20"></div>
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute top-1/2 -right-32 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-16 left-1/3 w-64 h-64 bg-blue-300/10 rounded-full blur-2xl animate-float"></div>

          {/* Animated grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px)`,
              backgroundSize: '50px 50px',
              animation: 'float 8s ease-in-out infinite'
            }}></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl tablet:text-4xl font-bold mb-4 text-white animate-fade-in-up">Consultoría</h2>
            <p className="text-white/90 max-w-2xl mx-auto leading-relaxed animate-fade-in-up opacity-0" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
              Servicios profesionales de consultoría deportiva para clubes, colegios y countries que buscan elevar su
              nivel deportivo.
            </p>
          </div>

          <div className="animate-fade-in-up opacity-0" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
            <ConsultingServices />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 tablet:py-18 bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/30 relative overflow-hidden" id="testimonials">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-40 h-40 bg-purple-200/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-32 right-1/4 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl animate-float animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl tablet:text-4xl font-bold mb-4">Lo Que Dicen Nuestros Deportistas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Escucha a los atletas que han transformado su juego con GOAT Sports.
            </p>
          </div>

          {/* Enhanced testimonials grid with staggered animations */}
          <div className="grid grid-cols-1 tablet:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="animate-fade-in-up opacity-0" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
              <TestimonialCard
                quote="Entrenar en goat me hizo crecer muchísimo en cuanto a técnica y a mantener una disciplina día a día. Mejorando y potenciando mi nivel deportivo! 🦁"
                name="Catalina Alimenti"
                title="Jugadora de las Leonas"
                // imageQuery="female field hockey player portrait"
              />
            </div>
            <div className="animate-fade-in-up opacity-0" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
              <TestimonialCard
                quote="Entrenar en Goat, no solo potenció y llevó a otro nivel mis habilades técnicas y físicas, sino que además, es un lugar con una energía y clima increíbles que te empujan a ir por más y donde de verdad aprendes de los mejores 💪"
                name="Angie Belosio"
                title="Jugadora de Banco Nacion"
                // imageQuery="female field hockey player portrait"
              />
            </div>
            <div className="animate-fade-in-up opacity-0" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
              <TestimonialCard
                quote="Disfruto mucho los campus de GOAT! Porque me permite mejorar mis habilidades y aprender nuevos gestos técnicos. Los profes son Increíbles!!! siempre están pendientes de nosotros cuidándonos en todo momento 🫶"
                name="Martina Giannini"
                title="Jugadora de GEBA"
                // imageQuery="young female field hockey player portrait"
              />
            </div>
            <div className="animate-fade-in-up opacity-0" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
              <TestimonialCard
                quote="Hace 3 años que entreno y me encanta porque los profes me ayudan mucho. Es un espacio donde me siento cómoda y en el que realmente noto mi crecimiento como jugadora. Estoy muy agradecida por el apoyo y la dedicación de todos, sé que cuento con ellos siempre! 🩷"
                name="Sofia Villarreal"
                title="Jugadora de GEBA"
                // imageQuery="young female field hockey player portrait"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Enhanced with modern gradients and effects */}
      <section
        className="py-12 tablet:py-18 text-white relative overflow-hidden"
        id="contact"
        style={{
          background: "linear-gradient(135deg, #00237c 0%, #1a56db 40%, #3b82f6 80%, #06b6d4 100%)",
        }}
      >
        {/* Advanced background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-purple-500/20 via-transparent to-cyan-500/20"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 -left-20 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-float"></div>

          {/* Animated particles */}
          <div className="absolute top-20 left-20 w-2 h-2 bg-white/30 rounded-full animate-float"></div>
          <div className="absolute top-40 right-32 w-3 h-3 bg-white/20 rounded-full animate-float animation-delay-2000"></div>
          <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-white/25 rounded-full animate-float animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl tablet:text-4xl font-bold mb-6 animate-fade-in-up">¿Listo para llevar tu juego al siguiente nivel?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up opacity-0" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
              Contáctanos hoy y comienza tu camino hacia la excelencia deportiva.
            </p>
          </div>

          <div className="max-w-2xl mx-auto animate-fade-in-up opacity-0" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-gradient-to-br from-white via-gray-50/50 to-blue-50/20 relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-20 w-24 h-24 bg-blue-100/30 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-10 left-20 w-20 h-20 bg-purple-100/30 rounded-full blur-xl animate-float animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <NewsletterForm />
        </div>
      </section>

      {/* Sponsors Section */}
      <SponsorsSection />

      <Footer />

      {/* Campus Promo Modal */}
      {isPromoEnabled && (
        <CampusPromoModal
          isOpen={isPromoModalOpen}
          onClose={handleClosePromoModal}
        />
      )}
    </div>
  )
}

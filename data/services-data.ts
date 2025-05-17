import type { ServiceDetails } from "@/components/service-modal"

export const servicesData: ServiceDetails[] = [
  {
    title: "Entrenamiento Personalizado",
    description:
      "Sesiones individuales adaptadas a tus necesidades específicas. Desarrolla tus habilidades con atención personalizada de nuestros entrenadores expertos.",
    longDescription:
      "Nuestro programa de entrenamiento personalizado está diseñado para maximizar tu potencial deportivo a través de sesiones individualizadas. Trabajamos con un enfoque integral que abarca aspectos técnicos, tácticos, físicos y mentales. Cada sesión es planificada específicamente para vos, considerando tus objetivos, nivel actual y posición de juego. Nuestros entrenadores te ayudan a identificar áreas de mejora y desarrollar un plan progresivo que te lleve al siguiente nivel.",
    schedule: [
      "Lunes a Viernes: 8:00 - 21:00 (sesiones de 60 o 90 minutos)",
      "Sábados: 9:00 - 13:00 (sesiones de 60 o 90 minutos)",
      // "Disponibilidad para programar sesiones en horarios específicos",
      // "Posibilidad de paquetes de 4, 8 o 12 sesiones mensuales",
    ],
    features: [
      "Evaluación inicial completa de habilidades o condición física",
      "Plan de entrenamiento personalizado según objetivos",
      // "Análisis de video para corrección técnica",
      // "Seguimiento de progreso con métricas específicas",
      "Acceso a instalaciones de primer nivel",
      "Entrenadores con experiencia nacional e internacional",
      // "Informe mensual de progreso y recomendaciones",
    ],
    images: [
      {
        src: "/images/personal-training.jpg",
        alt: "Entrenamiento personal de hockey",
      },
      {
        src: "/placeholder-cjaaa.png",
        alt: "Entrenamiento personal de rugby",
      },
      {
      {
        src: "/placeholder-zfrkl.png",
        alt: "Análisis de rendimiento deportivo",
      },
      {
        src: "/placeholder-5am23.png",
        alt: "Entrenamiento juvenil de rugby",
      },
    ],
  },
  {
    title: "Academias de Hockey y Rugby",
    description:
      "Unite a nuestro programa estructurado con sesiones regulares de entrenamiento, talleres de desarrollo de habilidades y oportunidades de juego competitivo en hockey y rugby.",
    longDescription:
      "Las Academias GOAT Sports ofrecen un programa integral de desarrollo para jugadores de hockey y rugby de todos los niveles. Los participantes entrenan en grupos reducidos organizados por edad y nivel, lo que permite una atención integral dentro de un entorno de equipo.",
    schedule: [
      "Hockey - Lunes a Viernes 18:00 - 21:00",
      "Rugby - Miercoles y Viernes de 17:00 a 19:00",
      "Sesiones adicionales de preparación física",
    ],
    features: [
      "Grupos reducidos (máximo 8 jugadores por entrenador)",
      "Programa estructurado con objetivos mensuales",
      "Entrenadores especializados con experiencia nacional e internacional",
      "Acceso a clínicas especiales con jugadores profesionales",
    ],
    images: [
      {
        src: "/images/hockey-academy.jpg",
        alt: "Entrenamiento de academia de hockey",
      },
      {
        src: "/placeholder-5am23.png",
        alt: "Entrenamiento juvenil de rugby",
      },
      {
        src: "/placeholder-6u7hx.png",
        alt: "Práctica de equipo de hockey",
      },
      {
        src: "/placeholder-x7ldx.png",
        alt: "Taller de habilidades de rugby",
      },
    ],
  },
  {
    title: "Vení a entrenar con tu equipo",
    description:
      "Alquilá nuestras instalaciones de primer nivel para entrenamientos con tu equipo. Acceso completo a campos, equipamiento y todo lo que necesitas para entrenar.",
    longDescription:
      "Ofrecemos nuestras instalaciones para equipos que buscan un espacio profesional para sus entrenamientos. El alquiler incluye acceso completo a nuestros campos de juego con superficie sintética profesional, equipamiento de entrenamiento especializado y gimnasio de alto rendimiento Opcionalmente, podemos proporcionar entrenadores especializados para sesiones específicas o clínicas temáticas. Nuestras instalaciones son ideales para equipos de club, selecciones, equipos escolares o grupos corporativos que buscan una experiencia de entrenamiento premium.",
    schedule: [
      "Lunes a viernes: 7:00 - 23:00 (sujeto a disponibilidad)",
      "Sábados: 8:00 - 13:00",
      "Posibilidad de reservas recurrentes semanales o mensuales",
      "Horarios especiales disponibles para concentraciones o jornadas intensivas",
    ],
    features: [
      "Campos de juego con superficie sintética profesional",
      "Equipamiento completo de entrenamiento",
      "Acceso a gimnasio de alto rendimiento",
      "Vestuarios con duchas",
      "Opción de contratar entrenadores especializados",
    ],
    images: [
      {
        src: "/placeholder-arx5u.png",
        alt: "Equipo de hockey entrenando",
      },
      {
        src: "/placeholder-lom5l.png",
        alt: "Sesión de entrenamiento de equipo de rugby",
      },
      {
        src: "/placeholder-6lvip.png",
        alt: "Análisis de video para equipos deportivos",
      },
      {
        src: "/placeholder-y0egj.png",
        alt: "Vestuarios de instalaciones deportivas",
      },
    ],
  },
]

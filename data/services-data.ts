import type { ServiceDetails } from "@/components/service-modal"

export const servicesData: ServiceDetails[] = [
  {
    title: "Entrenamiento Personalizado",
    description:
      "Sesiones individuales adaptadas a tus necesidades específicas. Desarrolla tus habilidades en hockey, fútbol, rugby o alto rendimiento con atención personalizada de nuestros entrenadores expertos.",
    longDescription:
      "Nuestro programa de entrenamiento personalizado está diseñado para maximizar tu potencial deportivo a través de sesiones individualizadas. Trabajamos con un enfoque integral que abarca aspectos técnicos, tácticos, físicos y mentales. Cada sesión es planificada específicamente para ti, considerando tus objetivos, nivel actual y posición de juego. Nuestros entrenadores expertos utilizan metodologías avanzadas y tecnología de análisis para identificar áreas de mejora y desarrollar un plan progresivo que te lleve al siguiente nivel.",
    schedule: [
      "Lunes a Viernes: 8:00 - 21:00 (sesiones de 60 o 90 minutos)",
      "Sábados: 9:00 - 13:00 (sesiones de 60 o 90 minutos)",
      "Disponibilidad para programar sesiones en horarios específicos",
      "Posibilidad de paquetes de 4, 8 o 12 sesiones mensuales",
    ],
    features: [
      "Evaluación inicial completa de habilidades y condición física",
      "Plan de entrenamiento personalizado según objetivos",
      "Análisis de video para corrección técnica",
      "Seguimiento de progreso con métricas específicas",
      "Acceso a instalaciones de primer nivel",
      "Entrenadores certificados con experiencia internacional",
      "Informe mensual de progreso y recomendaciones",
    ],
    images: [
      {
        src: "/images/hockey-agility-training.jpeg",
        alt: "Entrenamiento de agilidad con entrenador personalizado",
      },
      {
        src: "/images/hockey-stick-technique.jpeg",
        alt: "Práctica de técnica con palo de hockey",
      },
      {
        src: "/images/hockey-goal-practice.jpeg",
        alt: "Entrenamiento de portería y precisión",
      },
      {
        src: "/images/personal-training.jpg",
        alt: "Entrenamiento personal de hockey",
      },
    ],
  },
  {
    title: "Academias de Hockey y Rugby",
    description:
      "Únete a nuestro programa estructurado con sesiones regulares de entrenamiento, talleres de desarrollo de habilidades y oportunidades de juego competitivo en hockey y rugby.",
    longDescription:
      "Las Academias GOAT Sports ofrecen un programa integral de desarrollo para jugadores de hockey y rugby de todos los niveles. Nuestro enfoque estructurado combina entrenamiento técnico, táctico, físico y mental, siguiendo una metodología progresiva que ha demostrado resultados excepcionales. Los participantes entrenan en grupos reducidos organizados por edad y nivel, lo que permite una atención personalizada dentro de un entorno de equipo. El programa incluye sesiones regulares de entrenamiento, talleres especializados, partidos amistosos y la participación en torneos locales e internacionales.",
    schedule: [
      "Hockey - Categoría Sub-12: Lunes y Miércoles 17:30 - 19:00",
      "Hockey - Categoría Sub-16: Lunes y Miércoles 19:00 - 20:30",
      "Hockey - Categoría Adultos: Martes y Jueves 19:00 - 20:30",
      "Rugby - Categoría Sub-14: Martes y Jueves 17:30 - 19:00",
      "Rugby - Categoría Sub-18: Martes y Jueves 19:00 - 20:30",
      "Rugby - Categoría Adultos: Lunes y Miércoles 20:30 - 22:00",
      "Sesiones adicionales de preparación física: Viernes 18:00 - 19:30",
    ],
    features: [
      "Grupos reducidos (máximo 12 jugadores por entrenador)",
      "Programa estructurado con objetivos trimestrales",
      "Entrenadores especializados por posición",
      "Análisis de video y feedback personalizado",
      "Preparación física específica para cada deporte",
      "Participación en torneos y competiciones",
      "Informes de progreso trimestrales",
      "Acceso a clínicas especiales con jugadores profesionales",
    ],
    images: [
      {
        src: "/images/hockey-academy.jpg",
        alt: "Entrenamiento de academia de hockey",
      },
      {
        src: "/images/rugby-training-indoor.jpeg",
        alt: "Entrenamiento de rugby en instalaciones indoor",
      },
      {
        src: "/images/hockey-indoor-training.jpeg",
        alt: "Jóvenes jugadoras practicando técnicas de hockey en cancha cubierta",
      },
      {
        src: "/images/hockey-outdoor-training.jpeg",
        alt: "Entrenamiento técnico de hockey sobre césped al aire libre",
      },
    ],
  },
  {
    title: "Vení a entrenar con tu equipo",
    description:
      "Alquilá nuestras instalaciones de primer nivel para entrenamientos con tu equipo. Acceso completo a campos, equipamiento y todo lo que necesitas para entrenar.",
    longDescription:
      "Ofrecemos nuestras instalaciones de primer nivel para equipos que buscan un espacio profesional para sus entrenamientos. El alquiler incluye acceso completo a nuestros campos de juego con superficie sintética profesional, equipamiento de entrenamiento especializado, gimnasio de alto rendimiento y salas de análisis de video. Opcionalmente, podemos proporcionar entrenadores especializados para sesiones específicas o clínicas temáticas. Nuestras instalaciones son ideales para equipos de club, selecciones, equipos escolares o grupos corporativos que buscan una experiencia de entrenamiento premium.",
    schedule: [
      "Disponibilidad de lunes a viernes: 8:00 - 22:00",
      "Sábados: 8:00 - 20:00",
      "Domingos: 9:00 - 18:00 (con reserva previa)",
      "Reservas por sesión (2 horas) o media jornada (4 horas)",
      "Posibilidad de reservas recurrentes semanales o mensuales",
      "Horarios especiales disponibles para concentraciones o jornadas intensivas",
    ],
    features: [
      "Campo de juego con superficie sintética profesional",
      "Equipamiento completo de entrenamiento",
      "Acceso a gimnasio de alto rendimiento",
      "Sala de análisis de video con tecnología avanzada",
      "Vestuarios con duchas y lockers",
      "Opción de contratar entrenadores especializados",
      "Servicio de hidratación incluido",
      "Estacionamiento privado",
      "Opción de catering para grupos (costo adicional)",
    ],
    images: [
      {
        src: "/images/team-training-group.jpeg",
        alt: "Grupo de entrenamiento en las instalaciones de GOAT Sports",
      },
      {
        src: "/images/team-recovery-session.jpeg",
        alt: "Sesión de recuperación muscular con rodillos de espuma en las instalaciones",
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

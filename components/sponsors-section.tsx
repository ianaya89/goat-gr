"use client"
import ImageWithFallback from "./image-with-fallback"

interface SponsorLogo {
  name: string
  src: string
  alt: string
  width: number
}

const sponsorLogos: SponsorLogo[] = [
  {
    name: "Dole",
    src: "/images/sponsors/dole-logo.svg",
    alt: "Dole - Patrocinador Oficial",
    width: 140,
  },
  {
    name: "Treos",
    src: "/images/sponsors/treos-logo.svg",
    alt: "Treos - Patrocinador Oficial",
    width: 160,
  },
  {
    name: "Maraton",
    src: "/images/sponsors/maraton.png",
    alt: "Maraton - Patrocinador Oficial",
    width: 100,
  },
    {
    name: "Balling",
    src: "/images/sponsors/balling-logo.webp",
    alt: "Balling - Patrocinador Oficial",
    width: 140,
  },
    {
    name: "Lecker",
    src: "/images/sponsors/balling-logo.svg",
    alt: "Barritas Lecker - Patrocinador Oficial",
    width: 140,
  },
  {
    name: "Algabo",
    src: "/images/sponsors/algabo.png",
    alt: "Algabo - Patrocinador Oficial",
    width: 140,
  },
]

export default function SponsorsSection() {
  return (
    <section className="py-12 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">Nuestros Patrocinadores</h2>
          <p className="text-white/80 max-w-2xl mx-auto text-sm">
            Agradecemos a las marcas que confían en nosotros y hacen que nuestro trabajo sea más facil
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {sponsorLogos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center">
              <ImageWithFallback
                src={logo.src || "/placeholder.svg"}
                alt={logo.alt}
                fallbackSrc={`/placeholder.svg?height=64&width=${logo.width}&query=${logo.name}%20logo`}
                className="h-12 md:h-16 w-auto object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                style={{ maxWidth: logo.width }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

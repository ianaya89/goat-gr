"use client"

import { useState } from "react"

interface SponsorLogo {
  name: string
  src: string
  alt: string
  width: number
}

const sponsorLogos: SponsorLogo[] = [
  {
    name: "Dole",
    src: "/images/sponsors/dole-logo.png",
    alt: "Dole - Patrocinador Oficial",
    width: 140,
  },
  {
    name: "Treos",
    src: "/images/sponsors/treos-logo.svg",
    alt: "Treos - Patrocinador Oficial",
    width: 160,
  },
]

export default function SponsorsSection() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

  const handleImageError = (name: string) => {
    setImageErrors((prev) => ({
      ...prev,
      [name]: true,
    }))
  }

  return (
    <section className="py-12 bg-blue-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">Nuestros Patrocinadores</h2>
          <p className="text-white/80 max-w-2xl mx-auto text-sm">
            Agradecemos a las marcas que confían en nosotros y hacen posible nuestro trabajo
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {sponsorLogos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center">
              {imageErrors[logo.name] ? (
                <div className="h-16 flex items-center justify-center text-white font-bold">{logo.name}</div>
              ) : (
                <img
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  className="h-12 md:h-16 w-auto object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                  style={{ maxWidth: logo.width }}
                  onError={() => handleImageError(logo.name)}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"

interface DiagonalImageSplitProps {
  image1: string
  image2: string
  alt1: string
  alt2: string
  className?: string
  height?: string
}

export default function DiagonalImageSplit({
  image1,
  image2,
  alt1,
  alt2,
  className = "h-[400px]",
  height = "400px",
}: DiagonalImageSplitProps) {
  const [image1Error, setImage1Error] = useState(false)
  const [image2Error, setImage2Error] = useState(false)

  const fallbackImage1 = `/placeholder.svg?height=${height}&width=600&query=${encodeURIComponent(alt1)}`
  const fallbackImage2 = `/placeholder.svg?height=${height}&width=600&query=${encodeURIComponent(alt2)}`

  return (
    <div className={`relative overflow-hidden rounded-lg shadow-lg ${className}`}>
      {/* Primera imagen (parte superior izquierda) */}
      <div className="absolute inset-0">
        <img
          src={image1Error ? fallbackImage1 : image1}
          alt={alt1}
          className="w-full h-full object-cover"
          onError={() => setImage1Error(true)}
        />
      </div>

      {/* Segunda imagen (parte inferior derecha) con clip-path diagonal */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
        }}
      >
        <img
          src={image2Error ? fallbackImage2 : image2}
          alt={alt2}
          className="w-full h-full object-cover"
          onError={() => setImage2Error(true)}
        />
      </div>

      {/* Línea diagonal decorativa */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom right, transparent calc(50% - 1px), rgba(255,255,255,0.7) calc(50% - 1px), rgba(255,255,255,0.7) calc(50% + 1px), transparent calc(50% + 1px))",
        }}
      ></div>
    </div>
  )
}

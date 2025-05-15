"use client"
import ImageWithFallback from "./image-with-fallback"

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
  className = "h-[500px]",
  height = "500px",
}: DiagonalImageSplitProps) {
  const fallbackImage1 = `/placeholder.svg?height=${height}&width=600&query=${encodeURIComponent(alt1)}`
  const fallbackImage2 = `/placeholder.svg?height=${height}&width=600&query=${encodeURIComponent(alt2)}`

  return (
    <div className={`relative overflow-hidden rounded-lg shadow-lg ${className}`}>
      {/* Primera imagen (parte superior izquierda) */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={image1 || "/placeholder.svg"}
          alt={alt1}
          fallbackSrc={fallbackImage1}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Segunda imagen (parte inferior derecha) con clip-path diagonal */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
        }}
      >
        <ImageWithFallback
          src={image2 || "/placeholder.svg"}
          alt={alt2}
          fallbackSrc={fallbackImage2}
          className="w-full h-full object-cover"
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

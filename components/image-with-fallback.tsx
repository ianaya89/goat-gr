"use client"

import type React from "react"

import { useState } from "react"

interface ImageWithFallbackProps {
  src: string
  alt: string
  fallbackSrc?: string
  width?: number
  height?: number
  className?: string
  fill?: boolean
  priority?: boolean
  quality?: number
  sizes?: string
}

export default function ImageWithFallback({
  src,
  alt,
  fallbackSrc,
  width,
  height,
  className,
  fill = false,
  priority = false,
  quality,
  sizes,
  ...rest
}: ImageWithFallbackProps &
  Omit<React.ComponentProps<"img">, "src" | "alt" | "width" | "height" | "loading" | "fill">) {
  const [imgSrc, setImgSrc] = useState<string>(src)
  const [error, setError] = useState<boolean>(false)

  // Generar una URL de placeholder basada en el texto alt
  const generatePlaceholderUrl = () => {
    const placeholderWidth = width || 400
    const placeholderHeight = height || 300
    return `/placeholder.svg?height=${placeholderHeight}&width=${placeholderWidth}&query=${encodeURIComponent(alt)}`
  }

  const handleError = () => {
    setError(true)
    if (fallbackSrc) {
      setImgSrc(fallbackSrc)
    } else {
      setImgSrc(generatePlaceholderUrl())
    }
  }

  // Si estamos usando fill, no necesitamos width y height
  if (fill) {
    return (
      <div className={`relative ${className || ""}`} style={{ width: "100%", height: "100%" }}>
        <img
          src={error ? imgSrc : src}
          alt={alt}
          className={`object-cover w-full h-full ${className || ""}`}
          onError={handleError}
          loading={priority ? "eager" : "lazy"}
          {...rest}
        />
      </div>
    )
  }

  // Versión normal con width y height
  return (
    <img
      src={error ? imgSrc : src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={handleError}
      loading={priority ? "eager" : "lazy"}
      {...rest}
    />
  )
}

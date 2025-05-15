"use client"

import type React from "react"

import { useState } from "react"

interface ImageWithFallbackProps {
  src: string
  fallbackSrc: string
  alt: string
  width?: number
  height?: number
  className?: string
  style?: React.CSSProperties
}

export default function ImageWithFallback({
  src,
  fallbackSrc,
  alt,
  width,
  height,
  className,
  style,
  ...rest
}: ImageWithFallbackProps &
  Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src" | "alt" | "width" | "height" | "style">) {
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <img
      src={imgSrc || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={style}
      onError={() => {
        setImgSrc(fallbackSrc)
      }}
      {...rest}
    />
  )
}

"use client"

import { useEffect } from "react"

export default function FaviconComponent() {
  useEffect(() => {
    // Función para actualizar dinámicamente el favicon
    const updateFavicon = () => {
      // Eliminar cualquier favicon existente
      const existingFavicons = document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]')
      existingFavicons.forEach((favicon) => favicon.remove())

      // Crear nuevos elementos para el favicon con timestamp para evitar caché
      const timestamp = new Date().getTime()

      // Favicon principal
      const link = document.createElement("link")
      link.rel = "icon"
      link.href = `/favicon.ico?v=${timestamp}`
      document.head.appendChild(link)

      // Shortcut icon
      const shortcutLink = document.createElement("link")
      shortcutLink.rel = "shortcut icon"
      shortcutLink.href = `/favicon.ico?v=${timestamp}`
      document.head.appendChild(shortcutLink)

      // Apple touch icon
      const appleLink = document.createElement("link")
      appleLink.rel = "apple-touch-icon"
      appleLink.href = `/apple-touch-icon.png?v=${timestamp}`
      document.head.appendChild(appleLink)
    }

    // Actualizar el favicon cuando el componente se monte
    updateFavicon()

    // Opcional: actualizar periódicamente para asegurar que siempre esté visible
    const interval = setInterval(updateFavicon, 60000) // Cada minuto

    return () => clearInterval(interval)
  }, [])

  return null
}

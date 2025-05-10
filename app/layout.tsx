import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

// Asegurarnos de que el favicon esté correctamente configurado en los metadatos
export const metadata: Metadata = {
  title: "GOAT Sports - Entrenamiento y Academia de Hockey sobre Césped",
  description:
    "Entrenamiento experto de hockey sobre césped, formación personalizada y programas inmersivos diseñados para elevar tus habilidades al siguiente nivel.",
  icons: {
    icon: "/favicon.ico",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

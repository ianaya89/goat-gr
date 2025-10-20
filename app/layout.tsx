import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import IntercomProvider from "@/components/intercom-provider"
import { Analytics } from '@vercel/analytics/next';


const inter = Inter({ subsets: ["latin"] })

// Metadatos mejorados para SEO con favicon actualizado
export const metadata: Metadata = {
  title: "GOAT Sports - Entrenamiento y Academia de Hockey sobre Césped, Fútbol y Rugby",
  description:
    "Academia deportiva especializada en hockey sobre césped, fútbol y rugby. Ofrecemos entrenamiento personalizado, campus deportivos y servicios de consultoría para clubes y colegios en Buenos Aires, Argentina.",
  keywords: [
    "hockey sobre césped",
    "entrenamiento deportivo",
    "academia de hockey",
    "fútbol",
    "rugby",
    "campus deportivo",
    "consultoría deportiva",
    "Buenos Aires",
    "Argentina",
  ],
  authors: [{ name: "GOAT Sports" }],
  creator: "GOAT Sports",
  publisher: "GOAT Sports",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://goatsports.ar"),
  alternates: {
    canonical: "/",
    languages: {
      "es-AR": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://goatsports.ar",
    title: "GOAT Sports - Academia Deportiva de Elite",
    description:
      "Entrenamiento experto de hockey sobre césped, fútbol y rugby. Formación personalizada y programas inmersivos para elevar tus habilidades al siguiente nivel.",
    siteName: "GOAT Sports",
    images: [
      {
        url: "https://goatsports.ar/og-image.png",
        width: 1200,
        height: 630,
        alt: "GOAT Sports - Academia Deportiva",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GOAT Sports - Academia Deportiva de Elite",
    description:
      "Entrenamiento experto de hockey sobre césped, fútbol y rugby. Formación personalizada y programas inmersivos para elevar tus habilidades al siguiente nivel.",
    images: ["https://goatsports.ar/twitter-image.jpg"],
    creator: "@goatsports",
    site: "@goatsports",
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    other: {
      me: ["mailto:hola@goatsports.ar", "https://goatsports.ar"],
    },
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
      <head>

        {/* Favicon simplificado */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Etiquetas adicionales para dispositivos Apple */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        {/* Etiqueta de región geográfica */}
        <meta name="geo.region" content="AR-B" />
        <meta name="geo.placename" content="Buenos Aires" />

        {/* Etiqueta de color del tema */}
        <meta name="theme-color" content="#00237c" />

        {/* Facebook domain verification */}
        <meta name="facebook-domain-verification" content="ec3c0v5mlglmgdoutyxmpl8cogu5tp" />

        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '691387123614857');
fbq('track', 'PageView');`
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{display:'none'}}
            src="https://www.facebook.com/tr?id=691387123614857&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Analytics />
          <IntercomProvider />

          {/* JSON-LD para datos estructurados */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "SportsClub",
                name: "GOAT Sports",
                description: "Academia deportiva especializada en hockey sobre césped, fútbol y rugby.",
                url: "https://goatsports.ar",
                logo: "https://goatsports.ar/images/goat-sports-logo.png",
                image: "https://goatsports.ar/images/training-center-main.png",
                telephone: "+5491126578585",
                email: "hola@goatsports.ar",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "San Martin 1649",
                  addressLocality: "Vicente Lopez",
                  postalCode: "1638",
                  addressRegion: "Buenos Aires",
                  addressCountry: "AR",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: "-34.5308",
                  longitude: "-58.4825",
                },
                openingHours: "Mo,Tu,We,Th,Fr 08:00-21:00",
                sameAs: [
                  "https://www.facebook.com/goatsports",
                  "https://www.instagram.com/goatsports",
                  "https://www.tiktok.com/@goatsports",
                ],
                offers: {
                  "@type": "Offer",
                  name: "Programas de entrenamiento deportivo",
                  description: "Entrenamiento personalizado, campus deportivos y servicios de consultoría.",
                },
              }),
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Kreisen - Repuestos Volkswagen | Más de 20 años de experiencia",
  description:
    "Especialistas en repuestos adaptables para vehículos Volkswagen. Más de 20 años de experiencia, +600 distribuidores y +7000 referencias en toda Argentina.",
  generator: "Gaitan Javier Emanuel",
  keywords: ["Kreisen", "repuestos Volkswagen", "autopartes", "Argentina", "repuestos adaptables","Volkswagen"],
  icons: {
    icon: [
      {
        url: "/kreisenicon.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/kreisenicon.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "//kreisenicon.png",
        type: "image/svg+xml",
      },
    ],
    apple: "//kreisenicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
  <html lang="es" className="scroll-smooth">
    <head>
    

      {/* Adobe Typekit */}
      <link rel="stylesheet" href="https://use.typekit.net/eyf7mtg.css" />
    </head>

    <body className="font-quicksand">
      {children}
      <Analytics />
    </body>
  </html>
)

}

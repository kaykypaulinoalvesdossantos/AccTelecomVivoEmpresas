import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Vivo Empresas - Soluções Completas para sua Empresa",
  description:
    "Descubra os melhores planos móveis, internet fibra e soluções digitais para empresas. Vivo Empresas oferece conectividade e tecnologia de ponta.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${dmSans.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}

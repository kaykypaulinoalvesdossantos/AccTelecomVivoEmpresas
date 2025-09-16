"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { pacoteEmpresaConfig } from "@/data/pacote-empresa-data"

export function PacoteEmpresaHeroSection() {
  const { banner, hero, contact } = pacoteEmpresaConfig

  return (
    <>
      {/* Banner Principal */}
      <section className="bg-gradient-to-r from-purple-900 via-purple-800 to-pink-600 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h1 className="text-lg sm:text-xl font-bold">{banner.title}</h1>
              <div className="text-2xl sm:text-3xl font-bold text-yellow-300">{banner.price}</div>
            </div>
            <a
              href={`tel:${contact.phone}`}
              className="bg-white text-purple-900 hover:bg-purple-50 px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap"
            >
              {banner.button}
            </a>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200 text-sm sm:text-base">Pacotes Empresariais</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 lg:mb-6">
              {hero.title}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 lg:mb-8 max-w-3xl mx-auto">
              {hero.subtitle}
            </p>
            <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">
              {hero.description}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

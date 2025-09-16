"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Wifi, ArrowRight } from "lucide-react"
import { fibraRepetidorConfig } from "@/data/fibra-repetidor-data"

export function FibraRepetidorHeroSection() {
  const { hero, contact } = fibraRepetidorConfig

  return (
    <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-pink-600 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="space-y-3 md:space-y-4">
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 text-sm md:text-base mx-auto lg:mx-0">
                <Wifi className="w-4 h-4 mr-2" />
                Wi-Fi Mesh
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {hero.title}
              </h1>
              <p className="text-base md:text-xl text-purple-100 leading-relaxed max-w-3xl mx-auto lg:mx-0">
                {hero.subtitle}
              </p>
              <p className="text-sm md:text-base text-purple-200 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {hero.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-purple-900 hover:bg-purple-50 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold rounded-lg transition-colors"
              >
                {hero.primaryButton}
              </a>
              <a
                href={`tel:${contact.phone}`}
                className="inline-block border border-white text-white hover:bg-white/10 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold rounded-lg transition-colors bg-transparent"
              >
                {hero.secondaryButton}
              </a>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {hero.badges.map((badge, index) => (
                <Badge
                  key={index}
                  className={`px-3 py-1 text-xs sm:text-sm ${
                    badge.color === "green"
                      ? "bg-green-500 text-white hover:bg-green-600"
                      : "bg-purple-500 text-white hover:bg-purple-600"
                  }`}
                >
                  {badge.text}
                </Badge>
              ))}
            </div>
          </div>

          {/* Device Illustration */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-2xl bg-gray-800 flex items-center justify-center relative">
                  <div className="w-16 h-16 rounded-lg bg-white flex items-center justify-center">
                    <Wifi className="w-8 h-8 text-purple-600" />
                  </div>
                  {/* Light trails */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-purple-400 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/2 -right-4 w-2 h-2 bg-purple-300 rounded-full animate-pulse"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Repetidor Wi-Fi 6</h3>
                <p className="text-purple-100 text-sm">Tecnologia Mesh avançada</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

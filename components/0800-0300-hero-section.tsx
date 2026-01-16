"use client"

import React from "react"
import { Phone, MapPin, Clock, Globe, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { oitoZeroZeroConfig } from "@/data/0800-0300-data"

const iconMap = {
  Phone,
  MapPin,
  Clock,
  Globe
}

export function OitoZeroZeroHeroSection(): React.JSX.Element {
  const { hero, contact } = oitoZeroZeroConfig

  return (
    <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-pink-600 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 text-sm px-4 py-2">
              {hero.badge}
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {hero.title}
            </h1>

            <p className="text-xl text-purple-100 leading-relaxed max-w-2xl">
              {hero.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-8">
              {hero.stats.map((stat, index) => {
                const IconComponent = iconMap[stat.icon as keyof typeof iconMap]
                return (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4 mx-auto">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-purple-200">
                      {stat.label}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-purple-900 hover:bg-purple-50 font-bold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  {hero.primaryButton}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-900 font-bold px-8 py-4 text-lg transition-all duration-300 cursor-pointer"
              >
                <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  {hero.secondaryButton}
                </a>
              </Button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20 min-h-[400px] lg:min-h-[500px]">
              {/* Phone Icon */}
              <div className="flex items-center justify-center w-24 h-24 lg:w-32 lg:h-32 bg-white/20 rounded-3xl mb-6 lg:mb-8 mx-auto">
                <Phone className="w-12 h-12 lg:w-16 lg:h-16 text-white" />
              </div>

              {/* 0800 Bubble */}
              <div className="absolute top-6 right-6 lg:top-8 lg:right-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl px-4 py-3 lg:px-6 lg:py-4 shadow-2xl z-10">
                <div className="text-white font-bold text-lg lg:text-2xl">0800</div>
                <div className="text-pink-100 text-xs lg:text-sm">Gratuito</div>
              </div>

              {/* 0300 Bubble */}
              <div className="absolute bottom-6 left-6 lg:bottom-8 lg:left-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl px-4 py-3 lg:px-6 lg:py-4 shadow-2xl z-10">
                <div className="text-white font-bold text-lg lg:text-2xl">0300</div>
                <div className="text-purple-100 text-xs lg:text-sm">Regional</div>
              </div>

              {/* Central Text */}
              <div className="text-center pt-8 lg:pt-12">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 lg:mb-4">
                  Soluções de Atendimento
                </h3>
                <p className="text-purple-100 text-base lg:text-lg">
                  Melhore a experiência dos seus clientes por meio dos nossos serviços
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import React from "react"
import { MapPin, Headphones, Globe, DollarSign, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { numeroUnicoConfig } from "@/data/numero-unico-data"

const iconMap = {
  MapPin,
  Headphones,
  Globe,
  DollarSign
}

export function NumeroUnicoHeroSection(): React.JSX.Element {
  const { hero, contact } = numeroUnicoConfig

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


            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-purple-900 hover:bg-purple-50 font-bold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <a href="https://wa.me/551123629665" target="_blank" rel="noopener noreferrer">
                  {hero.primaryButton}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              
              <Button
                asChild
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-900 font-bold px-8 py-4 text-lg transition-all duration-300 cursor-pointer"
              >
                <a href="https://wa.me/551123629665" target="_blank" rel="noopener noreferrer">
                  {hero.secondaryButton}
                </a>
              </Button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20 min-h-[400px] lg:min-h-[500px]">
              {/* Central Icon */}
              <div className="flex items-center justify-center w-24 h-24 lg:w-32 lg:h-32 bg-white/20 rounded-3xl mb-6 lg:mb-8 mx-auto">
                <Globe className="w-12 h-12 lg:w-16 lg:h-16 text-white" />
              </div>
              
              {/* Central Text */}
              <div className="text-center">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 lg:mb-4">
                  Número Único Nacional
                </h3>
                <p className="text-purple-100 text-base lg:text-lg">
                  Cobertura em 67 localidades do Brasil
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

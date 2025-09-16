"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Headphones, Shield, Zap, Wifi, Briefcase } from "lucide-react"
import { fibraRepetidorConfig } from "@/data/fibra-repetidor-data"

export function FibraRepetidorServicosSection() {
  const { servicos } = fibraRepetidorConfig

  const IconComponent = (index: number) => {
    switch (index) {
      case 0: return Headphones
      case 1: return Shield
      case 2: return Zap
      case 3: return Wifi
      case 4: return Briefcase
      default: return Check
    }
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200 text-sm sm:text-base">Serviços Inclusos</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">{servicos.title}</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            {servicos.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicos.services.map((service, index) => {
            const Icon = IconComponent(index)
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

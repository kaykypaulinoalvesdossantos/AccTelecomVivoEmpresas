"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wifi, Users, Building, Zap } from "lucide-react"
import { fibraRepetidorConfig } from "@/data/fibra-repetidor-data"

export function FibraRepetidorSolucaoSection() {
  const { solucao } = fibraRepetidorConfig

  const IconComponent = (index: number) => {
    switch (index) {
      case 0: return Users
      case 1: return Building
      case 2: return Zap
      case 3: return Wifi
      default: return Wifi
    }
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200 text-sm sm:text-base">Solução Ideal</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">{solucao.title}</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            {solucao.description}
          </p>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{solucao.subtitle}</h3>
        </div>

        {/* Coverage Examples */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {solucao.examples.map((example, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">{example.routers}</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {example.routers} {example.routers === 1 ? 'roteador' : 'roteadores'}
                </h4>
                <div className="text-2xl font-bold text-purple-600 mb-2">{example.coverage}</div>
                <p className="text-sm text-gray-600">{example.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {solucao.features.map((feature, index) => {
            const Icon = IconComponent(index)
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Network, TrendingUp, Settings, Headphones } from "lucide-react"
import { redeCorporativaConfig } from "@/data/rede-corporativa-data"

export function RedeCorporativaBenefitsSection() {
  const { benefits } = redeCorporativaConfig

  const IconComponent = (iconName: string) => {
    switch (iconName) {
      case "Shield": return Shield
      case "Network": return Network
      case "TrendingUp": return TrendingUp
      case "Settings": return Settings
      case "Headphones": return Headphones
      default: return Shield
    }
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200 text-sm sm:text-base">Vantagens</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">{benefits.title}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.items.map((benefit, index) => {
            const Icon = IconComponent(benefit.icon)
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-center">
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Shield, Users, Headphones, BarChart3, Globe, Wifi, Router } from "lucide-react"
import { fiberConfig } from "@/data/fiber-data"

export function FiberBenefits() {
  const { stats, benefits } = fiberConfig

  const iconMap = {
    Zap: Zap,
    Shield: Shield,
    Users: Users,
    Headphones: Headphones,
    BarChart3: BarChart3,
    Globe: Globe,
    Wifi: Wifi,
    Router: Router
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200 text-sm sm:text-base">Serviços Inclusos</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">Serviços inclusos nos pacotes de internet para empresas</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            internet corporativa a partir de R$ 79,99 e Wi-Fi 6 com instalação rápida e atendimento personalizado.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {stats.map((stat, index) => {
            const IconComponent = iconMap[stat.icon as keyof typeof iconMap]
            return (
              <Card key={index} className="text-center p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-3 sm:mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-600 mb-1 sm:mb-2">{stat.number}</div>
                  <div className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {benefits.map((benefit, index) => {
            const IconComponent = iconMap[benefit.icon as keyof typeof iconMap]
            return (
              <Card
                key={index}
                className="p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-gray-50 to-white"
              >
                <CardContent className="p-0">
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-4 sm:mb-6 bg-gradient-to-r ${benefit.color} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg`}
                  >
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{benefit.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

      </div>
    </section>
  )
}
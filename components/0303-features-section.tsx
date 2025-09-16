"use client"

import React from "react"
import { BarChart, Settings, User, Shield } from "lucide-react"
import { Card } from "@/components/ui/card"
import { zero303Config } from "@/data/0303-data"

const iconMap = {
  BarChart,
  Settings,
  User,
  Shield
}

export function Zero303FeaturesSection(): React.JSX.Element {
  const { features } = zero303Config

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Recursos do Serviço 0303
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto">
            Funcionalidades avançadas para otimizar seu atendimento telefônico
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap]
            return (
              <Card
                key={index}
                className="p-6 lg:p-8 rounded-2xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 group text-center"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            )
          })}
        </div>

      </div>
    </section>
  )
}

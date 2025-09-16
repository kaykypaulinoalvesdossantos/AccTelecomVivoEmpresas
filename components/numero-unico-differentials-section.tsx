"use client"

import React from "react"
import { BarChart, Settings, User } from "lucide-react"
import { Card } from "@/components/ui/card"
import { numeroUnicoConfig } from "@/data/numero-unico-data"

const iconMap = {
  BarChart,
  Settings,
  User
}

export function NumeroUnicoDifferentialsSection(): React.JSX.Element {
  const { differentials } = numeroUnicoConfig

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Diferenciais Vivo Empresas
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto">
            Recursos exclusivos para maximizar a eficiência do seu Número Único Nacional
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {differentials.map((differential, index) => {
            const IconComponent = iconMap[differential.icon as keyof typeof iconMap]
            return (
              <Card
                key={index}
                className="p-6 lg:p-8 rounded-2xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                      {differential.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                      {differential.description}
                    </p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

      </div>
    </section>
  )
}

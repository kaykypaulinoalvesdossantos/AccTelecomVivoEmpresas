"use client"

import React from "react"
import { Phone, DollarSign, ArrowRight, Headphones } from "lucide-react"
import { Card } from "@/components/ui/card"
import { zero303Config } from "@/data/0303-data"

const iconMap = {
  Phone,
  DollarSign,
  ArrowRight,
  Headphones
}

export function Zero303HowItWorksSection(): React.JSX.Element {
  const { howItWorks } = zero303Config

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Como Funciona o Serviço 0303
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto">
            Processo simples e eficiente para implementar sua solução de comunicação
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {howItWorks.map((step, index) => {
            const IconComponent = iconMap[step.icon as keyof typeof iconMap]
            return (
              <Card
                key={index}
                className="relative p-6 lg:p-8 rounded-2xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 text-center"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{step.step}</span>
                </div>

                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-6 mx-auto">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                  {step.description}
                </p>
              </Card>
            )
          })}
        </div>

      </div>
    </section>
  )
}

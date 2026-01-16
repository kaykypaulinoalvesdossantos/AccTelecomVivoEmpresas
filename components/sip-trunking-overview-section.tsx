"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Phone, ChevronLeft, ChevronRight, Star, ArrowRight } from "lucide-react"
import { sipTrunkingConfig } from "@/data/sip-trunking-data"

export function SipTrunkingOverviewSection() {
  const { overview, contact } = sipTrunkingConfig
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(0, overview.plans.length - 3)
      return prevIndex >= maxIndex ? maxIndex : prevIndex + 1
    })
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex <= 0 ? 0 : prevIndex - 1
    })
  }

  const renderPlanCard = (plan: any, index: number) => {
    return (
      <div key={plan.id} className="w-1/3 flex-shrink-0 px-4">
        <div className="relative">
          {plan.popular && (
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-20">
              <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 text-xs shadow-lg">
                <Star className="w-3 h-3 mr-1" />
                Mais Popular
              </Badge>
            </div>
          )}

          <Card className={`relative transition-all duration-300 hover:shadow-2xl ${plan.popular ? "ring-2 ring-purple-500 scale-105 shadow-xl" : "hover:scale-105"} bg-white border border-gray-200`}>
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-900 mb-2">{plan.channels}</CardTitle>

              <div className="space-y-2 mt-4">
                <div className="text-xl sm:text-2xl font-bold text-gray-900">
                  {plan.price}
                </div>
                <div className="text-sm text-gray-600">{plan.period}</div>
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature: string, featureIndex: number) => (
                  <li key={featureIndex} className="flex items-start text-sm">
                    <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-3">
                <Button
                  className={`w-full ${plan.popular ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600" : "bg-purple-600 hover:bg-purple-700"} text-white`}
                  asChild
                >
                  <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                    Contratar Plano
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full text-sm"
                  asChild
                >
                  <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                    Mais Detalhes
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200 text-sm sm:text-base">Planos</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            {overview.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {overview.description}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Carrossel Container */}
          <div className="overflow-hidden px-8 py-8">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
            >
              {overview.plans.map((plan, index) => renderPlanCard(plan, index))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`p-3 rounded-full transition-all duration-200 ${currentIndex === 0
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-600 hover:bg-gray-50 shadow-lg border border-gray-200'
                }`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex space-x-2">
              {Array.from({ length: Math.max(1, overview.plans.length - 2) }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentIndex
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-110'
                      : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentIndex >= Math.max(0, overview.plans.length - 3)}
              className={`p-3 rounded-full transition-all duration-200 ${currentIndex >= Math.max(0, overview.plans.length - 3)
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-600 hover:bg-gray-50 shadow-lg border border-gray-200'
                }`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-xs sm:text-sm text-gray-500 mb-2">
            * Preços podem variar conforme localização e configuração específica.
          </p>
          <p className="text-xs sm:text-sm text-gray-500">
            Consulte condições especiais para empresas com múltiplas unidades.
          </p>
        </div>
      </div>
    </section>
  )
}
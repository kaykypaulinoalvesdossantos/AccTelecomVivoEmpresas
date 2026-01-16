"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Check } from "lucide-react"

export function MelhoresOfertasMobilePlansSection(): React.JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0)

  const plans = [
    {
      id: 1,
      name: "Moto G05 + 6GB",
      device: "Moto G05 For Business 4G",
      devicePrice: "R$ 38,00",
      planPrice: "R$ 39,99",
      totalPrice: "R$ 77,99",
      period: "/mês",
      badge: "OFERTA IMPERDÍVEL",
      badgeColor: "bg-red-100 text-red-800",
      popular: false,
      features: [
        "Smartphone Motorola 128GB",
        "Plano móvel 6GB",
        "24x sem juros",
        "Frete grátis"
      ]
    },
    {
      id: 2,
      name: "Galaxy A36 + 20GB",
      device: "Galaxy A36 5G",
      devicePrice: "R$ 88,00",
      planPrice: "R$ 59,99",
      totalPrice: "R$ 147,99",
      period: "/mês",
      badge: "OFERTA MAIS VENDIDA",
      badgeColor: "bg-green-100 text-green-800",
      popular: true,
      features: [
        "Smartphone Samsung 256GB",
        "Plano móvel 20GB",
        "24x sem juros",
        "Frete grátis"
      ]
    },
    {
      id: 3,
      name: "Galaxy S24 FE + 20GB",
      device: "Galaxy S24 FE",
      devicePrice: "R$ 127,00",
      planPrice: "R$ 59,99",
      totalPrice: "R$ 186,99",
      period: "/mês",
      badge: "OFERTA EXCLUSIVA",
      badgeColor: "bg-purple-100 text-purple-800",
      popular: false,
      features: [
        "Smartphone Samsung Premium",
        "Plano móvel 20GB",
        "24x sem juros",
        "Frete grátis"
      ]
    },
    {
      id: 4,
      name: "iPhone 15 + 100GB",
      device: "iPhone 15",
      devicePrice: "R$ 228,00",
      planPrice: "R$ 99,99",
      totalPrice: "R$ 327,99",
      period: "/mês",
      badge: "MENOR PREÇO POR GB",
      badgeColor: "bg-blue-100 text-blue-800",
      popular: false,
      features: [
        "iPhone 15 256GB",
        "Plano móvel 100GB",
        "24x sem juros",
        "Frete grátis"
      ]
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(0, plans.length - 3)
      return prevIndex >= maxIndex ? maxIndex : prevIndex + 1
    })
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex <= 0 ? 0 : prevIndex - 1
    })
  }

  const renderPlanCard = (plan: any, index: number) => {
    const isPopular = plan.popular
    return (
      <div key={plan.id} className="w-1/3 flex-shrink-0 px-4">
        <div className="relative">
          {plan.badge && (
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
              <Badge className={`${plan.badgeColor} text-xs font-semibold px-3 py-1`}>
                {plan.badge}
              </Badge>
            </div>
          )}
          <Card className={`bg-white border-2 transition-all duration-300 hover:shadow-xl hover:scale-105 ${isPopular ? 'border-purple-500 shadow-lg' : 'border-gray-200 hover:border-purple-300'
            }`}>
            <CardHeader className="text-center pb-4 pt-6">
              <CardTitle className="text-lg font-bold text-gray-900 mb-2">
                {plan.name}
              </CardTitle>
              <div className="text-sm text-gray-600 mb-2">
                {plan.device}
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-3 mb-6">
                {plan.features.map((feature: string, featureIndex: number) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="text-center mb-6">
                <div className="text-2xl font-bold text-purple-600 mb-1">
                  {plan.totalPrice}
                  <span className="text-sm text-gray-600">{plan.period}</span>
                </div>
                <div className="text-xs text-gray-500">
                  Aparelho: {plan.devicePrice} + Plano: {plan.planPrice}
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  className={`w-full ${isPopular ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600" : "bg-purple-600 hover:bg-purple-700"} text-white`}
                  asChild
                >
                  <a href={`https://wa.me/5511989150001?text=Olá! Gostaria de assinar o plano ${plan.name}`} target="_blank" rel="noopener noreferrer">
                    Assinar Plano
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full text-sm"
                  asChild
                >
                  <a href="/movel">Mais detalhes</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <section id="planos-moveis" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Móvel + Aparelho
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Combine planos móveis empresariais com os melhores smartphones do mercado
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
              {plans.map((plan, index) => renderPlanCard(plan, index))}
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
              {Array.from({ length: Math.max(1, plans.length - 2) }, (_, index) => (
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
              disabled={currentIndex >= Math.max(0, plans.length - 3)}
              className={`p-3 rounded-full transition-all duration-200 ${currentIndex >= Math.max(0, plans.length - 3)
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-600 hover:bg-gray-50 shadow-lg border border-gray-200'
                }`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

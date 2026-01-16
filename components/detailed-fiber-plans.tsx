"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function DetailedFiberPlans(): React.JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0)

  const plans = [
    {
      speed: "400 MEGA",
      price: "79,99"
    },
    {
      speed: "500 MEGA",
      price: "89,99"
    },
    {
      speed: "600 MEGA",
      price: "94,99"
    },
    {
      speed: "700 MEGA",
      price: "99,99"
    },
    {
      speed: "1 GIGA",
      price: "299,99"
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(0, plans.length - 4)
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
      <div key={index} className="w-1/4 flex-shrink-0 px-4">
        <Card className="relative transition-all duration-300 hover:shadow-2xl hover:scale-105 bg-white border border-gray-200">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-xl font-bold text-gray-900">{plan.speed}</CardTitle>

            <div className="space-y-2 mb-4">
              <div className="text-3xl font-bold text-purple-600">R$ {plan.price}</div>
              <div className="text-sm text-gray-600">/mês</div>
            </div>

            {/* Detalhes da Fibra */}
            <div className="space-y-2 text-sm text-gray-600">
              <p>• Instalação gratuita</p>
              <p>• Wi-Fi 6 incluso</p>
              <p>• Suporte técnico 24/7</p>
              <p>• Garantia de velocidade</p>
            </div>
          </CardHeader>

          <CardContent className="pt-0">
            <div className="space-y-3">
              <Button
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 rounded-lg"
                asChild
              >
                <a href={`https://wa.me/5511989150001?text=Olá! Gostaria de assinar o plano Vivo Fibra ${plan.speed}`} target="_blank" rel="noopener noreferrer">
                  Assinar Plano
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Vivo Fibra para seu negócio
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Internet corporativa com instalação e Wi-Fi grátis
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-semibold text-gray-800">Planos disponíveis</h3>
            <Button
              className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] hover:from-[#7a0bb3] hover:to-[#ff1a75] text-white font-semibold px-6 py-2 rounded-lg"
              asChild
            >
              <a href="https://wa.me/5511989150001?text=Olá! Gostaria de assinar Vivo Fibra" target="_blank" rel="noopener noreferrer">
                Assine já
              </a>
            </Button>
          </div>

          <div className="relative">
            {/* Carrossel Container */}
            <div className="overflow-hidden px-8 py-8">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 25}%)` }}
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
                {Array.from({ length: Math.max(1, plans.length - 3) }, (_, index) => (
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
                disabled={currentIndex >= Math.max(0, plans.length - 4)}
                className={`p-3 rounded-full transition-all duration-200 ${currentIndex >= Math.max(0, plans.length - 4)
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-600 hover:bg-gray-50 shadow-lg border border-gray-200'
                  }`}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            * SVAs disponíveis de acordo com elegibilidade por oferta.
          </p>
        </div>
      </div>
    </section>
  )
}
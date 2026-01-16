"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { vivoGestaoData } from "@/data/vivo-gestao-data"

export function VivoGestaoPlansSection(): React.JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0)
  const plans = vivoGestaoData.plans

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
        <div className="relative">
          <Card className="relative transition-all duration-300 hover:shadow-2xl hover:scale-105 bg-white border border-gray-200">
            <CardHeader className="text-center pb-4">
              <div className="space-y-2 mb-4">
                <Badge className="bg-white border border-purple-200 text-purple-600 px-2 py-1 text-xs font-semibold shadow-sm">
                  MDM
                </Badge>
                <Badge className="bg-white border border-purple-200 text-purple-600 px-2 py-1 text-xs font-semibold shadow-sm">
                  Gestão de dispositivos
                </Badge>
                <Badge className="bg-white border border-purple-200 text-purple-600 px-2 py-1 text-xs font-semibold shadow-sm">
                  Plano Bloqueio de Chip
                </Badge>
              </div>
              <CardTitle className="text-xl font-bold">{plan.data}</CardTitle>

              <div className="space-y-2">
                <div className="text-3xl font-bold text-purple-600">{plan.price}</div>
                <div className="text-sm text-gray-600">{plan.period}</div>
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="space-y-3 mb-8">
                <h4 className="font-semibold text-gray-900 mb-3">Benefícios:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <div className="w-4 h-4 bg-green-500 rounded-full mr-2 flex-shrink-0"></div>
                    Segurança avançada
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <div className="w-4 h-4 bg-green-500 rounded-full mr-2 flex-shrink-0"></div>
                    Controle remoto
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <div className="w-4 h-4 bg-green-500 rounded-full mr-2 flex-shrink-0"></div>
                    Monitoramento 24/7
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <Button
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 rounded-lg"
                  asChild
                >
                  <a href={`https://wa.me/5511989150001?text=Olá! Gostaria de assinar o plano ${plan.data} com Gestão`} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                    Assinar Plano
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
    <section id="planos" className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Escolha o plano ideal para sua empresa
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Planos flexíveis que se adaptam às necessidades do seu negócio
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-semibold text-gray-800">Planos disponíveis</h3>
            <Button
              className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] hover:from-[#7a0bb3] hover:to-[#ff1a75] text-white font-semibold px-6 py-2 rounded-lg"
              asChild
            >
              <a href="https://wa.me/5511989150001?text=Olá! Gostaria de assinar Vivo Gestão" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
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

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para começar?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Entre em contato conosco e descubra como o Vivo Gestão pode beneficiar sua empresa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-white text-[#660099] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                asChild
              >
                <a href="https://wa.me/5511989150001?text=Olá! Gostaria de solicitar proposta para Vivo Gestão" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  Solicitar Proposta
                </a>
              </Button>
              <Button
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#660099] transition-colors duration-300"
                asChild
              >
                <a href="https://wa.me/5511989150001?text=Olá! Gostaria de falar com consultor sobre Vivo Gestão" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  Falar com Consultor
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Database, ChevronLeft, ChevronRight, Star, ArrowRight } from "lucide-react"

export function M2MPlansSection(): React.JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0)

  const plans = [
    {
      id: 1,
      name: "20 MB",
      price: "R$ 6,10",
      period: "unidade/mês",
      badge: "MAIS PROCURADO",
      popular: true,
      features: [
        "Plataforma de Gestão Vivo (Kite Platform)",
        "Maquininhas e Telemetria",
        "Rastreio e Monitoramento"
      ]
    },
    {
      id: 2,
      name: "50 MB",
      price: "R$ 8,90",
      period: "unidade/mês",
      badge: null,
      popular: false,
      features: [
        "Plataforma de Gestão Vivo (Kite Platform)",
        "Maquininhas e Telemetria",
        "Rastreio e Monitoramento"
      ]
    },
    {
      id: 3,
      name: "100 MB",
      price: "R$ 10,90",
      period: "unidade/mês",
      badge: "MELHOR OFERTA",
      popular: false,
      features: [
        "Plataforma de Gestão Vivo (Kite Platform)",
        "Maquininhas e Telemetria",
        "Rastreio e Monitoramento"
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
    return (
      <div key={plan.id} className="w-1/3 flex-shrink-0 px-4">
        <div className="relative">
          {plan.popular && (
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-20">
              <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 text-xs shadow-lg">
                <Star className="w-3 h-3 mr-1" />
                Mais Contratado
              </Badge>
            </div>
          )}
          <Card className={`relative transition-all duration-300 hover:shadow-2xl ${plan.popular ? "ring-2 ring-purple-500 scale-105 shadow-xl" : "hover:scale-105"}`}>
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <Database className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
              
              <div className="space-y-2">
                <div className="text-3xl font-bold text-purple-600">{plan.price}</div>
                <div className="text-sm text-gray-600">{plan.period}</div>
              </div>
            </CardHeader>
            
            <CardContent className="pt-0">
              <ul className="space-y-3 mb-8">
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
                  <a href="https://wa.me/551123629665" target="_blank" rel="noopener noreferrer">
                    Solicite
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full text-sm"
                  asChild
                >
                  <a 
                    href="https://wa.me/551123629665" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">Planos M2M</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Chip M2M (Machine to machine) com gestão inteligente</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solução completa de conectividade M2M com a Kite Platform para telemetria, 
            rastreamento e automação. Gerencie seus dispositivos em tempo real.
          </p>
        </div>

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
              className={`p-3 rounded-full transition-all duration-200 ${
                currentIndex === 0 
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
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-110' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              disabled={currentIndex >= Math.max(0, plans.length - 3)}
              className={`p-3 rounded-full transition-all duration-200 ${
                currentIndex >= Math.max(0, plans.length - 3)
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-white text-gray-600 hover:bg-gray-50 shadow-lg border border-gray-200'
              }`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Banner CTA */}
        <div className="mt-12 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-2xl p-8 text-center text-white shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold mb-2">Precisa de ajuda?</h3>
              <p className="text-white/90">(11) 2362-9665</p>
            </div>
            <Button 
              size="lg" 
              className="bg-white text-[#660099] hover:bg-white/95 font-semibold px-8 py-3 shadow-lg border-2 border-white"
              asChild
            >
              <a href="https://wa.me/551123629665" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

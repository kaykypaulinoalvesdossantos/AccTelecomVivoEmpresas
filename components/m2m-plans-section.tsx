"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Database, Settings, ChevronLeft, ChevronRight } from "lucide-react"

export function M2MPlansSection(): React.JSX.Element {
  const [currentSlide, setCurrentSlide] = useState(0)

  const plans = [
    {
      id: 1,
      name: "20 MB",
      price: "R$ 6,90",
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
      price: "R$ 9,90",
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
      price: "R$ 11,90",
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

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(plans.length / getSlidesPerView()))
    }, 5000)

    return () => clearInterval(interval)
  }, [plans.length])

  const getSlidesPerView = () => {
    if (typeof window === 'undefined') return 3
    if (window.innerWidth >= 1024) return 3
    if (window.innerWidth >= 768) return 2
    if (window.innerWidth >= 640) return 2
    return 1
  }

  const nextSlide = () => {
    const slidesPerView = getSlidesPerView()
    const maxSlide = Math.ceil(plans.length / slidesPerView) - 1
    setCurrentSlide((prev) => (prev + 1) % (maxSlide + 1))
  }

  const prevSlide = () => {
    const slidesPerView = getSlidesPerView()
    const maxSlide = Math.ceil(plans.length / slidesPerView) - 1
    setCurrentSlide((prev) => (prev - 1 + maxSlide + 1) % (maxSlide + 1))
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex)
  }

  const renderPlanCard = (plan: any, isPopular: boolean = false) => {
    return (
      <Card key={plan.id} className={`relative bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden h-full flex-shrink-0 ${
        isPopular ? 'border-[#660099] ring-2 ring-[#660099]/20 shadow-xl' : ''
      }`}>
        <CardHeader className="pb-4 pt-6">
          <div className="flex justify-between items-start mb-3">
            {plan.badge && (
              <Badge className="bg-green-100 text-green-800 px-3 py-1 text-xs font-semibold border border-green-200">
                {plan.badge}
              </Badge>
            )}
            {isPopular && (
              <Badge className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] text-white px-3 py-1 text-xs font-semibold">
                MAIS VENDIDO
              </Badge>
            )}
          </div>
          
          <CardTitle className="text-3xl font-bold text-gray-800 mb-3">
            {plan.name}
          </CardTitle>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-lg flex items-center justify-center">
              <Database className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm text-gray-600">Plano de Dados M2M</span>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">{plan.price}</div>
            <div className="text-gray-600 text-sm">{plan.period}</div>
          </div>
          
          <div className="space-y-3">
            {plan.features.map((feature: string, featureIndex: number) => (
              <div key={`${plan.id}-feature-${featureIndex}`} className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#660099] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>
          
          <Button className="w-full bg-gradient-to-r from-[#660099] to-[#EB3C7D] hover:from-[#7a0bb3] hover:to-[#ff1a75] text-white font-semibold py-3 rounded-lg transition-all duration-300">
            Solicite
          </Button>
          
          <div className="text-center">
            <a href="#" className="text-sm text-[#660099] hover:underline">
              Mais detalhes
            </a>
          </div>
        </CardContent>
      </Card>
    )
  }

  const slidesPerView = getSlidesPerView()
  const totalSlides = Math.ceil(plans.length / slidesPerView)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Chip M2M (Machine to machine) com gestão inteligente
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Solução completa de conectividade M2M com a Kite Platform para telemetria, 
            rastreamento e automação. Gerencie seus dispositivos em tempo real.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Carousel Track */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                width: `${totalSlides * 100}%`
              }}
            >
              {Array.from({ length: totalSlides }, (_, slideIndex) => (
                <div 
                  key={`slide-${slideIndex}`}
                  className="flex gap-6 px-4"
                  style={{ width: `${100 / totalSlides}%` }}
                >
                  {plans
                    .slice(slideIndex * slidesPerView, (slideIndex + 1) * slidesPerView)
                    .map((plan) => renderPlanCard(plan, plan.popular))}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full p-3 shadow-lg hover:bg-white transition-all duration-200 z-10"
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full p-3 shadow-lg hover:bg-white transition-all duration-200 z-10"
            disabled={currentSlide === totalSlides - 1}
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={`dot-${index}`}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide 
                    ? 'bg-gradient-to-r from-[#660099] to-[#EB3C7D] scale-110' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Banner CTA */}
        <div className="mt-12 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-2xl p-8 text-center text-white shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold mb-2">Precisa de ajuda?</h3>
              <p className="text-white/90">0800 771 0140</p>
            </div>
            <Button size="lg" className="bg-white text-[#660099] hover:bg-white/95 font-semibold px-8 py-3 shadow-lg border-2 border-white">
              Consultor online
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

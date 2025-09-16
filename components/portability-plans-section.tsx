"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Star, Smartphone, ChevronLeft, ChevronRight, ArrowRight, Gift } from "lucide-react"

export function PortabilityPlansSection(): React.JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Todos os planos com regra de portabilidade aplicada
  const allPlans = [
    {
      id: 1,
      name: "Empresarial 6GB",
      data: "6 GB",
      originalData: "6 GB",
      portabilityBonus: "+10 GB",
      totalData: "16 GB",
      price: "R$ 39,99",
      period: "/mês",
      badge: "OFERTA ESPECIAL",
      popular: false,
      features: [
        "6GB de internet",
        "Ligações ilimitadas",
        "SMS ilimitado",
        "5G Nacional",
        "Roaming Nacional",
        "Gestão online",
      ],
      extras: ["Apps ilimitados", "Portabilidade gratuita"],
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      name: "Empresarial 15GB",
      data: "15 GB",
      originalData: "15 GB",
      portabilityBonus: "+10 GB",
      totalData: "25 GB",
      price: "R$ 54,99",
      period: "/mês",
      badge: "MAIS VENDIDO",
      popular: true,
      features: [
        "15GB de internet",
        "Ligações ilimitadas",
        "SMS ilimitado",
        "5G Nacional",
        "Roaming Nacional",
        "Gestão online",
      ],
      extras: ["Apps ilimitados", "Portabilidade gratuita"],
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      name: "Empresarial 20GB",
      data: "20 GB",
      originalData: "20 GB",
      portabilityBonus: "+10 GB",
      totalData: "30 GB",
      price: "R$ 59,99",
      period: "/mês",
      badge: "OFERTA LIMITADA",
      popular: false,
      features: [
        "20GB de internet",
        "Ligações ilimitadas",
        "SMS ilimitado",
        "5G Nacional",
        "Roaming Nacional",
        "Gestão online",
      ],
      extras: ["Apps ilimitados", "Portabilidade gratuita"],
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 4,
      name: "Empresarial 30GB",
      data: "30 GB",
      originalData: "30 GB",
      portabilityBonus: "+10 GB",
      totalData: "40 GB",
      price: "R$ 69,99",
      period: "/mês",
      badge: "OFERTA EXCLUSIVA",
      popular: false,
      features: [
        "30GB de internet",
        "Ligações ilimitadas",
        "SMS ilimitado",
        "5G Nacional",
        "Roaming Nacional",
        "Gestão online",
      ],
      extras: ["Apps ilimitados", "Portabilidade gratuita"],
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      name: "Empresarial 40GB",
      data: "40 GB",
      originalData: "40 GB",
      portabilityBonus: "+10 GB",
      totalData: "50 GB",
      price: "R$ 79,99",
      period: "/mês",
      badge: "OFERTA PREMIUM",
      popular: false,
      features: [
        "40GB de internet",
        "Ligações ilimitadas",
        "SMS ilimitado",
        "5G Nacional",
        "Roaming Nacional",
        "Gestão online",
      ],
      extras: ["Apps ilimitados", "Portabilidade gratuita"],
      color: "from-indigo-500 to-purple-600"
    },
    {
      id: 6,
      name: "Empresarial 50GB",
      data: "50 GB",
      originalData: "50 GB",
      portabilityBonus: "+10 GB",
      totalData: "60 GB",
      price: "R$ 89,99",
      period: "/mês",
      badge: "OFERTA CORPORATIVA",
      popular: false,
      features: [
        "50GB de internet",
        "Ligações ilimitadas",
        "SMS ilimitado",
        "5G Nacional",
        "Roaming Nacional",
        "Gestão online",
      ],
      extras: ["Apps ilimitados", "Portabilidade gratuita"],
      color: "from-teal-500 to-cyan-600"
    },
    {
      id: 7,
      name: "Empresarial 100GB",
      data: "100 GB",
      originalData: "100 GB",
      portabilityBonus: "+10 GB",
      totalData: "110 GB",
      price: "R$ 99,99",
      period: "/mês",
      badge: "OFERTA MÁXIMA",
      popular: false,
      features: [
        "100GB de internet",
        "Ligações ilimitadas",
        "SMS ilimitado",
        "5G Nacional",
        "Roaming Nacional",
        "Gestão online",
      ],
      extras: ["Apps ilimitados", "Portabilidade gratuita"],
      color: "from-pink-500 to-rose-600"
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(0, allPlans.length - 4)
      return prevIndex >= maxIndex ? maxIndex : prevIndex + 1
    })
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex <= 0 ? 0 : prevIndex - 1
    })
  }

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 text-sm font-semibold mb-4">
            <Gift className="w-4 h-4 mr-2" />
            Portabilidade com Bônus
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Planos Empresariais com <span className="text-purple-600">+10GB de Bônus</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Traga seu número para a Vivo e ganhe <strong>+10GB de internet</strong> em todos os planos empresariais
          </p>
        </div>

        <Tabs defaultValue="portabilidade" className="w-full">
          <TabsList className="grid w-full grid-cols-1 max-w-md mx-auto mb-12 bg-gray-100 p-1 rounded-lg">
            <TabsTrigger 
              value="portabilidade" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white data-[state=active]:shadow-sm"
            >
              Planos com Portabilidade
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="portabilidade">
            <div className="relative">
              {/* Carrossel Container */}
              <div className="overflow-hidden px-8 py-8">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 25}%)` }}
                >
                  {allPlans.map((plan, index) => (
                    <div key={index} className="w-1/4 flex-shrink-0 px-4">
                      <div className="relative">
                        {plan.popular && (
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-20">
                            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 text-xs shadow-lg">
                              <Star className="w-3 h-3 mr-1" />
                              Mais Contratado
                            </Badge>
                          </div>
                        )}
                        <Card
                          className={`relative transition-all duration-300 hover:shadow-2xl ${plan.popular ? "ring-2 ring-purple-500 scale-105 shadow-xl" : "hover:scale-105"}`}
                        >
                          <CardHeader className="text-center pb-4">
                            <div className="flex justify-center mb-4">
                              <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 text-xs font-semibold">
                                {plan.badge}
                              </Badge>
                            </div>
                            
                            <div
                              className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center`}
                            >
                              <Smartphone className="w-8 h-8 text-white" />
                            </div>
                            
                            <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                            
                            {/* Dados com bônus de portabilidade */}
                            <div className="space-y-2 mb-4">
                              <div className="text-4xl font-bold text-purple-600">{plan.totalData}</div>
                              <div className="text-sm text-gray-600">
                                <span className="line-through text-gray-400">{plan.originalData}</span>
                                <span className="ml-2 text-green-600 font-semibold">{plan.portabilityBonus} bônus</span>
                              </div>
                              <div className="text-3xl font-bold text-gray-900">
                                {plan.price}
                                <span className="text-sm font-normal text-gray-600">{plan.period}</span>
                              </div>
                            </div>
                          </CardHeader>

                          <CardContent className="pt-0">
                            <ul className="space-y-3 mb-8">
                              {plan.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-start text-sm">
                                  <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                                  <span className="text-gray-700">{feature}</span>
                                </li>
                              ))}
                            </ul>

                            <div className="border-t pt-6 mb-8">
                              <h4 className="font-semibold text-gray-900 mb-3">Benefícios inclusos:</h4>
                              <ul className="space-y-2">
                                {plan.extras.map((extra, idx) => (
                                  <li key={idx} className="flex items-center text-sm text-gray-600">
                                    <Check className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" />
                                    {extra}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="space-y-3">
                              <Button
                                className={`w-full ${plan.popular ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600" : "bg-purple-600 hover:bg-purple-700"} text-white`}
                              >
                                Contratar Agora
                                <ArrowRight className="ml-2 h-4 w-4" />
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
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-center items-center mt-8 space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevSlide}
                  disabled={currentIndex === 0}
                  className="rounded-full p-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                
                {/* Dots Indicator */}
                <div className="flex space-x-2">
                  {Array.from({ length: Math.max(1, allPlans.length - 3) }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentIndex ? "bg-purple-600" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextSlide}
                  disabled={currentIndex >= Math.max(0, allPlans.length - 4)}
                  className="rounded-full p-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Informações sobre portabilidade */}
        <div className="mt-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            🎉 Portabilidade = +10GB em Todos os Planos!
          </h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Traga seu número de qualquer operadora para a Vivo e ganhe automaticamente <strong>+10GB de internet</strong> em qualquer plano empresarial que você escolher. A portabilidade é realizada 3 dias após a chegada do chip.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl font-bold mb-2">+10GB</div>
              <div className="text-purple-100">Bônus automático</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-purple-100">Gratuito</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl font-bold mb-2">3 dias</div>
              <div className="text-purple-100">Após chegada do chip</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
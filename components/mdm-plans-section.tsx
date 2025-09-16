"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Shield, Smartphone, Database, ChevronLeft, ChevronRight, Star } from "lucide-react"

export function MDMPlansSection(): React.JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0)

  const plans = [
    {
      data: "6 GB",
      planType: "Plano Pós 5G",
      mdmFeatures: ["MDM", "Gestão de dispositivos", "Plano Bloqueio de Chip"],
      price: "R$ 44,99",
      period: "/mês",
      benefits: ["Segurança avançada", "Controle remoto", "Monitoramento 24/7"]
    },
    {
      data: "15 GB",
      planType: "Plano Pós 5G",
      mdmFeatures: ["MDM", "Gestão de dispositivos", "Plano Bloqueio de Chip"],
      price: "R$ 59,99",
      period: "/mês",
      benefits: ["Segurança avançada", "Controle remoto", "Monitoramento 24/7"]
    },
    {
      data: "20 GB",
      planType: "Plano Pós 5G",
      mdmFeatures: ["MDM", "Gestão de dispositivos", "Plano Bloqueio de Chip"],
      price: "R$ 64,99",
      period: "/mês",
      benefits: ["Segurança avançada", "Controle remoto", "Monitoramento 24/7"]
    },
    {
      data: "30 GB",
      planType: "Plano Pós 5G",
      mdmFeatures: ["MDM", "Gestão de dispositivos", "Plano Bloqueio de Chip"],
      price: "R$ 74,99",
      period: "/mês",
      benefits: ["Segurança avançada", "Controle remoto", "Monitoramento 24/7"]
    },
    {
      data: "40 GB",
      planType: "Plano Pós 5G",
      mdmFeatures: ["MDM", "Gestão de dispositivos", "Plano Bloqueio de Chip"],
      price: "R$ 84,99",
      period: "/mês",
      benefits: ["Segurança avançada", "Controle remoto", "Monitoramento 24/7"]
    },
    {
      data: "50 GB",
      planType: "Plano Pós 5G",
      mdmFeatures: ["MDM", "Gestão de dispositivos", "Plano Bloqueio de Chip"],
      price: "R$ 94,99",
      period: "/mês",
      benefits: ["Segurança avançada", "Controle remoto", "Monitoramento 24/7"]
    },
    {
      data: "100 GB",
      planType: "Plano Pós 5G",
      mdmFeatures: ["MDM", "Gestão de dispositivos", "Plano Bloqueio de Chip"],
      price: "R$ 104,99",
      period: "/mês",
      benefits: ["Segurança avançada", "Controle remoto", "Monitoramento 24/7"]
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
        <div className="relative">
          <Card className="relative transition-all duration-300 hover:shadow-2xl hover:scale-105 bg-white border border-gray-200">
            <CardHeader className="text-center pb-4">
              <div className="space-y-2 mb-4">
                {plan.mdmFeatures.map((feature: string, i: number) => (
                  <Badge key={i} className="bg-white border border-purple-200 text-purple-600 px-2 py-1 text-xs font-semibold shadow-sm">
                    {feature}
                  </Badge>
                ))}
              </div>
              <CardTitle className="text-xl font-bold">{plan.data}</CardTitle>
              
              <div className="space-y-2">
                <div className="text-3xl font-bold text-purple-600">{plan.price}</div>
                <div className="text-sm text-gray-600">{plan.period}</div>
              </div>
            </CardHeader>
            
            <CardContent className="pt-0">
              <div className="space-y-2 mb-6">
                <p className="text-sm font-semibold text-gray-800 mb-2">Benefícios:</p>
                {plan.benefits.map((benefit: string, i: number) => (
                  <div key={i} className="flex items-start text-sm">
                    <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-2 rounded-lg"
                asChild
              >
                <a href="https://wa.me/551123629665" target="_blank" rel="noopener noreferrer">
                  Assinar Plano
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <section className="py-16 bg-gradient-to-br from-white to-purple-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-1/4 w-40 h-40 bg-[#EB3C7D]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-1/3 w-32 h-32 bg-[#660099]/10 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-[#EB3C7D]/10 rounded-full blur-3xl animate-float delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Móvel Combo Móvel + MDM
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Todos os benefícios da Móvel com Gerenciamento Remoto. Ideal para empresas que precisam gerenciar remotamente os smartphones de seus colaboradores por meio de políticas de uso, atualizações e instalações automatizadas e ferramentas para proteção de dados.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="nao-cliente" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="nao-cliente" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#660099] data-[state=active]:to-[#EB3C7D] data-[state=active]:text-white">
                Não sou cliente Vivo
              </TabsTrigger>
              <TabsTrigger value="cliente" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#660099] data-[state=active]:to-[#EB3C7D] data-[state=active]:text-white">
                Já sou cliente Vivo
              </TabsTrigger>
              <TabsTrigger value="contratar" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#660099] data-[state=active]:to-[#EB3C7D] data-[state=active]:text-white">
                Contratar Gestão de Dispositivos (MDM)
              </TabsTrigger>
            </TabsList>

            <TabsContent value="nao-cliente">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-semibold text-gray-800">Planos disponíveis</h3>
                <Button 
                  className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] hover:from-[#7a0bb3] hover:to-[#ff1a75] text-white font-semibold px-6 py-2 rounded-lg"
                  asChild
                >
                  <a href="https://wa.me/551123629665" target="_blank" rel="noopener noreferrer">
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
                    className={`p-3 rounded-full transition-all duration-200 ${
                      currentIndex === 0 
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
                    disabled={currentIndex >= Math.max(0, plans.length - 4)}
                    className={`p-3 rounded-full transition-all duration-200 ${
                      currentIndex >= Math.max(0, plans.length - 4)
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                        : 'bg-white text-gray-600 hover:bg-gray-50 shadow-lg border border-gray-200'
                    }`}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="cliente">
              <Card className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        Adicione MDM ao seu plano atual
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        Se você já é cliente Vivo, adicione a solução MDM ao seu plano existente 
                        e tenha controle total dos dispositivos da sua empresa.
                      </p>
                      <Button 
                        className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] hover:from-[#7a0bb3] hover:to-[#ff1a75] text-white font-semibold px-6 py-3"
                        asChild
                      >
                        <a href="https://wa.me/551123629665" target="_blank" rel="noopener noreferrer">
                          Adicionar MDM
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="contratar">
              <Card className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Database className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        Contrate apenas a Gestão de Dispositivos
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        Se você já tem planos de celular, contrate apenas a solução MDM 
                        para gerenciar seus dispositivos com segurança e eficiência.
                      </p>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="flex items-center gap-2">
                          <Badge className="bg-gray-400 text-white px-4 py-2 line-through">
                            R$ 6,90/mês
                          </Badge>
                          <Badge className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] text-white px-4 py-2">
                            R$ 5,00/mês
                          </Badge>
                        </div>
                        <Badge className="bg-white border border-purple-200 text-purple-600 px-4 py-2 font-semibold shadow-sm">
                          Bloqueio de chip
                        </Badge>
                      </div>
                      <Button 
                        className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] hover:from-[#7a0bb3] hover:to-[#ff1a75] text-white font-semibold px-6 py-3"
                        asChild
                      >
                        <a href="https://wa.me/551123629665" target="_blank" rel="noopener noreferrer">
                          Contratar MDM
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

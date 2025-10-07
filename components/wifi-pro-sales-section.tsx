"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, DollarSign, Gift, Settings, TrendingUp } from "lucide-react"

export function WifiProSalesSection() {
  const salesBenefits = [
    {
      icon: Heart,
      title: "Fidelização de Clientes",
      description: "Fortaleça o relacionamento com o seu público-alvo e aumente a fidelização.",
      color: "#EB3C7D"
    },
    {
      icon: DollarSign,
      title: "Estratégias de Vendas",
      description: "Use dados do Wi-Fi para criar estratégias de vendas eficazes e personalizadas.",
      color: "#660099"
    },
    {
      icon: Gift,
      title: "Promoções Segmentadas",
      description: "Envie promoções e conteúdos segmentados para perfis específicos de clientes.",
      color: "#EB3C7D"
    },
    {
      icon: Settings,
      title: "Integração CRM",
      description: "Integre seu Wi-Fi aos principais sistemas de CRM para automação.",
      color: "#660099"
    },
    {
      icon: TrendingUp,
      title: "Monetização da Rede",
      description: "Gere receita extra monetizando sua rede Wi-Fi com divulgação de parceiros.",
      color: "#EB3C7D"
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#EB3C7D]/10 text-[#EB3C7D] border-[#EB3C7D]/20">
            <TrendingUp className="w-4 h-4 mr-2" />
            Potencialize Vendas
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Potencialize as vendas com os
            <span className="block text-[#660099]">benefícios do Wi-Fi Pro</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforme seu Wi-Fi em uma ferramenta poderosa de vendas e marketing, 
            criando oportunidades de negócio e aumentando sua receita.
          </p>
        </div>

        {/* Sales Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {salesBenefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gray-50 hover:bg-white">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div 
                    className="w-20 h-20 mx-auto flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: benefit.color }}
                  >
                    <benefit.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* ROI Section */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Retorno sobre Investimento
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Veja como o Wi-Fi Pro pode impactar positivamente seus resultados:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#660099] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <span className="text-gray-700">Aumento de 25% na fidelização de clientes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#660099] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <span className="text-gray-700">Redução de 30% nos custos de marketing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#660099] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <span className="text-gray-700">Aumento de 40% na conversão de visitantes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#660099] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <span className="text-gray-700">Receita adicional de R$ 500/mês em média</span>
                </div>
              </div>
            </div>

            {/* Right Content - Chart Representation */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">
                  Impacto no Negócio
                </h4>
                
                {/* Simple Chart Bars */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Fidelização</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 h-4 bg-gray-200 rounded-full">
                        <div className="w-24 h-4 bg-[#660099] rounded-full"></div>
                      </div>
                      <span className="text-sm font-semibold text-[#660099]">+25%</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Conversão</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 h-4 bg-gray-200 rounded-full">
                        <div className="w-28 h-4 bg-[#EB3C7D] rounded-full"></div>
                      </div>
                      <span className="text-sm font-semibold text-[#EB3C7D]">+40%</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Receita Extra</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 h-4 bg-gray-200 rounded-full">
                        <div className="w-20 h-4 bg-[#660099] rounded-full"></div>
                      </div>
                      <span className="text-sm font-semibold text-[#660099]">R$ 500</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Custo Marketing</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 h-4 bg-gray-200 rounded-full">
                        <div className="w-22 h-4 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-sm font-semibold text-green-500">-30%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Truck, Zap, Star } from "lucide-react"

export function FrotaInteligentePlansSection() {
  const plans = [
    {
      id: "rastreamento",
      name: "Rastreamento",
      price: "R$ 60",
      period: "/mês",
      features: [
        "Rastreamento GPS em tempo real",
        "Localização precisa dos veículos",
        "Histórico de rotas",
        "Relatórios básicos",
        "Suporte técnico 24/7"
      ],
      icon: Truck,
      color: "#660099",
      popular: false
    },
    {
      id: "eficiencia",
      name: "Eficiência",
      price: "R$ 70",
      period: "/mês",
      features: [
        "Tudo do plano Rastreamento",
        "Cerca de segurança",
        "Alertas de velocidade",
        "Otimização de rotas",
        "Relatórios avançados",
        "Controle de combustível"
      ],
      icon: Zap,
      color: "#EB3C7D",
      popular: true
    },
    {
      id: "performance",
      name: "Performance",
      price: "R$ 80",
      period: "/mês",
      features: [
        "Tudo do plano Eficiência",
        "Bloqueio remoto",
        "Cheque de saúde veicular",
        "Análise de comportamento",
        "Controle de jornada",
        "Relatórios personalizados",
        "API para integração"
      ],
      icon: Star,
      color: "#660099",
      popular: false
    }
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#660099]/10 text-[#660099] border-[#660099]/20">
            <Truck className="w-4 h-4 mr-2" />
            Planos Disponíveis
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Escolha o plano ideal para
            <span className="block text-[#660099]">sua frota</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Três opções completas para atender desde pequenas frotas até grandes corporações. 
            Todos os planos incluem instalação gratuita.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card 
              key={plan.id} 
              className={`relative group hover:shadow-xl transition-all duration-300 border-0 bg-white ${
                plan.popular ? 'ring-2 ring-[#EB3C7D] shadow-lg' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-[#EB3C7D] text-white px-4 py-2 text-sm font-semibold">
                    Mais Popular
                  </Badge>
                </div>
              )}
              
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div 
                    className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: plan.color }}
                  >
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <Badge className="bg-green-100 text-green-800 border-green-200">
                      Sem taxa de instalação
                    </Badge>
                  </div>
                </div>

                {/* Price */}
                <div className="text-center mb-8">
                  <div className="text-4xl font-bold text-gray-900">
                    {plan.price}
                    <span className="text-xl text-gray-600">{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#660099] flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  size="lg" 
                  className={`w-full px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 cursor-pointer ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-[#EB3C7D] to-[#660099] hover:from-[#D63384] hover:to-[#5A0080] text-white shadow-lg hover:shadow-xl' 
                      : 'bg-gradient-to-r from-[#660099] to-[#EB3C7D] hover:from-[#5A0080] hover:to-[#D63384] text-white shadow-lg hover:shadow-xl'
                  }`}
                >
                  Comprar
                </Button>

                {/* More Details Link */}
                <div className="text-center mt-4">
                  <button className="text-[#660099] hover:text-[#5A0080] text-sm font-medium transition-colors cursor-pointer">
                    Mais detalhes
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Todos os planos incluem
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#660099] rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Instalação Gratuita</h4>
                <p className="text-gray-600 text-sm">Equipamentos instalados por técnicos especializados</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#EB3C7D] rounded-xl flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Suporte 24/7</h4>
                <p className="text-gray-600 text-sm">Atendimento técnico especializado sempre disponível</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#660099] rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Garantia Total</h4>
                <p className="text-gray-600 text-sm">30 dias de garantia e suporte contínuo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

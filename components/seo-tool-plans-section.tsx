"use client"

import React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"

export default function SeoToolPlansSection() {
  const plans = [
    {
      name: "Básico",
      badge: "MELHOR OFERTA",
      badgeColor: "bg-[#660099]",
      keywords: "05 palavras-chaves monitoradas",
      competitors: "02 concorrentes escaneados",
      price: "R$ 61",
      period: "/mês",
      features: [
        "Sem fidelização: cancelamento a qualquer momento sem multa",
        "Frequência de análise Web: Semanal",
        "Análise do site e da sua concorrência: Limitado",
        "Plano de SEO personalizado: Limitado",
        "Indexação: Ao Google, Yahoo! e Bing",
        "Sugestão: de palavras-chaves e concorrentes",
        "Relatórios por e-mail",
        "Ferramentas de otimização de páginas"
      ],
      cta: "Assinar Plano",
      details: "Menos detalhes"
    },
    {
      name: "Intermediário",
      badge: null,
      badgeColor: "",
      keywords: "15 palavras-chaves monitoradas",
      competitors: "03 concorrentes escaneados",
      price: "R$ 120",
      period: "/mês",
      features: [
        "Sem fidelização: cancelamento a qualquer momento sem multa",
        "Frequência de análise Web: Diária",
        "Análise do site e da sua concorrência: Ilimitado",
        "Plano de SEO personalizado: Ilimitado",
        "Indexação: Ao Google, Yahoo! e Bing",
        "Sugestão: de palavras-chaves e concorrentes",
        "Relatórios por e-mail",
        "Ferramentas de otimização de páginas"
      ],
      cta: "Assinar Plano",
      details: "Menos detalhes"
    },
    {
      name: "Avançado",
      badge: null,
      badgeColor: "",
      keywords: "30 palavras-chaves monitoradas",
      competitors: "04 concorrentes escaneados",
      price: "R$ 220",
      period: "/mês",
      features: [
        "Sem fidelização: cancelamento a qualquer momento sem multa",
        "Frequência de análise Web: Diária",
        "Análise do site e da sua concorrência: Ilimitado",
        "Plano de SEO personalizado: Ilimitado",
        "Indexação: Ao Google, Yahoo! e Bing",
        "Sugestão: de palavras-chaves e concorrentes",
        "Relatórios por e-mail",
        "Ferramentas de otimização de páginas"
      ],
      cta: "Assinar Plano",
      details: "Menos detalhes"
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Conheça nossos planos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha o plano ideal para otimizar seu site e aumentar sua visibilidade online
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                plan.badge ? 'ring-2 ring-[#660099]' : ''
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className={`${plan.badgeColor} text-white px-4 py-2 text-sm font-semibold`}>
                    {plan.badge}
                  </Badge>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                  
                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>{plan.keywords}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>{plan.competitors}</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-lg text-gray-600 ml-1">{plan.period}</span>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <Button 
                    className="w-full bg-[#EB3C7D] hover:bg-[#EB3C7D]/90 cursor-pointer"
                  >
                    {plan.cta}
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 cursor-pointer"
                  >
                    {plan.details}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

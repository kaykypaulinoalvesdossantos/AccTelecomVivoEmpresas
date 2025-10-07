"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Lock, Leaf, Lightbulb, Settings } from "lucide-react"

export function OpenGatewayBenefitsSection() {
  const benefits = [
    {
      icon: Shield,
      title: "Segurança",
      description: "Proteção avançada de dados com criptografia de ponta a ponta e conformidade com regulamentações internacionais de privacidade.",
      color: "#660099"
    },
    {
      icon: Lock,
      title: "Privacidade",
      description: "Controle total sobre dados pessoais com políticas de privacidade transparentes e conformidade com LGPD e GDPR.",
      color: "#EB3C7D"
    },
    {
      icon: Leaf,
      title: "Sustentabilidade",
      description: "Operações eco-friendly com infraestrutura otimizada para reduzir consumo energético e impacto ambiental.",
      color: "#660099"
    },
    {
      icon: Lightbulb,
      title: "Inovação aberta",
      description: "Ecossistema colaborativo que acelera o desenvolvimento de soluções inovadoras através de APIs padronizadas.",
      color: "#EB3C7D"
    },
    {
      icon: Settings,
      title: "Capacidades disponíveis",
      description: "Acesso completo às funcionalidades de rede com documentação detalhada e suporte técnico especializado.",
      color: "#660099"
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#660099]/10 text-[#660099] border-[#660099]/20">
            <Shield className="w-4 h-4 mr-2" />
            Benefícios Principais
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Benefícios do
            <span className="block text-[#660099]">Open Gateway</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra as vantagens de utilizar APIs padronizadas e seguras 
            para acelerar o desenvolvimento de suas soluções digitais.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
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

        {/* Terms and Conditions */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-3xl p-8 text-white max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Settings className="w-6 h-6 text-white" />
              <h3 className="text-xl font-semibold">Termos e condições do Open Gateway</h3>
            </div>
            <p className="text-white/90 mb-6">
              Conheça os termos de uso, políticas de privacidade e condições comerciais 
              para utilizar as APIs do Open Gateway.
            </p>
            <button className="bg-white text-[#660099] px-8 py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors cursor-pointer">
              Conheça
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

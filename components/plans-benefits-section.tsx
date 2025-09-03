"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Zap, Headphones, Award, Wifi, Users } from "lucide-react"

export function PlansBenefitsSection(): React.JSX.Element {
  const benefits = [
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "5G",
      subtitle: "Tecnologia",
      description:
        "Navegue na rede 5G mais rápida do Brasil. Tenha velocidade e baixa latência para aplicações críticas do seu negócio.",
      color: "from-[#660099] to-[#EB3C7D]",
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Prêmios",
      subtitle: "Reconhecimento",
      description:
        "Melhor operadora em qualidade de rede segundo a Opensignal. Cobertura e velocidade premiadas nacionalmente.",
      color: "from-[#660099] to-[#EB3C7D]",
    },
    {
      icon: <Wifi className="w-8 h-8 text-primary" />,
      title: "Wi-Fi 6",
      subtitle: "Tecnologia",
      description:
        "Roteador Wi-Fi 6 incluso nos planos fibra. Maior velocidade, menor latência e suporte para mais dispositivos.",
      color: "from-[#660099] to-[#EB3C7D]",
    },
    {
      icon: <Headphones className="w-8 h-8 text-primary" />,
      title: "Suporte 24h",
      subtitle: "Atendimento",
      description:
        "Suporte técnico especializado 24 horas por dia, 7 dias por semana. Atendimento prioritário para empresas.",
      color: "from-[#660099] to-[#EB3C7D]",
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Instalação",
      subtitle: "Gratuita",
      description:
        "Instalação profissional gratuita em até 5 dias úteis. Técnicos especializados e equipamentos de última geração.",
      color: "from-[#660099] to-[#EB3C7D]",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Gerente",
      subtitle: "Dedicado",
      description: "Gerente de conta dedicado para planos premium. Atendimento personalizado e soluções sob medida.",
      color: "from-[#660099] to-[#EB3C7D]",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-[#660099]/5 via-[#8B00FF]/5 to-[#EB3C7D]/5 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-[#660099]/10 to-[#EB3C7D]/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-[#EB3C7D]/10 to-[#660099]/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#660099]/5 to-[#EB3C7D]/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] text-white px-4 py-2 text-sm font-semibold">
            Vantagens Exclusivas
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            Com o plano de dados Vivo Empresas seu 5G rende mais!
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubra todos os benefícios exclusivos que só a Vivo Empresas oferece para o seu negócio crescer ainda
            mais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:scale-105">
              <CardContent className="p-8 text-center space-y-4">
                <div
                  className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${benefit.color} flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}
                >
                  {benefit.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-800">{benefit.title}</h3>
                  <p className="text-sm text-[#660099] font-semibold uppercase tracking-wide">{benefit.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#660099]/10 to-[#EB3C7D]/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-[#660099]/20 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Sua empresa mais rápida e eficiente com o Wi-Fi 6
            </h3>
            <p className="text-gray-600 mb-6">
              A Vivo Fibra é a internet fibra mais rápida do Brasil com tecnologia Wi-Fi 6 inclusa. Tenha velocidade de
              até 1 Giga e conecte todos os dispositivos da sua empresa sem perder performance.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-[#660099]">99.9%</div>
                <p className="text-sm text-gray-600">Disponibilidade da rede</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-[#660099]">24h</div>
                <p className="text-sm text-gray-600">Suporte técnico</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-[#660099]">5 dias</div>
                <p className="text-sm text-gray-600">Instalação gratuita</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, BarChart3, HeadphonesIcon, Truck } from "lucide-react"

export function FrotaInteligenteFeaturesSection() {
  const features = [
    {
      icon: CheckCircle,
      title: "Gestão Completa",
      description: "Controle total da frota de forma simples e fácil com interface intuitiva",
      color: "#660099"
    },
    {
      icon: BarChart3,
      title: "Tecnologia Inovadora",
      description: "Painéis de controle para veículos, cargas, motos e pessoas, otimizando processos",
      color: "#EB3C7D"
    },
    {
      icon: HeadphonesIcon,
      title: "Atendimento Personalizado",
      description: "Suporte técnico especializado com atendimento dedicado para sua empresa",
      color: "#660099"
    },
    {
      icon: Users,
      title: "Relatórios Detalhados",
      description: "Acompanhe o status de toda gestão através de gráficos e análises completas",
      color: "#EB3C7D"
    }
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#660099]/10 text-[#660099] border-[#660099]/20">
            <Truck className="w-4 h-4 mr-2" />
            Recursos Avançados
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Rastreamento veicular: benefícios da
            <span className="block text-[#660099]">Frota Inteligente</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra como nossa solução pode transformar a gestão da sua frota, 
            oferecendo controle total e insights valiosos para o seu negócio.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:bg-gray-50">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div 
                    className="w-20 h-20 mx-auto flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: feature.color }}
                  >
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-3xl p-12 text-white">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6">Por que escolher a Frota Inteligente?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Gestão Simplificada</h4>
                <p className="text-white/90">Interface intuitiva para controle total da frota</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Análises Avançadas</h4>
                <p className="text-white/90">Relatórios detalhados e insights para otimização</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <HeadphonesIcon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Suporte Especializado</h4>
                <p className="text-white/90">Atendimento técnico dedicado 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

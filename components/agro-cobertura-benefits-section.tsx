"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wifi, Network, Rocket, BarChart3, PiggyBank, Info, Settings } from "lucide-react"

export function AgroCoberturaBenefitsSection() {
  const benefits = [
    {
      icon: Wifi,
      title: "Cobertura celular pública LTE (4G)",
      description: "Cobertura celular pública LTE (4G) e conectividade onde você precisar",
      color: "#660099"
    },
    {
      icon: Network,
      title: "Viabilizar tecnologias IoT",
      description: "Viabilizar tecnologias e aplicações de IoT para otimizar sua produção",
      color: "#EB3C7D"
    },
    {
      icon: Rocket,
      title: "Conexão mais rápida",
      description: "Conexão mais rápida para profissionais, máquinas e sensores",
      color: "#660099"
    },
    {
      icon: BarChart3,
      title: "Aumento de produtividade",
      description: "Aumento de produtividade com mais agilidade e eficiência",
      color: "#EB3C7D"
    },
    {
      icon: PiggyBank,
      title: "Redução de custos",
      description: "Redução de custos e economia de insumos",
      color: "#660099"
    },
    {
      icon: Info,
      title: "Dados em tempo real",
      description: "Dados em tempo real para acelerar a tomada de decisão",
      color: "#EB3C7D"
    },
    {
      icon: Settings,
      title: "Suporte garantido",
      description: "Manutenção, gerenciamento e suporte garantido em nível global para sua rede",
      color: "#660099"
    }
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#660099]/10 text-[#660099] border-[#660099]/20">
            <Wifi className="w-4 h-4 mr-2" />
            Benefícios Principais
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Conheça os benefícios para
            <span className="block text-[#660099]">seu negócio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas de conectividade rural que transformam sua operação agrícola 
            com tecnologia de ponta e suporte especializado.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:bg-gray-50">
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

        {/* Additional Info */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-3xl p-12 text-white">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-6">Conectividade que revoluciona o campo</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Wifi className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Cobertura Nacional</h4>
                  <p className="text-white/90">Conectividade em áreas rurais e remotas</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Network className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Tecnologia IoT</h4>
                  <p className="text-white/90">Protocolos LPWA para dispositivos inteligentes</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Suporte Especializado</h4>
                  <p className="text-white/90">Manutenção e gerenciamento global</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

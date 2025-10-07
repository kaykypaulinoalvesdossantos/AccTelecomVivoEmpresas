"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, DollarSign, Hand, Camera, Monitor } from "lucide-react"

export function ClimaInteligenteBenefitsSection() {
  const benefits = [
    {
      icon: Eye,
      title: "Monitoramento em tempo real",
      description: "Monitoramento em tempo real da condição climática para apoiar suas decisões no campo",
      color: "#660099"
    },
    {
      icon: DollarSign,
      title: "Redução de custos",
      description: "Redução de custos com energia e recursos hídricos",
      color: "#EB3C7D"
    },
    {
      icon: Hand,
      title: "Planejamento completo",
      description: "Planejamento, dimensionamento e controle do processo produtivo do plantio à colheita",
      color: "#660099"
    },
    {
      icon: Camera,
      title: "Sensores customizáveis",
      description: "Sensores customizáveis e câmeras para captura de imagens",
      color: "#EB3C7D"
    },
    {
      icon: Monitor,
      title: "Tomada de decisão",
      description: "Tomada de decisão a partir de dados reais do campo em plataforma web",
      color: "#660099"
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#660099]/10 text-[#660099] border-[#660099]/20">
            <Eye className="w-4 h-4 mr-2" />
            Benefícios Principais
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Saiba por que ter a solução
            <span className="block text-[#660099]">Clima Inteligente</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforme sua operação agrícola com dados climáticos precisos 
            e tecnologia de ponta para maximizar a produtividade.
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

        {/* Additional Info */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-3xl p-12 text-white">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-6">Agricultura Inteligente</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Monitoramento Contínuo</h4>
                  <p className="text-white/90">Dados climáticos atualizados 24/7</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Economia Comprovada</h4>
                  <p className="text-white/90">Redução significativa nos custos operacionais</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Monitor className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Plataforma Web</h4>
                  <p className="text-white/90">Acesso fácil aos dados e relatórios</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

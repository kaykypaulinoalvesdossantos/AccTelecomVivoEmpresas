"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Settings, Fuel, User, BarChart3 } from "lucide-react"

export function GestaoMaquinarioBenefitsSection() {
  const benefits = [
    {
      icon: Settings,
      title: "Otimização das operações",
      description: "Mesmo quando os veículos são de fabricantes diferentes",
      color: "#660099"
    },
    {
      icon: Fuel,
      title: "Melhoria de produtividade",
      description: "Com economia de combustível e menor custo de manutenção",
      color: "#EB3C7D"
    },
    {
      icon: User,
      title: "Redução da manutenção",
      description: "Com análise da direção do motorista (Drive Behaviour)",
      color: "#660099"
    },
    {
      icon: BarChart3,
      title: "Análise da performance",
      description: "Do condutor, do desempenho individual do maquinário e da frota",
      color: "#EB3C7D"
    }
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#660099]/10 text-[#660099] border-[#660099]/20">
            <Settings className="w-4 h-4 mr-2" />
            Benefícios Principais
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Principais benefícios da telemetria para o
            <span className="block text-[#660099]">seu agronegócio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforme sua operação agrícola com tecnologia de ponta que oferece 
            controle total sobre sua frota de maquinário.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <h3 className="text-3xl font-bold mb-6">Tecnologia que conecta o campo</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Operação Inteligente</h4>
                  <p className="text-white/90">Controle total da frota com dados em tempo real</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Fuel className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Economia Comprovada</h4>
                  <p className="text-white/90">Redução significativa nos custos operacionais</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Análises Avançadas</h4>
                  <p className="text-white/90">Relatórios detalhados para tomada de decisões</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

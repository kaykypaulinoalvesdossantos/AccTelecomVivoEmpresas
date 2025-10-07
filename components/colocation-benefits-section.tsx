"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DollarSign, HeadphonesIcon, Zap, BarChart3, Building } from "lucide-react"

export function ColocationBenefitsSection() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Elimina custos de infraestrutura",
      description: "Elimina os custos de manter infraestrutura física própria, reduzindo investimentos em equipamentos e manutenção.",
      color: "#660099"
    },
    {
      icon: HeadphonesIcon,
      title: "Suporte especializado",
      description: "Resolução de problemas com suporte especializado 24/7, garantindo rápida solução para qualquer questão técnica.",
      color: "#EB3C7D"
    },
    {
      icon: Zap,
      title: "Economia de recursos",
      description: "Economia de recursos, espaço físico e energia, otimizando custos operacionais e reduzindo desperdícios.",
      color: "#660099"
    },
    {
      icon: BarChart3,
      title: "Flexibilidade sustentável",
      description: "Flexibilidade para atender ao crescimento das demandas de forma sustentável, adaptando-se às necessidades do negócio.",
      color: "#EB3C7D"
    },
    {
      icon: Building,
      title: "Certificação Tier III e Leed Gold",
      description: "Data Center com certificação Tier III e Leed Gold, garantindo máxima qualidade e sustentabilidade ambiental.",
      color: "#660099"
    }
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#660099]/10 text-[#660099] border-[#660099]/20">
            <DollarSign className="w-4 h-4 mr-2" />
            Benefícios Principais
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Benefícios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra as vantagens de escolher o Colocation da Vivo 
            para sua infraestrutura de servidores.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
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
              <h3 className="text-3xl font-bold mb-6">Data Center Certificado</h3>
              <div className="grid md:grid-cols-5 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Redução de Custos</h4>
                  <p className="text-white/90">Elimine investimentos em infraestrutura</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <HeadphonesIcon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Suporte 24/7</h4>
                  <p className="text-white/90">Equipe especializada sempre disponível</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Economia</h4>
                  <p className="text-white/90">Recursos, espaço e energia</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Flexibilidade</h4>
                  <p className="text-white/90">Crescimento sustentável</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Certificação</h4>
                  <p className="text-white/90">Tier III e Leed Gold</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DollarSign, Settings, Wrench, FileCheck } from "lucide-react"

export function HostingDedicadoBenefitsSection() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Elimina custos de infraestrutura",
      description: "Elimina os custos de manter infraestrutura física própria, reduzindo investimentos em equipamentos e manutenção.",
      color: "#660099"
    },
    {
      icon: Settings,
      title: "Gestão responsabilidade da Vivo",
      description: "Investimento e gestão do ambiente são de responsabilidade da Vivo Empresas, possibilitando aos clientes manterem o foco em seu core business.",
      color: "#EB3C7D"
    },
    {
      icon: Wrench,
      title: "Flexibilidade de configuração",
      description: "Flexibilidade para configurar a solução adequada de acordo com as necessidades do seu negócio, com opções personalizáveis.",
      color: "#660099"
    },
    {
      icon: FileCheck,
      title: "Processos ITIL",
      description: "Processos de Gestão orientados pelas melhores práticas da ITIL, garantindo qualidade e padronização nos serviços.",
      color: "#EB3C7D"
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
            Descubra as vantagens de escolher o Hosting Dedicado da Vivo 
            para sua infraestrutura de TI.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
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
              <h3 className="text-3xl font-bold mb-6">Infraestrutura de Confiança</h3>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Redução de Custos</h4>
                  <p className="text-white/90">Elimine investimentos em infraestrutura própria</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Gestão Especializada</h4>
                  <p className="text-white/90">Foque no seu core business</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Wrench className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Flexibilidade Total</h4>
                  <p className="text-white/90">Configure conforme suas necessidades</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <FileCheck className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Qualidade ITIL</h4>
                  <p className="text-white/90">Melhores práticas de gestão</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

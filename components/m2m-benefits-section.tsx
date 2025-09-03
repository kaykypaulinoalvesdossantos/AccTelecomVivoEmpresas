"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Wifi, Shield, CreditCard, MapPin, Settings, Database } from "lucide-react"

export function M2MBenefitsSection(): React.JSX.Element {
  const benefits = [
    {
      icon: MapPin,
      title: "Mobilidade e rastreamento Inteligente",
      description: "Conectividade em tempo real para rastrear mercadorias, veículos e ativos com precisão."
    },
    {
      icon: Settings,
      title: "Telemetria e automação",
      description: "Monitoramento remoto de máquinas, medidores e sensores para reduzir perdas e otimizar processos."
    },
    {
      icon: CreditCard,
      title: "POS (Point of Sale)",
      description: "Conexão estável e de baixa latência para maquininhas de cartão e terminais de pagamento."
    },
    {
      icon: Shield,
      title: "Segurança de dados",
      description: "Transmissão confiável de grandes volumes de dados com proteção contra fraudes e acessos indevidos."
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#660099]/10 to-[#EB3C7D]/10 rounded-2xl p-8 backdrop-blur-sm border border-[#660099]/20">
              <div className="w-64 h-64 bg-gradient-to-br from-[#660099] to-[#EB3C7D] rounded-2xl mx-auto flex items-center justify-center">
                <div className="text-center text-white">
                  <Database className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-lg font-semibold">Especialista M2M</p>
                  <p className="text-sm opacity-80">Com tablet e soluções IoT</p>
                </div>
              </div>
            </div>
            
            {/* Background Elements */}
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-r from-[#660099]/20 to-[#EB3C7D]/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-gradient-to-r from-[#EB3C7D]/20 to-[#660099]/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>

          {/* Right Side - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              M2M [MACHINE TO MACHINE] Conheça os principais benefícios da solução M2M
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              A conectividade M2M da Vivo Empresas oferece mais controle, eficiência e segurança 
              para suas operações. Conecte máquinas, dispositivos e sistemas com inteligência.
            </p>

            <div className="grid gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-xl flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-[#660099]/10 to-[#EB3C7D]/10 rounded-xl border border-[#660099]/20">
              <p className="text-gray-700 leading-relaxed">
                A Vivo Empresas oferece controle de custos em tempo real, função Analytics 
                e alertas automáticos para otimizar suas operações M2M.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

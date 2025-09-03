"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { BarChart3, Shield, Bell, DollarSign, Database, Settings } from "lucide-react"

export function M2MKitePlatformSection(): React.JSX.Element {
  const features = [
    {
      icon: DollarSign,
      title: "Controle de custos",
      description: "Visibilidade do inventário e uso dos chips para apoiar decisões e evitar desperdícios."
    },
    {
      icon: BarChart3,
      title: "Função Analytics",
      description: "Análise de dados dos dispositivos conectados para gerar insights operacionais."
    },
    {
      icon: Shield,
      title: "Mitigação de fraudes",
      description: "Identificação e correção de falhas de segurança na conectividade."
    },
    {
      icon: Bell,
      title: "Alertas Inteligentes",
      description: "Notificações automáticas em tempo real sobre acessos suspeitos."
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              KITE PLATFORM Vivo: saiba como gerenciar os seus dispositivos IoT
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              A Kite Platform é uma solução completa para conectividade M2M, permitindo 
              monitoramento em tempo real de dispositivos, sensores, veículos e equipamentos.
            </p>

            <div className="grid gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-xl flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Side - Dashboard Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#660099]/10 to-[#EB3C7D]/10 rounded-2xl p-8 backdrop-blur-sm border border-[#660099]/20">
              <div className="w-full h-80 bg-gradient-to-br from-[#660099] to-[#EB3C7D] rounded-xl flex items-center justify-center">
                <div className="text-center text-white">
                  <Database className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-lg font-semibold mb-2">Dashboard Kite Platform</p>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="bg-white/20 rounded-lg p-3">
                      <BarChart3 className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-xs">Analytics</p>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3">
                      <Settings className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-xs">Controle</p>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3">
                      <Shield className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-xs">Segurança</p>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3">
                      <Bell className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-xs">Alertas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-r from-[#660099]/20 to-[#EB3C7D]/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-gradient-to-r from-[#EB3C7D]/20 to-[#660099]/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

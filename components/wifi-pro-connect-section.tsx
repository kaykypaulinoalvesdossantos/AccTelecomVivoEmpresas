"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Users, Eye, Calendar, Smartphone } from "lucide-react"

export function WifiProConnectSection() {
  const features = [
    {
      icon: BarChart3,
      title: "Gráficos de uso e picos de conexão",
      description: "Visualize em tempo real o uso da sua rede Wi-Fi e identifique os horários de maior movimento."
    },
    {
      icon: Users,
      title: "Perfil detalhado do público",
      description: "Conheça profundamente seus clientes através de dados demográficos e comportamentais."
    },
    {
      icon: Eye,
      title: "Métricas de visualização e interação",
      description: "Acompanhe o desempenho das suas campanhas e otimize seus resultados."
    },
    {
      icon: Calendar,
      title: "Programação e editor de campanhas",
      description: "Crie e agende campanhas personalizadas com nosso editor integrado."
    }
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#660099]/10 text-[#660099] border-[#660099]/20">
            <Smartphone className="w-4 h-4 mr-2" />
            Conectividade Inteligente
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Wi-Fi que conecta
            <span className="block text-[#660099]">e vende</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforme cada conexão em uma oportunidade de negócio com nossa plataforma 
            completa de Wi-Fi corporativo inteligente.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Funcionalidades Avançadas
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nossa solução oferece todas as ferramentas necessárias para transformar 
                seu Wi-Fi em uma máquina de vendas eficiente e inteligente.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <Card key={index} className="border-0 bg-white hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#660099] rounded-xl flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-6">
              <Badge className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] text-white px-6 py-3 text-lg font-semibold">
                Comece hoje mesmo
              </Badge>
            </div>
          </div>

          {/* Right Content - Visual Representation */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Dashboard Mockup */}
              <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-white">
                {/* Dashboard Header */}
                <div className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] p-6 text-white">
                  <h4 className="text-xl font-bold">Dashboard Wi-Fi Pro</h4>
                  <p className="text-white/90">Painel de controle em tempo real</p>
                </div>

                {/* Dashboard Content */}
                <div className="p-6 space-y-6">
                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="text-2xl font-bold text-[#660099]">1,247</div>
                      <div className="text-sm text-gray-600">Usuários Conectados</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="text-2xl font-bold text-[#EB3C7D]">89%</div>
                      <div className="text-sm text-gray-600">Taxa de Conversão</div>
                    </div>
                  </div>

                  {/* Chart Representation */}
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h5 className="font-semibold text-gray-900">Uso por Horário</h5>
                      <div className="w-3 h-3 bg-[#660099] rounded-full"></div>
                    </div>
                    <div className="flex items-end space-x-2 h-20">
                      {[40, 60, 80, 100, 85, 70, 45].map((height, index) => (
                        <div 
                          key={index}
                          className="bg-[#660099] rounded-t"
                          style={{ height: `${height}%`, width: '20px' }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="space-y-3">
                    <h5 className="font-semibold text-gray-900">Atividade Recente</h5>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-600">25 novos usuários conectados</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-600">Campanha "Black Friday" ativa</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-600">3 promoções enviadas hoje</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#660099]/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#EB3C7D]/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

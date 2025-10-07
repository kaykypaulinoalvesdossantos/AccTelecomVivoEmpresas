"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, BarChart3, Shield, Route, Bell } from "lucide-react"

export function FrotaInteligenteBenefitsSection() {
  const benefits = [
    {
      icon: MapPin,
      title: "Rastreamento GPS",
      description: "Cobertura nacional com precisão de metros para localização exata dos veículos",
      color: "#660099"
    },
    {
      icon: Clock,
      title: "Monitoramento em Tempo Real",
      description: "Acompanhe a posição e status de todos os veículos 24 horas por dia",
      color: "#EB3C7D"
    },
    {
      icon: BarChart3,
      title: "Relatórios Detalhados",
      description: "Análises completas de rotas, consumo e desempenho da frota",
      color: "#660099"
    },
    {
      icon: Bell,
      title: "Alertas e Notificações",
      description: "Receba alertas automáticos sobre velocidade, manutenção e segurança",
      color: "#EB3C7D"
    },
    {
      icon: Shield,
      title: "Controle de Velocidade",
      description: "Monitore e controle a velocidade dos veículos para maior segurança",
      color: "#660099"
    },
    {
      icon: Route,
      title: "Otimização de Rotas",
      description: "Calcule as melhores rotas para reduzir tempo e custos de combustível",
      color: "#EB3C7D"
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#660099]/10 text-[#660099] border-[#660099]/20">
            <MapPin className="w-4 h-4 mr-2" />
            Soluções Avançadas
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            As melhores soluções de
            <span className="block text-[#660099]">rastreamento veicular</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tecnologia de ponta para gestão completa da sua frota. Reduza custos, 
            aumente a segurança e melhore a eficiência operacional com nossa plataforma inteligente.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-gray-50 hover:bg-white">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <div 
                      className="w-16 h-16 mx-auto flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: benefit.color }}
                    >
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right Content - Visual Representation */}
          <div className="relative">
            <div className="relative z-10">
              {/* Fleet Management Dashboard */}
              <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-white">
                {/* Dashboard Header */}
                <div className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] p-6 text-white">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-[#660099]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Gestão de Frota</h3>
                      <p className="text-white/90 text-sm">Painel de controle integrado</p>
                    </div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6 space-y-4">
                  {/* Fleet Overview - Cards */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white rounded-xl p-3 text-center border border-gray-100">
                      <div className="text-2xl font-bold text-[#660099]">24</div>
                      <div className="text-sm text-gray-600">Veículos</div>
                    </div>
                    <div className="bg-white rounded-xl p-3 text-center border border-gray-100">
                      <div className="text-2xl font-bold text-[#EB3C7D]">18</div>
                      <div className="text-sm text-gray-600">Em Movimento</div>
                    </div>
                    <div className="bg-white rounded-xl p-3 text-center border border-gray-100">
                      <div className="text-2xl font-bold text-green-600">98%</div>
                      <div className="text-sm text-gray-600">Eficiência</div>
                    </div>
                  </div>

                  {/* Map Visualization */}
                  <div className="bg-white rounded-xl p-3 border border-gray-100">
                    <h4 className="font-semibold text-gray-900 mb-3">Mapa em Tempo Real</h4>
                    <div className="relative h-24 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg overflow-hidden">
                      {/* Road Network - Gray Lines */}
                      <div className="absolute inset-0">
                        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-400 transform -rotate-12"></div>
                        <div className="absolute top-1/3 left-0 right-0 h-1 bg-gray-400 transform rotate-6"></div>
                        <div className="absolute bottom-1/3 left-0 right-0 h-1 bg-gray-400 transform -rotate-3"></div>
                      </div>
                      
                      {/* Vehicle Dots - Exact positions from image */}
                      <div className="absolute top-4 left-8 w-4 h-4 bg-[#660099] rounded-full border-2 border-white shadow-lg"></div>
                      <div className="absolute top-8 right-12 w-4 h-4 bg-[#EB3C7D] rounded-full border-2 border-white shadow-lg"></div>
                      <div className="absolute bottom-6 left-1/3 w-4 h-4 bg-[#660099] rounded-full border-2 border-white shadow-lg"></div>
                      <div className="absolute bottom-4 right-8 w-4 h-4 bg-[#EB3C7D] rounded-full border-2 border-white shadow-lg"></div>
                      <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg"></div>
                    </div>
                  </div>

                  {/* Recent Alerts */}
                  <div className="bg-white rounded-xl p-3 border border-gray-100">
                    <h4 className="font-semibold text-gray-900 mb-3">Alertas Recentes</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-600">Veículo ABC-1234 chegou ao destino</span>
                        <span className="text-xs text-gray-400">2 min</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span className="text-gray-600">Alerta de velocidade - DEF-5678</span>
                        <span className="text-xs text-gray-400">5 min</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-600">Nova rota otimizada calculada</span>
                        <span className="text-xs text-gray-400">10 min</span>
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

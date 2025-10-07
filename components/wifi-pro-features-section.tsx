"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Users, Smartphone, Shield, CheckCircle } from "lucide-react"

export function WifiProFeaturesSection() {
  const features = [
    {
      icon: BarChart3,
      title: "Dados e Métricas",
      description: "Obtenha dados e métricas precisas dos usuários conectados à sua rede Wi-Fi.",
      color: "#660099"
    },
    {
      icon: Users,
      title: "Perfil do Cliente",
      description: "Conheça o perfil e comportamento dos seus clientes que usam seu Wi-Fi.",
      color: "#EB3C7D"
    },
    {
      icon: Smartphone,
      title: "Campanhas Personalizadas",
      description: "Interaja com seu público via campanhas, pesquisas e enquetes personalizadas.",
      color: "#660099"
    },
    {
      icon: Shield,
      title: "Proteção da Rede",
      description: "Bloqueie conteúdos inadequados e proteja sua rede contra acessos indevidos.",
      color: "#EB3C7D"
    },
    {
      icon: CheckCircle,
      title: "Conformidade LGPD",
      description: "Conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD) e Marco Civil da Internet.",
      color: "#660099"
    }
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#660099]/10 text-[#660099] border-[#660099]/20">
            <BarChart3 className="w-4 h-4 mr-2" />
            Recursos Avançados
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Conheça a solução
            <span className="block text-[#660099]">Wi-Fi Pro</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma solução completa que transforma seu Wi-Fi em uma ferramenta poderosa 
            de marketing e análise de dados para seu negócio.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

        {/* Additional Info */}
        <div className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-3xl p-12 text-white">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6">Por que escolher o Wi-Fi Pro?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Analytics Avançado</h4>
                <p className="text-white/90">Relatórios detalhados sobre o comportamento dos usuários</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Segmentação Inteligente</h4>
                <p className="text-white/90">Crie campanhas direcionadas para diferentes perfis</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Segurança Garantida</h4>
                <p className="text-white/90">Proteção total da sua rede e dados dos clientes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

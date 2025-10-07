"use client"

import React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Globe, Shield, Zap, CheckCircle, Server, Database, Users, Clock } from "lucide-react"

export function HospedagemSiteIntroSection() {
  const features = [
    {
      icon: Globe,
      title: "Alta Disponibilidade",
      description: "99.9% de uptime garantido para seu site sempre online"
    },
    {
      icon: Shield,
      title: "Segurança Avançada",
      description: "Proteção contra ataques DDoS e certificado SSL gratuito"
    },
    {
      icon: Zap,
      title: "Velocidade Máxima",
      description: "Servidores otimizados para carregamento ultrarrápido"
    },
    {
      icon: Database,
      title: "Backup Automático",
      description: "Backup diário automático para proteger seus dados"
    }
  ]

  const resources = [
    "Ideal para projetos, lojas virtuais, blogs e websites",
    "Alta disponibilidade e segurança garantidas",
    "Velocidade de internet otimizada",
    "Suporte técnico especializado 24/7",
    "Painel de controle intuitivo",
    "Migração gratuita de outros provedores"
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-[#660099]/10 text-[#660099] border-[#660099]/20">
                <Server className="w-4 h-4 mr-2" />
                Hospedagem Web
              </Badge>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Conheça o Web Hosting
                <span className="block text-[#660099]">Vivo Empresas</span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Solução completa de hospedagem web profissional, ideal para empresas que precisam de performance, 
                segurança e confiabilidade para seus projetos online.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="space-y-3">
                  <div className="w-12 h-12 bg-[#660099]/10 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-[#660099]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="bg-[#660099] hover:bg-[#660099]/90 text-white cursor-pointer"
            >
              Ver planos disponíveis
            </Button>
          </div>

          {/* Right Content - Visual Representation */}
          <div className="relative">
            <div className="relative z-10">
              {/* Website Preview */}
              <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-white border-2 border-gray-100">
                {/* Browser Header */}
                <div className="bg-gray-100 p-4 flex items-center space-x-2">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-white rounded-lg px-3 py-1 text-sm text-gray-600">
                    www.empresa.com.br
                  </div>
                </div>

                {/* Website Content */}
                <div className="p-6 h-full">
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-[#660099] rounded-xl mx-auto flex items-center justify-center">
                        <Globe className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Sua Empresa Online</h3>
                      <p className="text-gray-600">Hospedagem profissional com Vivo</p>
                    </div>

                    {/* Features List */}
                    <div className="space-y-3">
                      {resources.map((resource, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                          </div>
                          <span className="text-sm text-gray-700">{resource}</span>
                        </div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 pt-4">
                      <div className="text-center">
                        <div className="text-xl font-bold text-[#660099]">99.9%</div>
                        <div className="text-xs text-gray-600">Uptime</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-[#EB3C7D]">24/7</div>
                        <div className="text-xs text-gray-600">Suporte</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-green-600">SSL</div>
                        <div className="text-xs text-gray-600">Gratuito</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

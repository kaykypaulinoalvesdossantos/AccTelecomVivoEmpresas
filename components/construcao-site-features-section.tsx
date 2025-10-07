"use client"

import React from "react"
import { Badge } from "@/components/ui/badge"
import { Calendar, Monitor, ArrowUp, ArrowDown, Search } from "lucide-react"

export default function ConstrucaoSiteFeaturesSection() {
  const features = [
    {
      icon: Calendar,
      title: "Criação de sites profissionais e elegantes",
      description: "Sem a necessidade de conhecimento técnico."
    },
    {
      icon: Monitor,
      title: "Site responsivo",
      description: "Que se adapta a todos os tipos de dispositivos."
    },
    {
      icon: ArrowUp,
      title: "Todos os planos contam com",
      description: "Domínio, hospedagem, armazenamento e e-mail."
    },
    {
      icon: ArrowDown,
      title: "Atualizações simples e fáceis",
      description: "De plataforma para gerenciar seu site."
    },
    {
      icon: Search,
      title: "Preparado para ajudar",
      description: "A posicionar seu site nos motores de busca."
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-[#660099]/10 text-[#660099] border-[#660099]/20">
            <Calendar className="w-4 h-4 mr-2" />
            Por que usar o Construtor de Sites?
          </Badge>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Por que usar o
            <span className="block text-[#660099]">Construtor de Sites?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="space-y-6">
                {/* Icon */}
                <div className="w-16 h-16 bg-[#660099]/10 rounded-2xl flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-[#660099]" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

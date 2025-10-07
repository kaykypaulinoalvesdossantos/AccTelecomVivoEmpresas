"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, X, Globe, Star } from "lucide-react"

export function RegistroDominioTipsSection() {
  const tips = [
    {
      icon: CheckCircle,
      title: "Prefira nomes curtos",
      description: "Domínios curtos são mais fáceis de lembrar e digitar",
      example: "www.loja.com.br",
      isPositive: true
    },
    {
      icon: X,
      title: "Evite usar números em seu domínio",
      description: "Números podem confundir e dificultar a memorização",
      example: "www.loja123.com.br",
      isPositive: false
    },
    {
      icon: CheckCircle,
      title: "Inclua o nome da sua marca no domínio",
      description: "Fortalece a identidade da marca e facilita o reconhecimento",
      example: "www.marcasua.com.br",
      isPositive: true
    },
    {
      icon: CheckCircle,
      title: "Escolha a extensão que se enquadre melhor para seu negócio",
      description: "Cada extensão tem um propósito específico e público-alvo",
      example: "www.empresa.com.br",
      isPositive: true
    }
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#660099]/10 text-[#660099] border-[#660099]/20">
            <Star className="w-4 h-4 mr-2" />
            Dicas Essenciais
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Algumas dicas para construir o domínio
            <span className="block text-[#660099]">ideal</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Siga essas recomendações para criar um domínio que represente 
            bem sua empresa e seja fácil de lembrar.
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {tips.map((tip, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:bg-gray-50">
              <CardContent className="p-8 text-center">
                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-20 h-20 mx-auto flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform duration-300 ${
                    tip.isPositive 
                      ? 'bg-green-100 text-green-600' 
                      : 'bg-red-100 text-red-600'
                  }`}>
                    <tip.icon className="w-10 h-10" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">{tip.title}</h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed">{tip.description}</p>

                {/* Browser Window Effect */}
                <div className="mt-6 relative">
                  <div className="bg-gray-100 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className={`rounded p-2 text-xs font-medium ${
                      tip.isPositive 
                        ? 'bg-green-50 text-green-700 border border-green-200' 
                        : 'bg-red-50 text-red-700 border border-red-200'
                    }`}>
                      {tip.example}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-3xl p-12 text-white">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-6">Domínio Perfeito para seu Negócio</h3>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Nomes Curtos</h4>
                  <p className="text-white/90">Fáceis de lembrar</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <X className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Sem Números</h4>
                  <p className="text-white/90">Evite confusões</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Nome da Marca</h4>
                  <p className="text-white/90">Fortalece identidade</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Extensão Ideal</h4>
                  <p className="text-white/90">Para seu negócio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

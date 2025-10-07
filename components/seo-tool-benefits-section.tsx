"use client"

import React from "react"
import { Award, Search, BarChart3, Download, MessageCircle, Mail } from "lucide-react"

export default function SeoToolBenefitsSection() {
  const benefits = [
    {
      icon: Award,
      title: "Crie autoridade da marca ao melhorar seu posicionamento",
      description: "Aumente a credibilidade da sua empresa nos resultados de busca"
    },
    {
      icon: Search,
      title: "Indexação automática do seu site nos mecanismos de pesquisa",
      description: "Seu site será encontrado automaticamente pelos buscadores"
    },
    {
      icon: BarChart3,
      title: "Faça verificações de SEO semanais ou mensais",
      description: "Monitore regularmente o desempenho do seu site"
    },
    {
      icon: Download,
      title: "Execute varreduras de sites dos seus concorrentes",
      description: "Analise a estratégia dos seus concorrentes"
    },
    {
      icon: MessageCircle,
      title: "Receba recomendações de conteúdo, celular e links de entrada",
      description: "Otimizações personalizadas para seu site"
    },
    {
      icon: Mail,
      title: "Recebe relatórios periódicos por e-mail automaticamente",
      description: "Acompanhe seu progresso sem esforço"
    }
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Confira os benefícios de uma ferramenta de SEO
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Maximize o potencial do seu site com nossa ferramenta completa de otimização para mecanismos de busca
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-2xl flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

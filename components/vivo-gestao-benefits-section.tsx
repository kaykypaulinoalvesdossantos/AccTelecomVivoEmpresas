"use client"

import React from "react"
import { Shield, TrendingUp, DollarSign, Users, BarChart3, Smartphone } from "lucide-react"

export function VivoGestaoBenefitsSection(): React.JSX.Element {
  const benefits = [
    {
      icon: Shield,
      title: "Segurança e Controle",
      description: "Controle total sobre o uso de dados e voz, com filtros e bloqueios para proteger sua empresa.",
      color: "from-[#660099] to-[#8B00FF]"
    },
    {
      icon: TrendingUp,
      title: "Aumento da Produtividade",
      description: "Reduza distrações e foque sua equipe no que realmente importa para o negócio.",
      color: "from-[#8B00FF] to-[#EB3C7D]"
    },
    {
      icon: DollarSign,
      title: "Controle de Custos",
      description: "Evite surpresas na conta e otimize o uso dos recursos de telecomunicação.",
      color: "from-[#EB3C7D] to-[#660099]"
    },
    {
      icon: Users,
      title: "Gestão Centralizada",
      description: "Gerencie todas as linhas corporativas em uma única plataforma online.",
      color: "from-[#660099] to-[#EB3C7D]"
    },
    {
      icon: BarChart3,
      title: "Relatórios Detalhados",
      description: "Acompanhe o uso em tempo real com relatórios completos e personalizáveis.",
      color: "from-[#8B00FF] to-[#660099]"
    },
    {
      icon: Smartphone,
      title: "Rastreamento de Dispositivos",
      description: "Localize aparelhos em tempo real e garanta a segurança patrimonial.",
      color: "from-[#EB3C7D] to-[#8B00FF]"
    }
  ]

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#660099]/5 via-[#8B00FF]/5 to-[#EB3C7D]/5"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#660099] via-[#8B00FF] to-[#EB3C7D]"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-r from-[#660099]/10 to-[#EB3C7D]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Benefícios do Vivo Gestão
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubra como o Vivo Gestão pode transformar a gestão de dispositivos móveis da sua empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[1px]">
                <div className="bg-gradient-to-r from-[#660099] via-[#8B00FF] to-[#EB3C7D] rounded-xl h-full w-full"></div>
              </div>
              
              <div className="relative bg-white rounded-xl p-6 h-full">
                <div className={`w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para começar?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Entre em contato conosco e descubra como o Vivo Gestão pode beneficiar sua empresa
            </p>
            <button className="bg-white text-[#660099] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Solicitar Proposta
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

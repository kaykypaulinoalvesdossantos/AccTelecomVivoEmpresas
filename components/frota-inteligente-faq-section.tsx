"use client"

import React, { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"

export function FrotaInteligenteFaqSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  const faqs = [
    {
      question: "O que é rastreamento veicular ou conhecido como Frota Inteligente da Vivo?",
      answer: "A Frota Inteligente é uma solução completa de rastreamento veicular que utiliza tecnologia GPS avançada para monitorar e gerenciar frotas em tempo real. Oferece controle total sobre veículos, rotas, motoristas e operações, permitindo otimização de custos e aumento da eficiência operacional."
    },
    {
      question: "Por que contratar a solução Frota Inteligente da Vivo Empresas?",
      answer: "Nossa solução oferece tecnologia de ponta, cobertura nacional, suporte 24/7 e uma plataforma intuitiva. Com a Frota Inteligente, você reduz custos operacionais, aumenta a segurança, melhora a produtividade e obtém insights valiosos para tomada de decisões estratégicas."
    },
    {
      question: "Como funciona o rastreamento em tempo real?",
      answer: "O sistema utiliza dispositivos GPS instalados nos veículos que transmitem dados de localização, velocidade, direção e status em tempo real. Essas informações são processadas e disponibilizadas em nossa plataforma web e mobile, permitindo monitoramento contínuo da frota."
    },
    {
      question: "Quais tipos de veículos podem ser rastreados?",
      answer: "Nossa solução é compatível com diversos tipos de veículos, incluindo carros, caminhões, vans, motocicletas, ônibus e até mesmo equipamentos pesados. O sistema é adaptável às necessidades específicas de cada tipo de frota."
    },
    {
      question: "A instalação dos equipamentos é complicada?",
      answer: "Não! A instalação é simples e rápida, realizada por técnicos especializados. O processo é não invasivo e não danifica o veículo. Oferecemos instalação gratuita em todos os planos, com agendamento flexível para não interferir na operação da sua empresa."
    },
    {
      question: "Quais são os principais benefícios do rastreamento veicular?",
      answer: "Os principais benefícios incluem: redução de custos com combustível, otimização de rotas, aumento da segurança, controle de velocidade, prevenção de furtos, melhoria na produtividade, relatórios detalhados e tomada de decisões baseada em dados reais."
    },
    {
      question: "O sistema funciona em todo o Brasil?",
      answer: "Sim! Nossa solução possui cobertura nacional, funcionando em todas as regiões do Brasil. Utilizamos a melhor tecnologia GPS disponível, garantindo precisão e confiabilidade em qualquer localização do território nacional."
    },
    {
      question: "Como posso acessar as informações da minha frota?",
      answer: "Você pode acessar todas as informações através de nossa plataforma web responsiva ou aplicativo mobile. O sistema oferece dashboards intuitivos, relatórios personalizados e alertas em tempo real, disponíveis 24 horas por dia, 7 dias por semana."
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#660099]/10 text-[#660099] border-[#660099]/20">
            <HelpCircle className="w-4 h-4 mr-2" />
            Dúvidas Frequentes
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Rastreamento veicular:
            <span className="block text-[#660099]">principais dúvidas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encontre respostas para as principais perguntas sobre a Frota Inteligente 
            e descubra como nossa solução pode transformar a gestão da sua frota.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card 
              key={index} 
              className={`border-2 transition-all duration-300 ${
                openItems.includes(index) 
                  ? 'border-[#660099] shadow-lg' 
                  : 'border-gray-100 hover:border-gray-200'
              }`}
            >
              <CardContent className="p-0">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-[#660099]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ainda tem dúvidas?</h3>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Nossa equipe especializada está pronta para esclarecer todas as suas questões 
              e ajudar você a implementar a melhor solução para sua frota.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#660099] px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-colors cursor-pointer">
                Falar com Especialista
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors cursor-pointer">
                Solicitar Demonstração
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import React, { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"

export function ClimaInteligenteFaqSection() {
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
      question: "Como a Clima Inteligente auxilia na economia de recursos naturais?",
      answer: "A solução monitora em tempo real as condições climáticas e do solo, permitindo otimizar o uso de água na irrigação, reduzir desperdícios e aplicar recursos apenas quando necessário. Com dados precisos sobre umidade do solo e previsão de chuva, você pode economizar até 30% no consumo de água."
    },
    {
      question: "Qual a periodicidade da previsão climática e como ela pode auxiliar no dia a dia do agronegócio?",
      answer: "Nossa previsão climática é atualizada a cada 15 minutos, oferecendo dados precisos para até 7 dias. Isso permite planejar atividades agrícolas, otimizar aplicações de defensivos, programar irrigação e tomar decisões estratégicas baseadas em dados reais, aumentando a produtividade e reduzindo riscos."
    },
    {
      question: "É possível atender necessidades específicas do meu agronegócio?",
      answer: "Sim! Nossa solução é totalmente customizável. Podemos configurar sensores específicos para sua cultura, região e necessidades operacionais. Oferecemos suporte técnico especializado para implementar a solução ideal para seu tipo de produção agrícola."
    },
    {
      question: "A Clima Inteligente é compatível com outras tecnologias agrícolas?",
      answer: "Absolutamente! Nossa plataforma é integrada com sistemas de irrigação automatizada, drones, tratores inteligentes e outras tecnologias agrícolas. Oferecemos APIs para integração com sistemas de gestão agrícola existentes, garantindo uma solução completa e conectada."
    },
    {
      question: "Quais são os benefícios da Clima Inteligente para a agricultura sustentável?",
      answer: "A solução promove agricultura sustentável através do uso eficiente de recursos hídricos, redução do uso de defensivos agrícolas, otimização da aplicação de fertilizantes e monitoramento da qualidade do solo. Isso resulta em maior produtividade com menor impacto ambiental, contribuindo para práticas agrícolas mais sustentáveis."
    }
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#660099]/10 text-[#660099] border-[#660099]/20">
            <HelpCircle className="w-4 h-4 mr-2" />
            Dúvidas Frequentes
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Clima Inteligente:
            <span className="block text-[#660099]">principais dúvidas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encontre respostas para as principais perguntas sobre nossa solução 
            de monitoramento climático inteligente.
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
              sobre a Clima Inteligente.
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

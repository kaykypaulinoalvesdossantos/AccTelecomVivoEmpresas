"use client"

import React, { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"

export function GestaoMaquinarioFaqSection() {
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
      question: "Como o Gestão de Maquinário pode ajudar o meu agronegócio?",
      answer: "A solução oferece controle total da frota agrícola, permitindo monitoramento em tempo real, otimização de rotas, controle de combustível, análise de performance dos operadores e redução significativa nos custos operacionais. Com dados precisos, você toma decisões mais inteligentes para maximizar a produtividade."
    },
    {
      question: "Quanto é possível reduzir os custos com a Gestão de Maquinário?",
      answer: "Nossos clientes relatam reduções de até 30% nos custos de combustível, 25% na manutenção preventiva e 20% no tempo ocioso dos equipamentos. A economia varia conforme o tamanho da frota e o tipo de operação, mas os resultados são sempre significativos."
    },
    {
      question: "Em quais veículos do campo posso utilizar a Gestão de Maquinário e como funciona a instalação da telemetria?",
      answer: "A solução é compatível com tratores, colheitadeiras, plantadeiras, pulverizadores e outros equipamentos agrícolas de diversos fabricantes. A instalação é realizada por técnicos especializados, sem interferir no funcionamento original do equipamento, garantindo máxima compatibilidade."
    },
    {
      question: "Qual é o tempo médio de instalação de telemetria?",
      answer: "A instalação completa leva em média 2 a 4 horas por equipamento, dependendo da complexidade. Nossos técnicos são especializados e realizam o processo de forma rápida e segura, sem interromper suas operações por muito tempo."
    },
    {
      question: "A Telemetria inclui um plano de dados?",
      answer: "Sim, todos os planos incluem dados móveis para transmissão das informações. Oferecemos diferentes opções de pacotes de dados conforme a necessidade da sua operação, garantindo conectividade contínua mesmo em áreas remotas."
    },
    {
      question: "Onde posso acompanhar os dados de operação e emitir relatórios da telemetria?",
      answer: "Você pode acessar todas as informações através da nossa plataforma web e aplicativo mobile. Os dados ficam disponíveis 24/7, com relatórios personalizáveis que podem ser exportados em diferentes formatos para análise e tomada de decisões."
    },
    {
      question: "Quais parâmetros de telemetria consigo monitorar?",
      answer: "A solução monitora localização GPS, velocidade, horas de trabalho, consumo de combustível, temperatura do motor, pressão de óleo, rotações por minuto (RPM), análise de comportamento do operador, alertas de manutenção e muito mais. Todos os dados são apresentados de forma clara e intuitiva."
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
            Gestão de Maquinário:
            <span className="block text-[#660099]">principais dúvidas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encontre respostas para as principais perguntas sobre nossa solução 
            de gestão de maquinário agrícola.
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
              sobre a Gestão de Maquinário.
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

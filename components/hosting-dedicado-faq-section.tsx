"use client"

import React, { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"

export function HostingDedicadoFaqSection() {
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
      question: "O que é serviço de Hosting?",
      answer: "O serviço de Hosting é uma solução completa de infraestrutura de TI que inclui servidores físicos ou virtuais, armazenamento, conectividade e serviços de gestão. A Vivo oferece toda a infraestrutura necessária para hospedar aplicações, bancos de dados e sistemas corporativos, eliminando a necessidade de investir em equipamentos próprios."
    },
    {
      question: "Quais os benefícios ao contratar o serviço de Hosting da Vivo?",
      answer: "Os principais benefícios incluem: eliminação de custos com infraestrutura física própria, gestão completa pela Vivo Empresas permitindo foco no core business, flexibilidade para configurar soluções adequadas às necessidades do negócio, e processos de gestão orientados pelas melhores práticas da ITIL. Além disso, oferecemos suporte técnico especializado 24/7."
    },
    {
      question: "Quais componentes estão disponíveis nos servidores Vivo?",
      answer: "Nossos servidores incluem: infraestrutura física (racks, cabeamento, energia), serviços de conectividade, servidores virtuais ou físicos (RISC ou CISC), elementos de rede, softwares (sistemas operacionais, banco de dados), serviços de armazenamento e backup, serviços de segurança da informação, e serviços de monitoração, gestão, operação e consultoria."
    },
    {
      question: "Como faço para contratar o serviço de Hosting?",
      answer: "Para contratar o serviço de Hosting da Vivo, você pode entrar em contato conosco através do telefone (11) 2362-9665, WhatsApp (11) 2362-9665, ou email empresas@vivo.com.br. Nossa equipe especializada irá analisar suas necessidades e apresentar a solução mais adequada para seu negócio, incluindo configuração personalizada e SLA específico."
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
            Confira as principais dúvidas sobre
            <span className="block text-[#660099]">Hosting</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encontre respostas para as principais perguntas sobre nossa solução 
            de Hosting Dedicado.
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
              sobre o Hosting Dedicado.
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

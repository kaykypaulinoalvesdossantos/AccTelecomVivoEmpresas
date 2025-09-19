"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"

export function IBMFAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  const faqItems = [
    {
      question: "Como funciona o IBM Cloud?",
      answer: "O IBM Cloud é uma plataforma de computação em nuvem que oferece serviços de infraestrutura, plataforma e software como serviço. Ele permite que empresas executem aplicações, armazenem dados e desenvolvam soluções de forma escalável e segura."
    },
    {
      question: "Como será a cobrança e o faturamento do uso que eu fizer em IBM Cloud?",
      answer: "A cobrança do IBM Cloud é baseada no modelo pay-as-you-go, onde você paga apenas pelos recursos que realmente utilizar. A Vivo oferece contratos locais com faturamento simplificado e transparente, facilitando o controle de custos."
    },
    {
      question: "Onde consigo ver minhas faturas e consumo da nuvem?",
      answer: "Você pode acompanhar suas faturas e consumo através do portal de autoatendimento da Vivo, onde terá acesso a relatórios detalhados de uso, custos e performance dos serviços IBM Cloud contratados."
    },
    {
      question: "Como posso entrar em contato com o centro de suporte da VIVO para IBM Cloud?",
      answer: "O suporte técnico está disponível 24/7 através de múltiplos canais: telefone, email, chat online e portal de autoatendimento. Nossa equipe de especialistas certificados pela IBM está sempre pronta para ajudar."
    },
    {
      question: "Como é realizado o suporte técnico do produto IBM Cloud comercializado pela Vivo?",
      answer: "A Vivo oferece suporte técnico especializado através de uma equipe de especialistas IBM Cloud certificados, com atendimento prioritário 24/7, consultoria personalizada e gestão proativa da infraestrutura para empresas."
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
            <HelpCircle className="w-4 h-4 mr-2" />
            Perguntas e Respostas
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Dúvidas frequentes sobre IBM Cloud
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encontre respostas para as principais dúvidas sobre IBM Cloud e nossos serviços
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 mb-12">
            {faqItems.map((item, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {item.question}
                    </h3>
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {openItems.includes(index) && (
                    <div className="px-8 pb-6">
                      <div className="border-t pt-4">
                        <p className="text-gray-600 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-gray-600 mb-6">
              Nossa equipe de especialistas está pronta para esclarecer todas as suas dúvidas sobre IBM Cloud
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300" style={{ backgroundColor: '#FF9900' }} onClick={() => window.open('https://wa.me/551123629665?text=Olá! Ainda tenho dúvidas sobre IBM Cloud', '_blank')}>
                Falar com Especialista
              </button>
              <button className="border-2 px-8 py-3 rounded-lg font-semibold transition-all duration-300" style={{ borderColor: '#660099', color: '#660099' }} onClick={() => window.open('https://wa.me/551123629665?text=Olá! Gostaria de solicitar contato sobre IBM Cloud', '_blank')}>
                Solicitar Contato
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

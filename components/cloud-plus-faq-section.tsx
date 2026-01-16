"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"

export function CloudPlusFAQSection() {
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
      question: "Como contratar o Cloud Plus?",
      answer: "Para contratar o Cloud Plus, entre em contato com nossa equipe de especialistas através do WhatsApp ou telefone. Nossa equipe fará uma análise das suas necessidades e apresentará a melhor solução para sua empresa."
    },
    {
      question: "Quais são os diferenciais do Cloud Plus?",
      answer: "Os principais diferenciais do Cloud Plus incluem: infraestrutura dedicada, Data Center TIER III, gerenciamento simplificado, controle total e autonomia, integração com outros serviços Vivo, escalabilidade e flexibilidade."
    },
    {
      question: "O Cloud Plus é seguro?",
      answer: "Sim, o Cloud Plus oferece máxima segurança com Data Center TIER III certificado, firewall integrado, VPN IPSec, controle de acesso granular e criptografia de dados."
    },
    {
      question: "Como funciona o gerenciamento do Cloud Plus?",
      answer: "O Cloud Plus oferece um painel de gerenciamento intuitivo com relatórios executivos, monitoramento operacional, controle total sobre recursos e autonomia completa de gestão."
    },
    {
      question: "Posso escalar minha infraestrutura Cloud Plus?",
      answer: "Sim, o Cloud Plus oferece escalabilidade automática e flexibilidade para crescer com sua empresa. Você pode aumentar ou diminuir recursos conforme necessário."
    },
    {
      question: "A Vivo oferece suporte técnico para Cloud Plus?",
      answer: "Sim, a Vivo Empresas oferece suporte técnico especializado 24/7 através de uma equipe de especialistas certificados, com consultoria gratuita e implementação completa."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-white border-white/30 hover:bg-white/30" style={{ backgroundColor: 'rgba(102, 0, 153, 0.2)' }}>
            <HelpCircle className="w-4 h-4 mr-2" />
            Mais dúvidas sobre o Cloud Plus
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Perguntas frequentes sobre Cloud Plus
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encontre respostas para as principais dúvidas sobre Cloud Plus e nossos serviços
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
                      <ChevronUp className="w-5 h-5 flex-shrink-0" style={{ color: '#660099' }} />
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
              Nossa equipe de especialistas está pronta para esclarecer todas as suas dúvidas sobre Cloud Plus
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300" style={{ backgroundColor: '#FF9900' }} asChild>
                <a href="https://wa.me/5511989150001?text=Olá! Ainda tenho dúvidas sobre Cloud Plus" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  Falar com Especialista
                </a>
              </Button>
              <Button variant="outline" className="border-2 px-8 py-3 rounded-lg font-semibold transition-all duration-300" style={{ borderColor: '#660099', color: '#660099' }} asChild>
                <a href="https://wa.me/5511989150001?text=Olá! Gostaria de solicitar contato sobre Cloud Plus" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  Solicitar Contato
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"

export function HuaweiFAQSection() {
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
      question: "O que é Huawei Cloud?",
      answer: "O Huawei Cloud é uma plataforma de computação em nuvem completa que oferece serviços de infraestrutura, plataforma e software como serviço. Com foco em segurança, performance e custo-benefício, é ideal para empresas de todos os tamanhos."
    },
    {
      question: "Como funciona o Huawei Cloud?",
      answer: "O Huawei Cloud funciona através de uma infraestrutura distribuída globalmente, oferecendo serviços de computação, armazenamento, rede e banco de dados. A plataforma permite deploy rápido, escalabilidade automática e monitoramento 24/7."
    },
    {
      question: "O Huawei Cloud é seguro?",
      answer: "Sim, o Huawei Cloud oferece segurança certificada com múltiplas camadas de proteção, incluindo criptografia de dados, controle de acesso granular e conformidade com padrões internacionais de segurança."
    },
    {
      question: "Como é realizado o faturamento do Huawei Cloud?",
      answer: "O faturamento do Huawei Cloud é realizado em reais, sem surpresas com câmbio ou taxas internacionais. A Vivo oferece transparência total nos custos e faturamento simplificado."
    },
    {
      question: "A Vivo oferece suporte técnico para Huawei Cloud?",
      answer: "Sim, a Vivo Empresas oferece suporte técnico especializado 24/7 através de uma equipe de especialistas certificados pela Huawei, com consultoria gratuita e implementação completa."
    },
    {
      question: "Posso migrar minhas aplicações para Huawei Cloud?",
      answer: "Sim, oferecemos serviços de migração completos através do Migration as a Service (MaaS), facilitando a transição de outras nuvens para Huawei Cloud com suporte especializado."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-white border-white/30 hover:bg-white/30" style={{ backgroundColor: 'rgba(102, 0, 153, 0.2)' }}>
            <HelpCircle className="w-4 h-4 mr-2" />
            Mais dúvidas sobre Huawei Cloud
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Perguntas frequentes sobre Huawei Cloud
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encontre respostas para as principais dúvidas sobre Huawei Cloud e nossos serviços
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
              Nossa equipe de especialistas Huawei está pronta para esclarecer todas as suas dúvidas sobre Huawei Cloud
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300" style={{ backgroundColor: '#FF9900' }} onClick={() => window.open('https://wa.me/551123629665?text=Olá! Ainda tenho dúvidas sobre Huawei Cloud', '_blank')}>
                Falar com Especialista
              </button>
              <button className="border-2 px-8 py-3 rounded-lg font-semibold transition-all duration-300" style={{ borderColor: '#660099', color: '#660099' }} onClick={() => window.open('https://wa.me/551123629665?text=Olá! Gostaria de solicitar contato sobre Huawei Cloud', '_blank')}>
                Solicitar Contato
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

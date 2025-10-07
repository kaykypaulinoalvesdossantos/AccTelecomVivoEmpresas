"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"

export function Microsoft365FAQSection() {
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
      question: "Como contratar o Microsoft 365?",
      answer: "Para contratar o Microsoft 365, entre em contato com nossa equipe de especialistas através do WhatsApp ou telefone. Nossa equipe fará uma análise das suas necessidades e apresentará a melhor solução para sua empresa."
    },
    {
      question: "Quais são os diferenciais do Microsoft 365?",
      answer: "Os principais diferenciais do Microsoft 365 incluem: aplicativos sempre atualizados, armazenamento em nuvem seguro, colaboração em tempo real, segurança avançada e suporte técnico especializado."
    },
    {
      question: "O Microsoft 365 é seguro?",
      answer: "Sim, o Microsoft 365 oferece máxima segurança com proteção de dados avançada, conformidade com regulamentações, backup automático e controle de acesso granular."
    },
    {
      question: "Posso personalizar meu ambiente Microsoft 365?",
      answer: "Sim, o Microsoft 365 oferece controle granular de permissões, onde os usuários podem definir quem ou quais grupos têm acesso a arquivos e pastas específicas."
    },
    {
      question: "Qual o nível de suporte oferecido?",
      answer: "Oferecemos suporte técnico especializado com time de especialistas disponíveis para auxiliar nas instalações das ferramentas Pacote Office e configurações personalizadas."
    },
    {
      question: "Como funciona a cobrança do Microsoft 365?",
      answer: "A cobrança é mensal e inclui todas as licenças necessárias. Você pode controlar as licenças e faturas pela Plataforma Digital de forma fácil e rápida."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-white border-white/30 hover:bg-white/30" style={{ backgroundColor: 'rgba(102, 0, 153, 0.2)' }}>
            <HelpCircle className="w-4 h-4 mr-2" />
            Perguntas frequentes
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encontre respostas para as principais dúvidas sobre Microsoft 365 e nossos serviços
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
              Nossa equipe de especialistas está pronta para esclarecer todas as suas dúvidas sobre Microsoft 365
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300" style={{ backgroundColor: '#FF9900' }} onClick={() => window.open('https://wa.me/551123629665?text=Olá! Ainda tenho dúvidas sobre Microsoft 365', '_blank')}>
                Falar com Especialista
              </button>
              <button className="border-2 px-8 py-3 rounded-lg font-semibold transition-all duration-300" style={{ borderColor: '#660099', color: '#660099' }} onClick={() => window.open('https://wa.me/551123629665?text=Olá! Gostaria de solicitar contato sobre Microsoft 365', '_blank')}>
                Solicitar Contato
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


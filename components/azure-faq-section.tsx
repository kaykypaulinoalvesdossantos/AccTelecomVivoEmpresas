"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"

export function AzureFAQSection() {
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
      question: "O que é Azure?",
      answer: "O Microsoft Azure é uma plataforma de computação em nuvem que oferece mais de 200 serviços e produtos de nuvem para ajudar a trazer novas soluções ao mercado e resolver desafios empresariais."
    },
    {
      question: "O Azure é seguro?",
      answer: "Sim, o Azure oferece segurança multicamada com mais de 100 certificações de conformidade, incluindo ISO 27001, SOC 1 e SOC 2. A Microsoft investe mais de US$ 1 bilhão por ano em segurança."
    },
    {
      question: "Como funciona o modelo de cobrança do Azure?",
      answer: "O Azure usa um modelo de pagamento conforme o uso (pay-as-you-go), onde você paga apenas pelos recursos que realmente utilizar. Também oferecemos opções de desconto para compromissos de longo prazo."
    },
    {
      question: "Posso migrar minhas aplicações existentes para o Azure?",
      answer: "Sim, o Azure oferece ferramentas e serviços para facilitar a migração de aplicações existentes, incluindo Azure Migrate e Azure Database Migration Service."
    },
    {
      question: "O Azure oferece suporte para ambientes híbridos?",
      answer: "Sim, o Azure é líder em soluções de nuvem híbrida, permitindo que você execute cargas de trabalho tanto na nuvem quanto no local com consistência total."
    },
    {
      question: "Como posso obter suporte técnico para Azure?",
      answer: "A Vivo oferece suporte técnico especializado através de uma equipe de especialistas Microsoft Azure certificados, com atendimento prioritário 24/7 e consultoria personalizada."
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-white border-white/30 hover:bg-white/30" style={{ backgroundColor: 'rgba(102, 0, 153, 0.2)' }}>
            <HelpCircle className="w-4 h-4 mr-2" />
            Perguntas e Respostas
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Dúvidas frequentes sobre Azure Cloud
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encontre respostas para as principais dúvidas sobre Microsoft Azure e nossos serviços
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
              Nossa equipe de especialistas Microsoft está pronta para esclarecer todas as suas dúvidas sobre Azure Cloud
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300" style={{ backgroundColor: '#FF9900' }} onClick={() => window.open('https://wa.me/551123629665?text=Olá! Ainda tenho dúvidas sobre Microsoft Azure Cloud', '_blank')}>
                Falar com Especialista
              </button>
              <button className="border-2 px-8 py-3 rounded-lg font-semibold transition-all duration-300" style={{ borderColor: '#660099', color: '#660099' }} onClick={() => window.open('https://wa.me/551123629665?text=Olá! Gostaria de solicitar contato sobre Azure Cloud', '_blank')}>
                Solicitar Contato
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

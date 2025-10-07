"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"

export function MicrosoftTeamsFAQSection() {
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
      question: "O que é Microsoft Teams?",
      answer: "Microsoft Teams é uma plataforma de comunicação e colaboração que combina chat, videoconferências, compartilhamento de arquivos e integração com aplicativos Microsoft 365 em uma única solução."
    },
    {
      question: "Como funciona o Microsoft Teams?",
      answer: "O Teams funciona através de canais organizados por projeto ou departamento, onde equipes podem conversar, fazer videoconferências, compartilhar arquivos e colaborar em tempo real. Funciona em dispositivos móveis, desktop e web."
    },
    {
      question: "É necessário um profissional de TI para a instalação do Microsoft Teams na minha empresa?",
      answer: "Não é necessário um profissional de TI especializado. O Teams é uma solução simplificada que pode ser configurada facilmente. Nossa equipe oferece suporte completo para implementação e configuração."
    },
    {
      question: "Em quais sistemas operacionais o Teams funciona?",
      answer: "O Microsoft Teams funciona em Windows, Mac, iOS, Android e Linux. Também está disponível como aplicativo web, funcionando em qualquer navegador moderno."
    },
    {
      question: "Requisitos de hardware para o Teams em um computador Windows",
      answer: "Para Windows: Processador de 1.6 GHz ou superior, 4 GB de RAM, 3 GB de espaço em disco, resolução de tela de 1024x768, conexão com internet de banda larga."
    },
    {
      question: "Requisitos de hardware para o Teams no Mac",
      answer: "Para Mac: macOS 10.14 ou superior, processador Intel de 1.6 GHz ou superior, 4 GB de RAM, 3 GB de espaço em disco, resolução de tela de 1024x768, conexão com internet de banda larga."
    },
    {
      question: "Requisitos de hardware para o Teams no Linux",
      answer: "Para Linux: Ubuntu 18.04 ou superior, processador de 1.6 GHz ou superior, 4 GB de RAM, 3 GB de espaço em disco, resolução de tela de 1024x768, conexão com internet de banda larga."
    },
    {
      question: "Requisitos de hardware para o Teams em dispositivos móveis",
      answer: "Para dispositivos móveis: iOS 12.0 ou superior, Android 6.0 ou superior, conexão com internet Wi-Fi ou dados móveis, câmera e microfone para videoconferências."
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-white border-white/30 hover:bg-white/30" style={{ backgroundColor: 'rgba(102, 0, 153, 0.2)' }}>
            <HelpCircle className="w-4 h-4 mr-2" />
            Perguntas frequentes
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Tire suas dúvidas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encontre respostas para as principais dúvidas sobre Microsoft Teams e nossos serviços
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
              Nossa equipe de especialistas está pronta para esclarecer todas as suas dúvidas sobre Microsoft Teams
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300" style={{ backgroundColor: '#FF9900' }} onClick={() => window.open('https://wa.me/551123629665?text=Olá! Ainda tenho dúvidas sobre Microsoft Teams', '_blank')}>
                Falar com Especialista
              </button>
              <button className="border-2 px-8 py-3 rounded-lg font-semibold transition-all duration-300" style={{ borderColor: '#660099', color: '#660099' }} onClick={() => window.open('https://wa.me/551123629665?text=Olá! Gostaria de solicitar contato sobre Microsoft Teams', '_blank')}>
                Solicitar Contato
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


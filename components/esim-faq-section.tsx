"use client"

import React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ESimFAQSection(): React.JSX.Element {
  const faqCategories = {
    sobre: [
      {
        question: "O que é eSIM?",
        answer: "eSIM é um chip digital integrado ao seu dispositivo que substitui o chip físico tradicional. Ele permite ativação instantânea de planos móveis sem necessidade de trocar ou inserir chips físicos."
      },
      {
        question: "Onde faço para comprar um chip eSIM?",
        answer: "Você pode comprar um eSIM diretamente no site da Vivo, no aplicativo Vivo ou em nossas lojas físicas. O processo é simples e rápido."
      },
      {
        question: "Como faço para ativar o chip eSIM do meu dispositivo?",
        answer: "A ativação é feita através do aplicativo Vivo ou escaneando um QR Code. O processo é totalmente digital e leva apenas alguns minutos."
      }
    ],
    ativar: [
      {
        question: "Como faço a troca do meu chip físico (SIM card) para eSIM?",
        answer: "Para migrar do chip físico para eSIM, entre em contato com nosso suporte ou visite uma loja Vivo. O processo é simples e mantém seu número."
      },
      {
        question: "O que é o erro 'eSIM: ERRO 1000'?",
        answer: "Este erro geralmente indica incompatibilidade do dispositivo ou problemas na configuração. Entre em contato com nosso suporte para resolver."
      },
      {
        question: "Como faço a troca do chip da minha linha que está em portabilidade?",
        answer: "Linhas em portabilidade podem ser migradas para eSIM seguindo o mesmo processo. Consulte nosso suporte para orientações específicas."
      }
    ],
    trocar: [
      {
        question: "Quantas linhas móveis posso ter no mesmo chip eSIM?",
        answer: "Você pode ter até 8 perfis diferentes no mesmo eSIM, permitindo múltiplas linhas no mesmo dispositivo."
      },
      {
        question: "O que é um dispositivo Dual SIM com eSIM?",
        answer: "Dispositivos Dual SIM com eSIM permitem usar um chip físico e um eSIM simultaneamente, oferecendo maior flexibilidade."
      },
      {
        question: "Como faço para ativar um dispositivo que não está na Vivo Empresas?",
        answer: "Dispositivos de outras operadoras podem ser ativados na Vivo seguindo o processo de portabilidade. Consulte nosso suporte."
      }
    ]
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Perguntas frequentes
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Respostas para as principais dúvidas sobre eSIM
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="sobre" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="sobre" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#660099] data-[state=active]:to-[#EB3C7D] data-[state=active]:text-white">
                Sobre o eSIM
              </TabsTrigger>
              <TabsTrigger value="ativar" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#660099] data-[state=active]:to-[#EB3C7D] data-[state=active]:text-white">
                Ativar o eSIM
              </TabsTrigger>
              <TabsTrigger value="trocar" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#660099] data-[state=active]:to-[#EB3C7D] data-[state=active]:text-white">
                Trocar o eSIM
              </TabsTrigger>
            </TabsList>

            <TabsContent value="sobre">
              <Accordion type="single" collapsible className="space-y-4">
                {faqCategories.sobre.map((faq, index) => (
                  <AccordionItem key={index} value={`sobre-${index}`} className="bg-white border border-gray-200 rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-lg flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                        <span className="font-semibold text-gray-800">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pt-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>

            <TabsContent value="ativar">
              <Accordion type="single" collapsible className="space-y-4">
                {faqCategories.ativar.map((faq, index) => (
                  <AccordionItem key={index} value={`ativar-${index}`} className="bg-white border border-gray-200 rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-lg flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                        <span className="font-semibold text-gray-800">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pt-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>

            <TabsContent value="trocar">
              <Accordion type="single" collapsible className="space-y-4">
                {faqCategories.trocar.map((faq, index) => (
                  <AccordionItem key={index} value={`trocar-${index}`} className="bg-white border border-gray-200 rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-lg flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                        <span className="font-semibold text-gray-800">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pt-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

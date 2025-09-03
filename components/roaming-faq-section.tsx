"use client"

import React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function RoamingFAQSection(): React.JSX.Element {
  const faqCategories = {
    vivoTravel: [
      {
        question: "O que é o Vivo Travel?",
        answer: "O Vivo Travel é um serviço de roaming internacional que permite usar seu celular em mais de 150 países, mantendo seu número brasileiro e oferecendo internet e ligações com tarifas especiais."
      },
      {
        question: "Como ativar o Vivo Travel?",
        answer: "O Vivo Travel é ativado automaticamente quando você viaja para o exterior. Basta ter um plano Vivo ativo e crédito disponível. Você receberá um SMS de boas-vindas ao chegar no destino."
      },
      {
        question: "Quais países têm cobertura do Vivo Travel?",
        answer: "O Vivo Travel está disponível em mais de 150 países, incluindo todos os continentes. Consulte a lista completa no site da Vivo ou através do aplicativo Vivo."
      }
    ],
    mensal: [
      {
        question: "Como funciona o plano mensal de roaming?",
        answer: "O plano mensal oferece um pacote de dados e minutos para uso internacional durante todo o mês, com renovação automática. Ideal para quem viaja frequentemente."
      },
      {
        question: "Posso cancelar o plano mensal a qualquer momento?",
        answer: "Sim, você pode cancelar o plano mensal a qualquer momento através do aplicativo Vivo, site ou central de atendimento. O cancelamento será efetivo no próximo ciclo de cobrança."
      }
    ],
    diario: [
      {
        question: "Como funciona o roaming diário?",
        answer: "O roaming diário cobra uma tarifa fixa por dia de uso internacional, incluindo dados e ligações. É ideal para viagens curtas e uso pontual."
      },
      {
        question: "Quando começa a cobrança do roaming diário?",
        answer: "A cobrança do roaming diário começa no primeiro dia que você usar dados ou fazer ligações no exterior. Cada dia completo de uso é cobrado separadamente."
      }
    ]
  }

  return (
    <section className="py-16 bg-gradient-to-br from-[#660099]/5 via-[#8B00FF]/5 to-[#EB3C7D]/5 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-[#660099]/10 to-[#EB3C7D]/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-[#EB3C7D]/10 to-[#660099]/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#660099]/5 to-[#EB3C7D]/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Mais dúvidas sobre Vivo Travel
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Respostas para as principais dúvidas sobre roaming internacional
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="vivoTravel" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="vivoTravel" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#660099] data-[state=active]:to-[#EB3C7D] data-[state=active]:text-white">
                Vivo Travel
              </TabsTrigger>
              <TabsTrigger value="mensal" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#660099] data-[state=active]:to-[#EB3C7D] data-[state=active]:text-white">
                Mensal
              </TabsTrigger>
              <TabsTrigger value="diario" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#660099] data-[state=active]:to-[#EB3C7D] data-[state=active]:text-white">
                Diário
              </TabsTrigger>
            </TabsList>

            <TabsContent value="vivoTravel">
              <Accordion type="single" collapsible className="space-y-4">
                {faqCategories.vivoTravel.map((faq, index) => (
                  <AccordionItem key={index} value={`vivoTravel-${index}`} className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-lg px-6 shadow-lg">
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

            <TabsContent value="mensal">
              <Accordion type="single" collapsible className="space-y-4">
                {faqCategories.mensal.map((faq, index) => (
                  <AccordionItem key={index} value={`mensal-${index}`} className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-lg px-6 shadow-lg">
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

            <TabsContent value="diario">
              <Accordion type="single" collapsible className="space-y-4">
                {faqCategories.diario.map((faq, index) => (
                  <AccordionItem key={index} value={`diario-${index}`} className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-lg px-6 shadow-lg">
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

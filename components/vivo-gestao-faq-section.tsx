"use client"

import React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function VivoGestaoFAQSection(): React.JSX.Element {
  const faqs = [
    {
      question: "O que é a Vivo Gestão de Voz e Dados?",
      answer: "A Vivo Gestão de Voz e Dados é uma solução que permite controlar o uso de internet e voz nos celulares corporativos com filtros, bloqueios e gestão em tempo real, online e segura."
    },
    {
      question: "Como funciona o controle de dados móveis?",
      answer: "O controle de dados móveis permite monitorar o consumo de internet de cada linha, definir limites de uso, bloquear aplicativos específicos e distribuir cotas de dados por grupo ou linha."
    },
    {
      question: "É possível bloquear o envio e recebimento de SMS?",
      answer: "Sim, é possível bloquear o envio e recebimento de SMS para controle de custos e segurança da empresa."
    },
    {
      question: "Como controlar as chamadas de voz dos colaboradores?",
      answer: "Você pode controlar as chamadas de voz através de relatórios detalhados, definição de horários permitidos, bloqueio de números específicos e monitoramento em tempo real."
    },
    {
      question: "Consegue aplicar filtros de navegação nos aparelhos?",
      answer: "Sim, é possível aplicar filtros de navegação para bloquear sites específicos, categorias de conteúdo ou aplicativos não autorizados."
    },
    {
      question: "O Vivo Gestão permite rastrear os aparelhos?",
      answer: "Sim, o Vivo Gestão oferece funcionalidades de rastreamento de aparelhos para localização em tempo real e segurança patrimonial."
    },
    {
      question: "Como faço para configurar os bloqueios e permissões?",
      answer: "A configuração é feita através do painel online do Vivo Gestão, onde você pode definir políticas de uso, bloqueios e permissões de forma intuitiva."
    },
    {
      question: "Posso agendar horários de uso da internet?",
      answer: "Sim, é possível agendar horários específicos para uso da internet, permitindo controle de produtividade e otimização de custos."
    },
    {
      question: "O que acontece quando o limite de dados é atingido?",
      answer: "Quando o limite de dados é atingido, você pode configurar diferentes ações: bloqueio automático, redução de velocidade ou notificação para o usuário."
    },
    {
      question: "Quais são os benefícios do Vivo Gestão para empresas?",
      answer: "Os principais benefícios incluem controle de custos, aumento da produtividade, segurança de dados, conformidade com políticas empresariais e gestão centralizada de dispositivos."
    }
  ]

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
            Gestão de Voz e Dados: principais dúvidas
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Respostas para as principais dúvidas sobre o Vivo Gestão
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-lg px-6 shadow-lg">
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
        </div>
      </div>
    </section>
  )
}

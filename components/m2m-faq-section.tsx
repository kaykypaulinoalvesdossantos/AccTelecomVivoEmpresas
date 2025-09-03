"use client"

import React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function M2MFAQSection(): React.JSX.Element {
  const faqs = [
    {
      question: "O que é M2M (Machine to Machine)?",
      answer: "M2M (Machine to Machine) é uma tecnologia que permite a comunicação automática entre dispositivos, máquinas e sistemas sem intervenção humana. É fundamental para IoT, permitindo monitoramento remoto, automação e coleta de dados em tempo real."
    },
    {
      question: "Para que serve o chip M2M da Vivo Empresas?",
      answer: "O chip M2M da Vivo Empresas serve para conectar dispositivos IoT, máquinas, sensores e equipamentos à internet. É ideal para aplicações como rastreamento de veículos, telemetria, maquininhas de cartão, monitoramento de equipamentos e automação industrial."
    },
    {
      question: "O que é a Kite Platform da Vivo?",
      answer: "A Kite Platform é uma solução completa de gestão M2M da Vivo que permite monitorar e controlar dispositivos conectados em tempo real. Oferece controle de custos, analytics, mitigação de fraudes e alertas inteligentes para otimizar suas operações."
    },
    {
      question: "Quais são os benefícios do chip M2M para empresas?",
      answer: "Os principais benefícios incluem: rastreamento em tempo real, automação de processos, redução de custos operacionais, maior segurança de dados, monitoramento remoto de equipamentos e insights baseados em analytics para tomada de decisões."
    },
    {
      question: "O que é telemetria com M2M?",
      answer: "Telemetria com M2M é a coleta e transmissão automática de dados de sensores e equipamentos remotos. Permite monitorar temperatura, pressão, localização, consumo de energia e outros parâmetros em tempo real, sem necessidade de intervenção manual."
    },
    {
      question: "Quais setores podem se beneficiar do M2M da Vivo?",
      answer: "Diversos setores podem se beneficiar: logística e transporte, varejo, indústria, agricultura, saúde, segurança, energia, construção civil e qualquer empresa que precise de conectividade para dispositivos IoT e automação."
    },
    {
      question: "Como funciona o controle de custos com a Kite Platform?",
      answer: "A Kite Platform oferece visibilidade completa do inventário de chips M2M, monitoramento de uso de dados, alertas de consumo excessivo e relatórios detalhados para otimizar custos e evitar desperdícios."
    },
    {
      question: "A Vivo oferece suporte técnico para soluções M2M?",
      answer: "Sim, a Vivo oferece suporte técnico especializado para soluções M2M, incluindo consultoria, implementação, configuração da Kite Platform e assistência contínua para garantir o funcionamento otimizado de suas aplicações IoT."
    },
    {
      question: "O que é APN Privado e como ele protege minha rede M2M?",
      answer: "APN Privado (Access Point Name) é uma rede dedicada e isolada para dispositivos M2M. Oferece maior segurança, controle de acesso, isolamento de tráfego e proteção contra ameaças, garantindo que seus dados M2M sejam transmitidos de forma segura."
    },
    {
      question: "Como contratar a solução M2M da Vivo Empresas?",
      answer: "Para contratar a solução M2M, entre em contato com nossa equipe comercial especializada através do telefone 0800 777 0000, visite uma loja Vivo ou solicite uma proposta personalizada através do nosso site."
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
            Chip M2M: principais dúvidas
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Respostas para as principais dúvidas sobre conectividade M2M e IoT
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

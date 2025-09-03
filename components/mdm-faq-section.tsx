"use client"

import React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function MDMFAQSection(): React.JSX.Element {
  const faqs = [
    {
      question: "O que é MDM (Mobile Device Management)?",
      answer: "MDM é uma solução que permite gerenciar, monitorar e controlar dispositivos móveis (smartphones e tablets) de forma remota, garantindo segurança e conformidade com políticas empresariais."
    },
    {
      question: "Quais dispositivos são compatíveis com o MDM da Vivo?",
      answer: "O MDM da Vivo é compatível com dispositivos Android e iOS, incluindo smartphones e tablets de diferentes fabricantes. A solução funciona tanto em dispositivos corporativos quanto em dispositivos pessoais (BYOD)."
    },
    {
      question: "Como funciona o bloqueio remoto de dispositivos?",
      answer: "O bloqueio remoto permite que você desative um dispositivo perdido ou roubado instantaneamente através do painel de controle MDM, protegendo dados sensíveis e impedindo o uso não autorizado."
    },
    {
      question: "O MDM afeta a privacidade dos funcionários?",
      answer: "O MDM respeita a privacidade dos funcionários através da separação de perfis pessoais e corporativos. Apenas dados corporativos são monitorados, mantendo a privacidade dos dados pessoais."
    },
    {
      question: "Posso controlar quais aplicativos são instalados?",
      answer: "Sim, você pode instalar, remover e bloquear aplicativos remotamente. Também é possível criar listas de aplicativos permitidos e proibidos para diferentes grupos de usuários."
    },
    {
      question: "O MDM funciona offline?",
      answer: "O MDM funciona mesmo quando os dispositivos estão offline. As políticas de segurança continuam ativas e os dados são sincronizados quando a conexão é restabelecida."
    },
    {
      question: "Como é feita a implementação do MDM?",
      answer: "A implementação é feita em etapas: contratação, recebimento do aplicativo, instalação nos dispositivos e configuração das políticas. Nossa equipe oferece suporte completo durante todo o processo."
    },
    {
      question: "O MDM é compatível com a LGPD?",
      answer: "Sim, o MDM da Vivo é totalmente compatível com a LGPD, oferecendo controles de acesso, auditoria de atividades e proteção de dados pessoais conforme exigido pela legislação."
    },
    {
      question: "Posso cancelar o serviço a qualquer momento?",
      answer: "Sim, você pode cancelar o serviço MDM a qualquer momento através do aplicativo, site ou central de atendimento. O cancelamento será efetivo no próximo ciclo de cobrança."
    },
    {
      question: "Qual o custo do MDM por dispositivo?",
      answer: "O MDM custa R$ 6,90 por mês por dispositivo. Para planos empresariais com múltiplos dispositivos, oferecemos descontos especiais. Entre em contato para uma proposta personalizada."
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
            Gestão de Dispositivos MDM principais dúvidas
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Respostas para as principais dúvidas sobre a solução MDM da Vivo
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

"use client"

import React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { HelpCircle, MessageCircle } from "lucide-react"

export function PortabilityFAQSection(): React.JSX.Element {
  const faqs = [
    {
      question: "Consegue enviar portabilidade pelo Vivo Online para empresas?",
      answer: "Sim, você pode solicitar a portabilidade através do Vivo Online para empresas. O processo é simples e pode ser feito em poucos cliques."
    },
    {
      question: "Qual o prazo para conclusão da portabilidade?",
      answer: "O prazo padrão para conclusão da portabilidade é de até 24 horas úteis. Em alguns casos, pode ser concluída no mesmo dia."
    },
    {
      question: "Posso portar um número pré-pago para um plano empresarial?",
      answer: "Sim, é possível portar números pré-pagos para planos empresariais. O processo é o mesmo, desde que o número esteja ativo."
    },
    {
      question: "Preciso cancelar meu plano atual antes da portabilidade?",
      answer: "Não, você não deve cancelar seu plano atual. A portabilidade é automática e o cancelamento acontece após a conclusão do processo."
    },
    {
      question: "Posso portar múltiplos números ao mesmo tempo?",
      answer: "Sim, você pode solicitar a portabilidade de múltiplos números simultaneamente. Cada número será processado individualmente."
    },
    {
      question: "O que acontece se a portabilidade for negada?",
      answer: "Se a portabilidade for negada, você receberá uma notificação com o motivo. Pode solicitar novamente após resolver as pendências."
    },
    {
      question: "Preciso de documentos específicos para a portabilidade?",
      answer: "Sim, você precisará do CNPJ ativo, documentos do titular e comprovante de endereço. Nossa equipe orienta sobre todos os documentos necessários."
    },
    {
      question: "Posso acompanhar o status da portabilidade?",
      answer: "Sim, você pode acompanhar o status através do Vivo Online para empresas ou entrando em contato com nosso suporte."
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Mais dúvidas sobre portabilidade
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tire suas dúvidas sobre o processo de portabilidade. 
            Aqui você encontra as respostas para as principais perguntas.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-gray-200 rounded-lg px-6">
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

        <div className="text-center mt-12">
          <div className="bg-white border border-gray-200 rounded-lg p-8 max-w-2xl mx-auto">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-2xl flex items-center justify-center">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Ainda tem dúvidas?
            </h3>
            <p className="text-gray-600 mb-6">
              Nossa equipe especializada está pronta para ajudar você com qualquer dúvida sobre portabilidade.
            </p>
            <Button className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] hover:from-[#7a0bb3] hover:to-[#ff1a75] text-white font-semibold px-8 py-3">
              <HelpCircle className="w-5 h-5 mr-2" />
              Falar com Especialista
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

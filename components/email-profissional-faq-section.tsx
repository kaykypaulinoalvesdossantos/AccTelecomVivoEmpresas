"use client"

import React from "react"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

export function EmailProfissionalFaqSection() {
  const faqs = [
    {
      question: "Estou com dúvidas sobre a contratação e ativação do meu serviço, o que devo fazer?",
      answer: "Entre em contato com nossa equipe de suporte através do telefone (11) 2362-9665 ou WhatsApp. Nossos especialistas estão prontos para esclarecer todas as suas dúvidas sobre contratação e ativação do serviço de e-mail profissional."
    },
    {
      question: "Quais são as formas de pagamento disponíveis?",
      answer: "Aceitamos diversas formas de pagamento: cartão de crédito (Visa, Mastercard, Elo), débito automático, boleto bancário e PIX. Você pode escolher a forma que melhor se adequa ao seu fluxo de caixa."
    },
    {
      question: "Como funciona o E-mail Profissional?",
      answer: "O E-mail Profissional funciona como um serviço de hospedagem de e-mails corporativos. Você recebe contas de e-mail com seu domínio próprio, acesso via webmail, apps mobile e integração com clientes de e-mail como Outlook."
    },
    {
      question: "O E-mail Profissional é seguro?",
      answer: "Sim, oferecemos máxima segurança com antivírus avançado, filtros anti-spam, criptografia SSL e backup automático. Suas informações estão protegidas com tecnologia de ponta."
    },
    {
      question: "Posso migrar meus e-mails existentes?",
      answer: "Sim, nossa equipe de suporte pode ajudar na migração dos seus e-mails existentes para nossa plataforma, garantindo que você não perca nenhuma informação importante."
    },
    {
      question: "Quantas contas de e-mail posso criar?",
      answer: "O número de contas varia conforme o plano escolhido. No plano Iniciante você pode criar até 5 contas, no Básico até 25, no Intermediário até 50 e no Avançado até 100 contas."
    },
    {
      question: "Como configuro meu domínio para o e-mail?",
      answer: "Após a contratação, nossa equipe fornece todas as instruções para configuração dos registros DNS. Também oferecemos suporte técnico para ajudar na configuração."
    },
    {
      question: "Posso acessar meus e-mails pelo celular?",
      answer: "Sim, você pode acessar seus e-mails através de apps móveis compatíveis (iOS e Android) ou pelo navegador do celular através do webmail responsivo."
    }
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#660099]/10 text-[#660099] border-[#660099]/20">
            <HelpCircle className="w-4 h-4 mr-2" />
            Dúvidas Frequentes
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            E-mail Profissional principais
            <span className="block text-[#660099]">dúvidas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encontre respostas para as principais dúvidas sobre e-mail profissional 
            e tire todas as suas questões sobre o serviço.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-200 rounded-xl px-6 py-2 hover:border-[#660099]/30 transition-colors"
              >
                <AccordionTrigger className="text-left hover:text-[#660099] transition-colors">
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-gray-600 mb-6">
              Nossa equipe de especialistas está pronta para ajudar você 
              a escolher o plano ideal de e-mail profissional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-[#660099] text-white rounded-xl font-semibold hover:bg-[#660099]/90 transition-colors cursor-pointer">
                Falar com Especialista
              </button>
              <button className="px-8 py-3 border-2 border-[#660099] text-[#660099] rounded-xl font-semibold hover:bg-[#660099]/10 transition-colors cursor-pointer">
                Ver Planos
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

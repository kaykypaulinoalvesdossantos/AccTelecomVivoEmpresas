"use client"

import React from "react"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

export function RegistroDominioFaqSection() {
  const faqs = [
    {
      question: "Estou com dúvidas sobre a contratação e ativação do meu serviço, o que devo fazer?",
      answer: "Entre em contato com nossa equipe de suporte através do telefone (11) 2362-9665 ou WhatsApp. Nossos especialistas estão prontos para esclarecer todas as suas dúvidas sobre contratação e ativação do serviço de registro de domínio."
    },
    {
      question: "O que é registro de domínio?",
      answer: "Registro de domínio é o processo de adquirir um nome único na internet para seu site ou empresa. É como reservar um endereço exclusivo na web, permitindo que as pessoas encontrem seu site digitando esse nome no navegador."
    },
    {
      question: "Pode ser usado mais de um domínio em um site?",
      answer: "Sim, é possível usar múltiplos domínios apontando para o mesmo site. Isso é útil para proteger sua marca, direcionar tráfego de diferentes fontes ou criar variações do seu domínio principal."
    },
    {
      question: "Por quanto tempo posso ter um domínio registrado?",
      answer: "Os domínios são registrados por períodos de 1 a 10 anos, dependendo da extensão. É possível renovar o registro antes do vencimento para manter a propriedade do domínio."
    },
    {
      question: "Quais são os benefícios de registrar um domínio com a Vivo?",
      answer: "Registrar com a Vivo oferece credibilidade, suporte especializado, integração com outros serviços de TI, preços competitivos e a segurança de uma empresa líder em telecomunicações no Brasil."
    },
    {
      question: "O que fazer se o domínio desejado já estiver registrado?",
      answer: "Se o domínio desejado já estiver registrado, você pode tentar variações do nome, usar diferentes extensões (.com.br, .net, .org), ou entrar em contato com o proprietário atual para negociar a transferência."
    },
    {
      question: "Quais caracteres são permitidos em um nome de domínio de empresa?",
      answer: "Domínios podem conter letras (a-z), números (0-9) e hífens (-). Não podem começar ou terminar com hífen, e não podem conter espaços ou símbolos especiais. O limite é de 63 caracteres por parte do domínio."
    },
    {
      question: "O que é propagação de DNS e WHOIS?",
      answer: "Propagação de DNS é o tempo necessário para que as alterações no domínio sejam reconhecidas globalmente (pode levar até 48 horas). WHOIS é um banco de dados público que contém informações sobre o proprietário do domínio."
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#660099]/10 text-[#660099] border-[#660099]/20">
            <HelpCircle className="w-4 h-4 mr-2" />
            Dúvidas Frequentes
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Registro de Domínios: principais
            <span className="block text-[#660099]">dúvidas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encontre respostas para as principais dúvidas sobre registro de domínio 
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
          <div className="bg-gray-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-gray-600 mb-6">
              Nossa equipe de especialistas está pronta para ajudar você 
              a escolher o domínio ideal para sua empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-[#660099] text-white rounded-xl font-semibold hover:bg-[#660099]/90 transition-colors cursor-pointer">
                Falar com Especialista
              </button>
              <button className="px-8 py-3 border-2 border-[#660099] text-[#660099] rounded-xl font-semibold hover:bg-[#660099]/10 transition-colors cursor-pointer">
                Verificar Disponibilidade
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

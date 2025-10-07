"use client"

import React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle, Phone, MessageCircle } from "lucide-react"

export default function ConstrucaoSiteFaqSection() {
  const faqs = [
    {
      question: "Preciso de conhecimento técnico para criar meu site?",
      answer: "Não! Nosso construtor de sites foi desenvolvido para ser intuitivo e fácil de usar. Você pode criar um site profissional sem nenhum conhecimento técnico."
    },
    {
      question: "Posso personalizar os templates?",
      answer: "Sim! Todos os templates podem ser completamente personalizados. Você pode alterar cores, textos, imagens e layout conforme sua necessidade."
    },
    {
      question: "Meu site será responsivo?",
      answer: "Sim! Todos os sites criados com nosso construtor são automaticamente responsivos, se adaptando perfeitamente a celulares, tablets e computadores."
    },
    {
      question: "Posso ter e-commerce no meu site?",
      answer: "Sim! O plano Completo inclui funcionalidades básicas de e-commerce. Para lojas mais complexas, oferecemos soluções avançadas."
    },
    {
      question: "Como funciona o suporte técnico?",
      answer: "Oferecemos suporte técnico 24/7 através de chat online, telefone e e-mail. Nossa equipe está sempre pronta para ajudar."
    },
    {
      question: "Posso migrar meu site atual?",
      answer: "Sim! Oferecemos migração gratuita para todos os planos. Nossa equipe técnica faz todo o processo de transferência."
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-[#660099]/10 text-[#660099] border-[#660099]/20">
            <HelpCircle className="w-4 h-4 mr-2" />
            Perguntas Frequentes
          </Badge>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Perguntas frequentes sobre o
            <span className="block text-[#660099]">Construtor de Sites</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Encontre respostas para as principais dúvidas sobre criação de sites. 
            Se não encontrar sua resposta, nossa equipe está pronta para ajudar.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-200 rounded-2xl px-6 bg-white"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact Support */}
        <div className="mt-16 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-3xl p-8 text-white">
          <div className="text-center space-y-6">
            <h3 className="text-3xl font-bold">Ainda tem dúvidas?</h3>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Nossa equipe de especialistas está pronta para ajudar com qualquer dúvida 
              sobre criação de sites e soluções digitais.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-[#660099] hover:bg-white/90 font-semibold cursor-pointer"
              >
                <Phone className="w-5 h-5 mr-2" />
                Falar com Especialista
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-[#660099] cursor-pointer bg-transparent"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat Online
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

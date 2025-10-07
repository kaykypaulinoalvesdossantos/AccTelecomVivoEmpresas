"use client"

import React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { HelpCircle, MessageCircle } from "lucide-react"

export default function SeoToolFaqSection() {
  const faqs = [
    {
      question: "O que é SEO?",
      answer: "SEO (Search Engine Optimization) é o conjunto de técnicas utilizadas para otimizar um site para os mecanismos de busca, como Google, Yahoo e Bing. O objetivo é melhorar o posicionamento do site nos resultados de busca orgânica, aumentando sua visibilidade e tráfego."
    },
    {
      question: "Em que consiste as soluções de posicionamento SEO?",
      answer: "Nossas soluções de SEO incluem análise de palavras-chave, otimização de conteúdo, monitoramento de posicionamento, análise de concorrentes, relatórios de performance e recomendações personalizadas para melhorar a visibilidade do seu site nos mecanismos de busca."
    },
    {
      question: "Quais benefícios das soluções de Posicionamento SEO?",
      answer: "Os principais benefícios incluem: aumento do tráfego orgânico, melhoria da autoridade da marca, maior visibilidade online, análise de concorrentes, relatórios detalhados de performance e suporte especializado para otimização contínua do seu site."
    },
    {
      question: "Que conhecimentos são necessários para poder utilizar esta ferramenta?",
      answer: "Não é necessário conhecimento técnico avançado. Nossa ferramenta é intuitiva e fácil de usar, com interface amigável e suporte completo. Nossa equipe também oferece treinamento e suporte para ajudar você a aproveitar ao máximo todas as funcionalidades."
    },
    {
      question: "Podem analisar vários sites com uma conta SEO?",
      answer: "Sim! Dependendo do plano escolhido, você pode analisar múltiplos sites com uma única conta. O plano Básico permite até 1 site, o Intermediário até 3 sites, e o Avançado oferece sites ilimitados."
    },
    {
      question: "Qual será a forma de pagamento?",
      answer: "Aceitamos diversas formas de pagamento, incluindo cartão de crédito, débito automático e boleto bancário. O pagamento é mensal e você pode cancelar a qualquer momento sem multas."
    },
    {
      question: "Preciso ser cliente Vivo Empresas para contratar o SEO TOOL?",
      answer: "Não é necessário ser cliente Vivo Empresas para contratar o SEO Tool. Nossa ferramenta está disponível para qualquer empresa que queira melhorar seu posicionamento nos mecanismos de busca."
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Tire suas dúvidas sobre o SEO Tool
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encontre respostas para as perguntas mais frequentes sobre nossa ferramenta de SEO
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gray-50 rounded-2xl px-6 border-none"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-[#660099] py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Support CTA */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-2xl p-8 text-white">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <HelpCircle className="w-8 h-8" />
                <h3 className="text-2xl font-bold">Ainda tem dúvidas?</h3>
              </div>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Nossa equipe de especialistas está pronta para ajudar você a escolher o melhor plano e tirar todas as suas dúvidas sobre SEO.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-[#660099] hover:bg-white/90 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Falar com Especialista
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-[#660099] cursor-pointer bg-transparent"
                >
                  Solicitar Demonstração
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

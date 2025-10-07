"use client"

import React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle, Phone, MessageCircle } from "lucide-react"

export function HospedagemSiteFaqSection() {
  const faqs = [
    {
      question: "Estou com dúvidas sobre a contratação e ativação do meu serviço, o que devo fazer?",
      answer: "Nossa equipe de suporte técnico está disponível 24/7 para ajudar com qualquer dúvida sobre contratação e ativação. Você pode entrar em contato via chat online, telefone ou e-mail. O processo de ativação é simples e geralmente leva até 24 horas após a confirmação do pagamento."
    },
    {
      question: "Qual a melhor solução digital para pequenas empresas?",
      answer: "Para pequenas empresas, recomendamos o plano Intermediário, que oferece 25GB de espaço, múltiplos domínios, CDN incluído e proteção DDoS. É ideal para sites corporativos, lojas virtuais pequenas e blogs profissionais."
    },
    {
      question: "Como funciona a migração do meu site atual?",
      answer: "Oferecemos migração gratuita para todos os planos. Nossa equipe técnica faz todo o processo de transferência de arquivos, banco de dados e configurações. O processo é feito sem downtime e com backup completo do seu site atual."
    },
    {
      question: "O certificado SSL está incluído em todos os planos?",
      answer: "Sim, o certificado SSL gratuito está incluído em todos os planos. Ele garante que seu site tenha conexão segura (HTTPS) e melhora a confiança dos usuários e o SEO do seu site."
    },
    {
      question: "Qual é o tempo de uptime garantido?",
      answer: "Garantimos 99.9% de uptime para todos os planos. Nossa infraestrutura é monitorada 24/7 e temos redundância em todos os sistemas críticos para garantir máxima disponibilidade."
    },
    {
      question: "Posso fazer backup manual além do backup automático?",
      answer: "Sim, além do backup automático diário, você pode fazer backups manuais através do painel cPanel. Também oferecemos ferramentas de backup em nuvem para maior segurança dos seus dados."
    },
    {
      question: "Como funciona o suporte técnico?",
      answer: "Oferecemos suporte técnico 24/7 através de chat online, telefone e e-mail. Nossa equipe é especializada em hospedagem web e pode ajudar com configurações, problemas técnicos e otimizações de performance."
    },
    {
      question: "Posso cancelar meu plano a qualquer momento?",
      answer: "Sim, você pode cancelar seu plano a qualquer momento. Oferecemos garantia de 30 dias para todos os planos. Se não ficar satisfeito, devolvemos seu dinheiro integralmente."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-[#660099]/10 text-[#660099] border-[#660099]/20">
            <HelpCircle className="w-4 h-4 mr-2" />
            Dúvidas Frequentes
          </Badge>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Serviços Digitais:
            <span className="block text-[#660099]">principais dúvidas</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Encontre respostas para as principais dúvidas sobre hospedagem web. 
            Se não encontrar sua resposta, nossa equipe está pronta para ajudar.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-200 rounded-2xl px-6"
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
              sobre hospedagem web e soluções digitais.
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

"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PlansFAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)

  const faqs = [
    {
      question: "O que é o Plano Empresarial Vivo?",
      answer:
        "O Plano Empresarial Vivo é uma solução completa de conectividade desenvolvida especialmente para empresas de todos os portes. Oferece internet móvel, ligações ilimitadas, acesso à rede 5G e benefícios exclusivos como suporte técnico 24h e gerente de conta dedicado.",
    },
    {
      question: "Empresas podem ter método: Quais são os benefícios do Plano Empresarial Vivo?",
      answer:
        "Os principais benefícios incluem: cobertura 5G nacional, ligações ilimitadas, apps ilimitados, roaming nacional gratuito, suporte técnico prioritário 24h, Paramount+ incluso nos planos superiores, backup na nuvem, seguro celular e gerente de conta dedicado para planos premium.",
    },
    {
      question: "Qual o valor do Plano Empresarial Vivo?",
      answer:
        "Os valores variam conforme o plano escolhido: Plano Básico 16GB por R$ 39,99/mês, Plano Completo 25GB por R$ 54,99/mês, e Plano Premium 110GB por R$ 99,99/mês. Todos com descontos especiais para novos clientes empresariais.",
    },
    {
      question: "Como contratar o Plano Empresarial Vivo?",
      answer:
        "Você pode contratar através do nosso site, ligando para nossa central de vendas empresariais ou visitando uma loja Vivo. Para empresas, oferecemos atendimento especializado com consultores dedicados que podem visitar sua empresa.",
    },
    {
      question: "Como funciona a migração para o Plano Empresarial Vivo?",
      answer:
        "A migração é simples e gratuita. Nossa equipe técnica cuida de todo o processo, incluindo portabilidade dos números, configuração dos dispositivos e treinamento da equipe. O processo leva em média 2-3 dias úteis sem interrupção dos serviços.",
    },
    {
      question: "Posso usar o Plano Empresarial Vivo no exterior?",
      answer:
        "Sim! Os planos Completo e Premium incluem roaming internacional. Você pode usar seu plano em mais de 200 países com tarifas especiais para empresas. O plano Básico oferece roaming nacional gratuito.",
    },
    {
      question: "Tenho direito a desconto se eu contratar mais de uma linha empresarial?",
      answer:
        "Sim! Oferecemos descontos progressivos para múltiplas linhas: 5% para 5-10 linhas, 10% para 11-25 linhas, 15% para 26-50 linhas, e descontos personalizados para mais de 50 linhas. Entre em contato para uma proposta personalizada.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Dúvidas frequentes sobre plano empresarial</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encontre respostas para as principais dúvidas sobre nossos planos empresariais
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border transition-all duration-200 hover:shadow-md">
              <CardContent className="p-0">
                <Button
                  variant="ghost"
                  className="w-full p-6 text-left justify-between h-auto"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  )}
                </Button>
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-4">Ainda tem dúvidas?</h3>
            <p className="text-muted-foreground mb-6">
              Nossa equipe de especialistas está pronta para ajudar você a escolher o melhor plano para sua empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-secondary hover:bg-secondary/90">Falar com Consultor</Button>
              <Button variant="outline">Central de Ajuda</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

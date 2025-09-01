"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

export function SolutionsFAQ() {
  const [openItems, setOpenItems] = useState<number[]>([0])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqs = [
    {
      question: "Quanto tempo leva para implementar as soluções digitais?",
      answer:
        "O tempo de implementação varia conforme a solução escolhida. Soluções em nuvem como Microsoft 365 podem ser implementadas em 24-48 horas, enquanto sistemas mais complexos como ERP podem levar de 2-4 semanas. Nossa equipe trabalha para minimizar o tempo de implementação sem comprometer a qualidade.",
    },
    {
      question: "As soluções são compatíveis com sistemas já existentes?",
      answer:
        "Sim, nossas soluções são projetadas para integração. Realizamos uma análise completa do seu ambiente atual e garantimos compatibilidade através de APIs e conectores especializados. Nossa equipe técnica cuida de toda a integração.",
    },
    {
      question: "Que tipo de suporte técnico é oferecido?",
      answer:
        "Oferecemos suporte técnico 24/7 através de múltiplos canais: telefone, chat, email e portal online. Temos diferentes níveis de SLA conforme o plano contratado, com tempos de resposta que variam de 15 minutos a 4 horas para questões críticas.",
    },
    {
      question: "Como funciona a migração de dados existentes?",
      answer:
        "Nossa equipe especializada realiza toda a migração de dados de forma segura e sem perda de informações. Utilizamos ferramentas automatizadas e fazemos backups completos antes de qualquer migração. O processo é realizado fora do horário comercial para não impactar suas operações.",
    },
    {
      question: "As soluções incluem treinamento para a equipe?",
      answer:
        "Sim, todas as nossas soluções incluem treinamento completo para sua equipe. Oferecemos sessões presenciais, online e materiais de apoio. Também disponibilizamos treinamentos avançados e certificações para usuários que desejam se especializar.",
    },
    {
      question: "Posso personalizar as soluções conforme minhas necessidades?",
      answer:
        "Absolutamente. Todas as nossas soluções podem ser personalizadas conforme as necessidades específicas do seu negócio. Nossa equipe de consultores trabalha junto com você para adaptar funcionalidades, interfaces e fluxos de trabalho.",
    },
    {
      question: "Como funciona a segurança e backup dos dados?",
      answer:
        "Implementamos múltiplas camadas de segurança incluindo criptografia, firewalls, monitoramento 24/7 e backups automáticos. Todos os dados são armazenados em datacenters certificados ISO 27001 com redundância geográfica para máxima proteção.",
    },
    {
      question: "Qual é o investimento necessário para implementar as soluções?",
      answer:
        "O investimento varia conforme as soluções escolhidas e o porte da sua empresa. Oferecemos planos flexíveis com pagamento mensal, sem necessidade de grandes investimentos iniciais. Nossa equipe comercial pode elaborar uma proposta personalizada sem compromisso.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance">
            Perguntas{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Frequentes
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Tire suas dúvidas sobre nossas soluções digitais
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  {openItems.includes(index) ? (
                    <ChevronUp className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  )}
                </button>

                {openItems.includes(index) && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed text-pretty">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

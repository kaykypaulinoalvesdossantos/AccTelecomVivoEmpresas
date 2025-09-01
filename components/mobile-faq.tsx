"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"

export function MobileFAQ() {
  const [openItems, setOpenItems] = useState<number[]>([0])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqs = [
    {
      question: "Como funciona a rede 5G da Vivo Empresas?",
      answer:
        "Nossa rede 5G oferece velocidades de até 1Gbps com latência ultra-baixa. Está disponível em mais de 400 cidades brasileiras e é incluída gratuitamente em todos os planos empresariais, proporcionando uma experiência de conectividade superior para sua equipe.",
    },
    {
      question: "Posso gerenciar todos os planos da minha empresa em um só lugar?",
      answer:
        "Sim! Oferecemos uma plataforma de gestão centralizada onde você pode monitorar o consumo de cada linha, gerar relatórios detalhados, controlar gastos, bloquear/desbloquear linhas e muito mais. Tudo isso através do nosso portal web ou aplicativo móvel.",
    },
    {
      question: "Como funciona o processo de portabilidade?",
      answer:
        "A portabilidade é 100% gratuita e simples. Você solicita online, enviamos os documentos necessários, e em até 24 horas sua linha é migrada automaticamente sem interrupção do serviço. Mantém o mesmo número e ganha todos os benefícios da Vivo.",
    },
    {
      question: "Quais são as opções de roaming internacional?",
      answer:
        "Oferecemos roaming em mais de 200 países com tarifas preferenciais para empresas. Temos pacotes específicos para América do Sul, América do Norte, Europa e Ásia, além de planos globais para empresas com operação internacional.",
    },
    {
      question: "Como funciona o suporte técnico para empresas?",
      answer:
        "Empresas têm acesso a suporte prioritário 24/7 com consultores especializados. Oferecemos múltiplos canais de atendimento: telefone, chat, email e até consultores dedicados para grandes contas. Tempo médio de resposta inferior a 2 minutos.",
    },
    {
      question: "Posso personalizar os planos conforme a necessidade da minha empresa?",
      answer:
        "Absolutamente! Além dos planos padrão, criamos soluções personalizadas baseadas no perfil de uso da sua empresa. Podemos ajustar franquias de dados, incluir serviços específicos e criar pacotes sob medida para suas necessidades.",
    },
    {
      question: "Quais garantias a Vivo oferece para empresas?",
      answer:
        "Oferecemos SLA de 99.9% de disponibilidade da rede, garantia de velocidade mínima, suporte técnico com tempo de resposta garantido, e reembolso proporcional em caso de indisponibilidade. Tudo isso documentado em contrato.",
    },
    {
      question: "Como funciona a segurança dos dados corporativos?",
      answer:
        "Implementamos múltiplas camadas de segurança: criptografia end-to-end, VPN corporativa, firewall dedicado, monitoramento 24/7 contra ameaças, e compliance com LGPD. Seus dados corporativos ficam totalmente protegidos.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
            <HelpCircle className="w-4 h-4 mr-2" />
            Dúvidas Frequentes
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Perguntas Frequentes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encontre respostas para as principais dúvidas sobre nossos planos móveis empresariais. Não encontrou o que
            procura? Entre em contato conosco.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>

                  {openItems.includes(index) && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Ainda tem dúvidas? Nossa equipe está pronta para ajudar!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                Falar com Consultor
              </Button>
              <Button size="lg" variant="outline">
                Central de Ajuda
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

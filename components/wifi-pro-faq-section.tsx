"use client"

import React, { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"

export function WifiProFaqSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  const faqs = [
    {
      question: "Por que adquirir o Wi-Fi Pro?",
      answer: "O Wi-Fi Pro transforma sua rede Wi-Fi em uma ferramenta poderosa de marketing e análise de dados. Você pode capturar informações valiosas sobre seus clientes, criar campanhas personalizadas e aumentar significativamente suas vendas e fidelização."
    },
    {
      question: "A solução Wi-Fi Pro está dentro do padrão da Lei Geral de Proteção de Dados Pessoais (LGPD)?",
      answer: "Sim, nossa solução é totalmente compatível com a LGPD. Implementamos todas as medidas de segurança necessárias para proteger os dados pessoais dos usuários, incluindo criptografia, controle de acesso e políticas de privacidade transparentes."
    },
    {
      question: "Como são capturados os dados?",
      answer: "Os dados são capturados de forma segura e transparente quando os usuários se conectam à sua rede Wi-Fi. Coletamos informações básicas como tempo de conexão, páginas visitadas e comportamento de navegação, sempre respeitando a privacidade e com consentimento explícito."
    },
    {
      question: "Posso usar a solução para promover produtos e serviços?",
      answer: "Absolutamente! O Wi-Fi Pro permite criar campanhas promocionais personalizadas, enviar ofertas segmentadas e interagir diretamente com seus clientes através de landing pages, pesquisas e enquetes. É uma ferramenta poderosa para aumentar suas vendas."
    },
    {
      question: "Qual é o retorno sobre investimento (ROI) esperado?",
      answer: "Nossos clientes relatam um aumento médio de 25% na fidelização, 40% na conversão de visitantes e uma redução de 30% nos custos de marketing. Além disso, muitos geram receita adicional de R$ 500/mês através da monetização da rede."
    },
    {
      question: "Preciso de equipamentos específicos?",
      answer: "A solução é compatível com a maioria dos roteadores e equipamentos de rede existentes. Nossa equipe técnica pode ajudar na configuração e integração com sua infraestrutura atual, garantindo uma implementação rápida e eficiente."
    },
    {
      question: "A solução funciona em veículos ou apenas em estabelecimentos fixos?",
      answer: "O Wi-Fi Pro é ideal para estabelecimentos fixos como lojas, restaurantes, hotéis e escritórios. Para veículos, oferecemos soluções específicas de conectividade móvel que podem ser integradas com nossa plataforma."
    },
    {
      question: "Como posso monetizar minha rede Wi-Fi?",
      answer: "Você pode monetizar sua rede através de parcerias com anunciantes locais, promoções de produtos próprios, programas de fidelidade e até mesmo oferecendo acesso premium. Nossa plataforma facilita todas essas estratégias de monetização."
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
            Tire suas
            <span className="block text-[#660099]">dúvidas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encontre respostas para as principais perguntas sobre o Wi-Fi Pro 
            e descubra como nossa solução pode transformar seu negócio.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card 
              key={index} 
              className={`border-2 transition-all duration-300 ${
                openItems.includes(index) 
                  ? 'border-[#660099] shadow-lg' 
                  : 'border-gray-100 hover:border-gray-200'
              }`}
            >
              <CardContent className="p-0">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-[#660099]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ainda tem dúvidas?</h3>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Nossa equipe especializada está pronta para esclarecer todas as suas questões 
              e ajudar você a implementar a melhor solução para seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#660099] px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-colors cursor-pointer">
                Falar com Especialista
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors cursor-pointer">
                Solicitar Demonstração
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

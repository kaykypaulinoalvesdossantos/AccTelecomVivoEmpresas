"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"

export function AWSFAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  const faqItems = [
    {
      question: "O que é Cloud AWS?",
      answer: "A AWS (Amazon Web Services) é a plataforma de computação em nuvem mais abrangente e amplamente adotada do mundo, oferecendo mais de 175 serviços completos de centros de dados globalmente."
    },
    {
      question: "O que posso fazer com o Amazon EC2?",
      answer: "O Amazon EC2 permite provisionar capacidade computacional redimensionável na nuvem, oferecendo controle total sobre seus recursos computacionais e permitindo escalar conforme necessário."
    },
    {
      question: "Como é realizado o suporte técnico do produto AWS comercializado pela Vivo?",
      answer: "A Vivo oferece suporte técnico especializado através de uma equipe de especialistas AWS certificados, com atendimento prioritário 24/7 e consultoria personalizada para empresas."
    },
    {
      question: "O que é possível fazer com as funcionalidades Cloud AWS?",
      answer: "Com a AWS você pode executar aplicações, armazenar dados, fazer backup, hospedar sites, executar análises de big data, implementar soluções de IA/ML, e muito mais, tudo de forma escalável e segura."
    },
    {
      question: "Como será a cobrança e o faturamento do uso ou fazer do Amazon EC2?",
      answer: "A cobrança do Amazon EC2 é baseada no modelo pay-as-you-go, onde você paga apenas pelo tempo de computação que realmente usar. A Vivo oferece contratos locais com faturamento simplificado."
    },
    {
      question: "Como posso acessar meu painel de controle?",
      answer: "Você pode acessar o AWS Management Console através do navegador web, onde terá acesso completo a todos os serviços AWS contratados, com interface intuitiva e recursos de monitoramento."
    },
    {
      question: "O que é o Direct Connect?",
      answer: "O AWS Direct Connect permite estabelecer uma conexão de rede dedicada entre sua infraestrutura local e a AWS, oferecendo maior largura de banda, menor latência e maior segurança."
    },
    {
      question: "Quais são os benefícios do Direct Connect?",
      answer: "Os benefícios incluem redução de custos de largura de banda, maior consistência de performance, maior segurança através de conexões privadas, e melhor experiência para aplicações híbridas."
    }
  ]


  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
            <HelpCircle className="w-4 h-4 mr-2" />
            Perguntas Frequentes
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Mais dúvidas sobre AWS Cloud
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encontre respostas para as principais dúvidas sobre AWS Cloud e nossos serviços
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 mb-12">
            {faqItems.map((item, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {item.question}
                    </h3>
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {openItems.includes(index) && (
                    <div className="px-8 pb-6">
                      <div className="border-t pt-4">
                        <p className="text-gray-600 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-gray-600 mb-6">
              Nossa equipe de especialistas está pronta para esclarecer todas as suas dúvidas sobre AWS Cloud
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300" onClick={() => window.open('https://wa.me/551123629665?text=Olá! Ainda tenho dúvidas sobre AWS Cloud', '_blank')}>
                Falar com Especialista
              </button>
              <button className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300" onClick={() => window.open('https://wa.me/551123629665?text=Olá! Gostaria de solicitar contato sobre AWS Cloud', '_blank')}>
                Solicitar Contato
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

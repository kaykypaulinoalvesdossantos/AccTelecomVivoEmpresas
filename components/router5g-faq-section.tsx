"use client"

import React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function Router5GFAQSection(): React.JSX.Element {
  const faqs = [
    {
      question: "O que é Roteador 5G?",
      answer: "O Roteador 5G é um dispositivo que conecta à rede 5G da Vivo e cria uma rede Wi-Fi de alta velocidade. Ele possui chip integrado e funciona como um ponto de acesso móvel para múltiplos dispositivos."
    },
    {
      question: "Qual a diferença de Roteador 5G para o 4G?",
      answer: "O Roteador 5G oferece velocidades muito superiores ao 4G, podendo atingir até 1Gbps. Além disso, tem menor latência, maior capacidade de conexões simultâneas e melhor estabilidade para aplicações empresariais."
    },
    {
      question: "Como funciona o Roteador 5G com chip?",
      answer: "O Roteador 5G Vivo possui um chip integrado que se conecta diretamente à rede 5G da Vivo. Basta conectar na energia elétrica e o roteador estará pronto para uso, criando uma rede Wi-Fi de alta velocidade."
    },
    {
      question: "Quantos dispositivos posso conectar?",
      answer: "O Roteador 5G Vivo suporta até 64 dispositivos conectados simultaneamente, incluindo smartphones, tablets, notebooks, smart TVs, câmeras de segurança e dispositivos IoT."
    },
    {
      question: "Preciso de instalação técnica?",
      answer: "Não! O Roteador 5G Vivo é plug and play. Basta conectar na energia elétrica e seguir as instruções simples no aplicativo Vivo para configurar sua rede Wi-Fi em poucos minutos."
    },
    {
      question: "Qual a cobertura do 5G da Vivo?",
      answer: "A Vivo possui a maior cobertura 5G do Brasil, presente em mais de 400 cidades. Consulte a disponibilidade na sua região através do nosso site ou aplicativo."
    },
    {
      question: "Posso usar o roteador em qualquer lugar?",
      answer: "Sim, o Roteador 5G Vivo é portátil e pode ser usado em qualquer lugar onde haja cobertura 5G da Vivo. É ideal para escritórios móveis, eventos e locais temporários."
    },
    {
      question: "Qual a velocidade real que vou ter?",
      answer: "A velocidade real depende da cobertura 5G na sua região. Em áreas com boa cobertura, você pode atingir velocidades de até 1Gbps. A velocidade média é de 200-500 Mbps."
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Tire suas dúvidas sobre Roteador 5G
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Respostas para as principais dúvidas sobre o Roteador 5G Vivo
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-lg flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <span className="font-semibold text-gray-800">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

"use client"

import React, { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Card } from "@/components/ui/card"
import { oitoZeroZeroConfig } from "@/data/0800-0300-data"

export function OitoZeroZeroFaqSection(): React.JSX.Element {
  const { faq } = oitoZeroZeroConfig
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Mais soluções para sua empresa
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto">
            Tire suas dúvidas sobre nossos serviços 0800 e 0300
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4 mb-16 lg:mb-20">
          {faq.map((item, index) => (
            <Card
              key={index}
              className="border border-gray-200 hover:border-purple-300 transition-colors duration-300"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full p-6 lg:p-8 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
              >
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 pr-4">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-6 h-6 text-purple-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  )}
                </div>
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                  <div className="border-t border-gray-200 pt-6">
                    <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Contact Banner */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-6 sm:p-8 lg:p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6">
              Ainda tem dúvidas?
            </h3>
            <p className="text-purple-100 mb-8 text-sm sm:text-base lg:text-lg">
              Nossa equipe de especialistas está pronta para ajudar você a encontrar a melhor solução para sua empresa.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
              <div className="bg-white/20 rounded-2xl p-4 sm:p-6">
                <div className="text-sm font-medium mb-2">0800 e 0300</div>
                <div className="text-xs text-purple-100">Números gratuitos</div>
              </div>
              <div className="bg-white/20 rounded-2xl p-4 sm:p-6">
                <div className="text-sm font-medium mb-2">Ofertas</div>
                <div className="text-xs text-purple-100">Planos personalizados</div>
              </div>
              <div className="bg-white/20 rounded-2xl p-4 sm:p-6">
                <div className="text-sm font-medium mb-2">Atendimento Vivo</div>
                <div className="text-xs text-purple-100">Suporte especializado</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <a
                href={oitoZeroZeroConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-purple-900 hover:bg-purple-50 px-8 py-4 rounded-xl font-bold text-lg transition-colors duration-300 cursor-pointer"
              >
                Falar com o consultor
              </a>
              <a
                href={oitoZeroZeroConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-xl font-bold text-lg transition-colors duration-300 cursor-pointer"
              >
                Solicitar proposta
              </a>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 lg:mt-20">
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-lg border border-gray-200">
            <div className="text-center mb-8">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Termos e Condições
              </h3>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto">
                Confira alguns termos relacionados aos serviços 0800 e 0300 para te ajudar a entender melhor nossas ofertas.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 hover:shadow-md transition-shadow duration-200">
                <h4 className="font-bold text-base sm:text-lg text-purple-600 mb-3">URA</h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  Unidade de Resposta Audível - sistema automatizado que direciona chamadas e fornece informações.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 hover:shadow-md transition-shadow duration-200">
                <h4 className="font-bold text-base sm:text-lg text-purple-600 mb-3">SIP Trunking</h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  Tecnologia que permite fazer chamadas telefônicas através da internet com qualidade HD.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 hover:shadow-md transition-shadow duration-200">
                <h4 className="font-bold text-base sm:text-lg text-purple-600 mb-3">PABX Virtual</h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  Central telefônica hospedada na nuvem, oferecendo flexibilidade e economia para empresas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

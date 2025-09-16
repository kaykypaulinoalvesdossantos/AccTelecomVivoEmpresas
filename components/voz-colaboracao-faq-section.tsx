"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { vozColaboracaoConfig } from "@/data/voz-colaboracao-data"

export function VozColaboracaoFAQSection() {
  const { faq } = vozColaboracaoConfig
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Tire suas dúvidas
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Encontre respostas para as principais perguntas sobre nossas soluções de voz e colaboração
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faq.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 lg:px-8 lg:py-6 text-left flex items-center justify-between hover:bg-gray-50 rounded-2xl transition-colors duration-200"
                >
                  <h3 className="text-base lg:text-lg font-semibold text-gray-900 pr-4">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-purple-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 pb-4 lg:px-8 lg:pb-6">
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Dictionary Section */}
        <div className="mt-16 bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 sm:p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Glossário de Voz e Colaboração
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
              Confira alguns termos técnicos relacionados às soluções de comunicação empresarial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <h4 className="font-bold text-base sm:text-lg text-purple-600 mb-3">SIP Trunking</h4>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Tecnologia que conecta sua central telefônica à rede IP, oferecendo conectividade dedicada e alta qualidade de voz.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <h4 className="font-bold text-base sm:text-lg text-purple-600 mb-3">Central Virtual</h4>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Sistema de telefonia em nuvem que gerencia chamadas, distribui atendimentos e oferece recursos avançados.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <h4 className="font-bold text-base sm:text-lg text-purple-600 mb-3">Número Único</h4>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Solução que centraliza todas as comunicações da empresa em um único número, distribuindo automaticamente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

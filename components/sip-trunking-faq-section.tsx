"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { sipTrunkingConfig } from "@/data/sip-trunking-data"

export function SipTrunkingFAQSection() {
  const { faq } = sipTrunkingConfig
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
            SIP Trunking e Chamada Identificada (Stir Shaken): principais dúvidas
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Encontre respostas para as principais perguntas sobre nossa solução SIP Trunking
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

        {/* Technical Specs */}
        <div className="mt-16 bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 sm:p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Especificações Técnicas
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
              Conheça os detalhes técnicos e requisitos do SIP Trunking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-lg text-purple-600 mb-3">Requisitos do Sistema</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Conexão IP dedicada (mínimo 10 Mbps)</li>
                <li>• PABX compatível com SIP</li>
                <li>• Roteador com QoS configurado</li>
                <li>• Firewall configurado para SIP</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-bold text-lg text-purple-600 mb-3">Recursos Incluídos</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Chamadas nacionais ilimitadas</li>
                <li>• Suporte técnico 24/7</li>
                <li>• Monitoramento em tempo real</li>
                <li>• Relatórios detalhados de uso</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

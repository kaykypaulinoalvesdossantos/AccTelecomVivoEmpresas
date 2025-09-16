"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { vivoVozNegocioConfig } from "@/data/vivo-voz-negocio-data"

export function VivoVozNegocioFAQSection() {
  const { faq } = vivoVozNegocioConfig
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Tire suas dúvidas
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Encontre respostas para as principais perguntas sobre o Vivo Voz Negócio
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
        <div className="mt-16 bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Especificações Técnicas
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
              Conheça os detalhes técnicos e requisitos do sistema.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-lg text-purple-600 mb-3">Requisitos do Sistema</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Conexão com internet banda larga (mínimo 10 Mbps)</li>
                <li>• Navegador web atualizado (Chrome, Firefox, Safari)</li>
                <li>• Headset ou fone de ouvido com microfone</li>
                <li>• Sistema operacional Windows, Mac ou Linux</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-bold text-lg text-purple-600 mb-3">Recursos Incluídos</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Interface web intuitiva e responsiva</li>
                <li>• Aplicativo móvel para iOS e Android</li>
                <li>• API REST para integrações personalizadas</li>
                <li>• Backup automático em nuvem</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

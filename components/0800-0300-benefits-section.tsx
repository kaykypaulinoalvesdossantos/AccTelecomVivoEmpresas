"use client"

import React from "react"
import { Star, Percent, BarChart, Building, Phone, Shield } from "lucide-react"
import { Card } from "@/components/ui/card"
import { oitoZeroZeroConfig } from "@/data/0800-0300-data"

const iconMap = {
  Star,
  Percent,
  BarChart,
  Building,
  Phone,
  Shield
}

export function OitoZeroZeroBenefitsSection(): React.JSX.Element {
  const { benefits } = oitoZeroZeroConfig

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            0800: um canal de comunicação direto entre empresa e clientes
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto">
            Confira todos os benefícios que a Vivo Empresas oferece para sua empresa
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {benefits.map((benefit, index) => {
            const IconComponent = iconMap[benefit.icon as keyof typeof iconMap]
            return (
              <Card
                key={index}
                className="p-6 lg:p-8 rounded-2xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-6 sm:p-8 lg:p-12 text-white text-center">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-8">
            Por que escolher nossos serviços 0800 e 0300?
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">100%</div>
              <div className="text-purple-100 text-sm sm:text-base">Nacional</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">24/7</div>
              <div className="text-purple-100 text-sm sm:text-base">Disponível</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">99.9%</div>
              <div className="text-purple-100 text-sm sm:text-base">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">5min</div>
              <div className="text-purple-100 text-sm sm:text-base">Ativação</div>
            </div>
          </div>
        </div>

        {/* Additional Benefits */}
        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Funcionalidades Avançadas
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">URA Personalizada</h4>
                    <p className="text-gray-600 text-sm sm:text-base">Configure mensagens e roteamento conforme sua necessidade</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Relatórios Detalhados</h4>
                    <p className="text-gray-600 text-sm sm:text-base">Acompanhe métricas de atendimento em tempo real</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Integração Total</h4>
                    <p className="text-gray-600 text-sm sm:text-base">Conecte com PABX Virtual e SIP Trunking</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Suporte Especializado</h4>
                    <p className="text-gray-600 text-sm sm:text-base">Equipe técnica dedicada para sua empresa</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 lg:p-8 border border-gray-200">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  Pronto para começar?
                </h4>
                <p className="text-gray-600 mb-6 text-sm sm:text-base lg:text-lg">
                  Entre em contato com nossa equipe e descubra como nossos serviços podem transformar a comunicação da sua empresa.
                </p>
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-4 text-white">
                  <div className="text-sm font-medium mb-1">Ligue agora</div>
                  <div className="text-xl font-bold">0800 123 4567</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

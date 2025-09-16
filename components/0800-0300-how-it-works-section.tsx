"use client"

import React from "react"
import { Phone, Settings, Users, BarChart, ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { oitoZeroZeroConfig } from "@/data/0800-0300-data"

const iconMap = {
  Phone,
  Settings,
  Users,
  BarChart
}

export function OitoZeroZeroHowItWorksSection(): React.JSX.Element {
  const { howItWorks } = oitoZeroZeroConfig

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Saiba como funciona o serviço 0800 da Vivo Empresas
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto">
            Processo simples e eficiente para implementar sua solução de atendimento
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {howItWorks.map((step, index) => {
            const IconComponent = iconMap[step.icon as keyof typeof iconMap]
            return (
              <Card
                key={index}
                className="relative p-6 lg:p-8 rounded-2xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 text-center"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{step.step}</span>
                </div>

                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-6 mx-auto">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                  {step.description}
                </p>
              </Card>
            )
          })}
        </div>

        {/* Visual Flow */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-lg border border-gray-200 mb-16 lg:mb-20">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-8 lg:mb-12">
            Fluxo de Chamadas
          </h3>
          
          {/* Flow Diagram */}
          <div className="relative">
            {/* Mobile Flow */}
            <div className="block lg:hidden">
              <div className="space-y-6">
                {/* Origins */}
                <div className="text-center">
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-4 text-white">
                      <div className="text-sm font-medium">Escritório</div>
                    </div>
                    <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-4 text-white">
                      <div className="text-sm font-medium">Celular</div>
                    </div>
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-4 text-white">
                      <div className="text-sm font-medium">Residência</div>
                    </div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 mx-auto rotate-90" />
                </div>

                {/* 0800 */}
                <div className="text-center">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white mx-auto max-w-xs">
                    <Phone className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-lg font-bold">0800</div>
                    <div className="text-sm">Central Vivo</div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 mx-auto rotate-90 mt-4" />
                </div>

                {/* Call Center */}
                <div className="text-center">
                  <div className="bg-gradient-to-r from-gray-600 to-gray-700 rounded-2xl p-6 text-white mx-auto max-w-xs">
                    <Users className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-lg font-bold">Central de Atendimento</div>
                    <div className="text-sm">Sua Empresa</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Flow */}
            <div className="hidden lg:block">
              <div className="flex items-center justify-between">
                {/* Origins */}
                <div className="text-center">
                  <div className="space-y-4 mb-6">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-4 text-white">
                      <div className="font-medium">Escritório</div>
                    </div>
                    <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-4 text-white">
                      <div className="font-medium">Celular</div>
                    </div>
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-4 text-white">
                      <div className="font-medium">Residência</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">São Paulo, Recife, Curitiba</div>
                </div>

                {/* Arrow */}
                <ArrowRight className="w-8 h-8 text-gray-400 mx-8" />

                {/* 0800 */}
                <div className="text-center">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
                    <Phone className="w-12 h-12 mx-auto mb-4" />
                    <div className="text-2xl font-bold">0800</div>
                    <div className="text-sm">Central Vivo</div>
                  </div>
                </div>

                {/* Arrow */}
                <ArrowRight className="w-8 h-8 text-gray-400 mx-8" />

                {/* Call Center */}
                <div className="text-center">
                  <div className="bg-gradient-to-r from-gray-600 to-gray-700 rounded-2xl p-8 text-white">
                    <Users className="w-12 h-12 mx-auto mb-4" />
                    <div className="text-xl font-bold">Central de</div>
                    <div className="text-xl font-bold">Atendimento</div>
                    <div className="text-sm mt-2">Sua Empresa</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Platform */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 sm:p-8 lg:p-12 border border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Plataforma de Performance
              </h3>
              <p className="text-gray-600 mb-6 text-sm sm:text-base lg:text-lg">
                Acompanhe todas as métricas através da nossa plataforma completa com informações, relatórios de uso e gestão de chamadas.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700 font-medium">Relatórios em tempo real</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700 font-medium">Análise de tráfego por horário</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700 font-medium">Gestão de filas de espera</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700 font-medium">Configurações personalizadas</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 lg:p-8 text-white text-center">
              <BarChart className="w-16 h-16 mx-auto mb-6" />
              <h4 className="text-xl sm:text-2xl font-bold mb-4">
                Dashboard Completo
              </h4>
              <p className="text-purple-100 mb-6 text-sm sm:text-base lg:text-lg">
                Visualize todas as métricas importantes em um só lugar
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 rounded-xl p-4">
                  <div className="text-2xl font-bold">99.9%</div>
                  <div className="text-sm text-purple-100">Uptime</div>
                </div>
                <div className="bg-white/20 rounded-xl p-4">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm text-purple-100">Monitoramento</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

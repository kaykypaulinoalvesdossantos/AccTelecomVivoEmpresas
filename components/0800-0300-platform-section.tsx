"use client"

import React from "react"
import { BarChart, Settings, Mic, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { oitoZeroZeroConfig } from "@/data/0800-0300-data"

const iconMap = {
  BarChart,
  Settings,
  Mic
}

export function OitoZeroZeroPlatformSection(): React.JSX.Element {
  const { platform } = oitoZeroZeroConfig

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Plataforma exclusiva para gestão do 0800 da sua empresa
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto">
            Controle total sobre seus serviços com nossa plataforma completa e intuitiva
          </p>
        </div>

        {/* Platform Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {platform.map((item, index) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap]
            return (
              <Card
                key={index}
                className="p-6 lg:p-8 rounded-2xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-center">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 text-sm sm:text-base lg:text-lg leading-relaxed">
                    {item.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 text-left">
                    {item.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm sm:text-base text-gray-600">
                        <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <Button
                    asChild
                    className="w-full cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold border-0"
                  >
                    <a href={oitoZeroZeroConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                      {item.buttonText}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Dashboard Preview */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 sm:p-8 lg:p-12 border border-gray-200 mb-16 lg:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Interface Intuitiva e Completa
              </h3>
              <p className="text-gray-600 mb-6 text-sm sm:text-base lg:text-lg">
                Nossa plataforma oferece uma experiência de usuário moderna e intuitiva, permitindo que você gerencie todos os aspectos do seu serviço 0800 de forma eficiente.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Design responsivo para todos os dispositivos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Navegação simples e organizada</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Atualizações em tempo real</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Suporte técnico integrado</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 lg:p-8 text-white">
              <div className="text-center mb-6">
                <BarChart className="w-16 h-16 mx-auto mb-4" />
                <h4 className="text-xl sm:text-2xl font-bold mb-2">
                  Dashboard Principal
                </h4>
                <p className="text-purple-100 text-sm sm:text-base">
                  Visualize todas as informações importantes
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold">1,247</div>
                  <div className="text-xs text-purple-100">Chamadas Hoje</div>
                </div>
                <div className="bg-white/20 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold">98.5%</div>
                  <div className="text-xs text-purple-100">Taxa de Sucesso</div>
                </div>
                <div className="bg-white/20 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold">2.3min</div>
                  <div className="text-xs text-purple-100">Tempo Médio</div>
                </div>
                <div className="bg-white/20 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-xs text-purple-100">Disponível</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <Card className="p-6 rounded-2xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Settings className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Configuração Rápida</h4>
            <p className="text-gray-600 text-sm">Setup em minutos com nossa interface intuitiva</p>
          </Card>

          <Card className="p-6 rounded-2xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <BarChart className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Relatórios Avançados</h4>
            <p className="text-gray-600 text-sm">Análise detalhada de performance e métricas</p>
          </Card>

          <Card className="p-6 rounded-2xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Mic className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">URA Personalizada</h4>
            <p className="text-gray-600 text-sm">Crie mensagens e fluxos sob medida</p>
          </Card>

          <Card className="p-6 rounded-2xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Check className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Suporte 24/7</h4>
            <p className="text-gray-600 text-sm">Assistência técnica sempre disponível</p>
          </Card>
        </div>
      </div>
    </section>
  )
}

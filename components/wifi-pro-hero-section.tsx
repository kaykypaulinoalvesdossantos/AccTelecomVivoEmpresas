"use client"

import React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Wifi, Smartphone, Store } from "lucide-react"

export function WifiProHeroSection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#660099] via-[#8B2C9E] to-[#EB3C7D] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Left Content */}
          <div className="text-white space-y-8">
            {/* Badge */}
            <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 px-6 py-3 text-lg">
              <Wifi className="w-5 h-5 mr-2" />
              Solução IoT
            </Badge>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Wi-Fi inteligente
                <span className="block text-white/90">para seu negócio</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/90 max-w-2xl leading-relaxed">
                Potencialize seu ponto de venda com o Wi-Fi corporativo inteligente. 
                Capture dados, conheça seu público e crie ações de marketing segmentadas.
              </p>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <Badge className="bg-white text-[#660099] px-8 py-4 text-2xl font-bold border-0">
                A partir de R$ 29,90/mês
              </Badge>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-[#660099] hover:bg-white/90 px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                Assinar Solução
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 bg-transparent cursor-pointer"
              >
                Ver Demonstração
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Wifi className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm text-white/80">Coleta de Dados</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm text-white/80">Campanhas Personalizadas</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Store className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm text-white/80">Integração CRM</p>
              </div>
            </div>
          </div>

          {/* Right Content - Wi-Fi Pro Dashboard */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Dashboard Container */}
              <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-white">
                {/* Dashboard Header */}
                <div className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] p-6 text-white">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <Wifi className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Wi-Fi Pro Dashboard</h3>
                      <p className="text-white/90 text-sm">Painel de controle em tempo real</p>
                    </div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6 space-y-6">
                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-[#660099]/10 to-[#EB3C7D]/10 rounded-xl p-4 border border-[#660099]/20">
                      <div className="text-2xl font-bold text-[#660099]">1,247</div>
                      <div className="text-sm text-gray-600">Usuários Conectados</div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div className="bg-[#660099] h-2 rounded-full" style={{width: '75%'}}></div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-[#EB3C7D]/10 to-[#660099]/10 rounded-xl p-4 border border-[#EB3C7D]/20">
                      <div className="text-2xl font-bold text-[#EB3C7D]">89%</div>
                      <div className="text-sm text-gray-600">Taxa de Conversão</div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div className="bg-[#EB3C7D] h-2 rounded-full" style={{width: '89%'}}></div>
                      </div>
                    </div>
                  </div>

                  {/* Chart Section */}
                  <div className="bg-gray-50 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-4">Uso por Horário</h4>
                    <div className="flex items-end space-x-2 h-20">
                      {[40, 60, 80, 100, 85, 70, 45, 90, 75, 65].map((height, index) => (
                        <div 
                          key={index}
                          className="bg-gradient-to-t from-[#660099] to-[#EB3C7D] rounded-t flex-1"
                          style={{ height: `${height}%` }}
                        ></div>
                      ))}
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                      <span>8h</span>
                      <span>12h</span>
                      <span>16h</span>
                      <span>20h</span>
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Atividade Recente</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-600">25 novos usuários conectados</span>
                        <span className="text-xs text-gray-400">2 min atrás</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-600">Campanha "Black Friday" ativa</span>
                        <span className="text-xs text-gray-400">5 min atrás</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-600">3 promoções enviadas hoje</span>
                        <span className="text-xs text-gray-400">1h atrás</span>
                      </div>
                    </div>
                  </div>

                  {/* Wi-Fi Signal Visualization */}
                  <div className="bg-gradient-to-r from-[#660099]/5 to-[#EB3C7D]/5 rounded-xl p-4 border border-[#660099]/10">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-gray-900">Sinal Wi-Fi</h4>
                      <div className="flex space-x-1">
                        {[1, 2, 3, 4].map((bar, index) => (
                          <div 
                            key={index}
                            className="w-1 bg-[#660099] rounded-full"
                            style={{ height: `${(index + 1) * 8}px` }}
                          ></div>
                        ))}
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Força do sinal:</span>
                        <span className="font-semibold text-[#660099]">Excelente</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Usuários ativos:</span>
                        <span className="font-semibold text-[#EB3C7D]">47</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#660099]/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#EB3C7D]/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

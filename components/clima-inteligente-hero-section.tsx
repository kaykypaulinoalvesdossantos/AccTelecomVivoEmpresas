"use client"

import React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Cloud, Droplets, Wind, Sun } from "lucide-react"

export function ClimaInteligenteHeroSection() {
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
              <Cloud className="w-5 h-5 mr-2" />
              Clima Inteligente
            </Badge>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Previsão climática em
                <span className="block text-white/90">tempo real</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/90 max-w-2xl leading-relaxed">
                Planejamento e controle do processo produtivo do plantio à colheita 
                com dados climáticos precisos e atualizados.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-[#660099] hover:bg-white/90 px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                Contrate
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <Droplets className="w-8 h-8 text-white mx-auto mb-2" />
                <p className="text-sm text-white/80">Monitoramento</p>
              </div>
              <div className="text-center">
                <Wind className="w-8 h-8 text-white mx-auto mb-2" />
                <p className="text-sm text-white/80">Previsão</p>
              </div>
              <div className="text-center">
                <Sun className="w-8 h-8 text-white mx-auto mb-2" />
                <p className="text-sm text-white/80">Controle</p>
              </div>
            </div>
          </div>

          {/* Right Content - Simple Dashboard */}
          <div className="relative">
            <div className="relative z-10">
              {/* Weather Dashboard */}
              <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-white">
                {/* Dashboard Header */}
                <div className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] p-6 text-white">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                      <Cloud className="w-5 h-5 text-[#660099]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Clima Inteligente</h3>
                      <p className="text-white/90 text-sm">Monitoramento em tempo real</p>
                    </div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6 space-y-6">
                  {/* Weather Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gray-50 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-[#660099]">28°C</div>
                      <div className="text-sm text-gray-600">Temperatura</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-[#EB3C7D]">65%</div>
                      <div className="text-sm text-gray-600">Umidade</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-blue-600">15km/h</div>
                      <div className="text-sm text-gray-600">Vento</div>
                    </div>
                  </div>

                  {/* Weather Chart */}
                  <div className="bg-gray-50 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-4">Previsão 7 dias</h4>
                    <div className="flex items-end space-x-2 h-20">
                      {[80, 90, 100, 85, 70, 75, 80].map((height, index) => (
                        <div
                          key={index}
                          className="bg-gradient-to-t from-[#660099] to-[#EB3C7D] rounded-t flex-1"
                          style={{ height: `${height}%` }}
                        ></div>
                      ))}
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                      <span>Hoje</span>
                      <span>7 dias</span>
                    </div>
                  </div>

                  {/* Recent Alerts */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Alertas Climáticos</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-600">Chuva prevista para amanhã</span>
                        <span className="text-xs text-gray-400">2h</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span className="text-gray-600">Temperatura alta esperada</span>
                        <span className="text-xs text-gray-400">4h</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-600">Condições ideais para plantio</span>
                        <span className="text-xs text-gray-400">6h</span>
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

"use client"

import React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Truck, MapPin, Shield } from "lucide-react"

export function FrotaInteligenteHeroSection() {
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
              <Truck className="w-5 h-5 mr-2" />
              Solução IoT
            </Badge>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Gerenciamento de frota
                <span className="block text-white/90">inteligente</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/90 max-w-2xl leading-relaxed">
                Rastreamento veicular em tempo real com tecnologia GPS avançada. 
                Controle total da sua frota, reduza custos e aumente a eficiência operacional.
              </p>
            </div>

            {/* Offer */}
            <div className="flex items-center space-x-4">
              <Badge className="bg-white text-[#660099] px-8 py-4 text-2xl font-bold border-0">
                Sem taxa de instalação
              </Badge>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <div className="text-4xl font-bold text-white">
                R$ 60<span className="text-2xl text-white/80">/mês</span>
              </div>
          
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-[#660099] hover:bg-white/90 px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                Contratar Serviço
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 cursor-pointer bg-transparent"
              >
                Solicitar Contato
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm text-white/80">Rastreamento GPS</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Truck className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm text-white/80">Controle de Frota</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm text-white/80">Segurança Total</p>
              </div>
            </div>
          </div>

          {/* Right Content - Fleet Visualization */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Fleet Container */}
              <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-white">
                {/* Dashboard Header */}
                <div className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] p-6 text-white">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-[#660099]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Frota Inteligente</h3>
                      <p className="text-white/90 text-sm">Monitoramento em tempo real</p>
                    </div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6 space-y-4">
                  {/* Fleet Stats - Cards */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white rounded-xl p-3 text-center border border-gray-100">
                      <div className="text-2xl font-bold text-[#660099]">24</div>
                      <div className="text-sm text-gray-600">Veículos</div>
                    </div>
                    <div className="bg-white rounded-xl p-3 text-center border border-gray-100">
                      <div className="text-2xl font-bold text-[#EB3C7D]">18</div>
                      <div className="text-sm text-gray-600">Em Movimento</div>
                    </div>
                    <div className="bg-white rounded-xl p-3 text-center border border-gray-100">
                      <div className="text-2xl font-bold text-green-600">98%</div>
                      <div className="text-sm text-gray-600">Eficiência</div>
                    </div>
                  </div>

                  {/* Map Visualization */}
                  <div className="bg-white rounded-xl p-3 border border-gray-100">
                    <h4 className="font-semibold text-gray-900 mb-3">Mapa em Tempo Real</h4>
                    <div className="relative h-24 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg overflow-hidden">
                      {/* Road Network - Gray Lines */}
                      <div className="absolute inset-0">
                        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-400 transform -rotate-12"></div>
                        <div className="absolute top-1/3 left-0 right-0 h-1 bg-gray-400 transform rotate-6"></div>
                        <div className="absolute bottom-1/3 left-0 right-0 h-1 bg-gray-400 transform -rotate-3"></div>
                      </div>
                      
                      {/* Vehicle Dots - Exact positions from image */}
                      <div className="absolute top-4 left-8 w-4 h-4 bg-[#660099] rounded-full border-2 border-white shadow-lg"></div>
                      <div className="absolute top-8 right-12 w-4 h-4 bg-[#EB3C7D] rounded-full border-2 border-white shadow-lg"></div>
                      <div className="absolute bottom-6 left-1/3 w-4 h-4 bg-[#660099] rounded-full border-2 border-white shadow-lg"></div>
                      <div className="absolute bottom-4 right-8 w-4 h-4 bg-[#EB3C7D] rounded-full border-2 border-white shadow-lg"></div>
                      <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg"></div>
                    </div>
                  </div>

                  {/* Recent Alerts */}
                  <div className="bg-white rounded-xl p-3 border border-gray-100">
                    <h4 className="font-semibold text-gray-900 mb-3">Alertas Recentes</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-600">Veículo ABC-1234 chegou ao destino</span>
                        <span className="text-xs text-gray-400">2 min</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span className="text-gray-600">Alerta de velocidade - DEF-5678</span>
                        <span className="text-xs text-gray-400">5 min</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-600">Nova rota otimizada calculada</span>
                        <span className="text-xs text-gray-400">10 min</span>
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

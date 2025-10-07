"use client"

import React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Wifi, Smartphone, WifiOff } from "lucide-react"

export function AgroCoberturaHeroSection() {
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
              A AGRO COBERTURA
            </Badge>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Conectividade em
                <span className="block text-white/90">qualquer lugar</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/90 max-w-2xl leading-relaxed">
                Garanta conexão para dados, voz e conecte máquinas ou dispositivos IoT 
                em áreas rurais e industriais.
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
                <Wifi className="w-8 h-8 text-white mx-auto mb-2" />
                <p className="text-sm text-white/80">4G LTE</p>
              </div>
              <div className="text-center">
                <Smartphone className="w-8 h-8 text-white mx-auto mb-2" />
                <p className="text-sm text-white/80">IoT</p>
              </div>
              <div className="text-center">
                <WifiOff className="w-8 h-8 text-white mx-auto mb-2" />
                <p className="text-sm text-white/80">LPWA</p>
              </div>
            </div>
          </div>

          {/* Right Content - Simple Dashboard */}
          <div className="relative">
            <div className="relative z-10">
              {/* Connectivity Dashboard */}
              <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-white">
                {/* Dashboard Header */}
                <div className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] p-6 text-white">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                      <Wifi className="w-5 h-5 text-[#660099]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Agro Cobertura</h3>
                      <p className="text-white/90 text-sm">Conectividade rural</p>
                    </div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6 space-y-6">
                  {/* Coverage Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gray-50 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-[#660099]">95%</div>
                      <div className="text-sm text-gray-600">Cobertura</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-[#EB3C7D]">4G</div>
                      <div className="text-sm text-gray-600">Tecnologia</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-green-600">24/7</div>
                      <div className="text-sm text-gray-600">Disponível</div>
                    </div>
                  </div>

                  {/* Network Chart */}
                  <div className="bg-gray-50 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-4">Tipos de Rede</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">4G LTE</span>
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className="bg-[#660099] h-2 rounded-full" style={{width: '100%'}}></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">LTE-M</span>
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className="bg-[#EB3C7D] h-2 rounded-full" style={{width: '80%'}}></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">NB-IoT</span>
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: '60%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Status da Rede</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-600">Rede 4G ativa</span>
                        <span className="text-xs text-gray-400">Agora</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-600">Dispositivos IoT conectados</span>
                        <span className="text-xs text-gray-400">15 min</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-600">Dados transmitidos com sucesso</span>
                        <span className="text-xs text-gray-400">30 min</span>
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

"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Server, Shield, Monitor, Eye } from "lucide-react"

export function ColocationAvailabilitySection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge className="bg-[#660099]/10 text-[#660099] border-[#660099]/20">
                <CheckCircle className="w-4 h-4 mr-2" />
                Disponibilidade Garantida
              </Badge>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Colocation Vivo garante disponibilidade e segurança para seus
                <span className="block text-[#660099]">servidores</span>
              </h2>
            </div>

            {/* Key Points */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#660099] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Server className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Serviço Consistente</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Garantimos um serviço consistente e confiável, com alta disponibilidade 
                    para manter sua operação sempre funcionando.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#EB3C7D] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Maior Disponibilidade</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Aumento da disponibilidade da infraestrutura, garantindo que seus servidores 
                    estejam sempre operacionais e seguros.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#660099] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Monitor className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Monitoramento Completo</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Monitoramento de ambientes físicos e virtuais, proporcionando visibilidade 
                    completa do ambiente de TI.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#EB3C7D] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Suporte Especializado</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Suporte especializado para resolução de problemas, garantindo rápida 
                    solução para qualquer questão técnica.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Server Rack Image */}
          <div className="relative">
            <div className="relative z-10">
              {/* Server Rack Visualization */}
              <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-white">
                {/* Server Rack Header */}
                <div className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] p-4 text-white">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                      <Server className="w-5 h-5 text-[#660099]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Rack de Servidores</h3>
                      <p className="text-white/90 text-sm">Ambiente monitorado</p>
                    </div>
                  </div>
                </div>

                {/* Server Rack Content */}
                <div className="p-4 space-y-4">
                  {/* Server Units */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 mb-3">Unidades de Servidor</h4>
                    <div className="grid grid-cols-4 gap-2">
                      {Array.from({ length: 16 }).map((_, index) => (
                        <div key={index} className="bg-gray-800 rounded p-2 text-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mx-auto mb-1"></div>
                          <div className="text-xs text-white">U{index + 1}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Status Indicators */}
                  <div className="bg-gray-50 rounded-xl p-3">
                    <h4 className="font-semibold text-gray-900 mb-3">Status do Sistema</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Temperatura</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-700">22°C</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Energia</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-700">Estável</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Conectividade</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-700">Ativa</span>
                        </div>
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

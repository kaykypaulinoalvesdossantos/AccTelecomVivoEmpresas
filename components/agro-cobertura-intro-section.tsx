"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Wifi, Database, Smartphone } from "lucide-react"

export function AgroCoberturaIntroSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge className="bg-[#660099]/10 text-[#660099] border-[#660099]/20">
                <CheckCircle className="w-4 h-4 mr-2" />
                Conectividade Rural
              </Badge>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Sua produção não para onde quer que ela
                <span className="block text-[#660099]">aconteça</span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                A Agro Cobertura oferece conectividade 4G em grandes áreas rurais e industriais, 
                recomendada para máquinas e dispositivos IoT que utilizam protocolos LTE-M e NB-IoT (LPWA) 
                para dados de alta velocidade e tomada de decisão em tempo real.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Inclui a Plataforma Kite para gerenciar dispositivos conectados e obter insights 
                valiosos para sua operação agrícola.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-[#660099] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 leading-relaxed">Conectividade 4G em áreas rurais e industriais</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-[#660099] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 leading-relaxed">Protocolos LTE-M e NB-IoT para IoT</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-[#660099] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 leading-relaxed">Plataforma Kite para gestão de dispositivos</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-[#660099] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 leading-relaxed">Dados em tempo real para tomada de decisão</span>
              </div>
            </div>
          </div>

          {/* Right Content - Simple Icons */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gray-50 hover:bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#660099] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Wifi className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">4G LTE</h3>
                  <p className="text-gray-600 text-sm">Conectividade de alta velocidade</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gray-50 hover:bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#EB3C7D] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">IoT</h3>
                  <p className="text-gray-600 text-sm">Dispositivos conectados</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gray-50 hover:bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#660099] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">LPWA</h3>
                  <p className="text-gray-600 text-sm">Baixo consumo de energia</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gray-50 hover:bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#EB3C7D] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Kite</h3>
                  <p className="text-gray-600 text-sm">Plataforma de gestão</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

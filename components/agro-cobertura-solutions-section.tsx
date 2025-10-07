"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Wifi, Building2 } from "lucide-react"

export function AgroCoberturaSolutionsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge className="bg-[#660099]/10 text-[#660099] border-[#660099]/20">
                <CheckCircle className="w-4 h-4 mr-2" />
                Soluções Completas
              </Badge>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Entenda as soluções da
                <span className="block text-[#660099]">Agro Cobertura</span>
              </h2>
            </div>

            {/* Solutions List */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Tecnologia para conexão IoT</h3>
                <p className="text-gray-600 leading-relaxed">
                  Tecnologias 4G LTE, LPWA, LTE-M e NB-IoT dedicadas a aplicações IoT com baixo 
                  consumo de bateria e longo alcance, incluindo comunicação de voz, SMS e dados 
                  para dispositivos IoT.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-[#660099]" />
                    <span className="text-gray-700 text-sm">4G LTE para alta velocidade</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-[#660099]" />
                    <span className="text-gray-700 text-sm">LTE-M para baixo consumo</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-[#660099]" />
                    <span className="text-gray-700 text-sm">NB-IoT para máxima autonomia</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Infraestrutura personalizada</h3>
                <p className="text-gray-600 leading-relaxed">
                  Personalização do projeto baseada na demanda de cobertura, localização, energia, 
                  instalação de torres, suporte e gerenciamento, aproveitando a experiência da Vivo 
                  em cobertura celular nacional.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-[#EB3C7D]" />
                    <span className="text-gray-700 text-sm">Projetos sob medida</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-[#EB3C7D]" />
                    <span className="text-gray-700 text-sm">Instalação de torres</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-[#EB3C7D]" />
                    <span className="text-gray-700 text-sm">Suporte especializado</span>
                  </div>
                </div>
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
                  <p className="text-gray-600 text-sm">Alta velocidade</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gray-50 hover:bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#EB3C7D] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">LTE-M</h3>
                  <p className="text-gray-600 text-sm">Baixo consumo</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gray-50 hover:bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#660099] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">NB-IoT</h3>
                  <p className="text-gray-600 text-sm">Máxima autonomia</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gray-50 hover:bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#EB3C7D] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Wifi className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">LPWA</h3>
                  <p className="text-gray-600 text-sm">Longo alcance</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

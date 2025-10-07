"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Wifi, Cloud, Smartphone, Database, WifiOff } from "lucide-react"

export function GestaoMaquinarioIntroSection() {
  const features = [
    "Plataforma única de gestão da frota, independente do fabricante do maquinário",
    "Wi-Fi para a conexão de outros dispositivos dentro da cabine",
    "Plataforma em nuvem com todos os dados para o gestor da frota",
    "App móvel para visualização das informações dentro da cabine",
    "Transmissão on-line e off-line"
  ]

  const visualElements = [
    { icon: Wifi, color: "#660099", label: "Conectividade" },
    { icon: Cloud, color: "#EB3C7D", label: "Nuvem" },
    { icon: Database, color: "#660099", label: "Dados" },
    { icon: WifiOff, color: "#EB3C7D", label: "Offline" }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge className="bg-[#660099]/10 text-[#660099] border-[#660099]/20">
                <CheckCircle className="w-4 h-4 mr-2" />
                Solução Completa
              </Badge>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Por que usar o Gestão de Maquinário da
                <span className="block text-[#660099]">Vivo Empresas?</span>
              </h2>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#660099] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 leading-relaxed">{feature}</span>
                </div>
              ))}
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
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Conectividade</h3>
                  <p className="text-gray-600 text-sm">Wi-Fi para dispositivos na cabine</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gray-50 hover:bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#EB3C7D] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Cloud className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Nuvem</h3>
                  <p className="text-gray-600 text-sm">Dados centralizados na plataforma</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gray-50 hover:bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#660099] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">App Móvel</h3>
                  <p className="text-gray-600 text-sm">Visualização dentro da cabine</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gray-50 hover:bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#EB3C7D] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Dados</h3>
                  <p className="text-gray-600 text-sm">Transmissão online e offline</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

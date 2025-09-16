"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Wifi, Smartphone, Zap } from "lucide-react"

export function Router5GEquipmentSection(): React.JSX.Element {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Saiba mais sobre o equipamento
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              O CPE 5G é um roteador portátil, com espaço para chip 5G. Por isso, é tão fácil de usar: 
              insira o Vivo Chip no equipamento e conecte-se ao Wi-Fi no seu smartphone, computador ou tablet.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-lg flex items-center justify-center">
                  <Wifi className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Wi-Fi 6</div>
                  <div className="text-sm text-gray-600">Ultra-rápido</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-lg flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Portátil</div>
                  <div className="text-sm text-gray-600">Leve e compacto</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Plug & Play</div>
                  <div className="text-sm text-gray-600">Instalação fácil</div>
                </div>
              </div>
            </div>

            <Button className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] hover:from-[#7a0bb3] hover:to-[#ff1a75] text-white font-semibold px-6 py-3">
              Mais informações
            </Button>
          </div>

          {/* Equipment Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md border border-purple-200/20 rounded-3xl p-8 shadow-2xl">
              <div className="relative">
                {/* Real router image */}
                <div className="w-full h-80 bg-white rounded-2xl flex items-center justify-center p-8">
                  <img 
                    src="/router-5g/vivo-empresas-roteador-5g-2405-943x832.png" 
                    alt="CPE 5G Vivo - Roteador portátil empresarial"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full animate-bounce delay-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

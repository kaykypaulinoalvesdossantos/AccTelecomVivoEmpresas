"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Wifi, Smartphone, Zap, Signal } from "lucide-react"

export function Modem4GEquipmentSection(): React.JSX.Element {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Conheça o equipamento
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              O Modem 4G Vivo é portátil e possui slot para chip. Você pode utilizá-lo em qualquer lugar 
              onde tenha cobertura 4G da Vivo, conectando-se via Wi-Fi ou cabo de rede.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-lg flex items-center justify-center">
                  <Signal className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">4G Ultra-rápido</div>
                  <div className="text-sm text-gray-600">Até 150Mbps</div>
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
              Ver mais detalhes
            </Button>
          </div>

          {/* Equipment Image */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl">
              <div className="relative">
                {/* Placeholder for modem image */}
                <div className="w-full h-80 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="flex items-center justify-center mb-4">
                      <Smartphone className="w-20 h-20 opacity-50" />
                      <Wifi className="w-10 h-10 opacity-50 ml-2" />
                    </div>
                    <p className="text-xl font-semibold">Modem 4G Vivo</p>
                    <p className="text-sm opacity-70">Equipamento portátil com chip integrado</p>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-[#660099] to-[#EB3C7D] rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-[#EB3C7D] to-[#660099] rounded-full animate-bounce delay-500"></div>
                <div className="absolute top-4 -right-4 w-4 h-4 bg-white/30 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

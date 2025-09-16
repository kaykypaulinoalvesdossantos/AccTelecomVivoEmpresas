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
              Conheça o Pen/Box
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              O Pen/Box Vivo é um dispositivo móvel elegante e compacto que oferece conectividade empresarial 
              de alta velocidade. Basta inserir o chip e você terá acesso à internet móvel 4G/5G com roteador Wi-Fi incluso.
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
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Wifi className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Pen/Box Portátil</div>
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

            <Button 
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-6 py-3"
              asChild
            >
              <a href="https://wa.me/551123629665" target="_blank" rel="noopener noreferrer">
                Contratar pelo WhatsApp
              </a>
            </Button>
          </div>

          {/* Equipment Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md border border-purple-200/20 rounded-3xl p-8 shadow-2xl">
              <div className="relative">
                {/* Real Pen/Box image */}
                <div className="w-full h-80 bg-white rounded-2xl flex items-center justify-center p-8">
                  <img 
                    src="/195624372-removebg-preview.png" 
                    alt="Pen/Box Vivo - Dispositivo móvel empresarial"
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

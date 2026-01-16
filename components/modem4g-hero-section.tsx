"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Wifi, Signal, Zap, Smartphone } from "lucide-react"

export function Modem4GHeroSection(): React.JSX.Element {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#660099] via-[#8B00FF] to-[#EB3C7D] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/3 rounded-full blur-2xl animate-spin-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge className="bg-white text-purple-600 border-2 border-white shadow-lg px-4 py-2 font-semibold">
                <Wifi className="w-4 h-4 mr-2" />
                MÓVEL PEN/BOX | PLANOS DE DADOS
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Nossos clientes conectados a todo o momento!
              </h1>

              <p className="text-lg md:text-xl text-white max-w-2xl leading-relaxed">
                Conectividade móvel empresarial com máxima flexibilidade.
                Maior mobilidade e facilidade para seu escritório itinerante.
              </p>
            </div>

            {/* Feature Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-lg">
                <div className="w-12 h-12 mx-auto mb-3 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <Signal className="w-6 h-6 text-[#660099]" />
                </div>
                <div className="text-lg font-semibold text-white">4G Ultra-rápido</div>
                <div className="text-sm text-white/90">Até 150Mbps</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-lg">
                <div className="w-12 h-12 mx-auto mb-3 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <Wifi className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-lg font-semibold text-white">Pen/Box Portátil</div>
                <div className="text-sm text-white/90">Leve e compacto</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-lg">
                <div className="w-12 h-12 mx-auto mb-3 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <Zap className="w-6 h-6 text-[#660099]" />
                </div>
                <div className="text-lg font-semibold text-white">Plug & Play</div>
                <div className="text-sm text-white/90">Instalação fácil</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-white/95 font-semibold px-6 py-3 shadow-lg border-2 border-white"
                asChild
              >
                <a href="https://wa.me/5511989150001?text=Olá! Gostaria de contratar Modem 4G" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  Contratar pelo WhatsApp
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm px-6 py-3 shadow-lg"
                asChild
              >
                <a href="#planos" className="cursor-pointer">
                  Ver Planos
                </a>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="bg-white/15 backdrop-blur-md border-2 border-white/30 rounded-3xl p-8 shadow-2xl">
              <div className="relative">
                {/* Real Pen/Box image */}
                <div className="w-full h-64 bg-white rounded-2xl flex items-center justify-center p-8 shadow-inner">
                  <img
                    src="/195624372-removebg-preview.png"
                    alt="Pen/Box Vivo - Dispositivo móvel empresarial"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-white rounded-full animate-bounce shadow-lg border-2 border-white/50"></div>
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-white rounded-full animate-bounce delay-500 shadow-lg border-2 border-white/50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

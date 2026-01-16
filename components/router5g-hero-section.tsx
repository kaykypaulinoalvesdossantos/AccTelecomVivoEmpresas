"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Wifi, Signal, Zap } from "lucide-react"

export function Router5GHeroSection(): React.JSX.Element {
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
              <Badge className="bg-white text-[#660099] border-2 border-white shadow-lg px-4 py-2 font-semibold">
                <Wifi className="w-4 h-4 mr-2" />
                ROTEADOR 5G
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Planos para sua{" "}
                <span className="text-white">empresa</span>
              </h1>

              <p className="text-lg md:text-xl text-white max-w-2xl leading-relaxed">
                Navegue com a tecnologia 5G e descubra novas possibilidades.
                Conectividade ultra-rápida para impulsionar seu negócio.
              </p>
            </div>

            {/* Feature Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-lg">
                <div className="w-12 h-12 mx-auto mb-3 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <Signal className="w-6 h-6 text-[#660099]" />
                </div>
                <div className="text-lg font-semibold text-white">5G Ultra-rápido</div>
                <div className="text-sm text-white/90">Até 1Gbps</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-lg">
                <div className="w-12 h-12 mx-auto mb-3 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <Wifi className="w-6 h-6 text-[#660099]" />
                </div>
                <div className="text-lg font-semibold text-white">Wi-Fi 6</div>
                <div className="text-sm text-white/90">64 dispositivos</div>
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
              <Button size="lg" className="bg-white text-[#660099] hover:bg-white/95 font-semibold px-6 py-3 shadow-lg border-2 border-white" asChild>
                <a href="https://wa.me/5511989150001?text=Olá! Gostaria de assinar Roteador 5G" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  Assine já
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
                  Saiba Mais
                </a>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="bg-white/15 backdrop-blur-md border-2 border-white/30 rounded-3xl p-8 shadow-2xl">
              <div className="relative">
                {/* Placeholder for router image */}
                <div className="w-full h-64 bg-white/20 rounded-2xl flex items-center justify-center border border-white/30 shadow-inner">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                      <Wifi className="w-10 h-10 text-[#660099]" />
                    </div>
                    <p className="text-lg font-semibold text-white">Roteador 5G Vivo</p>
                    <p className="text-sm text-white/80">Imagem do equipamento</p>
                  </div>
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

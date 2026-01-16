"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Smartphone, Zap, Shield } from "lucide-react"

export function ESimHeroSection(): React.JSX.Element {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#660099] via-[#8B00FF] to-[#EB3C7D] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-white/5 to-white/5 rounded-full blur-2xl animate-spin-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Badge className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-2 mb-6">
            <Zap className="w-4 h-4 mr-2" />
            TECNOLOGIA DIGITAL
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            eSIM: confira o que é, como funciona a ativação e troca
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            Chip digital integrado ao seu dispositivo. Ativação instantânea, sem chip físico,
            com toda a qualidade da rede Vivo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#660099] hover:bg-white/90 font-semibold px-6 py-3" asChild>
              <a href="https://wa.me/5511989150001?text=Olá! Gostaria de ativar meu eSIM agora" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                Ativar agora
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm px-6 py-3"
              asChild
            >
              <a href="https://wa.me/5511989150001?text=Olá! Gostaria de saber como funciona o eSIM" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                Como funciona
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

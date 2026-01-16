"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"

export function Modem4GCTASection(): React.JSX.Element {
  return (
    <section className="py-16 bg-gradient-to-r from-[#660099] to-[#EB3C7D]">
      <div className="container mx-auto px-4">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para transformar sua conectividade?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Escolha o plano ideal para sua empresa e aproveite toda a tecnologia 4G da Vivo
            com equipamentos de última geração.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-white text-[#660099] hover:bg-white/90 font-semibold px-8 py-4 text-lg" asChild>
              <a href="https://wa.me/5511989150001?text=Olá! Gostaria de contratar Modem 4G agora" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                Contratar Agora
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm px-8 py-4 text-lg"
              asChild
            >
              <a href="https://wa.me/5511989150001?text=Olá! Gostaria de falar com consultor sobre Modem 4G" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar com Consultor
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-2xl font-bold text-white mb-1">150Mbps</div>
              <div className="text-sm text-white/80">Velocidade Máxima</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-2xl font-bold text-white mb-1">32</div>
              <div className="text-sm text-white/80">Dispositivos Simultâneos</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-2xl font-bold text-white mb-1">3.500+</div>
              <div className="text-sm text-white/80">Municípios com 4G</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

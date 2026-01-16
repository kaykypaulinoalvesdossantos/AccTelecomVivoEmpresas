"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Wifi, Shield, CreditCard } from "lucide-react"

export function M2MHeroSection(): React.JSX.Element {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#660099] via-[#8B00FF] to-[#EB3C7D] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-white/5 to-white/5 rounded-full blur-2xl animate-spin-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-white">
            <Badge className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-2 mb-6">
              <Wifi className="w-4 h-4 mr-2" />
              IoT E CONECTIVIDADE
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Para cada aplicação, uma solução M2M
            </h1>

            <div className="mb-8">
              <p className="text-lg md:text-xl text-white/90 mb-4">
                Conectividade inteligente para máquinas e dispositivos
              </p>
              <div className="text-2xl font-bold">
                A partir de <span className="text-3xl">R$ 6,10</span> /mês
              </div>
            </div>

            <Button size="lg" className="bg-white text-[#660099] hover:bg-white/90 font-semibold px-8 py-4 text-lg" asChild>
              <a href="https://wa.me/5511989150001?text=Olá! Gostaria de contratar M2M" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                Contratar M2M
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>

          {/* Right Side - Application Images */}
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Wifi className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">RASTREIO</h3>
              </div>
              <p className="text-white/80">
                Rastreamento inteligente de veículos e ativos em tempo real
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">SEGURANÇA</h3>
              </div>
              <p className="text-white/80">
                Monitoramento e proteção de dados com máxima segurança
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">MAQUININHA</h3>
              </div>
              <p className="text-white/80">
                Conexão estável para terminais de pagamento e POS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Zap, Smartphone, Wifi, Shield } from "lucide-react"

export function PlansHeroSection(): React.JSX.Element {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#660099] via-[#8B00FF] to-[#EB3C7D] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-[#660099]/20 to-[#EB3C7D]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tl from-[#EB3C7D]/20 to-[#660099]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#660099]/10 to-[#EB3C7D]/10 rounded-full blur-2xl animate-spin-slow"></div>
      </div>

      {/* Glassmorphism Grid Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Content */}
          <div className="space-y-8 text-white">
            <div className="space-y-6">
              <Badge className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-300">
                <Zap className="w-4 h-4 mr-2" />
                OFERTA IMPERDÍVEL
          </Badge>

              <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                Planos{" "}
                <span className="bg-gradient-to-r from-white to-[#EB3C7D] bg-clip-text text-transparent">
                  Futuristas
                </span>
                <br />
                <span className="text-4xl lg:text-6xl">para sua Empresa</span>
          </h1>

              <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
                Conectividade de última geração com tecnologia 5G, fibra óptica de alta performance e soluções digitais 
                avançadas para impulsionar seu negócio.
              </p>
            </div>

            {/* Feature Icons */}
            <div className="grid grid-cols-3 gap-8 py-8">
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">5G</div>
                <div className="text-sm text-white/80">Tecnologia Móvel</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                  <Wifi className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">1GB</div>
                <div className="text-sm text-white/80">Velocidade Fibra</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm text-white/80">Suporte Técnico</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-[#660099] hover:bg-white/90 font-semibold px-8 py-4 text-lg shadow-2xl hover:shadow-[#660099]/25 transition-all duration-300">
              Ver Planos Móveis
            </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm px-8 py-4 text-lg"
              >
              Ver Internet Fibra
            </Button>
            </div>
          </div>

          {/* Floating Plan Card */}
          <div className="relative">
            <div className="relative z-20">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl">
                <div className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-2xl p-4 mb-6">
                  <h3 className="text-white font-bold text-lg text-center">OFERTA IMPERDÍVEL</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="text-center">
                    <h4 className="text-2xl font-bold text-white mb-2">Plano 5G Empresarial</h4>
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <Smartphone className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-4xl font-bold text-white">25 GB</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="h-px bg-white/20"></div>
                    <div className="text-white/90 text-center">5G mais rápido do mundo</div>
                    <div className="h-px bg-white/20"></div>
                    <div className="text-white/90 text-center">Gestão de Voz e Dados inclusa</div>
                    <div className="h-px bg-white/20"></div>
                  </div>

                  <div className="bg-white/10 rounded-2xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-white font-semibold">Benefícios</span>
                      <div className="flex gap-2">
                        <div className="w-6 h-6 bg-[#660099] rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs font-bold">VR</span>
                        </div>
                        <div className="w-6 h-6 bg-[#EB3C7D] rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs font-bold">♥</span>
                        </div>
                        <div className="w-6 h-6 bg-[#660099]/50 rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs font-bold">✓</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-4">R$ 54,99/mês</div>
                    <Button className="w-full bg-gradient-to-r from-[#660099] to-[#EB3C7D] hover:from-[#7a0bb3] hover:to-[#ff1a75] text-white font-semibold py-3 rounded-2xl shadow-lg transition-all duration-300">
                      Assinar Plano
                    </Button>
                    <div className="text-white/70 text-sm mt-3 flex items-center justify-center gap-1 cursor-pointer hover:text-white transition-colors">
                      Mais detalhes <span className="text-xs">▼</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-[#660099] to-[#EB3C7D] rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-[#EB3C7D] to-[#660099] rounded-full animate-bounce delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

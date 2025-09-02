"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Smartphone, Users, Shield, CheckCircle } from "lucide-react"

export function PortabilityHeroSection(): React.JSX.Element {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#660099] via-[#8B00FF] to-[#EB3C7D] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-white">
            <div className="space-y-6">
              <Badge className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-2">
                <Shield className="w-4 h-4 mr-2" />
                PORTABILIDADE SIMPLES
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Portabilidade: conheça os planos móveis para{" "}
                <span className="text-white">Empresas</span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
                Mude sua operadora mantendo o mesmo número. Processo simples, rápido e seguro para sua empresa.
              </p>
            </div>

            {/* Feature Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-white/20 rounded-xl flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <div className="text-lg font-semibold text-white">Mantenha</div>
                <div className="text-sm text-white/80">Seu Número</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-white/20 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-lg font-semibold text-white">CNPJ</div>
                <div className="text-sm text-white/80">Ativo</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-white/20 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="text-lg font-semibold text-white">24h</div>
                <div className="text-sm text-white/80">Processo</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-[#660099] hover:bg-white/90 font-semibold px-6 py-3">
                Ver Planos de Portabilidade
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm px-6 py-3"
              >
                Saiba Mais
              </Button>
            </div>
          </div>

          {/* Status Card */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl">
              <div className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-xl p-3 mb-4">
                <h3 className="text-white font-bold text-center">PORTABILIDADE</h3>
              </div>
              
              <div className="space-y-4">
                <div className="text-center">
                  <h4 className="text-xl font-bold text-white mb-2">Status da Portabilidade</h4>
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-2xl font-bold text-white">ATIVO</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-white/90 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    CNPJ em dia
                  </div>
                  <div className="flex items-center gap-2 text-white/90 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Sem pendências
                  </div>
                </div>

                <div className="bg-white/10 rounded-xl p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-semibold text-sm">Processo em 24h</span>
                    <span className="text-white/70 text-xs">75%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] h-2 rounded-full w-3/4"></div>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-[#660099] to-[#EB3C7D] hover:from-[#7a0bb3] hover:to-[#ff1a75] text-white font-semibold py-2 rounded-xl">
                  Iniciar Portabilidade
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Globe, Shield, TrendingUp } from "lucide-react"

export function RegistroDominioWhySection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge className="bg-[#660099]/10 text-[#660099] border-[#660099]/20">
                <CheckCircle className="w-4 h-4 mr-2" />
                Vantagens do Domínio
              </Badge>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Porque é indicado registrar seu
                <span className="block text-[#660099]">domínio?</span>
              </h2>
            </div>

            {/* Key Points */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#660099] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Maior Profissionalismo</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Aumente a credibilidade da sua empresa com um domínio personalizado, 
                    transmitindo profissionalismo e confiança aos seus clientes.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#EB3C7D] rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Melhor Posicionamento Online</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Melhore seu posicionamento nos mecanismos de busca e aumente 
                    a visibilidade da sua marca na internet.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#660099] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Proteção da Marca</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Proteja sua marca registrando múltiplos domínios e extensões, 
                    evitando que concorrentes utilizem nomes similares.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Domain Extensions */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#660099] to-[#EB3C7D] rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 text-center">Extensões Disponíveis</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 rounded-xl p-4 text-center hover:bg-white/30 transition-colors cursor-pointer">
                  <div className="text-2xl font-bold">.com</div>
                  <div className="text-sm text-white/90">Internacional</div>
                </div>
                <div className="bg-white/20 rounded-xl p-4 text-center hover:bg-white/30 transition-colors cursor-pointer">
                  <div className="text-2xl font-bold">.com.br</div>
                  <div className="text-sm text-white/90">Brasil</div>
                </div>
                <div className="bg-white/20 rounded-xl p-4 text-center hover:bg-white/30 transition-colors cursor-pointer">
                  <div className="text-2xl font-bold">.org</div>
                  <div className="text-sm text-white/90">Organizações</div>
                </div>
                <div className="bg-white/20 rounded-xl p-4 text-center hover:bg-white/30 transition-colors cursor-pointer">
                  <div className="text-2xl font-bold">.info</div>
                  <div className="text-sm text-white/90">Informativo</div>
                </div>
                <div className="bg-white/20 rounded-xl p-4 text-center hover:bg-white/30 transition-colors cursor-pointer">
                  <div className="text-2xl font-bold">.biz</div>
                  <div className="text-sm text-white/90">Negócios</div>
                </div>
                <div className="bg-white/20 rounded-xl p-4 text-center hover:bg-white/30 transition-colors cursor-pointer">
                  <div className="text-2xl font-bold">.net</div>
                  <div className="text-sm text-white/90">Rede</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

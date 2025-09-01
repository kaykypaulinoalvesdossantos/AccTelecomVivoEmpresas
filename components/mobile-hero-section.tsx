"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Zap, Shield, Users } from "lucide-react"

export function MobileHeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-pink-600 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                <Zap className="w-4 h-4 mr-2" />
                Rede 5G Mais Rápida do Brasil
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Planos Móveis
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-white">
                  Empresariais
                </span>
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed">
                Conectividade móvel completa para sua equipe com a tecnologia 5G mais avançada, cobertura nacional e
                benefícios exclusivos para empresas.
              </p>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">5G Incluído</p>
                  <p className="text-sm text-purple-200">Velocidade até 10x maior</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Segurança Total</p>
                  <p className="text-sm text-purple-200">Proteção empresarial</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Gestão de Frota</p>
                  <p className="text-sm text-purple-200">Controle total da equipe</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-50 font-semibold px-8">
                Ver Planos Disponíveis
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                Falar com Consultor
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="/professional-business-team-using-smartphones-in-mo.png"
                alt="Equipe empresarial usando smartphones"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full blur-3xl opacity-30" />
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full blur-3xl opacity-30" />
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, CheckCircle, Zap, Globe, Shield, Users } from "lucide-react"

export function ProfessionalHeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#660099] via-[#8B00FF] to-[#E91E63]" />
      <div className="absolute inset-0 bg-black/20" />

      {/* Geometric patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/30 rounded-full" />
        <div className="absolute top-40 right-32 w-24 h-24 border border-white/20 rounded-lg rotate-45" />
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-white/10 rounded-full" />
      </div>

      <div className="relative container mx-auto px-4 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 text-white">
            <div className="space-y-6">
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                <Zap className="w-4 h-4 mr-2" />
                Líder em Conectividade Empresarial
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
                Transforme seu
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  negócio digital
                </span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
                Conectividade de alta performance, soluções digitais avançadas e suporte especializado para empresas que
                buscam excelência tecnológica e resultados excepcionais.
              </p>
            </div>

            {/* Key metrics */}
            <div className="grid grid-cols-3 gap-8 py-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">1GB</div>
                <div className="text-sm text-white/80">Velocidade Fibra</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">5G</div>
                <div className="text-sm text-white/80">Tecnologia Móvel</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">24/7</div>
                <div className="text-sm text-white/80">Suporte Técnico</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-[#660099] hover:bg-white/90 font-semibold">
                Solicitar Proposta
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
              >
                <Play className="mr-2 h-5 w-5" />
                Ver Demonstração
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-sm text-white/80">Instalação em 48h</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-sm text-white/80">SLA 99.9% uptime</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-sm text-white/80">Suporte especializado</span>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="relative z-20 w-full max-w-lg">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20">
                <img
                  src="/modern-business-professional-in-purple-shirt-using.png"
                  alt="Executivo Vivo Empresas"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            <div className="absolute -top-8 -left-8 z-30 bg-white rounded-2xl p-6 shadow-xl animate-float">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-[#660099]/10 rounded-lg">
                  <Globe className="h-6 w-6 text-[#660099]" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Internet Fibra</div>
                  <div className="text-sm text-gray-600">Velocidade garantida</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -right-8 z-30 bg-white rounded-2xl p-6 shadow-xl animate-float-delayed">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-[#E91E63]/10 rounded-lg">
                  <Shield className="h-6 w-6 text-[#E91E63]" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Segurança Total</div>
                  <div className="text-sm text-gray-600">Proteção avançada</div>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 -right-12 z-30 bg-white rounded-2xl p-4 shadow-xl animate-pulse">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-[#660099]" />
                <div className="text-sm font-semibold text-gray-900">+50k empresas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

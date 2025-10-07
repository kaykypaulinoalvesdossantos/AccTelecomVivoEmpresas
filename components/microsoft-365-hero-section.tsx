"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Cloud, Shield, Users, Zap } from "lucide-react"

export function Microsoft365HeroSection() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Background with gradient */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #660099 0%, #380054 50%, #EB3C7D 100%)' }} />
      <div className="absolute inset-0 bg-black/20" />

      {/* Geometric patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/30 rounded-full" />
        <div className="absolute top-40 right-32 w-24 h-24 border border-white/20 rounded-lg rotate-45" />
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-white/10 rounded-full" />
      </div>

      <div className="relative container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-white">
            <div className="space-y-6">
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                <Cloud className="w-4 h-4 mr-2" />
                MICROSOFT 365
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white">
                Produtividade e colaboração para sua empresa
              </h1>

              <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
                Microsoft 365 Business Basic oferece as ferramentas essenciais para comunicação, 
                colaboração e produtividade da sua equipe, com segurança avançada e gerenciamento simplificado.
              </p>
            </div>

            {/* Key features */}
            <div className="grid grid-cols-2 gap-6 py-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/20">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">Segurança Avançada</div>
                  <div className="text-sm text-white/80">Proteção de dados</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/20">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">Colaboração</div>
                  <div className="text-sm text-white/80">Trabalho em equipe</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/20">
                  <Cloud className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">Nuvem</div>
                  <div className="text-sm text-white/80">Acesso em qualquer lugar</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/20">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">Produtividade</div>
                  <div className="text-sm text-white/80">Ferramentas essenciais</div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-[#660099] hover:bg-white/90 font-semibold"
                onClick={() => window.open('https://wa.me/551123629665?text=Olá! Gostaria de saber mais sobre Microsoft 365', '_blank')}
              >
                Falar com Especialista
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                onClick={() => window.open('https://wa.me/551123629665?text=Olá! Gostaria de agendar uma consultoria sobre Microsoft 365', '_blank')}
              >
                Agendar Consultoria
              </Button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative flex items-center justify-center">
            <div className="relative z-20 w-full max-w-lg">
              <div className="w-full overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/modern-business-professional-using-smartphone-and-.png"
                  alt="Profissional usando Microsoft 365"
                  className="w-full h-auto object-cover object-center"
                />
              </div>
            </div>

            {/* Floating cards */}
            <div className="absolute -top-8 -left-8 z-30 bg-white rounded-2xl p-6 shadow-xl animate-float">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-[#660099]/10 rounded-lg">
                  <Cloud className="h-6 w-6 text-[#660099]" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Microsoft 365</div>
                  <div className="text-sm text-gray-600">Business Basic</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -right-8 z-30 bg-white rounded-2xl p-6 shadow-xl animate-float-delayed">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-[#EB3C7D]/10 rounded-lg">
                  <Shield className="h-6 w-6 text-[#EB3C7D]" />
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
                <div className="text-sm font-semibold text-gray-900">+50 usuários</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


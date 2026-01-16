"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Video, MessageCircle } from "lucide-react"

export function MicrosoftTeamsHeroSection() {
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
                <Users className="w-4 h-4 mr-2" />
                MICROSOFT TEAMS
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white">
                Conecte sua equipe em qualquer lugar
              </h1>

              <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
                Microsoft Teams é a plataforma ideal de comunicação e colaboração online para trabalho
                remoto e híbrido, suportando até 300 pessoas em videoconferências e permitindo
                compartilhamento de arquivos em diversos formatos.
              </p>
            </div>

            {/* Price Box */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">A partir de R$ 22,62/mês</div>
                <div className="text-white/80 text-sm">Por usuário</div>
              </div>
            </div>

            {/* Key features */}
            <div className="grid grid-cols-3 gap-6 py-8">
              <div className="text-center">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-white/20 mx-auto mb-3">
                  <Video className="w-6 h-6 text-white" />
                </div>
                <div className="font-semibold text-white text-sm">Videoconferências</div>
                <div className="text-xs text-white/80">Até 300 pessoas</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-white/20 mx-auto mb-3">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div className="font-semibold text-white text-sm">Chat e Colaboração</div>
                <div className="text-xs text-white/80">Tempo real</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-white/20 mx-auto mb-3">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="font-semibold text-white text-sm">Integração</div>
                <div className="text-xs text-white/80">Microsoft 365</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-[#660099] hover:bg-white/90 font-semibold"
                asChild
              >
                <a href="https://wa.me/5511989150001?text=Olá! Gostaria de contratar Microsoft Teams" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  Contratar
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                asChild
              >
                <a href="https://wa.me/5511989150001?text=Olá! Gostaria de saber mais sobre Microsoft Teams" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  Mais Detalhes
                </a>
              </Button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative flex items-center justify-center">
            <div className="relative z-20 w-full max-w-lg">
              <div className="w-full overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/professional-business-team-using-smartphones-in-mo.png"
                  alt="Equipe usando Microsoft Teams"
                  className="w-full h-auto object-cover object-center"
                />
              </div>
            </div>

            {/* Floating cards */}
            <div className="absolute -top-8 -left-8 z-30 bg-white rounded-2xl p-6 shadow-xl animate-float">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-[#660099]/10 rounded-lg">
                  <Users className="h-6 w-6 text-[#660099]" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Microsoft Teams</div>
                  <div className="text-sm text-gray-600">Colaboração em tempo real</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -right-8 z-30 bg-white rounded-2xl p-6 shadow-xl animate-float-delayed">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-[#EB3C7D]/10 rounded-lg">
                  <Video className="h-6 w-6 text-[#EB3C7D]" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Videoconferências</div>
                  <div className="text-sm text-gray-600">Até 300 participantes</div>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 -right-12 z-30 bg-white rounded-2xl p-4 shadow-xl animate-pulse">
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-5 w-5 text-[#660099]" />
                <div className="text-sm font-semibold text-gray-900">Chat integrado</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


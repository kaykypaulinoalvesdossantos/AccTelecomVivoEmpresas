"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Cloud, ArrowRight, Shield, Globe, Server } from "lucide-react"

export function AzureHeroSection() {
  return (
    <section className="relative text-white overflow-hidden py-20 lg:py-32" style={{ background: 'linear-gradient(135deg, #660099 0%, #380054 50%, #EB3C7D 100%)' }}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute top-20 left-20 w-72 h-72 rounded-full blur-3xl animate-pulse" style={{ background: 'radial-gradient(circle, rgba(255, 153, 0, 0.2) 0%, rgba(255, 184, 76, 0.1) 100%)' }} />
      <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000" style={{ background: 'radial-gradient(circle, rgba(235, 60, 125, 0.2) 0%, rgba(102, 0, 153, 0.1) 100%)' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="text-white border-white/30 hover:bg-white/30" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                <Cloud className="w-4 h-4 mr-2" />
                MICROSOFT PARTNER OFICIAL
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                AZURE:
                <span className="block" style={{ background: 'linear-gradient(90deg, #FFB84C 0%, #FFFFFF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Solução completa em nuvem
                </span>
              </h1>
              <p className="text-xl leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Transforme sua empresa com a plataforma de nuvem mais completa e segura do mercado.
                Microsoft Azure oferece soluções híbridas, inteligência artificial e integração total com Microsoft 365.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                  <Cloud className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Nuvem Híbrida</p>
                  <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Consistente e segura</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Segurança Total</p>
                  <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Proteção de dados</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">100 Países</p>
                  <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Cobertura global</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-white font-semibold px-8" style={{ backgroundColor: '#FF9900' }} asChild>
                <a href="https://wa.me/5511989150001?text=Olá! Gostaria de saber mais sobre Microsoft Azure Cloud na Vivo Empresas" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  Solicitar Contato
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent" asChild>
                <a href="https://wa.me/5511989150001?text=Olá! Gostaria de agendar uma consultoria gratuita sobre Azure Cloud" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  Consultoria Gratuita
                </a>
              </Button>
            </div>
          </div>

          <div className="relative lg:mt-0 mt-12">
            <div className="relative z-10">
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:max-w-none">
                <div className="rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  <Cloud className="h-8 w-8 text-white mx-auto mb-2" />
                  <h3 className="font-semibold text-white">Microsoft Azure</h3>
                </div>
                <div className="rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  <Shield className="h-8 w-8 text-white mx-auto mb-2" />
                  <h3 className="font-semibold text-white">Segurança Garantida</h3>
                </div>
                <div className="rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  <Server className="h-8 w-8 text-white mx-auto mb-2" />
                  <h3 className="font-semibold text-white">Microsoft 365</h3>
                </div>
                <div className="rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  <Globe className="h-8 w-8 text-white mx-auto mb-2" />
                  <h3 className="font-semibold text-white">100 Países</h3>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 rounded-full blur-3xl opacity-30" style={{ background: 'radial-gradient(circle, #FF9900 0%, #EB3C7D 100%)' }} />
            <div className="absolute -bottom-4 -left-4 w-72 h-72 rounded-full blur-3xl opacity-30" style={{ background: 'radial-gradient(circle, #660099 0%, #EB3C7D 100%)' }} />
          </div>
        </div>
      </div>
    </section>
  )
}

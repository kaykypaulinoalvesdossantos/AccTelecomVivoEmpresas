"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Zap, Wifi, Smartphone, Shield } from "lucide-react"

export function MelhoresOfertasHeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-pink-600 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 text-sm sm:text-base">
                <Zap className="w-4 h-4 mr-2" />
                Melhores Ofertas
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Confira aqui as melhores ofertas para sua empresa
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-purple-100 leading-relaxed">
                Encontre os melhores planos e soluções para impulsionar seu negócio com condições especiais e tecnologia de ponta.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
              <div className="flex items-center space-x-3 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Wifi className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">Internet</div>
                  <div className="text-purple-200 text-xs">Fibra e Dedicada</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">Móvel</div>
                  <div className="text-purple-200 text-xs">5G e Planos</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">Soluções</div>
                  <div className="text-purple-200 text-xs">Digitais</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 font-semibold"
                asChild
              >
                <a href="https://wa.me/551123629665" target="_blank" rel="noopener noreferrer">
                  Fale Conosco
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent"
                asChild
              >
                <a href="#planos-moveis">Ver Planos</a>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 flex items-center justify-center backdrop-blur-sm">
              <img
                src="/modern-business-professional-using-smartphone-and-.png"
                alt="Profissional usando tecnologia Vivo"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-pink-500 text-white p-4 rounded-2xl shadow-lg animate-bounce">
              <div className="text-sm font-semibold">5G</div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-purple-500 text-white p-4 rounded-2xl shadow-lg animate-pulse">
              <div className="text-sm font-semibold">Fibra</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

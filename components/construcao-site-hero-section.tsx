"use client"

import React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Monitor, Star, Users, CheckCircle } from "lucide-react"

export default function ConstrucaoSiteHeroSection() {
  return (
    <section className="relative py-16 bg-gradient-to-br from-[#660099] via-[#8B2C9E] to-[#EB3C7D] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-repeat opacity-5"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                <Monitor className="w-4 h-4 mr-2" />
                Construtor de Sites
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Sua empresa com
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  site profissional
                </span>
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed">
                Crie seu site profissional sem conhecimento técnico. 
                Templates prontos, domínio grátis e hospedagem incluída.
              </p>
            </div>

            {/* Price Badge */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-sm">
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-white">R$ 6,90</div>
                <div className="text-white/80 text-lg">/ mês</div>
                <div className="text-white/70 text-sm">A partir de</div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-white text-[#660099] hover:bg-white/90 font-semibold cursor-pointer px-8 py-4 text-lg"
              >
                Solicitar Contato
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-white/80 text-sm">Templates</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-white/80 text-sm">Suporte</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">SSL</div>
                <div className="text-white/80 text-sm">Gratuito</div>
              </div>
            </div>
          </div>

          {/* Right Content - Website Template Preview */}
          <div className="relative">
            <div className="relative z-10">
              {/* Website Template Preview */}
              <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-white">
                {/* Browser Header */}
                <div className="bg-gray-100 p-3 flex items-center space-x-2 border-b">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-white rounded px-3 py-1 text-sm text-gray-600 text-center">
                    www.empresa.com.br
                  </div>
                </div>

                {/* Website Content */}
                <div className="p-6 h-full bg-gradient-to-br from-gray-50 to-white">
                  {/* Header */}
                  <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-[#660099] rounded-lg flex items-center justify-center">
                        <Monitor className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-lg font-bold text-gray-900">Minha Empresa</span>
                    </div>
                    <nav className="hidden md:flex space-x-6">
                      <a href="#" className="text-gray-600 hover:text-[#660099] text-sm">Início</a>
                      <a href="#" className="text-gray-600 hover:text-[#660099] text-sm">Sobre</a>
                      <a href="#" className="text-gray-600 hover:text-[#660099] text-sm">Serviços</a>
                      <a href="#" className="text-gray-600 hover:text-[#660099] text-sm">Contato</a>
                    </nav>
                  </div>

                  {/* Hero Section */}
                  <div className="text-center space-y-6 mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">
                      Bem-vindo à nossa empresa
                    </h1>
                    <p className="text-gray-600 max-w-md mx-auto">
                      Oferecemos soluções profissionais para transformar seu negócio
                    </p>
                    <button className="bg-[#660099] text-white px-6 py-3 rounded-lg hover:bg-[#660099]/90 transition-colors">
                      Saiba Mais
                    </button>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center space-y-2">
                      <div className="w-12 h-12 bg-[#660099]/10 rounded-xl mx-auto flex items-center justify-center">
                        <Monitor className="w-6 h-6 text-[#660099]" />
                      </div>
                      <h3 className="text-sm font-semibold text-gray-900">Design Moderno</h3>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="w-12 h-12 bg-[#EB3C7D]/10 rounded-xl mx-auto flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-[#EB3C7D]" />
                      </div>
                      <h3 className="text-sm font-semibold text-gray-900">Fácil de Usar</h3>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="w-12 h-12 bg-green-100 rounded-xl mx-auto flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <h3 className="text-sm font-semibold text-gray-900">Suporte 24/7</h3>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="absolute bottom-4 left-6 right-6">
                    <div className="bg-gray-100 rounded-lg p-3 text-center">
                      <p className="text-xs text-gray-500">
                        © 2024 Minha Empresa. Todos os direitos reservados.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Search, Laptop, Star, TrendingUp, Users, Target, BarChart3 } from "lucide-react"

export default function SeoToolIntroSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Entenda como funciona o SEO Tool
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Segundo estudo realizado pela BrightEdge, 68% das experiências online começam com uma busca. 
                  Isso significa que ter um bom posicionamento nos mecanismos de busca é fundamental para o sucesso do seu negócio.
                </p>
                <p>
                  O SEO Tool da Vivo Empresas ajuda você a otimizar seu site para palavras-chave relevantes 
                  nos principais mecanismos de busca, como Google e Yahoo, aumentando sua visibilidade online.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button 
                size="lg" 
                className="bg-[#660099] hover:bg-[#660099]/90 cursor-pointer"
              >
                Ver planos
              </Button>
            </div>
          </div>

          {/* Right Content - Website Preview */}
          <div className="relative">
            <div className="relative z-10">
              {/* Website Preview */}
              <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl bg-white">
                {/* Browser Header */}
                <div className="bg-gray-100 p-3 flex items-center space-x-2 border-b">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-white rounded px-3 py-1 text-sm text-gray-600 text-center">
                    suaempresa.com.br
                  </div>
                </div>

                {/* Website Content */}
                <div className="p-6 h-full bg-gradient-to-br from-gray-50 to-white">
                  {/* Header */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-[#660099] rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm font-bold">SE</span>
                      </div>
                      <span className="text-lg font-bold text-gray-900">SUA EMPRESA</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Hero Section */}
                  <div className="text-center space-y-4 mb-6">
                    <h1 className="text-2xl font-bold text-gray-900">
                      Bem-vindo à SUA EMPRESA
                    </h1>
                    <p className="text-gray-600 text-sm">
                      Soluções profissionais para seu negócio
                    </p>
                    <button className="bg-[#660099] text-white px-4 py-2 rounded-lg text-sm">
                      Conheça nossos serviços
                    </button>
                  </div>

                  {/* Services Grid */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="text-center space-y-2">
                      <div className="w-8 h-8 bg-[#660099]/10 rounded-lg mx-auto flex items-center justify-center">
                        <Target className="w-4 h-4 text-[#660099]" />
                      </div>
                      <span className="text-xs text-gray-600">Serviços</span>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="w-8 h-8 bg-[#EB3C7D]/10 rounded-lg mx-auto flex items-center justify-center">
                        <Users className="w-4 h-4 text-[#EB3C7D]" />
                      </div>
                      <span className="text-xs text-gray-600">Sobre</span>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="w-8 h-8 bg-[#660099]/10 rounded-lg mx-auto flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-[#660099]" />
                      </div>
                      <span className="text-xs text-gray-600">Contato</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Search Icon */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-full flex items-center justify-center shadow-lg">
                <Search className="w-6 h-6 text-white" />
              </div>

              {/* Floating Analytics Elements */}
              <div className="absolute top-1/4 -left-6 w-8 h-8 bg-[#660099]/20 rounded-full flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-[#660099]" />
              </div>
              <div className="absolute bottom-1/4 -right-6 w-6 h-6 bg-[#EB3C7D]/20 rounded-full flex items-center justify-center">
                <BarChart3 className="w-3 h-3 text-[#EB3C7D]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

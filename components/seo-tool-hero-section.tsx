"use client"

import React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search, Monitor, BarChart3, TrendingUp } from "lucide-react"

export default function SeoToolHeroSection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#660099] via-[#8B2C9E] to-[#EB3C7D] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-repeat opacity-5"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
              SEO TOOL
            </Badge>

            {/* Title */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Seu site nas{" "}
                <span className="text-yellow-400">primeiras posições</span>
              </h1>
              <p className="text-white/90 text-xl leading-relaxed max-w-lg">
                Aumente o desempenho da sua marca nos principais mecanismos de busca da internet
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button 
                size="lg" 
                className="bg-white text-[#660099] hover:bg-white/90 cursor-pointer"
              >
                Saiba mais
              </Button>
            </div>
          </div>

          {/* Right Content - SEO Dashboard Preview */}
          <div className="relative">
            <div className="relative z-10">
              {/* SEO Dashboard Preview */}
              <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-white">
                {/* Browser Header */}
                <div className="bg-gray-100 p-3 flex items-center space-x-2 border-b">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-white rounded px-3 py-1 text-sm text-gray-600 text-center">
                    seo-tool.vivo.com.br
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6 h-full bg-gradient-to-br from-gray-50 to-white">
                  {/* Header */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-lg flex items-center justify-center">
                        <Search className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-lg font-bold text-gray-900">SEO Dashboard</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <span>Última atualização: há 2h</span>
                    </div>
                  </div>

                  {/* Cards Grid */}
                  <div className="grid grid-cols-1 gap-4 mb-6">
                    {/* Google Position Card */}
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <Search className="w-4 h-4 text-[#660099]" />
                        <span className="text-sm font-semibold text-gray-800">Posição no Google</span>
                        <Badge className="bg-green-100 text-green-800 text-xs">Posição 3</Badge>
                      </div>
                      <div className="text-xs text-gray-600">
                        "sua empresa" - Resultado orgânico
                      </div>
                    </div>
                    
                    {/* Organic Traffic Card */}
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <TrendingUp className="w-4 h-4 text-[#EB3C7D]" />
                        <span className="text-sm font-semibold text-gray-800">Tráfego Orgânico</span>
                        <Badge className="bg-blue-100 text-blue-800 text-xs">+25%</Badge>
                      </div>
                      <div className="text-xs text-gray-600">
                        1.2k visitantes este mês
                      </div>
                    </div>
                  </div>

                  {/* Performance Chart */}
                  <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-sm font-semibold text-gray-800">Performance</h3>
                      <BarChart3 className="w-4 h-4 text-gray-600" />
                    </div>
                    <div className="h-20 bg-gradient-to-r from-[#660099]/20 to-[#EB3C7D]/20 rounded-lg flex items-end space-x-1 p-2">
                      <div className="w-4 h-8 bg-[#660099] rounded-sm"></div>
                      <div className="w-4 h-12 bg-[#660099] rounded-sm"></div>
                      <div className="w-4 h-16 bg-[#EB3C7D] rounded-sm"></div>
                      <div className="w-4 h-20 bg-[#EB3C7D] rounded-sm"></div>
                      <div className="w-4 h-14 bg-[#660099] rounded-sm"></div>
                      <div className="w-4 h-18 bg-[#EB3C7D] rounded-sm"></div>
                    </div>
                    <div className="text-xs text-gray-500 mt-2">Últimos 6 meses</div>
                  </div>

                  {/* Keywords Status Bar */}
                  <div className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-lg p-3 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-semibold">10 palavras-chave monitoradas</div>
                        <div className="text-xs opacity-90">8 melhoraram de posição</div>
                      </div>
                      <Monitor className="w-6 h-6 opacity-80" />
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

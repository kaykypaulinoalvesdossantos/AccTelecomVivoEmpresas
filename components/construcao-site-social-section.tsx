"use client"

import { Share2, MapPin, MessageCircle, Music, Cloud } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ConstrucaoSiteSocialSection() {
  return (
    <section className="py-24 bg-gradient-to-r from-[#660099] to-[#EB3C7D] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#660099]/90 to-[#EB3C7D]/90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2">
              <Share2 className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium">Redes Sociais</span>
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Um site profissional para{" "}
                <span className="text-yellow-400">divulgar nas redes sociais</span>
              </h2>
              <p className="text-white/90 text-lg leading-relaxed max-w-lg">
                Integre seu site com as principais redes sociais e plataformas. 
                Conecte com Google Maps, Twitter, SoundCloud e Dropbox para uma experiência completa.
              </p>
            </div>

            {/* Integration Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-colors cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white font-medium"># Google Maps</span>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-colors cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white font-medium"># Twitter</span>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-colors cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <Music className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white font-medium"># SoundCloud</span>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-colors cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <Cloud className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white font-medium"># Dropbox</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-[#660099] cursor-pointer bg-transparent"
              >
                Ver Integrações
              </Button>
            </div>
          </div>

          {/* Right Content - Mini Website Template */}
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
                    salao-de-beleza.com.br
                  </div>
                </div>

                {/* Website Content */}
                <div className="p-6 h-full bg-gradient-to-br from-gray-50 to-white">
                  {/* Header */}
                  <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-lg flex items-center justify-center">
                        <Share2 className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-lg font-bold text-gray-900">Salão de Beleza</span>
                    </div>
                    <nav className="hidden md:flex space-x-6">
                      <a href="#" className="text-gray-600 hover:text-[#660099] text-sm">Início</a>
                      <a href="#" className="text-gray-600 hover:text-[#660099] text-sm">Serviços</a>
                      <a href="#" className="text-gray-600 hover:text-[#660099] text-sm">Contato</a>
                    </nav>
                  </div>

                  {/* Hero Section */}
                  <div className="text-center space-y-6 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-full mx-auto flex items-center justify-center">
                      <Share2 className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900">
                      Salão de Beleza
                    </h1>
                    <p className="text-gray-600 text-sm max-w-md mx-auto">
                      CABELEIREIRO E ESTÉTICA PARA O HOMEM CONTEMPORÂNEO
                    </p>
                    <button className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
                      Agendar Horário
                    </button>
                  </div>

                  {/* Services Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="text-center space-y-2">
                      <div className="w-12 h-12 bg-[#660099]/10 rounded-xl mx-auto flex items-center justify-center">
                        <span className="text-[#660099] text-lg">✂️</span>
                      </div>
                      <h3 className="text-sm font-semibold text-gray-900">Corte</h3>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="w-12 h-12 bg-[#EB3C7D]/10 rounded-xl mx-auto flex items-center justify-center">
                        <span className="text-[#EB3C7D] text-lg">💇</span>
                      </div>
                      <h3 className="text-sm font-semibold text-gray-900">Barba</h3>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="w-12 h-12 bg-[#660099]/10 rounded-xl mx-auto flex items-center justify-center">
                        <span className="text-[#660099] text-lg">💆</span>
                      </div>
                      <h3 className="text-sm font-semibold text-gray-900">Estética</h3>
                    </div>
                  </div>

                  {/* Social Media Links */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex justify-center space-x-3">
                      {/* Facebook */}
                      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs font-bold">f</span>
                      </div>
                      {/* LinkedIn */}
                      <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs font-bold">in</span>
                      </div>
                      {/* YouTube */}
                      <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs">▶</span>
                      </div>
                      {/* Instagram */}
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs">📷</span>
                      </div>
                      {/* WhatsApp */}
                      <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs">💬</span>
                      </div>
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
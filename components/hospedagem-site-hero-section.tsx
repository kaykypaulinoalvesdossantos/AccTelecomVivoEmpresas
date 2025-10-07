"use client"

import React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Server, CheckCircle, Star, Users } from "lucide-react"

export function HospedagemSiteHeroSection() {
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
                <Server className="w-4 h-4 mr-2" />
                Hospedagem Web
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Servidores de
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  alto desempenho
                </span>
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed">
                Hospedagem web profissional com alta disponibilidade, segurança avançada e velocidade máxima para seu site.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-[#660099] hover:bg-white/90 font-semibold cursor-pointer"
              >
                Quero saber agora
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-[#660099] cursor-pointer bg-transparent"
              >
                Ver demonstração
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">99.9%</div>
                <div className="text-white/80 text-sm">Uptime</div>
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

          {/* Right Content - Server Dashboard */}
          <div className="relative">
            <div className="relative z-10">
              {/* Server Dashboard - Compact Layout */}
              <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl bg-white">
                {/* Dashboard Header */}
                <div className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] p-4 text-white">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                      <Server className="w-5 h-5 text-[#660099]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Web Hosting</h3>
                      <p className="text-white/90 text-sm">Servidores de alta performance</p>
                    </div>
                  </div>
                </div>

                {/* Dashboard Content - Compact Layout */}
                <div className="p-4 h-full">
                  <div className="space-y-4 h-full">
                    {/* Server Status Row */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-green-50 rounded-lg p-3 text-center">
                        <div className="w-6 h-6 bg-green-500 rounded-full mx-auto mb-1 flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <div className="text-sm font-bold text-green-600">Online</div>
                        <div className="text-xs text-gray-600">Servidor 1</div>
                      </div>
                      <div className="bg-green-50 rounded-lg p-3 text-center">
                        <div className="w-6 h-6 bg-green-500 rounded-full mx-auto mb-1 flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <div className="text-sm font-bold text-green-600">Online</div>
                        <div className="text-xs text-gray-600">Servidor 2</div>
                      </div>
                      <div className="bg-green-50 rounded-lg p-3 text-center">
                        <div className="w-6 h-6 bg-green-500 rounded-full mx-auto mb-1 flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <div className="text-sm font-bold text-green-600">Online</div>
                        <div className="text-xs text-gray-600">Servidor 3</div>
                      </div>
                    </div>

                    {/* Server Rack Visualization */}
                    <div className="bg-gray-50 rounded-lg p-3 flex-1">
                      <h4 className="font-semibold text-gray-900 mb-3 text-sm">Rack de Servidores</h4>
                      <div className="grid grid-cols-4 gap-1 h-full">
                        {Array.from({ length: 16 }).map((_, i) => (
                          <div key={i} className="bg-gradient-to-b from-[#660099] to-[#8B2C9E] rounded h-6 flex items-center justify-center">
                            <div className="w-1 h-1 bg-white rounded-full"></div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-2 text-xs text-gray-600">
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>16 unidades ativas</span>
                        </div>
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

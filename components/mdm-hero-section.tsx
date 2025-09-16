"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Smartphone } from "lucide-react"

export function MDMHeroSection(): React.JSX.Element {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#660099] via-[#8B00FF] to-[#EB3C7D] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-white/5 to-white/5 rounded-full blur-2xl animate-spin-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-white">
            <Badge className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-2 mb-6">
              <Shield className="w-4 h-4 mr-2" />
              GESTÃO DE DISPOSITIVOS
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Segurança com a solução MDM
            </h1>

            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <Badge className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-2">
                  R$ 6,90/mês
                </Badge>
                <Badge className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-2">
                  Bloqueio de chip
                </Badge>
              </div>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Controle total dos dispositivos da sua empresa com segurança e eficiência
              </p>
            </div>

            <Button 
              size="lg" 
              className="bg-white text-[#660099] hover:bg-white/90 font-semibold px-8 py-4 text-lg"
              asChild
            >
              <a href="https://wa.me/551123629665" target="_blank" rel="noopener noreferrer">
                WhatsApp
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>

          {/* Right Side - MDM Image */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="w-full h-80 bg-gradient-to-br from-[#660099] to-[#EB3C7D] rounded-xl flex items-center justify-center relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full"></div>
                  <div className="absolute top-8 right-8 w-1 h-1 bg-white rounded-full"></div>
                  <div className="absolute bottom-6 left-1/3 w-1.5 h-1.5 bg-white rounded-full"></div>
                  <div className="absolute top-1/2 right-4 w-1 h-1 bg-white rounded-full"></div>
                  <div className="absolute bottom-8 right-1/4 w-2 h-2 bg-white rounded-full"></div>
                </div>
                
                <div className="text-center text-white relative z-10">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="w-12 h-12" />
                  </div>
                  <p className="text-lg font-semibold mb-2">Executiva com Smartphone</p>
                  <p className="text-sm opacity-80">Gestão de dispositivos</p>
                  
                  {/* Security Icons */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Smartphone className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Elements */}
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-r from-[#660099]/20 to-[#EB3C7D]/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-gradient-to-r from-[#EB3C7D]/20 to-[#660099]/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

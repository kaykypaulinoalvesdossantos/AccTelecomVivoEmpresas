"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { BarChart3, Zap, Shield } from "lucide-react"

export function VivoGestaoEfficiencySection(): React.JSX.Element {
  return (
    <section className="py-20 bg-gradient-to-r from-[#660099] to-[#EB3C7D] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              EFICIÊNCIA DIGITAL
            </h2>
            
            <h3 className="text-2xl font-bold mb-4">
              Mais controle, mais produtividade
            </h3>
            
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Gestão ágil e segura com dados em tempo real
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <span className="text-white/90">Controle total de dados e voz</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-white" />
                </div>
                <span className="text-white/90">Relatórios em tempo real</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <span className="text-white/90">Segurança e conformidade</span>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-white text-[#660099] hover:bg-white/90 font-semibold px-8 py-4 text-lg"
              asChild
            >
              <a href="https://wa.me/551123629665" target="_blank" rel="noopener noreferrer">
                <BarChart3 className="w-5 h-5 mr-2" />
                Acessar Vivo Gestão
              </a>
            </Button>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="w-full h-80 bg-gradient-to-br from-white/20 to-white/10 rounded-xl flex items-center justify-center relative overflow-hidden">
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
                    <BarChart3 className="w-12 h-12" />
                  </div>
                  <p className="text-lg font-semibold mb-2">Executiva com Tablet</p>
                  <p className="text-sm opacity-80">Gestão digital</p>
                  
                  {/* Efficiency Icons */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Shield className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Elements */}
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-r from-white/10 to-white/5 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-gradient-to-r from-white/5 to-white/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

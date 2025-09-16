"use client"

import React from "react"
import { Phone, Rocket, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export function NumeroUnicoServicesSection(): React.JSX.Element {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Service Modules */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Serviços */}
          <div className="bg-gradient-to-br from-purple-800 to-purple-900 rounded-2xl p-6 lg:p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="text-sm font-medium text-purple-200 mb-2">SERVIÇOS</div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6">
                Para deixar sua linha fixa mais completa
              </h3>
              
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-2xl flex items-center justify-center">
                  <Phone className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <Button 
                asChild
                className="w-full bg-white text-purple-900 hover:bg-purple-50 font-semibold text-sm sm:text-base cursor-pointer"
              >
                <a href="https://wa.me/551123629665" target="_blank" rel="noopener noreferrer">
                  Saiba mais >
                </a>
              </Button>
            </div>
            
            {/* Background decoration */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-pink-500/20 rounded-full blur-xl"></div>
          </div>

          {/* Ultra Banda Larga */}
          <div className="bg-gradient-to-br from-purple-800 to-purple-900 rounded-2xl p-6 lg:p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="text-sm font-medium text-purple-200 mb-2">ULTRA BANDA LARGA</div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6">
                Planos de internet corporativa com a qualidade Vivo
              </h3>
              
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <Button 
                asChild
                className="w-full bg-white text-purple-900 hover:bg-purple-50 font-semibold text-sm sm:text-base cursor-pointer"
              >
                <a href="https://wa.me/551123629665" target="_blank" rel="noopener noreferrer">
                  Confira >
                </a>
              </Button>
            </div>
            
            {/* Background decoration */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"></div>
          </div>

          {/* Conectividade */}
          <div className="bg-gradient-to-br from-purple-800 to-purple-900 rounded-2xl p-6 lg:p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="text-sm font-medium text-purple-200 mb-2">CONECTIVIDADE</div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6">
                Gerenciamento e segurança no compartilhamento de dados
              </h3>
              
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <Button 
                asChild
                className="w-full bg-white text-purple-900 hover:bg-purple-50 font-semibold text-sm sm:text-base cursor-pointer"
              >
                <a href="https://wa.me/551123629665" target="_blank" rel="noopener noreferrer">
                  Confira >
                </a>
              </Button>
            </div>
            
            {/* Background decoration */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-yellow-500/20 rounded-full blur-xl"></div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 lg:mt-16 text-center">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6">
            <a href="#numero-unico" className="text-purple-600 font-medium border-b-2 border-purple-600 pb-1">
              NÚMERO ÚNICO
            </a>
            <a href="#beneficios" className="text-gray-600 hover:text-purple-600 font-medium">
              Benefícios
            </a>
            <a href="#diferenciais" className="text-gray-600 hover:text-purple-600 font-medium">
              Diferenciais Vivo Empresas
            </a>
          </div>
          
          <div className="text-sm text-gray-600 mb-6">
            Pessoas portadoras de necessidades especiais de fala/audição: 142.
          </div>
          
          <Button 
            asChild
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg cursor-pointer"
          >
            <a href="https://wa.me/551123629665" target="_blank" rel="noopener noreferrer">
              <Phone className="w-4 h-4 mr-2" />
              Compre direto pelo WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

"use client"

import React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Globe, CheckCircle, Star } from "lucide-react"

export function RegistroDominioHeroSection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#660099] via-[#8B2C9E] to-[#EB3C7D] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Left Content */}
          <div className="text-white space-y-8">
            {/* Badge */}
            <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 px-6 py-3 text-lg">
              <Globe className="w-5 h-5 mr-2" />
              Registro de Domínio
            </Badge>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Domínio com a cara da sua
                <span className="block text-white/90">empresa</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/90 max-w-2xl leading-relaxed">
                Aumente a credibilidade da sua empresa com domínio personalizado
              </p>
            </div>

            {/* Pricing */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="text-3xl font-bold">12 MESES</div>
                <div className="text-4xl font-bold">Por apenas R$39.90</div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-[#660099] hover:bg-white/90 px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                Contrate Já
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <Globe className="w-8 h-8 text-white mx-auto mb-2" />
                <p className="text-sm text-white/80">Domínio Personalizado</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-8 h-8 text-white mx-auto mb-2" />
                <p className="text-sm text-white/80">Credibilidade</p>
              </div>
              <div className="text-center">
                <Star className="w-8 h-8 text-white mx-auto mb-2" />
                <p className="text-sm text-white/80">Profissionalismo</p>
              </div>
            </div>
          </div>

          {/* Right Content - Simple Dashboard */}
          <div className="relative">
            <div className="relative z-10">
              {/* Domain Registration Dashboard */}
              <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-white">
                {/* Dashboard Header */}
                <div className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] p-4 text-white">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                      <Globe className="w-5 h-5 text-[#660099]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Registro de Domínio</h3>
                      <p className="text-white/90 text-sm">Domínio personalizado</p>
                    </div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-4 space-y-4">
                  {/* Available Extensions */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Extensões Disponíveis</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-gray-100 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-gray-700">.com</div>
                        <div className="text-sm text-gray-500">R$ 39,90/ano</div>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-gray-700">.com.br</div>
                        <div className="text-sm text-gray-500">R$ 39,90/ano</div>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-gray-700">.org</div>
                        <div className="text-sm text-gray-500">R$ 39,90/ano</div>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-gray-700">.net</div>
                        <div className="text-sm text-gray-500">R$ 39,90/ano</div>
                      </div>
                    </div>
                  </div>

                  {/* Domain Info */}
                  <div className="bg-gray-50 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-3">Informações do Serviço</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Registro válido por:</span>
                        <span className="font-semibold text-gray-700">1 ano</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Renovação:</span>
                        <span className="font-semibold text-gray-700">Automática</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Suporte:</span>
                        <span className="font-semibold text-gray-700">24/7</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#660099]/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#EB3C7D]/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

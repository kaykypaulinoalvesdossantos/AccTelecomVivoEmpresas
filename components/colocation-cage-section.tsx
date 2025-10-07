"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Lock, Settings, Wrench } from "lucide-react"

export function ColocationCageSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge className="bg-[#660099]/10 text-[#660099] border-[#660099]/20">
                <Shield className="w-4 h-4 mr-2" />
                Segurança Avançada
              </Badge>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Mais segurança com
                <span className="block text-[#660099]">Cage</span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                O Cage é um recinto robusto de aço projetado para subdividir áreas do data center, 
                proporcionando maior segurança para servidores e data centers.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Características que garantem integridade estrutural, durabilidade, 
                modularidade e reconfigurabilidade para máxima proteção.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-[#660099] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 leading-relaxed">Integridade estrutural robusta</span>
              </div>
              <div className="flex items-start space-x-3">
                <Lock className="w-5 h-5 text-[#660099] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 leading-relaxed">Durabilidade e resistência</span>
              </div>
              <div className="flex items-start space-x-3">
                <Settings className="w-5 h-5 text-[#660099] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 leading-relaxed">Modularidade e flexibilidade</span>
              </div>
              <div className="flex items-start space-x-3">
                <Wrench className="w-5 h-5 text-[#660099] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 leading-relaxed">Reconfigurabilidade conforme necessidades</span>
              </div>
            </div>
          </div>

          {/* Right Content - Simple Icons */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gray-50 hover:bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#660099] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Integridade</h3>
                  <p className="text-gray-600 text-sm">Estrutural robusta</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gray-50 hover:bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#EB3C7D] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Durabilidade</h3>
                  <p className="text-gray-600 text-sm">E resistência</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gray-50 hover:bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#660099] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Modularidade</h3>
                  <p className="text-gray-600 text-sm">E flexibilidade</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gray-50 hover:bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#EB3C7D] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Wrench className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Reconfigurabilidade</h3>
                  <p className="text-gray-600 text-sm">Conforme necessidades</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-3xl p-12 text-white">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-6">Segurança Máxima com Cage</h3>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Proteção Robusta</h4>
                  <p className="text-white/90">Recinto de aço resistente</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Segurança Física</h4>
                  <p className="text-white/90">Controle de acesso total</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Flexibilidade</h4>
                  <p className="text-white/90">Adaptável às necessidades</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Wrench className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Reconfigurável</h4>
                  <p className="text-white/90">Modificações conforme demanda</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

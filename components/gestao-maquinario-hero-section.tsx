"use client"

import React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tractor, Wifi, Cloud, Smartphone } from "lucide-react"

export function GestaoMaquinarioHeroSection() {
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
              <Tractor className="w-5 h-5 mr-2" />
              Gestão de Maquinário
            </Badge>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Seu aliado no
                <span className="block text-white/90">agronegócio</span>
              </h1>

              <p className="text-xl lg:text-2xl text-white/90 max-w-2xl leading-relaxed">
                Gerencie aspectos importantes da frota, economizando em combustível e manutenção
                com tecnologia de ponta para o campo.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-[#660099] hover:bg-white/90 px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                asChild
              >
                <a href="https://wa.me/5511989150001?text=Olá! Gostaria de contratar a gestão de maquinário" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  Contrate
                </a>
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <Wifi className="w-8 h-8 text-white mx-auto mb-2" />
                <p className="text-sm text-white/80">Conectividade</p>
              </div>
              <div className="text-center">
                <Cloud className="w-8 h-8 text-white mx-auto mb-2" />
                <p className="text-sm text-white/80">Dados em Nuvem</p>
              </div>
              <div className="text-center">
                <Smartphone className="w-8 h-8 text-white mx-auto mb-2" />
                <p className="text-sm text-white/80">App Móvel</p>
              </div>
            </div>
          </div>

          {/* Right Content - Simple Dashboard */}
          <div className="relative">
            <div className="relative z-10">
              {/* Simple Dashboard */}
              <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-white">
                {/* Dashboard Header */}
                <div className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] p-6 text-white">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                      <Tractor className="w-5 h-5 text-[#660099]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Gestão de Maquinário</h3>
                      <p className="text-white/90 text-sm">Monitoramento agrícola</p>
                    </div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6 space-y-6">
                  {/* Stats Cards */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gray-50 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-[#660099]">24</div>
                      <div className="text-sm text-gray-600">Equipamentos</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-[#EB3C7D]">18</div>
                      <div className="text-sm text-gray-600">Ativos</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-green-600">95%</div>
                      <div className="text-sm text-gray-600">Eficiência</div>
                    </div>
                  </div>

                  {/* Simple Chart */}
                  <div className="bg-gray-50 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-4">Status dos Equipamentos</h4>
                    <div className="flex items-end space-x-2 h-20">
                      {[60, 80, 100, 85, 70, 90, 75].map((height, index) => (
                        <div
                          key={index}
                          className="bg-gradient-to-t from-[#660099] to-[#EB3C7D] rounded-t flex-1"
                          style={{ height: `${height}%` }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Atividade Recente</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-600">Trator ABC-123 operando</span>
                        <span className="text-xs text-gray-400">2 min</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span className="text-gray-600">Manutenção preventiva agendada</span>
                        <span className="text-xs text-gray-400">1h</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-600">Relatório de combustível gerado</span>
                        <span className="text-xs text-gray-400">3h</span>
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

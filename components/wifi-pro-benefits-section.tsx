"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, BarChart3, Users, Shield, Wifi } from "lucide-react"

export function WifiProBenefitsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Wi-Fi corporativo que
            <span className="block text-[#660099]">gera resultados</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Potencialize seu ponto de venda com o Wi-Fi corporativo inteligente. Capture dados, 
            conheça seu público e crie ações de marketing segmentadas para fidelizar clientes 
            e monetizar sua rede.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Adquira nossa solução
              </h3>
              
              {/* Solution Card */}
              <Card className="border-2 border-gray-100 hover:border-[#660099]/20 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-[#660099] rounded-xl flex items-center justify-center">
                        <Wifi className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-gray-900">HOSTING Wi-Fi Pro</h4>
                        <p className="text-gray-600">Solução completa para seu negócio</p>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-[#660099]" />
                        <span className="text-gray-700">Coleta de dados e estatísticas</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-[#660099]" />
                        <span className="text-gray-700">Campanhas personalizadas</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-[#660099]" />
                        <span className="text-gray-700">Integração com CRM</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-[#660099]" />
                        <span className="text-gray-700">Conformidade com a LGPD</span>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-3xl font-bold text-[#660099]">A partir de R$ 29,90/mês</p>
                          <p className="text-gray-600">Solução completa incluída</p>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Button 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-[#660099] to-[#EB3C7D] hover:from-[#5A0080] hover:to-[#D63384] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                    >
                      Contratar Wi-Fi Pro
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Content - Benefits Grid */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900 text-center lg:text-left">
              Principais benefícios
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Benefit 1 */}
              <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gray-50 hover:bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#660099] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Dados Precisos</h4>
                  <p className="text-gray-600 text-sm">
                    Obtenha dados e métricas precisas dos usuários conectados à sua rede Wi-Fi.
                  </p>
                </CardContent>
              </Card>

              {/* Benefit 2 */}
              <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gray-50 hover:bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#660099] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Conheça Seu Público</h4>
                  <p className="text-gray-600 text-sm">
                    Conheça o perfil e comportamento dos seus clientes que usam seu Wi-Fi.
                  </p>
                </CardContent>
              </Card>

              {/* Benefit 3 */}
              <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gray-50 hover:bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#660099] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Wifi className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Interação Personalizada</h4>
                  <p className="text-gray-600 text-sm">
                    Interaja com seu público via campanhas, pesquisas e enquetes personalizadas.
                  </p>
                </CardContent>
              </Card>

              {/* Benefit 4 */}
              <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gray-50 hover:bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#660099] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Segurança Total</h4>
                  <p className="text-gray-600 text-sm">
                    Bloqueie conteúdos inadequados e proteja sua rede contra acessos indevidos.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

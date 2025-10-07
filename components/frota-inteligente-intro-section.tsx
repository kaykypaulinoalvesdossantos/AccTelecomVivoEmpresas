"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Truck, MapPin, Clock } from "lucide-react"

export function FrotaInteligenteIntroSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge className="bg-[#660099]/10 text-[#660099] border-[#660099]/20">
                <Truck className="w-4 h-4 mr-2" />
                Rastreamento Veicular
              </Badge>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Frota Inteligente: rastreador de carros em
                <span className="block text-[#660099]">tempo real</span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Transforme a gestão da sua frota com nossa solução completa de rastreamento veicular. 
                Monitore todos os seus veículos em tempo real, otimize rotas e reduza custos operacionais.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-[#660099]" />
                <span className="text-gray-700">Rastreamento GPS com cobertura nacional</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-[#660099]" />
                <span className="text-gray-700">Monitoramento em tempo real 24/7</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-[#660099]" />
                <span className="text-gray-700">Relatórios detalhados e análises</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-[#660099]" />
                <span className="text-gray-700">Alertas e notificações automáticas</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-[#660099]" />
                <span className="text-gray-700">Controle de velocidade e rotas</span>
              </div>
            </div>

            {/* CTA Button */}
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] hover:from-[#5A0080] hover:to-[#D63384] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              Solicitar Contato
            </Button>
          </div>

          {/* Right Content - Benefits Cards */}
          <div className="space-y-6">
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gray-50 hover:bg-white">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#660099] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Localização Precisa</h3>
                    <p className="text-gray-600">Rastreamento com precisão de metros usando tecnologia GPS avançada</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gray-50 hover:bg-white">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#EB3C7D] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Tempo Real</h3>
                    <p className="text-gray-600">Atualizações instantâneas da posição e status de todos os veículos</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gray-50 hover:bg-white">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#660099] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Truck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Gestão Completa</h3>
                    <p className="text-gray-600">Controle total da frota com relatórios e análises detalhadas</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

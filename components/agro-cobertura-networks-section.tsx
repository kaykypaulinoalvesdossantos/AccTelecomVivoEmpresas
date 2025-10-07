"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Wifi, Zap, Battery } from "lucide-react"

export function AgroCoberturaNetworksSection() {
  const networks = [
    {
      name: "Banda larga 4G",
      speed: "Velocidade de até 10 Mbps",
      billing: "Cobrança mensal",
      dataVolume: "Volume de dados: Alto",
      features: [
        "Resposta em tempo real",
        "Internet de alta velocidade, voz e SMS",
        "Alta velocidade",
        "Alto consumo de energia"
      ],
      icon: Wifi,
      color: "#660099"
    },
    {
      name: "LTE-M",
      speed: "Velocidade de até 384 Kbps",
      billing: "Cobrança mensal",
      dataVolume: "Volume de dados: Baixo",
      features: [
        "Tecnologia que substitui o 2G",
        "Tráfego de dados e voz (VoLTE - Voice Over LTE)",
        "Baixa velocidade",
        "Baixo consumo de energia"
      ],
      icon: Zap,
      color: "#EB3C7D"
    },
    {
      name: "NB-IoT",
      speed: "Velocidade de até 64 Kbps",
      billing: "Cobrança mensal",
      dataVolume: "Volume de dados: Baixíssimo",
      features: [
        "Autonomia de bateria de até 10 anos",
        "Tráfego de mensagens entre dispositivos IoT",
        "Baixíssima velocidade",
        "Baixo consumo de energia"
      ],
      icon: Battery,
      color: "#660099"
    }
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#660099]/10 text-[#660099] border-[#660099]/20">
            <Wifi className="w-4 h-4 mr-2" />
            Comparação de Redes
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Saiba as diferenças de cada rede
            <span className="block text-[#660099]">disponibilizada</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha a tecnologia ideal para suas necessidades de conectividade 
            com diferentes perfis de velocidade e consumo de energia.
          </p>
        </div>

        {/* Networks Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {networks.map((network, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:bg-gray-50">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div 
                    className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: network.color }}
                  >
                    <network.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{network.name}</h3>
                </div>

                {/* Network Details */}
                <div className="space-y-3 mb-6">
                  <div className="text-center">
                    <div className="text-lg font-semibold text-gray-900">{network.speed}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600">{network.billing}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600">{network.dataVolume}</div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {network.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-[#660099] flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  size="lg" 
                  className="w-full px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 cursor-pointer"
                  style={{ 
                    backgroundColor: network.color,
                    color: 'white'
                  }}
                >
                  Contratar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-3xl p-12 text-white">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-6">Escolha a tecnologia ideal</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Wifi className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">4G LTE</h4>
                  <p className="text-white/90">Para aplicações que precisam de alta velocidade</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">LTE-M</h4>
                  <p className="text-white/90">Equilíbrio entre velocidade e consumo</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Battery className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">NB-IoT</h4>
                  <p className="text-white/90">Máxima autonomia para sensores IoT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

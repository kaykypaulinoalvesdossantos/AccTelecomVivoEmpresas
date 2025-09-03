"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Signal, Wifi, Shield, Clock, MapPin, CheckCircle } from "lucide-react"

export function Router5GBenefitsSection(): React.JSX.Element {
  const benefits = [
    {
      icon: Signal,
      title: "Velocidade 5G",
      description: "Velocidades de até 1Gbps com a tecnologia 5G mais avançada do mercado"
    },
    {
      icon: Wifi,
      title: "Wi-Fi 6 Integrado",
      description: "Conecte até 64 dispositivos simultaneamente com Wi-Fi 6 de alta performance"
    },
    {
      icon: Shield,
      title: "Segurança Avançada",
      description: "Proteção WPA3 e firewall integrado para máxima segurança da sua rede"
    },
    {
      icon: Clock,
      title: "Instalação Rápida",
      description: "Plug and play - conecte e use imediatamente, sem necessidade de técnico"
    },
    {
      icon: MapPin,
      title: "Cobertura Nacional",
      description: "Funciona em todo território nacional com a melhor cobertura 5G do Brasil"
    },
    {
      icon: CheckCircle,
      title: "Suporte 24h",
      description: "Atendimento especializado 24 horas por dia, 7 dias por semana"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Vantagens do Roteador 5G Vivo
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubra por que o Roteador 5G Vivo é a melhor escolha para sua empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-2xl flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

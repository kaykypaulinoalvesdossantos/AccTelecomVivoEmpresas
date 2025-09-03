"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Shield, Smartphone, Grid } from "lucide-react"

export function ESimAdvantagesSection(): React.JSX.Element {
  const advantages = [
    {
      icon: Zap,
      title: "Velocidade",
      description: "5G mais rápido do mundo com internet de alta velocidade"
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Proteção contra clonagem e maior segurança dos dados"
    },
    {
      icon: Smartphone,
      title: "Flexibilidade",
      description: "Use múltiplos números e roaming internacional"
    },
    {
      icon: Grid,
      title: "Praticidade",
      description: "Ativação fácil e gestão simplificada"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Conheça as vantagens do eSIM para smartphones e tablets
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubra por que o eSIM é a tecnologia do futuro para conectividade móvel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <Card key={index} className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-2xl flex items-center justify-center">
                  <advantage.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">
                  {advantage.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  {advantage.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

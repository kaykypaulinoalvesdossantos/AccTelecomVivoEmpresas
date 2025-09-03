"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, Laptop, ShoppingBag } from "lucide-react"

export function Modem4GBenefitsSection(): React.JSX.Element {
  const benefits = [
    {
      icon: Star,
      title: "Melhor custo-benefício",
      description: "Para sua satisfação com preços competitivos e qualidade superior"
    },
    {
      icon: Laptop,
      title: "Produtividade empresarial",
      description: "Conectividade confiável para manter seu negócio sempre online"
    },
    {
      icon: ShoppingBag,
      title: "Flexibilidade total",
      description: "Use onde precisar com equipamento portátil e fácil instalação"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Confira as vantagens para seu negócio
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubra por que o Modem 4G Vivo é a escolha ideal para impulsionar sua conectividade empresarial
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

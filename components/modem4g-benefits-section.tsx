"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, Laptop, ShoppingBag } from "lucide-react"

export function Modem4GBenefitsSection(): React.JSX.Element {
  const benefits = [
    {
      icon: Star,
      title: "Maior mobilidade e facilidade",
      description: "Conexão onde estiver, a qualquer hora. Opção para o cliente que possui escritório itinerante."
    },
    {
      icon: Laptop,
      title: "Roteador Wi-Fi",
      description: "Conexão via Wi-Fi ou cabo para máxima flexibilidade de uso."
    },
    {
      icon: ShoppingBag,
      title: "Basta inserir o chip",
      description: "Sem a necessidade do técnico. Plug and play instantâneo."
    },
    {
      icon: Star,
      title: "Incluso Gestão de Dados e Skeelo",
      description: "Permitindo o compartilhamento de dados e criação de cotas por acesso e acesso à plataforma de livros e audiobooks."
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Principais características do Pen/Box
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubra todas as vantagens que fazem do Pen/Box Vivo a solução ideal para sua empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-800">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-600 leading-relaxed">
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

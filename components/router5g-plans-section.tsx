"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, ArrowRight, Star } from "lucide-react"

export function Router5GPlansSection(): React.JSX.Element {
  // Planos Roteador 5G com valores corretos do print
  const planosRoteador5G = [
    {
      gb: "200GB",
      preco: "R$ 199,90",
      period: "/mês",
      descricao: "Para pequenas empresas",
      features: [
        "Até 128 aparelhos juntos",
        "Vantagens Vivo Valoriza",
        "Conexão estável 5G",
        "Suporte técnico 24h"
      ],
      popular: false,
      badge: "OFERTA ESPECIAL",
      color: "from-blue-500 to-blue-600"
    },
    {
      gb: "300GB",
      preco: "R$ 279,90",
      period: "/mês",
      descricao: "Para médias empresas",
      features: [
        "Até 128 aparelhos juntos",
        "Vantagens Vivo Valoriza",
        "Conexão estável 5G",
        "Suporte técnico 24h",
        "Gestão avançada"
      ],
      popular: true,
      badge: "MAIS CONTRATADO",
      color: "from-purple-500 to-pink-500"
    },
    {
      gb: "500GB",
      preco: "R$ 449,90",
      period: "/mês",
      descricao: "Para grandes empresas",
      features: [
        "Até 128 aparelhos juntos",
        "Vantagens Vivo Valoriza",
        "Conexão estável 5G",
        "Suporte técnico 24h",
        "Gestão avançada",
        "Prioridade na rede"
      ],
      popular: false,
      badge: "OFERTA PREMIUM",
      color: "from-green-500 to-emerald-600"
    }
  ]


  const renderRouter5GCard = (plano: any) => {
    return (
      <Card key={plano.gb} className={`relative bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden ${plano.popular ? 'border-purple-500 ring-2 ring-purple-500/20 shadow-xl' : ''
        }`}>
        <CardHeader className="pb-4 pt-6">
          <div className="flex justify-between items-start mb-3">
            <Badge className="bg-green-100 text-green-800 px-3 py-1 text-xs font-semibold border border-green-200">
              {plano.badge}
            </Badge>
            {plano.popular && (
              <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 text-xs font-semibold">
                <Star className="w-3 h-3 mr-1" />
                MAIS CONTRATADO
              </Badge>
            )}
          </div>


          <CardTitle className="text-2xl font-bold text-gray-800 mb-2">
            Plano de Celular 5G
          </CardTitle>

          <div className="text-center mb-3">
            <div className="text-4xl font-bold text-gray-800">{plano.gb}</div>
          </div>

          <p className="text-sm text-gray-600 mb-3 text-center">
            {plano.descricao}
          </p>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="space-y-3">
            {plano.features.map((feature: string, featureIndex: number) => (
              <div key={featureIndex} className="flex items-start gap-3">
                <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>

          <div className="text-center pt-4 border-t">
            <div className="text-3xl font-bold text-gray-800">{plano.preco}</div>
            <div className="text-gray-600 text-sm">{plano.period}</div>
          </div>

          <Button
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 rounded-lg transition-all duration-300"
            asChild
          >
            <a href={`https://wa.me/5511989150001?text=Olá! Gostaria de assinar o plano ${plano.gb} de Roteador 5G`} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
              Assine já
            </a>
          </Button>

          <div className="text-center">
            <a href={`https://wa.me/5511989150001?text=Olá! Gostaria de mais detalhes sobre o plano ${plano.gb} de Roteador 5G`} target="_blank" rel="noopener noreferrer" className="text-sm text-purple-600 hover:underline flex items-center justify-center gap-1 cursor-pointer">
              Mais detalhes
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Escolha o plano ideal para sua empresa
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Todas as ofertas contam com menor preço por giga de dados. Aproveite a tecnologia 5G
            para impulsionar sua conectividade empresarial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {planosRoteador5G.map((plano) => renderRouter5GCard(plano))}
        </div>

        <div className="text-center mt-8">
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-6 py-3" asChild>
            <a href="https://wa.me/5511989150001?text=Olá! Gostaria de mais informações sobre Roteador 5G" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
              Mais informações
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

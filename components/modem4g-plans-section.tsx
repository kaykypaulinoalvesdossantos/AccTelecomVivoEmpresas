"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, ChevronLeft, ChevronRight } from "lucide-react"

export function Modem4GPlansSection(): React.JSX.Element {
  // Planos Pen/Box com valores corretos do print
  const planosPenBox = [
    {
      gb: "10GB",
      preco: "R$ 49,90",
      descricao: "Ideal para pequenas empresas",
      features: [
        "Conexão móvel 4G/5G",
        "Roteador Wi-Fi incluso",
        "Gestão de dados inclusa",
        "Skeelo incluso"
      ],
      popular: false,
      badge: "OFERTA ESPECIAL"
    },
    {
      gb: "40GB",
      preco: "R$ 69,90",
      descricao: "Para empresas médias",
      features: [
        "Conexão móvel 4G/5G",
        "Roteador Wi-Fi incluso",
        "Gestão de dados inclusa",
        "Skeelo incluso"
      ],
      popular: false,
      badge: "OFERTA ESPECIAL"
    },
    {
      gb: "100GB",
      preco: "R$ 99,90",
      descricao: "Para empresas com alta demanda",
      features: [
        "Conexão móvel 4G/5G",
        "Roteador Wi-Fi incluso",
        "Gestão de dados inclusa",
        "Skeelo incluso"
      ],
      popular: false,
      badge: "OFERTA ESPECIAL"
    },
    {
      gb: "200GB",
      preco: "R$ 199,90",
      descricao: "Máxima performance",
      features: [
        "Conexão móvel 4G/5G",
        "Roteador Wi-Fi incluso",
        "Gestão de dados inclusa",
        "Skeelo incluso"
      ],
      popular: true,
      badge: "MAIS CONTRATADO"
    },
    {
      gb: "300GB",
      preco: "R$ 279,90",
      descricao: "Para múltiplas equipes",
      features: [
        "Conexão móvel 4G/5G",
        "Roteador Wi-Fi incluso",
        "Gestão de dados inclusa",
        "Skeelo incluso"
      ],
      popular: false,
      badge: "OFERTA ESPECIAL"
    },
    {
      gb: "500GB",
      preco: "R$ 449,90",
      descricao: "Máxima capacidade",
      features: [
        "Conexão móvel 4G/5G",
        "Roteador Wi-Fi incluso",
        "Gestão de dados inclusa",
        "Skeelo incluso"
      ],
      popular: false,
      badge: "OFERTA ESPECIAL"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(0, planosPenBox.length - 3)
      return prevIndex >= maxIndex ? 0 : prevIndex + 1
    })
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(0, planosPenBox.length - 3)
      return prevIndex <= 0 ? maxIndex : prevIndex - 1
    })
  }

  const renderPlanCard = (plano: any, isPopular: boolean = false) => {
    return (
      <Card key={plano.gb} className={`relative bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden ${isPopular ? 'border-[#660099] ring-2 ring-[#660099]/20 shadow-xl' : ''
        }`}>
        <CardHeader className="pb-4 pt-6">
          <div className="flex justify-between items-start mb-3">
            <Badge className="bg-green-100 text-green-800 px-3 py-1 text-xs font-semibold border border-green-200">
              {plano.badge}
            </Badge>
            {isPopular && (
              <Badge className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] text-white px-3 py-1 text-xs font-semibold">
                MAIS VENDIDO
              </Badge>
            )}
          </div>

          <CardTitle className="text-3xl font-bold text-gray-800 mb-3">
            {plano.gb}
          </CardTitle>

          <p className="text-sm text-gray-600 mb-3">
            {plano.descricao}
          </p>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">{plano.preco}</div>
            <div className="text-gray-600 text-sm">por mês</div>
          </div>

          <div className="space-y-3">
            {plano.features.map((feature: string, featureIndex: number) => (
              <div key={featureIndex} className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#660099] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>

          <Button
            className="w-full bg-gradient-to-r from-[#660099] to-[#EB3C7D] hover:from-[#7a0bb3] hover:to-[#ff1a75] text-white font-semibold py-3 rounded-lg transition-all duration-300"
            asChild
          >
            <a href="https://wa.me/5511989150001" target="_blank" rel="noopener noreferrer">
              Assine já
            </a>
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <section id="planos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Móvel Pen/Box | Planos de Dados
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nossos clientes conectados a todo o momento! Conectividade móvel empresarial com máxima flexibilidade.
          </p>
        </div>

        {/* Carousel de Planos */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>

            <button
              onClick={nextSlide}
              disabled={currentIndex >= Math.max(0, planosPenBox.length - 3)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            {/* Carousel Container */}
            <div className="overflow-hidden px-16 py-8">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
              >
                {planosPenBox.map((plano) => (
                  <div key={plano.gb} className="w-1/3 flex-shrink-0 px-4">
                    {renderPlanCard(plano, plano.popular)}
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-6">
              {Array.from({ length: Math.max(1, planosPenBox.length - 2) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-purple-500' : 'bg-gray-300'
                    }`}
                />
              ))}
            </div>
          </div>

          <p className="text-sm text-gray-500 text-center mt-6">
            Consulte as informações de input no arquivo de Regras Comerciais.
          </p>
        </div>

        {/* Banner CTA */}
        <div className="mt-12 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-2xl p-8 text-center text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Quer contratar agora?</h3>
          <Button
            size="lg"
            className="bg-white text-[#660099] hover:bg-white/95 font-semibold px-8 py-3 shadow-lg border-2 border-white"
            asChild
          >
            <a href="https://wa.me/5511989150001" target="_blank" rel="noopener noreferrer">
              CONTRATAR PELO WHATSAPP
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

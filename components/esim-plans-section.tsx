"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Smartphone, ChevronLeft, ChevronRight, Star } from "lucide-react"

export function ESimPlansSection(): React.JSX.Element {
  const [currentSlide, setCurrentSlide] = useState(0)

  const planosMoveis = [
    {
      id: 1,
      nome: "6 GB",
      gb: "6GB",
      preco: "R$ 39,99",
      descricao: "Plano de Celular 5G",
      recursos: [
        "Utilize também seu celular como roteador",
        "5G mais rápido do mundo",
        "Apps ilimitados",
        "Ligações ilimitadas"
      ],
      popular: false,
      badge: "OFERTA ESPECIAL"
    },
    {
      id: 2,
      nome: "15 GB",
      gb: "15GB",
      preco: "R$ 54,99",
      descricao: "Plano de Celular 5G",
      recursos: [
        "Utilize também seu celular como roteador",
        "5G mais rápido do mundo",
        "Apps ilimitados",
        "Ligações ilimitadas"
      ],
      popular: false,
      badge: "OFERTA ESPECIAL"
    },
    {
      id: 3,
      nome: "20 GB",
      gb: "20GB",
      preco: "R$ 59,99",
      descricao: "Plano de Celular 5G",
      recursos: [
        "Utilize também seu celular como roteador",
        "5G mais rápido do mundo",
        "Apps ilimitados",
        "Ligações ilimitadas"
      ],
      popular: true,
      badge: "MAIS CONTRATADO"
    },
    {
      id: 4,
      nome: "30 GB",
      gb: "30GB",
      preco: "R$ 69,99",
      descricao: "Plano de Celular 5G",
      recursos: [
        "Utilize também seu celular como roteador",
        "5G mais rápido do mundo",
        "Apps ilimitados",
        "Ligações ilimitadas"
      ],
      popular: false,
      badge: "OFERTA ESPECIAL"
    },
    {
      id: 5,
      nome: "40 GB",
      gb: "40GB",
      preco: "R$ 79,99",
      descricao: "Plano de Celular 5G",
      recursos: [
        "Utilize também seu celular como roteador",
        "5G mais rápido do mundo",
        "Apps ilimitados",
        "Ligações ilimitadas"
      ],
      popular: false,
      badge: "OFERTA ESPECIAL"
    },
    {
      id: 6,
      nome: "50 GB",
      gb: "50GB",
      preco: "R$ 89,99",
      descricao: "Plano de Celular 5G",
      recursos: [
        "Utilize também seu celular como roteador",
        "5G mais rápido do mundo",
        "Apps ilimitados",
        "Ligações ilimitadas"
      ],
      popular: false,
      badge: "OFERTA ESPECIAL"
    },
    {
      id: 7,
      nome: "100 GB",
      gb: "100GB",
      preco: "R$ 99,99",
      descricao: "Plano de Celular 5G",
      recursos: [
        "Utilize também seu celular como roteador",
        "5G mais rápido do mundo",
        "Apps ilimitados",
        "Ligações ilimitadas"
      ],
      popular: false,
      badge: "OFERTA ESPECIAL"
    }
  ]


  const nextSlide = () => {
    setCurrentSlide((prevIndex) => {
      const maxIndex = Math.max(0, planosMoveis.length - 4)
      return prevIndex >= maxIndex ? maxIndex : prevIndex + 1
    })
  }

  const prevSlide = () => {
    setCurrentSlide((prevIndex) => {
      return prevIndex <= 0 ? 0 : prevIndex - 1
    })
  }

  const renderPlanCard = (plano: any, isPopular: boolean = false) => {
    return (
      <Card
        className={`relative transition-all duration-300 hover:shadow-2xl ${isPopular ? "ring-2 ring-purple-500 scale-105 shadow-xl" : "hover:scale-105"}`}
      >
        <CardHeader className="text-center pb-4">
          <div
            className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${isPopular ? "from-purple-500 to-pink-500" : "from-blue-500 to-blue-600"} flex items-center justify-center`}
          >
            <Smartphone className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-xl font-bold">{plano.nome}</CardTitle>
          <div className="text-sm text-gray-600 mb-4">{plano.descricao}</div>

          <div className="space-y-2">
            <div className="text-4xl font-bold text-purple-600">{plano.gb}</div>
            <div className="text-3xl font-bold text-gray-900">
              {plano.preco}
              <span className="text-sm font-normal text-gray-600">/mês</span>
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-0">
          <ul className="space-y-3 mb-8">
            {plano.recursos.map((recurso: string, featureIndex: number) => (
              <li key={featureIndex} className="flex items-start text-sm">
                <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{recurso}</span>
              </li>
            ))}
          </ul>

          <div className="space-y-3">
            <Button
              className={`w-full ${isPopular ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600" : "bg-purple-600 hover:bg-purple-700"} text-white`}
              asChild
            >
              <a href={`https://wa.me/5511989150001?text=Olá! Gostaria de contratar o plano ${plano.nome} com eSIM`} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                Contratar Agora
              </a>
            </Button>
            <Button
              variant="ghost"
              className="w-full text-sm"
              asChild
            >
              <a
                href={`https://wa.me/5511989150001?text=Olá! Gostaria de mais detalhes sobre o plano ${plano.nome} com eSIM`}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                Mais Detalhes
              </a>
            </Button>
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
            Os melhores planos de celular pra sua empresa
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Escolha o plano ideal para seu eSIM com toda a qualidade da rede Vivo
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Carrossel Container */}
          <div className="overflow-hidden px-8 py-8">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 25}%)` }}
            >
              {planosMoveis.map((plano, index) => (
                <div key={index} className="w-1/4 flex-shrink-0 px-4">
                  <div className="relative">
                    {plano.popular && (
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-20">
                        <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 text-xs shadow-lg">
                          <Star className="w-3 h-3 mr-1" />
                          Mais Contratado
                        </Badge>
                      </div>
                    )}
                    {renderPlanCard(plano, plano.popular)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="rounded-full p-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {Array.from({ length: Math.max(1, planosMoveis.length - 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${index === currentSlide ? "bg-purple-600" : "bg-gray-300"
                    }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              disabled={currentSlide >= Math.max(0, planosMoveis.length - 4)}
              className="rounded-full p-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Banner CTA */}
        <div className="mt-12 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-2xl p-8 text-center text-white shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold mb-2">Precisa de ajuda?</h3>
              <p className="text-white/90">(11) 2362-9665</p>
            </div>
            <Button
              size="lg"
              className="bg-white text-[#660099] hover:bg-white/95 font-semibold px-8 py-3 shadow-lg border-2 border-white"
              asChild
            >
              <a href="https://wa.me/5511989150001?text=Olá! Preciso de ajuda com eSIM" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

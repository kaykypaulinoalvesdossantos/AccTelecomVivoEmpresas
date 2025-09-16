"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export function MelhoresOfertasSmartphonesSection(): React.JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0)

  const smartphones = [
    {
      id: 1,
      name: "Moto G05 For Business 4G",
      description: "128GB - Tela 6.7\" - Câmeras 50 + 5 MP / 8 MP - Bateria 5000 mAh",
      price: "R$ 38,00",
      image: "/telefone-movel-aparelho/MotoG05ForBusiness4G.jpg"
    },
    {
      id: 2,
      name: "Galaxy A36 5G",
      description: "256GB - Tela 6.7\" - Câmeras 50 + 8 + 5 MP / 12 MP - Bateria 5000 mAh",
      price: "R$ 88,00",
      image: "/telefone-movel-aparelho/GalaxyA365G.jpg"
    },
    {
      id: 3,
      name: "Galaxy S24 FE",
      description: "256GB - Tela 6.1\" - Câmeras 50 + 12 + 8 MP / 10 MP - Bateria 4500 mAh",
      price: "R$ 127,00",
      image: "/telefone-movel-aparelho/GalaxyS24FE.jpg"
    },
    {
      id: 4,
      name: "iPhone 15",
      description: "256GB - Tela 6.1\" - Câmeras 48 + 12 MP / 12 MP - Bateria 3349 mAh",
      price: "R$ 228,00",
      image: "/telefone-movel-aparelho/iphone15.jpg"
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(0, smartphones.length - 3)
      return prevIndex >= maxIndex ? maxIndex : prevIndex + 1
    })
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex <= 0 ? 0 : prevIndex - 1
    })
  }

  const renderSmartphoneCard = (smartphone: any, index: number) => {
    return (
      <div key={smartphone.id} className="w-1/3 flex-shrink-0 px-4">
        <Card className="bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
          <CardHeader className="text-center pb-4">
            <div className="w-48 h-48 mx-auto mb-6 relative">
              <Image
                src={smartphone.image}
                alt={smartphone.name}
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <CardTitle className="text-lg font-bold text-gray-900 mb-2">
              {smartphone.name}
            </CardTitle>
            <p className="text-gray-600 text-sm mb-4">
              {smartphone.description}
            </p>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-center mb-6">
              <div className="text-2xl font-bold text-purple-600 mb-2">
                {smartphone.price}
                <span className="text-sm text-gray-600">/mês</span>
              </div>
              <div className="text-xs text-gray-500">
                Preço apenas do aparelho
              </div>
            </div>

            <Button
              className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold"
              asChild
            >
              <a href="https://wa.me/551123629665" target="_blank" rel="noopener noreferrer">
                Ver Combo Completo
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Dê um upgrade no smartphone da sua empresa
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Os melhores smartphones com condições especiais para sua empresa
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Carrossel Container */}
          <div className="overflow-hidden px-8 py-8">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
            >
              {smartphones.map((smartphone, index) => renderSmartphoneCard(smartphone, index))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`p-3 rounded-full transition-all duration-200 ${
                currentIndex === 0 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-white text-gray-600 hover:bg-gray-50 shadow-lg border border-gray-200'
              }`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex space-x-2">
              {Array.from({ length: Math.max(1, smartphones.length - 2) }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-110' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              disabled={currentIndex >= Math.max(0, smartphones.length - 3)}
              className={`p-3 rounded-full transition-all duration-200 ${
                currentIndex >= Math.max(0, smartphones.length - 3)
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-white text-gray-600 hover:bg-gray-50 shadow-lg border border-gray-200'
              }`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Check, ChevronLeft, ChevronRight, ArrowRight, Star } from "lucide-react"
import { movelAparelhoConfig } from "@/data/movel-aparelho-data"

export function MovelAparelhoPlansSection() {
  const { combos, contact } = movelAparelhoConfig
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(0, combos.length - 4)
      return prevIndex >= maxIndex ? maxIndex : prevIndex + 1
    })
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex <= 0 ? 0 : prevIndex - 1
    })
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200 text-sm sm:text-base">Combos</Badge>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Oferta Vivo com Aparelho: Combos Móveis para sua Empresa
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Combine planos móveis empresariais com os melhores smartphones do mercado
          </p>
        </div>

        <div className="relative">
          {/* Carrossel Container */}
          <div className="overflow-hidden px-8 py-8">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 25}%)` }}
            >
              {combos.map((combo, index) => (
                <div key={index} className="w-1/4 flex-shrink-0 px-4">
                  <div className="relative">
                    {combo.popular && (
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-20">
                        <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 text-xs shadow-lg">
                          <Star className="w-3 h-3 mr-1" />
                          Mais Popular
                        </Badge>
                      </div>
                    )}
                    <Card
                      className={`relative transition-all duration-300 hover:shadow-2xl ${combo.popular ? "ring-2 ring-purple-500 scale-105 shadow-xl" : "hover:scale-105"}`}
                    >
                      <CardHeader className="text-center pb-4">
                        <div className="mb-4">
                          <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 text-xs sm:text-sm mb-2">
                            {combo.brand}
                          </Badge>
                          <CardTitle className="text-lg sm:text-xl font-bold mb-2">{combo.device}</CardTitle>
                          <div className="text-sm text-gray-600 mb-3">{combo.storage}</div>
                        </div>

                        {/* Device Image */}
                        <div className="relative mb-4">
                          <img
                            src={combo.image}
                            alt={combo.device}
                            className="w-20 h-28 sm:w-24 sm:h-32 mx-auto object-contain"
                          />
                        </div>

                        {/* Specs */}
                        <div className="space-y-2 text-xs sm:text-sm text-gray-600 mb-4">
                          <div className="flex justify-between">
                            <span>Tela:</span>
                            <span className="font-medium">{combo.specs.screen}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Câmeras:</span>
                            <span className="font-medium">{combo.specs.cameras}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Bateria:</span>
                            <span className="font-medium">{combo.specs.battery}</span>
                          </div>
                        </div>

                        {/* Plan Info */}
                        <div className="bg-gray-50 rounded-lg p-3 mb-4">
                          <div className="flex items-center justify-center space-x-2 mb-2">
                            <Smartphone className="w-4 h-4 text-purple-600" />
                            <span className="text-sm font-semibold text-gray-900">{combo.plan}</span>
                          </div>
                          <div className="text-xs text-gray-600">{combo.installments}</div>
                        </div>

                        {/* Pricing */}
                        <div className="space-y-2">
                          <div className="text-xl sm:text-2xl font-bold text-gray-900">
                            {combo.totalPrice}
                          </div>
                          <div className="text-sm text-gray-600">
                            Após 24x: <span className="font-semibold text-purple-600">{combo.planPrice}</span>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="pt-0">
                        <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                          {combo.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start text-xs sm:text-sm">
                              <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="space-y-3">
                          <Button
                            className={`w-full ${combo.popular ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600" : "bg-purple-600 hover:bg-purple-700"} text-white`}
                            asChild
                          >
                            <a href={`https://wa.me/5511989150001?text=Olá! Quero comprar o combo ${combo.device} com plano ${combo.plan}`} target="_blank" rel="noopener noreferrer">
                              Comprar
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                          <Button
                            variant="ghost"
                            className="w-full text-sm"
                            asChild
                          >
                            <a href={`https://wa.me/5511989150001?text=Olá! Gostaria de mais detalhes sobre o ${combo.device}`} target="_blank" rel="noopener noreferrer">
                              Mais Detalhes
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
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
              disabled={currentIndex === 0}
              className="rounded-full p-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {Array.from({ length: Math.max(1, combos.length - 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-purple-600" : "bg-gray-300"
                    }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              disabled={currentIndex >= Math.max(0, combos.length - 4)}
              className="rounded-full p-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-xs sm:text-sm text-gray-500 mb-2">
            Após o pagamento da parcela de 24x do celular o cliente pagará apenas o valor da mensalidade do Plano Móvel
          </p>
          <p className="text-xs sm:text-sm text-gray-500">
            Venda de aparelhos sujeito à disponibilidade de estoque
          </p>
        </div>
      </div>
    </section>
  )
}

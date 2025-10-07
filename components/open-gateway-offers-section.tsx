"use client"

import React, { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Eye, Shield, MapPin, Smartphone } from "lucide-react"

export function OpenGatewayOffersSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const offers = [
    {
      name: "Telco Index",
      subtitle: "Insights",
      price: "Consulta avulsa R$ 0,76",
      icon: Eye,
      color: "#660099"
    },
    {
      name: "Most Frequent Loc",
      subtitle: "Risco e prevenção a fraude",
      price: "Consulta avulsa R$ 0,36",
      icon: MapPin,
      color: "#EB3C7D"
    },
    {
      name: "SIM Swap",
      subtitle: "Risco e prevenção a fraude",
      price: "Consulta avulsa R$ 0,14",
      icon: Shield,
      color: "#660099"
    },
    {
      name: "Device Location",
      subtitle: "Risco e prevenção a fraude",
      price: "Consulta avulsa R$ 0,09",
      icon: Smartphone,
      color: "#EB3C7D"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prevIndex) => {
      const maxIndex = Math.max(0, offers.length - 4)
      return prevIndex >= maxIndex ? maxIndex : prevIndex + 1
    })
  }

  const prevSlide = () => {
    setCurrentSlide((prevIndex) => {
      return prevIndex <= 0 ? 0 : prevIndex - 1
    })
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#660099]/10 text-[#660099] border-[#660099]/20">
            <Eye className="w-4 h-4 mr-2" />
            Ofertas Disponíveis
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Conheça as ofertas
            <span className="block text-[#660099]">disponíveis</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            APIs On Demand para diferentes necessidades de negócio, 
            com preços transparentes e flexibilidade total.
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
              {offers.map((offer, index) => (
                <div key={index} className="w-1/4 flex-shrink-0 px-4">
                  <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:bg-gray-50">
                    <CardContent className="p-8">
                      <div className="text-center">
                        {/* Badge */}
                        <Badge 
                          className="mb-4 text-xs"
                          style={{ backgroundColor: `${offer.color}20`, color: offer.color }}
                        >
                          ON DEMAND
                        </Badge>

                        {/* Icon */}
                        <div 
                          className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                          style={{ backgroundColor: offer.color }}
                        >
                          <offer.icon className="w-8 h-8 text-white" />
                        </div>

                        {/* Content */}
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{offer.name}</h3>
                        <p className="text-gray-600 mb-4 text-sm">{offer.subtitle}</p>
                        <p className="text-lg font-semibold text-[#660099] mb-6">{offer.price}</p>

                        {/* CTA Button */}
                        <Button 
                          size="lg" 
                          className="w-full px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 cursor-pointer mb-4"
                          style={{ 
                            backgroundColor: offer.color,
                            color: 'white'
                          }}
                        >
                          Contratar
                        </Button>

                        {/* More Details Link */}
                        <button className="text-sm text-gray-500 hover:text-[#660099] transition-colors cursor-pointer">
                          Mais detalhes
                          <ChevronRight className="w-4 h-4 inline ml-1" />
                        </button>
                      </div>
                    </CardContent>
                  </Card>
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
              {Array.from({ length: Math.max(1, offers.length - 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? "bg-[#660099]" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              disabled={currentSlide >= Math.max(0, offers.length - 4)}
              className="rounded-full p-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            *Preços sujeitos a alteração. Consulte condições comerciais.
          </p>
        </div>
      </div>
    </section>
  )
}

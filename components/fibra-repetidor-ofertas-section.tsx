"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wifi, Check } from "lucide-react"
import { fibraRepetidorConfig } from "@/data/fibra-repetidor-data"

export function FibraRepetidorOfertasSection() {
  const { ofertas, contact } = fibraRepetidorConfig

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200 text-sm sm:text-base">Ofertas Exclusivas</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">{ofertas.title}</h2>
          <div className="inline-block">
            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 text-sm sm:text-base">
              {ofertas.subtitle}
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {ofertas.plans.map((plan) => (
            <Card
              key={plan.id}
              className={`relative transition-all duration-300 hover:shadow-2xl ${plan.popular ? "ring-2 ring-purple-500 scale-105 shadow-xl" : "hover:scale-105"}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 sm:px-4 py-1 text-xs sm:text-sm">
                    Mais Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4 pt-6 sm:pt-8">
                <CardTitle className="text-lg sm:text-xl font-bold mb-3">{plan.name}</CardTitle>

                <div className="space-y-4">
                  {/* Internet Speed */}
                  <div className="flex items-center justify-center space-x-2">
                    <Wifi className="w-5 h-5 text-purple-600" />
                    <span className="text-lg font-semibold text-gray-900">{plan.internet}</span>
                  </div>
                </div>

                <div className="space-y-2 mt-4">
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">
                    {plan.price}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Repetidor Info */}
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-900 mb-1">{plan.repetidor.name}</h4>
                    <div className="text-lg font-bold text-purple-600">{plan.repetidor.price}</div>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <a
                    href={`https://wa.me/5511989150001?text=Olá! Gostaria de contratar o plano ${plan.name} + Repetidor`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-block text-center py-2 px-3 sm:px-4 rounded-md font-medium transition-colors text-sm sm:text-base cursor-pointer ${plan.popular ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white" : "border border-gray-300 text-gray-700 hover:bg-gray-50"}`}
                  >
                    {plan.button}
                  </a>
                  <Button
                    variant="ghost"
                    className="w-full text-xs sm:text-sm"
                    asChild
                  >
                    <a href={`https://wa.me/5511989150001?text=Olá! Tenho dúvidas sobre o plano ${plan.name} com Repetidor`} target="_blank" rel="noopener noreferrer">
                      {plan.buttonSecondary}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X } from "lucide-react"
import { vivoVozNegocioConfig } from "@/data/vivo-voz-negocio-data"

export function VivoVozNegocioPlansSection() {
  const { plans } = vivoVozNegocioConfig

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200 text-sm sm:text-base">Planos</Badge>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Escolha o plano ideal para sua empresa
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Planos flexíveis que se adaptam ao tamanho e necessidades da sua empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
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
                <CardTitle className="text-lg sm:text-xl font-bold mb-2">{plan.name}</CardTitle>
                <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
                
                <div className="space-y-2">
                  <div className="text-3xl sm:text-4xl font-bold text-gray-900">
                    {plan.price}
                  </div>
                  <div className="text-sm text-gray-600">{plan.period}</div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6 sm:mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                  
                  {plan.limitations.map((limitation, limitationIndex) => (
                    <li key={limitationIndex} className="flex items-start text-sm">
                      <X className="h-4 w-4 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-500">{limitation}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-2 sm:space-y-3">
                  <Button
                    className={`w-full cursor-pointer ${plan.popular ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white" : "bg-white border border-gray-300 text-gray-900 hover:bg-gray-50 hover:text-gray-900"}`}
                  >
                    {plan.popular ? "Contratar Agora" : "Escolher Plano"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-xs sm:text-sm text-gray-500 mb-2">
            * Todos os planos incluem configuração inicial e treinamento básico.
          </p>
          <p className="text-xs sm:text-sm text-gray-500">
            Consulte condições especiais para empresas com múltiplas unidades.
          </p>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Package, Settings, DollarSign, Calculator } from "lucide-react"
import { numeroUnicoConfig } from "@/data/numero-unico-data"

export function NumeroUnicoPlansSection() {
  const { planosPrateleira, planoFlex, contact } = numeroUnicoConfig

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200 text-sm sm:text-base">Planos</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Opções de Planos Disponíveis
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Planos de Prateleira */}
          <Card className="bg-white border border-gray-200 relative transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                <Package className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-900 mb-2">{planosPrateleira.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              {/* Tarifas */}
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-3">
                  <DollarSign className="w-5 h-5 text-purple-600" />
                  <h3 className="text-lg font-semibold text-purple-600">{planosPrateleira.tariffs.title}</h3>
                </div>
                <div className="bg-purple-600 rounded-lg p-4 text-center">
                  <span className="text-white text-lg font-bold">{planosPrateleira.tariffs.range}</span>
                </div>
              </div>

              {/* Assinatura */}
              <div className="mb-6">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">{planosPrateleira.subscription.title}</p>
                  <div className="text-2xl font-bold text-green-600">{planosPrateleira.subscription.price}</div>
                </div>
              </div>

              <Button
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
                asChild
              >
                <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
                  Contratar Plano de Prateleira
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Plano Flex */}
          <Card className="bg-white border border-gray-200 relative transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-900 mb-2">{planoFlex.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              {/* Tarifa Customizada */}
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Calculator className="w-5 h-5 text-purple-600" />
                  <h3 className="text-lg font-semibold text-purple-600">{planoFlex.tariffs.title}</h3>
                </div>
                <div className="bg-purple-600 rounded-lg p-4 text-center">
                  <span className="text-white text-lg font-bold">{planoFlex.tariffs.simulation}</span>
                </div>
              </div>

              {/* Assinatura */}
              <div className="mb-6">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">{planoFlex.subscription.title}</p>
                  <div className="text-2xl font-bold text-green-600">{planoFlex.subscription.price}</div>
                </div>
              </div>

              <Button
                className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white"
                asChild
              >
                <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
                  Simular Plano Flex
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

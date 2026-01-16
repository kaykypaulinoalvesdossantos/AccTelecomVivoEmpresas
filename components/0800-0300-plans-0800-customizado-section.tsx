"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Settings, DollarSign } from "lucide-react"
import { oitoZeroZeroConfig } from "@/data/0800-0300-data"

export function OitoZeroZeroPlans0800CustomizadoSection() {
  const { plans0800Customizado, contact } = oitoZeroZeroConfig

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200 text-sm sm:text-base">0800 Customizado</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            {plans0800Customizado.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            {plans0800Customizado.description}
          </p>
          <div className="inline-block bg-gray-100 rounded-lg px-4 py-2 mb-6">
            <span className="text-sm text-gray-600">Prazo Contratual: </span>
            <span className="text-sm font-semibold text-purple-600">{plans0800Customizado.contractTerm}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Tarifas */}
          <Card className="bg-white border border-gray-200">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-900">Tarifas</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-4">
                {plans0800Customizado.tariffs.map((tariff, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <span className="text-gray-800 font-medium">{tariff.name}</span>
                    <span className="text-lg font-bold text-green-600">{tariff.price}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Consumo Mínimo */}
          <Card className="bg-white border border-gray-200">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-900">Consumo Mínimo</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                <p className="text-gray-800 text-lg leading-relaxed">
                  {plans0800Customizado.minimumConsumption}
                </p>
              </div>
              <div className="mt-6">
                <Button
                  className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white"
                  asChild
                >
                  <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                    Consultar Plano Customizado
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Gift, Mic, Settings } from "lucide-react"
import { oitoZeroZeroConfig } from "@/data/0800-0300-data"

export function OitoZeroZeroFacilidadesSection() {
  const { facilidadesGratuitas, servicoURA, consumoMinimo, contact } = oitoZeroZeroConfig

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200 text-sm sm:text-base">Facilidades</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Facilidades Incluídas
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Facilidades Gratuitas */}
          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-900">{facilidadesGratuitas.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-3">
                {facilidadesGratuitas.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-sm">
                    <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Serviço URA */}
          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                <Mic className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-900">{servicoURA.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {servicoURA.price}
                </div>
                <div className="text-sm text-gray-600">{servicoURA.period}</div>
              </div>
              <p className="text-gray-800 text-sm mb-6">{servicoURA.description}</p>
              <Button
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
                asChild
              >
                <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
                  Adicionar URA
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Consumo Mínimo */}
        <div className="mt-12">
          <Card className="max-w-4xl mx-auto bg-white border border-gray-200">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-gray-500 to-gray-600 flex items-center justify-center">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-900">{consumoMinimo.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <p className="text-gray-800 text-lg leading-relaxed text-center">
                  {consumoMinimo.description}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

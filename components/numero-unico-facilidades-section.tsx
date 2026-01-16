"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star } from "lucide-react"
import { numeroUnicoConfig } from "@/data/numero-unico-data"

export function NumeroUnicoFacilidadesSection() {
  const { facilidades, contact } = numeroUnicoConfig

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200 text-sm sm:text-base">Facilidades</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            {facilidades.title}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-purple-600 text-white border-0 rounded-2xl overflow-hidden">
            <CardHeader className="text-center pb-6 pt-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                <Star className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-white">{facilidades.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              {/* Lista de Facilidades em 2 colunas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {facilidades.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white flex-shrink-0" />
                    <span className="text-white text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Área de Preço */}
              <div className="bg-white rounded-xl p-6 text-center">
                <p className="text-blue-600 text-sm font-medium mb-2">{facilidades.monthlyFee.title}</p>
                <div className="text-3xl font-bold text-green-600">{facilidades.monthlyFee.price}</div>
              </div>
            </CardContent>
          </Card>

          {/* Botão de Contratação */}
          <div className="text-center mt-8">
            <Button
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl"
              asChild
            >
              <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                Contratar Facilidades
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Wifi } from "lucide-react"
import { movelAparelhoConfig } from "@/data/movel-aparelho-data"

export function MovelAparelhoMobilePlansSection() {
  const { mobilePlans } = movelAparelhoConfig

  const getColorClasses = (color: string) => {
    switch (color) {
      case "purple":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "pink":
        return "bg-pink-100 text-pink-800 border-pink-200"
      case "blue":
        return "bg-blue-100 text-blue-800 border-blue-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200 text-sm sm:text-base">Planos Móveis</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">{mobilePlans.title}</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">{mobilePlans.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {mobilePlans.plans.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="relative overflow-hidden">
              <CardHeader className="text-center pb-4">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Wifi className="w-5 h-5 text-purple-600" />
                  <CardTitle className="text-lg font-bold">{category.category}</CardTitle>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {category.plans.map((plan, planIndex) => (
                  <div
                    key={planIndex}
                    className={`p-4 rounded-lg border-2 ${getColorClasses(category.color)} transition-all duration-300 hover:shadow-md`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Smartphone className="w-4 h-4" />
                        <span className="font-semibold">{plan.name}</span>
                      </div>
                      <div className="text-lg font-bold">{plan.price}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-gray-600 mb-4">
            Na compra de plano móvel o cliente recebe um desconto no aparelho
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
            <span>Disponível via Simplifique</span>
            <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

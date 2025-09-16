"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, User, CheckCircle } from "lucide-react"
import { zero303Config } from "@/data/0303-data"

export function Zero303PremisesSection() {
  const { premises } = zero303Config

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Phone":
        return <Phone className="w-8 h-8 text-white" />
      case "User":
        return <User className="w-8 h-8 text-white" />
      default:
        return <CheckCircle className="w-8 h-8 text-white" />
    }
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200 text-sm sm:text-base">Premissas</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Premissas para Contratação
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            As contratações do CNG 0303 na VIVO deverão seguir as seguintes premissas:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {premises.map((premise, index) => (
            <Card key={index} className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                  {getIcon(premise.icon)}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">{premise.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-700 text-center leading-relaxed">
                  {premise.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

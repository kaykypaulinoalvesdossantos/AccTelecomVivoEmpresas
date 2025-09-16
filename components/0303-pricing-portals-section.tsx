"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart, Monitor, Headphones, Lightbulb } from "lucide-react"
import { zero303Config } from "@/data/0303-data"

export function Zero303PricingAndPortalsSection() {
  const { pricing, portalBenefits } = zero303Config

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "BarChart":
        return <BarChart className="w-6 h-6 text-white" />
      case "Monitor":
        return <Monitor className="w-6 h-6 text-white" />
      default:
        return <Headphones className="w-6 h-6 text-white" />
    }
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Tarifação */}
            <Card className="bg-green-50 border border-green-200">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                  <Headphones className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{pricing.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-700 text-center leading-relaxed">
                  {pricing.description}
                </p>
              </CardContent>
            </Card>

            {/* Benefícios dos Portais */}
            <Card className="bg-white border border-gray-200">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">{portalBenefits.title}</CardTitle>
                <p className="text-gray-600 text-sm">{portalBenefits.description}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  {portalBenefits.portals.map((portal, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                        {getIcon(portal.icon)}
                      </div>
                      <span className="text-gray-800 font-medium">{portal.title}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="flex items-center space-x-2">
                    <Lightbulb className="w-5 h-5 text-yellow-600" />
                    <span className="text-yellow-800 text-sm font-medium">{portalBenefits.note}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

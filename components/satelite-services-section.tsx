"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Laptop, Package, Cloud, ArrowRight } from "lucide-react"
import { sateliteConfig } from "@/data/satelite-data"

export function SateliteServicesSection() {
  const { additionalServices } = sateliteConfig

  const IconComponent = (iconName: string) => {
    switch (iconName) {
      case "Laptop": return Laptop
      case "Package": return Package
      case "Cloud": return Cloud
      default: return Laptop
    }
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200 text-sm sm:text-base">Soluções Complementares</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">Complete sua infraestrutura digital</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Além da Internet Satélite, oferecemos soluções complementares para maximizar a produtividade da sua empresa
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {additionalServices.map((service) => {
            const Icon = IconComponent(service.icon)
            return (
              <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </CardTitle>
                  <p className="text-sm sm:text-base text-gray-600">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent className="pt-0 text-center">
                  <Button 
                    variant="outline" 
                    className="border-purple-300 text-purple-700 hover:bg-purple-50 group-hover:border-purple-400 group-hover:text-purple-800 transition-colors"
                  >
                    {service.button}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

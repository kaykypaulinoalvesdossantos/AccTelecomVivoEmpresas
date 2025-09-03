"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Wifi, MapPin, Smartphone } from "lucide-react"

export function RoamingFeaturesSection(): React.JSX.Element {
  const features = [
    {
      id: 1,
      icon: Globe,
      title: "Cobertura",
      description: "Multiconexão em mais de 150 destinos"
    },
    {
      id: 2,
      icon: Wifi,
      title: "Internet",
      description: "Navegue sem depender de Wi-fi"
    },
    {
      id: 3,
      icon: MapPin,
      title: "Países",
      description: "Presente nos 5 continentes"
    },
    {
      id: 4,
      icon: Smartphone,
      title: "Número",
      description: "Viaje sem precisar trocar de número para se comunicar"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Service Description */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Serviço que garante acesso à internet enquanto estiver viajando para fora do país. 
            Mantenha a tranquilidade e conforto durante sua viagem com Vivo Travel.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature) => (
            <Card key={feature.id} className="bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

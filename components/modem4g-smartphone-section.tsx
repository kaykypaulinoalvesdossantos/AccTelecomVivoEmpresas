"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Smartphone, ShoppingCart } from "lucide-react"

export function Modem4GSmartphoneSection(): React.JSX.Element {
  const smartphones = [
    {
      name: "iPhone 15 Pro",
      price: "R$ 8.999,99",
      image: "iphone-15-pro",
      features: ["A17 Pro", "48MP Camera", "5G"]
    },
    {
      name: "iPhone 15",
      price: "R$ 6.999,99",
      image: "iphone-15",
      features: ["A16 Bionic", "48MP Camera", "5G"]
    },
    {
      name: "iPhone 14",
      price: "R$ 5.999,99",
      image: "iphone-14",
      features: ["A15 Bionic", "12MP Camera", "5G"]
    },
    {
      name: "iPhone 13",
      price: "R$ 4.999,99",
      image: "iphone-13",
      features: ["A15 Bionic", "12MP Camera", "5G"]
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Dê um upgrade no smartphone da sua empresa
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Equipamentos de última geração para impulsionar a produtividade da sua equipe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {smartphones.map((phone, index) => (
            <Card key={index} className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-full h-48 bg-gradient-to-br from-[#660099]/10 to-[#EB3C7D]/10 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="w-16 h-16 text-[#660099] opacity-50" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-800 mb-2">
                  {phone.name}
                </CardTitle>
                <div className="text-2xl font-bold text-[#660099]">
                  {phone.price}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {phone.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full bg-gradient-to-r from-[#660099] to-[#EB3C7D] hover:from-[#7a0bb3] hover:to-[#ff1a75] text-white font-semibold py-2 rounded-lg">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Comprar agora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

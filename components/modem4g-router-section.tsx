"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Wifi, ShoppingCart } from "lucide-react"

export function Modem4GRouterSection(): React.JSX.Element {
  const routers = [
    {
      name: "Roteador Wireless Access Point Wi-Fi 6",
      price: "R$ 299,99",
      image: "router-wifi6",
      features: ["Wi-Fi 6", "Até 64 dispositivos", "Velocidade até 1Gbps"]
    },
    {
      name: "Roteador Vivo 4G",
      price: "R$ 199,99",
      image: "router-4g",
      features: ["4G integrado", "Portátil", "Plug & Play"]
    },
    {
      name: "Roteador Mesh Wi-Fi",
      price: "R$ 399,99",
      image: "router-mesh",
      features: ["Cobertura ampla", "Múltiplos pontos", "Gestão avançada"]
    },
    {
      name: "Roteador Empresarial",
      price: "R$ 499,99",
      image: "router-business",
      features: ["Alta performance", "Segurança avançada", "Suporte 24h"]
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Escolha o roteador ideal para o seu negócio
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Equipamentos de alta qualidade para garantir a melhor conectividade para sua empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {routers.map((router, index) => (
            <Card key={index} className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-full h-48 bg-gradient-to-br from-[#660099]/10 to-[#EB3C7D]/10 rounded-lg flex items-center justify-center mb-4">
                  <Wifi className="w-16 h-16 text-[#660099] opacity-50" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-800 mb-2">
                  {router.name}
                </CardTitle>
                <div className="text-2xl font-bold text-[#660099]">
                  {router.price}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {router.features.map((feature, featureIndex) => (
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

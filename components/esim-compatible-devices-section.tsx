"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Smartphone, Watch } from "lucide-react"

export function ESimCompatibleDevicesSection(): React.JSX.Element {
  const deviceCategories = [
    {
      name: "Apple",
      icon: Smartphone,
      description: "iPhone XS ou superior",
      link: "Confira modelos"
    },
    {
      name: "Samsung",
      icon: Smartphone,
      description: "Galaxy S20+ ou superior",
      link: "Confira modelos"
    },
    {
      name: "Motorola",
      icon: Smartphone,
      description: "Edge+ e outros modelos",
      link: "Confira modelos"
    },
    {
      name: "Smartwatch",
      icon: Watch,
      description: "Apple Watch e Samsung Galaxy Watch",
      link: "Confira modelos"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Dispositivos compatíveis com eSIM
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Verifique se seu dispositivo é compatível com a tecnologia eSIM
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deviceCategories.map((device, index) => (
            <Card key={index} className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-2xl flex items-center justify-center">
                  <device.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">
                  {device.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-gray-600">
                  {device.description}
                </p>
                <Button className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] hover:from-[#7a0bb3] hover:to-[#ff1a75] text-white font-semibold px-6 py-2 rounded-lg" asChild>
                  <a href={`https://wa.me/5511989150001?text=Olá! Gostaria de ver modelos da ${device.name} compatíveis com eSIM`} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                    {device.link}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-[#660099]/10 to-[#EB3C7D]/10 rounded-xl p-6 border border-[#660099]/20">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Não tem certeza se seu dispositivo é compatível?
            </h3>
            <p className="text-gray-600 mb-4">
              Entre em contato conosco para verificar a compatibilidade do seu dispositivo
            </p>
            <Button className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] hover:from-[#7a0bb3] hover:to-[#ff1a75] text-white font-semibold px-6 py-3" asChild>
              <a href="https://wa.me/5511989150001?text=Olá! Gostaria de verificar compatibilidade do meu aparelho com eSIM" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                Verificar Compatibilidade
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Smartphone, Shield } from "lucide-react"

export function Modem4GSolutionsSection(): React.JSX.Element {
  const solutions = [
    {
      icon: Building2,
      title: "PLANOS DE CELULAR",
      description: "Soluções completas de conectividade móvel para sua empresa"
    },
    {
      icon: Smartphone,
      title: "VIVO GESTÃO",
      description: "Ferramentas avançadas para gerenciar sua conta e serviços"
    },
    {
      icon: Shield,
      title: "SERVIÇOS DIGITAIS",
      description: "Soluções de segurança e produtividade para seu negócio"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Confira mais soluções da Vivo para seus negócios
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubra todas as soluções que a Vivo oferece para impulsionar sua empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-2xl flex items-center justify-center">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">
                  {solution.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-gray-600">
                  {solution.description}
                </p>
                <Button className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] hover:from-[#7a0bb3] hover:to-[#ff1a75] text-white font-semibold px-6 py-2 rounded-lg">
                  Confira
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

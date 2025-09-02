"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, User, ArrowRight } from "lucide-react"

export function PortabilityTypesSection(): React.JSX.Element {
  const types = [
    {
      icon: Building2,
      title: "CNPJ para CNPJ",
      description: "Portabilidade entre CNPJs diferentes, ideal para mudanças de empresa",
      link: "Saiba mais"
    },
    {
      icon: User,
      title: "CNPJ para CPF",
      description: "Portabilidade de um CNPJ para um CPF, para casos de encerramento de empresa",
      link: "Saiba mais"
    },
    {
      icon: ArrowRight,
      title: "CPF para CNPJ",
      description: "Portabilidade de um CPF para um CNPJ, para formalização de empresa",
      link: "Saiba mais"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Qual tipo de portabilidade você deseja fazer?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Existem diferentes tipos de portabilidade dependendo da sua situação. 
            Escolha a opção que melhor se adequa ao seu caso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {types.map((type, index) => (
            <Card key={index} className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-2xl flex items-center justify-center">
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">
                  {type.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-gray-600">
                  {type.description}
                </p>
                <Button variant="outline" className="border-[#660099] text-[#660099] hover:bg-[#660099] hover:text-white">
                  {type.link}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

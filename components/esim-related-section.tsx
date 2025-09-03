"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Smartphone, ArrowRight } from "lucide-react"

export function ESimRelatedSection(): React.JSX.Element {
  const relatedContent = [
    {
      title: "PLANOS PARA CELULAR",
      description: "Conheça os planos com a velocidade 5G",
      button: "Conheça",
      icon: Smartphone
    },
    {
      title: "PORTABILIDADE",
      description: "Traga seu número para a Vivo Empresas",
      button: "Saiba mais",
      icon: ArrowRight
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Veja também
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Outras soluções que podem interessar sua empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {relatedContent.map((content, index) => (
            <Card key={index} className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-2xl flex items-center justify-center">
                  <content.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">
                  {content.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-gray-600">
                  {content.description}
                </p>
                <Button className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] hover:from-[#7a0bb3] hover:to-[#ff1a75] text-white font-semibold px-6 py-2 rounded-lg">
                  {content.button}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

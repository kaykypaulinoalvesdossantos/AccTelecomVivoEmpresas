"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Smartphone, BarChart3, Shield } from "lucide-react"

export function RoamingSolutionsSection(): React.JSX.Element {
  const solutions = [
    {
      id: 1,
      icon: Smartphone,
      title: "PLANO SMART EMPRESAS",
      description: "Planos completos para celular empresarial",
      button: "Confira"
    },
    {
      id: 2,
      icon: BarChart3,
      title: "VIVO GESTÃO",
      description: "Acompanhe o consumo de voz das linhas contratadas",
      button: "Confira"
    },
    {
      id: 3,
      icon: Shield,
      title: "PROTEGE EMPRESAS",
      description: "Segurança nos negócios com o seguro para celular",
      button: "Confira"
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-[#660099] to-[#EB3C7D] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/5 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white/5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/5 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Confira mais soluções da Vivo para empresas
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Descubra outras soluções que podem transformar sua empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution) => (
            <Card key={solution.id} className="bg-white/15 backdrop-blur-md border-2 border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center shadow-lg">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {solution.title}
                </h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  {solution.description}
                </p>
                <Button className="bg-white text-[#660099] hover:bg-white/95 font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg">
                  {solution.button}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-12 text-center text-white/90">
          <p className="text-sm mb-6">
            Para mais informações sobre soluções empresariais, entre em contato conosco
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">0800 771 0160</div>
              <p className="text-sm text-white/80">Central de Atendimento</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">24/7</div>
              <p className="text-sm text-white/80">Suporte Empresarial</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">150+</div>
              <p className="text-sm text-white/80">Países com Cobertura</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

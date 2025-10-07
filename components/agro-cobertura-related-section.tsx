"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Cloud, Tractor, ArrowRight } from "lucide-react"

export function AgroCoberturaRelatedSection() {
  const relatedSolutions = [
    {
      title: "A AGRO COBERTURA IOT",
      subtitle: "O campo conectado com o clima certo",
      description: "Monitore condições climáticas e otimize suas operações agrícolas com dados precisos em tempo real.",
      icon: Cloud,
      color: "#660099",
      href: "/solucoes/iot/clima-inteligente"
    },
    {
      title: "MAQUINÁRIO INTELIGENTE",
      subtitle: "Otimize sua produção com",
      description: "Gestão completa de maquinário agrícola com telemetria avançada e controle inteligente.",
      icon: Tractor,
      color: "#EB3C7D",
      href: "/solucoes/iot/gestao-maquinario"
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#660099]/10 text-[#660099] border-[#660099]/20">
            <Cloud className="w-4 h-4 mr-2" />
            Soluções Relacionadas
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Veja também
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra outras soluções IoT que podem complementar sua operação agrícola 
            e maximizar a eficiência do seu agronegócio.
          </p>
        </div>

        {/* Related Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {relatedSolutions.map((solution, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gray-50 hover:bg-white">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  {/* Icon */}
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: solution.color }}
                  >
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Badge */}
                  <div className="mb-4">
                    <Badge 
                      className="text-xs mb-2"
                      style={{ backgroundColor: `${solution.color}20`, color: solution.color }}
                    >
                      {solution.title}
                    </Badge>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {solution.subtitle}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <Button 
                    variant="outline"
                    className="group-hover:bg-[#660099] group-hover:text-white group-hover:border-[#660099] transition-all duration-300 cursor-pointer"
                  >
                    Conheça
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Solutions */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-3xl p-12 text-white">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4">Soluções IoT Completas</h3>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Explore nosso portfólio completo de soluções IoT para o agronegócio 
                e transforme sua operação agrícola.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-white text-[#660099] hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  Ver Todas as Soluções
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 cursor-pointer bg-transparent"
                >
                  Falar com Consultor
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

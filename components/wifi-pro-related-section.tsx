"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BarChart3, Cloud } from "lucide-react"

export function WifiProRelatedSection() {
  const relatedSolutions = [
    {
      title: "PRODUTIVIDADE",
      description: "Aumente a produtividade e organize suas informações",
      icon: BarChart3,
      color: "#EB3C7D",
      link: "/solucoes/produtividade",
      linkText: "Confira >"
    },
    {
      title: "CLOUD",
      description: "Soluções em nuvem de maneira simples e segura",
      icon: Cloud,
      color: "#660099",
      link: "/solucoes/cloud",
      linkText: "Saiba mais >"
    }
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#660099]/10 text-[#660099] border-[#660099]/20">
            <ArrowRight className="w-4 h-4 mr-2" />
            Soluções Complementares
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Conheça mais soluções
            <span className="block text-[#660099]">para a sua empresa</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore outras soluções da Vivo Empresas que podem complementar 
            e potencializar ainda mais os resultados do seu negócio.
          </p>
        </div>

        {/* Related Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {relatedSolutions.map((solution, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:bg-gray-50 cursor-pointer"
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: solution.color }}
                    >
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {solution.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {solution.description}
                </p>

                <div className="flex items-center justify-between">
                  <a 
                    href={solution.link}
                    className="text-[#660099] font-semibold hover:text-[#5A0080] transition-colors duration-200 flex items-center space-x-2"
                  >
                    <span>{solution.linkText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Solutions Preview */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Quer conhecer todas as nossas soluções?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              A Vivo Empresas oferece um portfólio completo de soluções para transformar 
              digitalmente seu negócio e impulsionar seus resultados.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/solucoes"
                className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] text-white px-8 py-4 rounded-xl font-semibold hover:from-[#5A0080] hover:to-[#D63384] transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
              >
                Ver Todas as Soluções
              </a>
              <a 
                href="/contato"
                className="border-2 border-[#660099] text-[#660099] px-8 py-4 rounded-xl font-semibold hover:bg-[#660099] hover:text-white transition-all duration-300 cursor-pointer"
              >
                Falar com Consultor
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

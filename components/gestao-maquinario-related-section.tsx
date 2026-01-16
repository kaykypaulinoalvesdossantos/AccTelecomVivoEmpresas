"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, Globe, ArrowRight } from "lucide-react"

export function GestaoMaquinarioRelatedSection() {
  const relatedSolutions = [
    {
      title: "Gestão de Maquinário",
      subtitle: "O campo conectado com o clima certo",
      description: "Monitore condições climáticas e otimize suas operações agrícolas com dados precisos em tempo real.",
      icon: Eye,
      color: "#660099",
      href: "/solucoes/iot/gestao-maquinario"
    },
    {
      title: "Conectividade Gerenciada",
      subtitle: "Inicie sua jornada IoT com",
      description: "Conectividade robusta e confiável para todos os seus dispositivos IoT no campo.",
      icon: Globe,
      color: "#EB3C7D",
      href: "/solucoes/iot/conectividade-gerenciada"
    }
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#660099]/10 text-[#660099] border-[#660099]/20">
            <Eye className="w-4 h-4 mr-2" />
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
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:bg-gray-50">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: solution.color }}
                  >
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="mb-2">
                      <Badge
                        className="text-xs mb-2"
                        style={{ backgroundColor: `${solution.color}20`, color: solution.color }}
                      >
                        {solution.title.toUpperCase()}
                      </Badge>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {solution.subtitle}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {solution.description}
                    </p>

                    <Button
                      variant="outline"
                      className="group-hover:bg-[#660099] group-hover:text-white group-hover:border-[#660099] transition-all duration-300 cursor-pointer"
                      asChild
                    >
                      <a href={solution.href} className="cursor-pointer">
                        Conheça
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    </Button>
                  </div>
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
                  asChild
                >
                  <a href="/solucoes/iot" className="cursor-pointer">
                    Ver Todas as Soluções
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 cursor-pointer bg-transparent"
                  asChild
                >
                  <a href="https://wa.me/5511989150001?text=Olá! Gostaria de falar com um consultor sobre IoT" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                    Falar com Consultor
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

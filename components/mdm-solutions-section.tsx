"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Smartphone } from "lucide-react"

export function MDMSolutionsSection(): React.JSX.Element {
  const solutions = [
    {
      icon: Shield,
      title: "REDE E APLICAÇÃO",
      description: "Soluções para aumentar sua segurança digital",
      button: "Confira produto"
    },
    {
      icon: Users,
      title: "GESTÃO DE EQUIPES",
      description: "Gerencie seu time de modo remoto",
      button: "Confira produto"
    },
    {
      icon: Smartphone,
      title: "SEGURO DE CELULAR",
      description: "Proteja os celulares da sua empresa",
      button: "Confira produto"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Conheça outras soluções Vivo
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubra outras soluções que podem transformar sua empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-2xl flex items-center justify-center">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {solution.description}
                </p>
                <Button
                  className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] hover:from-[#7a0bb3] hover:to-[#ff1a75] text-white font-semibold px-6 py-2 rounded-lg"
                  asChild
                >
                  <a href={`https://wa.me/5511989150001?text=Olá! Gostaria de conhecer a solução ${solution.title}`} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                    {solution.button}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-[#660099]/10 to-[#EB3C7D]/10 border border-[#660099]/20 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Precisa de ajuda para escolher a solução ideal?
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Nossa equipe de especialistas está pronta para ajudar você a escolher
                a solução mais adequada para sua empresa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#660099]">(11) 2362-9665</div>
                  <p className="text-sm text-gray-600">Central de Atendimento</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#660099]">24/7</div>
                  <p className="text-sm text-gray-600">Suporte Empresarial</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#660099]">100%</div>
                  <p className="text-sm text-gray-600">Satisfação Garantida</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

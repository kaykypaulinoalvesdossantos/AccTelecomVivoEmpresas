"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Smartphone, MessageCircle, ArrowRight, Headphones } from "lucide-react"

export function PortabilityBenefitsSection(): React.JSX.Element {
  const benefits = [
    {
      icon: Smartphone,
      title: "Mantenha seu número",
      description: "Conserve seu número atual sem perder contatos importantes"
    },
    {
      icon: MessageCircle,
      title: "Suporte especializado",
      description: "Equipe dedicada para acompanhar todo o processo"
    },
    {
      icon: ArrowRight,
      title: "Processo simplificado",
      description: "Portabilidade rápida e sem complicações"
    },
    {
      icon: Headphones,
      title: "Assistência completa",
      description: "Apoio em todas as etapas do processo"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Benefícios
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Portar seu número para a Vivo Empresas traz diversos benefícios para sua empresa. 
            Conheça as vantagens de escolher a Vivo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-2xl flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Conheça nossos planos de celular
          </h3>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Planos flexíveis que se adaptam às necessidades da sua empresa, 
            com suporte especializado e tecnologia de ponta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#660099] hover:bg-white/90 font-semibold px-8 py-3">
              Ver Planos
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm px-8 py-3"
            >
              Falar com Especialista
            </Button>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Planos a partir de R$ 39,99</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Suporte 24h</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>5G incluso</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

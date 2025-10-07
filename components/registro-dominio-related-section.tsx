"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Cloud, Mail, Monitor, Search } from "lucide-react"

export function RegistroDominioRelatedSection() {
  const solutions = [
    {
      icon: Cloud,
      title: "Hospedagem de sites em nuvem",
      description: "Hospede seu site com segurança e performance na nuvem da Vivo",
      buttonText: "Confira",
      buttonVariant: "outline" as const
    },
    {
      icon: Mail,
      title: "E-mail profissional para empresa",
      description: "Crie e-mails personalizados com seu domínio para maior credibilidade",
      buttonText: "Confira",
      buttonVariant: "outline" as const
    },
    {
      icon: Monitor,
      title: "Criação de um site profissional em instantes",
      description: "Construa seu site profissional de forma rápida e fácil",
      buttonText: "Confira",
      buttonVariant: "outline" as const
    },
    {
      icon: Search,
      title: "Seu site na primeira página do google com SEO Tool",
      description: "Melhore o posicionamento do seu site nos mecanismos de busca",
      buttonText: "Compre agora",
      buttonVariant: "default" as const
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-[#660099] via-[#8B2C9E] to-[#EB3C7D] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            <Cloud className="w-4 h-4 mr-2" />
            Soluções Complementares
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Conheça mais soluções digitais para a sua
            <span className="block text-white/90">empresa</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Complete sua presença digital com nossas soluções integradas 
            de hospedagem, e-mail e criação de sites.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {solutions.map((solution, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/10 backdrop-blur-sm hover:bg-white/20">
              <CardContent className="p-8 text-center text-white">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <solution.icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4">{solution.title}</h3>
                
                {/* Description */}
                <p className="text-white/90 leading-relaxed mb-6">{solution.description}</p>

                {/* CTA Button */}
                <Button 
                  variant={solution.buttonVariant}
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer ${
                    solution.buttonVariant === 'default' 
                      ? 'bg-white text-[#660099] hover:bg-white/90' 
                      : 'border-2 border-white/30 text-white hover:bg-white/10 bg-transparent'
                  }`}
                >
                  {solution.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Pronto para começar?
            </h3>
            <p className="text-white/90 mb-6">
              Registre seu domínio agora e dê o primeiro passo para 
              uma presença digital profissional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="px-8 py-3 bg-white text-[#660099] rounded-xl font-semibold hover:bg-white/90 transition-colors cursor-pointer">
                Registrar Domínio
              </Button>
              <Button className="px-8 py-3 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-colors cursor-pointer bg-transparent">
                Falar com Consultor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

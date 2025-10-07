"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Mail, Globe, Users, Shield, Star } from "lucide-react"

export function EmailProfissionalHowSection() {
  const steps = [
    {
      number: "1",
      title: "Escolha seu domínio",
      description: "Selecione o domínio ideal para sua empresa ou use um existente",
      icon: Globe
    },
    {
      number: "2", 
      title: "Selecione o plano",
      description: "Escolha o plano que melhor atende às necessidades da sua empresa",
      icon: Mail
    },
    {
      number: "3",
      title: "Configure as contas",
      description: "Crie as contas de e-mail para sua equipe com nomes personalizados",
      icon: Users
    },
    {
      number: "4",
      title: "Configure DNS",
      description: "Configure os registros DNS para que os e-mails funcionem corretamente",
      icon: Shield
    },
    {
      number: "5",
      title: "Teste e valide",
      description: "Teste o envio e recebimento de e-mails para garantir que tudo funciona",
      icon: CheckCircle
    },
    {
      number: "6",
      title: "Treine sua equipe",
      description: "Capacite sua equipe para usar todas as funcionalidades disponíveis",
      icon: Star
    }
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#660099]/10 text-[#660099] border-[#660099]/20">
            <CheckCircle className="w-4 h-4 mr-2" />
            Processo Simples
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Como fazer um e-mail corporativo: Veja como é
            <span className="block text-[#660099]">fácil</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Configure seu e-mail profissional em poucos passos simples. 
            Nossa equipe de suporte está pronta para ajudar em cada etapa.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:bg-gray-50">
                <CardContent className="p-8 text-center">
                  {/* Step Number */}
                  <div className="w-16 h-16 bg-gradient-to-br from-[#660099] to-[#EB3C7D] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="mb-4">
                    <step.icon className="w-12 h-12 text-[#660099] mx-auto" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Precisa de ajuda?
            </h3>
            <p className="text-gray-600 mb-6">
              Nossa equipe de especialistas está pronta para ajudar você 
              a configurar seu e-mail profissional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-[#660099] text-white rounded-xl font-semibold hover:bg-[#660099]/90 transition-colors cursor-pointer">
                Falar com Especialista
              </button>
              <button className="px-8 py-3 border-2 border-[#660099] text-[#660099] rounded-xl font-semibold hover:bg-[#660099]/10 transition-colors cursor-pointer">
                Ver Documentação
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

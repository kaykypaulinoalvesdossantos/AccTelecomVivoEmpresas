"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, Star } from "lucide-react"

export function EmailProfissionalPlansSection() {
  const plans = [
    {
      name: "Iniciante",
      price: "R$ 5,90/mês",
      storage: "1 GB de espaço de e-mail",
      features: ["Webmail básico", "Antivírus", "Suporte por e-mail"],
      isPopular: false
    },
    {
      name: "Básico",
      price: "R$ 15,90/mês",
      storage: "10 GB de espaço de e-mail",
      features: ["Webmail avançado", "Antivírus e antispam", "Backup", "Suporte telefônico"],
      isPopular: true
    },
    {
      name: "Intermediário",
      price: "R$ 30,90/mês",
      storage: "25 GB de espaço de e-mail",
      features: ["Webmail avançado", "Antivírus e antispam", "Backup", "Redirecionamento", "Suporte prioritário"],
      isPopular: false
    },
    {
      name: "Avançado",
      price: "R$ 57,90/mês",
      storage: "50 GB de espaço de e-mail",
      features: ["Webmail avançado", "Antivírus e antispam", "Backup", "Redirecionamento", "Respostas automáticas", "Suporte 24/7"],
      isPopular: false
    }
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#660099]/10 text-[#660099] border-[#660099]/20">
            <Mail className="w-4 h-4 mr-2" />
            Planos Acessíveis
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Planos acessíveis de e-mail
            <span className="block text-[#660099]">profissional</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha o plano ideal para sua empresa e tenha e-mails profissionais 
            com recursos avançados e segurança garantida.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:bg-gray-50 relative ${
              plan.isPopular ? 'ring-2 ring-[#660099]' : ''
            }`}>
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-[#660099] text-white px-4 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    MAIS VENDIDO
                  </Badge>
                </div>
              )}
              
              <CardContent className="p-8">
                {/* Plan Name */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-[#660099] mb-2">{plan.price}</div>
                  <p className="text-gray-600 text-sm">{plan.storage}</p>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#660099] rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <Button 
                    className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer ${
                      plan.isPopular 
                        ? 'bg-[#660099] hover:bg-[#660099]/90 text-white' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    Contratar
                  </Button>
                  <button className="w-full text-[#660099] text-sm font-medium hover:text-[#660099]/80 transition-colors cursor-pointer">
                    Mais detalhes
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500">
            *Preços válidos para o primeiro ano. Renovação automática. Consulte termos e condições.
          </p>
        </div>
      </div>
    </section>
  )
}

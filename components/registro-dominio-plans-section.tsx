"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Globe, CheckCircle } from "lucide-react"

export function RegistroDominioPlansSection() {
  const plans = [
    {
      extension: ".com",
      title: "Ideal para empresas com acessos e operações internacionais",
      price: "R$ 39,90/ano",
      features: ["Domínio internacional", "Reconhecimento global", "Ideal para e-commerce"]
    },
    {
      extension: ".com.br",
      title: "Ideal para empresas nacionais, com operações e público nacionais",
      price: "R$ 39,90/ano",
      features: ["Domínio brasileiro", "Credibilidade local", "Ideal para mercado nacional"]
    },
    {
      extension: ".org",
      title: "Ideal para organizações com ou sem fins lucrativos",
      price: "R$ 39,90/ano",
      features: ["Para organizações", "Sem fins lucrativos", "Credibilidade institucional"]
    },
    {
      extension: ".info",
      title: "Ideal para sites de empresas do ramo informativos",
      price: "R$ 39,90/ano",
      features: ["Sites informativos", "Conteúdo educativo", "Blogs e portais"]
    },
    {
      extension: ".biz",
      title: "Ideal para empresas, um bom substituto para .com/.com.br",
      price: "R$ 39,90/ano",
      features: ["Foco em negócios", "Alternativa ao .com", "Ideal para startups"]
    },
    {
      extension: ".net",
      title: "Ideal para todos os tipos de empresas",
      price: "R$ 39,90/ano",
      features: ["Versatilidade", "Todos os negócios", "Boa alternativa"]
    }
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#660099]/10 text-[#660099] border-[#660099]/20">
            <Globe className="w-4 h-4 mr-2" />
            Planos Disponíveis
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Conheça nossos planos de Registro de
            <span className="block text-[#660099]">Domínio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha a extensão ideal para o seu negócio e registre seu domínio 
            com a Vivo Empresas.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:bg-gray-50">
              <CardContent className="p-8">
                {/* Extension */}
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#660099] to-[#EB3C7D] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{plan.extension}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.extension}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{plan.title}</p>
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-[#660099] mb-2">{plan.price}</div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#660099] flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  className="w-full bg-[#660099] hover:bg-[#660099]/90 text-white py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer"
                >
                  Compre agora
                </Button>
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

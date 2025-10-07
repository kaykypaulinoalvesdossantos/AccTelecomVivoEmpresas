"use client"

import React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Star, Server, Globe, Shield, Zap } from "lucide-react"

export function HospedagemSitePlansSection() {
  const plans = [
    {
      name: "Básico",
      price: "11,90",
      period: "mês",
      features: [
        "2 GB de espaço de armazenagem do site",
        "1 ano de domínio grátis",
        "Certificado SSL grátis",
        "Suporte técnico 24/7",
        "Painel de controle cPanel",
        "Contas de e-mail ilimitadas",
        "Backup automático diário"
      ],
      popular: false,
      icon: Server
    },
    {
      name: "Intermediário",
      price: "18,90",
      period: "mês",
      features: [
        "25 GB de espaço de armazenagem do site",
        "1 ano de domínio grátis",
        "Certificado SSL grátis",
        "Suporte técnico 24/7",
        "Painel de controle cPanel",
        "Contas de e-mail ilimitadas",
        "Backup automático diário",
        "CDN incluído",
        "Proteção contra DDoS"
      ],
      popular: true,
      icon: Globe
    },
    {
      name: "Avançado",
      price: "25,90",
      period: "mês",
      features: [
        "Espaço de armazenagem do site ilimitado",
        "1 ano de domínio grátis",
        "Certificado SSL grátis",
        "Suporte técnico 24/7",
        "Painel de controle cPanel",
        "Contas de e-mail ilimitadas",
        "Backup automático diário",
        "CDN incluído",
        "Proteção contra DDoS",
        "Servidor dedicado virtual",
        "Migração gratuita"
      ],
      popular: false,
      icon: Shield
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-[#660099]/10 text-[#660099] border-[#660099]/20">
            <Star className="w-4 h-4 mr-2" />
            Planos de Hospedagem
          </Badge>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Conheça os planos de
            <span className="block text-[#660099]">hospedagem</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Escolha o plano ideal para seu projeto. Todos os planos incluem domínio grátis, 
            certificado SSL e suporte técnico especializado.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                plan.popular ? 'ring-2 ring-[#660099] scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-[#660099] text-white px-4 py-2 rounded-bl-2xl">
                  <Badge className="bg-[#660099] text-white border-none">
                    <Star className="w-4 h-4 mr-1" />
                    MAIS VENDIDO
                  </Badge>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center space-y-4 mb-8">
                  <div className="w-16 h-16 bg-[#660099]/10 rounded-2xl mx-auto flex items-center justify-center">
                    <plan.icon className="w-8 h-8 text-[#660099]" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                    <div className="flex items-baseline justify-center space-x-1 mt-2">
                      <span className="text-4xl font-bold text-[#660099]">R$ {plan.price}</span>
                      <span className="text-gray-600">/{plan.period}</span>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="space-y-3">
                  <Button 
                    className={`w-full cursor-pointer ${
                      plan.popular 
                        ? 'bg-[#660099] hover:bg-[#660099]/90 text-white' 
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                    }`}
                    size="lg"
                  >
                    Assinar Plano
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="w-full text-[#660099] hover:text-[#660099]/80 hover:bg-[#660099]/10 cursor-pointer"
                  >
                    Mais detalhes
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Payment Info */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500">
            * Pagamento à vista com desconto. Consulte condições especiais para pagamento mensal.
            <br />
            Todos os planos incluem migração gratuita e garantia de 30 dias.
          </p>
        </div>
      </div>
    </section>
  )
}

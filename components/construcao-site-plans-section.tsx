"use client"

import React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Star, Monitor, Globe } from "lucide-react"

export default function ConstrucaoSitePlansSection() {
  const plans = [
    {
      name: "Básico",
      price: "6,90",
      period: "mês",
      features: [
        {
          title: "Sem fidelização",
          description: "cancelamento a qualquer momento sem multa."
        },
        {
          title: "Integrações",
          description: "Com Youtube e Google Maps.",
          icons: ["youtube", "maps"]
        },
        {
          title: "2 contas de e-mail com 4GB de espaço"
        },
        {
          title: "Tráfego e páginas ilimitadas"
        },
        {
          title: "Formulário de contato"
        },
        {
          title: "Desenhos personalizados",
          description: "Com banco de imagens."
        },
        {
          title: "Botão \"Ligue para nós\""
        },
        {
          title: "Atribuição de espaço flexível",
          description: "(armazenagem) por caixa de correio"
        }
      ],
      popular: false,
      icon: Monitor
    },
    {
      name: "Completo",
      price: "14,90",
      period: "mês",
      features: [
        {
          title: "Sem fidelização",
          description: "cancelamento a qualquer momento sem multa."
        },
        {
          title: "Integrações",
          description: "Com Youtube e Google Maps.",
          icons: ["youtube", "maps", "cloud"]
        },
        {
          title: "10 contas de e-mail com 20GB de espaço"
        },
        {
          title: "Tráfego e páginas ilimitadas"
        },
        {
          title: "Formulários",
          description: "De contato e personalizados"
        },
        {
          title: "Desenhos personalizados",
          description: "Com banco de imagens."
        },
        {
          title: "Botões",
          description: "\"Ligue para nós\" e PayPal."
        },
        {
          title: "Opção de Blog"
        },
        {
          title: "Inserção de código próprio"
        },
        {
          title: "Multi-idioma"
        },
        {
          title: "Widget de avaliação do Yelp"
        }
      ],
      popular: true,
      icon: Globe
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-[#660099]/10 text-[#660099] border-[#660099]/20">
            <Star className="w-4 h-4 mr-2" />
            Planos de Construção
          </Badge>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Planos acessíveis para a criação do seu
            <span className="block text-[#660099]">site Profissional</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Escolha o plano ideal para seu projeto. Todos os planos incluem domínio grátis, 
            certificado SSL e suporte técnico especializado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                    MELHOR OFERTA
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
                    <div key={featureIndex} className="space-y-2">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <span className="text-gray-700 text-sm font-medium">{feature.title}</span>
                          {feature.description && (
                            <p className="text-gray-600 text-xs mt-1">{feature.description}</p>
                          )}
                          {feature.icons && (
                            <div className="flex space-x-2 mt-2">
                              {feature.icons.map((icon, iconIndex) => (
                                <div key={iconIndex} className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
                                  {icon === "youtube" && <div className="w-3 h-3 bg-red-500 rounded"></div>}
                                  {icon === "maps" && <div className="w-3 h-3 bg-green-500 rounded"></div>}
                                  {icon === "cloud" && <div className="w-3 h-3 bg-orange-500 rounded"></div>}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="space-y-3">
                  <Button 
                    className={`w-full cursor-pointer ${
                      plan.popular 
                        ? 'bg-[#EB3C7D] hover:bg-[#EB3C7D]/90 text-white' 
                        : 'bg-[#EB3C7D] hover:bg-[#EB3C7D]/90 text-white'
                    }`}
                    size="lg"
                  >
                    Contratar
                  </Button>
                  
                  <div className="text-center">
                    <button className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer flex items-center justify-center space-x-1 mx-auto">
                      <span>Menos detalhes</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    </button>
                  </div>
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

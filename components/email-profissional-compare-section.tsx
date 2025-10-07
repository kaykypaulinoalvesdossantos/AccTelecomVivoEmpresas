"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, X } from "lucide-react"

export function EmailProfissionalCompareSection() {
  const features = [
    { name: "Espaço de correio (Email)", plans: { iniciante: "1 GB", basico: "10 GB", intermediario: "25 GB", avancado: "50 GB" } },
    { name: "Espaço de disco (Drive) por usuário", plans: { iniciante: "1 GB", basico: "5 GB", intermediario: "10 GB", avancado: "25 GB" } },
    { name: "Webmail avançado", plans: { iniciante: false, basico: true, intermediario: true, avancado: true } },
    { name: "Antivírus", plans: { iniciante: true, basico: true, intermediario: true, avancado: true } },
    { name: "Antispam", plans: { iniciante: false, basico: true, intermediario: true, avancado: true } },
    { name: "Backup", plans: { iniciante: false, basico: true, intermediario: true, avancado: true } },
    { name: "Redirecionamento", plans: { iniciante: false, basico: false, intermediario: true, avancado: true } },
    { name: "Respostas automáticas", plans: { iniciante: false, basico: false, intermediario: false, avancado: true } },
    { name: "Gestão de DNS", plans: { iniciante: false, basico: false, intermediario: true, avancado: true } },
    { name: "Acesso via POP3, IMAP4", plans: { iniciante: true, basico: true, intermediario: true, avancado: true } },
    { name: "Serviços inclusos", plans: { iniciante: "Básicos", basico: "Completos", intermediario: "Completos", avancado: "Premium" } }
  ]

  const plans = [
    { name: "Iniciante", price: "R$ 5,90/mês" },
    { name: "Básico", price: "R$ 15,90/mês" },
    { name: "Intermediário", price: "R$ 30,90/mês" },
    { name: "Avançado", price: "R$ 57,90/mês" }
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#660099]/10 text-[#660099] border-[#660099]/20">
            <CheckCircle className="w-4 h-4 mr-2" />
            Comparação Detalhada
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Compare os pacotes de e-mail
            <span className="block text-[#660099]">corporativo</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja todas as funcionalidades incluídas em cada plano e escolha 
            o que melhor se adapta às necessidades da sua empresa.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-7xl mx-auto">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  {/* Header */}
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Características</th>
                      {plans.map((plan, index) => (
                        <th key={index} className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                          <div className="space-y-1">
                            <div className="text-lg font-bold">{plan.name}</div>
                            <div className="text-[#660099] font-semibold">{plan.price}</div>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  
                  {/* Body */}
                  <tbody className="divide-y divide-gray-200">
                    {features.map((feature, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                          {feature.name}
                        </td>
                        <td className="px-6 py-4 text-center text-sm">
                          {typeof feature.plans.iniciante === 'boolean' ? (
                            feature.plans.iniciante ? (
                              <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-red-500 mx-auto" />
                            )
                          ) : (
                            <span className="text-gray-700">{feature.plans.iniciante}</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center text-sm">
                          {typeof feature.plans.basico === 'boolean' ? (
                            feature.plans.basico ? (
                              <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-red-500 mx-auto" />
                            )
                          ) : (
                            <span className="text-gray-700">{feature.plans.basico}</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center text-sm">
                          {typeof feature.plans.intermediario === 'boolean' ? (
                            feature.plans.intermediario ? (
                              <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-red-500 mx-auto" />
                            )
                          ) : (
                            <span className="text-gray-700">{feature.plans.intermediario}</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center text-sm">
                          {typeof feature.plans.avancado === 'boolean' ? (
                            feature.plans.avancado ? (
                              <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-red-500 mx-auto" />
                            )
                          ) : (
                            <span className="text-gray-700">{feature.plans.avancado}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Pronto para escolher seu plano?
            </h3>
            <p className="text-gray-600 mb-6">
              Entre em contato conosco para contratar o plano ideal 
              para sua empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-[#660099] text-white rounded-xl font-semibold hover:bg-[#660099]/90 transition-colors cursor-pointer">
                Contratar Agora
              </button>
              <button className="px-8 py-3 border-2 border-[#660099] text-[#660099] rounded-xl font-semibold hover:bg-[#660099]/10 transition-colors cursor-pointer">
                Falar com Consultor
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, X } from "lucide-react"

export function FrotaInteligenteComparisonSection() {
  const features = [
    { name: "Rastreamento", rastreamento: true, eficiencia: true, performance: true },
    { name: "Localização", rastreamento: true, eficiencia: true, performance: true },
    { name: "Cerca de segurança", rastreamento: false, eficiencia: true, performance: true },
    { name: "Criação de rotas e alertas", rastreamento: false, eficiencia: true, performance: true },
    { name: "Bloqueio remoto", rastreamento: false, eficiencia: false, performance: true },
    { name: "Cheque de saúde veicular", rastreamento: false, eficiencia: false, performance: true },
    { name: "Comportamento motorista", rastreamento: false, eficiencia: false, performance: true },
    { name: "Liveliness", rastreamento: false, eficiencia: false, performance: true },
    { name: "Alerta de bateria do veículo", rastreamento: false, eficiencia: false, performance: true },
    { name: "Velocidade", rastreamento: false, eficiencia: true, performance: true },
    { name: "Criação de regras e de excecução", rastreamento: false, eficiencia: false, performance: true },
    { name: "Identificação de motorista", rastreamento: false, eficiencia: false, performance: true },
    { name: "Classificação de motorista", rastreamento: false, eficiencia: false, performance: true },
    { name: "Controle de jornada do motorista", rastreamento: false, eficiencia: false, performance: true },
    { name: "Localização precisa", rastreamento: true, eficiencia: true, performance: true },
    { name: "Período de contratação", rastreamento: "12 meses", eficiencia: "12 meses", performance: "12 meses" }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#660099]/10 text-[#660099] border-[#660099]/20">
            <CheckCircle className="w-4 h-4 mr-2" />
            Comparação de Planos
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Compare os planos para
            <span className="block text-[#660099]">gestão de frotas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja todas as funcionalidades incluídas em cada plano e escolha a solução
            ideal para as necessidades da sua empresa.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-6xl mx-auto">
          <Card className="border-0 shadow-xl">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left p-6 font-semibold text-gray-900">Funcionalidades</th>
                      <th className="text-center p-6 font-semibold text-gray-900">
                        <div className="space-y-2">
                          <div className="text-lg">Rastreamento</div>
                          <div className="text-2xl font-bold text-[#660099]">R$ 60/mês</div>
                        </div>
                      </th>
                      <th className="text-center p-6 font-semibold text-gray-900">
                        <div className="space-y-2">
                          <div className="text-lg">Eficiência</div>
                          <div className="text-2xl font-bold text-[#EB3C7D]">R$ 70/mês</div>
                          <Badge className="bg-[#EB3C7D] text-white">Mais Popular</Badge>
                        </div>
                      </th>
                      <th className="text-center p-6 font-semibold text-gray-900">
                        <div className="space-y-2">
                          <div className="text-lg">Performance</div>
                          <div className="text-2xl font-bold text-[#660099]">R$ 80/mês</div>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {features.map((feature, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="p-6 font-medium text-gray-900">{feature.name}</td>
                        <td className="p-6 text-center">
                          {typeof feature.rastreamento === 'boolean' ? (
                            feature.rastreamento ? (
                              <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                            ) : (
                              <X className="w-6 h-6 text-gray-400 mx-auto" />
                            )
                          ) : (
                            <span className="text-gray-600">{feature.rastreamento}</span>
                          )}
                        </td>
                        <td className="p-6 text-center">
                          {typeof feature.eficiencia === 'boolean' ? (
                            feature.eficiencia ? (
                              <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                            ) : (
                              <X className="w-6 h-6 text-gray-400 mx-auto" />
                            )
                          ) : (
                            <span className="text-gray-600">{feature.eficiencia}</span>
                          )}
                        </td>
                        <td className="p-6 text-center">
                          {typeof feature.performance === 'boolean' ? (
                            feature.performance ? (
                              <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                            ) : (
                              <X className="w-6 h-6 text-gray-400 mx-auto" />
                            )
                          ) : (
                            <span className="text-gray-600">{feature.performance}</span>
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

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Pronto para otimizar sua frota?</h3>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Escolha o plano ideal e comece a transformar a gestão da sua frota hoje mesmo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-[#660099] px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-colors cursor-pointer" asChild>
                <a href="https://wa.me/5511989150001?text=Olá! Gostaria de contratar a solução de Frota Inteligente" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  Contratar Agora
                </a>
              </Button>
              <Button variant="outline" className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors cursor-pointer bg-transparent" asChild>
                <a href="https://wa.me/5511989150001?text=Olá! Gostaria de falar com um especialista sobre Frota Inteligente" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  Falar com Especialista
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

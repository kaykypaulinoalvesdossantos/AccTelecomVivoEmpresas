"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Shield, Smartphone, Database } from "lucide-react"

export function MDMPlansSection(): React.JSX.Element {
  const plans = [
    {
      data: "6 GB",
      planType: "Plano Pós 5G",
      mdmFeatures: ["MDM", "Gestão de dispositivos", "Plano Bloqueio de Chip"],
      price: "R$ 44,99",
      period: "/mês",
      benefits: ["Segurança avançada", "Controle remoto", "Monitoramento 24/7"]
    },
    {
      data: "15 GB",
      planType: "Plano Pós 5G",
      mdmFeatures: ["MDM", "Gestão de dispositivos", "Plano Bloqueio de Chip"],
      price: "R$ 59,99",
      period: "/mês",
      benefits: ["Segurança avançada", "Controle remoto", "Monitoramento 24/7"]
    },
    {
      data: "20 GB",
      planType: "Plano Pós 5G",
      mdmFeatures: ["MDM", "Gestão de dispositivos", "Plano Bloqueio de Chip"],
      price: "R$ 64,99",
      period: "/mês",
      benefits: ["Segurança avançada", "Controle remoto", "Monitoramento 24/7"]
    },
    {
      data: "30 GB",
      planType: "Plano Pós 5G",
      mdmFeatures: ["MDM", "Gestão de dispositivos", "Plano Bloqueio de Chip"],
      price: "R$ 74,99",
      period: "/mês",
      benefits: ["Segurança avançada", "Controle remoto", "Monitoramento 24/7"]
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-white to-purple-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-1/4 w-40 h-40 bg-[#EB3C7D]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-1/3 w-32 h-32 bg-[#660099]/10 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-[#EB3C7D]/10 rounded-full blur-3xl animate-float delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Confira as ofertas de plano de celular + MDM
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Escolha o plano ideal para sua empresa com gestão de dispositivos incluída
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="nao-cliente" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="nao-cliente" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#660099] data-[state=active]:to-[#EB3C7D] data-[state=active]:text-white">
                Não sou cliente Vivo
              </TabsTrigger>
              <TabsTrigger value="cliente" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#660099] data-[state=active]:to-[#EB3C7D] data-[state=active]:text-white">
                Já sou cliente Vivo
              </TabsTrigger>
              <TabsTrigger value="contratar" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#660099] data-[state=active]:to-[#EB3C7D] data-[state=active]:text-white">
                Contratar Gestão de Dispositivos (MDM)
              </TabsTrigger>
            </TabsList>

            <TabsContent value="nao-cliente">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-semibold text-gray-800">Planos disponíveis</h3>
                <Button className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] hover:from-[#7a0bb3] hover:to-[#ff1a75] text-white font-semibold px-6 py-2 rounded-lg">
                  Assine já
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {plans.map((plan, index) => (
                  <Card key={index} className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:scale-105 bg-white border border-gray-200">
                    <CardHeader className="text-center pt-6 pb-4">
                      <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                        {plan.data}
                      </CardTitle>
                      <p className="text-sm text-gray-600 mb-2">{plan.planType}</p>
                      <div className="space-y-1">
                        {plan.mdmFeatures.map((feature, i) => (
                          <Badge key={i} className="bg-gradient-to-r from-[#660099]/10 to-[#EB3C7D]/10 text-[#660099] px-2 py-1 text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent className="px-6 py-4 border-t border-gray-100">
                      <div className="text-center mb-4">
                        <p className="text-3xl font-bold text-gray-900">{plan.price}</p>
                        <p className="text-sm text-gray-600">{plan.period}</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-gray-800 mb-2">Benefícios:</p>
                        {plan.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-[#660099]" />
                            <span className="text-sm text-gray-600">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-4">
                      <Button className="w-full bg-gradient-to-r from-[#660099] to-[#EB3C7D] text-white font-semibold py-2 rounded-lg hover:from-[#5a008a] hover:to-[#d4346f] transition-all duration-300 shadow-md">
                        Assinar Plano
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="cliente">
              <Card className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        Adicione MDM ao seu plano atual
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        Se você já é cliente Vivo, adicione a solução MDM ao seu plano existente 
                        e tenha controle total dos dispositivos da sua empresa.
                      </p>
                      <Button className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] hover:from-[#7a0bb3] hover:to-[#ff1a75] text-white font-semibold px-6 py-3">
                        Adicionar MDM
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="contratar">
              <Card className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Database className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        Contrate apenas a Gestão de Dispositivos
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        Se você já tem planos de celular, contrate apenas a solução MDM 
                        para gerenciar seus dispositivos com segurança e eficiência.
                      </p>
                      <div className="flex items-center gap-4 mb-6">
                        <Badge className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] text-white px-4 py-2">
                          R$ 6,90/mês
                        </Badge>
                        <Badge className="bg-gradient-to-r from-[#660099]/10 to-[#EB3C7D]/10 text-[#660099] px-4 py-2">
                          Bloqueio de chip
                        </Badge>
                      </div>
                      <Button className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] hover:from-[#7a0bb3] hover:to-[#ff1a75] text-white font-semibold px-6 py-3">
                        Contratar MDM
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

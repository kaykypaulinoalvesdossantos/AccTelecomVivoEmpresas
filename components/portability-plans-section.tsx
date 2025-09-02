"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Star, Wifi, Zap, Smartphone } from "lucide-react"

export function PortabilityPlansSection(): React.JSX.Element {
  const portabilityPlans = [
    {
      name: "Plano de Celular 5G",
      data: "16 GB",
      price: "R$ 39,99",
      period: "por mês",
      badge: "5G",
      features: [
        "Ligações ilimitadas",
        "SMS ilimitado",
        "Apps ilimitados",
        "5G incluso"
      ],
      popular: false,
      color: "from-[#660099] to-[#EB3C7D]"
    },
    {
      name: "16 GB MDM",
      data: "25 GB",
      price: "R$ 44,99",
      period: "por mês",
      badge: "MDM",
      features: [
        "Ligações ilimitadas",
        "SMS ilimitado",
        "Apps ilimitados",
        "5G incluso",
        "Gestão de dispositivos"
      ],
      popular: true,
      color: "from-[#660099] to-[#EB3C7D]"
    },
    {
      name: "Plano Empresarial",
      data: "110 GB",
      price: "R$ 54,99",
      period: "por mês",
      badge: "EMPRESARIAL",
      features: [
        "Ligações ilimitadas",
        "SMS ilimitado",
        "Apps ilimitados",
        "5G incluso",
        "Suporte prioritário"
      ],
      popular: false,
      color: "from-[#660099] to-[#EB3C7D]"
    },
    {
      name: "Plano Premium",
      data: "200 GB",
      price: "R$ 59,99",
      period: "por mês",
      badge: "PREMIUM",
      features: [
        "Ligações ilimitadas",
        "SMS ilimitado",
        "Apps ilimitados",
        "5G incluso",
        "Suporte VIP",
        "Roaming internacional"
      ],
      popular: false,
      color: "from-[#660099] to-[#EB3C7D]"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] text-white px-6 py-2 mb-6">
            <Zap className="w-4 h-4 mr-2" />
            PLANOS DE PORTABILIDADE
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Escolha o plano ideal para sua empresa
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Planos flexíveis que se adaptam às necessidades do seu negócio
          </p>
        </div>

        <Tabs defaultValue="portabilidade" className="w-full">
          <div className="text-center mb-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-6 bg-gray-100">
              <TabsTrigger value="portabilidade" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#660099] data-[state=active]:to-[#EB3C7D] data-[state=active]:text-white">
                PORTABILIDADE
              </TabsTrigger>
              <TabsTrigger value="movel" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#660099] data-[state=active]:to-[#EB3C7D] data-[state=active]:text-white">
                Móvel
              </TabsTrigger>
              <TabsTrigger value="m2m" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#660099] data-[state=active]:to-[#EB3C7D] data-[state=active]:text-white">
                M2M
              </TabsTrigger>
              <TabsTrigger value="fibra" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#660099] data-[state=active]:to-[#EB3C7D] data-[state=active]:text-white">
                Fibra
              </TabsTrigger>
              <TabsTrigger value="beneficios" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#660099] data-[state=active]:to-[#EB3C7D] data-[state=active]:text-white">
                Benefícios
              </TabsTrigger>
              <TabsTrigger value="planos" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#660099] data-[state=active]:to-[#EB3C7D] data-[state=active]:text-white">
                Planos
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="portabilidade" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {portabilityPlans.map((plan, index) => (
                <Card 
                  key={index} 
                  className={`relative bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 ${
                    plan.popular ? 'ring-2 ring-[#EB3C7D] shadow-xl scale-105' : ''
                  }`}
                >
                  {/* Top Color Bar */}
                  <div className={`h-2 bg-gradient-to-r ${plan.color} rounded-t-lg`}></div>
                  
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <Badge className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] text-white px-2 py-1 text-xs font-semibold">
                        {plan.badge}
                      </Badge>
                      {plan.popular && (
                        <Badge className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] text-white px-3 py-1 text-sm font-semibold">
                          MAIS CONTRATADO
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-800 mb-2">
                      {plan.name}
                    </CardTitle>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-lg flex items-center justify-center">
                        <Smartphone className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-2xl font-bold text-gray-800">{plan.data}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-800">{plan.price}</div>
                      <div className="text-gray-600 text-sm">{plan.period}</div>
                    </div>
                    
                    <div className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-[#660099] flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-[#660099] to-[#EB3C7D] hover:from-[#7a0bb3] hover:to-[#ff1a75] text-white font-semibold py-2 rounded-lg">
                      Assinar Plano
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="movel" className="text-center py-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Planos Móveis</h3>
            <p className="text-gray-600">Conteúdo dos planos móveis será adicionado aqui.</p>
          </TabsContent>
          
          <TabsContent value="m2m" className="text-center py-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Planos M2M</h3>
            <p className="text-gray-600">Conteúdo dos planos M2M será adicionado aqui.</p>
          </TabsContent>
          
          <TabsContent value="fibra" className="text-center py-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Planos Fibra</h3>
            <p className="text-gray-600">Conteúdo dos planos fibra será adicionado aqui.</p>
          </TabsContent>
          
          <TabsContent value="beneficios" className="text-center py-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Benefícios</h3>
            <p className="text-gray-600">Conteúdo dos benefícios será adicionado aqui.</p>
          </TabsContent>
          
          <TabsContent value="planos" className="text-center py-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Planos</h3>
            <p className="text-gray-600">Conteúdo dos planos será adicionado aqui.</p>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Star, Wifi, Zap, Smartphone, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"

export function PortabilityPlansSection(): React.JSX.Element {
  const [currentPage, setCurrentPage] = useState(0)

  // Dados baseados nos prints enviados
  const portabilityPlans = [
    {
      id: 1,
      name: "Plano de Celular 5G",
      data: "25 GB",
      dataDetails: "15 GB uso livre + bônus",
      portabilityBonus: "10 GB de bônus para portabilidade",
      price: "R$ 54,99",
      period: "/mês",
      badge: "OFERTA POR TEMPO LIMITADO",
      features: ["5G mais rápido do mundo", "Gestão de Voz e Dados inclusa"],
      benefits: ["VR", "Buser", "Cultura"],
      color: "from-[#660099] to-[#8B00FF]"
    },
    {
      id: 2,
      name: "Plano de Celular 5G",
      data: "110 GB",
      dataDetails: "100 GB uso livre + bônus",
      portabilityBonus: "10 GB de bônus para portabilidade",
      price: "R$ 99,99",
      period: "/mês",
      badge: "OFERTA POR TEMPO LIMITADO",
      features: ["5G mais rápido do mundo", "Gestão de Voz e Dados inclusa"],
      benefits: ["VR", "Buser", "Cultura"],
      color: "from-[#660099] to-[#8B00FF]"
    },
    {
      id: 3,
      name: "Plano de Celular 5G",
      data: "30 GB",
      dataDetails: "20 GB uso livre + bônus",
      portabilityBonus: "10 GB de bônus para portabilidade",
      price: "R$ 59,99",
      period: "/mês",
      badge: "OFERTA POR TEMPO LIMITADO",
      features: ["5G mais rápido do mundo", "Gestão de Voz e Dados inclusa"],
      benefits: ["VR", "Buser", "Cultura"],
      color: "from-[#660099] to-[#8B00FF]"
    },
    {
      id: 4,
      name: "Plano de Celular 5G",
      data: "40 GB",
      dataDetails: "30 GB uso livre + bônus",
      portabilityBonus: "10 GB de bônus para portabilidade",
      price: "R$ 69,99",
      period: "/mês",
      badge: "OFERTA POR TEMPO LIMITADO",
      features: ["5G mais rápido do mundo", "Gestão de Voz e Dados inclusa"],
      benefits: ["VR", "Buser", "Cultura"],
      color: "from-[#660099] to-[#8B00FF]"
    }
  ]

  const novaLinhaPlans = [
    {
      id: 1,
      name: "Plano de Celular 5G",
      data: "20 GB",
      price: "R$ 59,99",
      period: "/mês",
      badge: "APROVEITE",
      features: ["5G mais rápido do mundo", "Gestão de Voz e Dados inclusa"],
      benefits: ["VR", "Buser", "Cultura"],
      color: "from-[#660099] to-[#8B00FF]"
    },
    {
      id: 2,
      name: "Plano de Celular 5G",
      data: "30 GB",
      price: "R$ 69,99",
      period: "/mês",
      badge: "OFERTA MAIS VENDIDA",
      features: ["5G mais rápido do mundo", "Gestão de Voz e Dados inclusa"],
      benefits: ["VR", "Buser", "Cultura"],
      color: "from-[#660099] to-[#8B00FF]"
    },
    {
      id: 3,
      name: "Plano de Celular 5G",
      data: "40 GB",
      price: "R$ 79,99",
      period: "/mês",
      badge: "OFERTA EXCLUSIVA",
      features: ["5G mais rápido do mundo", "Gestão de Voz e Dados inclusa"],
      benefits: ["VR", "Buser", "Cultura"],
      color: "from-[#660099] to-[#8B00FF]"
    },
    {
      id: 4,
      name: "Plano de Celular 5G",
      data: "50 GB",
      price: "R$ 89,99",
      period: "/mês",
      badge: "MENOR PREÇO POR GB",
      features: ["5G mais rápido do mundo", "Gestão de Voz e Dados inclusa"],
      benefits: ["VR", "Buser", "Cultura"],
      color: "from-[#660099] to-[#8B00FF]"
    }
  ]

  const mdmPlans = [
    {
      id: 1,
      name: "Plano de Celular + MDM",
      data: "6 GB",
      planType: "Planos Pós 5G",
      network: "Melhor rede móvel do Brasil",
      price: "R$ 44,99",
      period: "/mês",
      badge: "OFERTA EXCLUSIVA",
      mdm: {
        title: "MDM",
        features: ["Gestão de dispositivos", "Plano Bloqueio de Chip"]
      },
      benefits: ["VR", "Buser", "Cultura"],
      color: "from-[#660099] to-[#8B00FF]"
    },
    {
      id: 2,
      name: "Plano de Celular + MDM",
      data: "15 GB",
      planType: "Planos Pós 5G",
      network: "Melhor rede móvel do Brasil",
      price: "R$ 59,99",
      period: "/mês",
      badge: "OFERTA EXCLUSIVA",
      mdm: {
        title: "MDM",
        features: ["Gestão de dispositivos", "Plano Bloqueio de Chip"]
      },
      benefits: ["VR", "Buser", "Cultura"],
      color: "from-[#660099] to-[#8B00FF]"
    },
    {
      id: 3,
      name: "Plano de Celular + MDM",
      data: "20 GB",
      planType: "Planos Pós 5G",
      network: "Melhor rede móvel do Brasil",
      price: "R$ 64,99",
      period: "/mês",
      badge: "OFERTA EXCLUSIVA",
      mdm: {
        title: "MDM",
        features: ["Gestão de dispositivos", "Plano Bloqueio de Chip"]
      },
      benefits: ["VR", "Buser", "Cultura"],
      color: "from-[#660099] to-[#8B00FF]"
    },
    {
      id: 4,
      name: "Plano de Celular + MDM",
      data: "30 GB",
      planType: "Planos Pós 5G",
      network: "Melhor rede móvel do Brasil",
      price: "R$ 74,99",
      period: "/mês",
      badge: "OFERTA EXCLUSIVA",
      mdm: {
        title: "MDM",
        features: ["Gestão de dispositivos", "Plano Bloqueio de Chip"]
      },
      benefits: ["VR", "Buser", "Cultura"],
      color: "from-[#660099] to-[#8B00FF]"
    }
  ]

  const pacotesAdicionaisPlans = [
    {
      id: 1,
      name: "PACOTE ADICIONAL",
      data: "16 GB",
      calls: "Ligações e SMS para qualquer operadora",
      options: [
        { name: "Redes Sociais", apps: "Instagram, Facebook, X e mais...", selected: true },
        { name: "Streaming", apps: "Netflix, Youtube, Spotify e mais..", selected: false },
        { name: "Comunicação", apps: "Microsoft Teams e Cisco Webex", selected: false }
      ],
      speed: "5G mais rápido do mundo",
      price: "R$ 49,99",
      period: "/mês",
      benefits: ["VR", "Buser", "Cultura"],
      color: "from-[#660099] to-[#8B00FF]"
    },
    {
      id: 2,
      name: "PACOTE ADICIONAL",
      data: "25 GB",
      calls: "Ligações e SMS para qualquer operadora",
      options: [
        { name: "Redes Sociais", apps: "Instagram, Facebook, X e mais...", selected: true },
        { name: "Streaming", apps: "Netflix, Youtube, Spotify e mais..", selected: false },
        { name: "Comunicação", apps: "Microsoft Teams e Cisco Webex", selected: false }
      ],
      speed: "5G mais rápido do mundo",
      price: "R$ 64,99",
      period: "/mês",
      benefits: ["VR", "Buser", "Cultura"],
      color: "from-[#660099] to-[#8B00FF]"
    },
    {
      id: 3,
      name: "PACOTE ADICIONAL",
      data: "30 GB",
      calls: "Ligações e SMS para qualquer operadora",
      options: [
        { name: "Redes Sociais", apps: "Instagram, Facebook, X e mais...", selected: true },
        { name: "Streaming", apps: "Netflix, Youtube, Spotify e mais..", selected: false },
        { name: "Comunicação", apps: "Microsoft Teams e Cisco Webex", selected: false }
      ],
      speed: "5G mais rápido do mundo",
      price: "R$ 69,99",
      period: "/mês",
      benefits: ["VR", "Buser", "Cultura"],
      color: "from-[#660099] to-[#8B00FF]"
    },
    {
      id: 4,
      name: "PACOTE ADICIONAL",
      data: "40 GB",
      calls: "Ligações e SMS para qualquer operadora",
      options: [
        { name: "Redes Sociais", apps: "Instagram, Facebook, X e mais...", selected: true },
        { name: "Streaming", apps: "Netflix, Youtube, Spotify e mais..", selected: false },
        { name: "Comunicação", apps: "Microsoft Teams e Cisco Webex", selected: false }
      ],
      speed: "5G mais rápido do mundo",
      price: "R$ 79,99",
      period: "/mês",
      benefits: ["VR", "Buser", "Cultura"],
      color: "from-[#660099] to-[#8B00FF]"
    }
  ]

  const renderPlanCard = (plan: any) => {
    return (
      <Card 
        key={plan.id} 
        className="relative bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden"
      >
        {/* Top Color Bar */}
        <div className={`h-2 bg-gradient-to-r ${plan.color}`}></div>
        
        <CardHeader className="pb-4 pt-6">
          <div className="flex justify-between items-start mb-3">
            <Badge className="bg-gradient-to-r from-[#660099] to-[#8B00FF] text-white px-3 py-1 text-xs font-semibold">
              {plan.badge}
            </Badge>
          </div>
          
          <CardTitle className="text-lg font-bold text-gray-800 mb-3">
            {plan.name}
          </CardTitle>
          
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-gradient-to-r from-[#660099] to-[#8B00FF] rounded-lg flex items-center justify-center">
              <Smartphone className="w-4 h-4 text-white" />
            </div>
            <span className="text-3xl font-bold text-gray-800 leading-none">{plan.data}</span>
          </div>

          {/* Detalhes dos dados */}
          {plan.dataDetails && (
            <p className="text-sm text-gray-600 mb-2">{plan.dataDetails}</p>
          )}
          
          {/* Bônus de portabilidade */}
          {plan.portabilityBonus && (
            <p className="text-sm text-gray-600 mb-3">{plan.portabilityBonus}</p>
          )}
          
          {/* Tipo de plano */}
          {plan.planType && (
            <p className="text-sm text-gray-600 mb-2">{plan.planType}</p>
          )}
          
          {/* Rede */}
          {plan.network && (
            <p className="text-sm text-gray-600 mb-3">{plan.network}</p>
          )}
          
          {/* Features */}
          {plan.features && (
            <div className="space-y-1 mb-3">
              {plan.features.map((feature: string, i: number) => (
                <p key={i} className="text-sm text-gray-600">{feature}</p>
              ))}
            </div>
          )}
          
          {/* MDM Section */}
          {plan.mdm && (
            <div className="border-t border-gray-200 pt-3 mb-3">
              <h4 className="text-sm font-semibold text-[#660099] mb-2">{plan.mdm.title}</h4>
              {plan.mdm.features.map((feature: string, i: number) => (
                <p key={i} className="text-xs text-gray-600 mb-1">{feature}</p>
              ))}
              <a href="#" className="text-xs text-[#660099] hover:underline">Saiba mais</a>
            </div>
          )}

          {/* Opções de pacotes adicionais */}
          {plan.options && (
            <div className="space-y-2 mb-3">
              {plan.options.map((option: any, i: number) => (
                <div key={i} className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    option.selected ? 'bg-[#660099] border-[#660099]' : 'border-gray-300'
                  }`}>
                    {option.selected && <div className="w-2 h-2 bg-white rounded-full"></div>}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">+ 10 GB {option.name}</p>
                    <p className="text-xs text-gray-600">{option.apps}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Velocidade */}
          {plan.speed && (
            <p className="text-sm text-gray-600 mb-3">{plan.speed}</p>
          )}
        </CardHeader>
        
        <CardContent className="space-y-4">
          {/* Benefícios */}
          {plan.benefits && (
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-semibold text-gray-800">Benefícios:</span>
              <div className="flex gap-2">
                {plan.benefits.map((benefit: string, i: number) => (
                  <div key={i} className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
                    <span className="text-xs font-semibold text-gray-600">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-800 leading-none">{plan.price}</div>
            <div className="text-gray-600 text-sm">{plan.period}</div>
          </div>
          
          <Button className="w-full bg-gradient-to-r from-[#EB3C7D] to-[#CC3D70] hover:from-[#d63384] hover:to-[#b02a5f] text-white font-semibold py-3 rounded-lg transition-all duration-300">
            Assinar Plano
          </Button>
          
          <div className="text-center">
            <a href="#" className="text-sm text-[#660099] hover:underline flex items-center justify-center gap-1">
              Mais detalhes
              <ChevronDown className="w-3 h-3" />
            </a>
            <a href="#" className="text-sm text-[#660099] hover:underline block mt-1">
              Mais informações
            </a>
          </div>
        </CardContent>
      </Card>
    )
  }

  const renderCarousel = (plans: any[]) => {
    const itemsPerPage = 4
    const totalPages = Math.ceil(plans.length / itemsPerPage)
    const startIndex = currentPage * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentPlans = plans.slice(startIndex, endIndex)

    return (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentPlans.map((plan) => renderPlanCard(plan))}
        </div>
        
        {/* Paginação */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
            disabled={currentPage === 0}
            className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5 text-[#660099]" />
          </button>
          
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === currentPage 
                    ? 'bg-[#660099] scale-110' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
            disabled={currentPage === totalPages - 1}
            className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5 text-[#660099]" />
          </button>
        </div>
      </div>
    )
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Escolha o plano ideal para sua empresa
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Planos flexíveis que se adaptam às necessidades do seu negócio
          </p>
        </div>

        <Tabs defaultValue="portabilidade" className="w-full">
          {/* Tabs de navegação */}
          <div className="max-w-5xl mx-auto mb-8">
            <TabsList className="grid w-full grid-cols-4 bg-gray-100 p-1 rounded-lg">
              <TabsTrigger 
                value="portabilidade" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#660099] data-[state=active]:to-[#8B00FF] data-[state=active]:text-white data-[state=active]:shadow-sm data-[state=inactive]:text-gray-600"
              >
                Portabilidade
              </TabsTrigger>
              <TabsTrigger 
                value="novaLinha" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#660099] data-[state=active]:to-[#8B00FF] data-[state=active]:text-white data-[state=active]:shadow-sm data-[state=inactive]:text-gray-600"
              >
                Nova Linha
              </TabsTrigger>
              <TabsTrigger 
                value="mdm" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#660099] data-[state=active]:to-[#8B00FF] data-[state=active]:text-white data-[state=active]:shadow-sm data-[state=inactive]:text-gray-600"
              >
                + MDM
              </TabsTrigger>
              <TabsTrigger 
                value="pacotesAdicionais" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#660099] data-[state=active]:to-[#8B00FF] data-[state=active]:text-white data-[state=active]:shadow-sm data-[state=inactive]:text-gray-600"
              >
                Pacotes Adicionais
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="portabilidade" className="space-y-8">
            {renderCarousel(portabilityPlans)}
          </TabsContent>
          
          <TabsContent value="novaLinha" className="space-y-8">
            {renderCarousel(novaLinhaPlans)}
          </TabsContent>
          
          <TabsContent value="mdm" className="space-y-8">
            {renderCarousel(mdmPlans)}
          </TabsContent>
          
          <TabsContent value="pacotesAdicionais" className="space-y-8">
            {renderCarousel(pacotesAdicionaisPlans)}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

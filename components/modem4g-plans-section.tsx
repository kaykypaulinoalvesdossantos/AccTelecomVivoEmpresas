"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Wifi, Smartphone } from "lucide-react"

export function Modem4GPlansSection(): React.JSX.Element {
  const planosInternet = [
    {
      gb: "10 GB",
      preco: "R$ 39,99",
      descricao: "Ideal para uso básico",
      features: [
        "Internet 4G de alta velocidade",
        "Modem portátil incluso",
        "Cobertura nacional",
        "Suporte técnico"
      ],
      popular: false,
      badge: "OFERTA IMPERDÍVEL"
    },
    {
      gb: "40 GB",
      preco: "R$ 59,99",
      descricao: "Para uso moderado",
      features: [
        "Internet 4G de alta velocidade",
        "Modem portátil incluso",
        "Cobertura nacional",
        "Suporte técnico",
        "Apps ilimitados"
      ],
      popular: false,
      badge: "OFERTA IMPERDÍVEL"
    },
    {
      gb: "100 GB",
      preco: "R$ 79,99",
      descricao: "Para uso intenso",
      features: [
        "Internet 4G de alta velocidade",
        "Modem portátil incluso",
        "Cobertura nacional",
        "Suporte técnico",
        "Apps ilimitados",
        "Prioridade na rede"
      ],
      popular: true,
      badge: "MAIS VENDIDO"
    }
  ]

  const planosCelular = [
    {
      gb: "6GB",
      preco: "R$ 39,99",
      descricao: "Ideal para uso básico",
      features: [
        "Utilize também seu celular como modem",
        "4G mais rápido do mundo",
        "Apps ilimitados",
        "Ligações ilimitadas"
      ],
      popular: false,
      badge: "OFERTA IMPERDÍVEL"
    },
    {
      gb: "15GB",
      preco: "R$ 44,99",
      descricao: "Para uso moderado",
      features: [
        "Utilize também seu celular como modem",
        "4G mais rápido do mundo",
        "Apps ilimitados",
        "Ligações ilimitadas"
      ],
      popular: false,
      badge: "OFERTA IMPERDÍVEL"
    },
    {
      gb: "20GB",
      preco: "R$ 54,99",
      descricao: "Para uso intenso",
      features: [
        "Utilize também seu celular como modem",
        "4G mais rápido do mundo",
        "Apps ilimitados",
        "Ligações ilimitadas"
      ],
      popular: true,
      badge: "MAIS VENDIDO"
    },
    {
      gb: "100GB",
      preco: "R$ 59,99",
      descricao: "Uso ilimitado",
      features: [
        "Utilize também seu celular como modem",
        "4G mais rápido do mundo",
        "Apps ilimitados",
        "Ligações ilimitadas"
      ],
      popular: false,
      badge: "OFERTA IMPERDÍVEL"
    }
  ]

  const renderPlanCard = (plano: any, isPopular: boolean = false) => {
    return (
      <Card key={plano.gb} className={`relative bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden ${
        isPopular ? 'border-[#660099] ring-2 ring-[#660099]/20 shadow-xl' : ''
      }`}>
        <CardHeader className="pb-4 pt-6">
          <div className="flex justify-between items-start mb-3">
            <Badge className="bg-green-100 text-green-800 px-3 py-1 text-xs font-semibold border border-green-200">
              {plano.badge}
            </Badge>
            {isPopular && (
              <Badge className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] text-white px-3 py-1 text-xs font-semibold">
                MAIS VENDIDO
              </Badge>
            )}
          </div>
          
          <CardTitle className="text-3xl font-bold text-gray-800 mb-3">
            {plano.gb}
          </CardTitle>
          
          <p className="text-sm text-gray-600 mb-3">
            {plano.descricao}
          </p>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">{plano.preco}</div>
            <div className="text-gray-600 text-sm">por mês</div>
          </div>
          
          <div className="space-y-3">
            {plano.features.map((feature: string, featureIndex: number) => (
              <div key={featureIndex} className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#660099] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>
          
          <Button className="w-full bg-gradient-to-r from-[#660099] to-[#EB3C7D] hover:from-[#7a0bb3] hover:to-[#ff1a75] text-white font-semibold py-3 rounded-lg transition-all duration-300">
            Assine já
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Escolha o plano ideal para sua empresa
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Todos os planos contam com o menor preço por giga de dados. Aproveite a tecnologia 4G 
            para impulsionar sua conectividade empresarial.
          </p>
        </div>

        <Tabs defaultValue="internet" className="w-full">
          <div className="text-center mb-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 bg-gray-100 p-1 rounded-lg">
              <TabsTrigger 
                value="internet" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#660099] data-[state=active]:to-[#EB3C7D] data-[state=active]:text-white data-[state=active]:shadow-sm data-[state=inactive]:text-gray-600"
              >
                Planos de internet
              </TabsTrigger>
              <TabsTrigger 
                value="celular" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#660099] data-[state=active]:to-[#EB3C7D] data-[state=active]:text-white data-[state=active]:shadow-sm data-[state=inactive]:text-gray-600"
              >
                Planos de celular
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="internet" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {planosInternet.map((plano) => renderPlanCard(plano, plano.popular))}
            </div>
          </TabsContent>

          <TabsContent value="celular" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {planosCelular.map((plano) => renderPlanCard(plano, plano.popular))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Banner CTA */}
        <div className="mt-12 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-2xl p-8 text-center text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Quer ver mais opções?</h3>
          <Button size="lg" className="bg-white text-[#660099] hover:bg-white/95 font-semibold px-8 py-3 shadow-lg border-2 border-white">
            VER MAIS PLANOS
          </Button>
        </div>
      </div>
    </section>
  )
}

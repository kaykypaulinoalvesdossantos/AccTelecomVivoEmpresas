"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Wifi, Smartphone, Zap, Star, ArrowRight } from "lucide-react"
import Link from "next/link"

const fiberPlans = [
  {
    name: "Fibra 200 Mega",
    speed: "200 Mbps",
    price: "R$ 89,90",
    originalPrice: "R$ 129,90",
    discount: "31% OFF",
    popular: false,
    features: [
      "200 Mbps de velocidade",
      "Upload simétrico",
      "Wi-Fi 6 incluso",
      "Instalação gratuita",
      "Suporte 24/7",
      "SLA 99.9%",
    ],
    extras: ["Roteador Wi-Fi 6", "Instalação em 48h"],
  },
  {
    name: "Fibra 500 Mega",
    speed: "500 Mbps",
    price: "R$ 129,90",
    originalPrice: "R$ 179,90",
    discount: "28% OFF",
    popular: true,
    features: [
      "500 Mbps de velocidade",
      "Upload simétrico",
      "Wi-Fi 6 Pro incluso",
      "Instalação gratuita",
      "Suporte prioritário 24/7",
      "SLA 99.9%",
    ],
    extras: ["Roteador Wi-Fi 6 Pro", "Instalação em 24h", "Técnico especializado"],
  },
  {
    name: "Fibra 1 Giga",
    speed: "1 Gbps",
    price: "R$ 199,90",
    originalPrice: "R$ 279,90",
    discount: "29% OFF",
    popular: false,
    features: [
      "1 Gbps de velocidade",
      "Upload simétrico",
      "Wi-Fi 6E incluso",
      "Instalação gratuita",
      "Suporte VIP 24/7",
      "SLA 99.9%",
    ],
    extras: ["Roteador Wi-Fi 6E", "Instalação prioritária", "Gerente de conta dedicado"],
  },
]

const mobilePlans = [
  {
    name: "Empresarial 20GB",
    data: "20 GB",
    price: "R$ 59,90",
    originalPrice: "R$ 79,90",
    discount: "25% OFF",
    popular: false,
    features: [
      "20GB de internet",
      "Ligações ilimitadas",
      "SMS ilimitado",
      "5G Nacional",
      "Roaming Nacional",
      "Gestão online",
    ],
    extras: ["Apps ilimitados", "Portabilidade gratuita"],
  },
  {
    name: "Empresarial 50GB",
    data: "50 GB",
    price: "R$ 89,90",
    originalPrice: "R$ 119,90",
    discount: "25% OFF",
    popular: true,
    features: [
      "50GB de internet",
      "Ligações ilimitadas",
      "SMS ilimitado",
      "5G Nacional",
      "Roaming Nacional e Internacional",
      "Gestão online avançada",
    ],
    extras: ["Apps ilimitados", "Portabilidade gratuita", "Desconto em aparelhos"],
  },
  {
    name: "Empresarial Ilimitado",
    data: "Ilimitado",
    price: "R$ 149,90",
    originalPrice: "R$ 199,90",
    discount: "25% OFF",
    popular: false,
    features: [
      "Internet ilimitada",
      "Ligações ilimitadas",
      "SMS ilimitado",
      "5G Nacional",
      "Roaming Internacional Premium",
      "Gestão online completa",
    ],
    extras: ["Apps ilimitados", "Portabilidade gratuita", "Aparelho incluso", "Suporte VIP"],
  },
]

export function PlansShowcase() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#660099]/10 text-[#660099] border-[#660099]/20">
            <Star className="w-4 h-4 mr-2" />
            Planos Empresariais
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Escolha o plano ideal
            <span className="block text-[#660099]">para sua empresa</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conectividade de alta performance com a qualidade e confiabilidade que sua empresa precisa. Planos flexíveis
            com suporte especializado e tecnologia de ponta.
          </p>
        </div>

        <Tabs defaultValue="fiber" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="fiber" className="flex items-center gap-2">
              <Wifi className="w-4 h-4" />
              Internet Fibra
            </TabsTrigger>
            <TabsTrigger value="mobile" className="flex items-center gap-2">
              <Smartphone className="w-4 h-4" />
              Planos Móveis
            </TabsTrigger>
          </TabsList>

          <TabsContent value="fiber">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {fiberPlans.map((plan, index) => (
                <Card
                  key={index}
                  className={`professional-card relative ${plan.popular ? "ring-2 ring-[#E91E63] scale-105" : ""}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-[#E91E63] text-white px-4 py-1">Mais Contratado</Badge>
                    </div>
                  )}

                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <div className="flex items-center justify-center mb-4">
                        <div className="p-3 bg-gradient-to-br from-[#660099] to-[#E91E63] rounded-2xl">
                          <Wifi className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                      <div className="text-4xl font-bold text-[#660099] mb-1">{plan.speed}</div>

                      <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                        <div className="text-right">
                          <div className="text-sm text-gray-500 line-through">{plan.originalPrice}</div>
                          <Badge variant="secondary" className="bg-green-100 text-green-700">
                            {plan.discount}
                          </Badge>
                        </div>
                      </div>

                      <p className="text-sm text-gray-600">por mês nos primeiros 12 meses</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="border-t pt-6 mb-8">
                      <h4 className="font-semibold text-gray-900 mb-3">Inclusos no plano:</h4>
                      <ul className="space-y-2">
                        {plan.extras.map((extra, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <Zap className="w-4 h-4 text-[#E91E63] mr-2 flex-shrink-0" />
                            {extra}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      className={`w-full ${plan.popular ? "bg-[#E91E63] hover:bg-[#E91E63]/90" : "bg-[#660099] hover:bg-[#660099]/90"}`}
                    >
                      Contratar Agora
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="mobile">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {mobilePlans.map((plan, index) => (
                <Card
                  key={index}
                  className={`professional-card relative ${plan.popular ? "ring-2 ring-[#E91E63] scale-105" : ""}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-[#E91E63] text-white px-4 py-1">Mais Contratado</Badge>
                    </div>
                  )}

                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <div className="flex items-center justify-center mb-4">
                        <div className="p-3 bg-gradient-to-br from-[#660099] to-[#E91E63] rounded-2xl">
                          <Smartphone className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                      <div className="text-4xl font-bold text-[#660099] mb-1">{plan.data}</div>

                      <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                        <div className="text-right">
                          <div className="text-sm text-gray-500 line-through">{plan.originalPrice}</div>
                          <Badge variant="secondary" className="bg-green-100 text-green-700">
                            {plan.discount}
                          </Badge>
                        </div>
                      </div>

                      <p className="text-sm text-gray-600">por linha/mês nos primeiros 12 meses</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="border-t pt-6 mb-8">
                      <h4 className="font-semibold text-gray-900 mb-3">Benefícios inclusos:</h4>
                      <ul className="space-y-2">
                        {plan.extras.map((extra, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <Zap className="w-4 h-4 text-[#E91E63] mr-2 flex-shrink-0" />
                            {extra}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      className={`w-full ${plan.popular ? "bg-[#E91E63] hover:bg-[#E91E63]/90" : "bg-[#660099] hover:bg-[#660099]/90"}`}
                    >
                      Contratar Agora
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Precisa de mais informações ou um plano personalizado?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contato">
              <Button
                size="lg"
                variant="outline"
                className="border-[#660099] text-[#660099] hover:bg-[#660099] hover:text-white bg-transparent"
              >
                Falar com Consultor
              </Button>
            </Link>
            <Link href="/planos">
              <Button size="lg" className="bg-[#660099] hover:bg-[#660099]/90">
                Ver Todos os Planos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

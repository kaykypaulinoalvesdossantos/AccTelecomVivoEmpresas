"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Star, Smartphone, Wifi, Shield, Cloud, Headphones, Users } from "lucide-react"

export function DetailedMobilePlans() {
  const plans = [
    {
      name: "Vivo Empresas Essencial",
      data: "16GB",
      originalPrice: "R$ 49,99",
      price: "R$ 39,99",
      discount: "20% OFF",
      period: "/mês por linha",
      description: "Ideal para pequenas empresas que precisam de conectividade básica",
      features: [
        "16GB de internet 4G/5G",
        "Ligações ilimitadas para qualquer operadora",
        "SMS ilimitado",
        "Roaming nacional gratuito",
        "Apps ilimitados (WhatsApp, Facebook, Instagram)",
        "Portabilidade gratuita",
        "Suporte técnico 24h",
      ],
      popular: false,
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Vivo Empresas Plus",
      data: "25GB",
      originalPrice: "R$ 69,99",
      price: "R$ 54,99",
      discount: "21% OFF",
      period: "/mês por linha",
      description: "Perfeito para equipes médias com alta demanda de dados",
      features: [
        "25GB de internet 4G/5G",
        "Ligações ilimitadas para qualquer operadora",
        "SMS ilimitado",
        "5G incluído sem custo adicional",
        "Roaming nacional gratuito",
        "Apps ilimitados (WhatsApp, Facebook, Instagram, Twitter)",
        "Backup na nuvem 50GB",
        "Portabilidade gratuita",
        "Suporte técnico prioritário 24h",
      ],
      popular: true,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Vivo Empresas Pro",
      data: "50GB",
      originalPrice: "R$ 99,99",
      price: "R$ 79,99",
      discount: "20% OFF",
      period: "/mês por linha",
      description: "Solução completa para empresas de médio porte",
      features: [
        "50GB de internet 4G/5G",
        "Ligações ilimitadas para qualquer operadora",
        "SMS ilimitado",
        "5G incluído sem custo adicional",
        "Roaming internacional (América do Sul)",
        "Apps ilimitados (todos os principais)",
        "Backup na nuvem 100GB",
        "Portabilidade gratuita",
        "Suporte técnico prioritário 24h",
        "Gerenciamento básico de frota",
      ],
      popular: false,
      color: "from-green-500 to-emerald-600",
    },
    {
      name: "Vivo Empresas Premium",
      data: "110GB",
      originalPrice: "R$ 129,99",
      price: "R$ 99,99",
      discount: "23% OFF",
      period: "/mês por linha",
      description: "Máxima performance para grandes corporações",
      features: [
        "110GB de internet 4G/5G",
        "Ligações ilimitadas para qualquer operadora",
        "SMS ilimitado",
        "5G incluído sem custo adicional",
        "Roaming internacional completo",
        "Apps ilimitados (todos os principais)",
        "Backup na nuvem ilimitado",
        "Portabilidade gratuita",
        "Suporte técnico VIP 24h",
        "Gerenciamento completo de frota",
        "Relatórios de consumo detalhados",
        "Consultor dedicado",
      ],
      popular: false,
      color: "from-orange-500 to-red-500",
    },
  ]

  const benefits = [
    {
      icon: Smartphone,
      title: "5G Incluído",
      description: "Acesso à rede 5G mais rápida do Brasil sem custo adicional",
    },
    {
      icon: Wifi,
      title: "Wi-Fi Calling",
      description: "Faça ligações usando Wi-Fi quando não houver sinal",
    },
    {
      icon: Shield,
      title: "Segurança Total",
      description: "Proteção avançada contra ameaças digitais",
    },
    {
      icon: Cloud,
      title: "Backup Automático",
      description: "Seus dados sempre seguros na nuvem",
    },
    {
      icon: Users,
      title: "Gestão Centralizada",
      description: "Controle todos os planos em um só lugar",
    },
    {
      icon: Headphones,
      title: "Suporte Especializado",
      description: "Atendimento prioritário para empresas",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">Planos Empresariais</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Escolha o plano ideal para sua empresa</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conectividade móvel completa com a rede 5G mais rápida do Brasil. Planos flexíveis com benefícios exclusivos
            para empresas de todos os tamanhos.
          </p>
        </div>

        <Tabs defaultValue="plans" className="mb-16">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
            <TabsTrigger value="plans">Planos Disponíveis</TabsTrigger>
            <TabsTrigger value="benefits">Benefícios Inclusos</TabsTrigger>
          </TabsList>

          <TabsContent value="plans">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {plans.map((plan, index) => (
                <Card
                  key={index}
                  className={`relative transition-all duration-300 hover:shadow-2xl ${plan.popular ? "ring-2 ring-purple-500 scale-105 shadow-xl" : "hover:scale-105"}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1">
                        <Star className="w-4 h-4 mr-1" />
                        Mais Contratado
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center`}
                    >
                      <Smartphone className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                    <CardDescription className="text-sm text-gray-600 mb-4">{plan.description}</CardDescription>

                    <div className="space-y-2">
                      <div className="text-4xl font-bold text-purple-600">{plan.data}</div>
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-sm text-gray-500 line-through">{plan.originalPrice}</span>
                        <Badge variant="destructive" className="text-xs">
                          {plan.discount}
                        </Badge>
                      </div>
                      <div className="text-3xl font-bold text-gray-900">
                        {plan.price}
                        <span className="text-sm font-normal text-gray-600">{plan.period}</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="space-y-3">
                      <Button
                        className={`w-full ${plan.popular ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600" : ""}`}
                        variant={plan.popular ? "default" : "outline"}
                      >
                        Contratar Agora
                      </Button>
                      <Button variant="ghost" className="w-full text-sm">
                        Mais Detalhes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="benefits">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center">
          <p className="text-gray-600 mb-6">Precisa de um plano personalizado para sua empresa?</p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          >
            Falar com Especialista
          </Button>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Star, Smartphone, Wifi, Shield, Cloud, Headphones, Users, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"

export function DetailedMobilePlans() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const plans = [
    {
      name: "Empresarial 6GB",
      data: "6 GB",
      price: "R$ 39,99",
      period: "/mês",
      description: "Ideal para pequenas empresas que precisam de conectividade básica",
      features: [
        "6GB de internet",
        "Ligações ilimitadas",
        "SMS ilimitado",
        "5G Nacional",
        "Roaming Nacional",
        "Gestão online",
      ],
      extras: ["Apps ilimitados", "Portabilidade gratuita"],
      popular: false,
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Empresarial 15GB",
      data: "15 GB",
      price: "R$ 54,99",
      period: "/mês",
      description: "Perfeito para equipes médias com alta demanda de dados",
      features: [
        "15GB de internet",
        "Ligações ilimitadas",
        "SMS ilimitado",
        "5G Nacional",
        "Roaming Nacional",
        "Gestão online",
      ],
      extras: ["Apps ilimitados", "Portabilidade gratuita"],
      popular: false,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Empresarial 20GB",
      data: "20 GB",
      price: "R$ 59,99",
      period: "/mês",
      description: "Solução completa para empresas de médio porte",
      features: [
        "20GB de internet",
        "Ligações ilimitadas",
        "SMS ilimitado",
        "5G Nacional",
        "Roaming Nacional",
        "Gestão online",
      ],
      extras: ["Apps ilimitados", "Portabilidade gratuita"],
      popular: true,
      color: "from-green-500 to-emerald-600",
    },
    {
      name: "Empresarial 30GB",
      data: "30 GB",
      price: "R$ 69,99",
      period: "/mês",
      description: "Para empresas com alta demanda de conectividade",
      features: [
        "30GB de internet",
        "Ligações ilimitadas",
        "SMS ilimitado",
        "5G Nacional",
        "Roaming Nacional",
        "Gestão online",
      ],
      extras: ["Apps ilimitados", "Portabilidade gratuita"],
      popular: false,
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Empresarial 40GB",
      data: "40 GB",
      price: "R$ 79,99",
      period: "/mês",
      description: "Para empresas com múltiplas equipes",
      features: [
        "40GB de internet",
        "Ligações ilimitadas",
        "SMS ilimitado",
        "5G Nacional",
        "Roaming Nacional",
        "Gestão online",
      ],
      extras: ["Apps ilimitados", "Portabilidade gratuita"],
      popular: false,
      color: "from-indigo-500 to-purple-600",
    },
    {
      name: "Empresarial 50GB",
      data: "50 GB",
      price: "R$ 89,99",
      period: "/mês",
      description: "Para empresas de grande porte",
      features: [
        "50GB de internet",
        "Ligações ilimitadas",
        "SMS ilimitado",
        "5G Nacional",
        "Roaming Nacional",
        "Gestão online",
      ],
      extras: ["Apps ilimitados", "Portabilidade gratuita"],
      popular: false,
      color: "from-teal-500 to-cyan-600",
    },
    {
      name: "Empresarial 100GB",
      data: "100 GB",
      price: "R$ 99,99",
      period: "/mês",
      description: "Máxima performance para grandes corporações",
      features: [
        "100GB de internet",
        "Ligações ilimitadas",
        "SMS ilimitado",
        "5G Nacional",
        "Roaming Nacional",
        "Gestão online",
      ],
      extras: ["Apps ilimitados", "Portabilidade gratuita"],
      popular: false,
      color: "from-pink-500 to-rose-600",
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(0, plans.length - 4)
      return prevIndex >= maxIndex ? maxIndex : prevIndex + 1
    })
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex <= 0 ? 0 : prevIndex - 1
    })
  }

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
            <div className="relative">
              {/* Carrossel Container */}
              <div className="overflow-hidden px-8 py-8">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 25}%)` }}
                >
                  {plans.map((plan, index) => (
                    <div key={index} className="w-1/4 flex-shrink-0 px-4">
                      <div className="relative">
                        {plan.popular && (
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-20">
                            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 text-xs shadow-lg">
                              <Star className="w-3 h-3 mr-1" />
                              Mais Contratado
                            </Badge>
                          </div>
                        )}
                        <Card
                          className={`relative transition-all duration-300 hover:shadow-2xl ${plan.popular ? "ring-2 ring-purple-500 scale-105 shadow-xl" : "hover:scale-105"}`}
                        >

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

                          <div className="border-t pt-6 mb-8">
                            <h4 className="font-semibold text-gray-900 mb-3">Benefícios inclusos:</h4>
                            <ul className="space-y-2">
                              {plan.extras.map((extra, idx) => (
                                <li key={idx} className="flex items-center text-sm text-gray-600">
                                  <Check className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" />
                                  {extra}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="space-y-3">
                            <Button
                              className={`w-full ${plan.popular ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600" : "bg-purple-600 hover:bg-purple-700"} text-white`}
                            >
                              Contratar Agora
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              className="w-full text-sm"
                              asChild
                            >
                              <a 
                                href="https://wa.me/551123629665" 
                                target="_blank" 
                                rel="noopener noreferrer"
                              >
                                Mais Detalhes
                              </a>
                            </Button>
                          </div>
                        </CardContent>
                        </Card>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-center items-center mt-8 space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevSlide}
                  disabled={currentIndex === 0}
                  className="rounded-full p-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                
                {/* Dots Indicator */}
                <div className="flex space-x-2">
                  {Array.from({ length: Math.max(1, plans.length - 3) }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentIndex ? "bg-purple-600" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextSlide}
                  disabled={currentIndex >= Math.max(0, plans.length - 4)}
                  className="rounded-full p-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
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

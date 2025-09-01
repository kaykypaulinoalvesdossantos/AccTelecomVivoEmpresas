"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star } from "lucide-react"

export function PlansSection() {
  const mobileePlans = [
    {
      name: "Vivo Empresas 16GB",
      data: "16GB",
      price: "R$ 39,99",
      period: "/mês",
      features: ["Ligações ilimitadas", "SMS ilimitado", "Apps ilimitados", "Roaming Nacional"],
      popular: false,
    },
    {
      name: "Vivo Empresas 25GB",
      data: "25GB",
      price: "R$ 54,99",
      period: "/mês",
      features: ["Ligações ilimitadas", "SMS ilimitado", "Apps ilimitados", "Roaming Nacional", "5G"],
      popular: true,
    },
    {
      name: "Vivo Empresas 110GB",
      data: "110GB",
      price: "R$ 99,99",
      period: "/mês",
      features: ["Ligações ilimitadas", "SMS ilimitado", "Apps ilimitados", "Roaming Nacional", "5G", "Paramount+"],
      popular: false,
    },
  ]

  const fiberPlans = [
    {
      name: "Vivo Fibra 400 Mega",
      speed: "400 Mega",
      price: "R$ 79,99",
      period: "/mês",
      features: ["Wi-Fi 6 incluso", "Instalação grátis", "Suporte 24h", "IP fixo"],
      popular: false,
    },
    {
      name: "Vivo Fibra 600 Mega",
      speed: "600 Mega",
      price: "R$ 99,99",
      period: "/mês",
      features: ["Wi-Fi 6 incluso", "Instalação grátis", "Suporte 24h", "IP fixo", "Paramount+"],
      popular: true,
    },
    {
      name: "Vivo Fibra 1 Giga",
      speed: "1 Giga",
      price: "R$ 149,99",
      period: "/mês",
      features: ["Wi-Fi 6 incluso", "Instalação grátis", "Suporte 24h", "IP fixo", "Paramount+", "Suporte prioritário"],
      popular: false,
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">Planos que se adaptam ao seu negócio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha entre nossos planos móveis e de internet fibra, desenvolvidos especialmente para empresas.
          </p>
        </div>

        {/* Mobile Plans */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-8">Planos Móveis</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {mobileePlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative transition-all duration-300 hover:scale-105 ${plan.popular ? "border-secondary shadow-lg" : ""}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-secondary">
                    <Star className="w-3 h-3 mr-1" />
                    Mais Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-primary">{plan.data}</div>
                  <div className="text-2xl font-bold">
                    {plan.price}
                    <span className="text-sm text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${plan.popular ? "bg-secondary hover:bg-secondary/90" : ""}`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Contratar Plano
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Fiber Plans */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Internet Fibra</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {fiberPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative transition-all duration-300 hover:scale-105 ${plan.popular ? "border-secondary shadow-lg" : ""}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-secondary">
                    <Star className="w-3 h-3 mr-1" />
                    Mais Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-primary">{plan.speed}</div>
                  <div className="text-2xl font-bold">
                    {plan.price}
                    <span className="text-sm text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${plan.popular ? "bg-secondary hover:bg-secondary/90" : ""}`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Contratar Plano
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Wifi, Zap } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function DetailedPlansSection() {
  const mobilePlans = [
    {
      name: "Vivo Empresas",
      subtitle: "Plano de Celular Básico",
      data: "16 GB",
      price: "R$ 39,99",
      originalPrice: "R$ 49,99",
      period: "/mês",
      discount: "20% OFF",
      features: [
        "16 GB de internet móvel",
        "Ligações ilimitadas para qualquer operadora",
        "SMS ilimitado",
        "Apps ilimitados: WhatsApp, Facebook, Instagram",
        "Roaming Nacional gratuito",
        "Acesso à rede 4G",
        "Suporte técnico 24h",
      ],
      additionalInfo: "Instalação e Wi-Fi 6 Grátis",
      popular: false,
      color: "from-[#660099] to-[#EB3C7D]",
    },
    {
      name: "Vivo Empresas",
      subtitle: "Plano de Celular Completo",
      data: "25 GB",
      price: "R$ 54,99",
      originalPrice: "R$ 69,99",
      period: "/mês",
      discount: "21% OFF",
      features: [
        "25 GB de internet móvel",
        "Ligações ilimitadas para qualquer operadora",
        "SMS ilimitado",
        "Apps ilimitados: WhatsApp, Facebook, Instagram, Twitter",
        "Roaming Nacional e Internacional",
        "Acesso à rede 5G",
        "Paramount+ incluso",
        "Suporte técnico prioritário 24h",
        "Backup na nuvem 50GB",
      ],
      additionalInfo: "Instalação e Wi-Fi 6 Grátis",
      popular: true,
      color: "from-[#660099] to-[#EB3C7D]",
    },
    {
      name: "Vivo Empresas",
      subtitle: "Plano de Celular Premium",
      data: "110 GB",
      price: "R$ 99,99",
      originalPrice: "R$ 129,99",
      period: "/mês",
      discount: "23% OFF",
      features: [
        "110 GB de internet móvel",
        "Ligações ilimitadas para qualquer operadora",
        "SMS ilimitado",
        "Apps ilimitados completos",
        "Roaming Nacional e Internacional premium",
        "Acesso à rede 5G prioritário",
        "Paramount+ e Netflix incluso",
        "Suporte técnico VIP 24h",
        "Backup na nuvem ilimitado",
        "Seguro celular incluso",
        "Gerente de conta dedicado",
      ],
      additionalInfo: "Instalação e Wi-Fi 6 Grátis + Roteador Premium",
      popular: false,
      color: "from-[#660099] to-[#EB3C7D]",
    },
  ]

  const fiberPlans = [
    {
      name: "Vivo Fibra",
      subtitle: "Internet Empresarial",
      speed: "400 Mega",
      price: "R$ 79,99",
      originalPrice: "R$ 99,99",
      period: "/mês",
      discount: "20% OFF",
      features: [
        "400 Mega de velocidade",
        "Upload simétrico",
        "Wi-Fi 6 incluso",
        "Instalação gratuita",
        "IP fixo disponível",
        "Suporte técnico 24h",
        "Roteador Wi-Fi incluso",
        "Sem fidelidade",
      ],
      additionalInfo: "Instalação e Wi-Fi 6 Grátis",
      popular: false,
      color: "from-[#660099] to-[#EB3C7D]",
    },
    {
      name: "Vivo Fibra",
      subtitle: "Internet Empresarial Plus",
      speed: "700 Mega",
      price: "R$ 99,99",
      originalPrice: "R$ 129,99",
      period: "/mês",
      discount: "23% OFF",
      features: [
        "700 Mega de velocidade",
        "Upload simétrico",
        "Wi-Fi 6 Pro incluso",
        "Instalação gratuita",
        "IP fixo incluso",
        "Suporte técnico prioritário 24h",
        "Roteador Wi-Fi Pro incluso",
        "Paramount+ incluso",
        "Antivírus empresarial",
        "Backup na nuvem 100GB",
      ],
      additionalInfo: "700 Mega + 23 GB + 1 Móvel",
      popular: true,
      color: "from-[#660099] to-[#EB3C7D]",
    },
    {
      name: "Vivo Fibra",
      subtitle: "Internet Empresarial Premium",
      speed: "600 Mega",
      price: "R$ 94,99",
      originalPrice: "R$ 119,99",
      period: "/mês",
      discount: "21% OFF",
      features: [
        "600 Mega de velocidade",
        "Upload simétrico",
        "Wi-Fi 6 incluso",
        "Instalação gratuita",
        "IP fixo incluso",
        "Suporte técnico 24h",
        "Roteador Wi-Fi incluso",
        "Paramount+ incluso",
        "Antivírus empresarial",
      ],
      additionalInfo: "600 Mega + Móvel 5GB",
      popular: false,
      color: "from-[#660099] to-[#EB3C7D]",
    },
    {
      name: "Vivo Fibra",
      subtitle: "Internet Empresarial Ultra",
      speed: "500 Mega",
      price: "R$ 89,99",
      originalPrice: "R$ 109,99",
      period: "/mês",
      discount: "18% OFF",
      features: [
        "500 Mega de velocidade",
        "Upload simétrico",
        "Wi-Fi 6 incluso",
        "Instalação gratuita",
        "IP fixo disponível",
        "Suporte técnico 24h",
        "Roteador Wi-Fi incluso",
      ],
      additionalInfo: "500 Mega + Móvel 3GB",
      popular: false,
      color: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-[#660099]/5 via-background to-[#EB3C7D]/5 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-[#660099]/10 to-[#EB3C7D]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tl from-[#EB3C7D]/10 to-[#660099]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Tabs defaultValue="mobile" className="w-full">
          <div className="text-center mb-12">
            <Badge className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] text-white px-6 py-2 mb-6 backdrop-blur-sm">
              <Zap className="w-4 h-4 mr-2" />
              PLANOS FUTURISTAS
            </Badge>
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8 bg-white/10 backdrop-blur-sm border border-white/20">
              <TabsTrigger value="mobile" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#660099] data-[state=active]:to-[#EB3C7D] data-[state=active]:text-white">Móvel</TabsTrigger>
              <TabsTrigger value="fiber" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#660099] data-[state=active]:to-[#EB3C7D] data-[state=active]:text-white">Fibra</TabsTrigger>
              <TabsTrigger value="combo" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#660099] data-[state=active]:to-[#EB3C7D] data-[state=active]:text-white">Fibra + Pós</TabsTrigger>
              <TabsTrigger value="devices" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#660099] data-[state=active]:to-[#EB3C7D] data-[state=active]:text-white">Móvel + Aparelho</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="mobile" className="space-y-8">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Confira agora nossas ofertas e tenha mais conectividade
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Planos móveis empresariais com a melhor cobertura 5G do Brasil e benefícios exclusivos para sua empresa.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {mobilePlans.map((plan, index) => (
                <Card
                  key={index}
                  className={`relative transition-all duration-500 hover:scale-105 hover:shadow-2xl bg-white/80 backdrop-blur-sm border border-white/20 ${
                    plan.popular ? "ring-2 ring-[#EB3C7D] shadow-2xl scale-105 animate-pulse-glow" : "hover:ring-1 hover:ring-[#660099]/30"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <Badge className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] text-white px-4 py-2 text-sm font-semibold shadow-lg">
                        <Star className="w-4 h-4 mr-1" />
                        MAIS CONTRATADO
                      </Badge>
                    </div>
                  )}

                  <div className={`h-3 bg-gradient-to-r ${plan.color} rounded-t-lg shadow-lg`}></div>

                  <CardHeader className="text-center pb-4">
                    <div className="space-y-2">
                      <CardTitle className="text-lg font-semibold text-gray-600">{plan.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{plan.subtitle}</p>
                      <div className="flex items-center justify-center space-x-2">
                        <Wifi className="w-6 h-6 text-primary" />
                        <span className="text-3xl font-bold text-primary">{plan.data}</span>
                      </div>
                      <div className="space-y-1">
                        {plan.originalPrice && (
                          <div className="text-sm text-muted-foreground line-through">{plan.originalPrice}</div>
                        )}
                        <div className="text-3xl font-bold text-foreground">
                          {plan.price}
                          <span className="text-sm text-muted-foreground font-normal">{plan.period}</span>
                        </div>
                        {plan.discount && (
                          <Badge variant="destructive" className="text-xs">
                            {plan.discount}
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">{plan.additionalInfo}</p>
                    </div>
                  </CardHeader>

                  <CardContent className="px-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="px-6 pb-6">
                    <div className="w-full space-y-3">
                      <Button
                        className={`w-full ${
                          plan.popular
                            ? "bg-secondary hover:bg-secondary/90 text-white"
                            : "bg-primary hover:bg-primary/90"
                        }`}
                      >
                        Contratar agora
                      </Button>
                      <Button variant="ghost" className="w-full text-sm text-primary">
                        Mais detalhes →
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="fiber" className="space-y-8">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Vivo Fibra para seu negócio com instalação e Wi-Fi grátis
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Internet fibra óptica com a velocidade que sua empresa precisa. Instalação gratuita e Wi-Fi 6 incluso.
              </p>
            </div>

            <div className="grid lg:grid-cols-4 gap-6">
              {fiberPlans.map((plan, index) => (
                <Card
                  key={index}
                  className={`relative transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                    plan.popular ? "border-2 border-secondary shadow-lg scale-105" : "border"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <Badge className="bg-secondary text-white px-4 py-2 text-sm font-semibold">
                        <Star className="w-4 h-4 mr-1" />
                        MAIS CONTRATADO
                      </Badge>
                    </div>
                  )}

                  <div className={`h-2 bg-gradient-to-r ${plan.color} rounded-t-lg`}></div>

                  <CardHeader className="text-center pb-4">
                    <div className="space-y-2">
                      <CardTitle className="text-lg font-semibold text-gray-600">{plan.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{plan.subtitle}</p>
                      <div className="flex items-center justify-center space-x-2">
                        <Wifi className="w-6 h-6 text-primary" />
                        <span className="text-3xl font-bold text-primary">{plan.speed}</span>
                      </div>
                      <div className="space-y-1">
                        {plan.originalPrice && (
                          <div className="text-sm text-muted-foreground line-through">{plan.originalPrice}</div>
                        )}
                        <div className="text-3xl font-bold text-foreground">
                          {plan.price}
                          <span className="text-sm text-muted-foreground font-normal">{plan.period}</span>
                        </div>
                        {plan.discount && (
                          <Badge variant="destructive" className="text-xs">
                            {plan.discount}
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">{plan.additionalInfo}</p>
                    </div>
                  </CardHeader>

                  <CardContent className="px-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="px-6 pb-6">
                    <div className="w-full space-y-3">
                      <Button
                        className={`w-full ${
                          plan.popular
                            ? "bg-secondary hover:bg-secondary/90 text-white"
                            : "bg-primary hover:bg-primary/90"
                        }`}
                      >
                        Contratar agora
                      </Button>
                      <Button variant="ghost" className="w-full text-sm text-primary">
                        Mais detalhes →
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="combo">
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold mb-4">Combos Fibra + Pós</h3>
              <p className="text-muted-foreground">Em breve: combos especiais com desconto progressivo.</p>
            </div>
          </TabsContent>

          <TabsContent value="devices">
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold mb-4">Móvel + Aparelho</h3>
              <p className="text-muted-foreground">Em breve: planos com smartphones inclusos.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

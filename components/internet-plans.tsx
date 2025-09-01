import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Wifi } from "lucide-react"

export function InternetPlans() {
  const plans = [
    {
      name: "Fibra Essencial",
      speed: "200 Mega",
      upload: "100 Mega",
      price: "R$ 89,99",
      period: "/mês",
      features: ["200 Mega download", "100 Mega upload", "Wi-Fi 6 grátis", "Instalação gratuita", "Suporte 24h"],
      popular: false,
    },
    {
      name: "Fibra Empresarial",
      speed: "600 Mega",
      upload: "300 Mega",
      price: "R$ 129,99",
      period: "/mês",
      features: [
        "600 Mega download",
        "300 Mega upload",
        "Wi-Fi 6 grátis",
        "IP fixo incluído",
        "Instalação gratuita",
        "Suporte prioritário",
        "Backup 4G",
      ],
      popular: true,
    },
    {
      name: "Fibra Corporativa",
      speed: "1 Giga",
      upload: "500 Mega",
      price: "R$ 199,99",
      period: "/mês",
      features: [
        "1 Giga download",
        "500 Mega upload",
        "Wi-Fi 6 Pro grátis",
        "IP fixo incluído",
        "Instalação gratuita",
        "Suporte dedicado",
        "Backup 4G",
        "SLA 99,9%",
      ],
      popular: false,
    },
    {
      name: "Fibra Premium",
      speed: "2 Giga",
      upload: "1 Giga",
      price: "R$ 299,99",
      period: "/mês",
      features: [
        "2 Giga download",
        "1 Giga upload",
        "Wi-Fi 6E grátis",
        "Múltiplos IPs fixos",
        "Instalação gratuita",
        "Gerente dedicado",
        "Backup 5G",
        "SLA 99,9%",
        "Monitoramento 24h",
      ],
      popular: false,
    },
  ]

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan, index) => (
          <Card key={index} className={`relative ${plan.popular ? "ring-2 ring-primary scale-105" : ""}`}>
            {plan.popular && (
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">Mais Popular</Badge>
            )}
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Wifi className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-lg">{plan.name}</CardTitle>
              <CardDescription className="text-2xl font-bold text-primary">{plan.speed}</CardDescription>
              <div className="text-sm text-muted-foreground">Upload: {plan.upload}</div>
              <div className="text-3xl font-bold text-foreground">
                {plan.price}
                <span className="text-sm font-normal text-muted-foreground">{plan.period}</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                Contratar Plano
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-muted/50 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Benefícios Inclusos em Todos os Planos</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-2">
            <Check className="h-5 w-5 text-primary" />
            <span>Instalação gratuita</span>
          </div>
          <div className="flex items-center space-x-2">
            <Check className="h-5 w-5 text-primary" />
            <span>Sem fidelidade</span>
          </div>
          <div className="flex items-center space-x-2">
            <Check className="h-5 w-5 text-primary" />
            <span>Suporte técnico especializado</span>
          </div>
        </div>
      </div>
    </div>
  )
}

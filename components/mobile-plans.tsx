import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

export function MobilePlans() {
  const plans = [
    {
      name: "Plano Essencial",
      data: "16GB",
      price: "R$ 39,99",
      period: "/mês",
      features: ["16GB de internet", "Ligações ilimitadas", "SMS ilimitado", "Roaming nacional", "Apps ilimitados"],
      popular: false,
    },
    {
      name: "Plano Empresarial",
      data: "25GB",
      price: "R$ 54,99",
      period: "/mês",
      features: [
        "25GB de internet",
        "Ligações ilimitadas",
        "SMS ilimitado",
        "5G incluído",
        "Roaming nacional",
        "Apps ilimitados",
        "Backup na nuvem",
      ],
      popular: true,
    },
    {
      name: "Plano Corporativo",
      data: "50GB",
      price: "R$ 79,99",
      period: "/mês",
      features: [
        "50GB de internet",
        "Ligações ilimitadas",
        "SMS ilimitado",
        "5G incluído",
        "Roaming internacional",
        "Apps ilimitados",
        "Backup na nuvem",
        "Suporte prioritário",
      ],
      popular: false,
    },
    {
      name: "Plano Premium",
      data: "110GB",
      price: "R$ 99,99",
      period: "/mês",
      features: [
        "110GB de internet",
        "Ligações ilimitadas",
        "SMS ilimitado",
        "5G incluído",
        "Roaming internacional",
        "Apps ilimitados",
        "Backup na nuvem",
        "Suporte prioritário",
        "Gerenciamento de frota",
      ],
      popular: false,
    },
  ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {plans.map((plan, index) => (
        <Card key={index} className={`relative ${plan.popular ? "ring-2 ring-primary scale-105" : ""}`}>
          {plan.popular && (
            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">Mais Popular</Badge>
          )}
          <CardHeader className="text-center">
            <CardTitle className="text-lg">{plan.name}</CardTitle>
            <CardDescription className="text-2xl font-bold text-primary">{plan.data}</CardDescription>
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
  )
}

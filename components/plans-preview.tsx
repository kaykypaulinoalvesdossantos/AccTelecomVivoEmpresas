import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Wifi, ArrowRight } from "lucide-react"

export function PlansPreview() {
  const featuredPlans = [
    {
      type: "Móvel",
      name: "Plano Empresarial 25GB",
      price: "R$ 54,99",
      period: "/mês",
      features: ["25GB de internet", "Ligações ilimitadas", "SMS ilimitado", "5G incluído"],
      popular: true,
      icon: Smartphone,
      href: "/planos/moveis",
    },
    {
      type: "Fibra",
      name: "Internet 600 Mega",
      price: "R$ 129,99",
      period: "/mês",
      features: ["600 Mega download", "300 Mega upload", "Wi-Fi 6 grátis", "IP fixo incluído"],
      popular: false,
      icon: Wifi,
      href: "/planos/internet",
    },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Planos em Destaque</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça nossos planos mais populares para empresas de todos os tamanhos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {featuredPlans.map((plan, index) => {
            const IconComponent = plan.icon
            return (
              <Card key={index} className={`relative ${plan.popular ? "ring-2 ring-primary" : ""}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">Mais Popular</Badge>
                )}
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">{plan.type}</CardDescription>
                  <div className="text-3xl font-bold text-primary">
                    {plan.price}
                    <span className="text-sm font-normal text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link href={plan.href}>Ver Detalhes</Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/planos" className="inline-flex items-center">
              Ver Todos os Planos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

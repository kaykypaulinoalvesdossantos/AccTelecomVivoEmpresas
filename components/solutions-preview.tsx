import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cloud, Shield, Users, ArrowRight } from "lucide-react"

export function SolutionsPreview() {
  const solutions = [
    {
      icon: Cloud,
      title: "Microsoft 365",
      description: "Produtividade completa na nuvem com Office, Teams e OneDrive",
      href: "/solucoes#microsoft",
    },
    {
      icon: Shield,
      title: "Segurança Digital",
      description: "Proteção avançada contra ameaças cibernéticas",
      href: "/solucoes#seguranca",
    },
    {
      icon: Users,
      title: "Google Workspace",
      description: "Colaboração em tempo real com Gmail, Drive e Meet",
      href: "/solucoes#google",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Soluções Digitais</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transforme sua empresa com tecnologias que aumentam a produtividade
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                  <CardDescription>{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href={solution.href}>Saiba Mais</Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/solucoes" className="inline-flex items-center">
              Ver Todas as Soluções
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Cloud, Shield, Smartphone, Wifi, Users, BarChart3, ArrowRight } from "lucide-react"

export function SolutionsSection() {
  const solutions = [
    {
      icon: Cloud,
      title: "Cloud Computing",
      description: "Soluções em nuvem para armazenamento, backup e colaboração empresarial.",
      features: ["AWS", "Microsoft Azure", "Google Cloud", "Backup automático"],
      color: "text-blue-600",
    },
    {
      icon: Shield,
      title: "Segurança Digital",
      description: "Proteção completa contra ameaças digitais e gestão de segurança.",
      features: ["Antivírus empresarial", "Firewall", "VPN", "Monitoramento 24h"],
      color: "text-green-600",
    },
    {
      icon: Users,
      title: "Colaboração",
      description: "Ferramentas para trabalho em equipe e produtividade empresarial.",
      features: ["Microsoft 365", "Google Workspace", "Teams", "Videoconferência"],
      color: "text-purple-600",
    },
    {
      icon: Smartphone,
      title: "IoT Empresarial",
      description: "Internet das Coisas para automação e monitoramento inteligente.",
      features: ["Sensores IoT", "Gestão remota", "Analytics", "Automação"],
      color: "text-orange-600",
    },
    {
      icon: Wifi,
      title: "Conectividade",
      description: "Soluções de rede e conectividade para empresas de todos os portes.",
      features: ["SD-WAN", "MPLS", "Internet dedicada", "Wi-Fi corporativo"],
      color: "text-indigo-600",
    },
    {
      icon: BarChart3,
      title: "Analytics",
      description: "Inteligência de dados para tomada de decisões estratégicas.",
      features: ["Business Intelligence", "Dashboards", "Relatórios", "Big Data"],
      color: "text-pink-600",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">Soluções digitais completas</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transforme sua empresa com nossas soluções tecnológicas integradas, desenvolvidas para impulsionar a
            inovação e o crescimento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div
                  className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <solution.icon className={`h-6 w-6 ${solution.color}`} />
                </div>
                <CardTitle className="text-xl">{solution.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="ghost"
                  className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                >
                  Saiba mais
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-secondary hover:bg-secondary/90">
            Ver todas as soluções
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

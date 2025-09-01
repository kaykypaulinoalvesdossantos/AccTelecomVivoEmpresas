"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Zap, Headphones, Award, Wifi, Users } from "lucide-react"

export function PlansBenefitsSection() {
  const benefits = [
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "5G",
      subtitle: "Tecnologia",
      description:
        "Navegue na rede 5G mais rápida do Brasil. Tenha velocidade e baixa latência para aplicações críticas do seu negócio.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Prêmios",
      subtitle: "Reconhecimento",
      description:
        "Melhor operadora em qualidade de rede segundo a Opensignal. Cobertura e velocidade premiadas nacionalmente.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Wifi className="w-8 h-8 text-primary" />,
      title: "Wi-Fi 6",
      subtitle: "Tecnologia",
      description:
        "Roteador Wi-Fi 6 incluso nos planos fibra. Maior velocidade, menor latência e suporte para mais dispositivos.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Headphones className="w-8 h-8 text-primary" />,
      title: "Suporte 24h",
      subtitle: "Atendimento",
      description:
        "Suporte técnico especializado 24 horas por dia, 7 dias por semana. Atendimento prioritário para empresas.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Instalação",
      subtitle: "Gratuita",
      description:
        "Instalação profissional gratuita em até 5 dias úteis. Técnicos especializados e equipamentos de última geração.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Gerente",
      subtitle: "Dedicado",
      description: "Gerente de conta dedicado para planos premium. Atendimento personalizado e soluções sob medida.",
      color: "from-pink-500 to-rose-500",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-sm px-4 py-2">
            Vantagens Exclusivas
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Com o plano de dados Vivo Empresas seu 5G rende mais!
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Descubra todos os benefícios exclusivos que só a Vivo Empresas oferece para o seu negócio crescer ainda
            mais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white">
              <CardContent className="p-8 text-center space-y-4">
                <div
                  className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${benefit.color} flex items-center justify-center text-white`}
                >
                  {benefit.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground">{benefit.title}</h3>
                  <p className="text-sm text-primary font-semibold uppercase tracking-wide">{benefit.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Sua empresa mais rápida e eficiente com o Wi-Fi 6
            </h3>
            <p className="text-muted-foreground mb-6">
              A Vivo Fibra é a internet fibra mais rápida do Brasil com tecnologia Wi-Fi 6 inclusa. Tenha velocidade de
              até 1 Giga e conecte todos os dispositivos da sua empresa sem perder performance.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">99.9%</div>
                <p className="text-sm text-muted-foreground">Disponibilidade da rede</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">24h</div>
                <p className="text-sm text-muted-foreground">Suporte técnico</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">5 dias</div>
                <p className="text-sm text-muted-foreground">Instalação gratuita</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

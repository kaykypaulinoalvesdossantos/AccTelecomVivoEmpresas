"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Headphones, Clock, Shield, Truck, Users, Award, ArrowRight } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    {
      icon: Headphones,
      title: "Suporte 24/7",
      description: "Atendimento especializado disponível 24 horas por dia, 7 dias por semana.",
    },
    {
      icon: Clock,
      title: "Instalação Rápida",
      description: "Instalação e ativação em até 48 horas úteis após a contratação.",
    },
    {
      icon: Shield,
      title: "Garantia Total",
      description: "Garantia completa em todos os serviços e equipamentos fornecidos.",
    },
    {
      icon: Truck,
      title: "Entrega Grátis",
      description: "Entrega gratuita de equipamentos em todo o território nacional.",
    },
    {
      icon: Users,
      title: "Consultor Dedicado",
      description: "Consultor especializado para acompanhar sua empresa.",
    },
    {
      icon: Award,
      title: "Melhor Rede",
      description: "Rede 5G mais rápida e confiável do Brasil.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">Por que escolher a Vivo Empresas?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Benefícios exclusivos que fazem a diferença para o sucesso da sua empresa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-muted/30">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <benefit.icon className="h-8 w-8 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 lg:p-12 text-center text-white">
          <div className="max-w-3xl mx-auto space-y-6">
            <h3 className="text-3xl lg:text-4xl font-bold">Pronto para transformar sua empresa?</h3>
            <p className="text-lg opacity-90">
              Fale com nossos especialistas e descubra a solução ideal para o seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Falar com Consultor
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                Ver Planos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

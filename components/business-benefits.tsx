"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Shield, Clock, Users, Headphones, Award, Zap, CheckCircle, BarChart3, Globe } from "lucide-react"

const benefits = [
  {
    icon: TrendingUp,
    title: "Aumento de Produtividade",
    description:
      "Conectividade de alta performance que acelera processos e melhora a eficiência operacional da sua empresa.",
    stats: "Até 40% mais produtividade",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Shield,
    title: "Segurança Avançada",
    description:
      "Proteção multicamadas com firewall, antivírus corporativo e monitoramento 24/7 contra ameaças digitais.",
    stats: "99.9% de proteção",
    color: "from-[#660099] to-[#EB3C7D]",
  },
  {
    icon: Clock,
    title: "Suporte 24/7",
    description:
      "Equipe técnica especializada disponível 24 horas por dia, 7 dias por semana para resolver qualquer problema.",
    stats: "Tempo médio: 2 minutos",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Gestão Centralizada",
    description:
      "Plataforma única para gerenciar todas as linhas, serviços e custos da sua empresa de forma simples e eficiente.",
    stats: "Economia de 30% no tempo",
    color: "from-[#660099] to-[#EB3C7D]",
  },
  {
    icon: Award,
    title: "SLA Garantido",
    description:
      "Acordo de nível de serviço com 99.9% de disponibilidade e compensação automática em caso de indisponibilidade.",
    stats: "SLA 99.9% uptime",
    color: "from-[#660099] to-[#EB3C7D]",
  },
  {
    icon: Globe,
    title: "Cobertura Nacional",
    description:
      "Rede de fibra óptica e 5G com cobertura em todo território nacional, garantindo conectividade onde você estiver.",
    stats: "Cobertura em 5.570 cidades",
    color: "from-[#660099] to-[#EB3C7D]",
  },
]

const stats = [
  {
    number: "+50k",
    label: "Empresas Conectadas",
    icon: Users,
  },
  {
    number: "99.9%",
    label: "SLA de Disponibilidade",
    icon: CheckCircle,
  },
  {
    number: "24/7",
    label: "Suporte Especializado",
    icon: Headphones,
  },
  {
    number: "1GB",
    label: "Velocidade Máxima",
    icon: Zap,
  },
]

export function BusinessBenefits() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#660099]/10 text-[#660099] border-[#660099]/20">
            <Award className="w-4 h-4 mr-2" />
            Benefícios Empresariais
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Por que escolher a<span className="block text-[#660099]">Vivo Empresas?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de 20 anos de experiência oferecendo soluções tecnológicas que transformam negócios e impulsionam o
            crescimento empresarial em todo o Brasil.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-gradient-to-br from-[#660099] to-[#EB3C7D] rounded-2xl">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-[#660099] mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="professional-card border-0 bg-white">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${benefit.color} flex-shrink-0`}>
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{benefit.description}</p>
                    <div className="flex items-center">
                      <BarChart3 className="w-4 h-4 text-[#660099] mr-2" />
                      <span className="text-sm font-semibold text-[#660099]">{benefit.stats}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-20 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Pronto para transformar sua empresa?</h3>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Junte-se a mais de 50.000 empresas que já confiam na Vivo para suas soluções de conectividade e tecnologia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#660099] px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-colors">
              Solicitar Proposta Gratuita
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors">
              Falar com Especialista
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

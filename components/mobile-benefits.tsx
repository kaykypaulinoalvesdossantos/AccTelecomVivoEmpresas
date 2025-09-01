"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Shield, Users, Headphones, BarChart3, Globe } from "lucide-react"

export function MobileBenefits() {
  const stats = [
    { number: "99.9%", label: "Cobertura Nacional", icon: Globe },
    { number: "10x", label: "Mais Rápido com 5G", icon: Zap },
    { number: "24/7", label: "Suporte Especializado", icon: Headphones },
    { number: "100%", label: "Segurança Garantida", icon: Shield },
  ]

  const benefits = [
    {
      icon: Zap,
      title: "Rede 5G Mais Rápida",
      description: "Velocidades de até 1Gbps com a tecnologia 5G mais avançada do Brasil",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: Shield,
      title: "Segurança Empresarial",
      description: "Proteção avançada contra ameaças com firewall dedicado e VPN corporativa",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: Users,
      title: "Gestão Centralizada",
      description: "Controle total da frota móvel com relatórios detalhados e controle de gastos",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: BarChart3,
      title: "Relatórios Inteligentes",
      description: "Analytics completos de uso, consumo e produtividade da sua equipe",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: Headphones,
      title: "Suporte Prioritário",
      description: "Atendimento especializado 24/7 com consultores dedicados para empresas",
      color: "from-red-400 to-rose-500",
    },
    {
      icon: Globe,
      title: "Roaming Internacional",
      description: "Conectividade global em mais de 200 países com tarifas preferenciais",
      color: "from-indigo-400 to-purple-500",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">Vantagens Exclusivas</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Por que escolher a Vivo Empresas?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de 20 anos de experiência oferecendo as melhores soluções de conectividade móvel para empresas de todos
            os portes no Brasil.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-8 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-0">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-purple-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-gray-50 to-white"
            >
              <CardContent className="p-0">
                <div
                  className={`w-16 h-16 mb-6 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center shadow-lg`}
                >
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

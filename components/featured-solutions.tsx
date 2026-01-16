"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Wifi, Smartphone, Cloud, Shield, Headphones, Zap } from "lucide-react"
import Link from "next/link"

const solutions = [
  {
    icon: Wifi,
    title: "Internet Fibra Óptica",
    description: "Conectividade de alta performance com velocidades de até 1GB e SLA garantido para sua empresa.",
    features: ["Velocidade simétrica", "SLA 99.9%", "Suporte 24/7", "Instalação rápida"],
    badge: "Mais Popular",
    color: "from-blue-500 to-cyan-500",
    href: "/planos/internet",
  },
  {
    icon: Smartphone,
    title: "Planos Móveis 5G",
    description: "Planos corporativos com tecnologia 5G, dados ilimitados e gestão centralizada de linhas.",
    features: ["5G Nacional", "Dados ilimitados", "Gestão online", "Roaming internacional"],
    badge: "5G",
    color: "from-[#660099] to-[#EB3C7D]",
    href: "/planos/moveis",
  },
  {
    icon: Cloud,
    title: "Soluções em Nuvem",
    description: "Infraestrutura cloud escalável com Microsoft 365, Google Workspace e soluções personalizadas.",
    features: ["Microsoft 365", "Google Workspace", "Backup automático", "Segurança avançada"],
    badge: "Enterprise",
    color: "from-green-500 to-emerald-500",
    href: "/solucoes",
  },
  {
    icon: Shield,
    title: "Cibersegurança",
    description: "Proteção completa contra ameaças digitais com monitoramento 24/7 e resposta a incidentes.",
    features: ["Firewall avançado", "Antivírus corporativo", "Monitoramento 24/7", "Consultoria especializada"],
    badge: "Segurança",
    color: "from-[#660099] to-[#EB3C7D]",
    href: "/solucoes",
  },
]

export function FeaturedSolutions() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#660099]/10 text-[#660099] border-[#660099]/20">
            <Zap className="w-4 h-4 mr-2" />
            Soluções Empresariais
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Tecnologia que impulsiona
            <span className="block text-[#660099]">seu crescimento</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra nossas soluções integradas de conectividade, tecnologia e segurança, desenvolvidas especialmente
            para empresas que buscam excelência operacional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white">
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.color} p-4 mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  {solution.badge && (
                    <Badge className="absolute -top-2 -right-2 bg-[#EB3C7D] text-white">{solution.badge}</Badge>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>

                <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>

                <ul className="space-y-2 mb-8">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-[#660099] rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href={solution.href}>
                  <Button className="w-full bg-[#660099] hover:bg-[#660099]/90 group-hover:bg-[#EB3C7D] transition-colors duration-300">
                    Saiba Mais
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Precisa de uma solução personalizada?</h3>
            <p className="text-xl mb-8 text-white/90">
              Nossos especialistas estão prontos para criar a solução ideal para sua empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#660099] hover:bg-white/90" asChild>
                <a href="https://wa.me/5511989150001?text=Olá! Gostaria de falar com um especialista da Vivo Empresas" target="_blank" rel="noopener noreferrer">
                  <Headphones className="mr-2 h-5 w-5" />
                  Falar com Especialista
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                asChild
              >
                <Link href="/planos">
                  Ver Todos os Planos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

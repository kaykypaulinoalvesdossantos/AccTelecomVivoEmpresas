"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Shield, Clock, Headphones, ArrowRight } from "lucide-react"

export function MicrosoftTeamsWhyVivoSection() {
  const benefits = [
    {
      icon: Users,
      title: "Plataforma Digital",
      description: "Acesso fácil e rápido através da nossa plataforma digital intuitiva",
      color: "#660099"
    },
    {
      icon: Shield,
      title: "Opções de Implementação",
      description: "Implementação personalizada conforme as necessidades da sua empresa",
      color: "#EB3C7D"
    },
    {
      icon: Headphones,
      title: "Suporte TI Integrado",
      description: "Suporte técnico especializado para implementação e configuração",
      color: "#FF9900"
    },
    {
      icon: Clock,
      title: "Atendimento 24h",
      description: "Suporte em português disponível 24 horas por dia",
      color: "#82D400"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="text-white border-white/30 hover:bg-white/30" style={{ backgroundColor: 'rgba(102, 0, 153, 0.2)' }}>
                <Users className="w-4 h-4 mr-2" />
                Por que escolher ACC Telecom
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Por que contratar o Microsoft Teams com ACC Telecom
              </h2>
              <p className="text-lg text-gray-600">
                A ACC Telecom oferece uma experiência completa para implementação e uso do Microsoft Teams,
                com suporte especializado e soluções personalizadas para sua empresa.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-2 border-gray-100 hover:border-purple-200 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: benefit.color }}>
                        <benefit.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <div className="rounded-2xl p-8 border" style={{ background: 'linear-gradient(135deg, rgba(102, 0, 153, 0.05) 0%, rgba(235, 60, 125, 0.05) 100%)', borderColor: '#660099' }}>
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Vantagens da Parceria ACC Telecom + Microsoft Teams
                    </h3>
                    <p className="text-gray-600">
                      A combinação perfeita de tecnologia e suporte especializado
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#660099' }}>
                        <span className="text-white font-bold text-sm">1</span>
                      </div>
                      <span className="text-gray-700">Implementação rápida e sem complicações</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#EB3C7D' }}>
                        <span className="text-white font-bold text-sm">2</span>
                      </div>
                      <span className="text-gray-700">Suporte técnico especializado 24/7</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FF9900' }}>
                        <span className="text-white font-bold text-sm">3</span>
                      </div>
                      <span className="text-gray-700">Treinamento e capacitação da equipe</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#82D400' }}>
                        <span className="text-white font-bold text-sm">4</span>
                      </div>
                      <span className="text-gray-700">Soluções personalizadas para sua empresa</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="rounded-2xl p-8 text-white" style={{ background: 'linear-gradient(90deg, #660099 0%, #EB3C7D 100%)' }}>
            <h3 className="text-2xl font-bold mb-4">
              Pronto para implementar Microsoft Teams na sua empresa?
            </h3>
            <p className="mb-6" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              Nossa equipe de especialistas está pronta para ajudar sua empresa a aproveitar todo o potencial do Microsoft Teams
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center" style={{ color: '#660099' }} asChild>
                <a href="https://wa.me/5511989150001?text=Olá! Gostaria de implementar Microsoft Teams na minha empresa" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  Implementar Microsoft Teams
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-all duration-300" asChild>
                <a href="https://wa.me/5511989150001?text=Olá! Gostaria de agendar uma consultoria sobre Microsoft Teams" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  Agendar Consultoria
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


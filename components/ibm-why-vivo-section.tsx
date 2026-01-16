"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Shield, Headphones, ArrowRight, CheckCircle } from "lucide-react"

export function IBMWhyVivoSection() {
  const benefits = [
    {
      icon: Users,
      title: "Especialistas para guiá-lo",
      description: "Nossa equipe de consultores especializados em IBM Cloud está pronta para orientar sua empresa em toda a jornada de transformação digital, desde o planejamento até a implementação e otimização contínua.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Shield,
      title: "Governança e Controle",
      description: "A Vivo Digital Platform oferece uma solução completa de gerenciamento multicloud, permitindo que você tenha controle total sobre seus recursos, custos e performance em um único painel.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Headphones,
      title: "Atendimento Diferenciado",
      description: "Suporte técnico 24/7 em português, com especialistas certificados pela IBM, garantindo que sua empresa tenha sempre o suporte necessário para manter suas operações funcionando perfeitamente.",
      color: "from-green-500 to-green-600"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
            <Users className="w-4 h-4 mr-2" />
            Por que contratar Cloud com a Vivo Empresas?
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            A parceria certa para sua jornada na nuvem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra como a Vivo Empresas pode acelerar sua transformação digital com IBM Cloud
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-purple-200 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Vantagens da Parceria Vivo + IBM
                  </h3>
                  <p className="text-gray-600">
                    A combinação perfeita de tecnologia e suporte especializado
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Implementação rápida e sem complicações</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Suporte técnico especializado 24/7</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Gestão completa da infraestrutura</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Otimização contínua de custos</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Treinamento e capacitação da equipe</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="rounded-2xl p-8 text-white" style={{ background: 'linear-gradient(90deg, #660099 0%, #EB3C7D 100%)' }}>
            <h3 className="text-2xl font-bold mb-4">
              Pronto para começar sua jornada na nuvem?
            </h3>
            <p className="mb-6" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              Nossa equipe de especialistas está pronta para ajudar sua empresa a aproveitar todo o potencial da IBM Cloud
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white hover:bg-gray-100 px-8 py-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center cursor-pointer" style={{ color: '#660099' }} asChild>
                <a href="https://wa.me/5511989150001?text=Olá! Gostaria de falar com um especialista sobre IBM Cloud" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  Falar com Especialista
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 rounded-lg font-semibold transition-all duration-300 cursor-pointer bg-transparent" asChild>
                <a href="https://wa.me/5511989150001?text=Olá! Gostaria de agendar uma consultoria sobre IBM Cloud" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
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

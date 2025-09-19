"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, DollarSign, Globe, Cloud, Star, Settings, Circle } from "lucide-react"

export function AWSBenefitsSection() {
  const benefits = [
    {
      icon: Shield,
      title: "Infraestrutura confiável",
      description: "A AWS oferece uma plataforma de infraestrutura completamente confiável e segura, projetada para atender aos requisitos mais rigorosos de segurança e conformidade.",
      color: "from-yellow-400 to-orange-500",
      iconColor: "text-yellow-600"
    },
    {
      icon: DollarSign,
      title: "Baixo custo e escalabilidade",
      description: "Nuvem econômica e escalável, acessível a milhões de empresas em mais de 130 países. Pague apenas pelo que usar, sem compromissos de longo prazo.",
      color: "from-purple-500 to-pink-500",
      iconColor: "text-purple-600"
    },
    {
      icon: Globe,
      title: "Agilidade",
      description: "Centros de dados em várias localizações (Austrália, Brasil, EUA, Europa, Japão, Singapura) permitem projetos ágeis e de baixo custo.",
      color: "from-blue-500 to-cyan-500",
      iconColor: "text-blue-600"
    },
    {
      icon: Cloud,
      title: "A nuvem líder de mercado",
      description: "A AWS oferece uma ampla gama de serviços e é reconhecida como líder no segmento IaaS pelos principais analistas Gartner e Forrester.",
      color: "from-green-500 to-emerald-500",
      iconColor: "text-green-600"
    },
    {
      icon: Star,
      title: "Confiança",
      description: "Parceria global para comercialização e entrega de serviços AWS, garantindo suporte especializado e soluções personalizadas.",
      color: "from-orange-500 to-red-500",
      iconColor: "text-orange-600"
    },
    {
      icon: Settings,
      title: "Suporte Técnico",
      description: "Equipe de especialistas certificados para apoio no desenho de soluções e suporte técnico especializado, garantindo a melhor experiência.",
      color: "from-indigo-500 to-purple-500",
      iconColor: "text-indigo-600"
    },
    {
      icon: Circle,
      title: "Facilidade",
      description: "Contrato local, validade contínua e mínima burocracia. Processo simplificado para contratação e gestão dos serviços AWS.",
      color: "from-pink-500 to-rose-500",
      iconColor: "text-pink-600"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
            <Star className="w-4 h-4 mr-2" />
            Vantagens Exclusivas
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Por que escolher o serviço de AWS Cloud na Vivo Empresas?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra os benefícios únicos de ter a AWS através da parceria estratégica com a Vivo Empresas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-white"
            >
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Pronto para migrar para a AWS com a Vivo?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300" onClick={() => window.open('https://wa.me/551123629665?text=Olá! Gostaria de solicitar uma consultoria sobre AWS Cloud', '_blank')}>
              Solicitar Consultoria
            </button>
            <button className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300" onClick={() => window.open('https://wa.me/551123629665?text=Olá! Gostaria de calcular os custos do AWS Cloud', '_blank')}>
              Calcular Custos
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

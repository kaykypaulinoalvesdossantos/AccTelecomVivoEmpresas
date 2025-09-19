"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Server, Shield, DollarSign, Users, Monitor, Settings, ArrowRight } from "lucide-react"

export function HuaweiBenefitsSection() {
  const benefits = [
    {
      icon: Server,
      title: "Infraestrutura ágil",
      description: "Deploy rápido e escalável para suas aplicações com recursos sob demanda",
      color: "#660099"
    },
    {
      icon: Shield,
      title: "Segurança certificada",
      description: "Proteção total dos dados com certificações internacionais de segurança",
      color: "#EB3C7D"
    },
    {
      icon: DollarSign,
      title: "Custo-benefício",
      description: "Excelente relação custo-benefício com pagamento local e transparente",
      color: "#FF9900"
    },
    {
      icon: DollarSign,
      title: "Pagamento local",
      description: "Faturamento em reais, sem surpresas com câmbio ou taxas internacionais",
      color: "#82D400"
    },
    {
      icon: Users,
      title: "Suporte especializado",
      description: "Equipe técnica especializada em Huawei Cloud para suporte completo",
      color: "#BD4AFF"
    },
    {
      icon: Settings,
      title: "Gestão simplificada",
      description: "Interface intuitiva e ferramentas de gestão simplificadas para sua equipe",
      color: "#B2D682"
    },
    {
      icon: Monitor,
      title: "Monitoramento 24/7",
      description: "Monitoramento contínuo da infraestrutura com alertas proativos",
      color: "#CC3D70"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-white border-white/30 hover:bg-white/30" style={{ backgroundColor: 'rgba(102, 0, 153, 0.2)' }}>
            <Server className="w-4 h-4 mr-2" />
            Por que escolher a solução Huawei Cloud da Vivo?
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Benefícios exclusivos Huawei Cloud
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra como o Huawei Cloud pode transformar sua infraestrutura e acelerar sua transformação digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-white border-2 border-gray-100 hover:border-purple-200 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: benefit.color }}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Pronto para começar com Huawei Cloud?
            </h3>
            <p className="text-gray-600 mb-6">
              Nossa equipe de especialistas Huawei está pronta para ajudar sua empresa a aproveitar todo o potencial do Huawei Cloud
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center" style={{ backgroundColor: '#FF9900' }} onClick={() => window.open('https://wa.me/551123629665?text=Olá! Gostaria de saber mais sobre Huawei Cloud', '_blank')}>
                Falar com Especialista
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 px-8 py-3 rounded-lg font-semibold transition-all duration-300" style={{ borderColor: '#660099', color: '#660099' }} onClick={() => window.open('https://wa.me/551123629665?text=Olá! Gostaria de agendar uma consultoria sobre Huawei Cloud', '_blank')}>
                Agendar Consultoria
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

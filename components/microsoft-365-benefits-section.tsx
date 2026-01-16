"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PiggyBank, TrendingUp, Users, Headphones, Monitor, ArrowRight } from "lucide-react"

export function Microsoft365BenefitsSection() {
  const benefits = [
    {
      icon: PiggyBank,
      title: "Economia",
      description: "Sem necessidade de grandes investimentos em infraestrutura de TI e com programas atualizados automaticamente.",
      color: "#660099"
    },
    {
      icon: TrendingUp,
      title: "Produtividade",
      description: "Facilidade para toda equipe com o compartilhamento de arquivos em nuvem e colaboração em tempo real.",
      color: "#EB3C7D"
    },
    {
      icon: Users,
      title: "Autonomia",
      description: "Os usuários definem quem ou quais grupos têm acesso a arquivos e pastas com controle granular de permissões.",
      color: "#FF9900"
    },
    {
      icon: Headphones,
      title: "Suporte",
      description: "Time de especialistas disponíveis para auxiliar nas instalações das ferramentas Pacote Office e configurações.",
      color: "#82D400"
    },
    {
      icon: Monitor,
      title: "Autogestão",
      description: "Controle das licenças e faturas pela Plataforma Digital, de uma forma fácil e rápida.",
      color: "#BD4AFF"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-white border-white/30 hover:bg-white/30" style={{ backgroundColor: 'rgba(102, 0, 153, 0.2)' }}>
            <TrendingUp className="w-4 h-4 mr-2" />
            Benefícios Microsoft 365
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Benefícios de usar o Microsoft 365
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra como o Microsoft 365 pode transformar a produtividade e colaboração da sua empresa
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
              Pronto para aumentar a produtividade da sua empresa?
            </h3>
            <p className="text-gray-600 mb-6">
              Nossa equipe de especialistas está pronta para ajudar sua empresa a aproveitar todo o potencial do Microsoft 365
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center" style={{ backgroundColor: '#FF9900' }} onClick={() => window.open('https://wa.me/5511989150001?text=Olá! Gostaria de saber mais sobre os benefícios do Microsoft 365', '_blank')}>
                Falar com Especialista
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 px-8 py-3 rounded-lg font-semibold transition-all duration-300" style={{ borderColor: '#660099', color: '#660099' }} onClick={() => window.open('https://wa.me/5511989150001?text=Olá! Gostaria de agendar uma consultoria sobre Microsoft 365', '_blank')}>
                Agendar Consultoria
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


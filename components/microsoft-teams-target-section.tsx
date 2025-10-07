"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Network, Clock, Settings, Users, ArrowRight } from "lucide-react"

export function MicrosoftTeamsTargetSection() {
  const targets = [
    {
      icon: Network,
      title: "Buscam manter sinergia e colaboração entre equipes de forma online através de videoconferências",
      color: "#660099"
    },
    {
      icon: Clock,
      title: "Precisam otimizar tempo para novos negócios e captura de clientes",
      color: "#EB3C7D"
    },
    {
      icon: Settings,
      title: "Não possuem equipe de TI especializada e buscam soluções simplificadas para utilização",
      color: "#FF9900"
    },
    {
      icon: Users,
      title: "Possuem de 1 a 300 funcionários",
      color: "#82D400"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-white border-white/30 hover:bg-white/30" style={{ backgroundColor: 'rgba(102, 0, 153, 0.2)' }}>
            <Users className="w-4 h-4 mr-2" />
            Perfil ideal
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ideal para empresas que:
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra se sua empresa se encaixa no perfil ideal para aproveitar ao máximo o Microsoft Teams
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {targets.map((target, index) => (
            <Card key={index} className="bg-white border-2 border-gray-100 hover:border-purple-200 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: target.color }}>
                  <target.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {target.title}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Sua empresa se encaixa no perfil ideal?
            </h3>
            <p className="text-gray-600 mb-6">
              Nossa equipe pode ajudar você a implementar o Microsoft Teams de forma eficiente
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center" style={{ backgroundColor: '#FF9900' }} onClick={() => window.open('https://wa.me/551123629665?text=Olá! Minha empresa se encaixa no perfil ideal para Microsoft Teams', '_blank')}>
                Falar com Especialista
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 px-8 py-3 rounded-lg font-semibold transition-all duration-300" style={{ borderColor: '#660099', color: '#660099' }} onClick={() => window.open('https://wa.me/551123629665?text=Olá! Gostaria de agendar uma consultoria sobre Microsoft Teams', '_blank')}>
                Agendar Consultoria
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


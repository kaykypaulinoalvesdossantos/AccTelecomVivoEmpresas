"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, MapPin, Users, Shield, CheckCircle } from "lucide-react"

export function AzureGlobalSection() {
  const globalFeatures = [
    {
      icon: Globe,
      title: "Presença Global",
      description: "Mais de 100 países com data centers estrategicamente localizados",
      color: "#660099"
    },
    {
      icon: MapPin,
      title: "Data Centers Locais",
      description: "Infraestrutura próxima aos seus usuários para menor latência",
      color: "#EB3C7D"
    },
    {
      icon: Users,
      title: "Suporte Local",
      description: "Equipes especializadas em cada região para atendimento personalizado",
      color: "#82D400"
    },
    {
      icon: Shield,
      title: "Conformidade Regional",
      description: "Atendimento às regulamentações locais de cada país",
      color: "#FF9900"
    }
  ]

  const globalStats = [
    "Mais de 100 países com presença",
    "60+ regiões de data centers",
    "200+ serviços disponíveis globalmente",
    "99.99% de SLA de disponibilidade",
    "Conformidade com regulamentações locais",
    "Suporte técnico 24/7 em português"
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-white border-white/30 hover:bg-white/30" style={{ backgroundColor: 'rgba(102, 0, 153, 0.2)' }}>
            <Globe className="w-4 h-4 mr-2" />
            Presente em 100 países
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Cobertura global Microsoft Azure
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aproveite a infraestrutura global da Microsoft com suporte local especializado da Vivo Empresas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                Infraestrutura global robusta
              </h3>
              <p className="text-lg text-gray-600">
                O Microsoft Azure está presente em mais de 100 países, oferecendo infraestrutura 
                de nuvem de classe mundial com data centers estrategicamente localizados para 
                garantir a melhor performance e conformidade regional.
              </p>
            </div>

            <div className="space-y-4">
              {globalStats.map((stat, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0" style={{ color: '#660099' }} />
                  <span className="text-gray-700">{stat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl p-8 border" style={{ background: 'linear-gradient(135deg, rgba(102, 0, 153, 0.05) 0%, rgba(235, 60, 125, 0.05) 100%)', borderColor: '#660099' }}>
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Vantagens da Presença Global
                  </h3>
                  <p className="text-gray-600">
                    Infraestrutura mundial com suporte local especializado
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'rgba(102, 0, 153, 0.1)' }}>
                    <div className="text-2xl font-bold mb-1" style={{ color: '#660099' }}>100+</div>
                    <div className="text-sm text-gray-600">Países</div>
                  </div>
                  <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'rgba(235, 60, 125, 0.1)' }}>
                    <div className="text-2xl font-bold mb-1" style={{ color: '#EB3C7D' }}>60+</div>
                    <div className="text-sm text-gray-600">Regiões</div>
                  </div>
                  <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'rgba(130, 212, 0, 0.1)' }}>
                    <div className="text-2xl font-bold mb-1" style={{ color: '#82D400' }}>200+</div>
                    <div className="text-sm text-gray-600">Serviços</div>
                  </div>
                  <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'rgba(255, 153, 0, 0.1)' }}>
                    <div className="text-2xl font-bold mb-1" style={{ color: '#FF9900' }}>99.99%</div>
                    <div className="text-sm text-gray-600">SLA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {globalFeatures.map((feature, index) => (
            <Card key={index} className="bg-white border-2 border-gray-100 hover:border-purple-200 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: feature.color }}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

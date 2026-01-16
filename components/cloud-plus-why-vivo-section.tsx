"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Shield, Clock, Settings, ArrowRight } from "lucide-react"

export function CloudPlusWhyVivoSection() {
  const benefits = [
    {
      icon: Settings,
      title: "Gerenciamento de serviços simplificado",
      description: "Interface intuitiva e ferramentas de gestão simplificadas para sua equipe, com controle total sobre sua infraestrutura.",
      color: "#660099"
    },
    {
      icon: Shield,
      title: "Segurança da sua rede privada",
      description: "Proteção avançada com firewall integrado, VPN IPSec e controle de acesso granular para máxima segurança.",
      color: "#EB3C7D"
    },
    {
      icon: Clock,
      title: "Sempre disponível e escalável",
      description: "Infraestrutura com alta disponibilidade e escalabilidade automática para crescer com sua empresa.",
      color: "#FF9900"
    },
    {
      icon: Users,
      title: "Painel de gerenciamento",
      description: "Painel de controle completo com relatórios executivos, monitoramento operacional e visibilidade total.",
      color: "#82D400"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-white border-white/30 hover:bg-white/30" style={{ backgroundColor: 'rgba(102, 0, 153, 0.2)' }}>
            <Users className="w-4 h-4 mr-2" />
            Por que Vivo Empresas
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            A parceria certa para sua jornada Cloud Plus
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra como a Vivo Empresas pode acelerar sua transformação digital com Cloud Plus
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-purple-200 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: benefit.color }}>
                      <benefit.icon className="w-6 h-6 text-white" />
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
            <div className="rounded-2xl p-8 border" style={{ background: 'linear-gradient(135deg, rgba(102, 0, 153, 0.05) 0%, rgba(235, 60, 125, 0.05) 100%)', borderColor: '#660099' }}>
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Vantagens da Parceria Vivo + Cloud Plus
                  </h3>
                  <p className="text-gray-600">
                    A combinação perfeita de tecnologia e suporte especializado
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: '#660099' }}>
                      <span className="text-white font-bold text-xs">✓</span>
                    </div>
                    <span className="text-gray-700 text-sm">Implementação rápida e sem complicações</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: '#EB3C7D' }}>
                      <span className="text-white font-bold text-xs">✓</span>
                    </div>
                    <span className="text-gray-700 text-sm">Suporte técnico especializado 24/7</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FF9900' }}>
                      <span className="text-white font-bold text-xs">✓</span>
                    </div>
                    <span className="text-gray-700 text-sm">Gestão completa da infraestrutura</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: '#82D400' }}>
                      <span className="text-white font-bold text-xs">✓</span>
                    </div>
                    <span className="text-gray-700 text-sm">Otimização contínua de custos</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: '#BD4AFF' }}>
                      <span className="text-white font-bold text-xs">✓</span>
                    </div>
                    <span className="text-gray-700 text-sm">Treinamento e capacitação da equipe</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: '#B2D682' }}>
                      <span className="text-white font-bold text-xs">✓</span>
                    </div>
                    <span className="text-gray-700 text-sm">Conformidade com regulamentações</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="rounded-2xl p-8 text-white" style={{ background: 'linear-gradient(90deg, #660099 0%, #EB3C7D 100%)' }}>
            <h3 className="text-2xl font-bold mb-4">
              Pronto para começar sua jornada Cloud Plus?
            </h3>
            <p className="mb-6" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              Nossa equipe de especialistas está pronta para ajudar sua empresa a aproveitar todo o potencial do Cloud Plus
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white hover:bg-gray-100 text-[#660099] px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center" asChild>
                <a href="https://wa.me/5511989150001?text=Olá! Gostaria de falar com um especialista sobre Cloud Plus" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  Falar com Especialista
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-all duration-300" asChild>
                <a href="https://wa.me/5511989150001?text=Olá! Gostaria de agendar uma consultoria sobre Cloud Plus" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
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

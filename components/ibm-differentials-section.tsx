"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, DollarSign, Shield, Network, Lock } from "lucide-react"

export function IBMDifferentialsSection() {
  const differentials = [
    {
      icon: ArrowRight,
      title: "Transferências de Dados entre IBM Data Centers",
      description: "A IBM não realiza cobranças nas transferências de dados entre seus Data Centers",
      color: "purple"
    },
    {
      icon: DollarSign,
      title: "Pioneira em Serviços Financeiros",
      description: "Primeira Cloud com soluções específicas para serviços financeiros e preocupação com segurança para atender as especificações do setor",
      color: "orange"
    },
    {
      icon: Network,
      title: "Plataformas Abertas",
      description: "A plataforma aberta utiliza linguagens de desenvolvimento de mercado e possibilita maior portfólio de soluções e utilização das soluções em outras nuvens",
      color: "blue"
    },
    {
      icon: Shield,
      title: "Segurança Certificada",
      description: "A Cloud IBM é a única certificada com FIPS 140-2 Nível 4",
      color: "green"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-white border-white/30 hover:bg-white/30" style={{ backgroundColor: 'rgba(102, 0, 153, 0.2)' }}>
            <Shield className="w-4 h-4 mr-2" />
            Diferenciais IBM Cloud
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Por que a IBM Cloud é diferente?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra os diferenciais únicos que fazem da IBM Cloud a escolha ideal para sua empresa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((differential, index) => (
            <Card key={index} className="bg-white border-2 border-gray-100 hover:border-purple-200 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: differential.color === 'purple' ? '#BD4AFF' : differential.color === 'orange' ? '#FF9900' : differential.color === 'blue' ? '#82D400' : '#B2D682' }}>
                  <differential.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {differential.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {differential.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Quer saber mais sobre nossos diferenciais?
            </h3>
            <p className="text-gray-600 mb-6">
              Nossa equipe de especialistas está pronta para apresentar como a IBM Cloud pode transformar sua empresa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="text-white px-8 py-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center cursor-pointer hover:opacity-90" style={{ backgroundColor: '#FF9900' }} asChild>
                <a href="https://wa.me/5511989150001?text=Olá! Gostaria de saber mais sobre os diferenciais da IBM Cloud" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  Falar com Especialista
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" className="border-2 px-8 py-6 rounded-lg font-semibold transition-all duration-300 cursor-pointer hover:bg-gray-50 bg-transparent" style={{ borderColor: '#660099', color: '#660099' }} asChild>
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

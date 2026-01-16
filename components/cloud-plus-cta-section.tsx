"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Network, BarChart3, ArrowRight, Phone, Mail } from "lucide-react"

export function CloudPlusCTASection() {
  const solutions = [
    {
      title: "SD-WAN",
      description: "Plataforma de conectividade gerenciada",
      icon: Network,
      color: "#660099"
    },
    {
      title: "Big Data",
      description: "Análise de informações e comportamento de produção",
      icon: BarChart3,
      color: "#EB3C7D"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-white border-white/30 hover:bg-white/30" style={{ backgroundColor: 'rgba(102, 0, 153, 0.2)' }}>
            <Network className="w-4 h-4 mr-2" />
            Confira mais soluções da Vivo para empresas
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Soluções complementares para sua empresa
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra outras soluções da Vivo que podem potencializar ainda mais seus resultados com Cloud Plus
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <Card key={index} className="border-2 border-gray-100 hover:border-purple-200 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: solution.color }}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {solution.description}
                </p>
                <Button className="w-full text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2" style={{ backgroundColor: solution.color }} asChild>
                  <a href={solution.title === "SD-WAN" ? 'https://wa.me/5511989150001?text=Olá! Gostaria de saber mais sobre SD-WAN' : 'https://wa.me/5511989150001?text=Olá! Gostaria de saber mais sobre Big Data'} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                    <span>Saiba Mais</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-16">
          <div className="rounded-2xl p-8 text-white" style={{ background: 'linear-gradient(90deg, #660099 0%, #EB3C7D 100%)' }}>
            <h3 className="text-2xl font-bold mb-4">
              Fale com um especialista
            </h3>
            <p className="mb-6" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              Nossa equipe de especialistas está pronta para oferecer suporte completo para suas soluções Cloud Plus
            </p>
            <Button className="bg-white hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center mx-auto" style={{ color: '#660099' }} asChild>
              <a href="https://wa.me/5511989150001?text=Olá! Preciso de atendimento e suporte para Cloud Plus" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                Ligue Agora
                <Phone className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        <div className="text-center">
          <div className="rounded-2xl p-8 border" style={{ background: 'linear-gradient(135deg, rgba(102, 0, 153, 0.05) 0%, rgba(235, 60, 125, 0.05) 100%)', borderColor: '#660099' }}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Precisa de mais informações?
            </h3>
            <p className="text-gray-600 mb-6">
              Fale com nossos especialistas Cloud Plus
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center" style={{ backgroundColor: '#FF9900' }} asChild>
                <a href="https://wa.me/5511989150001?text=Olá! Gostaria de falar via WhatsApp sobre Cloud Plus" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  WhatsApp
                </a>
              </Button>
              <Button variant="outline" className="border-2 px-8 py-3 rounded-lg font-semibold transition-all duration-300" style={{ borderColor: '#660099', color: '#660099' }} asChild>
                <a href="tel:+5511989150001" className="cursor-pointer">
                  Telefone
                </a>
              </Button>
              <Button variant="outline" className="border-2 px-8 py-3 rounded-lg font-semibold transition-all duration-300" style={{ borderColor: '#660099', color: '#660099' }} asChild>
                <a href="mailto:sac@acctelecom.com.br?subject=Consulta sobre Cloud Plus" className="cursor-pointer">
                  Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

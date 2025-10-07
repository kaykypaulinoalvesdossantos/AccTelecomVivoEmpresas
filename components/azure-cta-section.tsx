"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Server, Wifi, ArrowRight, Phone, Mail } from "lucide-react"

export function AzureCTASection() {
  const solutions = [
    {
      title: "SEGURANÇA GERENCIADA",
      description: "Proteção contra ameaças digitais",
      icon: Shield,
      color: "#660099"
    },
    {
      title: "DATA CENTERS",
      description: "Soluções inovadoras para seus negócios",
      icon: Server,
      color: "#EB3C7D"
    },
    {
      title: "INTERNET DEDICADA",
      description: "Alto desempenho, confiabilidade e segurança",
      icon: Wifi,
      color: "#82D400"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-white border-white/30 hover:bg-white/30" style={{ backgroundColor: 'rgba(102, 0, 153, 0.2)' }}>
            <Server className="w-4 h-4 mr-2" />
            Confira mais soluções da Vivo para empresas
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Soluções complementares para sua empresa
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra outras soluções da Vivo que podem potencializar ainda mais seus resultados com Azure
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
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
                <button className="w-full text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2" style={{ backgroundColor: solution.color }} onClick={() => {
                  if (solution.title === "SEGURANÇA GERENCIADA") {
                    window.open('https://wa.me/551123629665?text=Olá! Gostaria de saber mais sobre Segurança Gerenciada', '_blank')
                  } else if (solution.title === "DATA CENTERS") {
                    window.open('https://wa.me/551123629665?text=Olá! Gostaria de saber mais sobre Data Centers', '_blank')
                  } else if (solution.title === "INTERNET DEDICADA") {
                    window.open('https://wa.me/551123629665?text=Olá! Gostaria de saber mais sobre Internet Dedicada', '_blank')
                  }
                }}>
                  <span>Confira</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-16">
          <div className="rounded-2xl p-8 text-white" style={{ background: 'linear-gradient(90deg, #660099 0%, #EB3C7D 100%)' }}>
            <h3 className="text-2xl font-bold mb-4">
              Atendimento e Suporte para Cloud
            </h3>
            <p className="mb-6" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              Nossa equipe de especialistas está pronta para oferecer suporte completo para suas soluções Azure
            </p>
            <button className="bg-white hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center mx-auto" style={{ color: '#660099' }} onClick={() => window.open('https://wa.me/551123629665?text=Olá! Preciso de atendimento e suporte para Azure Cloud', '_blank')}>
              Ligue Agora
              <Phone className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="text-center">
          <div className="rounded-2xl p-8 border" style={{ background: 'linear-gradient(135deg, rgba(102, 0, 153, 0.05) 0%, rgba(235, 60, 125, 0.05) 100%)', borderColor: '#660099' }}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Precisa de mais informações?
            </h3>
            <p className="text-gray-600 mb-6">
              Fale com nossos especialistas Microsoft Azure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center" style={{ backgroundColor: '#FF9900' }} onClick={() => window.open('https://wa.me/551123629665?text=Olá! Gostaria de falar via WhatsApp sobre Azure Cloud', '_blank')}>
                WhatsApp
              </button>
              <button className="border-2 px-8 py-3 rounded-lg font-semibold transition-all duration-300" style={{ borderColor: '#660099', color: '#660099' }} onClick={() => window.open('tel:+551123629665')}>
                Telefone
              </button>
              <button className="border-2 px-8 py-3 rounded-lg font-semibold transition-all duration-300" style={{ borderColor: '#660099', color: '#660099' }} onClick={() => window.open('mailto:sac@acctelecom.com.br?subject=Consulta sobre Microsoft Azure Cloud')}>
                Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

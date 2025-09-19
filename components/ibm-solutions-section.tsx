"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Server, Wifi, Database } from "lucide-react"

export function IBMSolutionsSection() {
  const solutions = [
    {
      title: "SEGURANÇA GERENCIADA",
      description: "Proteção contra ameaças digitais",
      icon: Shield,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      title: "DATA CENTERS",
      description: "Soluções inovadoras para seus negócios",
      icon: Server,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      title: "INTERNET DEDICADA",
      description: "Alto desempenho, confiabilidade e segurança",
      icon: Wifi,
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
            <Database className="w-4 h-4 mr-2" />
            Confira mais soluções da Vivo para empresas
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Soluções complementares para sua empresa
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra outras soluções da Vivo que podem potencializar ainda mais seus resultados
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <Card key={index} className={`${solution.bgColor} ${solution.borderColor} border-2 hover:shadow-xl transition-all duration-300 group`}>
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 ${solution.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <solution.icon className="w-8 h-8 text-gray-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {solution.description}
                </p>
                <button className="w-full text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2" style={{ backgroundColor: solution.color === 'purple' ? '#660099' : solution.color === 'blue' ? '#82D400' : '#EB3C7D' }} onClick={() => {
                  if (solution.title === "SEGURANÇA GERENCIADA") {
                    window.open('https://wa.me/551123629665?text=Olá! Gostaria de saber mais sobre Segurança Gerenciada', '_blank')
                  } else if (solution.title === "DATA CENTERS") {
                    window.open('https://wa.me/551123629665?text=Olá! Gostaria de saber mais sobre Data Centers', '_blank')
                  } else if (solution.title === "INTERNET DEDICADA") {
                    window.open('https://wa.me/551123629665?text=Olá! Gostaria de saber mais sobre Internet Dedicada', '_blank')
                  }
                }}>
                  <span>Saiba Mais</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="rounded-2xl p-8 border" style={{ background: 'linear-gradient(90deg, rgba(102, 0, 153, 0.1) 0%, rgba(235, 60, 125, 0.1) 100%)', borderColor: '#660099' }}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Quer conhecer todas as nossas soluções?
            </h3>
            <p className="text-gray-600 mb-6">
              Explore nosso portfólio completo de soluções digitais para empresas
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(90deg, #660099 0%, #EB3C7D 100%)' }}>
                <Database className="w-6 h-6 text-white" />
              </div>
              <button className="text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300" style={{ background: 'linear-gradient(90deg, #660099 0%, #EB3C7D 100%)' }} onClick={() => window.open('https://wa.me/551123629665?text=Olá! Gostaria de conhecer todas as soluções da Vivo Empresas', '_blank')}>
                Explorar Todas as Soluções
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

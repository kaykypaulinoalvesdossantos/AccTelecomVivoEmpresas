"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cloud, Network, BarChart3, ArrowRight, Wifi, Database, Cpu } from "lucide-react"

export function AWSSolutionsSection() {
  const solutions = [
    {
      title: "IoT",
      subtitle: "Plataforma de conectividade gerenciada",
      description: "Conecte e gerencie milhares de dispositivos IoT com segurança e escalabilidade na nuvem AWS.",
      icon: Wifi,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-100 to-cyan-100",
      features: ["Conectividade segura", "Gestão centralizada", "Analytics em tempo real", "Escalabilidade automática"]
    },
    {
      title: "Redes Corporativas",
      subtitle: "Integre múltiplos sites a múltiplos destinos",
      description: "Conecte suas filiais e escritórios com segurança através de redes corporativas gerenciadas na AWS.",
      icon: Network,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-100 to-emerald-100",
      features: ["Conectividade global", "Segurança avançada", "Performance otimizada", "Gestão simplificada"]
    },
    {
      title: "Big Data",
      subtitle: "Analise as tendências e comportamentos da população",
      description: "Transforme grandes volumes de dados em insights valiosos com as ferramentas de analytics da AWS.",
      icon: BarChart3,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-100 to-pink-100",
      features: ["Processamento em tempo real", "Machine Learning", "Visualização de dados", "Relatórios inteligentes"]
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
            <Cloud className="w-4 h-4 mr-2" />
            Soluções Complementares
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Confira mais soluções da Vivo para empresas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore outras soluções digitais que podem complementar sua infraestrutura AWS
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 overflow-hidden">
              <CardContent className="p-0">
                <div className={`bg-gradient-to-br ${solution.bgColor} p-8 relative overflow-hidden`}>
                  <div className="absolute top-4 right-4 w-20 h-20 bg-white/20 rounded-full blur-xl" />
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                    <p className="text-lg font-semibold text-gray-700 mb-4">{solution.subtitle}</p>
                    <p className="text-gray-600 leading-relaxed mb-6">{solution.description}</p>
                  </div>
                </div>

                <div className="p-8">
                  <div className="space-y-3 mb-8">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 bg-gradient-to-r ${solution.color} rounded-full`} />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full bg-gradient-to-r ${solution.color} hover:opacity-90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2`}
                    asChild
                  >
                    <a href={solution.title === "IoT" ? 'https://wa.me/5511989150001?text=Olá! Gostaria de saber mais sobre IoT' : solution.title === "Redes Corporativas" ? 'https://wa.me/5511989150001?text=Olá! Gostaria de saber mais sobre Redes Corporativas' : 'https://wa.me/5511989150001?text=Olá! Gostaria de saber mais sobre Big Data'} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                      <span>Saiba Mais</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Serviços Digitais
            </h3>
            <p className="text-gray-600 mb-6">
              Veja como extrair mais valor na Vivo Plataforma Digital
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Database className="w-6 h-6 text-white" />
              </div>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300" asChild>
                <a href="https://wa.me/5511989150001?text=Olá! Gostaria de saber mais sobre Serviços Digitais" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  Confira
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

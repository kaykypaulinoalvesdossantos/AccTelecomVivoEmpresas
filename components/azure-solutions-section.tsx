"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Cpu, Database, Link, ArrowRight } from "lucide-react"

export function AzureSolutionsSection() {
  const solutions = [
    {
      icon: Globe,
      title: "Internet das Coisas (IoT)",
      description: "Conecte e gerencie bilhões de dispositivos IoT com segurança e escalabilidade",
      color: "#660099"
    },
    {
      icon: Cpu,
      title: "Inteligência Artificial (AI)",
      description: "Implemente soluções de IA e machine learning para automatizar processos",
      color: "#EB3C7D"
    },
    {
      icon: Database,
      title: "SAP no Azure",
      description: "Execute cargas de trabalho SAP na nuvem com alta disponibilidade e segurança",
      color: "#82D400"
    },
    {
      icon: Link,
      title: "Blockchain",
      description: "Desenvolva aplicações blockchain descentralizadas com Azure Blockchain Service",
      color: "#FF9900"
    }
  ]

  const additionalSolutions = [
    {
      title: "CLOUD AZURE",
      description: "Infraestrutura completa em nuvem",
      color: "#660099"
    },
    {
      title: "Coleção",
      description: "Soluções pré-configuradas",
      color: "#EB3C7D"
    },
    {
      title: "Por que investir na Vivo",
      description: "Vantagens da parceria",
      color: "#82D400"
    },
    {
      title: "Soluções",
      description: "Portfólio completo",
      color: "#FF9900"
    },
    {
      title: "Infraestrutura global",
      description: "Presença mundial",
      color: "#BD4AFF"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-white border-white/30 hover:bg-white/30" style={{ backgroundColor: 'rgba(102, 0, 153, 0.2)' }}>
            <Database className="w-4 h-4 mr-2" />
            Soluções da Microsoft Cloud Azure
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Soluções especializadas Azure
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore nosso portfólio completo de soluções Azure para diferentes necessidades empresariais
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <Card key={index} className="bg-white border-2 border-gray-100 hover:border-purple-200 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: solution.color }}>
                  <solution.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {solution.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {solution.description}
                </p>
                <Button className="w-full text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2" style={{ backgroundColor: solution.color }} asChild>
                  <a href={'https://wa.me/5511989150001?text=Olá! Gostaria de saber mais sobre ' + solution.title} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                    <span>Saiba Mais</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Outras soluções Azure disponíveis
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {additionalSolutions.map((solution, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-purple-200 transition-all duration-300 group cursor-pointer" onClick={() => window.open('https://wa.me/5511989150001?text=Olá! Gostaria de saber mais sobre ' + solution.title, '_blank')}>
                <CardContent className="p-4 text-center">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                    {solution.title}
                  </h4>
                  <p className="text-gray-600 text-xs">
                    {solution.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="rounded-2xl p-8 border" style={{ background: 'linear-gradient(135deg, rgba(102, 0, 153, 0.05) 0%, rgba(235, 60, 125, 0.05) 100%)', borderColor: '#660099' }}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Quer conhecer todas as nossas soluções Azure?
            </h3>
            <p className="text-gray-600 mb-6">
              Explore nosso portfólio completo de soluções Microsoft Azure para empresas
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(90deg, #660099 0%, #EB3C7D 100%)' }}>
                <Database className="w-6 h-6 text-white" />
              </div>
              <Button className="text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300" style={{ background: 'linear-gradient(90deg, #660099 0%, #EB3C7D 100%)' }} asChild>
                <a href="https://wa.me/5511989150001?text=Olá! Gostaria de conhecer todas as soluções Azure da Vivo Empresas" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  Explorar Todas as Soluções
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

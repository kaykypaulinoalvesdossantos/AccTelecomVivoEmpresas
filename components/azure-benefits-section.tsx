"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cloud, Globe, Shield, Server, PiggyBank, Brain, Laptop, Users, ArrowRight } from "lucide-react"

export function AzureBenefitsSection() {
  const benefits = [
    {
      icon: Cloud,
      title: "Nuvem híbrida consistente",
      description: "Execute operações em ambientes Windows com consistência total entre nuvem e local",
      color: "#BD4AFF"
    },
    {
      icon: Globe,
      title: "Cobertura abrangente",
      description: "Presente em mais de 100 países com infraestrutura global robusta",
      color: "#660099"
    },
    {
      icon: Shield,
      title: "Proteção de dados",
      description: "Segurança garantida através de experts e ferramentas avançadas",
      color: "#82D400"
    },
    {
      icon: Server,
      title: "Para todos os tamanhos",
      description: "Soluções escaláveis desde startups até grandes corporações",
      color: "#EB3C7D"
    },
    {
      icon: PiggyBank,
      title: "Economia e otimização de custos",
      description: "Reduza custos operacionais com modelos de pagamento flexíveis",
      color: "#FF9900"
    },
    {
      icon: Cloud,
      title: "Ambiente de nuvem híbrida",
      description: "Possibilidade de construção de ambiente de nuvem híbrida personalizada",
      color: "#B2D682"
    },
    {
      icon: Users,
      title: "Segurança garantida",
      description: "Segurança garantida através de experts e ferramentas especializadas",
      color: "#CC3D70"
    },
    {
      icon: Laptop,
      title: "Integração Microsoft 365",
      description: "Integração total com outras soluções Microsoft, como Microsoft 365",
      color: "#FF96B2"
    }
  ]

  const solutions = [
    {
      icon: Server,
      title: "Crie aplicativos nativos",
      description: "Crie aplicativos nativos com um banco de dados totalmente gerenciado",
      color: "#660099"
    },
    {
      icon: Server,
      title: "Execute operações Windows",
      description: "Execute operações em ambientes Windows com consistência total",
      color: "#EB3C7D"
    },
    {
      icon: Shield,
      title: "Mantenha segurança e privacidade",
      description: "Mantenha a segurança e a privacidade dos seus dados em nuvem",
      color: "#82D400"
    },
    {
      icon: Users,
      title: "Facilite logins únicos",
      description: "Facilite logins únicos e torne fácil o acesso a apps de qualquer lugar",
      color: "#FF9900"
    },
    {
      icon: Server,
      title: "Conecte sites e trabalhadores remotos",
      description: "Conecte seus sites e trabalhadores remotos em escala usando VPN",
      color: "#BD4AFF"
    },
    {
      icon: Brain,
      title: "Adicione capacidades cognitivas",
      description: "Adicione capacidades cognitivas e aplicativos usando IA",
      color: "#B2D682"
    },
    {
      icon: Laptop,
      title: "Dimensionamento e automação",
      description: "Faça dimensionamento, balanceamento de cargas e automação em aplicativos",
      color: "#CC3D70"
    },
    {
      icon: Globe,
      title: "Soluções globais",
      description: "Acesse soluções globais com suporte local especializado",
      color: "#FF96B2"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-white border-white/30 hover:bg-white/30" style={{ backgroundColor: 'rgba(102, 0, 153, 0.2)' }}>
            <Cloud className="w-4 h-4 mr-2" />
            Por que escolher o Azure na Vivo Empresas?
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Benefícios exclusivos do Azure
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra como o Microsoft Azure pode transformar sua infraestrutura e acelerar sua transformação digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-white border-2 border-gray-100 hover:border-purple-200 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: benefit.color }}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-16">
          <Badge className="mb-4 text-white border-white/30 hover:bg-white/30" style={{ backgroundColor: 'rgba(102, 0, 153, 0.2)' }}>
            <Server className="w-4 h-4 mr-2" />
            Veja como podemos ajudar seu negócio
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Soluções práticas para sua empresa
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Implemente soluções Azure que realmente fazem a diferença no seu dia a dia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <Card key={index} className="bg-white border-2 border-gray-100 hover:border-purple-200 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: solution.color }}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                  {solution.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {solution.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Pronto para começar com Azure?
            </h3>
            <p className="text-gray-600 mb-6">
              Nossa equipe de especialistas Microsoft está pronta para ajudar sua empresa a aproveitar todo o potencial do Azure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center" style={{ backgroundColor: '#FF9900' }} onClick={() => window.open('https://wa.me/551123629665?text=Olá! Gostaria de saber mais sobre Microsoft Azure Cloud', '_blank')}>
                Falar com Especialista
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 px-8 py-3 rounded-lg font-semibold transition-all duration-300" style={{ borderColor: '#660099', color: '#660099' }} onClick={() => window.open('https://wa.me/551123629665?text=Olá! Gostaria de agendar uma consultoria sobre Azure Cloud', '_blank')}>
                Agendar Consultoria
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

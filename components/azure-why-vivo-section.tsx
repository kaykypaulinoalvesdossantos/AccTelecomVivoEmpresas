"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Shield, Headphones, ArrowRight, CheckCircle } from "lucide-react"

export function AzureWhyVivoSection() {
  const benefits = [
    {
      icon: Users,
      title: "Especialistas Microsoft Certificados",
      description: "Nossa equipe possui certificações Microsoft Azure e experiência comprovada em implementações complexas de nuvem híbrida.",
      color: "#660099"
    },
    {
      icon: Shield,
      title: "Governança e Controle",
      description: "A Vivo Digital Platform oferece gerenciamento multicloud completo, facilitando operações e controle de custos em ambientes Azure.",
      color: "#EB3C7D"
    },
    {
      icon: Headphones,
      title: "Atendimento Diferenciado",
      description: "Suporte técnico especializado 24/7 em português, com especialistas certificados pela Microsoft, garantindo que sua empresa tenha sempre o suporte necessário.",
      color: "#82D400"
    }
  ]

  const advantages = [
    "Implementação rápida e sem complicações",
    "Suporte técnico especializado 24/7",
    "Gestão completa da infraestrutura Azure",
    "Otimização contínua de custos",
    "Treinamento e capacitação da equipe",
    "Conformidade com regulamentações brasileiras",
    "Integração com soluções Microsoft 365",
    "Consultoria especializada em nuvem híbrida"
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
            A parceria certa para sua jornada Azure
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra como a Vivo Empresas pode acelerar sua transformação digital com Microsoft Azure
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
                    Vantagens da Parceria Vivo + Microsoft
                  </h3>
                  <p className="text-gray-600">
                    A combinação perfeita de tecnologia e suporte especializado
                  </p>
                </div>
                
                <div className="space-y-3">
                  {advantages.map((advantage, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#660099' }} />
                      <span className="text-gray-700 text-sm">{advantage}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="rounded-2xl p-8 text-white" style={{ background: 'linear-gradient(90deg, #660099 0%, #EB3C7D 100%)' }}>
            <h3 className="text-2xl font-bold mb-4">
              Pronto para começar sua jornada Azure?
            </h3>
            <p className="mb-6" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              Nossa equipe de especialistas Microsoft está pronta para ajudar sua empresa a aproveitar todo o potencial do Azure Cloud
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center" style={{ color: '#660099' }} onClick={() => window.open('https://wa.me/551123629665?text=Olá! Gostaria de falar com um especialista sobre Microsoft Azure', '_blank')}>
                Falar com Especialista
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-all duration-300" onClick={() => window.open('https://wa.me/551123629665?text=Olá! Gostaria de agendar uma consultoria sobre Azure Cloud', '_blank')}>
                Agendar Consultoria
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Target, Users, Award, CheckCircle, Clock, Shield, Zap } from "lucide-react"

export function SobreEmpresaValuesSection() {
  const values = [
    {
      icon: Heart,
      title: "Atendimento Personalizado",
      description: "Cada cliente é único. Desenvolvemos soluções sob medida para atender às necessidades específicas de cada empresa, garantindo que nossos serviços se alinhem perfeitamente aos objetivos de negócio."
    },
    {
      icon: Target,
      title: "Excelência Técnica",
      description: "Nossa equipe é composta por profissionais certificados e com vasta experiência em telecomunicações. Investimos continuamente em capacitação para oferecer as melhores soluções do mercado."
    },
    {
      icon: Users,
      title: "Parceria de Longo Prazo",
      description: "Não somos apenas fornecedores, somos parceiros estratégicos. Acompanhamos o crescimento dos nossos clientes e evoluímos nossas soluções conforme suas necessidades mudam."
    },
    {
      icon: Award,
      title: "Inovação e Tecnologia",
      description: "Mantemos-nos sempre atualizados com as últimas tecnologias e tendências do mercado, oferecendo soluções inovadoras que impulsionam a competitividade dos nossos clientes."
    }
  ]

  const commitments = [
    {
      icon: CheckCircle,
      title: "Garantia de Qualidade",
      description: "Todos os nossos serviços são testados e validados antes da entrega"
    },
    {
      icon: Clock,
      title: "Prazos Cumpridos",
      description: "Comprometemo-nos com prazos realistas e sempre os cumprimos"
    },
    {
      icon: Shield,
      title: "Suporte Contínuo",
      description: "Oferecemos suporte técnico especializado durante todo o ciclo de vida dos serviços"
    },
    {
      icon: Zap,
      title: "Resposta Rápida",
      description: "Atendemos emergências e solicitações críticas em até 2 horas"
    }
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200 text-sm sm:text-base">Valores</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Nossos Valores e Compromissos
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Os princípios que guiam nossa empresa e os compromissos que assumimos com cada cliente
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Valores Principais */}
          <div className="mb-16">
            <h3 className="text-xl font-bold text-gray-900 mb-8 text-center">Nossos Valores</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 text-center leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Compromissos */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-8 text-center">Nossos Compromissos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {commitments.map((commitment, index) => (
                <Card key={index} className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                      <commitment.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900">{commitment.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 text-center text-sm leading-relaxed">
                      {commitment.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

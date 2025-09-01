"use client"

import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Shield, Clock, Users, Award, CheckCircle } from "lucide-react"

export function SolutionsBenefits() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Aumento de Produtividade",
      description: "Até 40% de melhoria na eficiência operacional",
      stat: "40%",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Shield,
      title: "Segurança Avançada",
      description: "Proteção completa contra ameaças digitais",
      stat: "99.9%",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: Clock,
      title: "Disponibilidade Total",
      description: "Suporte técnico especializado 24/7",
      stat: "24/7",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: Users,
      title: "Colaboração Eficiente",
      description: "Ferramentas integradas para trabalho em equipe",
      stat: "100%",
      color: "from-orange-500 to-red-600",
    },
  ]

  const features = [
    "Implementação rápida e sem complicações",
    "Treinamento completo para sua equipe",
    "Migração de dados sem perda de informações",
    "Suporte técnico especializado",
    "Atualizações automáticas incluídas",
    "Backup e recuperação de dados",
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance">
            Por que Escolher nossas{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Soluções Digitais?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Transforme seu negócio com tecnologia de ponta e suporte especializado
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div
                  className={`inline-flex p-4 rounded-full bg-gradient-to-r ${benefit.color} mb-6 group-hover:scale-110 transition-transform`}
                >
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{benefit.stat}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-balance">
                Implementação Completa e Suporte Especializado
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Nossa equipe de especialistas cuida de todo o processo, desde a implementação até o suporte contínuo,
                garantindo que sua empresa aproveite ao máximo as soluções digitais.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">Certificações</h4>
                    <p className="text-gray-600">Parceiro oficial das principais tecnologias</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Microsoft Partner</span>
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Google Cloud Partner</span>
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">ISO 27001 Certified</span>
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

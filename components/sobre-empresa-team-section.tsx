"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Clock, CheckCircle, GraduationCap, Briefcase } from "lucide-react"

export function SobreEmpresaTeamSection() {
  const teamStats = [
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "15+ profissionais certificados em telecomunicações empresariais",
      detail: "Engenheiros, técnicos e consultores especializados"
    },
    {
      icon: Award,
      title: "Certificações Técnicas",
      description: "Certificações oficiais das principais operadoras",
      detail: "Vivo, Anatel, Cisco, Microsoft e outras certificações"
    },
    {
      icon: Clock,
      title: "Disponibilidade 24/7",
      description: "Suporte técnico disponível todos os dias",
      detail: "Plantão de emergências e atendimento prioritário"
    },
    {
      icon: CheckCircle,
      title: "Qualidade Certificada",
      description: "Processos certificados ISO 9001:2015",
      detail: "Metodologias comprovadas de excelência"
    },
    {
      icon: GraduationCap,
      title: "Formação Contínua",
      description: "Investimento anual em capacitação da equipe",
      detail: "Cursos, certificações e atualizações técnicas"
    },
    {
      icon: Briefcase,
      title: "Experiência Comprovada",
      description: "Média de 8+ anos de experiência por profissional",
      detail: "Conhecimento profundo do mercado de telecomunicações"
    }
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200 text-sm sm:text-base">Equipe</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Nossa Equipe
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Profissionais dedicados e especializados em telecomunicações empresariais, 
            com vasta experiência e certificações técnicas
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamStats.map((stat, index) => (
              <Card key={index} className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">{stat.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 text-center text-sm leading-relaxed mb-2">
                    {stat.description}
                  </p>
                  <p className="text-gray-500 text-center text-xs leading-relaxed">
                    {stat.detail}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Depoimento da equipe */}
          <div className="mt-16">
            <Card className="bg-gradient-to-r from-orange-50 to-orange-100 border-orange-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <blockquote className="text-lg text-gray-700 italic mb-4">
                  "Nossa equipe é o coração da Acc Telecom. Cada profissional é cuidadosamente selecionado 
                  não apenas por suas competências técnicas, mas também por seu compromisso com a excelência 
                  e o atendimento ao cliente."
                </blockquote>
                <div className="text-sm text-gray-600 font-medium">
                  Diretoria Acc Telecom
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import React, { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Share2, Settings, ArrowRight, BarChart3, Presentation, Mail, Cloud, Users, StickyNote, Database } from "lucide-react"

export function Microsoft365FeaturesSection() {
  const [activeTab, setActiveTab] = useState("essenciais")

  const features = {
    essenciais: [
      {
        title: "Word",
        description: "Crie e edite documentos profissionais com recursos avançados de formatação e colaboração.",
        icon: FileText,
        color: "#2B579A"
      },
      {
        title: "Excel",
        description: "Planilhas poderosas para análise de dados, relatórios e tomada de decisões estratégicas.",
        icon: BarChart3,
        color: "#217346"
      },
      {
        title: "PowerPoint",
        description: "Apresentações impactantes com templates profissionais e recursos multimídia.",
        icon: Presentation,
        color: "#D24726"
      },
      {
        title: "Outlook",
        description: "Email empresarial com calendário integrado e gerenciamento de tarefas avançado.",
        icon: Mail,
        color: "#0078D4"
      }
    ],
    compartilhar: [
      {
        title: "OneDrive",
        description: "Salve, acesse e compartilhe documentos em qualquer lugar com segurança na nuvem.",
        icon: Cloud,
        color: "#0078D4"
      },
      {
        title: "SharePoint",
        description: "Acesse e envie arquivos quando quiser com colaboração em equipe avançada.",
        icon: Share2,
        color: "#0078D4"
      },
      {
        title: "Sway",
        description: "Crie e compartilhe relatórios interativos, apresentações e mais conteúdo dinâmico.",
        icon: Share2,
        color: "#0078D4"
      },
      {
        title: "Teams",
        description: "Comunicação e colaboração em tempo real com chat, videoconferências e compartilhamento de arquivos.",
        icon: Users,
        color: "#6264A7"
      }
    ],
    gerenciar: [
      {
        title: "OneNote",
        description: "Escreva, edite e compartilhe blocos de notas digitais para organização pessoal e profissional.",
        icon: StickyNote,
        color: "#7719AA"
      },
      {
        title: "Access",
        description: "Construa um banco de dados fácil de usar para gerenciar informações da sua empresa.",
        icon: Database,
        color: "#A4373A"
      },
      {
        title: "Bookings",
        description: "Faça agendamentos online para a sua empresa com integração ao calendário.",
        icon: Mail,
        color: "#0078D4"
      },
      {
        title: "Planner",
        description: "Gerencie o trabalho da sua equipe com planejamento de projetos e acompanhamento de tarefas.",
        icon: Users,
        color: "#0078D4"
      }
    ]
  }

  const tabs = [
    { id: "essenciais", label: "Essenciais", icon: FileText },
    { id: "compartilhar", label: "Compartilhar", icon: Share2 },
    { id: "gerenciar", label: "Gerenciar", icon: Settings }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-white border-white/30 hover:bg-white/30" style={{ backgroundColor: 'rgba(102, 0, 153, 0.2)' }}>
            <FileText className="w-4 h-4 mr-2" />
            Ferramentas Microsoft 365
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Aplicativos e serviços incluídos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra todas as ferramentas disponíveis no Microsoft 365 Business Basic para maximizar a produtividade da sua empresa
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {tabs.map((tab) => (
                <TabsTrigger key={tab.id} value={tab.id} className="flex items-center space-x-2">
                  <tab.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {tabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id} className="space-y-6">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-gray-900">{tab.label}</h3>
                    <p className="text-gray-600">
                      Ferramentas essenciais para {tab.label.toLowerCase()} no Microsoft 365
                    </p>
                  </div>
                  <div className="space-y-4">
                    {features[tab.id as keyof typeof features].map((feature, index) => (
                      <Card key={index} className="border-2 border-gray-100 hover:border-purple-200 transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: feature.color }}>
                              <feature.icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-lg font-bold text-gray-900 mb-2">
                                {feature.title}
                              </h4>
                              <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="text-center mt-16">
          <div className="rounded-2xl p-8 border" style={{ background: 'linear-gradient(135deg, rgba(102, 0, 153, 0.05) 0%, rgba(235, 60, 125, 0.05) 100%)', borderColor: '#660099' }}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Quer conhecer todas as funcionalidades?
            </h3>
            <p className="text-gray-600 mb-6">
              Nossa equipe pode apresentar todas as ferramentas disponíveis no Microsoft 365
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(90deg, #660099 0%, #EB3C7D 100%)' }}>
                <FileText className="w-6 h-6 text-white" />
              </div>
              <button className="text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300" style={{ background: 'linear-gradient(90deg, #660099 0%, #EB3C7D 100%)' }} onClick={() => window.open('https://wa.me/551123629665?text=Olá! Gostaria de conhecer todas as funcionalidades do Microsoft 365', '_blank')}>
                Explorar Todas as Ferramentas
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


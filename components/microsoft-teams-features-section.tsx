"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageCircle, CheckCircle, Video, Shield, Cloud, Smartphone, ArrowRight } from "lucide-react"

export function MicrosoftTeamsFeaturesSection() {
  const [activeTab, setActiveTab] = useState("comunicacao")

  const features = {
    comunicacao: [
      {
        title: "Converse",
        description: "Comunique-se via chat, envie mensagens, emojis, GIFs e tradução integrada para facilitar a comunicação entre equipes.",
        icon: MessageCircle,
        color: "#660099"
      },
      {
        title: "Colabore",
        description: "Canais privados, controle de acesso, compartilhamento de arquivos em tempo real e integração com Word, PowerPoint e Excel.",
        icon: CheckCircle,
        color: "#EB3C7D"
      },
      {
        title: "Reúna",
        description: "Reuniões agendadas, compartilhamento de tela e videoconferências para grupos de 2 a 10.000 pessoas.",
        icon: Video,
        color: "#FF9900"
      },
      {
        title: "Acesso Multidispositivo",
        description: "Aplicação colaborativa e inclusiva, preparada para diversos dispositivos e sistemas operacionais.",
        icon: Smartphone,
        color: "#82D400"
      },
      {
        title: "Compartilhamento de Tela",
        description: "Compartilhe sua tela durante reuniões para apresentações e colaboração em tempo real.",
        icon: Video,
        color: "#BD4AFF"
      },
      {
        title: "Compartilhamento de Arquivos",
        description: "Compartilhe arquivos e documentos diretamente no chat e canais do Teams.",
        icon: Cloud,
        color: "#B2D682"
      }
    ],
    privacidade: [
      {
        title: "Prevenção Contra Perda de Dados",
        description: "Previne o compartilhamento de informações confidenciais com terceiros através de políticas de segurança.",
        icon: Shield,
        color: "#660099"
      },
      {
        title: "Endpoint Manager",
        description: "Gerencia dispositivos e aplicativos e imponha o acesso condicional em qualquer dispositivo.",
        icon: Cloud,
        color: "#EB3C7D"
      },
      {
        title: "Residência de Dados",
        description: "No Teams, os dados residem na rede segura de data centers da Microsoft para ajudar você a atender aos requisitos de conformidade.",
        icon: Shield,
        color: "#FF9900"
      },
      {
        title: "Criptografia",
        description: "O Teams criptografa os dados em trânsito e em repouso e usa SRTP para compartilhamento de vídeo, áudio, arquivos, chat e área de trabalho.",
        icon: Shield,
        color: "#82D400"
      },
      {
        title: "Proteção Avançada Contra Ameaças",
        description: "Proteja os usuários contra softwares mal-intencionados ocultos em arquivos, incluindo aqueles armazenados no OneDrive ou no SharePoint.",
        icon: Shield,
        color: "#BD4AFF"
      },
      {
        title: "Autenticação Multifator",
        description: "Exige que os usuários forneçam formas adicionais de verificação para provar sua identidade, ajudando a proteger suas contas.",
        icon: Shield,
        color: "#B2D682"
      }
    ],
    compatibilidade: [
      {
        title: "Acesso Multidispositivo",
        description: "Aplicação colaborativa e inclusiva, preparada para diversos dispositivos e sistemas operacionais.",
        icon: Smartphone,
        color: "#660099"
      },
      {
        title: "Disponibilidade de Mercado",
        description: "Disponível em 53 idiomas e 181 mercados. Conecte-se com Windows, Mac, iOS e Android.",
        icon: Cloud,
        color: "#EB3C7D"
      }
    ]
  }

  const tabs = [
    { id: "comunicacao", label: "Comunicação e Colaboração" },
    { id: "privacidade", label: "Privacidade e Segurança" },
    { id: "compatibilidade", label: "Compatibilidade" }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-white border-white/30 hover:bg-white/30" style={{ backgroundColor: 'rgba(102, 0, 153, 0.2)' }}>
            <MessageCircle className="w-4 h-4 mr-2" />
            Recursos do Microsoft Teams
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Aproveite o melhor do Teams com todos os recursos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra todas as funcionalidades disponíveis no Microsoft Teams para maximizar a produtividade da sua empresa
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {tabs.map((tab) => (
                <TabsTrigger key={tab.id} value={tab.id} className="text-sm">
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {tabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id} className="space-y-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {features[tab.id as keyof typeof features].map((feature, index) => (
                    <Card key={index} className="border-2 border-gray-100 hover:border-purple-200 transition-all duration-300">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: feature.color }}>
                          <feature.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Microsoft Partner Badge */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-3 bg-white rounded-2xl p-6 border-2 border-gray-100">
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#660099' }}>
              <span className="text-white font-bold text-sm">🏆</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Microsoft Partner of the Year 2023</h3>
              <p className="text-gray-600">Soluções inovadoras reconhecidas pela Microsoft</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="rounded-2xl p-8 border" style={{ background: 'linear-gradient(135deg, rgba(102, 0, 153, 0.05) 0%, rgba(235, 60, 125, 0.05) 100%)', borderColor: '#660099' }}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Quer conhecer todos os recursos disponíveis?
            </h3>
            <p className="text-gray-600 mb-6">
              Nossa equipe pode apresentar todas as funcionalidades do Microsoft Teams
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(90deg, #660099 0%, #EB3C7D 100%)' }}>
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <button className="text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300" style={{ background: 'linear-gradient(90deg, #660099 0%, #EB3C7D 100%)' }} onClick={() => window.open('https://wa.me/551123629665?text=Olá! Gostaria de conhecer todos os recursos do Microsoft Teams', '_blank')}>
                Explorar Todos os Recursos
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


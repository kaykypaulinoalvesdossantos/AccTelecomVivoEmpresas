"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Server, Network, Shield, CheckCircle, ArrowRight } from "lucide-react"

export function CloudPlusContractingSection() {
  const [activeTab, setActiveTab] = useState("vcp_padrao")

  const contractingOptions = {
    vcp_padrao: [
      "Servidores virtuais com recursos computacionais compartilhados",
      "Performance garantida através de reserva de recursos (CPU e Memória)",
      "Excelente custo-benefício",
      "Contratação fixa ou on-demand",
      "Pré-configurado",
      "Customizado"
    ],
    vcp_hibrido: [
      "Ambiente para integrar a infraestrutura VMware própria do cliente com o VCP",
      "Ótimo para contexto de transbordo das aplicações e plano de recuperação de desastre da TI",
      "Contratação fixa ou on-demand"
    ],
    vcp_dedicado: [
      "Servidores físicos dedicados e virtualizados",
      "Alto nível de reserva de recursos e maior performance",
      "Contratação fixa"
    ]
  }

  const tabs = [
    { id: "vcp_padrao", label: "VCP Padrão", icon: Server },
    { id: "vcp_hibrido", label: "VCP Híbrido", icon: Network },
    { id: "vcp_dedicado", label: "VCP Dedicado", icon: Shield }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-white border-white/30 hover:bg-white/30" style={{ backgroundColor: 'rgba(102, 0, 153, 0.2)' }}>
            <Server className="w-4 h-4 mr-2" />
            Modalidade de contratação
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Escolha a modalidade ideal para sua empresa
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Diferentes opções de contratação para atender às necessidades específicas do seu negócio
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
                      Modalidade de contratação ideal para {tab.label.toLowerCase()}
                    </p>
                  </div>
                  <div className="space-y-4">
                    <Card className="border-2 border-gray-100 hover:border-purple-200 transition-all duration-300">
                      <CardContent className="p-6">
                        <h4 className="text-lg font-bold text-gray-900 mb-4">
                          Características do {tab.label}
                        </h4>
                        <div className="space-y-3">
                          {contractingOptions[tab.id as keyof typeof contractingOptions].map((option, index) => (
                            <div key={index} className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#660099' }} />
                              <span className="text-gray-700">{option}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Qual modalidade é ideal para sua empresa?
            </h3>
            <p className="text-gray-600 mb-6">
              Nossa equipe de especialistas está pronta para ajudar você a escolher a melhor modalidade de contratação
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center" style={{ backgroundColor: '#FF9900' }} onClick={() => window.open('https://wa.me/5511989150001?text=Olá! Gostaria de saber qual modalidade Cloud Plus é ideal para minha empresa', '_blank')}>
                Consultoria Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 px-8 py-3 rounded-lg font-semibold transition-all duration-300" style={{ borderColor: '#660099', color: '#660099' }} onClick={() => window.open('https://wa.me/5511989150001?text=Olá! Gostaria de agendar uma consultoria sobre Cloud Plus', '_blank')}>
                Agendar Consultoria
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

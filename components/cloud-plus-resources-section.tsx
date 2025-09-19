"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Server, Database, Network, Plus, ArrowRight } from "lucide-react"

export function CloudPlusResourcesSection() {
  const [activeTab, setActiveTab] = useState("computacao")

  const resources = {
    computacao: [
      {
        title: "Servidores Virtuais",
        description: "Servidores virtuais com recursos computacionais compartilhados e performance garantida através de reserva de recursos (CPU e Memória)."
      },
      {
        title: "vCPU Intel Xeon E5",
        description: "Processadores Intel Xeon E5 de alta performance para suas aplicações mais exigentes."
      },
      {
        title: "Memória RAM",
        description: "Opções de memória RAM de 2GB, 4GB, 8GB, 16GB, 32GB e 64GB para diferentes necessidades."
      },
      {
        title: "Sistema Operacional",
        description: "Windows Server, Linux e outras distribuições disponíveis para sua infraestrutura."
      }
    ],
    armazenamento: [
      {
        title: "Storage em blocos Entry-Level",
        description: "Disponibilidade, segurança e confiabilidade com discos Entry-Level de até 7.2RPM."
      },
      {
        title: "Storage em blocos High-End",
        description: "Se a sua aplicação necessita de alto desempenho, os discos High-End são a melhor escolha para obter o melhor tempo de resposta (IOPS)."
      },
      {
        title: "SSD e HDD",
        description: "Opções de armazenamento SSD para alta performance e HDD para maior capacidade."
      },
      {
        title: "DRaaS (Disaster Recovery as a Service)",
        description: "Assegure a continuidade e a integridade do negócio estendendo seus ambientes para diferentes sites e mitigue cenários imprevistos."
      }
    ],
    rede: [
      {
        title: "VPN IPSec",
        description: "Serviço integrado que permite configurar uma rede privada entre seu escritório e o ambiente VCP e torná-lo seguro."
      },
      {
        title: "DNS",
        description: "Gerencie os nomes de domínio dos sites corporativos expostos na internet e maximize sua infraestrutura."
      },
      {
        title: "IP Público",
        description: "Aloque e controle os IPs Públicos das aplicações Web que sua empresa necessita em um só lugar."
      },
      {
        title: "Banda IP e Tráfego",
        description: "Administre e controle o quanto de banda uma rede no VCP pode trafegar sem ter gargalos inesperados."
      },
      {
        title: "Firewall",
        description: "Administre, crie regras e políticas com firewall integrado à plataforma do VCP, oferecendo as mesmas condições de um firewall físico."
      },
      {
        title: "Load Balancing",
        description: "Obtenha um ambiente Web estável e confiável, utilizando este recurso que é parte da arquitetura do VCP até a camada 7 das aplicações."
      }
    ],
    adicionais: [
      {
        title: "Relatórios",
        description: "Tenha uma visão executiva com as estatísticas e monitoração operacional do ambiente VCP para tomar as melhores decisões da infraestrutura de TI."
      },
      {
        title: "Serviços de implantação",
        description: "Conte com a experiência da Vivo nos processos e serviços de migração e operação de ambientes."
      },
      {
        title: "Suporte técnico",
        description: "Suporte técnico especializado 24/7 para sua infraestrutura Cloud Plus."
      },
      {
        title: "Monitoramento",
        description: "Monitoramento contínuo da infraestrutura com alertas proativos e relatórios detalhados."
      }
    ]
  }

  const tabs = [
    { id: "computacao", label: "Computação", icon: Server },
    { id: "armazenamento", label: "Armazenamento", icon: Database },
    { id: "rede", label: "Rede", icon: Network },
    { id: "adicionais", label: "Adicionais", icon: Plus }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-white border-white/30 hover:bg-white/30" style={{ backgroundColor: 'rgba(102, 0, 153, 0.2)' }}>
            <Server className="w-4 h-4 mr-2" />
            Recursos disponíveis
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Recursos Cloud Plus
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore nossa ampla gama de recursos de nuvem para diferentes necessidades empresariais
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
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
                      Recursos especializados em {tab.label.toLowerCase()} para sua infraestrutura Cloud Plus
                    </p>
                  </div>
                  <div className="space-y-4">
                    {resources[tab.id as keyof typeof resources].map((resource, index) => (
                      <Card key={index} className="border-2 border-gray-100 hover:border-purple-200 transition-all duration-300">
                        <CardContent className="p-6">
                          <h4 className="text-lg font-bold text-gray-900 mb-2">
                            {resource.title}
                          </h4>
                          <p className="text-gray-600 leading-relaxed">
                            {resource.description}
                          </p>
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
              Quer conhecer todos os recursos Cloud Plus?
            </h3>
            <p className="text-gray-600 mb-6">
              Nossa equipe de especialistas está pronta para apresentar todas as funcionalidades disponíveis
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(90deg, #660099 0%, #EB3C7D 100%)' }}>
                <Server className="w-6 h-6 text-white" />
              </div>
              <button className="text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300" style={{ background: 'linear-gradient(90deg, #660099 0%, #EB3C7D 100%)' }} onClick={() => window.open('https://wa.me/551123629665?text=Olá! Gostaria de conhecer todos os recursos do Cloud Plus', '_blank')}>
                Explorar Todos os Recursos
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

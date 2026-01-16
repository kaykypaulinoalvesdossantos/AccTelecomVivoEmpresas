"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Server, Database, Network, Settings, Shield, Cpu, ArrowRight } from "lucide-react"

export function HuaweiResourcesSection() {
  const [activeTab, setActiveTab] = useState("computacao")

  const resources = {
    computacao: [
      {
        title: "Elastic Cloud Server (ECS)",
        description: "Instâncias de servidores virtuais compostos por processador, memória, disco e rede."
      },
      {
        title: "Image Management Service (IMS)",
        description: "Bibliotecas de imagens públicas e privadas."
      },
      {
        title: "Auto Scaling (AS)",
        description: "Escalonamento automático de recursos através de políticas configuráveis."
      },
      {
        title: "Elastic Load Balance (ELB)",
        description: "Balanceamento e distribuição do tráfego web para múltiplas instâncias ECS."
      },
      {
        title: "Cloud Container Engine (CCE)",
        description: "Serviço de contêiner com alta disponibilidade e escalabilidade elástica. Os usuários podem criar, executar e parar contêineres Docker de forma fácil e rápida."
      }
    ],
    armazenamento: [
      {
        title: "Elastic Volume Service (EVS)",
        description: "Armazenamento em bloco para arquivos de sistemas, bancos de dados ou aplicações. Instalados em instâncias ECS."
      },
      {
        title: "Volume Backup Service (VBS)",
        description: "Backup e restauração de discos EVS atrelados à instâncias ECS."
      },
      {
        title: "Object Storage Service (OBS)",
        description: "Armazenamento de objetos via repositórios seguros (compatível com Amazon S3)"
      },
      {
        title: "Scalable File Service (SFS)",
        description: "O Scalable File Service (SFS) fornece armazenamento de arquivos escalável e de alto desempenho que pode ser compartilhado sob demanda com vários Elastic Cloud Servers (ECSs)."
      }
    ],
    redes: [
      {
        title: "Virtual Private Cloud (VPC)",
        description: "Redes virtuais privadas para isolamento dos recursos virtuais."
      },
      {
        title: "Elastic Load Balance (ELB)",
        description: "Balanceamento e distribuição do tráfego web para múltiplas instâncias ECS."
      },
      {
        title: "Direct Connect (DC)",
        description: "É um serviço que permite ao cliente estabelecer uma rede dedicada da nuvem pública do Huawei Cloud com seus ambientes privados fora da zona de disponibilidade do Huawei Cloud ou mesmo dentro do próprio datacenter da Vivo, interconectando-se com serviços tradicionais de TI como Colocation e Hosting ou outros serviços de nuvem."
      },
      {
        title: "Domain Name Service (DNS)",
        description: "Fornece uma forma confiável, econômica e efetiva para os desenvolvedores converterem um nome de domínio (como www.example.com) em um endereço de IP (como 192.0.2.1)."
      },
      {
        title: "Virtual Private Network (VPN)",
        description: "Uma VPN (Virtual Private Network) fornece um canal de comunicação criptografado entre usuários remotos e suas VPCs, para que os usuários possam acessar VPCs remotamente por meio da VPN."
      }
    ],
    gerenciamento: [
      {
        title: "Cloud Eye Service (CES)",
        description: "Plataforma de monitoramento online das métricas das instâncias ECS, EVS e AS."
      },
      {
        title: "Identity and Access Management (IAM)",
        description: "Gerenciamento e controle de usuários, recursos e permissões."
      },
      {
        title: "Cloud Trace Service (CTS)",
        description: "O Cloud Trace Service (CTS) fornece log de operações em recursos de serviços em nuvem. É possível consultar e auditar logs de todas as operações realizadas no Open Cloud, sejam elas via console web, API ou automáticas."
      },
      {
        title: "Migration as a Service (MaaS)",
        description: "É um serviço de migração de armazenamento de objetos, de imagens e de banco de dados. O MaaS entrega capacidade de autosserviço para usuários das nuvens de outros fornecedores para o Huawei Cloud."
      }
    ],
    banco_dados: [
      {
        title: "Relational Database Service (RDS)",
        description: "Serviços de banco de dados baseado em PaaS (Plataforma como Serviço)."
      },
      {
        title: "Distributed Cache Service (DCS)",
        description: "É um serviço de cache distribuído em memória que é totalmente hospedado na Cloud Computing Platform Baseado em REDIS,. O DCS oferece disponibilidade, confiabilidade, escalabilidade e facilidade de gerenciamento prontos para uso."
      },
      {
        title: "Distributed Database Service Beta (DDS)",
        description: "DDS é um banco de dados NoSQL que usa uma arquitetura de computação em nuvem de alta disponibilidade. O DDS oferece armazenamento de alto desempenho, switchovers principais/standby, expansões da capacidade online e backup e restauração de conjuntos de BD. Ele tem um sistema desenvolvido de monitoramento de desempenho, um mecanismo de proteção com vários níveis e uma plataforma profissional de gerenciamento de banco de dados."
      }
    ]
  }

  const tabs = [
    { id: "computacao", label: "Computação", icon: Server },
    { id: "armazenamento", label: "Armazenamento", icon: Database },
    { id: "redes", label: "Redes", icon: Network },
    { id: "gerenciamento", label: "Gerenciamento", icon: Settings },
    { id: "banco_dados", label: "Base de Dados", icon: Database }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-white border-white/30 hover:bg-white/30" style={{ backgroundColor: 'rgba(102, 0, 153, 0.2)' }}>
            <Server className="w-4 h-4 mr-2" />
            Confira os recursos disponíveis
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Recursos Huawei Cloud
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore nossa ampla gama de serviços de nuvem para diferentes necessidades empresariais
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
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
                      Serviços especializados em {tab.label.toLowerCase()} para sua infraestrutura em nuvem
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
              Quer conhecer todos os recursos Huawei Cloud?
            </h3>
            <p className="text-gray-600 mb-6">
              Nossa equipe de especialistas está pronta para apresentar todas as funcionalidades disponíveis
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(90deg, #660099 0%, #EB3C7D 100%)' }}>
                <Server className="w-6 h-6 text-white" />
              </div>
              <Button className="text-white px-8 py-6 rounded-lg font-semibold transition-all duration-300 cursor-pointer hover:opacity-90" style={{ background: 'linear-gradient(90deg, #660099 0%, #EB3C7D 100%)' }} asChild>
                <a href="https://wa.me/5511989150001?text=Olá! Gostaria de conhecer todos os recursos do Huawei Cloud" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  Explorar Todos os Recursos
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

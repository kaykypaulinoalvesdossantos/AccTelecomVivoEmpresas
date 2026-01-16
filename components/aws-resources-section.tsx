"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Server, Network, Database, MoreHorizontal, Cpu, Shield, Wifi, FileText, Users, Cloud, Zap, Settings } from "lucide-react"

export function AWSResourcesSection() {
  const [activeTab, setActiveTab] = useState("computacao")

  const computacaoServices = [
    {
      name: "Amazon EC2",
      description: "Provisione capacidade computacional redimensionável na nuvem. O Amazon EC2 permite que você escale e configure a capacidade conforme necessário.",
      icon: Server
    },
    {
      name: "Amazon ECS",
      description: "Serviço de orquestração de contêineres que permite implantar e gerenciar aplicações em contêineres sem operações de gerenciamento.",
      icon: Cpu
    },
    {
      name: "AWS Lambda",
      description: "Execute código sem provisionar ou gerenciar servidores. Pague apenas pelo tempo de computação consumido.",
      icon: Zap
    },
    {
      name: "Amazon ELB",
      description: "Distribui automaticamente o tráfego de aplicações entre vários destinos para alta disponibilidade e performance.",
      icon: Settings
    }
  ]

  const redesServices = [
    {
      name: "Amazon VPC",
      description: "Provisione várias seções da nuvem AWS logicamente isoladas, nas quais é possível executar recursos da AWS através de redes virtuais que você mesmo define.",
      icon: Network
    },
    {
      name: "Amazon VPN",
      description: "Estenda suas redes locais para a nuvem AWS e acesse-as com segurança de qualquer lugar.",
      icon: Wifi
    },
    {
      name: "Amazon Shield",
      description: "Serviço gerenciado de proteção contra ataques DDoS, protegendo aplicações executadas na nuvem com detecção e mitigações automatizadas.",
      icon: Shield
    },
    {
      name: "Direct Connect",
      description: "Estabeleça conectividade entre a nuvem AWS e seus escritórios através da rede MPLS de alta velocidade da Vivo, com conexões entre 1 Gbps e 10 Gbps.",
      icon: Network
    }
  ]

  const bancoDadosServices = [
    {
      name: "Amazon RDS",
      description: "Facilita a configuração, operação e escalabilidade de bancos de dados relacionais na nuvem, oferecendo capacidade econômica e redimensionável.",
      icon: Database
    },
    {
      name: "DynamoDB",
      description: "Serviço de banco de dados não-relacional que fornece tempos de resposta consistentes abaixo de 10 milissegundos, em qualquer escala.",
      icon: Database
    },
    {
      name: "Amazon DocumentDB",
      description: "Serviço de banco de dados para documentos, ágil, escalável e altamente disponível, projetado para operar cargas de trabalho de missão crítica.",
      icon: FileText
    }
  ]

  const outrosServices = [
    {
      name: "AWS Marketplace",
      description: "Catálogo digital com milhares de ofertas de software de fornecedores independentes que facilita a busca, teste, compra e implantação de software.",
      icon: Cloud
    },
    {
      name: "AWS IAM",
      description: "Gerencie com segurança o acesso aos serviços e recursos da AWS, criando e gerenciando usuários e grupos com permissões práticas e ágeis.",
      icon: Users
    },
    {
      name: "AWS Outposts",
      description: "Leva serviços, infraestrutura e modelos operacionais nativos da AWS a praticamente qualquer datacenter, espaço de co-location ou instalações locais.",
      icon: Server
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
            <Server className="w-4 h-4 mr-2" />
            Recursos AWS
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Recursos disponíveis
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore a ampla gama de serviços AWS organizados por categoria para facilitar sua escolha
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-12">
            <TabsTrigger value="computacao" className="flex items-center space-x-2">
              <Server className="w-4 h-4" />
              <span>Computação</span>
            </TabsTrigger>
            <TabsTrigger value="redes" className="flex items-center space-x-2">
              <Network className="w-4 h-4" />
              <span>Redes</span>
            </TabsTrigger>
            <TabsTrigger value="banco-dados" className="flex items-center space-x-2">
              <Database className="w-4 h-4" />
              <span>Banco de Dados</span>
            </TabsTrigger>
            <TabsTrigger value="outros" className="flex items-center space-x-2">
              <MoreHorizontal className="w-4 h-4" />
              <span>Outros</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="computacao" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {computacaoServices.map((service, index) => (
                <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                        <p className="text-gray-600 leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="redes" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {redesServices.map((service, index) => (
                <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                        <p className="text-gray-600 leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="banco-dados" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {bancoDadosServices.map((service, index) => (
                <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                        <p className="text-gray-600 leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="outros" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {outrosServices.map((service, index) => (
                <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                        <p className="text-gray-600 leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Precisa de ajuda para escolher os serviços ideais?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300" asChild>
              <a href="https://wa.me/5511989150001?text=Olá! Gostaria de uma consultoria especializada sobre serviços AWS" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                Consultoria Especializada
              </a>
            </Button>
            <Button variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300" asChild>
              <a href="https://aws.amazon.com/pt/services/" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                Ver Todos os Serviços
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
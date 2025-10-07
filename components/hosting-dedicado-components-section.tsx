"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Server, Wifi, Database, Shield, HardDrive, Settings, HeadphonesIcon } from "lucide-react"

export function HostingDedicadoComponentsSection() {
  const components = [
    {
      icon: Server,
      title: "Infraestrutura",
      description: "Racks, cabeamento, energia",
      color: "#660099"
    },
    {
      icon: Wifi,
      title: "Conectividade",
      description: "Serviços de conectividade",
      color: "#EB3C7D"
    },
    {
      icon: Database,
      title: "Servidores",
      description: "Virtuais ou físicos (RISC ou CISC)",
      color: "#660099"
    },
    {
      icon: Server,
      title: "Elemento de rede",
      description: "Componentes de rede",
      color: "#EB3C7D"
    },
    {
      icon: Database,
      title: "Softwares",
      description: "Sistemas operacionais, banco de dados",
      color: "#660099"
    },
    {
      icon: HardDrive,
      title: "Armazenamento",
      description: "Serviços de armazenamento e backup",
      color: "#EB3C7D"
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Serviços de segurança da informação",
      color: "#660099"
    },
    {
      icon: Settings,
      title: "Gestão",
      description: "Monitoração, gestão, operação e consultoria",
      color: "#EB3C7D"
    }
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#660099]/10 text-[#660099] border-[#660099]/20">
            <CheckCircle className="w-4 h-4 mr-2" />
            Componentes da Solução
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Confira os componentes da nossa solução de
            <span className="block text-[#660099]">Hosting</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Os componentes listados podem fazer parte da solução de Hosting, 
            entregues como serviço (físico ou virtual), respeitando SLAs e índices de disponibilidade.
          </p>
        </div>

        {/* Components Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {components.map((component, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:bg-gray-50">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div 
                    className="w-20 h-20 mx-auto flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: component.color }}
                  >
                    <component.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{component.title}</h3>
                <p className="text-gray-600 leading-relaxed">{component.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-3xl p-12 text-white">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-6">Solução Completa e Integrada</h3>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Server className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Infraestrutura</h4>
                  <p className="text-white/90">Física e virtual completa</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Wifi className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Conectividade</h4>
                  <p className="text-white/90">Serviços de rede</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Segurança</h4>
                  <p className="text-white/90">Proteção de dados</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Gestão</h4>
                  <p className="text-white/90">Monitoração e suporte</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

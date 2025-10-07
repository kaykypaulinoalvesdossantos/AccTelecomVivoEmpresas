"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Settings, Wrench, HeadphonesIcon } from "lucide-react"

export function HostingDedicadoSupportSection() {
  const supportTypes = [
    {
      icon: Settings,
      title: "Gestão de Clientes/Serviços",
      description: "Gerente dedicado para cada cliente para monitorar serviços, gerenciar mudanças e manter documentação, atuando como interface com a equipe de operações.",
      color: "#660099"
    },
    {
      icon: Wrench,
      title: "Engenharia Data Center",
      description: "Equipe dedicada para garantir a disponibilidade e integridade dos serviços oferecidos pela Telefónica, fornecendo também suporte de segundo nível.",
      color: "#EB3C7D"
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#660099]/10 text-[#660099] border-[#660099]/20">
            <HeadphonesIcon className="w-4 h-4 mr-2" />
            Suporte Especializado
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Conheça nosso
            <span className="block text-[#660099]">Suporte Técnico</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Equipes especializadas para garantir o melhor atendimento e suporte 
            técnico para sua infraestrutura de hosting.
          </p>
        </div>

        {/* Support Types Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {supportTypes.map((support, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gray-50 hover:bg-white">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: support.color }}
                  >
                    <support.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{support.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{support.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-3xl p-12 text-white">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-6">Suporte Técnico Especializado</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Gestão Dedicada</h4>
                  <p className="text-white/90">Gerente exclusivo para cada cliente</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Wrench className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Engenharia Especializada</h4>
                  <p className="text-white/90">Equipe técnica de segundo nível</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

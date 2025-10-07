"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Droplets, Mountain, Sprout } from "lucide-react"

export function ClimaInteligenteApplicationsSection() {
  const applications = [
    {
      icon: Droplets,
      title: "Monitoramento meteorológico",
      description: "Acompanhe condições climáticas em tempo real para tomada de decisões precisas",
      color: "#660099"
    },
    {
      icon: Mountain,
      title: "Monitoramento do solo",
      description: "Controle a umidade e qualidade do solo para otimizar o crescimento das plantas",
      color: "#EB3C7D"
    },
    {
      icon: Sprout,
      title: "Gestão da irrigação",
      description: "Automatize a irrigação baseada em dados climáticos e necessidades das culturas",
      color: "#660099"
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#660099]/10 text-[#660099] border-[#660099]/20">
            <Droplets className="w-4 h-4 mr-2" />
            Aplicações
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Confira as opções de
            <span className="block text-[#660099]">aplicação</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas para monitoramento climático e gestão agrícola 
            com tecnologia de ponta para o campo.
          </p>
        </div>

        {/* Applications Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {applications.map((application, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gray-50 hover:bg-white">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div 
                    className="w-20 h-20 mx-auto flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: application.color }}
                  >
                    <application.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{application.title}</h3>
                <p className="text-gray-600 leading-relaxed">{application.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-3xl p-12 text-white">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-6">Tecnologia que conecta o campo</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Droplets className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Monitoramento Contínuo</h4>
                  <p className="text-white/90">Dados climáticos atualizados 24/7</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Mountain className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Análise do Solo</h4>
                  <p className="text-white/90">Controle preciso da qualidade do solo</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Sprout className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Irrigação Inteligente</h4>
                  <p className="text-white/90">Automação baseada em dados reais</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Smartphone, Shield, Settings, Database, AlertTriangle } from "lucide-react"

export function MDMBenefitsSection(): React.JSX.Element {
  const benefits = [
    {
      icon: Clock,
      title: "Controle de horário",
      description: "Limite o horário de utilização dos dispositivos, evitando horas extras"
    },
    {
      icon: Smartphone,
      title: "Rastreamento em tempo real",
      description: "Saiba onde cada smartphone ou tablet de seus colaboradores estão em tempo real"
    },
    {
      icon: Shield,
      title: "Bloqueio remoto",
      description: "Bloqueie smartphone remotamente em caso de perda, roubo ou extravio"
    },
    {
      icon: Settings,
      title: "Separação de perfis",
      description: "Visão segurança com separação de perfil pessoal e corporativo"
    },
    {
      icon: Database,
      title: "Controle de aplicativos",
      description: "Instale, remova e bloqueie o uso de aplicativos de forma remota"
    },
    {
      icon: AlertTriangle,
      title: "Alerta de troca de chip",
      description: "Configuração de alerta em caso de troca de chip"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Confira os benefícios do MDM
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Controle total dos dispositivos da sua empresa com segurança e eficiência
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-[#660099]/10 to-[#EB3C7D]/10 border border-[#660099]/20 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Por que escolher o MDM da Vivo?
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-[#660099] mb-2">24/7</div>
                  <p className="text-gray-600">Monitoramento contínuo</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#660099] mb-2">100%</div>
                  <p className="text-gray-600">Segurança garantida</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#660099] mb-2">R$ 6,90</div>
                  <p className="text-gray-600">Por mês por dispositivo</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Users, Briefcase, Shield, Smartphone } from "lucide-react"

export function MDMTargetSection(): React.JSX.Element {
  const targetCompanies = [
    {
      icon: Building2,
      title: "Empresas de médio porte",
      description: "Empresas com 50 a 500 funcionários que precisam de controle de dispositivos"
    },
    {
      icon: Users,
      title: "Equipes de vendas",
      description: "Equipes que trabalham em campo e precisam de dispositivos seguros"
    },
    {
      icon: Briefcase,
      title: "Consultorias",
      description: "Empresas de consultoria que gerenciam múltiplos clientes"
    },
    {
      icon: Shield,
      title: "Setor financeiro",
      description: "Bancos e instituições financeiras com alta necessidade de segurança"
    },
    {
      icon: Smartphone,
      title: "Startups",
      description: "Empresas em crescimento que precisam de controle de custos"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Para qual tipo de empresa o MDM é indicado?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubra se sua empresa pode se beneficiar da solução MDM da Vivo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {targetCompanies.map((company, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <company.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {company.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {company.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-[#660099]/10 to-[#EB3C7D]/10 border border-[#660099]/20 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Não encontrou seu perfil?
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                O MDM é uma solução versátil que pode ser adaptada para diferentes tipos de empresas. 
                Entre em contato conosco para uma consultoria personalizada e descubra como podemos 
                ajudar sua empresa a gerenciar dispositivos com segurança e eficiência.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#660099]">(11) 2362-9665</div>
                  <p className="text-sm text-gray-600">Central de Atendimento</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#660099]">24/7</div>
                  <p className="text-sm text-gray-600">Suporte Técnico</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

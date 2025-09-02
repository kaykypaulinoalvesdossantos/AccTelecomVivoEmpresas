"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Users, Smartphone } from "lucide-react"

export function PortabilityInfoSection(): React.JSX.Element {
  const requirements = [
    {
      icon: FileText,
      title: "CNPJ ATIVO",
      description: "Seu CNPJ deve estar ativo e em dia com as obrigações fiscais"
    },
    {
      icon: Users,
      title: "STATUS CONTRATUAL",
      description: "Não pode ter pendências contratuais com a operadora atual"
    },
    {
      icon: Smartphone,
      title: "CHIP",
      description: "O chip deve estar ativo e sem bloqueios na operadora atual"
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-[#660099] to-[#EB3C7D]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            O que é portabilidade?
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            A portabilidade permite que você mude de operadora mantendo o mesmo número de telefone. 
            É um processo simples e rápido, garantindo que sua empresa não perca contatos importantes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {requirements.map((requirement, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 text-white">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center">
                  <requirement.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-white">
                  {requirement.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-white/90">
                  {requirement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

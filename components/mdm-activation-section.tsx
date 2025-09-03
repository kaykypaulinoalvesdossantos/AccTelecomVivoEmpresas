"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Settings, Smartphone, Shield, CheckCircle } from "lucide-react"

export function MDMActivationSection(): React.JSX.Element {
  const steps = [
    {
      number: 1,
      title: "Contrate o plano MDM",
      description: "Escolha o plano ideal para sua empresa e faça a contratação através do nosso site ou central de atendimento."
    },
    {
      number: 2,
      title: "Receba o aplicativo MDM",
      description: "Após a contratação, você receberá o link para download do aplicativo MDM e suas credenciais de acesso."
    },
    {
      number: 3,
      title: "Configure os dispositivos",
      description: "Instale o aplicativo nos dispositivos que deseja gerenciar e configure as políticas de segurança."
    },
    {
      number: 4,
      title: "Monitore e gerencie",
      description: "Acesse o painel de controle e comece a monitorar e gerenciar todos os dispositivos da sua empresa."
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Como ativar o MDM Gestão de Dispositivos?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Processo simples e rápido para começar a usar a solução MDM da Vivo
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">{step.number}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-r from-[#660099]/10 to-[#EB3C7D]/10 border border-[#660099]/20">
              <CardContent className="p-8">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <CheckCircle className="w-8 h-8 text-[#660099]" />
                  <h3 className="text-xl font-bold text-gray-800">
                    Ativação em até 24 horas
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Após a contratação, sua solução MDM estará ativa em até 24 horas. 
                  Nossa equipe de suporte estará disponível para auxiliar em todo o processo de configuração.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Smartphone, Star } from "lucide-react"

export function PortabilityStepsSection(): React.JSX.Element {
  const steps = [
    {
      icon: CheckCircle,
      title: "Solicitação confirmada",
      description: "Sua solicitação foi recebida e está sendo processada"
    },
    {
      icon: Smartphone,
      title: "Chip ativado",
      description: "O chip da Vivo será ativado e você receberá instruções"
    },
    {
      icon: Star,
      title: "Portabilidade concluída",
      description: "Seu número foi transferido com sucesso para a Vivo"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Fiz a solicitação de portabilidade e agora?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Após solicitar a portabilidade, acompanhe o processo através dos passos abaixo. 
            O processo é simples e transparente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {steps.map((step, index) => (
            <Card key={index} className="bg-white border border-gray-200 shadow-lg relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-full flex items-center justify-center text-white font-bold text-sm">
                {index + 1}
              </div>
              <CardHeader className="text-center pb-4 pt-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-2xl flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">
                Acompanhe seu processo
              </h3>
              <p className="text-blue-700">
                Você receberá atualizações por SMS e email sobre o status da sua portabilidade. 
                O processo geralmente é concluído em até 24 horas úteis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

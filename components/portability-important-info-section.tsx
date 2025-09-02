"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, X, User, Calendar } from "lucide-react"

export function PortabilityImportantInfoSection(): React.JSX.Element {
  const importantInfo = [
    {
      icon: X,
      title: "Número bloqueado",
      description: "Números bloqueados não podem ser portados"
    },
    {
      icon: AlertTriangle,
      title: "Pendências financeiras",
      description: "Contas em atraso impedem a portabilidade"
    },
    {
      icon: User,
      title: "Titularidade",
      description: "O titular deve estar em dia com a operadora"
    },
    {
      icon: Calendar,
      title: "Prazo de carência",
      description: "Respeite o prazo mínimo de contrato"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Informações importantes para portabilidade
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Antes de solicitar a portabilidade, verifique se você atende a todos os requisitos. 
            Isso garante um processo mais rápido e sem interrupções.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {importantInfo.map((info, index) => (
            <Card key={index} className="bg-white border border-gray-200 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 mx-auto mb-3 bg-red-100 rounded-xl flex items-center justify-center">
                  <info.icon className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-800">
                  {info.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-sm">
                  {info.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                Observação importante
              </h3>
              <p className="text-yellow-700">
                A portabilidade pode ser negada se houver qualquer pendência com a operadora atual. 
                Verifique todos os requisitos antes de iniciar o processo para evitar transtornos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

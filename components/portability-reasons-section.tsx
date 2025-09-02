"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X, FileText, AlertTriangle, Search, Users, Calendar } from "lucide-react"

export function PortabilityReasonsSection(): React.JSX.Element {
  const reasons = [
    {
      icon: X,
      title: "Número bloqueado",
      description: "Números bloqueados por dívidas ou irregularidades"
    },
    {
      icon: FileText,
      title: "Documentação incompleta",
      description: "Falta de documentos obrigatórios para o processo"
    },
    {
      icon: AlertTriangle,
      title: "Pendências financeiras",
      description: "Contas em atraso com a operadora atual"
    },
    {
      icon: Search,
      title: "Dados divergentes",
      description: "Informações que não coincidem com os registros"
    },
    {
      icon: Users,
      title: "Titularidade",
      description: "Problemas com a titularidade do número"
    },
    {
      icon: Calendar,
      title: "Prazo de carência",
      description: "Não respeitou o prazo mínimo de contrato"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Por que meu pedido de portabilidade pode ser negado pela operadora?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Existem algumas situações que podem impedir a portabilidade. 
            Conheça os principais motivos para evitar surpresas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="bg-white border border-gray-200 shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-3">
                  <reason.icon className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-800">
                  {reason.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-red-800 mb-2">
                Observação importante
              </h3>
              <p className="text-red-700">
                Se sua portabilidade for negada, você pode solicitar uma nova tentativa após 
                resolver as pendências. Nossa equipe está disponível para ajudar você a 
                identificar e resolver qualquer problema.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

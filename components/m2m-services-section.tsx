"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MessageSquare, Phone, CreditCard } from "lucide-react"

export function M2MServicesSection(): React.JSX.Element {
  const individualServices = [
    {
      icon: MessageSquare,
      name: "SMS",
      price: "R$ 0,30",
      description: "Por SMS enviado",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Phone,
      name: "VOZ",
      price: "R$ 1,50",
      description: "Por minuto de chamada realizada",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: CreditCard,
      name: "SIM CARD",
      price: "R$ 5,00",
      description: "Gratuito a partir de 300 linhas",
      color: "from-green-500 to-green-600"
    }
  ]

  const roamingServices = [
    {
      icon: Phone,
      name: "VOZ",
      price: "R$ 1,99",
      period: "/MINUTO",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: MessageSquare,
      name: "SMS",
      price: "R$ 0,99",
      period: "/MENSAGEM",
      color: "from-green-500 to-green-600"
    },
    {
      icon: CreditCard,
      name: "DADOS",
      price: "R$ 1,50",
      period: "/MB",
      color: "from-pink-500 to-pink-600"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Serviços Avulsos e Roaming Internacional
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Serviços complementares para suas necessidades específicas de conectividade M2M
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Serviços Avulsos */}
          <div>
            <div className="mb-8">
              <Badge className="bg-purple-100 text-purple-800 px-4 py-2 text-lg font-semibold mb-4">
                SERVIÇOS AVULSOS
              </Badge>
            </div>

            <div className="space-y-4">
              {individualServices.map((service, index) => (
                <Card key={index} className="border-2 border-gray-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center`}>
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">{service.name}</h3>
                          <p className="text-sm text-gray-600">{service.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-purple-600">{service.price}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Roaming Internacional */}
          <div>
            <div className="mb-8">
              <Badge className="bg-purple-100 text-purple-800 px-4 py-2 text-lg font-semibold mb-4">
                ROAMING INTERNACIONAL
              </Badge>
            </div>

            <div className="space-y-4">
              {roamingServices.map((service, index) => (
                <Card key={index} className="border-2 border-gray-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center`}>
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">{service.name}</h3>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-purple-600">{service.price}</div>
                        <div className="text-sm text-gray-600">{service.period}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Informações Adicionais */}
        <div className="mt-12 bg-gray-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Informações Importantes</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• M2M IoT: antigo NPOS</li>
                <li>• CHIP adquirente: antigo POS</li>
                <li>• Plano Base SC M2M</li>
                <li>• Incluso acesso à Vivo Kite Platform</li>
              </ul>
            </div>
            <div className="text-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-3"
                asChild
              >
                <a href="https://wa.me/5511989150001?text=Olá! Gostaria de solicitar serviços M2M e Roaming" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  Solicitar Serviços
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

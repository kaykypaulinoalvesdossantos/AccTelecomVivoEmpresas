"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Network, PhoneCall, Hash, Check, ArrowRight } from "lucide-react"
import { vozColaboracaoConfig } from "@/data/voz-colaboracao-data"
import Link from "next/link"

export function VozColaboracaoServicesSection() {
  const { services } = vozColaboracaoConfig

  const IconComponent = (iconName: string) => {
    switch (iconName) {
      case "Phone": return Phone
      case "Network": return Network
      case "PhoneCall": return PhoneCall
      case "Hash": return Hash
      default: return Phone
    }
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200 text-sm sm:text-base">Serviços</Badge>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Soluções de Voz e Colaboração para sua Empresa
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Conecte sua equipe com as melhores ferramentas de comunicação empresarial
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = IconComponent(service.icon)
            return (
              <Card
                key={service.id}
                className={`relative transition-all duration-300 hover:shadow-2xl ${service.popular ? "ring-2 ring-purple-500 scale-105 shadow-xl" : "hover:scale-105"}`}
              >
                {service.popular && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 sm:px-4 py-1 text-xs sm:text-sm">
                      Mais Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4 pt-6 sm:pt-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-4 mx-auto">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <CardTitle className="text-lg sm:text-xl font-bold mb-3">{service.name}</CardTitle>
                  <p className="text-sm text-gray-600 mb-4">{service.description}</p>

                  <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                    {service.price}
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-xs sm:text-sm">
                        <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-2 sm:space-y-3">
                    <Button
                      asChild
                      className={`w-full font-medium transition-colors text-sm sm:text-base ${service.popular ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white" : "border border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent hover:text-gray-900"}`}
                      variant={service.popular ? "default" : "outline"}
                    >
                      <Link
                        href={service.href}
                        className="cursor-pointer flex items-center justify-center"
                      >
                        <ArrowRight className="w-4 h-4 inline mr-2" />
                        Saiba mais
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-xs sm:text-sm text-gray-500 mb-2">
            * Preços podem variar conforme localização e configuração específica.
          </p>
          <p className="text-xs sm:text-sm text-gray-500">
            Consulte condições especiais para empresas com múltiplas linhas.
          </p>
        </div>
      </div>
    </section>
  )
}

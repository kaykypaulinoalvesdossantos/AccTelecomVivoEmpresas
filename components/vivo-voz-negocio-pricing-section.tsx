"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cloud, Headphones, Mic, Users, Check, Phone } from "lucide-react"
import { vivoVozNegocioConfig } from "@/data/vivo-voz-negocio-data"

export function VivoVozNegocioPricingSection() {
  const { standardLicenses, callCenterLicenses, additionalServices, trialOffer, technicalInfo, contact } = vivoVozNegocioConfig

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200 text-sm sm:text-base">Preços</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Licenças e Serviços Disponíveis
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Valores compostos pela Licença do PABX Virtual + Plano de Voz Ilimitado
          </p>
        </div>

        {/* Licenças Padrão */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Cloud className="w-6 h-6 text-green-600" />
              <h3 className="text-2xl font-bold text-gray-900">{standardLicenses.title}</h3>
            </div>
            <p className="text-gray-600">{standardLicenses.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {standardLicenses.tiers.map((tier, index) => (
              <Card key={index} className="relative transition-all duration-300 hover:shadow-xl hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-lg font-bold text-gray-900 mb-2">{tier.range}</CardTitle>
                  <div className="space-y-3">
                    <div className="bg-purple-100 rounded-lg p-3">
                      <div className="text-sm text-gray-600 mb-1">24 meses</div>
                      <div className="text-xl font-bold text-purple-600">{tier.price24}</div>
                    </div>
                    <div className="bg-green-100 rounded-lg p-3">
                      <div className="text-sm text-gray-600 mb-1">36 meses</div>
                      <div className="text-xl font-bold text-green-600">{tier.price36}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                    asChild
                  >
                    <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
                      Contratar
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Licenças Call Center */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Users className="w-6 h-6 text-purple-600" />
              <h3 className="text-2xl font-bold text-gray-900">{callCenterLicenses.title}</h3>
            </div>
            <p className="text-gray-600">{callCenterLicenses.description}</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="relative transition-all duration-300 hover:shadow-xl">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold text-gray-900 mb-4">{callCenterLicenses.tiers[0].range}</CardTitle>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-purple-100 rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-2">24 meses</div>
                    <div className="text-2xl font-bold text-purple-600">{callCenterLicenses.tiers[0].price24}</div>
                  </div>
                  <div className="bg-green-100 rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-2">36 meses</div>
                    <div className="text-2xl font-bold text-green-600">{callCenterLicenses.tiers[0].price36}</div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4">** {callCenterLicenses.maxLicenses}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <Button
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                  asChild
                >
                  <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
                    Contratar Call Center
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Serviços Adicionais */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{additionalServices.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {additionalServices.services.map((service, index) => (
              <Card key={index} className="transition-all duration-300 hover:shadow-xl hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    {service.name === "URA (Interactive Voice Response)" ? (
                      <Headphones className="w-8 h-8 text-white" />
                    ) : (
                      <Mic className="w-8 h-8 text-white" />
                    )}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{service.name}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  {service.options ? (
                    <div className="space-y-4">
                      {service.options.map((option, optionIndex) => (
                        <div key={optionIndex} className="text-center">
                          <div className="text-sm text-gray-600 mb-1">{option.type}</div>
                          <div className="text-xl font-bold text-purple-600">{option.price}</div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600 mb-2">{service.price}</div>
                      <p className="text-sm text-gray-600">{service.note}</p>
                    </div>
                  )}
                  {service.note && service.options && (
                    <p className="text-xs text-gray-500 mt-3 text-center">* {service.note}</p>
                  )}
                  {service.availability && (
                    <p className="text-xs text-gray-500 mt-2 text-center">{service.availability}</p>
                  )}
                  <Button
                    className="w-full mt-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
                    asChild
                  >
                    <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
                      Contratar Serviço
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Características Call Center */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Características da Licença Call Center</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-purple-600" />
                  <CardTitle className="text-xl font-bold text-gray-900">Supervisor</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {callCenterLicenses.features.supervisor.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-purple-600" />
                  <CardTitle className="text-xl font-bold text-gray-900">Agente</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {callCenterLicenses.features.agent.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Oferta de Teste */}
        <Card className="mb-16 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-2xl">!</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{trialOffer.title}</h3>
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">{trialOffer.description}</p>
          </CardContent>
        </Card>

        {/* Informações Técnicas */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Informações Importantes</h3>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <ul className="space-y-4">
                {technicalInfo.map((info, index) => (
                  <li key={index} className="flex items-start text-sm">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{info}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold"
            asChild
          >
            <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
              Falar com Consultor
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

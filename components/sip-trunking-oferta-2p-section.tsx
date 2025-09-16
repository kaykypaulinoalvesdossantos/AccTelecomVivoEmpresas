"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Plus, Wifi, Phone, ArrowRight } from "lucide-react"
import { sipTrunkingConfig } from "@/data/sip-trunking-data"

export function SipTrunkingOferta2PSection() {
  const { oferta2P, contact } = sipTrunkingConfig

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200 text-sm sm:text-base">Oferta Especial</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            {oferta2P.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            {oferta2P.subtitle}
          </p>
        </div>

        {/* Benefícios */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Mais Benefícios para seu cliente</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {oferta2P.benefits.map((benefit, index) => (
              <Card key={index} className="relative transition-all duration-300 hover:shadow-xl hover:scale-105 bg-white border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-800 font-medium">{benefit}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Oferta Principal */}
        <Card className="mb-12 bg-gradient-to-r from-pink-50 to-purple-50 border-pink-200">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{oferta2P.mainOffer}</h3>
              <p className="text-lg text-gray-600">{oferta2P.flexibility}</p>
            </div>

            {/* Combinação SIP + Internet */}
            <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8">
              {/* SIP */}
              <Card className="w-full lg:w-80 bg-white border border-gray-200 relative transition-all duration-300 hover:shadow-xl">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">SIP</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    {oferta2P.sipOptions.map((option, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="w-full border-purple-300 text-purple-700 hover:bg-purple-50"
                      >
                        {option}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Plus Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center">
                  <Plus className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Internet Dedicada */}
              <Card className="w-full lg:w-80 bg-white border border-gray-200 relative transition-all duration-300 hover:shadow-xl">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Wifi className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">INTERNET DEDICADA</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="grid grid-cols-2 gap-2">
                    {oferta2P.internetSpeeds.map((speed, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="text-xs border-purple-300 text-purple-700 hover:bg-purple-50"
                      >
                        {speed}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Condições */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Fique Atento!</h3>
          <Card className="max-w-4xl mx-auto bg-white border border-gray-200">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Condições Gerais</h4>
                  <ul className="space-y-3">
                    {oferta2P.conditions.slice(0, 3).map((condition, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{condition}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Condições Específicas</h4>
                  <ul className="space-y-3">
                    {oferta2P.conditions.slice(3).map((condition, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{condition}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
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
              Consultar Valores no Simplifique
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

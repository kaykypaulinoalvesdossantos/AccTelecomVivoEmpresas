"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wifi, Phone, Check } from "lucide-react"
import { pacoteEmpresaConfig } from "@/data/pacote-empresa-data"

export function PacoteEmpresaOfertasAdicionaisSection() {
  const { ofertasAdicionais, contact } = pacoteEmpresaConfig

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200 text-sm sm:text-base">Ofertas Adicionais</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">Mais Opções para sua Empresa</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Pacotes com voz fixa para comunicação completa
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {ofertasAdicionais.map((oferta) => (
            <Card
              key={oferta.id}
              className={`relative transition-all duration-300 hover:shadow-2xl ${oferta.popular ? "ring-2 ring-purple-500 scale-105 shadow-xl" : "hover:scale-105"}`}
            >
              {oferta.badge && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 sm:px-4 py-1 text-xs sm:text-sm">
                    {oferta.badge}
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4 pt-6 sm:pt-8">
                <CardTitle className="text-lg sm:text-xl font-bold mb-3">{oferta.name}</CardTitle>
                
                <div className="space-y-4">
                  {/* Internet */}
                  <div className="flex items-center justify-center space-x-2">
                    <Wifi className="w-5 h-5 text-purple-600" />
                    <div className="text-center">
                      <div className="text-lg font-semibold text-gray-900">{oferta.internet}</div>
                      <div className="text-xs text-gray-500">{oferta.internetType}</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mt-4">
                  {oferta.originalPrice && (
                    <div className="text-sm text-gray-400 line-through">{oferta.originalPrice}</div>
                  )}
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">
                    {oferta.price}
                  </div>
                  {oferta.discount && (
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200 text-xs sm:text-sm">
                      {oferta.discount}
                    </Badge>
                  )}
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Features */}
                {oferta.features && (
                  <div className="mb-4">
                    <ul className="space-y-2">
                      {oferta.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-xs sm:text-sm">
                          <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Services */}
                {oferta.services && (
                  <div className="mb-4">
                    <ul className="space-y-2">
                      {oferta.services.map((service, index) => (
                        <li key={index} className="flex items-start text-xs sm:text-sm">
                          <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Vivo Valoriza */}
                {oferta.value && (
                  <div className="mb-6 text-center">
                    <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 text-xs sm:text-sm">
                      {oferta.value}
                    </Badge>
                  </div>
                )}

                <div className="space-y-2 sm:space-y-3">
                  <a
                    href={contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-block text-center py-2 px-3 sm:px-4 rounded-md font-medium transition-colors text-sm sm:text-base ${oferta.popular ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white" : "border border-gray-300 text-gray-700 hover:bg-gray-50"}`}
                  >
                    {oferta.button}
                  </a>
                  <Button variant="ghost" className="w-full text-xs sm:text-sm">
                    {oferta.buttonSecondary}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

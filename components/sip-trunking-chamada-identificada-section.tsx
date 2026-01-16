"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Check, AlertTriangle, Smartphone, Phone } from "lucide-react"
import { sipTrunkingConfig } from "@/data/sip-trunking-data"

export function SipTrunkingChamadaIdentificadaSection() {
  const { chamadaIdentificada, contact } = sipTrunkingConfig

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200 text-sm sm:text-base">Segurança</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            {chamadaIdentificada.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            {chamadaIdentificada.subtitle}
          </p>
          <p className="text-base text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {chamadaIdentificada.description}
          </p>
        </div>

        {/* Preço e Disponibilidade */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="relative transition-all duration-300 hover:shadow-2xl hover:scale-105 bg-white border border-gray-200">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-900 mb-2">Preço e Disponibilidade</CardTitle>
              <p className="text-sm text-gray-600">{chamadaIdentificada.availability}</p>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">{chamadaIdentificada.price}</div>
                  <p className="text-sm text-gray-600">{chamadaIdentificada.priceNote}</p>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-900 mb-1">Prazo Contratual</div>
                  <div className="text-xl font-bold text-green-600">{chamadaIdentificada.contractTerm}</div>
                </div>
              </div>
              <Button
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
                asChild
              >
                <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  Contratar Chamada Identificada
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="relative transition-all duration-300 hover:shadow-2xl hover:scale-105 bg-white border border-gray-200">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-900 mb-2">Integração com SIP</CardTitle>
              <p className="text-sm text-gray-600">Funciona em conjunto com o SIP Trunking</p>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">+</span>
                  </div>
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="text-sm text-gray-700 text-center">{chamadaIdentificada.integrationNote}</p>
              </div>
              <Button
                className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white"
                asChild
              >
                <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  Saiba Mais
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Características */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Características do Serviço</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {chamadaIdentificada.features.map((feature, index) => (
              <Card key={index} className="relative transition-all duration-300 hover:shadow-xl hover:scale-105 bg-white border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-800 font-medium">{feature}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Nota Regulamentar */}
        <Card className="mb-12 bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
          <CardContent className="p-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Importante - Determinação Anatel</h3>
                <p className="text-gray-800 text-lg leading-relaxed">{chamadaIdentificada.regulatoryNote}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notas Importantes */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Informações Importantes</h3>
          <Card className="max-w-4xl mx-auto bg-white border border-gray-200">
            <CardContent className="p-8">
              <ul className="space-y-4">
                {chamadaIdentificada.importantNotes.map((note, index) => (
                  <li key={index} className="flex items-start text-sm">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{note}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

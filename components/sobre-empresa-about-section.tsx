"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Wifi, Shield, Headphones, MapPin, Calendar } from "lucide-react"

export function SobreEmpresaAboutSection() {
  return (
    <section id="sobre" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200 text-sm sm:text-base">Sobre Nós</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Nossa História e Missão
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quem Somos</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                A Acc Telecom é uma empresa especializada em soluções de telecomunicações empresariais, 
                atuando como <strong>Parceiro Autorizado Vivo Empresas</strong> desde 2008. Com sede em São Paulo, 
                oferecemos serviços completos de conectividade, voz e colaboração para empresas de todos os portes.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Nossa missão é conectar empresas ao futuro, oferecendo tecnologia de ponta, 
                atendimento personalizado e soluções que impulsionam o crescimento dos nossos clientes. 
                Atendemos desde pequenas empresas até grandes corporações em todo o território nacional.
              </p>
              
              {/* Informações específicas da empresa */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <MapPin className="w-5 h-5 text-purple-600" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Sede</div>
                    <div className="text-xs text-gray-600">São Paulo - SP</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Calendar className="w-5 h-5 text-purple-600" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Fundada em</div>
                    <div className="text-xs text-gray-600">2008</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Parceiro Autorizado</div>
                  <div className="text-sm text-gray-600">Vivo Empresas</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                    <Wifi className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">Conectividade</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-center">
                  <p className="text-gray-600 text-sm">
                    Internet fibra, dedicada e soluções de rede corporativa
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">Voz</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-center">
                  <p className="text-gray-600 text-sm">
                    Planos móveis, 0800, 0300 e soluções de telefonia
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">Segurança</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-center">
                  <p className="text-gray-600 text-sm">
                    Soluções de segurança e proteção digital
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center">
                    <Headphones className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">Suporte</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-center">
                  <p className="text-gray-600 text-sm">
                    Atendimento especializado 24/7
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

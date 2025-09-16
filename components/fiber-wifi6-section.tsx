"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wifi, Zap, Users, Gauge, Router, Shield, CheckCircle } from "lucide-react"
import { fiberConfig } from "@/data/fiber-data"

export function FiberWiFi6Section() {
  const { wifi6Benefits, wifi6Specs, cta, contact } = fiberConfig

  const iconMap = {
    Wifi: Wifi,
    Zap: Zap,
    Users: Users,
    Gauge: Gauge,
    Router: Router,
    Shield: Shield
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200 text-sm sm:text-base">Tecnologia Avançada</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">Sua empresa mais rápida e eficiente com o Wi-Fi 6</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Tecnologia mais avançada para conectar todos os seus dispositivos com máxima performance e estabilidade.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
          <div className="space-y-6 lg:space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Vantagens do Wi-Fi 6</h3>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                O Wi-Fi 6 representa a próxima geração de conectividade sem fio, oferecendo velocidades até 4x superiores 
                ao Wi-Fi 5, suporte a mais dispositivos conectados simultaneamente e menor latência para uma experiência 
                de conectividade empresarial incomparável.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {wifi6Benefits.map((benefit, index) => {
                const IconComponent = iconMap[benefit.icon as keyof typeof iconMap]
                return (
                  <div key={index} className="flex items-start gap-3 sm:gap-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${benefit.color} rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">{benefit.title}</h4>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="relative">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
              <CardContent className="p-6 sm:p-8">
                <div className="text-center mb-6 sm:mb-8">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Wifi className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Cobertura Inteligente</h4>
                  <p className="text-sm sm:text-base text-gray-600">Wi-Fi 6 com tecnologia de ponta</p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {wifi6Specs.map((spec, index) => {
                    const IconComponent = iconMap[spec.icon as keyof typeof iconMap]
                    return (
                      <div key={index} className="flex items-center justify-between p-3 sm:p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg sm:rounded-xl">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                            <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                          </div>
                          <span className="font-medium text-gray-700 text-sm sm:text-base">{spec.label}</span>
                        </div>
                        <strong className="text-base sm:text-lg font-bold text-purple-600">{spec.value}</strong>
                      </div>
                    )
                  })}
                </div>

                <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg sm:rounded-xl">
                  <p className="text-xs sm:text-sm text-gray-600 text-center">
                    <strong>Disponibilidade:</strong> Wi-Fi 6 disponível em áreas selecionadas. 
                    Consulte a cobertura em sua região.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Background decorative elements */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-tl from-blue-400/20 to-purple-500/20 rounded-full blur-2xl"></div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12">
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3" />
            <span className="text-2xl sm:text-3xl font-bold">FIBRA + PÓS</span>
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">{cta.title}</h3>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-purple-100 max-w-2xl mx-auto">
            {cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-600 hover:bg-purple-50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl transition-colors"
            >
              {cta.primaryButton}
            </a>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white/10 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl transition-colors"
            >
              {cta.secondaryButton}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
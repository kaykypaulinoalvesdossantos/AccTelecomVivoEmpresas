"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wifi, CheckCircle, ArrowRight, FileText, BarChart3, Presentation, Mail } from "lucide-react"

export function Microsoft365PackagesSection() {
  const packages = [
    {
      id: "400-mega",
      badge: "EXCLUSIVO NO SITE",
      badgeColor: "#660099",
      speed: "400 Mega",
      price: "R$ 112,99/mês",
      features: [
        "Vivo Fibra + Microsoft 365",
        "Plano Business Basic",
        "Versões Web e Móvel dos apps",
        "Instalação e Wi-Fi 6 Grátis"
      ],
      apps: [
        { icon: FileText, color: "#2B579A" },
        { icon: BarChart3, color: "#217346" },
        { icon: Presentation, color: "#D24726" },
        { icon: Mail, color: "#0078D4" }
      ]
    },
    {
      id: "500-mega",
      badge: "IMPERDÍVEL",
      badgeColor: "#EB3C7D",
      speed: "500 Mega",
      price: "R$ 122,99/mês",
      features: [
        "Vivo Fibra + Microsoft 365",
        "Plano Business Basic",
        "Versões Web e Móvel dos apps",
        "Instalação e Wi-Fi 6 Grátis"
      ],
      apps: [
        { icon: FileText, color: "#2B579A" },
        { icon: BarChart3, color: "#217346" },
        { icon: Presentation, color: "#D24726" },
        { icon: Mail, color: "#0078D4" }
      ],
      popular: true
    },
    {
      id: "700-mega",
      badge: "OFERTA PRORROGADA",
      badgeColor: "#FF9900",
      speed: "700 Mega",
      price: "R$ 132,99/mês",
      features: [
        "Vivo Fibra + Microsoft 365",
        "Plano Business Basic",
        "Versões Web e Móvel dos apps",
        "Instalação e Wi-Fi 6 Grátis"
      ],
      apps: [
        { icon: FileText, color: "#2B579A" },
        { icon: BarChart3, color: "#217346" },
        { icon: Presentation, color: "#D24726" },
        { icon: Mail, color: "#0078D4" }
      ]
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-white border-white/30 hover:bg-white/30" style={{ backgroundColor: 'rgba(102, 0, 153, 0.2)' }}>
            <Wifi className="w-4 h-4 mr-2" />
            Oferta Especial
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Pacotes Office 365
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compare e escolha o melhor plano para o seu negócio com internet fibra e Microsoft 365
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <Card key={index} className={`relative border-2 transition-all duration-300 hover:shadow-xl ${pkg.popular ? 'border-[#EB3C7D] scale-105' : 'border-gray-200 hover:border-purple-200'}`}>
              <CardContent className="p-8">
                {/* Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="px-4 py-2 rounded-lg text-white text-sm font-semibold" style={{ backgroundColor: pkg.badgeColor }}>
                    {pkg.badge}
                  </div>
                </div>

                {/* Service */}
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Vivo Fibra + Microsoft 365
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">Exclusivo no site</p>
                </div>

                {/* Speed */}
                <div className="flex items-center justify-center space-x-2 mb-6">
                  <Wifi className="w-5 h-5 text-gray-600" />
                  <span className="text-xl font-bold text-gray-900">{pkg.speed}</span>
                  <span className="text-gray-600">de Vivo Fibra</span>
                </div>

                {/* Microsoft 365 */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Microsoft 365</h4>
                  <div className="flex items-center space-x-2 mb-4">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Plano Business Basic</span>
                  </div>

                  {/* Apps */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">Versões Web e Móvel dos apps</p>
                    <div className="flex space-x-2">
                      {pkg.apps.map((app, appIndex) => (
                        <div
                          key={appIndex}
                          className="w-8 h-8 rounded flex items-center justify-center"
                          style={{ backgroundColor: app.color }}
                        >
                          {React.createElement(app.icon, { className: "w-5 h-5 text-white" })}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {pkg.features.slice(2).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-2">{pkg.price}</div>
                </div>

                {/* CTA Button */}
                <Button
                  className="w-full text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                  style={{ backgroundColor: '#EB3C7D' }}
                  asChild
                >
                  <a href={'https://wa.me/5511989150001?text=Olá! Gostaria de contratar o pacote ' + pkg.speed + ' com Microsoft 365'} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                    <span>Assine Já</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>

                {/* More Details */}
                <div className="text-center mt-4">
                  <Button variant="ghost" className="text-sm text-gray-500 hover:text-gray-700 flex items-center justify-center space-x-1 mx-auto" asChild>
                    <a href={'https://wa.me/5511989150001?text=Olá! Gostaria de mais detalhes sobre o pacote ' + pkg.speed + ' com Microsoft 365'} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                      <span>Mais detalhes</span>
                      <ArrowRight className="w-3 h-3 rotate-90" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Disclaimers */}
        <div className="text-center text-sm text-gray-500 space-y-2">
          <p>
            * Consulte condições. Na oferta está incluso o Plano Business Basic de Microsoft 365.
          </p>
          <p>
            'A contratação do assistente de IA da Microsoft está disponível para contratação com valor adicional ao oferecido no pacote. Conferir os mercados e idiomas disponíveis.
          </p>
        </div>

        <div className="text-center mt-16">
          <div className="rounded-2xl p-8 border" style={{ background: 'linear-gradient(135deg, rgba(102, 0, 153, 0.05) 0%, rgba(235, 60, 125, 0.05) 100%)', borderColor: '#660099' }}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Precisa de ajuda para escolher o melhor pacote?
            </h3>
            <p className="text-gray-600 mb-6">
              Nossa equipe pode ajudar você a escolher o plano ideal para sua empresa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300" style={{ backgroundColor: '#FF9900' }} asChild>
                <a href="https://wa.me/5511989150001?text=Olá! Preciso de ajuda para escolher o melhor pacote Microsoft 365" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  Falar com Especialista
                </a>
              </Button>
              <Button variant="outline" className="border-2 px-8 py-3 rounded-lg font-semibold transition-all duration-300" style={{ borderColor: '#660099', color: '#660099' }} asChild>
                <a href="https://wa.me/5511989150001?text=Olá! Gostaria de agendar uma consultoria sobre pacotes Microsoft 365" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  Agendar Consultoria
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


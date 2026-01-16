"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Radio } from "lucide-react"

export function MicrosoftTeamsPlansSection() {
  const plans = [
    {
      title: "Microsoft Teams Essentials",
      price: "A partir de R$ 22,62/mês",
      description: "Vendas web e celular",
      apps: [
        { name: "Word", icon: "W", color: "#2B579A" },
        { name: "Excel", icon: "X", color: "#217346" },
        { name: "PowerPoint", icon: "P", color: "#D24726" },
        { name: "Outlook", icon: "O", color: "#0078D4" },
        { name: "OneDrive", icon: "☁️", color: "#0078D4" },
        { name: "SharePoint", icon: "S", color: "#0078D4" },
        { name: "Exchange", icon: "E", color: "#0078D4" },
        { name: "Teams", icon: "T", color: "#6264A7" }
      ],
      color: "#660099"
    },
    {
      title: "Microsoft Business Basic",
      price: "A partir de R$ 31,23/mês",
      description: "Vendas web e celular",
      apps: [
        { name: "Word", icon: "W", color: "#2B579A" },
        { name: "Excel", icon: "X", color: "#217346" },
        { name: "PowerPoint", icon: "P", color: "#D24726" },
        { name: "Outlook", icon: "O", color: "#0078D4" },
        { name: "OneDrive", icon: "☁️", color: "#0078D4" },
        { name: "SharePoint", icon: "S", color: "#0078D4" },
        { name: "Exchange", icon: "E", color: "#0078D4" },
        { name: "Teams", icon: "T", color: "#6264A7" }
      ],
      color: "#EB3C7D"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-white border-white/30 hover:bg-white/30" style={{ backgroundColor: 'rgba(102, 0, 153, 0.2)' }}>
            <Radio className="w-4 h-4 mr-2" />
            Planos Microsoft Teams
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Escolha o plano ideal para sua empresa
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Planos flexíveis para empresas de todos os tamanhos, com recursos essenciais para comunicação e colaboração
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className="border-2 border-gray-100 hover:border-purple-200 transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.title}</h3>
                  <div className="text-3xl font-bold mb-2" style={{ color: plan.color }}>{plan.price}</div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                {/* Customer Options */}
                <div className="mb-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Radio className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-700">Sou cliente Vivo Móvel</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Radio className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-700">Não sou cliente Vivo Móvel</span>
                    </div>
                  </div>
                </div>

                {/* Apps */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Aplicativos incluídos</h4>
                  <div className="flex flex-wrap gap-2">
                    {plan.apps.map((app, appIndex) => (
                      <div
                        key={appIndex}
                        className="w-8 h-8 rounded flex items-center justify-center text-white text-sm font-bold"
                        style={{ backgroundColor: app.color }}
                      >
                        {app.icon}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <Button
                    className="w-full text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                    style={{ backgroundColor: plan.color }}
                    asChild
                  >
                    <a href={'https://wa.me/5511989150001?text=Olá! Gostaria de contratar o plano ' + plan.title} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                      <span>Contratar</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                    style={{ borderColor: plan.color, color: plan.color }}
                    asChild
                  >
                    <a href={'https://wa.me/5511989150001?text=Olá! Gostaria de mais detalhes sobre o plano ' + plan.title} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                      Mais detalhes
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="rounded-2xl p-8 border" style={{ background: 'linear-gradient(135deg, rgba(102, 0, 153, 0.05) 0%, rgba(235, 60, 125, 0.05) 100%)', borderColor: '#660099' }}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Precisa de ajuda para escolher o melhor plano?
            </h3>
            <p className="text-gray-600 mb-6">
              Nossa equipe pode ajudar você a escolher o plano ideal para sua empresa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300" style={{ backgroundColor: '#FF9900' }} asChild>
                <a href="https://wa.me/5511989150001?text=Olá! Preciso de ajuda para escolher o melhor plano Microsoft Teams" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  Falar com Especialista
                </a>
              </Button>
              <Button variant="outline" className="border-2 px-8 py-3 rounded-lg font-semibold transition-all duration-300" style={{ borderColor: '#660099', color: '#660099' }} asChild>
                <a href="https://wa.me/5511989150001?text=Olá! Gostaria de agendar uma consultoria sobre Microsoft Teams" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
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


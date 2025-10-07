"use client"

import React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, Mail, Cloud, ArrowRight, FileText, BarChart3, Presentation, Share2, Database } from "lucide-react"

export function Microsoft365PlansSection() {
  const collaborationPlans = [
    {
      title: "Business Basic",
      users: "Até 300 Usuários",
      price: "R$ 35,00",
      apps: [
        { name: "Outlook", icon: Mail, color: "#0078D4" },
        { name: "Teams", icon: Users, color: "#6264A7" },
        { name: "SharePoint", icon: Share2, color: "#0078D4" },
        { name: "OneDrive", icon: Cloud, color: "#0078D4" }
      ],
      emailSpace: "Espaço Correio 50GB",
      usage: "Utilização Online",
      sharing: "Compartilhamento -",
      color: "#660099"
    },
    {
      title: "Aplicativos para negócios",
      users: "Até 300 Usuários", 
      price: "R$ 88,00",
      apps: [
        { name: "Outlook", icon: Mail, color: "#0078D4" },
        { name: "Word", icon: FileText, color: "#2B579A" },
        { name: "Excel", icon: BarChart3, color: "#217346" },
        { name: "PowerPoint", icon: Presentation, color: "#D24726" },
        { name: "OneDrive", icon: Cloud, color: "#0078D4" },
        { name: "Access", icon: Database, color: "#A4373A" },
        { name: "Publisher", icon: Presentation, color: "#D24726" }
      ],
      emailSpace: "Espaço Correio -",
      usage: "Utilização Online e Desktop",
      sharing: "Compartilhamento Até 5 Dispositivos",
      color: "#EB3C7D"
    },
    {
      title: "Business Standard",
      users: "Até 300 Usuários",
      price: "R$ 85,00",
      apps: [
        { name: "Outlook", icon: Mail, color: "#0078D4" },
        { name: "Word", icon: FileText, color: "#2B579A" },
        { name: "Excel", icon: BarChart3, color: "#217346" },
        { name: "PowerPoint", icon: Presentation, color: "#D24726" },
        { name: "OneDrive", icon: Cloud, color: "#0078D4" },
        { name: "Access", icon: Database, color: "#A4373A" },
        { name: "Publisher", icon: Presentation, color: "#D24726" },
        { name: "Exchange", icon: Mail, color: "#0078D4" },
        { name: "Teams", icon: Users, color: "#6264A7" }
      ],
      emailSpace: "Espaço Correio 50GB",
      usage: "Utilização Online e Desktop",
      sharing: "Compartilhamento Até 5 Dispositivos",
      color: "#FF9900"
    }
  ]

  const exchangePlans = [
    { name: "Online Kiosk", storage: "2 GB", price: "R$ 22,00" },
    { name: "Online Plano 1", storage: "50 GB", price: "R$ 43,00" },
    { name: "Online Plano 2", storage: "100 GB", price: "R$ 85,00" }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-white border-white/30 hover:bg-white/30" style={{ backgroundColor: 'rgba(102, 0, 153, 0.2)' }}>
            <Users className="w-4 h-4 mr-2" />
            Planos Microsoft 365
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            TI - Microsoft 365
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ideal para quem precisa de e-mail empresarial, aplicativos do Office e outros serviços para aumento de produtividade e colaboração.
          </p>
        </div>

        {/* Colaboração Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Colaboração</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {collaborationPlans.map((plan, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-purple-200 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{plan.title}</h4>
                    <div className="text-sm text-gray-600 mb-4">{plan.users}</div>
                    <div className="text-3xl font-bold" style={{ color: plan.color }}>{plan.price}</div>
                  </div>

                  {/* Apps */}
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-3">Aplicativos</h5>
                    <div className="flex flex-wrap gap-2">
                      {plan.apps.map((app, appIndex) => (
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

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{plan.emailSpace}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Cloud className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{plan.usage}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{plan.sharing}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button 
                    className="w-full text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2" 
                    style={{ backgroundColor: plan.color }}
                    onClick={() => window.open('https://wa.me/551123629665?text=Olá! Gostaria de contratar o plano ' + plan.title + ' do Microsoft 365', '_blank')}
                  >
                    <span>Contratar</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Exchange Online Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center space-x-2">
            <span>@</span>
            <span>Exchange Online</span>
          </h3>
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-gray-100">
              <CardContent className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Planos</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Espaço de Armazenamento de correio</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Preço</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Ação</th>
                      </tr>
                    </thead>
                    <tbody>
                      {exchangePlans.map((plan, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-3 px-4 font-medium text-gray-900">{plan.name}</td>
                          <td className="py-3 px-4 text-gray-600">{plan.storage}</td>
                          <td className="py-3 px-4 font-bold text-[#660099]">{plan.price}</td>
                          <td className="py-3 px-4">
                            <button 
                              className="text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-sm" 
                              style={{ backgroundColor: '#660099' }}
                              onClick={() => window.open('https://wa.me/551123629665?text=Olá! Gostaria de contratar o plano ' + plan.name + ' do Exchange Online', '_blank')}
                            >
                              Contratar
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Sales Rules */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Regras de venda</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">Licença por usuário</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">Plano Mensal</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">Suporte 24x7 Telefonica Tech</span>
            </div>
          </div>
        </div>

        {/* Disclaimers */}
        <div className="text-center text-sm text-gray-500 space-y-2">
          <p>
            *Para Licenças do bundle com Móvel consulte o Book Destaque do mês vigente
          </p>
          <p>
            **Limite de 300 licenças por cliente, incluindo as licenças que o cliente já tenha adquirido com outro fornecedor ou diretamente com a Microsoft.
          </p>
          <p className="text-xs text-gray-400 mt-4">Material de uso interno</p>
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
              <button className="text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300" style={{ backgroundColor: '#FF9900' }} onClick={() => window.open('https://wa.me/551123629665?text=Olá! Preciso de ajuda para escolher o melhor plano Microsoft 365', '_blank')}>
                Falar com Especialista
              </button>
              <button className="border-2 px-8 py-3 rounded-lg font-semibold transition-all duration-300" style={{ borderColor: '#660099', color: '#660099' }} onClick={() => window.open('https://wa.me/551123629665?text=Olá! Gostaria de agendar uma consultoria sobre planos Microsoft 365', '_blank')}>
                Agendar Consultoria
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

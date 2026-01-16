"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function MelhoresOfertasDigitalSolutionsSection() {
  const solutions = [
    {
      id: 1,
      title: "MICROSOFT 365",
      subtitle: "Business Basic",
      description: "Outlook, Teams, SharePoint, OneDrive - Espaço Correio: 50GB - Utilização: Online",
      price: "R$ 35,00",
      period: "/mês",
      users: "Até 300 Usuários",
      buttonText: "Contratar",
      buttonLink: "/not-found",
      detailsLink: "/not-found"
    },
    {
      id: 2,
      title: "MICROSOFT 365",
      subtitle: "Aplicativos para negócios",
      description: "Outlook, Word, Excel, PowerPoint, Publisher, Access - Utilização: Online e Desktop - Compartilhamento: Até 5 Dispositivos",
      price: "R$ 88,00",
      period: "/mês",
      users: "Até 300 Usuários",
      buttonText: "Contratar",
      buttonLink: "/not-found",
      detailsLink: "/not-found"
    },
    {
      id: 3,
      title: "MICROSOFT 365",
      subtitle: "Business Standard",
      description: "Outlook, Word, Excel, SharePoint, PowerPoint, Publisher, Access, Exchange, Teams, OneDrive - Espaço Correio: 50GB - Utilização: Online e Desktop - Compartilhamento: Até 5 Dispositivos",
      price: "R$ 85,00",
      period: "/mês",
      users: "Até 300 Usuários",
      buttonText: "Contratar",
      buttonLink: "/not-found",
      detailsLink: "/not-found"
    },
    {
      id: 4,
      title: "EXCHANGE ONLINE",
      subtitle: "Online Plano 1",
      description: "Espaço de Armazenamento de correio: 50GB",
      price: "R$ 43,00",
      period: "/mês",
      users: "Até 300 Usuários",
      buttonText: "Contratar",
      buttonLink: "/not-found",
      detailsLink: "/not-found"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            TI - Microsoft 365
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ideal para quem precisa de e-mail empresarial, aplicativos do Office e outros serviços para aumento de produtividade e colaboração
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {solutions.map((solution) => (
            <Card key={solution.id} className="bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <Badge className="mb-4 bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1">
                  {solution.title}
                </Badge>
                <CardTitle className="text-lg font-bold text-gray-900 mb-2">
                  {solution.subtitle}
                </CardTitle>
                <div className="text-xs text-blue-600 font-semibold mb-2">
                  {solution.users}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {solution.description}
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-center mb-6">
                  <div className="text-2xl font-bold text-purple-600 mb-1">
                    {solution.price}
                    <span className="text-sm text-gray-600">{solution.period}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button
                    className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-3"
                    asChild
                  >
                    <a href={`https://wa.me/5511989150001?text=Olá! Gostaria de contratar a solução ${solution.title} - ${solution.subtitle}`} target="_blank" rel="noopener noreferrer">
                      {solution.buttonText}
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-purple-500 text-purple-600 hover:bg-purple-50"
                    asChild
                  >
                    <a href={`https://wa.me/5511989150001?text=Olá! Gostaria de mais detalhes sobre ${solution.title} - ${solution.subtitle}`} target="_blank" rel="noopener noreferrer">
                      Mais detalhes
                    </a>
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

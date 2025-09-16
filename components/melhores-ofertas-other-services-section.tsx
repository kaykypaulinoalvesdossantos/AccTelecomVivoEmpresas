"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Laptop, Monitor, Phone, Settings } from "lucide-react"

export function MelhoresOfertasOtherServicesSection() {
  const services = [
    {
      id: 1,
      title: "MAIS PRODUTIVIDADE",
      description: "Office 365 com 1TB de armazenamento",
      icon: "Laptop",
      link: "/not-found"
    },
    {
      id: 2,
      title: "EQUIPAMENTOS",
      description: "Aluguel de notebooks, desktops, tablets e impressoras",
      icon: "Monitor",
      link: "/not-found"
    },
    {
      id: 3,
      title: "TELEFONIA FIXA",
      description: "Soluções de voz com estabilidade e qualidade de sinal",
      icon: "Phone",
      link: "/voz-colaboracao/vivo-voz-negocio"
    },
    {
      id: 4,
      title: "MONTE SEU COMBO",
      description: "Personalize um combo de acordo com suas necessidades",
      icon: "Settings",
      link: "/pacote-empresa"
    }
  ]

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Laptop":
        return <Laptop className="w-8 h-8 text-white" />
      case "Monitor":
        return <Monitor className="w-8 h-8 text-white" />
      case "Phone":
        return <Phone className="w-8 h-8 text-white" />
      case "Settings":
        return <Settings className="w-8 h-8 text-white" />
      default:
        return <Settings className="w-8 h-8 text-white" />
    }
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Confira outros serviços
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Veja ofertas de Internet e Combos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service) => (
            <Card key={service.id} className="bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                  {getIcon(service.icon)}
                </div>
                <CardTitle className="text-lg font-bold text-gray-900 mb-2">
                  {service.title}
                </CardTitle>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <Button
                  variant="outline"
                  className="w-full border-purple-500 text-purple-600 hover:bg-purple-50"
                  asChild
                >
                  <a href={service.link}>
                    Conheça
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

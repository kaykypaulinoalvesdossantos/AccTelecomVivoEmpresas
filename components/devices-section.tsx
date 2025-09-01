"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart } from "lucide-react"

export function DevicesSection() {
  const devices = [
    {
      name: "iPhone 15 Pro",
      image: "/iphone-15-pro-in-purple-gradient-background.png",
      price: "R$ 8.999,00",
      originalPrice: "R$ 9.999,00",
      installments: "12x R$ 749,92",
      rating: 4.8,
      features: ["128GB", "Câmera Pro", "5G", "Face ID"],
      badge: "Mais Vendido",
    },
    {
      name: "Samsung Galaxy S24",
      image: "/samsung-galaxy-s24-in-magenta-gradient-background.png",
      price: "R$ 3.999,00",
      originalPrice: "R$ 4.499,00",
      installments: "12x R$ 333,25",
      rating: 4.7,
      features: ["256GB", "AI Camera", "5G", "S Pen"],
      badge: "Oferta",
    },
    {
      name: "Xiaomi 14",
      image: "/xiaomi-14-smartphone-in-purple-gradient-background.png",
      price: "R$ 2.799,00",
      originalPrice: "R$ 3.199,00",
      installments: "12x R$ 233,25",
      rating: 4.6,
      features: ["512GB", "Leica Camera", "5G", "Fast Charge"],
      badge: "Lançamento",
    },
    {
      name: "Motorola Edge 50",
      image: "/motorola-edge-50-in-gradient-purple-background.png",
      price: "R$ 1.899,00",
      originalPrice: "R$ 2.299,00",
      installments: "12x R$ 158,25",
      rating: 4.5,
      features: ["256GB", "Triple Camera", "5G", "Dolby Atmos"],
      badge: "Custo-Benefício",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">Dispositivos para sua empresa</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Smartphones e tablets de última geração com condições especiais para empresas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {devices.map((device, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="relative">
                {device.badge && (
                  <Badge className="absolute top-2 right-2 bg-secondary text-white">{device.badge}</Badge>
                )}
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-4 mb-4">
                  <img
                    src={device.image || "/placeholder.svg"}
                    alt={device.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-lg">{device.name}</CardTitle>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm text-muted-foreground">{device.rating}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-primary">{device.price}</span>
                    <span className="text-sm text-muted-foreground line-through">{device.originalPrice}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">{device.installments}</div>
                </div>
                <div className="flex flex-wrap gap-1">
                  {device.features.map((feature, featureIndex) => (
                    <Badge key={featureIndex} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="space-y-2">
                <Button className="w-full bg-secondary hover:bg-secondary/90">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Adicionar ao Plano
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  Ver Detalhes
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Ver todos os dispositivos
          </Button>
        </div>
      </div>
    </section>
  )
}

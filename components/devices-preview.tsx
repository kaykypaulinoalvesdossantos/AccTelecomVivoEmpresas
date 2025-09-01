import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export function DevicesPreview() {
  const featuredDevices = [
    {
      name: "iPhone 15 Pro",
      image: "/iphone-15-pro.png",
      price: "R$ 2.999",
      originalPrice: "R$ 3.499",
      discount: "15% OFF",
      features: ["128GB", "5G", "Câmera Pro"],
    },
    {
      name: "Samsung Galaxy S24",
      image: "/samsung-galaxy-s24-smartphone.png",
      price: "R$ 2.199",
      originalPrice: "R$ 2.599",
      discount: "15% OFF",
      features: ["256GB", "5G", "AI Camera"],
    },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Dispositivos em Oferta</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Os melhores smartphones com descontos exclusivos para empresas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {featuredDevices.map((device, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="relative mx-auto mb-4">
                  <img
                    src={device.image || "/placeholder.svg"}
                    alt={device.name}
                    className="w-32 h-40 object-contain mx-auto"
                  />
                  <Badge className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground">
                    {device.discount}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{device.name}</CardTitle>
                <CardDescription className="flex items-center justify-center space-x-2">
                  <span className="text-2xl font-bold text-primary">{device.price}</span>
                  <span className="text-sm line-through text-muted-foreground">{device.originalPrice}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center space-x-4 mb-4 text-sm text-muted-foreground">
                  {device.features.map((feature, featureIndex) => (
                    <span key={featureIndex}>{feature}</span>
                  ))}
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  Ver Detalhes
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/dispositivos" className="inline-flex items-center">
              Ver Todos os Dispositivos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

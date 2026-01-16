import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function DetailedDevicesSection() {
  const smartphones = [
    {
      name: "iPhone 15 Pro",
      brand: "Apple",
      price: "R$ 8.999",
      image: "/iphone-15-pro-in-purple-gradient-background.png",
      features: ["Chip A17 Pro", "Câmera Tripla 48MP", "Tela 6.1\" Super Retina XDR", "iOS 17"],
      category: "Premium"
    },
    {
      name: "Samsung Galaxy S24",
      brand: "Samsung",
      price: "R$ 7.499",
      image: "/samsung-galaxy-s24-in-magenta-gradient-background.png",
      features: ["Snapdragon 8 Gen 3", "Câmera Tripla 200MP", "Tela 6.2\" Dynamic AMOLED", "Android 14"],
      category: "Premium"
    },
    {
      name: "Motorola Edge 50",
      brand: "Motorola",
      price: "R$ 4.999",
      image: "/motorola-edge-50-in-gradient-purple-background.png",
      features: ["Snapdragon 7 Gen 3", "Câmera Dupla 50MP", "Tela 6.7\" pOLED", "Android 14"],
      category: "Intermediário"
    },
    {
      name: "Xiaomi 14",
      brand: "Xiaomi",
      price: "R$ 5.999",
      image: "/xiaomi-14-smartphone-in-purple-gradient-background.png",
      features: ["Snapdragon 8 Gen 3", "Câmera Tripla 50MP", "Tela 6.36\" AMOLED", "Android 14"],
      category: "Premium"
    }
  ]

  const tablets = [
    {
      name: "iPad Pro 12.9\"",
      brand: "Apple",
      price: "R$ 12.999",
      image: "/placeholder.jpg",
      features: ["Chip M2", "Tela 12.9\" Liquid Retina XDR", "Apple Pencil 2", "iPadOS 17"],
      category: "Premium"
    },
    {
      name: "Samsung Galaxy Tab S9",
      brand: "Samsung",
      price: "R$ 8.999",
      image: "/placeholder.jpg",
      features: ["Snapdragon 8 Gen 2", "Tela 11\" Dynamic AMOLED", "S Pen", "Android 13"],
      category: "Premium"
    }
  ]

  const accessories = [
    {
      name: "Carregador Wireless",
      brand: "Vivo",
      price: "R$ 299",
      image: "/placeholder.jpg",
      features: ["15W Fast Charging", "Compatível Universal", "Design Elegante", "LED Indicator"],
      category: "Acessório"
    },
    {
      name: "Fone Bluetooth",
      brand: "Vivo",
      price: "R$ 199",
      image: "/placeholder.jpg",
      features: ["ANC Ativo", "40h de Bateria", "Conexão Multipoint", "Controles Touch"],
      category: "Acessório"
    }
  ]

  return (
    <section id="dispositivos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Dispositivos para Todos os Tipos de Empresa
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desde smartphones premium até tablets profissionais, temos a solução ideal
            para impulsionar a produtividade da sua equipe.
          </p>
        </div>

        <Tabs defaultValue="smartphones" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12">
            <TabsTrigger value="smartphones">Smartphones</TabsTrigger>
            <TabsTrigger value="tablets">Tablets</TabsTrigger>
            <TabsTrigger value="accessories">Acessórios</TabsTrigger>
          </TabsList>

          <TabsContent value="smartphones" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {smartphones.map((device, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="relative">
                      <img
                        src={device.image}
                        alt={device.name}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                      <Badge className="absolute top-2 right-2 bg-purple-600">
                        {device.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{device.name}</CardTitle>
                    <CardDescription className="text-purple-600 font-medium">
                      {device.brand}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="text-2xl font-bold text-gray-900">{device.price}</div>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {device.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700" asChild>
                        <a href={`https://wa.me/5511989150001?text=Olá! Gostaria de um orçamento para o smartphone ${device.name}`} target="_blank" rel="noopener noreferrer">
                          Solicitar Orçamento
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tablets" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {tablets.map((device, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="relative">
                      <img
                        src={device.image}
                        alt={device.name}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                      <Badge className="absolute top-2 right-2 bg-purple-600">
                        {device.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{device.name}</CardTitle>
                    <CardDescription className="text-purple-600 font-medium">
                      {device.brand}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="text-2xl font-bold text-gray-900">{device.price}</div>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {device.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700" asChild>
                        <a href={`https://wa.me/5511989150001?text=Olá! Gostaria de um orçamento para o tablet ${device.name}`} target="_blank" rel="noopener noreferrer">
                          Solicitar Orçamento
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="accessories" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {accessories.map((device, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="relative">
                      <img
                        src={device.image}
                        alt={device.name}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                      <Badge className="absolute top-2 right-2 bg-purple-600">
                        {device.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{device.name}</CardTitle>
                    <CardDescription className="text-purple-600 font-medium">
                      {device.brand}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="text-2xl font-bold text-gray-900">{device.price}</div>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {device.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700" asChild>
                        <a href={`https://wa.me/5511989150001?text=Olá! Gostaria de um orçamento para o acessório ${device.name}`} target="_blank" rel="noopener noreferrer">
                          Solicitar Orçamento
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

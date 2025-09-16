"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Wifi, Shield, Network, Router } from "lucide-react"
import { redeCorporativaConfig } from "@/data/rede-corporativa-data"

export function RedeCorporativaSolutionsSection() {
  const { solutions } = redeCorporativaConfig

  const IconComponent = (tabName: string) => {
    switch (tabName) {
      case "Banda Larga": return Wifi
      case "Internet Dedicada": return Shield
      case "LAN/WAN": return Network
      case "Internet Box": return Router
      default: return Wifi
    }
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200 text-sm sm:text-base">Soluções</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">{solutions.title}</h2>
        </div>

        <Tabs defaultValue="banda-larga" className="mb-12 lg:mb-16">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-8 sm:mb-12">
            {solutions.tabs.map((tab) => {
              const Icon = IconComponent(tab)
              return (
                <TabsTrigger 
                  key={tab} 
                  value={tab.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '-')} 
                  className="text-xs sm:text-sm flex items-center gap-2"
                >
                  <Icon className="w-4 h-4" />
                  {tab}
                </TabsTrigger>
              )
            })}
          </TabsList>

          <TabsContent value="banda-larga">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-white shadow-lg">
                <CardContent className="p-8 sm:p-12">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Banda Larga</h3>
                      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        {solutions.descriptions.bandaLarga}
                      </p>
                      <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                        Assine já
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-3xl blur-3xl"></div>
                      <div className="relative bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8 border border-purple-200">
                        <div className="text-center">
                          <Wifi className="w-16 h-16 mx-auto mb-4 text-purple-600" />
                          <div className="text-2xl font-bold text-purple-600 mb-2">Alta Performance</div>
                          <div className="text-gray-600">Conectividade estável e rápida</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="internet-dedicada">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-white shadow-lg">
                <CardContent className="p-8 sm:p-12">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Internet Dedicada</h3>
                      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        {solutions.descriptions.internetDedicada}
                      </p>
                      <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                        Assine já
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-3xl blur-3xl"></div>
                      <div className="relative bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8 border border-purple-200">
                        <div className="text-center">
                          <Shield className="w-16 h-16 mx-auto mb-4 text-purple-600" />
                          <div className="text-2xl font-bold text-purple-600 mb-2">100% Dedicado</div>
                          <div className="text-gray-600">Link exclusivo garantido</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="lan-wan">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-white shadow-lg">
                <CardContent className="p-8 sm:p-12">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">LAN/WAN</h3>
                      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        {solutions.descriptions.lanWan}
                      </p>
                      <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                        Assine já
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-3xl blur-3xl"></div>
                      <div className="relative bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8 border border-purple-200">
                        <div className="text-center">
                          <Network className="w-16 h-16 mx-auto mb-4 text-purple-600" />
                          <div className="text-2xl font-bold text-purple-600 mb-2">Conectividade Total</div>
                          <div className="text-gray-600">Filiais conectadas com segurança</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="internet-box">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-white shadow-lg">
                <CardContent className="p-8 sm:p-12">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Internet Box</h3>
                      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        {solutions.descriptions.internetBox}
                      </p>
                      <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                        Assine já
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-3xl blur-3xl"></div>
                      <div className="relative bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8 border border-purple-200">
                        <div className="text-center">
                          <Router className="w-16 h-16 mx-auto mb-4 text-purple-600" />
                          <div className="text-2xl font-bold text-purple-600 mb-2">4G Box</div>
                          <div className="text-gray-600">Conectividade onde a fibra não chega</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

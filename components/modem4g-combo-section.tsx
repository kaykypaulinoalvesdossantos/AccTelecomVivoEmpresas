"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, ChevronDown } from "lucide-react"

export function Modem4GComboSection(): React.JSX.Element {
  const [activeTab, setActiveTab] = useState("modem4g")

  // Planos Combo Modem 4G
  const planosModem4G = [
    {
      gb: "10 GB",
      preco: "R$ 49,90",
      periodo: "/mês",
      features: [
        "+ Você Sempre Conectado",
        "+ Vantagens Vivo Valoriza"
      ],
      popular: false
    },
    {
      gb: "40 GB",
      preco: "R$ 69,90",
      periodo: "/mês",
      features: [
        "+ Você Sempre Conectado",
        "+ Vantagens Vivo Valoriza"
      ],
      popular: false
    },
    {
      gb: "100 GB",
      preco: "R$ 99,90",
      periodo: "/mês",
      features: [
        "+ Você Sempre Conectado",
        "+ Vantagens Vivo Valoriza"
      ],
      popular: true
    }
  ]

  // Planos Combo Vivo Box
  const planosVivoBox = [
    {
      gb: "10 GB",
      preco: "R$ 49,90",
      periodo: "/mês",
      features: [
        "+ Até 32 aparelhos juntos",
        "+ Vantagens Vivo Valoriza"
      ],
      popular: false
    },
    {
      gb: "40 GB",
      preco: "R$ 69,90",
      periodo: "/mês",
      features: [
        "+ Até 32 aparelhos juntos",
        "+ Vantagens Vivo Valoriza"
      ],
      popular: false
    },
    {
      gb: "100 GB",
      preco: "R$ 99,90",
      periodo: "/mês",
      features: [
        "+ Até 32 aparelhos juntos",
        "+ Vantagens Vivo Valoriza"
      ],
      popular: true
    }
  ]

  const renderPlanCard = (plano: any, isPopular: boolean = false) => {
    return (
      <Card key={plano.gb} className={`relative bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 rounded-lg overflow-hidden ${
        isPopular ? 'ring-2 ring-purple-500' : ''
      }`}>
        <CardHeader className="pb-4 pt-6">
          {isPopular && (
            <div className="absolute -top-3 left-4">
              <Badge className="bg-purple-600 text-white px-3 py-1 text-xs font-semibold">
                PLANO MAIS VENDIDO
              </Badge>
            </div>
          )}
          
          <CardTitle className="text-2xl font-bold text-gray-800 mb-4">
            {plano.gb}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="space-y-2">
            {plano.features.map((feature: string, featureIndex: number) => (
              <div key={featureIndex} className="text-sm text-gray-600">
                {feature}
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">{plano.preco}</div>
            <div className="text-gray-600 text-sm">{plano.periodo}</div>
          </div>
          
          <Button 
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold py-3 rounded-lg transition-all duration-300"
            asChild
          >
            <a href="https://wa.me/551123629665" target="_blank" rel="noopener noreferrer">
              Contratar
            </a>
          </Button>
          
          <div className="text-center">
            <a href="https://wa.me/551123629665" className="text-sm text-gray-500 hover:text-gray-700 flex items-center justify-center gap-1">
              Mais detalhes
              <ChevronDown className="w-4 h-4" />
            </a>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Planos de Conectividade Empresarial
          </h2>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto mb-12">
            <TabsTrigger value="modem4g" className="text-sm">Combo Modem 4G</TabsTrigger>
            <TabsTrigger value="vivobox" className="text-sm">Combo Vivo Box</TabsTrigger>
            <TabsTrigger value="satelite" className="text-sm">Internet Satélite</TabsTrigger>
          </TabsList>

          <TabsContent value="modem4g">
            <div className="mb-8">
              <p className="text-lg text-gray-600 max-w-4xl mx-auto text-center">
                A Vivo oferece cobertura 4G amplamente disponível em todo o território nacional. 
                Isso significa que, mesmo em áreas rurais e remotas, você pode desfrutar de conexão com qualidade. 
                Aproveite a velocidade e a confiabilidade da nossa rede móvel para manter sua empresa funcionando sem interrupções.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {planosModem4G.map((plano) => (
                <div key={plano.gb}>
                  {renderPlanCard(plano, plano.popular)}
                  <div className="text-center mt-4">
                    <a href="https://wa.me/551123629665" className="text-sm text-gray-500 hover:text-gray-700">
                      Mais informações
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="vivobox">
            <div className="mb-8">
              <p className="text-lg text-gray-600 max-w-4xl mx-auto text-center">
                Com o Vivo Box, sua empresa desfruta de uma conexão 4G estável, mesmo em áreas remotas, 
                graças à abrangente cobertura nacional Vivo. Conecte-se simultaneamente em até 32 dispositivos na mesma rede. 
                Oferecemos para sua empresa uma solução de conectividade sólida que abrange todo o território brasileiro para atender às suas necessidades.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {planosVivoBox.map((plano) => (
                <div key={plano.gb}>
                  {renderPlanCard(plano, plano.popular)}
                  <div className="text-center mt-4">
                    <a href="https://wa.me/551123629665" className="text-sm text-gray-500 hover:text-gray-700">
                      Mais informações
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="satelite">
            <div className="mb-8">
              <p className="text-lg text-gray-600 max-w-4xl mx-auto text-center">
                Nossa internet via satélite oferece uma conexão confiável em áreas remotas, 
                permitindo que sua empresa esteja online em qualquer lugar do país. 
                Realize videoconferências, gerencie seus negócios e mantenha-se atualizado, 
                mesmo nas regiões mais distantes.
              </p>
            </div>
            
            <div className="max-w-md mx-auto">
              <Card className="bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden">
                <CardHeader className="pb-4 pt-6">
                  <CardTitle className="text-xl font-bold text-gray-800 text-center">
                    Internet Satélite
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4 text-center">
                  <div className="text-purple-600 font-semibold text-lg">
                    Esgotado
                  </div>
                  
                  <div className="w-full h-px bg-gray-200"></div>
                  
                  <div className="text-gray-500 text-sm uppercase">
                    SERVIÇO INDISPONÍVEL
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

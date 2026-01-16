"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Package, ArrowRight } from "lucide-react"

export function CloudPlusPackagesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-white border-white/30 hover:bg-white/30" style={{ backgroundColor: 'rgba(102, 0, 153, 0.2)' }}>
            <Package className="w-4 h-4 mr-2" />
            6 pacotes pré-configurados
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Pacotes pré-configurados Cloud Plus
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha entre nossos pacotes otimizados ou solicite uma configuração personalizada
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                6 pacotes pré-configurados
              </h3>
              <p className="text-lg text-gray-600">
                Oferecemos 6 pacotes pré-configurados do Cloud Server, cada um otimizado para diferentes
                necessidades empresariais. Todos os pacotes incluem recursos dedicados, gerenciamento
                simplificado e suporte técnico especializado.
              </p>
              <p className="text-lg text-gray-600">
                Se nenhum dos pacotes pré-configurados atender às suas necessidades específicas,
                nossa equipe pode criar uma configuração personalizada sob medida para sua empresa.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="border-2 border-gray-100 hover:border-purple-200 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#660099' }}>
                      <Package className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Pacotes Otimizados</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Configurações testadas e otimizadas para diferentes perfis de uso
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-100 hover:border-purple-200 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#EB3C7D' }}>
                      <Package className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Configuração Personalizada</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Soluções sob medida para necessidades específicas
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl p-8 border" style={{ background: 'linear-gradient(135deg, rgba(102, 0, 153, 0.05) 0%, rgba(235, 60, 125, 0.05) 100%)', borderColor: '#660099' }}>
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Vantagens dos Pacotes Pré-configurados
                  </h3>
                  <p className="text-gray-600">
                    Soluções testadas e otimizadas
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#660099' }}>
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <span className="text-gray-700">Configurações testadas e otimizadas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#EB3C7D' }}>
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <span className="text-gray-700">Deploy rápido e simplificado</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FF9900' }}>
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <span className="text-gray-700">Suporte técnico especializado</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#82D400' }}>
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                    <span className="text-gray-700">Escalabilidade garantida</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Quer conhecer todos os pacotes disponíveis?
            </h3>
            <p className="text-gray-600 mb-6">
              Nossa equipe pode apresentar todos os pacotes pré-configurados e ajudar você a escolher o ideal
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center" style={{ backgroundColor: '#FF9900' }} asChild>
                <a href="https://wa.me/5511989150001?text=Olá! Gostaria de conhecer todos os pacotes pré-configurados do Cloud Plus" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  Ver Todos os Pacotes
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" className="border-2 px-8 py-3 rounded-lg font-semibold transition-all duration-300" style={{ borderColor: '#660099', color: '#660099' }} asChild>
                <a href="https://wa.me/5511989150001?text=Olá! Gostaria de uma configuração personalizada do Cloud Plus" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  Configuração Personalizada
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

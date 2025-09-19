"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cloud, Server, Shield, Zap } from "lucide-react"

export function CloudPlusOverviewSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="text-white border-white/30 hover:bg-white/30" style={{ backgroundColor: 'rgba(102, 0, 153, 0.2)' }}>
                <Cloud className="w-4 h-4 mr-2" />
                Plataforma avançada de computação em nuvem para sua estratégia de TI
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Cloud Plus
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  O Cloud Plus é uma plataforma avançada de computação em nuvem que oferece 
                  infraestrutura dedicada e personalizada para sua estratégia de TI. Com 
                  recursos exclusivos e gerenciamento simplificado, é ideal para empresas 
                  que precisam de controle total e autonomia.
                </p>
                <p>
                  Nossa solução Cloud Plus oferece servidores físicos dedicados, alto nível 
                  de reserva de recursos e maior performance, garantindo que sua empresa tenha 
                  acesso às melhores tecnologias de nuvem com suporte especializado da Vivo Empresas.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="border-2 border-gray-100 hover:border-purple-200 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#BD4AFF' }}>
                      <Server className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Infraestrutura Dedicada</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Servidores físicos dedicados e virtualizados
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-100 hover:border-purple-200 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#82D400' }}>
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Data Center TIER III</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Infraestrutura certificada e segura
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-100 hover:border-purple-200 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#FF9900' }}>
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Alto Desempenho</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Alto nível de reserva de recursos
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-100 hover:border-purple-200 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#EB3C7D' }}>
                      <Cloud className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Gerenciamento Simplificado</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Controle total e autonomia
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <div className="rounded-2xl p-8 border" style={{ background: 'linear-gradient(135deg, rgba(102, 0, 153, 0.05) 0%, rgba(235, 60, 125, 0.05) 100%)', borderColor: '#660099' }}>
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Por que escolher Cloud Plus?
                    </h3>
                    <p className="text-gray-600">
                      Soluções completas para sua empresa
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#660099' }}>
                        <span className="text-white font-bold text-sm">1</span>
                      </div>
                      <span className="text-gray-700">Infraestrutura dedicada e personalizada</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#EB3C7D' }}>
                        <span className="text-white font-bold text-sm">2</span>
                      </div>
                      <span className="text-gray-700">Data Center TIER III certificado</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FF9900' }}>
                        <span className="text-white font-bold text-sm">3</span>
                      </div>
                      <span className="text-gray-700">Alto desempenho e performance</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#82D400' }}>
                        <span className="text-white font-bold text-sm">4</span>
                      </div>
                      <span className="text-gray-700">Gerenciamento simplificado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

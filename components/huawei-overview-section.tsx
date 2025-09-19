"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cloud, Server, Shield, Zap } from "lucide-react"

export function HuaweiOverviewSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="text-white border-white/30 hover:bg-white/30" style={{ backgroundColor: 'rgba(102, 0, 153, 0.2)' }}>
                <Cloud className="w-4 h-4 mr-2" />
                O que é Huawei Cloud?
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Huawei Cloud
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  O Huawei Cloud é uma plataforma de computação em nuvem completa que oferece 
                  serviços de infraestrutura, plataforma e software como serviço. Com foco em 
                  segurança, performance e custo-benefício, é ideal para empresas de todos os tamanhos.
                </p>
                <p>
                  Nossa solução Huawei Cloud oferece infraestrutura ágil, segurança certificada 
                  e pagamento local, garantindo que sua empresa tenha acesso às melhores tecnologias 
                  de nuvem com suporte especializado da Vivo Empresas.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="border-2 border-gray-100 hover:border-purple-200 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#BD4AFF' }}>
                      <Cloud className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Infraestrutura Ágil</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Deploy rápido e escalável
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-100 hover:border-purple-200 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#82D400' }}>
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Segurança Certificada</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Proteção total dos dados
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-100 hover:border-purple-200 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#FF9900' }}>
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Custo-Benefício</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Pagamento local e transparente
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-100 hover:border-purple-200 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#EB3C7D' }}>
                      <Server className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Suporte Especializado</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Monitoramento 24/7
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
                      Por que escolher Huawei Cloud?
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
                      <span className="text-gray-700">Infraestrutura ágil e escalável</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#EB3C7D' }}>
                        <span className="text-white font-bold text-sm">2</span>
                      </div>
                      <span className="text-gray-700">Segurança certificada e confiável</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FF9900' }}>
                        <span className="text-white font-bold text-sm">3</span>
                      </div>
                      <span className="text-gray-700">Excelente custo-benefício</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#82D400' }}>
                        <span className="text-white font-bold text-sm">4</span>
                      </div>
                      <span className="text-gray-700">Pagamento local e transparente</span>
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

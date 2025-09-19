"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cloud, Server, Shield, Zap } from "lucide-react"

export function AzureOverviewSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="text-white border-white/30 hover:bg-white/30" style={{ backgroundColor: 'rgba(102, 0, 153, 0.2)' }}>
                <Cloud className="w-4 h-4 mr-2" />
                Conheça as nossas soluções de computação em nuvem
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Microsoft Azure Cloud
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  O Microsoft Azure é uma plataforma de computação em nuvem completa que oferece 
                  serviços de infraestrutura, plataforma e software como serviço. Com Azure, sua 
                  empresa pode construir, implantar e gerenciar aplicações através da rede global 
                  de data centers da Microsoft.
                </p>
                <p>
                  Nossa solução Azure oferece flexibilidade para mover-se livremente entre nuvem 
                  e local, com ferramentas e estruturas que você já conhece e confia. Integre-se 
                  perfeitamente com Microsoft 365 e outras soluções Microsoft.
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
                    <h3 className="font-semibold text-gray-900">Nuvem Híbrida</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Consistência entre nuvem e ambiente local
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-100 hover:border-purple-200 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#82D400' }}>
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Segurança Avançada</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Proteção de dados com conformidade global
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-100 hover:border-purple-200 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#FF9900' }}>
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Inteligência Artificial</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Capacidades cognitivas e aplicativos usando IA
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-100 hover:border-purple-200 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#EB3C7D' }}>
                      <Server className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Microsoft 365</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Integração total com soluções Microsoft
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
                      Microsoft Partner of the Year 2023
                    </h3>
                    <p className="text-gray-600">
                      Reconhecimento pela excelência em soluções Azure
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#660099' }}>
                        <span className="text-white font-bold text-sm">1</span>
                      </div>
                      <span className="text-gray-700">Nuvem híbrida consistente</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#EB3C7D' }}>
                        <span className="text-white font-bold text-sm">2</span>
                      </div>
                      <span className="text-gray-700">Cobertura abrangente global</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FF9900' }}>
                        <span className="text-white font-bold text-sm">3</span>
                      </div>
                      <span className="text-gray-700">Proteção de dados garantida</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#82D400' }}>
                        <span className="text-white font-bold text-sm">4</span>
                      </div>
                      <span className="text-gray-700">Para todos os tamanhos de empresa</span>
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

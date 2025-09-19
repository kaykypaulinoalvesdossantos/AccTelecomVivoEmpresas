"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cloud, Server, Shield, Zap } from "lucide-react"

export function IBMOverviewSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                <Cloud className="w-4 h-4 mr-2" />
                Conheça a IBM Cloud
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Plataforma completa de serviços de nuvem
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  A IBM Cloud oferece uma plataforma completa de serviços de infraestrutura sob demanda, 
                  incluindo computação, armazenamento, rede e virtualização. Nossa solução permite que 
                  sua empresa tenha acesso a recursos escaláveis e seguros.
                </p>
                <p>
                  Com a IBM Cloud, você pode reduzir custos operacionais, aumentar a produtividade da 
                  sua equipe e garantir a segurança dos seus dados, tudo com a flexibilidade e 
                  escalabilidade que sua empresa precisa.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="border-2 border-blue-100 hover:border-blue-300 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Server className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Infraestrutura Escalável</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Recursos de computação, armazenamento e rede sob demanda
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-100 hover:border-purple-300 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Segurança Avançada</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Proteção de dados com certificações de segurança de nível empresarial
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-100 hover:border-green-300 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Zap className="w-5 h-5 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Alta Performance</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Otimização de recursos para máxima eficiência operacional
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-100 hover:border-orange-300 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Cloud className="w-5 h-5 text-orange-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Flexibilidade Total</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Adaptação rápida às necessidades do seu negócio
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Por que escolher IBM Cloud?
                    </h3>
                    <p className="text-gray-600">
                      A plataforma mais completa e segura para sua empresa
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">1</span>
                      </div>
                      <span className="text-gray-700">Redução significativa de custos operacionais</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">2</span>
                      </div>
                      <span className="text-gray-700">Aumento da produtividade da equipe</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">3</span>
                      </div>
                      <span className="text-gray-700">Segurança e conformidade garantidas</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">4</span>
                      </div>
                      <span className="text-gray-700">Escalabilidade e flexibilidade total</span>
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

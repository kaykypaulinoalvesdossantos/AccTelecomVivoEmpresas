"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Code, Globe, Shield } from "lucide-react"

export function OpenGatewayIntroSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge className="bg-[#660099]/10 text-[#660099] border-[#660099]/20">
                <CheckCircle className="w-4 h-4 mr-2" />
                Big Data
              </Badge>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Big Data com Open Gateway para
                <span className="block text-[#660099]">Empresas</span>
              </h2>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  A iniciativa Open Gateway, liderada pela GSMA, está transformando as redes de telecomunicações 
                  em plataformas prontas para desenvolvedores, expondo capacidades de rede através de APIs globais 
                  e padronizadas.
                </p>
                
                <p>
                  Esta transformação acontece sob a estrutura CAMARA, uma colaboração entre Linux Foundation 
                  e TM Forum, garantindo interoperabilidade e padronização em nível global.
                </p>
                
                <p>
                  O Open Gateway oferece acesso seguro e padronizado às capacidades de rede, permitindo que 
                  desenvolvedores criem soluções inovadoras aproveitando o poder das redes de telecomunicações.
                </p>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-[#660099] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 leading-relaxed">
                  <strong>Modelo de contratação:</strong> On Demand Faixa Fixa, Faixas Variáveis e Consumo Mínimo.
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-[#660099] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 leading-relaxed">
                  <strong>APIs globais e padronizadas.</strong> Facilite a integração no desenvolvimento de novas soluções.
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-[#660099] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 leading-relaxed">
                  <strong>APIs multitelecom em um só lugar.</strong> Acelere os negócios e garanta mais segurança e performance.
                </span>
              </div>
            </div>
          </div>

          {/* Right Content - Simple Icons */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gray-50 hover:bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#660099] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">TM Forum</h3>
                  <p className="text-gray-600 text-sm">Padronização global</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gray-50 hover:bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#EB3C7D] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">GSMA</h3>
                  <p className="text-gray-600 text-sm">Liderança da iniciativa</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gray-50 hover:bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#660099] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">CAMARA</h3>
                  <p className="text-gray-600 text-sm">Estrutura de colaboração</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gray-50 hover:bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#EB3C7D] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Linux</h3>
                  <p className="text-gray-600 text-sm">Foundation</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, BarChart3, Smartphone } from "lucide-react"

export function VivoGestaoHeroSection(): React.JSX.Element {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-[#660099]/10 to-[#EB3C7D]/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-[#EB3C7D]/10 to-[#660099]/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#660099]/5 to-[#EB3C7D]/5 rounded-full blur-2xl animate-spin-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Vivo Gestão de Dados e Voz para Empresas
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            Controle o uso de internet e voz nos celulares corporativos com filtros, bloqueios e gestão em tempo real, online e segura. Confira as ofertas.
          </p>

          <div className="max-w-2xl mx-auto">
            <Tabs defaultValue="mdm" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="portabilidade" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#660099] data-[state=active]:to-[#EB3C7D] data-[state=active]:text-white">
                  Portabilidade
                </TabsTrigger>
                <TabsTrigger value="nova-linha" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#660099] data-[state=active]:to-[#EB3C7D] data-[state=active]:text-white">
                  Nova Linha
                </TabsTrigger>
                <TabsTrigger value="mdm" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#660099] data-[state=active]:to-[#EB3C7D] data-[state=active]:text-white">
                  MDM
                </TabsTrigger>
                <TabsTrigger value="pacotes" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#660099] data-[state=active]:to-[#EB3C7D] data-[state=active]:text-white">
                  Pacotes Adicionais
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] hover:from-[#7a0bb3] hover:to-[#ff1a75] text-white font-semibold px-8 py-4 text-lg">
              <BarChart3 className="w-5 h-5 mr-2" />
              Acessar Vivo Gestão
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <div className="flex items-center gap-4">
              <Badge className="bg-gradient-to-r from-[#660099]/10 to-[#EB3C7D]/10 text-[#660099] px-4 py-2">
                <Smartphone className="w-4 h-4 mr-2" />
                Gestão em Tempo Real
              </Badge>
              <Badge className="bg-gradient-to-r from-[#660099]/10 to-[#EB3C7D]/10 text-[#660099] px-4 py-2">
                Controle Total
              </Badge>
            </div>
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
          <div className="bg-gradient-to-r from-[#660099]/10 to-[#EB3C7D]/10 rounded-2xl p-6 border border-[#660099]/20">
            <div className="w-16 h-16 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
              Gestão Inteligente
            </h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Controle total do uso de dados e voz com relatórios detalhados e insights em tempo real
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#660099]/10 to-[#EB3C7D]/10 rounded-2xl p-6 border border-[#660099]/20">
            <div className="w-16 h-16 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
              Controle Remoto
            </h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Gerencie todos os dispositivos da sua empresa de forma remota e segura
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#660099]/10 to-[#EB3C7D]/10 rounded-2xl p-6 border border-[#660099]/20">
            <div className="w-16 h-16 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
              Otimização de Custos
            </h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Reduza gastos desnecessários com controle inteligente de uso e bloqueios
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

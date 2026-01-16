"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Server, Cpu, Database, ArrowRight } from "lucide-react"

export function CloudPlusConfigurationsSection() {
  const vmConfigurations = [
    {
      id: "VM1",
      title: "VM 1",
      specs: "2 vCPU de processamento",
      details: "2 vCPU, 4GB RAM, 100GB SSD",
      color: "#660099"
    },
    {
      id: "VM2",
      title: "VM 2",
      specs: "4 vCPU de processação",
      details: "4 vCPU, 8GB RAM, 200GB SSD",
      color: "#EB3C7D"
    },
    {
      id: "VM3",
      title: "VM 3",
      specs: "4 vCPU de processação",
      details: "4 vCPU, 16GB RAM, 500GB SSD",
      color: "#FF9900"
    },
    {
      id: "VM4",
      title: "VM 4",
      specs: "8 vCPU de processação",
      details: "8 vCPU, 32GB RAM, 1TB SSD",
      color: "#82D400"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-white border-white/30 hover:bg-white/30" style={{ backgroundColor: 'rgba(102, 0, 153, 0.2)' }}>
            <Server className="w-4 h-4 mr-2" />
            Confira as opções de configurações do Cloud Plus
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Configurações pré-configuradas disponíveis
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha entre nossas configurações otimizadas ou solicite uma configuração personalizada
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {vmConfigurations.map((vm, index) => (
            <Card key={index} className="border-2 border-gray-100 hover:border-purple-200 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: vm.color }}>
                  <Server className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {vm.title}
                </h3>
                <p className="text-gray-600 mb-4 font-semibold">
                  {vm.specs}
                </p>
                <div className="space-y-2 mb-6 text-sm text-gray-500">
                  <div className="flex items-center justify-center space-x-2">
                    <Cpu className="w-4 h-4" />
                    <span>{vm.details}</span>
                  </div>
                </div>
                <button className="w-full text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2" style={{ backgroundColor: vm.color }} onClick={() => window.open('https://wa.me/5511989150001?text=Olá! Gostaria de saber mais sobre a configuração ' + vm.title, '_blank')}>
                  <span>Detalhamento</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-16">
          <div className="rounded-2xl p-8 border" style={{ background: 'linear-gradient(135deg, rgba(102, 0, 153, 0.05) 0%, rgba(235, 60, 125, 0.05) 100%)', borderColor: '#660099' }}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Confira as opções pré-configuradas do Cloud Plus
            </h3>
            <p className="text-gray-600 mb-6">
              Todas as configurações incluem recursos dedicados, gerenciamento simplificado e suporte técnico especializado
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: '#660099' }}>
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">CPU</h4>
                <p className="text-sm text-gray-600">vCPU Intel Xeon E5</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: '#EB3C7D' }}>
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Memória</h4>
                <p className="text-sm text-gray-600">2GB, 4GB, 8GB, 16GB, 32GB, 64GB</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: '#FF9900' }}>
                  <Server className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Armazenamento</h4>
                <p className="text-sm text-gray-600">SSD, HDD</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Precisa de uma configuração personalizada?
            </h3>
            <p className="text-gray-600 mb-6">
              Nossa equipe pode criar uma configuração específica para suas necessidades
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center" style={{ backgroundColor: '#FF9900' }} onClick={() => window.open('https://wa.me/5511989150001?text=Olá! Gostaria de uma configuração personalizada do Cloud Plus', '_blank')}>
                Solicitar Configuração Personalizada
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 px-8 py-3 rounded-lg font-semibold transition-all duration-300" style={{ borderColor: '#660099', color: '#660099' }} onClick={() => window.open('https://wa.me/5511989150001?text=Olá! Gostaria de falar com um especialista sobre Cloud Plus', '_blank')}>
                Falar com Especialista
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

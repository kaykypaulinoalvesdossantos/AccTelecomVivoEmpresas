"use client"

import React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, X, BarChart3 } from "lucide-react"

export function HospedagemSiteComparisonSection() {
  const features = [
    { name: "Domínio (.com.br)", basic: true, intermediate: true, advanced: true },
    { name: "Multidomínios", basic: false, intermediate: true, advanced: true },
    { name: "Subdomínios ilimitados", basic: true, intermediate: true, advanced: true },
    { name: "Sites ativos", basic: "1", intermediate: "5", advanced: "Ilimitado" },
    { name: "Espaço (GB)", basic: "2", intermediate: "25", advanced: "Ilimitado" },
    { name: "Tráfego (GB)", basic: "10", intermediate: "100", advanced: "Ilimitado" },
    { name: "Contas de e-mail", basic: "Ilimitado", intermediate: "Ilimitado", advanced: "Ilimitado" },
    { name: "Certificado SSL", basic: true, intermediate: true, advanced: true },
    { name: "Backup automático", basic: true, intermediate: true, advanced: true },
    { name: "CDN incluído", basic: false, intermediate: true, advanced: true },
    { name: "Proteção DDoS", basic: false, intermediate: true, advanced: true },
    { name: "Suporte 24/7", basic: true, intermediate: true, advanced: true }
  ]

  const plans = [
    { name: "Básico", price: "R$ 11,90", popular: false },
    { name: "Intermediário", price: "R$ 18,90", popular: true },
    { name: "Avançado", price: "R$ 25,90", popular: false }
  ]

  const renderFeatureValue = (value: boolean | string) => {
    if (typeof value === "boolean") {
      return value ? (
        <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
      ) : (
        <X className="w-5 h-5 text-red-500 mx-auto" />
      )
    }
    return <span className="text-gray-900 font-medium">{value}</span>
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-[#660099]/10 text-[#660099] border-[#660099]/20">
            <BarChart3 className="w-4 h-4 mr-2" />
            Comparação de Planos
          </Badge>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Compare as soluções para
            <span className="block text-[#660099]">o seu negócio</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Escolha o plano ideal comparando recursos, limites e benefícios. 
            Todos os planos incluem suporte técnico especializado e garantia de satisfação.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Table Header */}
          <div className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] text-white p-6">
            <div className="grid grid-cols-4 gap-4">
              <div className="text-left">
                <h3 className="text-lg font-semibold">Recursos</h3>
              </div>
              {plans.map((plan, index) => (
                <div key={index} className="text-center">
                  <div className={`inline-block px-4 py-2 rounded-lg ${
                    plan.popular ? 'bg-white text-[#660099]' : 'bg-white/20'
                  }`}>
                    <div className="font-semibold">{plan.name}</div>
                    <div className="text-sm">{plan.price}/mês</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {features.map((feature, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 p-6 hover:bg-gray-50 transition-colors">
                <div className="text-left">
                  <span className="font-medium text-gray-900">{feature.name}</span>
                </div>
                <div className="text-center">
                  {renderFeatureValue(feature.basic)}
                </div>
                <div className="text-center">
                  {renderFeatureValue(feature.intermediate)}
                </div>
                <div className="text-center">
                  {renderFeatureValue(feature.advanced)}
                </div>
              </div>
            ))}
          </div>

          {/* Table Footer */}
          <div className="bg-gray-50 p-6">
            <div className="grid grid-cols-4 gap-4">
              <div></div>
              {plans.map((plan, index) => (
                <div key={index} className="text-center">
                  <Button 
                    className={`w-full cursor-pointer ${
                      plan.popular 
                        ? 'bg-[#660099] hover:bg-[#660099]/90 text-white' 
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                    }`}
                    size="lg"
                  >
                    Assinar
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center space-y-4">
          <p className="text-gray-600">
            <strong>Garantia de 30 dias:</strong> Teste qualquer plano sem compromisso. 
            Se não ficar satisfeito, devolvemos seu dinheiro.
          </p>
          <div className="flex justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>Migração gratuita</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>Suporte 24/7</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>SSL gratuito</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

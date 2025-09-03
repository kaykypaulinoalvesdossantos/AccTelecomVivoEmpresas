"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, CheckCircle, Smartphone } from "lucide-react"

export function MDMLGPDSection(): React.JSX.Element {
  const lgpdFeatures = [
    "Controle total de acesso aos dados",
    "Auditoria completa de atividades",
    "Criptografia de dados sensíveis",
    "Conformidade com regulamentações",
    "Relatórios de compliance automáticos",
    "Políticas de segurança personalizáveis"
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-[#660099] to-[#EB3C7D] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Com MDM sua empresa está protegida e alinhada com a LGPD
            </h2>
            
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              A solução MDM da Vivo garante que sua empresa esteja em conformidade com a Lei Geral de Proteção de Dados (LGPD), 
              oferecendo controles avançados de segurança e proteção de dados pessoais.
            </p>

            <div className="space-y-4 mb-8">
              {lgpdFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-white/90">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-3">
                Benefícios da conformidade LGPD
              </h3>
              <ul className="text-white/90 space-y-2">
                <li>• Evite multas e penalidades</li>
                <li>• Fortaleça a confiança dos clientes</li>
                <li>• Proteja dados sensíveis da empresa</li>
                <li>• Mantenha-se atualizado com regulamentações</li>
              </ul>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="w-full h-80 bg-gradient-to-br from-white/20 to-white/10 rounded-xl flex items-center justify-center relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full"></div>
                  <div className="absolute top-8 right-8 w-1 h-1 bg-white rounded-full"></div>
                  <div className="absolute bottom-6 left-1/3 w-1.5 h-1.5 bg-white rounded-full"></div>
                  <div className="absolute top-1/2 right-4 w-1 h-1 bg-white rounded-full"></div>
                  <div className="absolute bottom-8 right-1/4 w-2 h-2 bg-white rounded-full"></div>
                </div>
                
                <div className="text-center text-white relative z-10">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-12 h-12" />
                  </div>
                  <p className="text-lg font-semibold mb-2">Proteção de Dados</p>
                  <p className="text-sm opacity-80">Conformidade LGPD</p>
                  
                  {/* Security Icons */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Smartphone className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Elements */}
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-r from-white/10 to-white/5 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-gradient-to-r from-white/5 to-white/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

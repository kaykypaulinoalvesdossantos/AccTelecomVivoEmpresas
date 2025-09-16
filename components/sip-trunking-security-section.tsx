"use client"

import { Handshake, Shield, Users, FileCheck } from "lucide-react"
import { sipTrunkingConfig } from "@/data/sip-trunking-data"

export function SipTrunkingSecuritySection() {
  const { security } = sipTrunkingConfig

  const IconComponent = (iconName: string) => {
    switch (iconName) {
      case "Handshake": return Handshake
      case "Shield": return Shield
      case "Users": return Users
      case "FileCheck": return FileCheck
      default: return Handshake
    }
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            {security.title}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto">
            {security.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {security.benefits.map((benefit, index) => {
            const Icon = IconComponent(benefit.icon)
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {benefit.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Caller ID Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Benefícios da Chamada Identificada (Stir Shaken) para o seu negócio
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
              A tecnologia Stir Shaken garante que suas chamadas sejam identificadas como legítimas, 
              aumentando a confiança dos clientes e reduzindo bloqueios automáticos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-lg text-purple-600 mb-3">Como Funciona</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Verificação automática da origem da chamada</li>
                <li>• Autenticação digital do número de origem</li>
                <li>• Certificação de chamadas legítimas</li>
                <li>• Redução de chamadas bloqueadas</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-bold text-lg text-purple-600 mb-3">Vantagens</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Maior taxa de atendimento</li>
                <li>• Redução de fraudes telefônicas</li>
                <li>• Conformidade regulatória</li>
                <li>• Melhoria na experiência do cliente</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

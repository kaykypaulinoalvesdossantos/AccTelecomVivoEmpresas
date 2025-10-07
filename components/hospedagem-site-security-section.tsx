"use client"

import React from "react"
import { Badge } from "@/components/ui/badge"
import { Shield, CheckCircle, Zap, Activity, Cloud, Lock } from "lucide-react"

export function HospedagemSiteSecuritySection() {
  const securityFeatures = [
    {
      icon: Shield,
      title: "Certificado SSL",
      description: "Criptografia completa para proteger dados dos usuários",
      color: "purple"
    },
    {
      icon: Shield,
      title: "Proteção contra ataques DDoS",
      description: "Defesa avançada contra ataques distribuídos",
      color: "purple"
    },
    {
      icon: Activity,
      title: "Alto desempenho",
      description: "Servidores otimizados para máxima velocidade",
      color: "blue"
    },
    {
      icon: Zap,
      title: "Estabilidade",
      description: "Infraestrutura robusta e confiável",
      color: "green"
    },
    {
      icon: Cloud,
      title: "Alta disponibilidade",
      description: "99.9% de uptime garantido",
      color: "purple"
    },
    {
      icon: Lock,
      title: "Segurança",
      description: "Monitoramento 24/7 e proteção avançada",
      color: "purple"
    }
  ]

  const getIconColor = (color: string) => {
    switch (color) {
      case "purple":
        return "text-[#660099] bg-[#660099]/10"
      case "blue":
        return "text-blue-600 bg-blue-100"
      case "green":
        return "text-green-600 bg-green-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-[#660099]/10 text-[#660099] border-[#660099]/20">
            <Shield className="w-4 h-4 mr-2" />
            Segurança e Performance
          </Badge>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Segurança para hospedar seu site:
            <span className="block text-[#660099]">conheça os recursos disponíveis</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nossa infraestrutura de hospedagem oferece segurança de nível empresarial 
            e performance otimizada para garantir que seu site esteja sempre protegido e funcionando.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="text-center space-y-4 p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300"
            >
              <div className={`w-16 h-16 ${getIconColor(feature.color)} rounded-2xl mx-auto flex items-center justify-center`}>
                <feature.icon className="w-8 h-8" />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Security Info */}
        <div className="mt-16 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-3xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold">Proteção Completa</h3>
              <p className="text-white/90 text-lg">
                Nossa infraestrutura de segurança inclui monitoramento contínuo, 
                backup automático e recuperação de desastres para garantir que 
                seus dados estejam sempre seguros.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span className="text-sm">Monitoramento 24/7</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span className="text-sm">Backup Automático</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-white">99.9%</div>
                    <div className="text-white/80 text-sm">Uptime</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">24/7</div>
                    <div className="text-white/80 text-sm">Suporte</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">SSL</div>
                    <div className="text-white/80 text-sm">Gratuito</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">DDoS</div>
                    <div className="text-white/80 text-sm">Proteção</div>
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

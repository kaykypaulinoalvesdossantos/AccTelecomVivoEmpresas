"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, Cloud, Shield } from "lucide-react"

export function Modem4GDataManagementSection(): React.JSX.Element {
  const features = [
    {
      icon: Database,
      title: "Compartilhamento de dados",
      description: "Gerencie o uso de dados entre múltiplos dispositivos e usuários"
    },
    {
      icon: Cloud,
      title: "Backup na nuvem",
      description: "Armazenamento seguro e sincronização automática de arquivos"
    },
    {
      icon: Shield,
      title: "Segurança avançada",
      description: "Proteção contra ameaças e controle de acesso aos dados"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Vivo Gestão de Dados
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Soluções completas para gerenciar e proteger os dados da sua empresa. 
              Controle total sobre o uso de internet e segurança da informação.
            </p>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] hover:from-[#7a0bb3] hover:to-[#ff1a75] text-white font-semibold px-6 py-3">
              Saiba mais
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#660099]/10 to-[#EB3C7D]/10 rounded-3xl p-8 border border-[#660099]/20">
              <div className="relative">
                {/* Placeholder for data management image */}
                <div className="w-full h-80 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center">
                  <div className="text-center text-gray-800">
                    <div className="flex items-center justify-center mb-4">
                      <Database className="w-20 h-20 text-[#660099] opacity-50" />
                      <Cloud className="w-16 h-16 text-[#EB3C7D] opacity-50 ml-4" />
                    </div>
                    <p className="text-xl font-semibold">Gestão de Dados</p>
                    <p className="text-sm opacity-70">Soluções completas para sua empresa</p>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-[#660099] to-[#EB3C7D] rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-[#EB3C7D] to-[#660099] rounded-full animate-bounce delay-500"></div>
                <div className="absolute top-4 -right-4 w-4 h-4 bg-[#660099]/30 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

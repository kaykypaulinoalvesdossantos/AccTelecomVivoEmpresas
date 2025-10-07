"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertCircle, Globe, Users } from "lucide-react"

export function RegistroDominioChooseSection() {
  const rules = [
    "Não use hífens no início ou fim do domínio",
    "Não use prefixos específicos não permitidos",
    "Não use símbolos especiais",
    "Máximo de 63 caracteres por parte",
    "Considere domínios internacionalizados (IDN)"
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Simple Visual */}
          <div className="relative">
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200">
              {/* Simple visual representation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Globe className="w-24 h-24 text-[#660099] mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Escolha seu Domínio</h3>
                  <p className="text-gray-600 text-lg">Encontre o nome perfeito para sua empresa</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge className="bg-[#660099]/10 text-[#660099] border-[#660099]/20">
                <CheckCircle className="w-4 h-4 mr-2" />
                Dicas Importantes
              </Badge>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Veja como escolher o domínio certo para seu
                <span className="block text-[#660099]">negócio</span>
              </h2>
            </div>

            {/* Rules */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">
                Se atente a algumas regras básicas para a construção de domínios:
              </h3>
              
              <div className="space-y-4">
                {rules.map((rule, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-[#660099] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{rule}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Tips */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Dicas Extras:</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Use palavras-chave relevantes ao seu negócio</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Evite números e caracteres especiais</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Considere registrar múltiplas extensões</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Mail, Shield, Users } from "lucide-react"

export function EmailProfissionalIntroSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge className="bg-[#660099]/10 text-[#660099] border-[#660099]/20">
                <CheckCircle className="w-4 h-4 mr-2" />
                Solução Completa
              </Badge>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                E-mail profissional: crie um e-mail corporativo com o @ da sua
                <span className="block text-[#660099]">empresa</span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Transforme a comunicação da sua empresa com e-mails profissionais 
                que transmitem credibilidade e confiança aos seus clientes e parceiros.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Com o e-mail profissional da Vivo, você tem acesso a recursos avançados, 
                segurança robusta e suporte especializado para sua empresa.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-[#660099] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 leading-relaxed">Endereço personalizado com seu domínio</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-[#660099] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 leading-relaxed">Armazenamento seguro e escalável</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-[#660099] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 leading-relaxed">Proteção contra vírus e spam</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-[#660099] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 leading-relaxed">Acesso via webmail, mobile e desktop</span>
              </div>
            </div>
          </div>

          {/* Right Content - Simple Icons */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gray-50 hover:bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#660099] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">E-mail Corporativo</h3>
                  <p className="text-gray-600 text-sm">Com seu domínio</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gray-50 hover:bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#EB3C7D] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Segurança</h3>
                  <p className="text-gray-600 text-sm">Antivírus e antispam</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gray-50 hover:bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#660099] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Múltiplas Contas</h3>
                  <p className="text-gray-600 text-sm">Para toda equipe</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gray-50 hover:bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#EB3C7D] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Backup</h3>
                  <p className="text-gray-600 text-sm">Automático</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

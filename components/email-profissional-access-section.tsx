"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Users, Smartphone, Monitor } from "lucide-react"

export function EmailProfissionalAccessSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge className="bg-[#660099]/10 text-[#660099] border-[#660099]/20">
                <Mail className="w-4 h-4 mr-2" />
                Acesso Completo
              </Badge>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Acesse seu e-mail, contatos e arquivos no mesmo
                <span className="block text-[#660099]">lugar</span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Tenha tudo que sua empresa precisa em uma única plataforma: 
                e-mail profissional, calendários compartilhados, contatos e 
                arquivos sempre sincronizados.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Acesse de qualquer lugar, em qualquer dispositivo, com a 
                mesma experiência profissional e segura.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#660099] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 leading-relaxed">E-mail profissional com seu domínio</span>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="w-5 h-5 text-[#660099] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 leading-relaxed">Calendários e contatos compartilhados</span>
              </div>
              <div className="flex items-start space-x-3">
                <Smartphone className="w-5 h-5 text-[#660099] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 leading-relaxed">Acesso via webmail, mobile e desktop</span>
              </div>
              <div className="flex items-start space-x-3">
                <Monitor className="w-5 h-5 text-[#660099] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 leading-relaxed">Sincronização automática entre dispositivos</span>
              </div>
            </div>
          </div>

          {/* Right Content - Simple Visual */}
          <div className="relative">
            <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200">
              {/* Simple visual representation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-[#660099] to-[#EB3C7D] rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Tudo Integrado</h3>
                  <p className="text-gray-600 text-lg">E-mail, calendário e arquivos</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-3xl p-12 text-white">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-6">Acesso Universal</h3>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Monitor className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Webmail</h4>
                  <p className="text-white/90">Interface web moderna</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Mobile</h4>
                  <p className="text-white/90">Apps iOS e Android</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Desktop</h4>
                  <p className="text-white/90">Outlook e Thunderbird</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Colaboração</h4>
                  <p className="text-white/90">Calendários compartilhados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

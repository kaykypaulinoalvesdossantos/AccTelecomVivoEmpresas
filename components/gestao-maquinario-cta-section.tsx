"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tractor, Phone, Mail, MessageCircle } from "lucide-react"

export function GestaoMaquinarioCtaSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#660099] via-[#8B2C9E] to-[#EB3C7D] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white">
          {/* Header */}
          <div className="mb-12">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 px-6 py-3 text-lg">
              <Tractor className="w-5 h-5 mr-2" />
              Pronto para Transformar seu Agronegócio?
            </Badge>

            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Conecte sua frota agrícola
              <span className="block text-white/90">com tecnologia inteligente</span>
            </h2>

            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Junte-se a centenas de produtores que já descobriram o poder da Gestão de Maquinário
              para otimizar operações, reduzir custos e aumentar a produtividade.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              size="lg"
              className="bg-white text-[#660099] hover:bg-white/90 px-12 py-6 text-xl font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              asChild
            >
              <a href="https://wa.me/5511989150001?text=Olá! Gostaria de contratar a gestão de maquinário" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                Contratar Agora
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-12 py-6 text-xl font-semibold rounded-xl transition-all duration-300 cursor-pointer bg-transparent"
              asChild
            >
              <a href="https://wa.me/5511989150001?text=Olá! Gostaria de uma demonstração da gestão de maquinário" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                Solicitar Demonstração
              </a>
            </Button>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ligue Agora</h3>
              <p className="text-white/80 mb-4">(11) 2362-9665</p>
              <p className="text-sm text-white/70">Segunda a sexta, 8h às 18h</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
              <p className="text-white/80 mb-4">(11) 2362-9665</p>
              <p className="text-sm text-white/70">Atendimento 24/7</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-white/80 mb-4">empresas@vivo.com.br</p>
              <p className="text-sm text-white/70">Resposta em até 2h</p>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="text-white/80 text-lg">
              <strong>Garantia de 30 dias</strong> - Se não ficar satisfeito, devolvemos seu dinheiro
            </p>
            <p className="text-white/70 text-sm mt-2">
              *Instalação gratuita em todos os planos. Consulte termos e condições.
            </p>
          </div>
        </div>
      </div>

    </section>
  )
}

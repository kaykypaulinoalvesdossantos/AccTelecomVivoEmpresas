"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MessageSquare, Mail, Clock, ArrowRight } from "lucide-react"
import { vivoGestaoData } from "@/data/vivo-gestao-data"

export function VivoGestaoCTASection(): React.JSX.Element {
  return (
    <section className="py-16 bg-gradient-to-br from-[#660099] via-[#8B00FF] to-[#EB3C7D] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Solicite uma proposta personalizada e descubra como o Vivo Gestão pode transformar a gestão de dispositivos da sua empresa
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <Card className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
            <CardContent>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Informações de Contato
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Telefone
                    </h4>
                    <p className="text-white/90 font-medium mb-1">
                      {vivoGestaoData.contact.phone}
                    </p>
                    <p className="text-white/70 text-sm">
                      Fale com nossos especialistas
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      WhatsApp
                    </h4>
                    <p className="text-white/90 font-medium mb-1">
                      {vivoGestaoData.contact.phone}
                    </p>
                    <p className="text-white/70 text-sm">
                      Atendimento via WhatsApp
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      E-mail
                    </h4>
                    <p className="text-white/90 font-medium mb-1">
                      {vivoGestaoData.contact.email}
                    </p>
                    <p className="text-white/70 text-sm">
                      Envie suas dúvidas por e-mail
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Horário de Atendimento
                    </h4>
                    <p className="text-white/90 font-medium mb-1">
                      {vivoGestaoData.contact.hours}
                    </p>
                    <p className="text-white/70 text-sm">
                      Exceto feriados
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white/10 rounded-lg">
                <h4 className="font-semibold text-white mb-3">
                  Por que escolher o Vivo Gestão?
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-white/90">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    Proposta personalizada para sua empresa
                  </li>
                  <li className="flex items-center gap-2 text-white/90">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    Demonstração gratuita da plataforma
                  </li>
                  <li className="flex items-center gap-2 text-white/90">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    Suporte técnico especializado
                  </li>
                  <li className="flex items-center gap-2 text-white/90">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    Implementação rápida e segura
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* CTA Actions */}
          <Card className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
            <CardContent>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Solicite uma Proposta
              </h3>

              <div className="text-center">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Pronto para começar?
                </h4>
                <p className="text-white/90 mb-6">
                  Nossa equipe está pronta para ajudar você a implementar a solução ideal para sua empresa
                </p>

                <div className="space-y-4">
                  <Button
                    size="lg"
                    className="w-full bg-white text-[#660099] hover:bg-gray-100 font-semibold px-8 py-4 text-lg"
                    asChild
                  >
                    <a href={vivoGestaoData.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                      <MessageSquare className="w-5 h-5 mr-2" />
                      Agendar Demonstração
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  </Button>

                  <Button
                    size="lg"
                    className="w-full bg-white text-[#660099] hover:bg-gray-100 font-semibold px-8 py-4 text-lg"
                    asChild
                  >
                    <a href={vivoGestaoData.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                      <Phone className="w-5 h-5 mr-2" />
                      Falar com Consultor
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

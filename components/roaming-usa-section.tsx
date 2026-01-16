"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Smartphone, Phone, ExternalLink } from "lucide-react"

export function RoamingUSASection(): React.JSX.Element {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Desligue de Redes 2G e 3G nos EUA
            </h2>
            <p className="text-lg text-gray-600">
              Importante informação para viagens aos Estados Unidos
            </p>
          </div>

          <Card className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-xl flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Desligamento das Redes 2G e 3G
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      As operadoras dos EUA descontinuarão as redes 2G e 3G até dezembro,
                      o que pode impactar suas ligações durante viagens ao país.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#660099]/10 to-[#EB3C7D]/10 rounded-xl p-6 border border-[#660099]/20">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Como ativar o VoLTE para continuar fazendo ligações:
                  </h4>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Smartphone className="w-5 h-5 text-[#660099]" />
                        <span className="font-medium text-gray-800">iOS</span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Vá em Configurações > Celular > Opções de Dados Celular >
                        Ativar LTE e selecione "Voz e Dados".
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Phone className="w-5 h-5 text-[#660099]" />
                        <span className="font-medium text-gray-800">Android</span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Acesse Configurações > Conexões > Redes móveis >
                        Modo de rede e selecione "4G/3G/2G (automático)".
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#660099]/10 to-[#EB3C7D]/10 rounded-xl p-6 border border-[#660099]/20">
                  <div className="flex items-center gap-3 mb-3">
                    <ExternalLink className="w-6 h-6 text-[#660099]" />
                    <h4 className="font-semibold text-gray-800">
                      Lista de Celulares Compatíveis
                    </h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Verifique se seu dispositivo é compatível com VoLTE para garantir
                    que suas ligações funcionem normalmente nos EUA.
                  </p>
                  <a
                    href="https://wa.me/5511989150001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#660099] hover:underline font-medium inline-flex items-center gap-2"
                  >
                    Consultar Compatibilidade
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

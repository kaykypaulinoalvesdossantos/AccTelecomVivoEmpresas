"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Wifi, Phone, Smartphone, Download } from "lucide-react"

export function RoamingVoiceWiFiSection(): React.JSX.Element {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Informações Voz Wi-Fi
            </h2>
            <p className="text-lg text-gray-600">
              Saiba como usar e desativar o serviço Voz Wi-Fi
            </p>
          </div>

          <Card className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Wifi className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Como usar o Voz Wi-Fi
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      O Voz Wi-Fi permite fazer ligações usando uma conexão Wi-Fi quando a rede móvel
                      não estiver disponível ou for instável.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-[#660099]/10 to-[#EB3C7D]/10 rounded-xl p-6 border border-[#660099]/20">
                    <div className="flex items-center gap-3 mb-3">
                      <Smartphone className="w-6 h-6 text-[#660099]" />
                      <h4 className="font-semibold text-gray-800">iOS</h4>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Vá em Configurações &gt; Telefone &gt; Ligar via Wi-Fi e ative a opção.
                      Para desativar, siga o mesmo caminho e desative.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-[#660099]/10 to-[#EB3C7D]/10 rounded-xl p-6 border border-[#660099]/20">
                    <div className="flex items-center gap-3 mb-3">
                      <Phone className="w-6 h-6 text-[#660099]" />
                      <h4 className="font-semibold text-gray-800">Android</h4>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Acesse Configurações &gt; Conexões &gt; Wi-Fi &gt; Wi-Fi Calling e ative.
                      Para desativar, desative a opção Wi-Fi Calling.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#660099]/10 to-[#EB3C7D]/10 rounded-xl p-6 border border-[#660099]/20">
                  <div className="flex items-center gap-3 mb-3">
                    <Download className="w-6 h-6 text-[#660099]" />
                    <h4 className="font-semibold text-gray-800">Guia de Bolsa de Viagem</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Para mais informações sobre como configurar e usar o Voz Wi-Fi durante suas viagens,
                    consulte nosso Guia de Bolsa de Viagem completo com dicas e instruções detalhadas.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

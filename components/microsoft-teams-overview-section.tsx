"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Video, MessageCircle, CheckCircle } from "lucide-react"

export function MicrosoftTeamsOverviewSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="text-white border-white/30 hover:bg-white/30" style={{ backgroundColor: 'rgba(102, 0, 153, 0.2)' }}>
                <Users className="w-4 h-4 mr-2" />
                Plataforma de comunicação e colaboração
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Microsoft Teams: Reuniões online e videochamadas para empresas
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  O Microsoft Teams é a plataforma ideal de comunicação e colaboração online para 
                  trabalho remoto e híbrido. Suporta até 300 pessoas em videoconferências e permite 
                  compartilhamento de arquivos em diversos formatos.
                </p>
                <p>
                  Com integração completa aos aplicativos Microsoft 365, o Teams oferece uma solução 
                  unificada para comunicação, colaboração e produtividade empresarial, facilitando 
                  o trabalho em equipe independentemente da localização dos colaboradores.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="border-2 border-gray-100 hover:border-purple-200 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#660099' }}>
                      <Video className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Videoconferências</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Reuniões online com até 300 participantes simultâneos
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-100 hover:border-purple-200 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#EB3C7D' }}>
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Chat e Colaboração</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Comunicação instantânea e compartilhamento de arquivos
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-100 hover:border-purple-200 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#FF9900' }}>
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Integração Microsoft</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Integração completa com aplicativos Microsoft 365
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-100 hover:border-purple-200 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#82D400' }}>
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Segurança Avançada</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Proteção de dados e conformidade empresarial
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <div className="rounded-2xl p-8 border" style={{ background: 'linear-gradient(135deg, rgba(102, 0, 153, 0.05) 0%, rgba(235, 60, 125, 0.05) 100%)', borderColor: '#660099' }}>
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Por que escolher Microsoft Teams?
                    </h3>
                    <p className="text-gray-600">
                      Soluções completas para comunicação empresarial
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#660099' }}>
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700">Comunicação unificada em uma plataforma</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#EB3C7D' }}>
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700">Colaboração em tempo real</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FF9900' }}>
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700">Integração com Microsoft 365</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#82D400' }}>
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700">Segurança e conformidade empresarial</span>
                    </div>
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


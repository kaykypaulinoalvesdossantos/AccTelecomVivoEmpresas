"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cloud, Shield, Users, Zap, CheckCircle } from "lucide-react"

export function Microsoft365OverviewSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="text-white border-white/30 hover:bg-white/30" style={{ backgroundColor: 'rgba(102, 0, 153, 0.2)' }}>
                <Cloud className="w-4 h-4 mr-2" />
                Solução completa de produtividade empresarial
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Microsoft 365 Business Basic
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  O Microsoft 365 Business Basic oferece as ferramentas essenciais para comunicação, 
                  colaboração e produtividade da sua equipe. Com acesso às versões web e móveis dos 
                  aplicativos Office, você pode trabalhar de qualquer lugar, a qualquer hora.
                </p>
                <p>
                  Inclui Exchange Online para email empresarial, SharePoint Online para compartilhamento 
                  de arquivos, Teams para comunicação e colaboração, além de segurança avançada para 
                  proteger os dados da sua empresa.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="border-2 border-gray-100 hover:border-purple-200 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#660099' }}>
                      <Cloud className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Aplicativos Web e Móveis</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Word, Excel, PowerPoint e Outlook nas versões web e móveis
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-100 hover:border-purple-200 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#EB3C7D' }}>
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Segurança Avançada</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Proteção de dados e conformidade com regulamentações
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-100 hover:border-purple-200 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#FF9900' }}>
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Colaboração</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Teams, SharePoint e Exchange para trabalho em equipe
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-100 hover:border-purple-200 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#82D400' }}>
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Produtividade</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Ferramentas essenciais para aumentar a eficiência
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
                      Por que escolher Microsoft 365?
                    </h3>
                    <p className="text-gray-600">
                      Soluções completas para sua empresa
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#660099' }}>
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700">Aplicativos sempre atualizados</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#EB3C7D' }}>
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700">Armazenamento em nuvem seguro</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FF9900' }}>
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700">Colaboração em tempo real</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#82D400' }}>
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700">Suporte técnico especializado</span>
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


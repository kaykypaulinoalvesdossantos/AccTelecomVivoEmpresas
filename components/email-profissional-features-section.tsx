"use client"

import React, { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Shield, Users } from "lucide-react"

export function EmailProfissionalFeaturesSection() {
  const [activeTab, setActiveTab] = useState("funcionalidades")

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#660099]/10 text-[#660099] border-[#660099]/20">
            <Mail className="w-4 h-4 mr-2" />
            Recursos Avançados
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Conheça o serviço de e-mail corporativo
            <span className="block text-[#660099]">Vivo Empresas</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="max-w-4xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="funcionalidades" className="text-sm font-semibold">
                Funcionalidades
              </TabsTrigger>
              <TabsTrigger value="integracao" className="text-sm font-semibold">
                Integração
              </TabsTrigger>
              <TabsTrigger value="seguranca" className="text-sm font-semibold">
                Segurança
              </TabsTrigger>
            </TabsList>

            <TabsContent value="funcionalidades" className="space-y-6">
              <Card className="border-0 bg-gray-50">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Funcionalidades Avançadas</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    O e-mail profissional da Vivo oferece recursos completos para sua empresa, 
                    incluindo webmail avançado, calendários compartilhados, edição de documentos 
                    e muito mais para aumentar a produtividade da sua equipe.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Mail className="w-5 h-5 text-[#660099] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Webmail Avançado</h4>
                          <p className="text-gray-600 text-sm">Interface moderna e intuitiva</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Users className="w-5 h-5 text-[#660099] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Calendários Compartilhados</h4>
                          <p className="text-gray-600 text-sm">Colaboração em tempo real</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Shield className="w-5 h-5 text-[#660099] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Edição de Documentos</h4>
                          <p className="text-gray-600 text-sm">Compatível com Office</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Mail className="w-5 h-5 text-[#660099] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Backup Automático</h4>
                          <p className="text-gray-600 text-sm">Proteção total dos dados</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="integracao" className="space-y-6">
              <Card className="border-0 bg-gray-50">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Integração Completa</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Acesse seus e-mails de qualquer lugar através de múltiplas plataformas 
                    e dispositivos, garantindo produtividade e mobilidade para sua equipe.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Mail className="w-5 h-5 text-[#660099] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-gray-900">POP3, IMAP4, SMTP</h4>
                          <p className="text-gray-600 text-sm">Protocolos padrão da indústria</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Users className="w-5 h-5 text-[#660099] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Webmail Responsivo</h4>
                          <p className="text-gray-600 text-sm">Funciona em qualquer dispositivo</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Shield className="w-5 h-5 text-[#660099] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Apps Mobile</h4>
                          <p className="text-gray-600 text-sm">iOS e Android</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Mail className="w-5 h-5 text-[#660099] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Outlook Integration</h4>
                          <p className="text-gray-600 text-sm">Sincronização perfeita</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="seguranca" className="space-y-6">
              <Card className="border-0 bg-gray-50">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Segurança Avançada</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Proteção completa contra ameaças digitais com antivírus avançado, 
                    filtros de spam inteligentes e backup automático para garantir 
                    a segurança dos seus dados corporativos.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Shield className="w-5 h-5 text-[#660099] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Antivírus Avançado</h4>
                          <p className="text-gray-600 text-sm">Proteção em tempo real</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Mail className="w-5 h-5 text-[#660099] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Filtros Anti-Spam</h4>
                          <p className="text-gray-600 text-sm">Bloqueio inteligente</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Users className="w-5 h-5 text-[#660099] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Criptografia SSL</h4>
                          <p className="text-gray-600 text-sm">Dados protegidos</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Shield className="w-5 h-5 text-[#660099] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Backup Seguro</h4>
                          <p className="text-gray-600 text-sm">Recuperação garantida</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

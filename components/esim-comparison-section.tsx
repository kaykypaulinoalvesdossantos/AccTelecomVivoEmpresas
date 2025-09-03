"use client"

import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, XCircle, Clock, Shield, Smartphone } from "lucide-react"

export function ESimComparisonSection(): React.JSX.Element {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            eSIM vs Chip Tradicional
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Veja as vantagens do eSIM comparado ao chip físico tradicional
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="esim" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="esim" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#660099] data-[state=active]:to-[#EB3C7D] data-[state=active]:text-white">
                eSIM Digital
              </TabsTrigger>
              <TabsTrigger value="chip" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#660099] data-[state=active]:to-[#EB3C7D] data-[state=active]:text-white">
                Chip Tradicional
              </TabsTrigger>
            </TabsList>

            <TabsContent value="esim">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6 bg-gradient-to-br from-green-50 to-blue-50">
                  <h3 className="text-xl font-semibold mb-4 text-green-700">Vantagens do eSIM</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>Ativação em minutos via app</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>Não pode ser perdido ou danificado</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>Múltiplos perfis no mesmo aparelho</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>Troca de operadora instantânea</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>Mais seguro contra clonagem</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>Sustentável (sem plástico)</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Facilidades Exclusivas</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Clock className="h-6 w-6 text-[#660099]" />
                      <div>
                        <strong>Ativação Rápida</strong>
                        <p className="text-sm text-gray-600">Em até 15 minutos</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="h-6 w-6 text-[#660099]" />
                      <div>
                        <strong>Segurança Avançada</strong>
                        <p className="text-sm text-gray-600">Criptografia de ponta</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Smartphone className="h-6 w-6 text-[#660099]" />
                      <div>
                        <strong>Gestão Digital</strong>
                        <p className="text-sm text-gray-600">Controle total pelo app</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="chip">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6 bg-gradient-to-br from-orange-50 to-red-50">
                  <h3 className="text-xl font-semibold mb-4 text-orange-700">Limitações do Chip Físico</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <XCircle className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                      <span>Necessita visita à loja física</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                      <span>Pode ser perdido ou danificado</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                      <span>Apenas um perfil por vez</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                      <span>Troca manual necessária</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                      <span>Mais vulnerável à clonagem</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                      <span>Impacto ambiental do plástico</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Processo Tradicional</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-orange-200 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold">1</span>
                      </div>
                      <div>
                        <strong>Visita à Loja</strong>
                        <p className="text-sm text-gray-600">Deslocamento necessário</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-orange-200 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold">2</span>
                      </div>
                      <div>
                        <strong>Instalação Manual</strong>
                        <p className="text-sm text-gray-600">Inserir no aparelho</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-orange-200 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold">3</span>
                      </div>
                      <div>
                        <strong>Ativação Lenta</strong>
                        <p className="text-sm text-gray-600">Até 24 horas</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

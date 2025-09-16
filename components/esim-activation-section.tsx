"use client"

import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Smartphone, Download, Zap, ArrowRight, RefreshCw, CreditCard } from "lucide-react"

export function ESimActivationSection(): React.JSX.Element {
  const activationSteps = [
    {
      number: "1",
      title: "Escolha seu Plano",
      description: "Selecione o plano eSIM ideal para suas necessidades no site ou app Vivo"
    },
    {
      number: "2",
      title: "Baixe o Perfil",
      description: "Escaneie o QR Code ou use o código de ativação para baixar o perfil eSIM"
    },
    {
      number: "3",
      title: "Ative Instantaneamente",
      description: "Seu eSIM será ativado automaticamente e estará pronto para uso"
    }
  ]

  const trocaSteps = [
    {
      number: "1",
      title: "Solicite a Troca",
      description: "Entre em contato com nosso suporte para solicitar a troca do eSIM"
    },
    {
      number: "2",
      title: "Receba o Novo Código",
      description: "Você receberá um novo QR Code ou código de ativação por email"
    },
    {
      number: "3",
      title: "Ative o Novo eSIM",
      description: "Siga o mesmo processo de ativação com o novo código"
    }
  ]

  const chipSteps = [
    {
      number: "1",
      title: "Verifique Compatibilidade",
      description: "Confirme se seu dispositivo é compatível com eSIM"
    },
    {
      number: "2",
      title: "Solicite Migração",
      description: "Entre em contato para migrar do chip físico para eSIM"
    },
    {
      number: "3",
      title: "Ative o eSIM",
      description: "Receba e ative seu novo eSIM digital"
    }
  ]

  const requirements = [
    "Dispositivo compatível com eSIM",
    "Conexão com internet",
    "QR Code ou código de ativação",
    "Aplicativo Vivo instalado"
  ]

  const trocaRequirements = [
    "Dispositivo compatível com eSIM",
    "eSIM atual funcionando",
    "Conexão com internet",
    "Documentação necessária"
  ]

  const chipRequirements = [
    "Dispositivo compatível com eSIM",
    "Chip físico ativo",
    "Documentação de identidade",
    "Conexão com internet"
  ]

  const renderSteps = (steps: any[]) => {
    return (
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow border-2 border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-2xl font-bold text-white">{step.number}</span>
            </div>
            <h4 className="text-xl font-semibold mb-3 text-gray-800">{step.title}</h4>
            <p className="text-gray-600 leading-relaxed">
              {step.description}
            </p>
          </Card>
        ))}
      </div>
    )
  }

  const renderRequirements = (reqs: string[]) => {
    return (
      <ul className="space-y-3">
        {reqs.map((requirement, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-[#660099] mt-1 flex-shrink-0" />
            <span className="text-gray-700">{requirement}</span>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Guia de ativação e troca do seu eSIM
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Processo simples e rápido para ativar seu eSIM
          </p>
        </div>

        <Tabs defaultValue="primeira" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-gray-100 p-1 rounded-lg">
            <TabsTrigger 
              value="primeira" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#660099] data-[state=active]:to-[#EB3C7D] data-[state=active]:text-white data-[state=active]:shadow-sm data-[state=inactive]:text-gray-600"
            >
              Ativar (primeira vez)
            </TabsTrigger>
            <TabsTrigger 
              value="troca" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#660099] data-[state=active]:to-[#EB3C7D] data-[state=active]:text-white data-[state=active]:shadow-sm data-[state=inactive]:text-gray-600"
            >
              Ativar (troca)
            </TabsTrigger>
            <TabsTrigger 
              value="chip" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#660099] data-[state=active]:to-[#EB3C7D] data-[state=active]:text-white data-[state=active]:shadow-sm data-[state=inactive]:text-gray-600"
            >
              Ativar (chip físico)
            </TabsTrigger>
          </TabsList>

          <TabsContent value="primeira" className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Confira o que é preciso para ativar o eSIM no seu dispositivo
              </h3>
              {renderRequirements(requirements)}
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Agora, é só seguir as orientações:
              </h3>
              {renderSteps(activationSteps)}
            </div>
          </TabsContent>

          <TabsContent value="troca" className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Requisitos para troca de eSIM
              </h3>
              {renderRequirements(trocaRequirements)}
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Processo de troca de eSIM:
              </h3>
              {renderSteps(trocaSteps)}
            </div>

            <Card className="bg-gradient-to-r from-[#660099]/10 to-[#EB3C7D]/10 border border-[#660099]/20 p-6">
              <div className="flex items-start gap-3">
                <RefreshCw className="w-6 h-6 text-[#660099] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Importante sobre a troca</h4>
                  <p className="text-gray-600 text-sm">
                    A troca de eSIM pode ser solicitada a qualquer momento. O processo é rápido e seguro, 
                    garantindo que você não fique sem conectividade durante a transição.
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="chip" className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Requisitos para migração de chip físico
              </h3>
              {renderRequirements(chipRequirements)}
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Processo de migração:
              </h3>
              {renderSteps(chipSteps)}
            </div>

            <Card className="bg-gradient-to-r from-[#660099]/10 to-[#EB3C7D]/10 border border-[#660099]/20 p-6">
              <div className="flex items-start gap-3">
                <CreditCard className="w-6 h-6 text-[#660099] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Vantagens da migração</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Maior segurança e durabilidade</li>
                    <li>• Facilidade para trocar de dispositivo</li>
                    <li>• Redução de perda de chips físicos</li>
                    <li>• Ativação instantânea</li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Contact Info */}
        <div className="mt-12 bg-gradient-to-r from-[#660099]/10 to-[#EB3C7D]/10 rounded-xl p-6 border border-[#660099]/20">
          <div className="flex items-center gap-3 mb-3">
            <Smartphone className="w-6 h-6 text-[#660099]" />
            <h4 className="font-semibold text-gray-800">Em caso de dúvidas na ativação do eSIM</h4>
          </div>
          <p className="text-gray-600">
            Entre em contato pelo <strong>(11) 2362-9665</strong> ou pelo WhatsApp
          </p>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Shield, Smartphone } from "lucide-react"

export function PortabilitySection() {
  const steps = [
    {
      number: "01",
      title: "Solicite Online",
      description: "Faça a solicitação pelo nosso site ou app em menos de 5 minutos",
      icon: Smartphone,
    },
    {
      number: "02",
      title: "Aguarde Aprovação",
      description: "Processamos sua solicitação em até 24 horas úteis",
      icon: Clock,
    },
    {
      number: "03",
      title: "Migração Automática",
      description: "Sua linha é migrada automaticamente sem interrupção",
      icon: CheckCircle,
    },
  ]

  const benefits = [
    "Mantenha seu número atual",
    "Processo 100% gratuito",
    "Sem interrupção do serviço",
    "Migração em até 24h",
    "Suporte especializado",
    "Cancelamento automático da operadora anterior",
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
            <Shield className="w-4 h-4 mr-2" />
            Portabilidade Gratuita
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Traga seu número para a Vivo</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Migre sua linha empresarial de forma rápida, segura e sem custos. Mantenha seu número e ganhe todos os
            benefícios da melhor rede do Brasil.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Como funciona a portabilidade?</h3>
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <step.icon className="w-6 h-6 text-purple-600 mr-3" />
                      <h4 className="text-xl font-bold text-gray-900">{step.title}</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Card className="p-8 shadow-xl border-0 bg-white">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-bold text-gray-900 mb-4">Vantagens da Portabilidade</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-4">
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg py-6" asChild>
                  <a href="https://wa.me/5511989150001?text=Olá! Gostaria de solicitar portabilidade gratuita" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                    Solicitar Portabilidade Gratuita
                  </a>
                </Button>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <a href="https://wa.me/5511989150001?text=Olá! Gostaria de simular economia com portabilidade" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                    Simular Economia
                  </a>
                </Button>
              </div>

              <p className="text-sm text-gray-500 text-center mt-6">
                * Processo gratuito e sem compromisso. Cancele quando quiser.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Dúvidas sobre portabilidade?</h3>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            Nossa equipe especializada está pronta para ajudar você em todo o processo. Atendimento gratuito e sem
            compromisso.
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50" asChild>
            <a href="https://wa.me/5511989150001?text=Olá! Tenho dúvidas sobre portabilidade" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
              Falar com Especialista
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

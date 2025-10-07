"use client"

import React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { HelpCircle, CheckCircle, ArrowRight } from "lucide-react"

export default function ConstrucaoSiteHowSection() {
  const steps = [
    {
      number: "1",
      title: "Escolha seu template",
      description: "Selecione entre centenas de templates profissionais"
    },
    {
      number: "2", 
      title: "Personalize o conteúdo",
      description: "Adicione suas informações, fotos e textos"
    },
    {
      number: "3",
      title: "Configure seu domínio",
      description: "Escolha o nome do seu site e configure o domínio"
    },
    {
      number: "4",
      title: "Publique seu site",
      description: "Seu site fica online em poucos minutos"
    },
    {
      number: "5",
      title: "Gerencie facilmente",
      description: "Atualize seu site quando quiser pelo painel"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-[#660099]/10 text-[#660099] border-[#660099]/20">
            <HelpCircle className="w-4 h-4 mr-2" />
            Como Criar
          </Badge>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Dúvidas em como criar um site profissional?
            <span className="block text-[#660099]">Veja como é fácil</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Em apenas 5 passos simples, você terá seu site profissional online. 
            Sem conhecimento técnico necessário.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#660099] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                </div>

                {/* Step Content */}
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="flex-shrink-0 mt-6">
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="bg-[#660099] hover:bg-[#660099]/90 text-white cursor-pointer px-8 py-4 text-lg"
          >
            Começar Agora
          </Button>
        </div>
      </div>
    </section>
  )
}

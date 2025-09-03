"use client"

import React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Smartphone, Wifi, Settings, CheckCircle } from "lucide-react"

export function Modem4GHowToSection(): React.JSX.Element {
  const steps = [
    {
      number: "1",
      title: "Ative o compartilhamento",
      description: "Vá em Configurações > Conexões > Hotspot e compartilhamento de Wi-Fi"
    },
    {
      number: "2",
      title: "Configure a rede",
      description: "Defina um nome e senha para sua rede Wi-Fi"
    },
    {
      number: "3",
      title: "Conecte os dispositivos",
      description: "Use a senha para conectar notebooks, tablets e outros dispositivos"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Accordion */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Como usar o celular como Roteador?
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="modem" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-lg flex items-center justify-center">
                      <Smartphone className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold text-gray-800">MÓVEL-MODEM</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  Transforme seu smartphone em um ponto de acesso Wi-Fi e compartilhe sua conexão 4G com outros dispositivos.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="steps" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-lg flex items-center justify-center">
                      <Settings className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold text-gray-800">Passo a passo para usar o celular como modem</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  <div className="space-y-4">
                    {steps.map((step, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-full flex items-center justify-center text-white text-xs font-bold">
                          {step.number}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-800">{step.title}</div>
                          <div className="text-sm text-gray-600">{step.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Steps Visualization */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">Passo a passo simples</h3>
            
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-px h-8 bg-gradient-to-b from-[#660099] to-[#EB3C7D] mx-6"></div>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-[#660099]/10 to-[#EB3C7D]/10 rounded-xl p-6 border border-[#660099]/20">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-6 h-6 text-[#660099]" />
                <h4 className="font-semibold text-gray-800">Dica importante</h4>
              </div>
              <p className="text-gray-600 text-sm">
                Mantenha seu celular conectado à energia durante o compartilhamento para evitar que a bateria acabe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { vivoGestaoData } from "@/data/vivo-gestao-data"

export function VivoGestaoFAQSection(): React.JSX.Element {
  return (
    <section className="py-16 bg-gradient-to-br from-[#660099]/5 via-[#8B00FF]/5 to-[#EB3C7D]/5 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-[#660099]/10 to-[#EB3C7D]/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-[#EB3C7D]/10 to-[#660099]/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#660099]/5 to-[#EB3C7D]/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Gestão de Voz e Dados: principais dúvidas
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Respostas para as principais dúvidas sobre o Vivo Gestão
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {vivoGestaoData.faq.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-lg px-6 shadow-lg">
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-lg flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <span className="font-semibold text-gray-800">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
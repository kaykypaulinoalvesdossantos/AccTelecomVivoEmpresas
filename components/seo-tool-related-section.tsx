"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Monitor, Mail, Cloud, ArrowRight } from "lucide-react"

export default function SeoToolRelatedSection() {
  const solutions = [
    {
      icon: Monitor,
      title: "Crie um site personalizado para sua empresa",
      description: "Desenvolva uma presença online profissional com nossos templates e ferramentas de construção de sites.",
      href: "/solucoes/ti/construcao-site",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Mail,
      title: "Uma forma inteligente de administrar os e-mails",
      description: "Gerencie suas comunicações corporativas com segurança e eficiência.",
      href: "/solucoes/ti/email-profissional",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Cloud,
      title: "Hospedagem de sites e aplicações na nuvem",
      description: "Hospede seu site com segurança, performance e escalabilidade na nuvem.",
      href: "/solucoes/ti/hospedagem-site",
      color: "from-green-500 to-blue-500"
    }
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Conheça mais soluções digitais para a sua empresa
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete sua presença digital com nossas outras soluções especializadas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-center space-y-6">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center mx-auto`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {solution.description}
                  </p>
                </div>

                {/* CTA Button */}
                <Button 
                  variant="outline" 
                  className="w-full border-[#660099] text-[#660099] hover:bg-[#660099] hover:text-white cursor-pointer"
                >
                  Conheça
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-[#660099] hover:bg-[#660099]/90 cursor-pointer"
          >
            Ver Todas as Soluções
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}

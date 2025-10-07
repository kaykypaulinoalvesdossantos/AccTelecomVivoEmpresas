"use client"

import React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Monitor, Mail, Globe, Search, ArrowRight } from "lucide-react"

export function HospedagemSiteRelatedSection() {
  const relatedSolutions = [
    {
      icon: Monitor,
      title: "Construção de sites",
      description: "Criação profissional de sites e lojas virtuais com design responsivo e otimizado para conversão.",
      href: "/solucoes/ti/construcao-sites"
    },
    {
      icon: Mail,
      title: "E-mail profissional",
      description: "Contas de e-mail corporativo com domínio próprio, segurança avançada e alta disponibilidade.",
      href: "/solucoes/ti/email-profissional"
    },
    {
      icon: Globe,
      title: "Registro de domínios",
      description: "Registre seu domínio .com.br ou internacional com proteção de privacidade e renovação automática.",
      href: "/solucoes/ti/registro-dominio"
    },
    {
      icon: Search,
      title: "SEO Vivo",
      description: "Otimização para mecanismos de busca para aumentar a visibilidade do seu site nos resultados do Google.",
      href: "/solucoes/ti/seo-vivo"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-[#660099]/10 text-[#660099] border-[#660099]/20">
            <Globe className="w-4 h-4 mr-2" />
            Soluções Complementares
          </Badge>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Veja mais soluções para
            <span className="block text-[#660099]">a sua empresa</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Complete sua presença digital com nossas soluções complementares. 
            Desde a criação do site até o registro do domínio e otimização SEO.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {relatedSolutions.map((solution, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="space-y-6">
                {/* Icon */}
                <div className="w-16 h-16 bg-[#660099]/10 rounded-2xl flex items-center justify-center">
                  <solution.icon className="w-8 h-8 text-[#660099]" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">{solution.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{solution.description}</p>
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <Button 
                    variant="ghost" 
                    className="w-full text-[#660099] hover:text-[#660099]/80 hover:bg-[#660099]/10 cursor-pointer group"
                    asChild
                  >
                    <a href={solution.href}>
                      Confira
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Precisa de uma solução completa?
            </h3>
            <p className="text-gray-600 mb-6">
              Nossa equipe pode criar um pacote personalizado com todas as soluções 
              digitais que sua empresa precisa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-[#660099] hover:bg-[#660099]/90 text-white cursor-pointer"
              >
                Falar com Consultor
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-[#660099] text-[#660099] hover:bg-[#660099] hover:text-white cursor-pointer"
              >
                Ver Todas as Soluções
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

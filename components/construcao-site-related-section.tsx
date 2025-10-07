"use client"

import React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Monitor, Cloud, Mail, Globe, Search, ArrowRight } from "lucide-react"

export default function ConstrucaoSiteRelatedSection() {
  const relatedSolutions = [
    {
      icon: Monitor,
      title: "CONSTRUTOR DE SITES",
      description: "Crie seu site profissional sem conhecimento técnico",
      href: "/solucoes/ti/construcao-site"
    },
    {
      icon: Cloud,
      title: "Hospedagem de sites em nuvem",
      description: "Hospedagem profissional com alta disponibilidade",
      href: "/solucoes/ti/hospedagem-site"
    },
    {
      icon: Mail,
      title: "E-mail profissional para empresa",
      description: "Contas de e-mail corporativo com domínio próprio",
      href: "/solucoes/ti/email-profissional"
    },
    {
      icon: Globe,
      title: "Registro de domínio por R$39,90",
      description: "Registre seu domínio .com.br com proteção de privacidade",
      href: "/solucoes/ti/registro-dominio"
    },
    {
      icon: Search,
      title: "Seu site na primeira página do google.com SEO Tool",
      description: "Otimização para mecanismos de busca",
      href: "/solucoes/ti/seo-tool"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-[#660099]/10 text-[#660099] border-[#660099]/20">
            <Monitor className="w-4 h-4 mr-2" />
            Soluções Relacionadas
          </Badge>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Conheça mais soluções para
            <span className="block text-[#660099]">a sua empresa</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Complete sua presença digital com nossas soluções complementares. 
            Desde a criação do site até hospedagem e otimização SEO.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedSolutions.map((solution, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-[#660099] to-[#EB3C7D] rounded-2xl p-8 text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="space-y-6">
                {/* Icon */}
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">{solution.title}</h3>
                  <p className="text-white/90 leading-relaxed">{solution.description}</p>
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <Button 
                    variant="ghost" 
                    className="w-full text-white hover:text-white hover:bg-white/20 cursor-pointer group"
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
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
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

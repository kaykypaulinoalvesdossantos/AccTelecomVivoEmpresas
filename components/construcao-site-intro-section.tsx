"use client"

import React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Monitor, Globe, Shield, Zap, CheckCircle, Star, Users } from "lucide-react"

export default function ConstrucaoSiteIntroSection() {
  const features = [
    {
      icon: Monitor,
      title: "Templates Profissionais",
      description: "Mais de 500 templates prontos para diferentes tipos de negócio"
    },
    {
      icon: Globe,
      title: "Site Responsivo",
      description: "Seu site se adapta automaticamente a todos os dispositivos"
    },
    {
      icon: Shield,
      title: "Segurança Total",
      description: "Certificado SSL gratuito e proteção contra ataques"
    },
    {
      icon: Zap,
      title: "Fácil de Usar",
      description: "Interface intuitiva, sem necessidade de conhecimento técnico"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-[#660099]/10 text-[#660099] border-[#660099]/20">
            <Monitor className="w-4 h-4 mr-2" />
            Construtor de Sites
          </Badge>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Que tal criar um site profissional
            <span className="block text-[#660099]">para sua empresa?</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Com nosso construtor de sites, você pode criar um site profissional e elegante 
            sem a necessidade de conhecimento técnico. Templates prontos, domínio grátis 
            e hospedagem incluída.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="w-16 h-16 bg-[#660099]/10 rounded-2xl mx-auto flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-[#660099]" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
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

"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Mail, CheckCircle } from "lucide-react"

export function HospedagemSiteCtaSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#660099] via-[#8B2C9E] to-[#EB3C7D] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-repeat opacity-5"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Main Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Pronto para hospedar seu site
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  com a Vivo?
                </span>
              </h2>
              
              <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                Comece hoje mesmo com nossa hospedagem web profissional. 
                Domínio grátis, SSL incluído e suporte técnico 24/7.
              </p>
            </div>

            {/* Guarantee */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-300" />
                <span className="text-white font-semibold">Garantia de 30 dias</span>
              </div>
              <p className="text-white/90 text-sm">
                Teste nossa hospedagem sem compromisso. Se não ficar satisfeito, 
                devolvemos seu dinheiro integralmente.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-[#660099] hover:bg-white/90 font-semibold cursor-pointer px-8 py-4 text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Ligue Agora: (11) 2362-9665
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-[#660099] cursor-pointer px-8 py-4 text-lg bg-transparent"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp: (11) 2362-9665
            </Button>
          </div>

          {/* Contact Info */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Outras formas de contato</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">E-mail</div>
                    <div className="text-white/80 text-sm">contato@acctelecom.com.br</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Chat Online</div>
                    <div className="text-white/80 text-sm">Disponível 24/7</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-white/20 rounded-xl mx-auto flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-300" />
              </div>
              <div className="text-white font-semibold">Migração Gratuita</div>
              <div className="text-white/80 text-sm">Transferência sem custos</div>
            </div>
            
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-white/20 rounded-xl mx-auto flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-300" />
              </div>
              <div className="text-white font-semibold">SSL Gratuito</div>
              <div className="text-white/80 text-sm">Certificado incluído</div>
            </div>
            
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-white/20 rounded-xl mx-auto flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-300" />
              </div>
              <div className="text-white font-semibold">Suporte 24/7</div>
              <div className="text-white/80 text-sm">Assistência especializada</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

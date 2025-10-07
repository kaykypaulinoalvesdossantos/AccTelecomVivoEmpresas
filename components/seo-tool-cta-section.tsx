"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Mail } from "lucide-react"

export default function SeoToolCtaSection() {
  return (
    <section className="py-24 bg-gradient-to-r from-[#660099] to-[#EB3C7D] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#660099]/90 to-[#EB3C7D]/90"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8">
          {/* Title */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Pronto para melhorar o posicionamento do seu site?
            </h2>
            <p className="text-white/90 text-xl leading-relaxed max-w-3xl mx-auto">
              Comece hoje mesmo a otimizar seu site para os mecanismos de busca e aumente sua visibilidade online
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-[#660099] hover:bg-white/90 cursor-pointer px-8 py-4"
            >
              <Phone className="w-5 h-5 mr-2" />
              Ligue Agora
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-[#660099] cursor-pointer bg-transparent px-8 py-4"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-[#660099] cursor-pointer bg-transparent px-8 py-4"
            >
              <Mail className="w-5 h-5 mr-2" />
              E-mail
            </Button>
          </div>

          {/* Contact Info */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 text-white">
              <div className="text-center space-y-2">
                <Phone className="w-6 h-6 mx-auto text-white/80" />
                <div className="text-sm text-white/80">Telefone</div>
                <div className="font-semibold">(11) 2362-9665</div>
              </div>
              <div className="text-center space-y-2">
                <Mail className="w-6 h-6 mx-auto text-white/80" />
                <div className="text-sm text-white/80">E-mail</div>
                <div className="font-semibold">contato@acctelecom.com.br</div>
              </div>
            </div>
          </div>

          {/* Guarantee */}
          <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-6 max-w-lg mx-auto">
            <div className="text-center space-y-3">
              <div className="text-white font-semibold text-lg">
                Garantia de 30 dias
              </div>
              <p className="text-white/90 text-sm">
                Teste nossa ferramenta sem compromisso. Se não ficar satisfeito, devolvemos seu dinheiro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

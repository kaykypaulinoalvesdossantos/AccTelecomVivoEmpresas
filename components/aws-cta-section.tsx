"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Users, Clock, CheckCircle } from "lucide-react"

export function AWSCTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-600 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tl from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-500 text-white border-orange-400 hover:bg-orange-600">
            <Shield className="w-4 h-4 mr-2" />
            Migração Segura
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Migre para AWS com Segurança Total
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Nossa equipe de especialistas AWS certificados cuida de toda a migração e suporte, 
            garantindo uma transição suave e sem riscos para sua empresa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Especialistas Certificados</h3>
            <p className="text-purple-200">Equipe dedicada com certificações AWS</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Migração Segura</h3>
            <p className="text-purple-200">Processo sem riscos e com backup completo</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Suporte 24/7</h3>
            <p className="text-purple-200">Atendimento contínuo durante toda a jornada</p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-6">Pronto para começar sua jornada na AWS?</h3>
          <p className="text-xl mb-8 text-white/90">
            Solicite uma consultoria gratuita e descubra como a AWS pode transformar sua empresa
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8" asChild>
              <a href="https://wa.me/551123629665?text=Olá! Gostaria de agendar uma consultoria sobre AWS" target="_blank" rel="noopener noreferrer">
                Agendar Consultoria
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent" asChild>
              <a href="https://wa.me/551123629665?text=Olá! Gostaria de calcular os custos do AWS" target="_blank" rel="noopener noreferrer">
                Calcular Custos
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-purple-200">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4" />
              <span>Consultoria gratuita</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4" />
              <span>Sem compromisso</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4" />
              <span>Resposta em 24h</span>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-purple-200 mb-4">
            Precisa de mais informações? Fale com nossos especialistas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent" asChild>
              <a href="https://wa.me/551123629665?text=Olá! Gostaria de falar via WhatsApp sobre AWS" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent" asChild>
              <a href="tel:+551123629665">
                Telefone
              </a>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent" asChild>
              <a href="mailto:sac@acctelecom.com.br?subject=Consulta sobre AWS Cloud">
                Email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

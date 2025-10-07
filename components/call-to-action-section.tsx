"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Phone, MessageCircle, Calendar, CheckCircle, Zap, Shield, Clock } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Instalação Rápida",
    description: "Instalação em até 48h",
  },
  {
    icon: Shield,
    title: "Segurança Total",
    description: "Proteção avançada inclusa",
  },
  {
    icon: Clock,
    title: "Suporte 24/7",
    description: "Atendimento especializado",
  },
]

const contactOptions = [
  {
    icon: Phone,
    title: "Ligue Agora",
    description: "(11) 2362-9665",
    subtitle: "Atendimento gratuito",
    action: "Ligar",
    primary: true,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Business",
    description: "Chat direto com especialista",
    subtitle: "Resposta imediata",
    action: "Conversar",
    primary: false,
  },
  {
    icon: Calendar,
    title: "Agendar Reunião",
    description: "Consultoria personalizada",
    subtitle: "Online ou presencial",
    action: "Agendar",
    primary: false,
  },
]

export function CallToActionSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Main CTA */}
        <div className="relative overflow-hidden rounded-3xl mb-20">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#660099] to-[#EB3C7D]" />
          <div className="absolute inset-0 bg-black/10" />

          {/* Geometric patterns */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-20 w-32 h-32 border border-white/30 rounded-full" />
            <div className="absolute bottom-20 left-20 w-24 h-24 border border-white/20 rounded-lg rotate-45" />
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full" />
          </div>

          <div className="relative px-12 py-20 text-center text-white">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              <CheckCircle className="w-4 h-4 mr-2" />
              Proposta Gratuita e Sem Compromisso
            </Badge>

            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Transforme sua empresa
                              <span className="block bg-gradient-to-r from-[#660099] to-[#EB3C7D] bg-clip-text text-transparent">
                hoje mesmo!
              </span>
            </h2>

            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              Não perca mais tempo com conectividade lenta ou instável. Solicite uma proposta personalizada e descubra
              como a ACC Telecom pode acelerar o crescimento do seu negócio.
            </p>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center justify-center space-x-3">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">{feature.title}</div>
                    <div className="text-sm text-white/80">{feature.description}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#660099] hover:bg-white/90 font-semibold text-lg px-8 py-4">
                Solicitar Proposta Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 font-semibold text-lg px-8 py-4 bg-transparent"
              >
                Ver Demonstração
              </Button>
            </div>

            <p className="text-sm text-white/70 mt-6">
              ✓ Sem taxas de instalação • ✓ Sem fidelidade • ✓ Suporte especializado incluso
            </p>
          </div>
        </div>

        {/* Contact Options */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Escolha como prefere falar conosco</h3>
          <p className="text-xl text-gray-600 mb-12">
            Nossa equipe de especialistas está pronta para atender sua empresa
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {contactOptions.map((option, index) => (
              <div
                key={index}
                className={`professional-card p-8 rounded-2xl border-2 ${
                  option.primary
                    ? "border-[#EB3C7D] bg-gradient-to-br from-[#EB3C7D]/5 to-[#660099]/5"
                    : "border-gray-200 bg-white"
                }`}
              >
                <div className="flex items-center justify-center mb-6">
                  <div
                    className={`p-4 rounded-2xl ${
                      option.primary ? "bg-gradient-to-br from-[#660099] to-[#EB3C7D]" : "bg-gray-100"
                    }`}
                  >
                    <option.icon className={`w-8 h-8 ${option.primary ? "text-white" : "text-gray-600"}`} />
                  </div>
                </div>

                <h4 className="text-xl font-bold text-gray-900 mb-2">{option.title}</h4>
                <p className="text-gray-600 mb-2">{option.description}</p>
                <p className="text-sm text-gray-500 mb-6">{option.subtitle}</p>

                <Button
                  className={`w-full ${
                    option.primary ? "bg-[#EB3C7D] hover:bg-[#EB3C7D]/90" : "bg-[#660099] hover:bg-[#660099]/90"
                  }`}
                >
                  {option.action}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="bg-gray-50 rounded-2xl p-12 text-center">
          <h4 className="text-2xl font-bold text-gray-900 mb-8">Por que mais de 50.000 empresas confiam na ACC Telecom?</h4>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-[#660099] mb-2">20+</div>
              <div className="text-gray-600">Anos no Mercado</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#660099] mb-2">99.9%</div>
              <div className="text-gray-600">SLA Garantido</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#660099] mb-2">24/7</div>
              <div className="text-gray-600">Suporte Técnico</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#660099] mb-2">5.570</div>
              <div className="text-gray-600">Cidades Atendidas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

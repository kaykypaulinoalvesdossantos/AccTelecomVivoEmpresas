"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowRight } from "lucide-react"

export function VivoGestaoContactSection(): React.JSX.Element {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      value: "(11) 2362-9665",
      description: "Fale com nossos especialistas"
    },
    {
      icon: Mail,
      title: "E-mail",
      value: "sac@acctelecom.com.br",
      description: "Envie suas dúvidas por e-mail"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      value: "(11) 2362-9665",
      description: "Atendimento via WhatsApp"
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      value: "Segunda a Sexta, 8h às 18h",
      description: "Exceto feriados"
    }
  ]

  const benefits = [
    "Proposta personalizada para sua empresa",
    "Demonstração gratuita da plataforma",
    "Suporte técnico especializado",
    "Implementação rápida e segura"
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-[#660099] via-[#8B00FF] to-[#EB3C7D] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Solicite uma proposta personalizada e descubra como o Vivo Gestão pode transformar a gestão de dispositivos da sua empresa
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Informações de Contato
            </h3>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      {info.title}
                    </h4>
                    <p className="text-white/90 font-medium mb-1">
                      {info.value}
                    </p>
                    <p className="text-white/70 text-sm">
                      {info.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-white/10 rounded-lg">
              <h4 className="font-semibold text-white mb-3">
                Por que escolher o Vivo Gestão?
              </h4>
              <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2 text-white/90">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Solicite uma Proposta
            </h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/90 font-medium mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                    placeholder="Digite seu nome"
                  />
                </div>
                <div>
                  <label className="block text-white/90 font-medium mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                    placeholder="Nome da empresa"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/90 font-medium mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-white/90 font-medium mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                    placeholder="(11) 2362-9665"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/90 font-medium mb-2">
                  Número de Linhas
                </label>
                <select className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent">
                  <option value="" className="text-gray-800">Selecione uma opção</option>
                  <option value="1-10" className="text-gray-800">1 a 10 linhas</option>
                  <option value="11-50" className="text-gray-800">11 a 50 linhas</option>
                  <option value="51-100" className="text-gray-800">51 a 100 linhas</option>
                  <option value="100+" className="text-gray-800">Mais de 100 linhas</option>
                </select>
              </div>

              <div>
                <label className="block text-white/90 font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent resize-none"
                  placeholder="Conte-nos sobre suas necessidades..."
                ></textarea>
              </div>

              <Button
                className="w-full bg-white text-[#660099] hover:bg-gray-100 font-semibold px-8 py-6 text-lg rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                asChild
              >
                <a
                  href="https://wa.me/5511989150001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  Enviar Solicitação
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </form>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-12">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Pronto para começar?
            </h3>
            <p className="text-white/90 mb-6">
              Nossa equipe está pronta para ajudar você a implementar a solução ideal para sua empresa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5511989150001"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#660099] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Agendar Demonstração
              </a>
              <a
                href="https://wa.me/5511989150001"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#660099] transition-colors duration-300"
              >
                Baixar Apresentação
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

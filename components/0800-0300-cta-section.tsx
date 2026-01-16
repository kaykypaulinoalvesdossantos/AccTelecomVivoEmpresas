"use client"

import React from "react"
import { MessageCircle, ShoppingCart, Phone, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { oitoZeroZeroConfig } from "@/data/0800-0300-data"

export function OitoZeroZeroCtaSection(): React.JSX.Element {
  const { contact } = oitoZeroZeroConfig

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 lg:mb-6">
            Pronto para melhorar a comunicação da sua empresa?
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-purple-100 max-w-4xl mx-auto">
            Entre em contato conosco e descubra como nossos serviços 0800 e 0300 podem transformar o atendimento aos seus clientes.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-12">
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20 cursor-pointer"
          >
            <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-2xl mb-4 sm:mb-6 mx-auto group-hover:bg-white/30 transition-colors">
              <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">WhatsApp</h3>
            <p className="text-purple-100 mb-4 sm:mb-6 text-sm sm:text-base">Atendimento rápido e personalizado via WhatsApp</p>
            <Button asChild className="w-full cursor-pointer bg-white text-purple-900 hover:bg-purple-50 font-semibold text-sm sm:text-base border-0">
              <span>Falar no WhatsApp</span>
            </Button>
          </a>

          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20 cursor-pointer"
          >
            <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-2xl mb-4 sm:mb-6 mx-auto group-hover:bg-white/30 transition-colors">
              <ShoppingCart className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">Comprar no Chat</h3>
            <p className="text-purple-100 mb-4 sm:mb-6 text-sm sm:text-base">Contrate diretamente pelo chat online</p>
            <Button asChild className="w-full cursor-pointer bg-white text-purple-900 hover:bg-purple-50 font-semibold text-sm sm:text-base border-0">
              <span>Comprar Agora</span>
            </Button>
          </a>
        </div>

        {/* Contact Form */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/20 mb-12">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-8">
              Vamos Conversar?
            </h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-white font-medium mb-2 text-sm sm:text-base">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2 text-sm sm:text-base">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2 text-sm sm:text-base">
                  Telefone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                  placeholder="(11) 2362-9665"
                />
              </div>

              <div className="text-center">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-white text-purple-900 hover:bg-purple-50 font-bold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer border-0"
                >
                  Enviar
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Additional Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-12">
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-2xl mb-4 mx-auto">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold text-white mb-2">Telefone</h4>
            <p className="text-purple-100 text-sm sm:text-base">{contact.phone}</p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-2xl mb-4 mx-auto">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold text-white mb-2">E-mail</h4>
            <p className="text-purple-100 text-sm sm:text-base">{contact.email}</p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-2xl mb-4 mx-auto">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold text-white mb-2">WhatsApp</h4>
            <p className="text-purple-100 text-sm sm:text-base">+55 11 98915-0001</p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-white text-purple-900 hover:bg-purple-50 font-bold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer border-0"
          >
            <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
              Solicitar Proposta Personalizada
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>

        {/* Legal Info */}
        <div className="mt-12 text-center">
          <p className="text-purple-200 text-xs sm:text-sm">
            * Valores e condições sujeitos a alteração sem aviso prévio. Consulte condições comerciais específicas.
          </p>
          <p className="text-purple-200 text-xs sm:text-sm mt-2">
            ** Serviços disponíveis mediante contratação e aprovação de crédito.
          </p>
        </div>
      </div>
    </section>
  )
}

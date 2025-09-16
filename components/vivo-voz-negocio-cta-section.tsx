"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, ShoppingCart } from "lucide-react"
import { vivoVozNegocioConfig } from "@/data/vivo-voz-negocio-data"

export function VivoVozNegocioCTASection() {
  const { contact } = vivoVozNegocioConfig

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 lg:mb-6">
            Pronto para revolucionar a comunicação da sua empresa?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-purple-100 max-w-3xl mx-auto">
            Fale com nossos especialistas e implemente o Vivo Voz Negócio na sua empresa hoje mesmo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-12">
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20"
          >
            <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-2xl mb-4 sm:mb-6 mx-auto group-hover:bg-white/30 transition-colors">
              <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">WhatsApp</h3>
            <p className="text-purple-100 mb-4 sm:mb-6 text-sm sm:text-base">Atendimento rápido e personalizado via WhatsApp</p>
            <Button className="w-full cursor-pointer bg-white text-purple-900 hover:bg-purple-50 font-semibold text-sm sm:text-base">
              Falar no WhatsApp
            </Button>
          </a>

          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20"
          >
            <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-2xl mb-4 sm:mb-6 mx-auto group-hover:bg-white/30 transition-colors">
              <ShoppingCart className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">Comprar no Chat</h3>
            <p className="text-purple-100 mb-4 sm:mb-6 text-sm sm:text-base">Contrate diretamente pelo chat online</p>
            <Button className="w-full cursor-pointer bg-white text-purple-900 hover:bg-purple-50 font-semibold text-sm sm:text-base">
              Comprar Agora
            </Button>
          </a>
        </div>

        {/* Implementation Process */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-4">Processo de Implementação</h3>
            <p className="text-xs sm:text-sm lg:text-base text-purple-100 max-w-3xl mx-auto">
              Implementação rápida e sem complicações em apenas 3 passos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">1</span>
              </div>
              <h4 className="text-sm sm:text-base font-semibold mb-2">Configuração</h4>
              <p className="text-xs sm:text-sm text-purple-100">Configuração inicial e personalização do sistema</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">2</span>
              </div>
              <h4 className="text-sm sm:text-base font-semibold mb-2">Treinamento</h4>
              <p className="text-xs sm:text-sm text-purple-100">Treinamento completo da sua equipe</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">3</span>
              </div>
              <h4 className="text-sm sm:text-base font-semibold mb-2">Ativação</h4>
              <p className="text-xs sm:text-sm text-purple-100">Sistema ativo e funcionando perfeitamente</p>
            </div>
          </div>
        </div>

        {/* Legal Information */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20">
          <div className="text-center space-y-4">
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold">Informações Importantes</h3>
            <div className="text-xs sm:text-sm lg:text-base text-purple-100 space-y-2 max-w-4xl mx-auto">
              <p>
                <strong>Implementação:</strong> Configuração inicial, treinamento e suporte técnico incluídos em todos os planos.
              </p>
              <p>
                <strong>Integração:</strong> Compatibilidade com principais sistemas de CRM, ERP e ferramentas de produtividade.
              </p>
              <p>
                <strong>Suporte:</strong> Atendimento técnico especializado com SLA diferenciado por plano.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-white text-purple-900 hover:bg-purple-50 font-bold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
              Compre pelo WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Users, CheckCircle, Star } from "lucide-react"

export function AWSDifferentialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
                <Star className="w-4 h-4 mr-2" />
                Diferenciais Exclusivos
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Diferenciais Vivo Empresas
              </h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Parceria global de sucesso entre Telefônica e AWS
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Aproveite a força de uma parceria estratégica global que combina a expertise em telecomunicações 
                    da Telefônica com a liderança em cloud computing da AWS.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Time de especialistas certificados para apoio no desenho de soluções e suporte técnico
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Nossa equipe de especialistas AWS certificados está pronta para ajudar no desenho de soluções 
                    personalizadas e oferecer suporte técnico especializado durante toda a jornada na nuvem.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <MessageCircle className="w-6 h-6 text-purple-600" />
                <h4 className="text-lg font-semibold text-gray-900">Suporte Especializado</h4>
              </div>
              <p className="text-gray-600">
                Atendimento prioritário com consultores dedicados que entendem as necessidades específicas 
                da sua empresa e podem ajudar na migração e otimização dos serviços AWS.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Especialistas Certificados</h3>
                      <p className="text-gray-600">Equipe dedicada e certificada AWS</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Suporte 24/7</h3>
                      <p className="text-gray-600">Atendimento prioritário para empresas</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Parceria Global</h3>
                      <p className="text-gray-600">Telefônica + AWS = Sucesso garantido</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-cyan-600/20 rounded-full blur-3xl" />
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Pronto para começar sua jornada na AWS?</h3>
            <p className="text-xl mb-8 text-white/90">
              Nossa equipe de especialistas está pronta para ajudar sua empresa a migrar e otimizar seus serviços na nuvem AWS
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300" onClick={() => window.open('https://wa.me/551123629665?text=Olá! Gostaria de falar com um especialista AWS', '_blank')}>
                Falar com Especialista
              </button>
              <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-all duration-300" onClick={() => window.open('https://wa.me/551123629665?text=Olá! Gostaria de agendar uma consultoria sobre AWS', '_blank')}>
                Agendar Consultoria
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

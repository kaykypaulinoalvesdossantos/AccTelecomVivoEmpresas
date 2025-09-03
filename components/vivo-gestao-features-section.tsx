"use client"

import React from "react"
import { 
  Wifi, 
  Phone, 
  MessageSquare, 
  Shield, 
  BarChart3, 
  Clock, 
  MapPin, 
  Settings,
  Eye,
  Lock,
  Smartphone,
  Users
} from "lucide-react"

export function VivoGestaoFeaturesSection(): React.JSX.Element {
  const features = [
    {
      category: "Controle de Dados",
      items: [
        {
          icon: Wifi,
          title: "Monitoramento de Consumo",
          description: "Acompanhe o uso de dados de cada linha em tempo real"
        },
        {
          icon: Settings,
          title: "Limites Personalizados",
          description: "Defina limites de uso específicos por linha ou grupo"
        },
        {
          icon: Lock,
          title: "Bloqueio de Apps",
          description: "Bloqueie aplicativos específicos para controle de produtividade"
        }
      ]
    },
    {
      category: "Gestão de Voz",
      items: [
        {
          icon: Phone,
          title: "Controle de Chamadas",
          description: "Monitore e controle as chamadas de voz dos colaboradores"
        },
        {
          icon: Clock,
          title: "Horários Permitidos",
          description: "Defina horários específicos para uso de voz"
        },
        {
          icon: Shield,
          title: "Bloqueio de Números",
          description: "Bloqueie números específicos para controle de custos"
        }
      ]
    },
    {
      category: "Segurança e Rastreamento",
      items: [
        {
          icon: MessageSquare,
          title: "Bloqueio de SMS",
          description: "Controle o envio e recebimento de mensagens"
        },
        {
          icon: MapPin,
          title: "Rastreamento GPS",
          description: "Localize dispositivos em tempo real"
        },
        {
          icon: Eye,
          title: "Filtros de Navegação",
          description: "Bloqueie sites e categorias de conteúdo"
        }
      ]
    },
    {
      category: "Relatórios e Gestão",
      items: [
        {
          icon: BarChart3,
          title: "Relatórios Detalhados",
          description: "Relatórios completos de uso e consumo"
        },
        {
          icon: Users,
          title: "Gestão por Grupos",
          description: "Organize linhas em grupos para melhor controle"
        },
        {
          icon: Smartphone,
          title: "Painel Online",
          description: "Acesse todas as funcionalidades via web"
        }
      ]
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-[#660099]/10 to-[#EB3C7D]/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-[#EB3C7D]/10 to-[#660099]/10 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Recursos do Vivo Gestão
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conheça todas as funcionalidades que fazem do Vivo Gestão a solução completa para gestão de dispositivos móveis
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{categoryIndex + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {category.category}
                </h3>
              </div>

              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-4 p-4 bg-gray-50/50 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#660099]/20 to-[#EB3C7D]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-[#660099]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Feature highlights */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gradient-to-r from-[#660099]/10 to-[#8B00FF]/10 rounded-xl">
            <div className="w-16 h-16 bg-gradient-to-r from-[#660099] to-[#8B00FF] rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Tempo Real
            </h3>
            <p className="text-gray-600 text-sm">
              Monitoramento e controle em tempo real de todos os dispositivos
            </p>
          </div>

          <div className="text-center p-6 bg-gradient-to-r from-[#8B00FF]/10 to-[#EB3C7D]/10 rounded-xl">
            <div className="w-16 h-16 bg-gradient-to-r from-[#8B00FF] to-[#EB3C7D] rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Segurança Total
            </h3>
            <p className="text-gray-600 text-sm">
              Proteção completa com filtros e bloqueios avançados
            </p>
          </div>

          <div className="text-center p-6 bg-gradient-to-r from-[#EB3C7D]/10 to-[#660099]/10 rounded-xl">
            <div className="w-16 h-16 bg-gradient-to-r from-[#EB3C7D] to-[#660099] rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Relatórios Completos
            </h3>
            <p className="text-gray-600 text-sm">
              Análises detalhadas para tomada de decisões estratégicas
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

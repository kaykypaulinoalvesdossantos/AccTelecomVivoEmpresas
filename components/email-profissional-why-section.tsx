"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, AtSign, Monitor, Mail, Users, Calendar, Edit, Download, Smartphone } from "lucide-react"

export function EmailProfissionalWhySection() {
  const benefits = [
    {
      icon: Shield,
      title: "E-mail que se adapta e é configurável por organização e usuário",
      description: "Personalize completamente sua experiência de e-mail conforme as necessidades da sua empresa"
    },
    {
      icon: AtSign,
      title: "Endereço de e-mail profissional com seu próprio domínio",
      description: "Use seu próprio domínio para criar endereços profissionais que transmitem credibilidade"
    },
    {
      icon: Monitor,
      title: "Controle o que e quem pode enviar e receber e-mails",
      description: "Gerencie permissões e controles de acesso para maior segurança e organização"
    },
    {
      icon: Mail,
      title: "Ampliação de espaço de armazenamento para caixas de E-mail",
      description: "Escolha o espaço ideal para suas necessidades, desde 1GB até 50GB por conta"
    },
    {
      icon: Users,
      title: "Acesso via POP3, IMAP4, SMTP, webmail e mobile",
      description: "Acesse seus e-mails de qualquer lugar, em qualquer dispositivo"
    },
    {
      icon: Calendar,
      title: "Calendários, tarefas e contatos compartilhados e colaborativos",
      description: "Colabore em tempo real com sua equipe através de calendários e tarefas compartilhadas"
    },
    {
      icon: Edit,
      title: "Edição de documentos compatíveis com o Office",
      description: "Crie e edite documentos diretamente no webmail, compatível com Microsoft Office"
    },
    {
      icon: Shield,
      title: "Proteção contra vírus e spam de 400K para outras plataformas",
      description: "Segurança avançada com proteção contra vírus e spam superior a outras plataformas"
    },
    {
      icon: Download,
      title: "Backup de todas as mensagens e informações",
      description: "Seus dados sempre seguros com backup automático de todas as mensagens"
    },
    {
      icon: Smartphone,
      title: "Até 50 servidores com balanceamento de carga e armazenamento em cluster",
      description: "Infraestrutura robusta com múltiplos servidores para máxima disponibilidade"
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#660099]/10 text-[#660099] border-[#660099]/20">
            <Shield className="w-4 h-4 mr-2" />
            Vantagens Competitivas
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Por que contratar um serviço de e-mail
            <span className="block text-[#660099]">corporativo</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra as vantagens de ter um e-mail profissional para sua empresa 
            e como isso pode transformar sua comunicação corporativa.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:bg-gray-50">
              <CardContent className="p-6 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-[#660099] to-[#EB3C7D]">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-[#660099] to-[#EB3C7D] rounded-3xl p-12 text-white">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-6">E-mail Profissional Completo</h3>
              <div className="grid md:grid-cols-5 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Configurável</h4>
                  <p className="text-white/90">Por organização</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <AtSign className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Domínio Próprio</h4>
                  <p className="text-white/90">Profissional</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Monitor className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Controle Total</h4>
                  <p className="text-white/90">Permissões</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Armazenamento</h4>
                  <p className="text-white/90">Escalável</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Multiplataforma</h4>
                  <p className="text-white/90">Acesso total</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

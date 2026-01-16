"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Mail, MessageSquare } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    employees: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Traduzir assunto para português
    const subjectLabels: { [key: string]: string } = {
      "planos-moveis": "Planos Móveis",
      "internet-fibra": "Internet Fibra",
      "solucoes-digitais": "Soluções Digitais",
      "dispositivos": "Dispositivos",
      "suporte": "Suporte Técnico",
      "outros": "Outros"
    }

    // Criar mensagem formatada para WhatsApp
    let whatsappMessage = `*Nova Solicitação de Contato*%0A%0A`
    whatsappMessage += `👤 *Nome:* ${formData.name}%0A`
    whatsappMessage += `📧 *E-mail:* ${formData.email}%0A`
    whatsappMessage += `🏢 *Empresa:* ${formData.company}%0A`

    if (formData.employees) {
      whatsappMessage += `👥 *Funcionários:* ${formData.employees}%0A`
    }

    if (formData.subject) {
      const subjectLabel = subjectLabels[formData.subject] || formData.subject
      whatsappMessage += `📋 *Assunto:* ${subjectLabel}%0A`
    }

    if (formData.message) {
      whatsappMessage += `%0A💬 *Mensagem:*%0A${formData.message}`
    }

    // Abrir WhatsApp com a mensagem formatada
    window.open(`https://wa.me/5511989150001?text=${whatsappMessage}`, '_blank')

    // Limpar formulário após envio
    setFormData({
      name: "",
      email: "",
      company: "",
      employees: "",
      subject: "",
      message: "",
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "E-mail Comercial",
      description: "sac@acctelecom.com.br",
      subtitle: "Resposta em até 24h",
    },
    {
      icon: MessageSquare,
      title: "Chat Online",
      description: "Atendimento imediato",
      subtitle: "Segunda a sexta, 8h às 18h",
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      description: "Segunda a sexta: 8h às 18h",
      subtitle: "Sábados: 8h às 14h",
    },
    {
      icon: MapPin,
      title: "Cobertura",
      description: "Todo o território nacional",
      subtitle: "Mais de 2.500 cidades",
    },
  ]

  return (
    <div className="space-y-16">
      {/* Header with Gradient Background */}
      <div className="relative overflow-hidden rounded-3xl mb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-[#660099] to-[#EB3C7D]" />
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative px-8 py-16 text-center text-white">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
            <MessageSquare className="w-4 h-4 mr-2" />
            Fale Conosco
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Vamos Conversar Sobre Sua Empresa
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Nossa equipe de especialistas está pronta para encontrar a melhor solução de conectividade e tecnologia para o seu negócio.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <Card className="shadow-xl border-0">
          <CardHeader className="space-y-2 pb-6">
            <CardTitle className="text-2xl">Solicite um Contato</CardTitle>
            <CardDescription className="text-base">
              Preencha o formulário e nossa equipe entrará em contato em até 24 horas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="Seu nome completo"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail Corporativo *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    placeholder="seuemail@empresa.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company">Nome da Empresa *</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    required
                    placeholder="Nome da sua empresa"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="employees">Número de Funcionários</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, employees: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-10">1 a 10 funcionários</SelectItem>
                      <SelectItem value="11-50">11 a 50 funcionários</SelectItem>
                      <SelectItem value="51-200">51 a 200 funcionários</SelectItem>
                      <SelectItem value="201-500">201 a 500 funcionários</SelectItem>
                      <SelectItem value="500+">Mais de 500 funcionários</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Assunto</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, subject: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o assunto" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="planos-moveis">Planos Móveis</SelectItem>
                    <SelectItem value="internet-fibra">Internet Fibra</SelectItem>
                    <SelectItem value="solucoes-digitais">Soluções Digitais</SelectItem>
                    <SelectItem value="dispositivos">Dispositivos</SelectItem>
                    <SelectItem value="suporte">Suporte Técnico</SelectItem>
                    <SelectItem value="outros">Outros</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  placeholder="Conte-nos mais sobre suas necessidades..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#660099] to-[#EB3C7D] hover:from-[#7a0bb3] hover:to-[#ff1a75] text-white font-semibold py-6 text-lg"
              >
                Enviar Solicitação
                <MessageSquare className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Outras Formas de Contato</h2>
            <div className="grid gap-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-[#660099]">
                    <CardContent className="flex items-start space-x-4 p-6">
                      <div className="p-3 bg-gradient-to-br from-[#660099] to-[#EB3C7D] rounded-xl">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1 text-lg">{info.title}</h3>
                        <p className="text-foreground mb-1 font-medium">{info.description}</p>
                        <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* FAQ Preview */}
          <Card className="shadow-lg border-0 bg-gradient-to-br from-gray-50 to-white">
            <CardHeader>
              <CardTitle className="text-xl">Dúvidas Frequentes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="pb-4 border-b border-gray-200 last:border-0 last:pb-0">
                <h4 className="font-semibold text-foreground mb-2 text-base">
                  Qual o prazo para instalação da internet fibra?
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A instalação é realizada em até 7 dias úteis após a aprovação do pedido.
                </p>
              </div>
              <div className="pb-4 border-b border-gray-200 last:border-0 last:pb-0">
                <h4 className="font-semibold text-foreground mb-2 text-base">
                  Posso migrar meus números atuais?
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Sim, oferecemos portabilidade gratuita para todos os números da sua empresa.
                </p>
              </div>
              <div className="pb-4 border-b border-gray-200 last:border-0 last:pb-0">
                <h4 className="font-semibold text-foreground mb-2 text-base">
                  Há taxa de cancelamento?
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Nossos planos não possuem fidelidade, você pode cancelar quando quiser.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

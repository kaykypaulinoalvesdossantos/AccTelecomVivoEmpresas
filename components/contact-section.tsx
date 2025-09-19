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
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "E-mail Comercial",
      description: "contato@acctelecom.com.br",
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
      {/* Header */}
      <div className="text-center">
        <Badge className="mb-4">Fale Conosco</Badge>
        <h1 className="text-4xl font-bold text-foreground mb-6">Vamos Conversar Sobre Sua Empresa</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Nossa equipe de especialistas está pronta para encontrar a melhor solução de conectividade e tecnologia para o
          seu negócio.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Solicite um Contato</CardTitle>
            <CardDescription>Preencha o formulário e nossa equipe entrará em contato em até 24 horas</CardDescription>
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
                  rows={4}
                />
              </div>

              <Button type="submit" className="w-full">
                Enviar Solicitação
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Outras Formas de Contato</h2>
            <div className="grid gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <Card key={index}>
                    <CardContent className="flex items-start space-x-4 p-6">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        <p className="text-foreground mb-1">{info.description}</p>
                        <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* FAQ Preview */}
          <Card>
            <CardHeader>
              <CardTitle>Dúvidas Frequentes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium text-foreground mb-2">Qual o prazo para instalação da internet fibra?</h4>
                <p className="text-sm text-muted-foreground">
                  A instalação é realizada em até 7 dias úteis após a aprovação do pedido.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Posso migrar meus números atuais?</h4>
                <p className="text-sm text-muted-foreground">
                  Sim, oferecemos portabilidade gratuita para todos os números da sua empresa.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Há taxa de cancelamento?</h4>
                <p className="text-sm text-muted-foreground">
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

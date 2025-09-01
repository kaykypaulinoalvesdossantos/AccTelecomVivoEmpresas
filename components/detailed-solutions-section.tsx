"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Cloud, Shield, Database, Mail, Phone, ArrowRight, Check } from "lucide-react"

export function DetailedSolutionsSection() {
  const cloudSolutions = [
    {
      icon: Cloud,
      title: "Microsoft 365",
      description: "Suite completa de produtividade com Word, Excel, PowerPoint e Teams",
      features: ["1TB de armazenamento", "Colaboração em tempo real", "Segurança avançada", "Suporte 24/7"],
      price: "R$ 32,00",
      period: "/usuário/mês",
      popular: true,
    },
    {
      icon: Database,
      title: "Google Workspace",
      description: "Ferramentas do Google para empresas com Gmail, Drive e Meet",
      features: ["Email profissional", "Videoconferências HD", "Compartilhamento seguro", "Backup automático"],
      price: "R$ 28,00",
      period: "/usuário/mês",
      popular: false,
    },
    {
      icon: Shield,
      title: "Sistema ERP",
      description: "Gestão empresarial integrada para otimizar processos",
      features: ["Controle financeiro", "Gestão de estoque", "Relatórios avançados", "Integração fiscal"],
      price: "R$ 89,00",
      period: "/usuário/mês",
      popular: false,
    },
  ]

  const securitySolutions = [
    {
      icon: Shield,
      title: "Segurança Gerenciada",
      description: "Proteção completa contra ameaças digitais",
      features: ["Monitoramento 24/7", "Firewall avançado", "Antivírus empresarial", "Backup em nuvem"],
      price: "R$ 150,00",
      period: "/mês",
      popular: true,
    },
    {
      icon: Database,
      title: "Backup em Nuvem",
      description: "Proteção total dos seus dados empresariais",
      features: ["Backup automático", "Recuperação rápida", "Criptografia avançada", "Acesso remoto"],
      price: "R$ 89,00",
      period: "/mês",
      popular: false,
    },
  ]

  const communicationSolutions = [
    {
      icon: Phone,
      title: "PABX em Nuvem",
      description: "Sistema telefônico moderno e flexível",
      features: ["Ramais ilimitados", "Gravação de chamadas", "URA inteligente", "Relatórios detalhados"],
      price: "R$ 45,00",
      period: "/ramal/mês",
      popular: true,
    },
    {
      icon: Mail,
      title: "E-mail Profissional",
      description: "Comunicação empresarial segura e confiável",
      features: ["Domínio personalizado", "Anti-spam avançado", "Sincronização multi-device", "Suporte técnico"],
      price: "R$ 15,00",
      period: "/caixa/mês",
      popular: false,
    },
  ]

  const SolutionCard = ({ solution }: { solution: any }) => (
    <Card className="relative h-full hover:shadow-xl transition-all duration-300 group">
      {solution.popular && (
        <Badge className="absolute -top-2 left-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
          Mais Popular
        </Badge>
      )}
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 group-hover:from-purple-200 group-hover:to-pink-200 transition-colors">
            <solution.icon className="h-6 w-6 text-purple-600" />
          </div>
          <CardTitle className="text-xl">{solution.title}</CardTitle>
        </div>
        <CardDescription className="text-base leading-relaxed">{solution.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <ul className="space-y-2">
          {solution.features.map((feature: string, index: number) => (
            <li key={index} className="flex items-center gap-2 text-sm">
              <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="space-y-4">
          <div className="text-center py-4 border-t">
            <div className="text-3xl font-bold text-purple-900">
              {solution.price}
              <span className="text-lg font-normal text-gray-600">{solution.period}</span>
            </div>
          </div>

          <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold">
            Contratar Agora
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance">
            Soluções Completas para sua{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Transformação Digital
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Descubra nossas soluções especializadas para cada área do seu negócio
          </p>
        </div>

        <Tabs defaultValue="cloud" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12 bg-white shadow-sm">
            <TabsTrigger value="cloud" className="text-base font-semibold">
              <Cloud className="mr-2 h-5 w-5" />
              Cloud & Produtividade
            </TabsTrigger>
            <TabsTrigger value="security" className="text-base font-semibold">
              <Shield className="mr-2 h-5 w-5" />
              Segurança
            </TabsTrigger>
            <TabsTrigger value="communication" className="text-base font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              Comunicação
            </TabsTrigger>
          </TabsList>

          <TabsContent value="cloud" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cloudSolutions.map((solution, index) => (
                <SolutionCard key={index} solution={solution} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="security" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {securitySolutions.map((solution, index) => (
                <SolutionCard key={index} solution={solution} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="communication" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {communicationSolutions.map((solution, index) => (
                <SolutionCard key={index} solution={solution} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

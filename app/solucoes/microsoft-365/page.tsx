import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Users, Shield, Cloud, Zap, ArrowRight, Download, Mail, FileText, Video } from "lucide-react"

export default function Microsoft365Page() {
  const plans = [
    {
      name: "Business Basic",
      price: "R$ 22,00",
      originalPrice: "R$ 32,00",
      period: "/usuário/mês",
      description: "Essencial para pequenas empresas",
      features: [
        "Versões web e móveis do Office",
        "1 TB de armazenamento OneDrive",
        "Microsoft Teams",
        "Exchange Online 50GB",
        "SharePoint Online",
        "Suporte 24/7",
      ],
      popular: false,
      color: "from-vivo-mint to-vivo-lime",
    },
    {
      name: "Business Standard",
      price: "R$ 42,50",
      originalPrice: "R$ 62,50",
      period: "/usuário/mês",
      description: "Completo para empresas em crescimento",
      features: [
        "Aplicativos Office completos",
        "1 TB de armazenamento OneDrive",
        "Microsoft Teams Premium",
        "Exchange Online 50GB",
        "SharePoint e OneDrive",
        "Bookings e Forms",
        "Suporte premium 24/7",
      ],
      popular: true,
      color: "from-vivo-purple to-vivo-lilac",
    },
    {
      name: "Business Premium",
      price: "R$ 89,00",
      originalPrice: "R$ 119,00",
      period: "/usuário/mês",
      description: "Máxima segurança e produtividade",
      features: [
        "Tudo do Business Standard",
        "Microsoft Defender",
        "Azure Information Protection",
        "Intune para gerenciamento",
        "Advanced Threat Protection",
        "Compliance e eDiscovery",
        "Suporte prioritário",
      ],
      popular: false,
      color: "from-vivo-magenta to-vivo-pink",
    },
  ]

  const applications = [
    { name: "Word", icon: FileText, description: "Editor de documentos profissional" },
    { name: "Excel", icon: FileText, description: "Planilhas e análise de dados" },
    { name: "PowerPoint", icon: FileText, description: "Apresentações impactantes" },
    { name: "Outlook", icon: Mail, description: "E-mail e calendário integrados" },
    { name: "Teams", icon: Video, description: "Colaboração e videoconferência" },
    { name: "OneDrive", icon: Cloud, description: "Armazenamento em nuvem seguro" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Início", href: "/" },
            { label: "Soluções Digitais", href: "/solucoes" },
            { label: "Microsoft 365", href: "/solucoes/microsoft-365" },
          ]}
        />

        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-3xl vivo-gradient-expert text-white mb-16">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative px-8 py-16 md:px-16 md:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                  Solução Microsoft Oficial
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Microsoft 365
                  <span className="block text-vivo-mint">para Empresas</span>
                </h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  Transforme sua empresa com a suíte de produtividade mais completa do mundo. Colaboração, segurança e
                  inovação em uma única plataforma.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-white text-vivo-purple hover:bg-gray-100 font-semibold">
                    Contratar Agora
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 bg-transparent"
                  >
                    Teste Grátis 30 Dias
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  {applications.slice(0, 4).map((app, index) => (
                    <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm">
                      <CardContent className="p-6 text-center">
                        <app.icon className="h-8 w-8 text-white mx-auto mb-2" />
                        <h3 className="font-semibold text-white">{app.name}</h3>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Plans Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Escolha o Plano Ideal</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Planos flexíveis com desconto especial para empresas Vivo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden ${plan.popular ? "ring-2 ring-vivo-purple shadow-2xl scale-105" : "hover:shadow-xl"} transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-vivo-purple text-white text-center py-2 text-sm font-semibold">
                    Mais Popular
                  </div>
                )}
                <CardHeader className={`bg-gradient-to-r ${plan.color} text-white ${plan.popular ? "pt-12" : "pt-6"}`}>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-white/90">{plan.description}</CardDescription>
                  <div className="space-y-2">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-white/80 line-through">{plan.originalPrice}</span>
                    </div>
                    <p className="text-white/90">{plan.period}</p>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-vivo-purple hover:bg-vivo-dark-purple">Contratar Plano</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Applications Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Aplicativos Inclusos</h2>
            <p className="text-xl text-gray-600">Acesso completo a todas as ferramentas Microsoft</p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {applications.map((app, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="bg-gradient-to-r from-vivo-purple to-vivo-lilac rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <app.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{app.name}</h3>
                  <p className="text-sm text-gray-600">{app.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Por que Escolher Microsoft 365?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Segurança Avançada",
                description: "Proteção enterprise contra ameaças cibernéticas",
                color: "text-vivo-purple",
              },
              {
                icon: Cloud,
                title: "Nuvem Confiável",
                description: "99.9% de disponibilidade garantida pela Microsoft",
                color: "text-vivo-lilac",
              },
              {
                icon: Users,
                title: "Colaboração Total",
                description: "Trabalhe em equipe de qualquer lugar do mundo",
                color: "text-vivo-magenta",
              },
              {
                icon: Zap,
                title: "Sempre Atualizado",
                description: "Novos recursos e atualizações automáticas",
                color: "text-vivo-mint",
              },
            ].map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <benefit.icon className={`h-12 w-12 ${benefit.color} mx-auto mb-4`} />
                  <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-vivo-purple to-vivo-pink rounded-3xl p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para Transformar sua Empresa?</h2>
          <p className="text-xl mb-8 text-white/90">
            Fale com nossos especialistas e descubra como o Microsoft 365 pode revolucionar sua produtividade
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-vivo-purple hover:bg-gray-100 font-semibold">
              Falar com Especialista
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              <Download className="mr-2 h-5 w-5" />
              Baixar Catálogo
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

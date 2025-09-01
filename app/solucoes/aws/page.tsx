import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Cloud, Shield, Database, ArrowRight, Server, Globe, Lock } from "lucide-react"

export default function AWSPage() {
  const services = [
    {
      name: "EC2 - Compute",
      icon: Server,
      description: "Servidores virtuais escaláveis na nuvem",
      price: "A partir de R$ 0,08/hora",
      features: ["Instâncias sob demanda", "Auto Scaling", "Load Balancing", "99.99% SLA"],
    },
    {
      name: "S3 - Storage",
      icon: Database,
      description: "Armazenamento de objetos altamente durável",
      price: "R$ 0,12/GB/mês",
      features: ["99.999999999% durabilidade", "Versionamento", "Backup automático", "Acesso global"],
    },
    {
      name: "RDS - Database",
      icon: Database,
      description: "Banco de dados gerenciado e otimizado",
      price: "A partir de R$ 0,15/hora",
      features: ["MySQL, PostgreSQL, Oracle", "Backup automático", "Multi-AZ", "Read Replicas"],
    },
    {
      name: "CloudFront - CDN",
      icon: Globe,
      description: "Rede de entrega de conteúdo global",
      price: "R$ 0,45/GB transferido",
      features: ["200+ pontos de presença", "SSL/TLS gratuito", "DDoS protection", "Cache inteligente"],
    },
  ]

  const plans = [
    {
      name: "Starter",
      price: "R$ 299",
      period: "/mês",
      description: "Ideal para startups e pequenas empresas",
      features: [
        "2 vCPUs, 4GB RAM",
        "100GB SSD Storage",
        "1TB transferência",
        "Suporte básico",
        "Backup diário",
        "SSL gratuito",
      ],
      color: "from-vivo-mint to-vivo-lime",
    },
    {
      name: "Business",
      price: "R$ 899",
      period: "/mês",
      description: "Para empresas em crescimento",
      features: [
        "4 vCPUs, 16GB RAM",
        "500GB SSD Storage",
        "5TB transferência",
        "Suporte 24/7",
        "Backup automático",
        "Load Balancer",
        "Auto Scaling",
      ],
      popular: true,
      color: "from-vivo-purple to-vivo-lilac",
    },
    {
      name: "Enterprise",
      price: "R$ 2.499",
      period: "/mês",
      description: "Máxima performance e segurança",
      features: [
        "8 vCPUs, 32GB RAM",
        "2TB SSD Storage",
        "Transferência ilimitada",
        "Suporte dedicado",
        "Multi-region backup",
        "WAF + Shield Advanced",
        "Compliance SOC/ISO",
      ],
      color: "from-vivo-magenta to-vivo-pink",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Início", href: "/" },
            { label: "Soluções Digitais", href: "/solucoes" },
            { label: "AWS Cloud", href: "/solucoes/aws" },
          ]}
        />

        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-3xl vivo-gradient-premium text-white mb-16">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative px-8 py-16 md:px-16 md:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge className="bg-orange-500 text-white border-orange-400">AWS Partner Oficial</Badge>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Amazon Web Services
                  <span className="block text-vivo-lime">na Vivo</span>
                </h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  A nuvem mais confiável do mundo agora com o suporte especializado da Vivo. Migre, escale e inove com
                  segurança total.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold">
                    Migrar para AWS
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 bg-transparent"
                  >
                    Consultoria Gratuita
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                    <CardContent className="p-6 text-center">
                      <Cloud className="h-8 w-8 text-white mx-auto mb-2" />
                      <h3 className="font-semibold text-white">200+ Serviços</h3>
                    </CardContent>
                  </Card>
                  <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                    <CardContent className="p-6 text-center">
                      <Globe className="h-8 w-8 text-white mx-auto mb-2" />
                      <h3 className="font-semibold text-white">31 Regiões</h3>
                    </CardContent>
                  </Card>
                  <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                    <CardContent className="p-6 text-center">
                      <Shield className="h-8 w-8 text-white mx-auto mb-2" />
                      <h3 className="font-semibold text-white">99.99% SLA</h3>
                    </CardContent>
                  </Card>
                  <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                    <CardContent className="p-6 text-center">
                      <Lock className="h-8 w-8 text-white mx-auto mb-2" />
                      <h3 className="font-semibold text-white">Segurança Total</h3>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Principais Serviços AWS</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluções completas para todas as necessidades da sua empresa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-vivo-purple">{service.price}</span>
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Plans Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pacotes AWS Vivo</h2>
            <p className="text-xl text-gray-600">Soluções pré-configuradas com suporte especializado</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden ${plan.popular ? "ring-2 ring-vivo-purple shadow-2xl scale-105" : "hover:shadow-xl"} transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-vivo-purple text-white text-center py-2 text-sm font-semibold">
                    Mais Escolhido
                  </div>
                )}
                <CardHeader className={`bg-gradient-to-r ${plan.color} text-white ${plan.popular ? "pt-12" : "pt-6"}`}>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-white/90">{plan.description}</CardDescription>
                  <div className="space-y-2">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-3xl font-bold">{plan.price}</span>
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
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">Contratar Pacote</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Migre para AWS com Segurança Total</h2>
          <p className="text-xl mb-8 text-white/90">
            Nossa equipe de especialistas AWS certificados cuida de toda a migração e suporte
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100 font-semibold">
              Agendar Consultoria
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              Calcular Custos
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

import { Breadcrumb } from "@/components/breadcrumb"
import { Satellite, Globe, Shield, Zap, Users, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function InternetSatelitePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Internet", href: "/internet" },
            { label: "Internet Satélite", href: "/internet/satelite" },
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#660099] via-[#8B00FF] to-[#E91E63] text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                  <Satellite className="w-4 h-4 mr-2" />
                  Conectividade Global
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Internet Satélite
                  <span className="block text-3xl lg:text-4xl font-normal mt-2 text-white/90">
                    Conexão onde você estiver
                  </span>
                </h1>
                <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
                  Conectividade de alta velocidade via satélite para empresas em qualquer localização. Ideal para áreas
                  rurais, remotas ou onde a fibra não chega.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-[#660099] hover:bg-gray-100 font-semibold px-8">
                  Ver Planos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  Falar com Especialista
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-3xl" />
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold">99.9%</div>
                    <div className="text-sm text-white/80">Disponibilidade</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">24/7</div>
                    <div className="text-sm text-white/80">Suporte</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">100+</div>
                    <div className="text-sm text-white/80">Mbps</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">Global</div>
                    <div className="text-sm text-white/80">Cobertura</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Planos Internet Satélite</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Escolha o plano ideal para sua empresa com velocidades garantidas e suporte especializado
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Satélite Básico",
                speed: "25 Mbps",
                price: "R$ 299,90",
                originalPrice: "R$ 399,90",
                features: [
                  "25 Mbps de download",
                  "5 Mbps de upload",
                  "Instalação incluída",
                  "Suporte 24/7",
                  "SLA 99.5%",
                  "Equipamento incluso",
                ],
                popular: false,
              },
              {
                name: "Satélite Empresarial",
                speed: "50 Mbps",
                price: "R$ 499,90",
                originalPrice: "R$ 649,90",
                features: [
                  "50 Mbps de download",
                  "10 Mbps de upload",
                  "Instalação incluída",
                  "Suporte prioritário 24/7",
                  "SLA 99.9%",
                  "Equipamento premium",
                  "IP fixo incluso",
                  "Backup 4G",
                ],
                popular: true,
              },
              {
                name: "Satélite Premium",
                speed: "100 Mbps",
                price: "R$ 799,90",
                originalPrice: "R$ 999,90",
                features: [
                  "100 Mbps de download",
                  "20 Mbps de upload",
                  "Instalação especializada",
                  "Suporte dedicado 24/7",
                  "SLA 99.9%",
                  "Equipamento enterprise",
                  "IP fixo incluso",
                  "Backup 4G redundante",
                  "Monitoramento proativo",
                ],
                popular: false,
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.popular ? "ring-2 ring-[#660099] shadow-2xl scale-105" : "shadow-lg"} hover:shadow-xl transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-[#660099] to-[#E91E63] text-white px-4 py-1">
                      Mais Contratado
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-[#660099]">{plan.speed}</div>
                    <div className="space-y-1">
                      <div className="text-3xl font-bold text-gray-900">
                        {plan.price}
                        <span className="text-lg font-normal text-gray-600">/mês</span>
                      </div>
                      <div className="text-sm text-gray-500 line-through">{plan.originalPrice}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${plan.popular ? "bg-gradient-to-r from-[#660099] to-[#E91E63] hover:from-[#7a0bb3] hover:to-[#ff1a75]" : "bg-gray-900 hover:bg-gray-800"} text-white font-semibold py-3`}
                  >
                    Contratar Agora
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Vantagens da Internet Satélite</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conectividade empresarial sem limitações geográficas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Globe,
                title: "Cobertura Global",
                description: "Conectividade em qualquer lugar do mundo, mesmo em áreas remotas",
              },
              {
                icon: Zap,
                title: "Alta Velocidade",
                description: "Velocidades de até 100 Mbps para suas operações empresariais",
              },
              {
                icon: Shield,
                title: "Confiabilidade",
                description: "SLA de até 99.9% com redundância e backup automático",
              },
              {
                icon: Users,
                title: "Suporte Especializado",
                description: "Equipe técnica dedicada 24/7 para empresas",
              },
            ].map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-8 pb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#660099] to-[#E91E63] rounded-full mb-6">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#660099] to-[#E91E63] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Pronto para conectar sua empresa?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Fale com nossos especialistas e descubra como a Internet Satélite pode transformar seu negócio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#660099] hover:bg-gray-100 font-semibold px-8">
              Solicitar Proposta
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              Falar com Especialista
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

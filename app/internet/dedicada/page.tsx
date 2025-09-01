import { Breadcrumb } from "@/components/breadcrumb"
import { Network, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function InternetDedicadaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Internet", href: "/internet" },
            { label: "Internet Dedicada", href: "/internet/dedicada" },
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
                  <Network className="w-4 h-4 mr-2" />
                  Link Dedicado
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Internet Dedicada
                  <span className="block text-3xl lg:text-4xl font-normal mt-2 text-white/90">
                    Velocidade garantida 24/7
                  </span>
                </h1>
                <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
                  Link dedicado exclusivo para sua empresa com velocidade simétrica garantida, SLA premium e suporte
                  especializado para operações críticas.
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
                  Solicitar Proposta
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-3xl" />
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold">99.95%</div>
                    <div className="text-sm text-white/80">SLA Garantido</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">Simétrica</div>
                    <div className="text-sm text-white/80">Up = Down</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">1:1</div>
                    <div className="text-sm text-white/80">Dedicação</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">4h</div>
                    <div className="text-sm text-white/80">Tempo Reparo</div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Planos Internet Dedicada</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Links dedicados com velocidade simétrica garantida e SLA premium para sua empresa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Dedicado 10M",
                speed: "10 Mbps",
                price: "R$ 899,90",
                originalPrice: "R$ 1.199,90",
                features: [
                  "10 Mbps simétrico",
                  "SLA 99.9%",
                  "IP fixo /29",
                  "Suporte 24/7",
                  "Tempo reparo 8h",
                  "Instalação incluída",
                ],
                popular: false,
              },
              {
                name: "Dedicado 20M",
                speed: "20 Mbps",
                price: "R$ 1.499,90",
                originalPrice: "R$ 1.899,90",
                features: [
                  "20 Mbps simétrico",
                  "SLA 99.95%",
                  "IP fixo /28",
                  "Suporte prioritário",
                  "Tempo reparo 4h",
                  "Instalação incluída",
                  "Monitoramento 24/7",
                ],
                popular: true,
              },
              {
                name: "Dedicado 50M",
                speed: "50 Mbps",
                price: "R$ 2.999,90",
                originalPrice: "R$ 3.799,90",
                features: [
                  "50 Mbps simétrico",
                  "SLA 99.95%",
                  "IP fixo /27",
                  "Suporte dedicado",
                  "Tempo reparo 4h",
                  "Instalação especializada",
                  "Monitoramento proativo",
                  "Backup 4G incluso",
                ],
                popular: false,
              },
              {
                name: "Dedicado 100M",
                speed: "100 Mbps",
                price: "R$ 4.999,90",
                originalPrice: "R$ 6.299,90",
                features: [
                  "100 Mbps simétrico",
                  "SLA 99.95%",
                  "IP fixo /26",
                  "Gerente de conta",
                  "Tempo reparo 4h",
                  "Instalação premium",
                  "NOC dedicado",
                  "Backup redundante",
                  "Relatórios mensais",
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
                  <CardTitle className="text-xl font-bold text-gray-900">{plan.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-[#660099]">{plan.speed}</div>
                    <div className="text-sm text-gray-600">Simétrico</div>
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-gray-900">
                        {plan.price}
                        <span className="text-sm font-normal text-gray-600">/mês</span>
                      </div>
                      <div className="text-xs text-gray-500 line-through">{plan.originalPrice}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${plan.popular ? "bg-gradient-to-r from-[#660099] to-[#E91E63] hover:from-[#7a0bb3] hover:to-[#ff1a75]" : "bg-gray-900 hover:bg-gray-800"} text-white font-semibold py-2 text-sm`}
                  >
                    Solicitar Proposta
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Internet Dedicada vs Compartilhada</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entenda as diferenças e escolha a melhor opção para sua empresa
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-[#660099] to-[#E91E63] text-white">
                <CardTitle className="text-2xl font-bold text-center">Internet Dedicada</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {[
                    "Velocidade garantida 24/7",
                    "Link exclusivo para sua empresa",
                    "Velocidade simétrica (upload = download)",
                    "SLA de até 99.95%",
                    "Suporte técnico especializado",
                    "IP fixo incluso",
                    "Ideal para operações críticas",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="bg-gray-600 text-white">
                <CardTitle className="text-2xl font-bold text-center">Internet Compartilhada</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {[
                    "Velocidade pode variar",
                    "Link compartilhado com outros usuários",
                    "Velocidade assimétrica",
                    "SLA básico",
                    "Suporte padrão",
                    "IP dinâmico",
                    "Ideal para uso básico",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="h-5 w-5 rounded-full bg-gray-300 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#660099] to-[#E91E63] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Precisa de um link dedicado?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Fale com nossos especialistas e receba uma proposta personalizada para sua empresa
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

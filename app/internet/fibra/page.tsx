import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Wifi, Zap, Shield, Phone, Router, Gauge } from "lucide-react"

export default function VivoFibraPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Internet", href: "/internet" },
    { label: "Vivo Fibra", href: "/internet/fibra" },
  ]

  const planosFibra = [
    {
      velocidade: "200 Mega",
      preco: "R$ 99,99",
      precoOriginal: "R$ 129,99",
      descricao: "Ideal para casa",
      recursos: ["Wi-Fi 6 grátis", "Instalação grátis", "Suporte 24h"],
    },
    {
      velocidade: "400 Mega",
      preco: "R$ 129,99",
      precoOriginal: "R$ 159,99",
      descricao: "Para família conectada",
      popular: true,
      recursos: ["Wi-Fi 6 grátis", "Instalação grátis", "Suporte 24h", "Repetidor grátis"],
    },
    {
      velocidade: "700 Mega",
      preco: "R$ 159,99",
      precoOriginal: "R$ 199,99",
      descricao: "Para uso intenso",
      recursos: ["Wi-Fi 6 grátis", "Instalação grátis", "Suporte 24h", "2 Repetidores grátis"],
    },
    {
      velocidade: "1 Giga",
      preco: "R$ 199,99",
      precoOriginal: "R$ 249,99",
      descricao: "Velocidade máxima",
      recursos: ["Wi-Fi 6 grátis", "Instalação grátis", "Suporte 24h", "3 Repetidores grátis"],
    },
  ]

  const combos = [
    {
      nome: "Fibra + Pós",
      fibra: "400 Mega",
      movel: "25GB",
      preco: "R$ 179,99",
      economia: "R$ 40",
      recursos: ["Internet fibra", "Plano móvel", "Wi-Fi 6", "Apps ilimitados"],
    },
    {
      nome: "Fibra + Repetidor",
      fibra: "700 Mega",
      extra: "2 Repetidores",
      preco: "R$ 189,99",
      economia: "R$ 60",
      popular: true,
      recursos: ["Internet ultra-rápida", "Cobertura total", "Wi-Fi 6", "Mesh inteligente"],
    },
    {
      nome: "Fibra + Voz",
      fibra: "400 Mega",
      extra: "Telefone Fixo",
      preco: "R$ 149,99",
      economia: "R$ 30",
      recursos: ["Internet fibra", "Ligações ilimitadas", "Wi-Fi 6", "Portabilidade grátis"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-900 via-blue-800 to-cyan-600 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">Fibra Óptica</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Vivo Fibra
                <span className="block text-cyan-300">A Internet Mais Rápida do Brasil</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-cyan-100 max-w-3xl mx-auto leading-relaxed">
                Velocidade real, estabilidade garantida e Wi-Fi 6 grátis. A fibra óptica que conecta você ao futuro.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-purple-900 hover:bg-purple-50 px-8 py-4 text-lg font-semibold"
                >
                  Ver Planos
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg bg-transparent"
                >
                  Teste de Velocidade
                </Button>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <Breadcrumb items={breadcrumbItems} />

          {/* Planos Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Planos Vivo Fibra</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Velocidade real de fibra óptica com Wi-Fi 6 grátis e instalação sem custo
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {planosFibra.map((plano, index) => (
                <Card
                  key={index}
                  className={`relative ${plano.popular ? "ring-2 ring-purple-500 shadow-lg scale-105" : ""}`}
                >
                  {plano.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-500">
                      Mais Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl font-bold text-purple-600">{plano.velocidade}</CardTitle>
                    <CardDescription>{plano.descricao}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="mb-4">
                      <div className="text-sm text-muted-foreground line-through">{plano.precoOriginal}</div>
                      <div className="text-3xl font-bold text-foreground">{plano.preco}</div>
                      <div className="text-muted-foreground">/mês</div>
                    </div>
                    <ul className="space-y-2 mb-6 text-sm">
                      {plano.recursos.map((recurso, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>{recurso}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" variant={plano.popular ? "default" : "outline"}>
                      Contratar
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Combos Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Combos Vivo Fibra</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Combine internet fibra com outros serviços e economize ainda mais
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {combos.map((combo, index) => (
                <Card
                  key={index}
                  className={`relative ${combo.popular ? "ring-2 ring-purple-500 shadow-lg scale-105" : ""}`}
                >
                  {combo.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-500">
                      Mais Vantajoso
                    </Badge>
                  )}
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl font-bold text-purple-600">{combo.nome}</CardTitle>
                    <CardDescription>
                      {combo.fibra} + {combo.movel || combo.extra}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="mb-4">
                      <div className="text-3xl font-bold text-foreground">{combo.preco}</div>
                      <div className="text-muted-foreground">/mês</div>
                      <Badge variant="secondary" className="mt-2 bg-green-100 text-green-700">
                        Economize {combo.economia}
                      </Badge>
                    </div>
                    <ul className="space-y-2 mb-6 text-sm">
                      {combo.recursos.map((recurso, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>{recurso}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" variant={combo.popular ? "default" : "outline"}>
                      Contratar Combo
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Wi-Fi 6 Section */}
          <section className="mb-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Wi-Fi 6: A Nova Geração</h2>
                <p className="text-lg text-muted-foreground">
                  Tecnologia mais avançada para conectar todos os seus dispositivos
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-purple-800">Vantagens do Wi-Fi 6</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Zap className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>4x Mais Rápido:</strong> Velocidades até 4x superiores ao Wi-Fi 5
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Wifi className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Mais Dispositivos:</strong> Conecte até 128 dispositivos simultaneamente
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Shield className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Segurança WPA3:</strong> Proteção mais avançada para sua rede
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Gauge className="h-6 w-6 text-purple-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Menor Latência:</strong> Resposta mais rápida para jogos e videoconferências
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-center mb-4">
                    <Wifi className="h-16 w-16 text-purple-600 mx-auto mb-2" />
                    <h4 className="text-xl font-semibold">Cobertura Inteligente</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Alcance</span>
                      <strong>Até 300m²</strong>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Dispositivos</span>
                      <strong>128 simultâneos</strong>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Velocidade</span>
                      <strong>Até 1.2 Gbps</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Qualidade Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Por que a Vivo Fibra é a Melhor?</h2>
              <p className="text-lg text-muted-foreground">
                Tecnologia de ponta e infraestrutura robusta para garantir a melhor experiência
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Velocidade Real</h3>
                <p className="text-muted-foreground">
                  100% fibra óptica até sua casa. A velocidade contratada é a velocidade entregue
                </p>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Estabilidade</h3>
                <p className="text-muted-foreground">99.5% de disponibilidade garantida com redundância de rede</p>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Router className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Equipamentos Premium</h3>
                <p className="text-muted-foreground">Modem Wi-Fi 6 e repetidores de última geração inclusos</p>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Suporte 24h</h3>
                <p className="text-muted-foreground">Atendimento especializado 24 horas por dia, 7 dias por semana</p>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Instalação Grátis</h3>
                <p className="text-muted-foreground">Instalação profissional sem custo adicional em até 7 dias</p>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gauge className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Baixa Latência</h3>
                <p className="text-muted-foreground">Ideal para jogos online, streaming e videoconferências</p>
              </Card>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Conecte-se à Velocidade do Futuro</h2>
            <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
              Vivo Fibra: a internet mais rápida e estável do Brasil, agora com Wi-Fi 6 grátis
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold">
                Contratar Agora
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg bg-transparent"
              >
                Verificar Cobertura
              </Button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

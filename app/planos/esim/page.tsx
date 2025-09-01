import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Smartphone, Download, Shield, Clock, Zap } from "lucide-react"

export default function ESimPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Planos", href: "/planos" },
    { label: "eSIM", href: "/planos/esim" },
  ]

  const planosMoveis = [
    {
      nome: "eSIM Básico",
      gb: "10GB",
      preco: "R$ 59,99",
      descricao: "Ideal para uso básico",
      recursos: ["Apps ilimitados", "Roaming nacional", "Vivo Valoriza"],
    },
    {
      nome: "eSIM Plus",
      gb: "25GB",
      preco: "R$ 89,99",
      descricao: "Para uso moderado",
      popular: true,
      recursos: ["Apps ilimitados", "Roaming nacional", "Vivo Valoriza", "Netflix incluso"],
    },
    {
      nome: "eSIM Premium",
      gb: "50GB",
      preco: "R$ 129,99",
      descricao: "Para uso intenso",
      recursos: ["Apps ilimitados", "Roaming nacional", "Vivo Valoriza", "Netflix + Amazon Prime"],
    },
    {
      nome: "eSIM Ilimitado",
      gb: "Ilimitado",
      preco: "R$ 179,99",
      descricao: "Uso sem limites",
      recursos: ["Apps ilimitados", "Roaming nacional", "Vivo Valoriza", "Todos os streamings"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-800 to-pink-600 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">Tecnologia Digital</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                eSIM Vivo
                <span className="block text-blue-300">O Futuro da Conectividade</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Chip digital integrado ao seu dispositivo. Ativação instantânea, sem chip físico, com toda a qualidade
                da rede Vivo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-purple-900 hover:bg-purple-50 px-8 py-4 text-lg font-semibold"
                >
                  Ativar eSIM
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg bg-transparent"
                >
                  Como Funciona
                </Button>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <Breadcrumb items={breadcrumbItems} />

          {/* O que é eSIM Section */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">O que é eSIM?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  O eSIM é um chip digital integrado ao seu dispositivo, eliminando a necessidade de chip físico
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-purple-800">Vantagens do eSIM</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Ativação Instantânea:</strong> Ative seu plano em minutos através do app
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Sem Chip Físico:</strong> Não precisa trocar ou inserir chip no aparelho
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Múltiplos Perfis:</strong> Tenha até 8 perfis diferentes no mesmo aparelho
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Sustentável:</strong> Reduz o uso de plástico e materiais físicos
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8 text-center">
                  <Smartphone className="h-24 w-24 text-purple-600 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-2">Dispositivos Compatíveis</h4>
                  <p className="text-muted-foreground mb-4">
                    iPhone XS ou superior, Samsung Galaxy S20+, Google Pixel 3 e outros
                  </p>
                  <Button variant="outline" className="border-purple-300 text-purple-600 bg-transparent">
                    Verificar Compatibilidade
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Planos Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Planos eSIM Vivo</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Escolha o plano ideal para seu eSIM com toda a qualidade da rede Vivo
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {planosMoveis.map((plano, index) => (
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
                    <CardTitle className="text-2xl font-bold text-purple-600">{plano.gb}</CardTitle>
                    <CardDescription className="font-medium">{plano.nome}</CardDescription>
                    <p className="text-sm text-muted-foreground">{plano.descricao}</p>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="mb-6">
                      <span className="text-3xl font-bold text-foreground">{plano.preco}</span>
                      <span className="text-muted-foreground">/mês</span>
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
                      Ativar eSIM
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Como Ativar Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Como Ativar seu eSIM</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Processo simples e rápido em apenas 3 passos
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Escolha seu Plano</h3>
                <p className="text-muted-foreground">
                  Selecione o plano eSIM ideal para suas necessidades no site ou app Vivo
                </p>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Baixe o Perfil</h3>
                <p className="text-muted-foreground">
                  Escaneie o QR Code ou use o código de ativação para baixar o perfil eSIM
                </p>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Ative Instantaneamente</h3>
                <p className="text-muted-foreground">Seu eSIM será ativado automaticamente e estará pronto para uso</p>
              </Card>
            </div>
          </section>

          {/* Comparação Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">eSIM vs Chip Tradicional</h2>
              <p className="text-lg text-muted-foreground">
                Veja as vantagens do eSIM comparado ao chip físico tradicional
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="esim" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="esim" className="text-lg py-3">
                    eSIM Digital
                  </TabsTrigger>
                  <TabsTrigger value="chip" className="text-lg py-3">
                    Chip Tradicional
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="esim">
                  <div className="grid md:grid-cols-2 gap-8">
                    <Card className="p-6 bg-gradient-to-br from-green-50 to-blue-50">
                      <h3 className="text-xl font-semibold mb-4 text-green-700">Vantagens do eSIM</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>Ativação em minutos via app</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>Não pode ser perdido ou danificado</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>Múltiplos perfis no mesmo aparelho</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>Troca de operadora instantânea</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>Mais seguro contra clonagem</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>Sustentável (sem plástico)</span>
                        </li>
                      </ul>
                    </Card>

                    <Card className="p-6">
                      <h3 className="text-xl font-semibold mb-4">Facilidades Exclusivas</h3>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <Clock className="h-6 w-6 text-blue-500" />
                          <div>
                            <strong>Ativação Rápida</strong>
                            <p className="text-sm text-muted-foreground">Em até 15 minutos</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Shield className="h-6 w-6 text-blue-500" />
                          <div>
                            <strong>Segurança Avançada</strong>
                            <p className="text-sm text-muted-foreground">Criptografia de ponta</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Smartphone className="h-6 w-6 text-blue-500" />
                          <div>
                            <strong>Gestão Digital</strong>
                            <p className="text-sm text-muted-foreground">Controle total pelo app</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="chip">
                  <div className="grid md:grid-cols-2 gap-8">
                    <Card className="p-6 bg-gradient-to-br from-orange-50 to-red-50">
                      <h3 className="text-xl font-semibold mb-4 text-orange-700">Limitações do Chip Físico</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-orange-200 rounded-full mt-1 flex-shrink-0"></div>
                          <span>Necessita visita à loja física</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-orange-200 rounded-full mt-1 flex-shrink-0"></div>
                          <span>Pode ser perdido ou danificado</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-orange-200 rounded-full mt-1 flex-shrink-0"></div>
                          <span>Apenas um perfil por vez</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-orange-200 rounded-full mt-1 flex-shrink-0"></div>
                          <span>Troca manual necessária</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-orange-200 rounded-full mt-1 flex-shrink-0"></div>
                          <span>Mais vulnerável à clonagem</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-orange-200 rounded-full mt-1 flex-shrink-0"></div>
                          <span>Impacto ambiental do plástico</span>
                        </li>
                      </ul>
                    </Card>

                    <Card className="p-6">
                      <h3 className="text-xl font-semibold mb-4">Processo Tradicional</h3>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-orange-200 rounded-full flex items-center justify-center">
                            <span className="text-xs font-bold">1</span>
                          </div>
                          <div>
                            <strong>Visita à Loja</strong>
                            <p className="text-sm text-muted-foreground">Deslocamento necessário</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-orange-200 rounded-full flex items-center justify-center">
                            <span className="text-xs font-bold">2</span>
                          </div>
                          <div>
                            <strong>Instalação Manual</strong>
                            <p className="text-sm text-muted-foreground">Inserir no aparelho</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-orange-200 rounded-full flex items-center justify-center">
                            <span className="text-xs font-bold">3</span>
                          </div>
                          <div>
                            <strong>Ativação Lenta</strong>
                            <p className="text-sm text-muted-foreground">Até 24 horas</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Migre para o Futuro Digital</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Ative seu eSIM Vivo agora e desfrute de toda a praticidade da tecnologia digital
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold">
                Ativar eSIM Agora
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg bg-transparent"
              >
                Verificar Compatibilidade
              </Button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

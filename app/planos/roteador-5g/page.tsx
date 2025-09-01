import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Wifi, Signal, Shield, Clock, MapPin } from "lucide-react"

export default function Roteador5GPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Planos", href: "/planos" },
    { label: "Roteador 5G", href: "/planos/roteador-5g" },
  ]

  const planosCelular = [
    { gb: "6GB", preco: "R$ 49,99", descricao: "Ideal para uso básico" },
    { gb: "15GB", preco: "R$ 79,99", descricao: "Para uso moderado" },
    { gb: "20GB", preco: "R$ 99,99", descricao: "Para uso intenso", popular: true },
    { gb: "100GB", preco: "R$ 149,99", descricao: "Uso ilimitado" },
  ]

  const planosRoteador = [
    { gb: "200GB", preco: "R$ 199,99", descricao: "Para pequenas empresas" },
    { gb: "300GB", preco: "R$ 299,99", descricao: "Para médias empresas", popular: true },
    { gb: "500GB", preco: "R$ 399,99", descricao: "Para grandes empresas" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-pink-600 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">Tecnologia 5G</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Roteador 5G Vivo
                <span className="block text-pink-300">Conectividade Sem Limites</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto leading-relaxed">
                Internet ultra-rápida com chip integrado. Conecte sua empresa à velocidade do futuro com a rede 5G da
                Vivo.
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
                  Saiba Mais
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Escolha o Plano Ideal</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Planos flexíveis para celular e roteador com a velocidade da rede 5G
              </p>
            </div>

            <Tabs defaultValue="celular" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="celular" className="text-lg py-3">
                  Planos Celular
                </TabsTrigger>
                <TabsTrigger value="roteador" className="text-lg py-3">
                  Planos Roteador
                </TabsTrigger>
              </TabsList>

              <TabsContent value="celular">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {planosCelular.map((plano, index) => (
                    <Card key={index} className={`relative ${plano.popular ? "ring-2 ring-purple-500 shadow-lg" : ""}`}>
                      {plano.popular && (
                        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-500">
                          Mais Popular
                        </Badge>
                      )}
                      <CardHeader className="text-center pb-4">
                        <CardTitle className="text-2xl font-bold text-purple-600">{plano.gb}</CardTitle>
                        <CardDescription>{plano.descricao}</CardDescription>
                      </CardHeader>
                      <CardContent className="text-center">
                        <div className="mb-6">
                          <span className="text-3xl font-bold text-foreground">{plano.preco}</span>
                          <span className="text-muted-foreground">/mês</span>
                        </div>
                        <ul className="space-y-2 mb-6 text-sm">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            Internet 5G ultra-rápida
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            Apps ilimitados
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            Roaming nacional
                          </li>
                        </ul>
                        <Button className="w-full" variant={plano.popular ? "default" : "outline"}>
                          Contratar
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="roteador">
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  {planosRoteador.map((plano, index) => (
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
                        <CardTitle className="text-3xl font-bold text-purple-600">{plano.gb}</CardTitle>
                        <CardDescription className="text-base">{plano.descricao}</CardDescription>
                      </CardHeader>
                      <CardContent className="text-center">
                        <div className="mb-6">
                          <span className="text-4xl font-bold text-foreground">{plano.preco}</span>
                          <span className="text-muted-foreground">/mês</span>
                        </div>
                        <ul className="space-y-3 mb-8">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                            Velocidade até 1Gbps
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                            Wi-Fi 6 integrado
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                            Até 64 dispositivos
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                            Suporte técnico 24h
                          </li>
                        </ul>
                        <Button className="w-full" size="lg" variant={plano.popular ? "default" : "outline"}>
                          Contratar Agora
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </section>

          {/* Vantagens Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Vantagens do Roteador 5G Vivo</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Descubra por que o Roteador 5G Vivo é a melhor escolha para sua empresa
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Signal className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Velocidade 5G</h3>
                <p className="text-muted-foreground">
                  Velocidades de até 1Gbps com a tecnologia 5G mais avançada do mercado
                </p>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wifi className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Wi-Fi 6 Integrado</h3>
                <p className="text-muted-foreground">
                  Conecte até 64 dispositivos simultaneamente com Wi-Fi 6 de alta performance
                </p>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Segurança Avançada</h3>
                <p className="text-muted-foreground">
                  Proteção WPA3 e firewall integrado para máxima segurança da sua rede
                </p>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Instalação Rápida</h3>
                <p className="text-muted-foreground">
                  Plug and play - conecte e use imediatamente, sem necessidade de técnico
                </p>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Cobertura Nacional</h3>
                <p className="text-muted-foreground">
                  Funciona em todo território nacional com a melhor cobertura 5G do Brasil
                </p>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Suporte 24h</h3>
                <p className="text-muted-foreground">Atendimento especializado 24 horas por dia, 7 dias por semana</p>
              </Card>
            </div>
          </section>

          {/* Diferencial Section */}
          <section className="mb-16 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">A Diferença da Vivo no Seu Dia a Dia</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-purple-800">Produtividade Sem Limites</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>Videoconferências em 4K sem travamentos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>Upload e download de arquivos grandes em segundos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>Streaming simultâneo em múltiplos dispositivos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>Backup automático na nuvem em tempo real</span>
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="text-4xl font-bold text-purple-600 mb-2">99.9%</div>
                    <div className="text-sm text-muted-foreground mb-4">Disponibilidade</div>
                    <div className="text-3xl font-bold text-green-600 mb-2">1Gbps</div>
                    <div className="text-sm text-muted-foreground">Velocidade Máxima</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Dúvidas Frequentes</h2>
              <p className="text-lg text-muted-foreground">Tire suas dúvidas sobre o Roteador 5G Vivo</p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left">Como funciona o Roteador 5G com chip?</AccordionTrigger>
                  <AccordionContent>
                    O Roteador 5G Vivo possui um chip integrado que se conecta diretamente à rede 5G da Vivo. Basta
                    conectar na energia elétrica e o roteador estará pronto para uso, criando uma rede Wi-Fi de alta
                    velocidade para todos os seus dispositivos.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left">
                    Qual a diferença entre os planos de celular e roteador?
                  </AccordionTrigger>
                  <AccordionContent>
                    Os planos de celular (6GB a 100GB) são ideais para uso pessoal em smartphones e tablets. Já os
                    planos de roteador (200GB a 500GB) são projetados para compartilhar internet com múltiplos
                    dispositivos simultaneamente, ideal para empresas e escritórios.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left">Quantos dispositivos posso conectar?</AccordionTrigger>
                  <AccordionContent>
                    O Roteador 5G Vivo suporta até 64 dispositivos conectados simultaneamente, incluindo smartphones,
                    tablets, notebooks, smart TVs, câmeras de segurança e dispositivos IoT.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left">Preciso de instalação técnica?</AccordionTrigger>
                  <AccordionContent>
                    Não! O Roteador 5G Vivo é plug and play. Basta conectar na energia elétrica e seguir as instruções
                    simples no aplicativo Vivo para configurar sua rede Wi-Fi em poucos minutos.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left">Qual a cobertura do 5G da Vivo?</AccordionTrigger>
                  <AccordionContent>
                    A Vivo possui a maior cobertura 5G do Brasil, presente em mais de 400 cidades. Consulte a
                    disponibilidade na sua região através do nosso site ou aplicativo.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para a Velocidade 5G?</h2>
            <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
              Transforme sua conectividade com o Roteador 5G Vivo. Velocidade, estabilidade e cobertura nacional.
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
                Falar com Consultor
              </Button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

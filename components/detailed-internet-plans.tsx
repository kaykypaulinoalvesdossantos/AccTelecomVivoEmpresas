import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Building2, Users, Zap } from "lucide-react"

export function DetailedInternetPlans() {
  const planosEmpresariais = [
    {
      nome: "Empresarial 100",
      velocidade: "100 Mega",
      preco: "R$ 199,99",
      precoOriginal: "R$ 249,99",
      descricao: "Pequenas empresas",
      usuarios: "Até 10 usuários",
      recursos: [
        "100% Fibra Óptica",
        "IP Fixo incluso",
        "Suporte técnico 24h",
        "SLA 99.9%",
        "Instalação grátis",
        "Wi-Fi empresarial",
      ],
    },
    {
      nome: "Empresarial 300",
      velocidade: "300 Mega",
      preco: "R$ 399,99",
      precoOriginal: "R$ 499,99",
      descricao: "Médias empresas",
      usuarios: "Até 30 usuários",
      popular: true,
      recursos: [
        "100% Fibra Óptica",
        "2 IPs Fixos inclusos",
        "Suporte técnico 24h",
        "SLA 99.9%",
        "Instalação grátis",
        "Wi-Fi empresarial",
        "Backup 4G incluso",
      ],
    },
    {
      nome: "Empresarial 500",
      velocidade: "500 Mega",
      preco: "R$ 599,99",
      precoOriginal: "R$ 749,99",
      descricao: "Grandes empresas",
      usuarios: "Até 50 usuários",
      recursos: [
        "100% Fibra Óptica",
        "5 IPs Fixos inclusos",
        "Suporte técnico 24h",
        "SLA 99.9%",
        "Instalação grátis",
        "Wi-Fi empresarial",
        "Backup 4G incluso",
        "Gerenciamento remoto",
      ],
    },
    {
      nome: "Empresarial 1GB",
      velocidade: "1 Giga",
      preco: "R$ 999,99",
      precoOriginal: "R$ 1.249,99",
      descricao: "Corporações",
      usuarios: "Usuários ilimitados",
      recursos: [
        "100% Fibra Óptica",
        "10 IPs Fixos inclusos",
        "Suporte técnico 24h",
        "SLA 99.9%",
        "Instalação grátis",
        "Wi-Fi empresarial",
        "Backup 4G incluso",
        "Gerenciamento remoto",
        "Consultoria técnica",
      ],
    },
  ]

  const planosInternet = [
    {
      nome: "Internet Dedicada 10MB",
      velocidade: "10 Mega",
      preco: "R$ 899,99",
      descricao: "Link dedicado exclusivo",
      recursos: ["Banda dedicada 100%", "SLA 99.95%", "Suporte 24x7", "IP fixo incluso", "Monitoramento 24h"],
    },
    {
      nome: "Internet Dedicada 20MB",
      velocidade: "20 Mega",
      preco: "R$ 1.599,99",
      descricao: "Para empresas críticas",
      popular: true,
      recursos: [
        "Banda dedicada 100%",
        "SLA 99.95%",
        "Suporte 24x7",
        "5 IPs fixos inclusos",
        "Monitoramento 24h",
        "Redundância automática",
      ],
    },
    {
      nome: "Internet Dedicada 50MB",
      velocidade: "50 Mega",
      preco: "R$ 2.999,99",
      descricao: "Máxima performance",
      recursos: [
        "Banda dedicada 100%",
        "SLA 99.95%",
        "Suporte 24x7",
        "10 IPs fixos inclusos",
        "Monitoramento 24h",
        "Redundância automática",
        "Gerente técnico dedicado",
      ],
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Planos Internet Empresarial</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano ideal para o tamanho e necessidade da sua empresa
          </p>
        </div>

        <Tabs defaultValue="fibra" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 max-w-md mx-auto">
            <TabsTrigger value="fibra" className="text-lg py-3">
              <Building2 className="h-4 w-4 mr-2" />
              Fibra Empresarial
            </TabsTrigger>
            <TabsTrigger value="dedicada" className="text-lg py-3">
              <Zap className="h-4 w-4 mr-2" />
              Internet Dedicada
            </TabsTrigger>
          </TabsList>

          <TabsContent value="fibra">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {planosEmpresariais.map((plano, index) => (
                <Card
                  key={index}
                  className={`relative ${plano.popular ? "ring-2 ring-purple-500 shadow-lg scale-105" : ""}`}
                >
                  {plano.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-500">
                      Mais Contratado
                    </Badge>
                  )}
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl font-bold text-purple-600">{plano.velocidade}</CardTitle>
                    <CardDescription className="font-medium">{plano.nome}</CardDescription>
                    <p className="text-sm text-muted-foreground">{plano.descricao}</p>
                    <div className="flex items-center justify-center gap-2 text-sm text-blue-600">
                      <Users className="h-4 w-4" />
                      {plano.usuarios}
                    </div>
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
                    <Button className="w-full" variant={plano.popular ? "default" : "outline"} asChild>
                      <a
                        href={`https://wa.me/5511989150001?text=Olá! Gostaria de contratar o plano ${plano.nome} de ${plano.velocidade}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer"
                      >
                        Contratar Agora
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="dedicada">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {planosInternet.map((plano, index) => (
                <Card
                  key={index}
                  className={`relative ${plano.popular ? "ring-2 ring-purple-500 shadow-lg scale-105" : ""}`}
                >
                  {plano.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-500">
                      Recomendado
                    </Badge>
                  )}
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl font-bold text-purple-600">{plano.velocidade}</CardTitle>
                    <CardDescription className="font-medium">{plano.nome}</CardDescription>
                    <p className="text-sm text-muted-foreground">{plano.descricao}</p>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="mb-6">
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
                    <Button className="w-full" variant={plano.popular ? "default" : "outline"} asChild>
                      <a
                        href={`https://wa.me/5511989150001?text=Olá! Gostaria de um orçamento para ${plano.nome}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer"
                      >
                        Solicitar Orçamento
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

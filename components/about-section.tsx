import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Globe, Zap } from "lucide-react"

export function AboutSection() {
  const stats = [
    { icon: Users, label: "Clientes Empresariais", value: "500K+" },
    { icon: Globe, label: "Cidades Atendidas", value: "2.500+" },
    { icon: Award, label: "Anos de Experiência", value: "25+" },
    { icon: Zap, label: "Uptime Garantido", value: "99,9%" },
  ]

  const values = [
    {
      title: "Inovação Constante",
      description: "Sempre na vanguarda da tecnologia, oferecendo as melhores soluções do mercado.",
    },
    {
      title: "Suporte Especializado",
      description: "Equipe dedicada para atender empresas com agilidade e expertise técnica.",
    },
    {
      title: "Cobertura Nacional",
      description: "A maior rede de fibra ótica e 5G do Brasil, conectando todo o país.",
    },
    {
      title: "Soluções Personalizadas",
      description: "Planos e serviços adaptados às necessidades específicas de cada empresa.",
    },
  ]

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="text-center">
        <Badge className="mb-4">Sobre a Vivo Empresas</Badge>
        <h1 className="text-4xl font-bold text-foreground mb-6">Conectando o Futuro das Empresas Brasileiras</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Há mais de 25 anos, a Vivo Empresas é líder em soluções de conectividade e tecnologia para empresas de todos
          os portes. Nossa missão é transformar negócios através da inovação e da melhor experiência em telecomunicações
          do país.
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon
          return (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto mb-2 p-3 bg-primary/10 rounded-full w-fit">
                  <IconComponent className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl font-bold text-primary">{stat.value}</CardTitle>
                <CardDescription>{stat.label}</CardDescription>
              </CardHeader>
            </Card>
          )
        })}
      </div>

      {/* Mission */}
      <div className="bg-muted/50 rounded-lg p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Nossa Missão</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Ser a parceira tecnológica que impulsiona o crescimento e a transformação digital das empresas brasileiras,
            oferecendo conectividade de alta qualidade, soluções inovadoras e um atendimento excepcional.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-left">
                <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* History */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Nossa História</h2>
        <div className="space-y-8">
          <div className="flex items-start space-x-4">
            <Badge variant="outline" className="mt-1">
              1998
            </Badge>
            <div>
              <h3 className="text-lg font-semibold mb-2">Fundação da Vivo</h3>
              <p className="text-muted-foreground">
                Início das operações com foco em telefonia móvel, revolucionando as comunicações no Brasil.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Badge variant="outline" className="mt-1">
              2010
            </Badge>
            <div>
              <h3 className="text-lg font-semibold mb-2">Expansão para Empresas</h3>
              <p className="text-muted-foreground">
                Lançamento da divisão empresarial com soluções dedicadas para o mercado corporativo.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Badge variant="outline" className="mt-1">
              2018
            </Badge>
            <div>
              <h3 className="text-lg font-semibold mb-2">Era da Fibra Ótica</h3>
              <p className="text-muted-foreground">
                Início da maior expansão de fibra ótica do país, conectando milhões de empresas.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Badge variant="outline" className="mt-1">
              2023
            </Badge>
            <div>
              <h3 className="text-lg font-semibold mb-2">Liderança em 5G</h3>
              <p className="text-muted-foreground">
                Pioneira na implementação do 5G empresarial, oferecendo a mais avançada tecnologia móvel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

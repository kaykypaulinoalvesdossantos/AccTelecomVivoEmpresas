import { Card } from "@/components/ui/card"
import { Shield, Clock, Headphones, Zap, Building, Award } from "lucide-react"

export function InternetBenefits() {
  const beneficios = [
    {
      icon: Shield,
      titulo: "SLA Garantido",
      descricao: "99.9% de disponibilidade com compensação automática em caso de indisponibilidade",
      stat: "99.9%",
    },
    {
      icon: Clock,
      titulo: "Suporte 24/7",
      descricao: "Atendimento técnico especializado 24 horas por dia, 7 dias por semana",
      stat: "24/7",
    },
    {
      icon: Headphones,
      titulo: "Gerente Dedicado",
      descricao: "Gerente de contas exclusivo para empresas com planos acima de 300MB",
      stat: "1:1",
    },
    {
      icon: Zap,
      titulo: "Instalação Rápida",
      descricao: "Instalação profissional em até 7 dias úteis sem custo adicional",
      stat: "7 dias",
    },
    {
      icon: Building,
      titulo: "IP Fixo Incluso",
      descricao: "Endereços IP fixos inclusos para acesso remoto e servidores",
      stat: "Grátis",
    },
    {
      icon: Award,
      titulo: "Certificações",
      descricao: "Rede certificada ISO 27001 e ANATEL para máxima qualidade",
      stat: "ISO",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Por que Escolher Vivo Empresas?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mais de 20 anos conectando empresas com a melhor tecnologia e suporte do mercado
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beneficios.map((beneficio, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                  <beneficio.icon className="h-6 w-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold">{beneficio.titulo}</h3>
                    <span className="text-2xl font-bold text-purple-600">{beneficio.stat}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{beneficio.descricao}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-purple-200">Cidades Atendidas</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">1M+</div>
              <div className="text-purple-200">Empresas Conectadas</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">20+</div>
              <div className="text-purple-200">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
              <div className="text-purple-200">Satisfação do Cliente</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function InternetTestimonials() {
  const depoimentos = [
    {
      nome: "Carlos Silva",
      cargo: "CTO",
      empresa: "TechStart Solutions",
      depoimento:
        "A Vivo Empresas transformou nossa conectividade. Com 500MB dedicados, nossa equipe de 40 pessoas trabalha sem interrupções. O suporte técnico é excepcional.",
      avaliacao: 5,
      foto: "/professional-businessman.png",
    },
    {
      nome: "Ana Costa",
      cargo: "Diretora de TI",
      empresa: "Inovação Digital Ltda",
      depoimento:
        "Migrar para a internet dedicada da Vivo foi a melhor decisão. Zero downtime em 18 meses de contrato. Recomendo para qualquer empresa séria.",
      avaliacao: 5,
      foto: "/professional-businesswoman.png",
    },
    {
      nome: "Roberto Santos",
      cargo: "Gerente de Operações",
      empresa: "LogiCorp",
      depoimento:
        "O SLA de 99.9% não é só promessa, é realidade. Nossa operação 24/7 depende da estabilidade da Vivo e nunca nos decepcionou.",
      avaliacao: 5,
      foto: "/professional-business-team-using-smartphones-in-mo.png",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">O que Nossos Clientes Dizem</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empresas de todos os tamanhos confiam na Vivo para suas necessidades de conectividade
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {depoimentos.map((depoimento, index) => (
            <Card key={index} className="relative hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-purple-300 mb-4" />
                <p className="text-muted-foreground mb-6 italic">"{depoimento.depoimento}"</p>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(depoimento.avaliacao)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-semibold text-sm">
                      {depoimento.nome
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{depoimento.nome}</div>
                    <div className="text-sm text-muted-foreground">{depoimento.cargo}</div>
                    <div className="text-sm text-purple-600 font-medium">{depoimento.empresa}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

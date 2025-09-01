"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function SolutionsTestimonials() {
  const testimonials = [
    {
      name: "Carlos Silva",
      position: "CEO",
      company: "TechCorp Solutions",
      content:
        "As soluções da Vivo Empresas transformaram completamente nossa operação. A migração para o Microsoft 365 foi perfeita e o suporte é excepcional.",
      rating: 5,
      image: "/professional-businessman.png",
    },
    {
      name: "Ana Costa",
      position: "Diretora de TI",
      company: "Inovação Digital Ltda",
      content:
        "O PABX em nuvem revolucionou nossa comunicação interna. Agora temos flexibilidade total e custos muito menores.",
      rating: 5,
      image: "/professional-businesswoman.png",
    },
    {
      name: "Roberto Mendes",
      position: "Gerente Geral",
      company: "Logística Express",
      content:
        "A segurança gerenciada nos deu tranquilidade total. Sabemos que nossos dados estão protegidos 24/7 por especialistas.",
      rating: 5,
      image: "/professional-businessman.png",
    },
  ]

  const stats = [
    { value: "98%", label: "Satisfação dos Clientes" },
    { value: "10k+", label: "Empresas Atendidas" },
    { value: "24/7", label: "Suporte Técnico" },
    { value: "99.9%", label: "Disponibilidade" },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance">
            O que nossos{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Clientes Dizem
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Histórias reais de transformação digital e sucesso empresarial
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <Quote className="h-8 w-8 text-purple-300 mb-4" />

                <p className="text-gray-700 leading-relaxed mb-6 text-pretty">"{testimonial.content}"</p>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">
                      {testimonial.position} • {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl lg:text-5xl font-bold text-purple-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

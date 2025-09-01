"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"

export function MobileTestimonials() {
  const testimonials = [
    {
      name: "Carlos Silva",
      position: "CEO",
      company: "TechStart Solutions",
      content:
        "A migração para a Vivo Empresas foi a melhor decisão que tomamos. A velocidade 5G aumentou nossa produtividade em 40% e o suporte é excepcional.",
      rating: 5,
      avatar: "/professional-businessman.png",
    },
    {
      name: "Ana Costa",
      position: "Diretora de TI",
      company: "Inovação Digital Ltda",
      content:
        "Gerenciar nossa frota móvel ficou muito mais fácil. Os relatórios detalhados nos ajudam a controlar custos e otimizar o uso dos planos.",
      rating: 5,
      avatar: "/professional-businesswoman.png",
    },
    {
      name: "Roberto Santos",
      position: "Gerente Comercial",
      company: "Vendas & Cia",
      content:
        "O roaming internacional da Vivo nos permite trabalhar em qualquer lugar do mundo sem preocupações. Excelente custo-benefício.",
      rating: 5,
      avatar: "/professional-sales-manager.png",
    },
  ]

  const stats = [
    { number: "98%", label: "Satisfação dos Clientes" },
    { number: "50mil+", label: "Empresas Atendidas" },
    { number: "24/7", label: "Suporte Especializado" },
    { number: "99.9%", label: "Disponibilidade da Rede" },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
            <Star className="w-4 h-4 mr-2" />
            Avaliação 4.9/5
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">O que nossos clientes dizem</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de 50 mil empresas confiam na Vivo para suas necessidades de conectividade móvel. Veja o que elas têm a
            dizer sobre nossa solução.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-shadow border-0 bg-white">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <Quote className="w-8 h-8 text-purple-500 mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.content}"</p>

                <div className="flex items-center">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">
                      {testimonial.position} • {testimonial.company}
                    </div>
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

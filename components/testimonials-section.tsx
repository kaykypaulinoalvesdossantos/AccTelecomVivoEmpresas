"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, Building, Users } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Silva",
    position: "CTO",
    company: "TechCorp Brasil",
    industry: "Tecnologia",
    content:
      "A Vivo Empresas transformou nossa infraestrutura de TI. A velocidade da fibra óptica e o suporte técnico especializado nos permitiram escalar nossos serviços digitais com total confiança.",
    rating: 5,
    logo: "/placeholder.svg?height=40&width=40&text=TC",
    employees: "500+ funcionários",
  },
  {
    name: "Ana Rodrigues",
    position: "Diretora de Operações",
    company: "LogiMax Transportes",
    industry: "Logística",
    content:
      "O 5G da Vivo revolucionou nossa operação logística. Conseguimos rastrear nossa frota em tempo real e otimizar rotas, resultando em 30% de economia em combustível.",
    rating: 5,
    logo: "/placeholder.svg?height=40&width=40&text=LM",
    employees: "200+ funcionários",
  },
  {
    name: "Roberto Santos",
    position: "CEO",
    company: "MedCare Clínicas",
    industry: "Saúde",
    content:
      "A segurança e confiabilidade dos serviços da Vivo são fundamentais para nossa operação. Lidamos com dados sensíveis e nunca tivemos problemas de conectividade ou segurança.",
    rating: 5,
    logo: "/placeholder.svg?height=40&width=40&text=MC",
    employees: "150+ funcionários",
  },
  {
    name: "Mariana Costa",
    position: "Gerente de TI",
    company: "EduTech Solutions",
    industry: "Educação",
    content:
      "Durante a pandemia, a Vivo nos ajudou a migrar rapidamente para o ensino online. A estabilidade da conexão foi crucial para manter a qualidade das aulas virtuais.",
    rating: 5,
    logo: "/placeholder.svg?height=40&width=40&text=ET",
    employees: "80+ funcionários",
  },
  {
    name: "Fernando Lima",
    position: "Diretor Financeiro",
    company: "FinanceMax",
    industry: "Serviços Financeiros",
    content:
      "A gestão centralizada de todas as nossas linhas móveis através da plataforma da Vivo nos trouxe uma economia de 25% nos custos de telecomunicações.",
    rating: 5,
    logo: "/placeholder.svg?height=40&width=40&text=FM",
    employees: "300+ funcionários",
  },
  {
    name: "Juliana Oliveira",
    position: "Head de Marketing",
    company: "Creative Agency",
    industry: "Marketing Digital",
    content:
      "A velocidade de upload simétrica da fibra da Vivo é essencial para nosso trabalho com vídeos em 4K. Conseguimos entregar projetos mais rapidamente aos nossos clientes.",
    rating: 5,
    logo: "/placeholder.svg?height=40&width=40&text=CA",
    employees: "50+ funcionários",
  },
]

const stats = [
  {
    number: "98%",
    label: "Satisfação dos Clientes",
    description: "Índice de satisfação geral",
  },
  {
    number: "4.8/5",
    label: "Avaliação Média",
    description: "Baseado em +10k avaliações",
  },
  {
    number: "95%",
    label: "Taxa de Retenção",
    description: "Clientes que renovam conosco",
  },
  {
    number: "+50k",
    label: "Empresas Atendidas",
    description: "Em todo território nacional",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#660099]/10 text-[#660099] border-[#660099]/20">
            <Star className="w-4 h-4 mr-2" />
            Depoimentos de Clientes
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            O que nossos clientes
            <span className="block text-[#660099]">falam sobre nós</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de 50.000 empresas confiam na Vivo Empresas para suas soluções de conectividade e tecnologia. Veja o
            que elas têm a dizer sobre nossa parceria.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-[#660099] mb-2">{stat.number}</div>
              <div className="font-semibold text-gray-900 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="professional-card border-0 bg-white">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <Quote className="w-8 h-8 text-[#660099]/30" />
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.content}"</p>

                {/* Author Info */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      src={testimonial.logo || "/placeholder.svg"}
                      alt={`${testimonial.company} logo`}
                      className="w-12 h-12 rounded-full bg-gray-100 object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-[#660099] font-medium">{testimonial.position}</div>
                    <div className="text-sm text-gray-600">{testimonial.company}</div>
                    <div className="flex items-center mt-2 space-x-4">
                      <Badge variant="secondary" className="text-xs">
                        {testimonial.industry}
                      </Badge>
                      <div className="flex items-center text-xs text-gray-500">
                        <Users className="w-3 h-3 mr-1" />
                        {testimonial.employees}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#660099] to-[#E91E63] rounded-3xl p-12 text-white">
            <Building className="w-16 h-16 mx-auto mb-6 text-white/80" />
            <h3 className="text-3xl font-bold mb-4">Sua empresa pode ser a próxima!</h3>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Junte-se a milhares de empresas que já transformaram seus negócios com as soluções da Vivo Empresas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#660099] px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-colors">
                Solicitar Proposta
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors">
                Ver Mais Depoimentos
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

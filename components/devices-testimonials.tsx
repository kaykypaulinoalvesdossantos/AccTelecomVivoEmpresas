import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function DevicesTestimonials() {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Diretor de TI",
      company: "TechCorp Solutions",
      image: "/professional-businessman.png",
      rating: 5,
      content: "Os dispositivos da Vivo Empresas revolucionaram nossa produtividade. A qualidade dos smartphones e o suporte técnico são excepcionais. Recomendo para qualquer empresa que queira equipar sua equipe com o melhor.",
      devices: ["iPhone 15 Pro", "Samsung Galaxy Tab S9"]
    },
    {
      name: "Ana Costa",
      role: "Gerente de Vendas",
      company: "SalesForce Brasil",
      image: "/professional-businesswoman.png",
      rating: 5,
      content: "Nossa equipe de vendas está muito mais eficiente com os novos dispositivos. A bateria dura o dia todo e a performance é incrível. O programa de fidelidade também é um diferencial.",
      devices: ["Samsung Galaxy S24", "Carregador Wireless"]
    },
    {
      name: "Roberto Santos",
      role: "CEO",
      company: "Startup Inovação",
      image: "/professional-sales-manager.png",
      rating: 5,
      content: "Como startup, precisávamos de dispositivos confiáveis sem comprometer o orçamento. A Vivo Empresas ofereceu a solução perfeita com preços competitivos e qualidade premium.",
      devices: ["Motorola Edge 50", "Fone Bluetooth"]
    },
    {
      name: "Mariana Lima",
      role: "Coordenadora de Marketing",
      company: "Digital Marketing Pro",
      image: "/placeholder-user.jpg",
      rating: 5,
      content: "Os tablets profissionais nos permitem criar conteúdo de alta qualidade em qualquer lugar. A tela é perfeita para edição de imagens e o desempenho é excepcional.",
      devices: ["iPad Pro 12.9\"", "Apple Pencil 2"]
    },
    {
      name: "Fernando Oliveira",
      role: "Supervisor de Operações",
      company: "Logística Express",
      image: "/placeholder-user.jpg",
      rating: 5,
      content: "A durabilidade dos dispositivos é impressionante. Nossa equipe trabalha em condições adversas e os smartphones aguentam tudo. O suporte técnico também é muito responsivo.",
      devices: ["Xiaomi 14", "Carregador Wireless"]
    },
    {
      name: "Patrícia Mendes",
      role: "Diretora Financeira",
      company: "Consultoria Financeira",
      image: "/placeholder-user.jpg",
      rating: 5,
      content: "O investimento nos dispositivos da Vivo Empresas se pagou rapidamente. A produtividade da equipe aumentou significativamente e os custos de manutenção são mínimos.",
      devices: ["iPhone 15 Pro", "Samsung Galaxy Tab S9"]
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-purple-100 text-purple-800 hover:bg-purple-200 mb-4">
            Depoimentos
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empresas de todos os tamanhos confiam em nossos dispositivos para impulsionar 
            a produtividade e eficiência de suas equipes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-gray-100">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-purple-600 font-medium">{testimonial.company}</p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>

                <blockquote className="text-gray-700 mb-4 italic">
                  "{testimonial.content}"
                </blockquote>

                <div className="border-t pt-4">
                  <p className="text-sm text-gray-600 mb-2">Dispositivos utilizados:</p>
                  <div className="flex flex-wrap gap-2">
                    {testimonial.devices.map((device, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs bg-purple-50 text-purple-700 border-purple-200">
                        {device}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Junte-se aos milhares de clientes satisfeitos
            </h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Faça parte da nossa comunidade de empresas que escolheram a Vivo Empresas 
              para equipar suas equipes com os melhores dispositivos do mercado.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-purple-100">Empresas atendidas</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">4.9/5</div>
                <div className="text-purple-100">Avaliação média</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">98%</div>
                <div className="text-purple-100">Clientes satisfeitos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

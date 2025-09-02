import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function DevicesBenefits() {
  const benefits = [
    {
      icon: "📱",
      title: "Dispositivos Premium",
      description: "Smartphones e tablets das melhores marcas com tecnologia de ponta para sua equipe.",
      features: ["iPhone, Samsung, Motorola", "Tablets profissionais", "Acessórios de qualidade"]
    },
    {
      icon: "🛡️",
      title: "Segurança Empresarial",
      description: "Dispositivos com recursos avançados de segurança para proteger dados da sua empresa.",
      features: ["Criptografia avançada", "Controle de acesso", "Backup automático"]
    },
    {
      icon: "⚡",
      title: "Performance Garantida",
      description: "Equipamentos de alta performance que garantem produtividade máxima para sua equipe.",
      features: ["Processadores potentes", "Memória otimizada", "Bateria de longa duração"]
    },
    {
      icon: "🔄",
      title: "Suporte Técnico 24/7",
      description: "Suporte técnico especializado disponível 24 horas por dia, 7 dias por semana.",
      features: ["Atendimento especializado", "Reparo rápido", "Garantia estendida"]
    },
    {
      icon: "💰",
      title: "Preços Competitivos",
      description: "Melhores preços do mercado com condições especiais para empresas.",
      features: ["Descontos por volume", "Parcelamento flexível", "Sem juros"]
    },
    {
      icon: "🚀",
      title: "Entrega Rápida",
      description: "Entrega em todo o Brasil com agilidade e segurança para sua empresa.",
      features: ["Entrega em 24h", "Rastreamento online", "Instalação inclusa"]
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-purple-100 text-purple-800 hover:bg-purple-200 mb-4">
            Por que escolher nossos dispositivos?
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Benefícios Exclusivos para sua Empresa
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos dispositivos de qualidade premium com suporte empresarial completo 
            para impulsionar a produtividade da sua equipe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {benefit.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-base">
                  {benefit.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {benefit.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Programa de Fidelidade Empresarial
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Acumule pontos a cada compra e ganhe descontos exclusivos, upgrades gratuitos 
              e benefícios especiais para sua empresa.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">5%</div>
                <div className="text-sm text-gray-600">Cashback em todas as compras</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">+50%</div>
                <div className="text-sm text-gray-600">Pontos em promoções especiais</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">VIP</div>
                <div className="text-sm text-gray-600">Atendimento prioritário</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

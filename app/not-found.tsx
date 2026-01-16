import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Home, ArrowLeft, Phone, Search } from "lucide-react"

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />

      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-purple-100 text-purple-800 hover:bg-purple-200 text-sm sm:text-base">
              Página em Desenvolvimento
            </Badge>

            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
              <Search className="w-16 h-16 text-white" />
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 lg:mb-8">
              404
            </h1>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700 mb-4">
              Página em Desenvolvimento
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 lg:mb-12 max-w-3xl mx-auto leading-relaxed">
              Esta página está temporariamente em desenvolvimento. Nossa equipe está trabalhando para
              disponibilizar este conteúdo em breve. Enquanto isso, explore nossas outras soluções disponíveis.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 lg:mb-12">
              <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                    <Home className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Voltar ao Início</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 text-center mb-4">
                    Explore nossa página principal e conheça nossos produtos
                  </p>
                  <Button
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
                    asChild
                  >
                    <a href="/">Ir para Home</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                    <ArrowLeft className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Produtos Disponíveis</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 text-center mb-4">
                    Conheça nossos produtos e serviços já disponíveis
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-blue-500 text-blue-600 hover:bg-blue-50"
                    asChild
                  >
                    <a href="/#produtos">Ver Produtos</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Fale Conosco</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 text-center mb-4">
                    Entre em contato para mais informações
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-purple-500 text-purple-600 hover:bg-purple-50"
                    asChild
                  >
                    <a href="https://wa.me/5511989150001" target="_blank" rel="noopener noreferrer">
                      WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Produtos e Serviços Disponíveis</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div className="space-y-2">
                  <h4 className="font-semibold text-purple-600">MÓVEL</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Planos Móveis</li>
                    <li>• Portabilidade</li>
                    <li>• Roteador 5G</li>
                    <li>• eSIM</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-green-600">INTERNET</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Vivo Fibra</li>
                    <li>• Internet Dedicada</li>
                    <li>• Internet Satélite</li>
                    <li>• Rede Corporativa</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-blue-600">PACOTES</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Pacote Empresa</li>
                    <li>• Fibra + Pós</li>
                    <li>• Fibra + Repetidor</li>
                    <li>• Móvel + Aparelho</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-orange-600">VOZ</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Vivo Voz Negócio</li>
                    <li>• SIP Trunking</li>
                    <li>• 0800 e 0300</li>
                    <li>• Número Único</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wrench, Clock, Mail, Phone } from "lucide-react"

export default function ManutencaoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />

      <div className="container mx-auto px-4 py-6">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Soluções Digitais", href: "/solucoes" },
          ]}
        />
      </div>

      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-orange-100 text-orange-800 hover:bg-orange-200 text-sm sm:text-base">
              Em Manutenção
            </Badge>

            <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center">
              <Wrench className="w-12 h-12 text-white" />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 lg:mb-8">
              Soluções Digitais
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 lg:mb-12 max-w-3xl mx-auto leading-relaxed">
              Esta seção está temporariamente em manutenção para melhorias e atualizações.
              Em breve, você terá acesso a todas as nossas soluções digitais.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 lg:mb-12">
              <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Em Breve</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 text-center">
                    Novas soluções digitais serão disponibilizadas em breve
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Notifique-me</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 text-center">
                    Receba notificação quando estiver disponível
                  </p>
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
                  <p className="text-gray-600 text-center">
                    Entre em contato para mais informações
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold"
                asChild
              >
                <a href="https://wa.me/5511989150001?text=Olá! Gostaria de mais informações sobre Soluções Digitais" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  Fale Conosco
                </a>
              </Button>
              <Button
                variant="outline"
                className="border-purple-500 text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold"
                asChild
              >
                <a href="/" className="cursor-pointer">Voltar ao Início</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
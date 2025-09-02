import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

export function DevicesFAQ() {
  const faqs = [
    {
      question: "Quais marcas de dispositivos vocês oferecem?",
      answer: "Oferecemos dispositivos das principais marcas do mercado, incluindo Apple (iPhone, iPad), Samsung (Galaxy S, Galaxy Tab), Motorola, Xiaomi e outras marcas premium. Todos os dispositivos são originais e possuem garantia oficial."
    },
    {
      question: "Vocês oferecem desconto para compras em volume?",
      answer: "Sim! Para empresas que compram múltiplos dispositivos, oferecemos descontos progressivos baseados na quantidade. Quanto maior o pedido, maior o desconto. Entre em contato conosco para um orçamento personalizado."
    },
    {
      question: "Como funciona a garantia dos dispositivos?",
      answer: "Todos os dispositivos possuem garantia oficial do fabricante, que varia de 12 a 24 meses dependendo do produto. Além disso, oferecemos garantia estendida e seguro contra danos acidentais para maior tranquilidade."
    },
    {
      question: "Vocês fazem entrega em todo o Brasil?",
      answer: "Sim! Fazemos entrega em todo o território nacional. Para pedidos acima de R$ 5.000, a entrega é gratuita. Em grandes centros urbanos, a entrega pode ser feita em até 24 horas úteis."
    },
    {
      question: "Posso parcelar a compra dos dispositivos?",
      answer: "Sim! Oferecemos diversas opções de parcelamento, incluindo cartão de crédito em até 12x sem juros e financiamento empresarial com condições especiais. Consulte nossas opções de pagamento."
    },
    {
      question: "Como funciona o suporte técnico?",
      answer: "Oferecemos suporte técnico 24/7 através de telefone, chat online e e-mail. Para clientes empresariais, também disponibilizamos suporte presencial e atendimento prioritário. Problemas simples podem ser resolvidos remotamente."
    },
    {
      question: "Vocês fazem configuração dos dispositivos?",
      answer: "Sim! Para clientes empresariais, oferecemos serviço de configuração personalizada, incluindo instalação de aplicativos corporativos, configuração de e-mail empresarial, políticas de segurança e backup inicial dos dados."
    },
    {
      question: "Posso trocar ou devolver um dispositivo?",
      answer: "Oferecemos 30 dias para troca ou devolução de dispositivos não utilizados, desde que estejam em perfeitas condições e na embalagem original. Para dispositivos com defeito, a troca é imediata durante o período de garantia."
    },
    {
      question: "Vocês oferecem seguro para os dispositivos?",
      answer: "Sim! Oferecemos seguro contra roubo, furto e danos acidentais. O seguro cobre reparo ou substituição do dispositivo em caso de sinistro. Consulte nossas opções de cobertura e valores."
    },
    {
      question: "Como funciona o programa de fidelidade?",
      answer: "Nosso programa de fidelidade permite acumular pontos a cada compra. Os pontos podem ser trocados por descontos em futuras compras, upgrades gratuitos ou benefícios exclusivos. Quanto maior o volume de compras, mais benefícios você recebe."
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-purple-100 text-purple-800 hover:bg-purple-200 mb-4">
            FAQ
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tire suas dúvidas sobre nossos dispositivos empresariais e serviços. 
            Se não encontrar a resposta que procura, entre em contato conosco.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg mb-4 bg-white">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:text-purple-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Nossa equipe de especialistas está pronta para ajudar você a escolher 
              os melhores dispositivos para sua empresa.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Suporte disponível</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">5 min</div>
                <div className="text-sm text-gray-600">Tempo médio de resposta</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">Clientes satisfeitos</div>
              </div>
            </div>
            <div className="mt-8">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                Falar com Especialista
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

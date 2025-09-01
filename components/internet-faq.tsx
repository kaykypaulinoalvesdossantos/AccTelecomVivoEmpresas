import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function InternetFAQ() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Dúvidas Frequentes</h2>
          <p className="text-lg text-muted-foreground">Tire suas dúvidas sobre internet empresarial</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Qual a diferença entre Internet Fibra e Internet Dedicada?
              </AccordionTrigger>
              <AccordionContent>
                A Internet Fibra Empresarial oferece alta velocidade com compartilhamento controlado, ideal para a
                maioria das empresas. Já a Internet Dedicada garante 100% da banda contratada exclusivamente para sua
                empresa, com SLA mais rigoroso, sendo recomendada para operações críticas que não podem ter
                interrupções.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">O que está incluso no SLA de 99.9%?</AccordionTrigger>
              <AccordionContent>
                Nosso SLA garante 99.9% de disponibilidade mensal. Caso não seja cumprido, você recebe compensação
                automática proporcional ao tempo de indisponibilidade. Inclui monitoramento 24h, suporte técnico
                prioritário e tempo de resposta garantido para resolução de incidentes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">Quantos IPs fixos estão inclusos nos planos?</AccordionTrigger>
              <AccordionContent>
                Os planos incluem IPs fixos conforme a velocidade: 100MB (1 IP), 300MB (2 IPs), 500MB (5 IPs), 1GB (10
                IPs). IPs adicionais podem ser contratados separadamente. Todos os IPs são válidos e roteáveis na
                internet.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">Como funciona o backup 4G incluso?</AccordionTrigger>
              <AccordionContent>
                O backup 4G é ativado automaticamente em caso de falha na conexão principal. Oferece até 50GB mensais de
                tráfego de backup, garantindo que sua empresa permaneça conectada. A transição é transparente e acontece
                em menos de 30 segundos.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">Qual o prazo para instalação?</AccordionTrigger>
              <AccordionContent>
                A instalação é realizada em até 7 dias úteis após aprovação do projeto técnico. Em locais com
                infraestrutura Vivo disponível, pode ser ainda mais rápida. A instalação é gratuita e inclui
                configuração completa dos equipamentos e testes de conectividade.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Posso migrar meu plano atual sem perder conectividade?
              </AccordionTrigger>
              <AccordionContent>
                Sim! Oferecemos migração sem interrupção do serviço. Nossa equipe técnica coordena a transição para
                garantir zero downtime. Também auxiliamos na portabilidade de números e configurações específicas da sua
                empresa.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}

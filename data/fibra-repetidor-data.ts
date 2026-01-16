// Dados mockados para a página Fibra + Repetidor
// Baseado no print da página oficial da Vivo Empresas

export const fibraRepetidorConfig = {
  // Configurações gerais
  contact: {
    phone: "11 98915-0001",
    whatsapp: "https://wa.me/5511989150001",
    supportHours: "24 horas por dia, 7 dias por semana"
  },

  // Informações do hero
  hero: {
    title: "Garanta a melhor conexão Wi-Fi Mesh",
    subtitle: "Repetidor e Vivo Fibra para elevar os resultados de sua empresa",
    description: "Conecte sua empresa com internet fibra ótica de alta velocidade e repetidor Wi-Fi 6 para cobertura completa em todos os ambientes.",
    primaryButton: "Comprar repetidor",
    secondaryButton: "Falar com Especialista",
    badges: [
      { text: "FRETE GRÁTIS", color: "green" },
      { text: "12x", color: "purple" }
    ]
  },

  // Seção Conheça o Wi-Fi Mesh
  conheca: {
    title: "Conheça o Wi-Fi Mesh",
    description: "O Wi-Fi Mesh é uma tecnologia avançada que cria uma rede sem fio unificada usando múltiplos pontos de acesso. Cada repetidor se comunica com os outros, criando uma malha de conexão que elimina pontos mortos e garante sinal forte em toda a área coberta.",
    benefits: [
      "Cobertura ampla e uniforme",
      "Sem pontos mortos de sinal",
      "Transição automática entre pontos",
      "Fácil instalação e configuração",
      "Suporte a muitos dispositivos simultâneos"
    ],
    product: {
      name: "Repetidor Wi-Fi 6",
      price: "R$ 440",
      installment: "12x sem juros",
      shipping: "Frete grátis",
      button: "Conferir produto"
    }
  },

  // Ofertas de Vivo Fibra + Repetidor
  ofertas: {
    title: "Aproveite as ofertas de Vivo Fibra + repetidor para sua empresa",
    subtitle: "EXCLUSIVO NO SITE",
    plans: [
      {
        id: "fibra-repetidor-400",
        internet: "400 Mega",
        name: "Vivo Fibra + Repetidor",
        price: "R$ 79,99/mês",
        repetidor: {
          name: "Vivo Wi-Fi 6 Repetidor",
          price: "R$ 440"
        },
        popular: false,
        button: "Assinar oferta",
        buttonSecondary: "Mais detalhes"
      },
      {
        id: "fibra-repetidor-500",
        internet: "500 Mega",
        name: "Vivo Fibra + Repetidor",
        price: "R$ 89,99/mês",
        repetidor: {
          name: "Vivo Wi-Fi 6 Repetidor",
          price: "R$ 440"
        },
        popular: false,
        button: "Assinar oferta",
        buttonSecondary: "Mais detalhes"
      },
      {
        id: "fibra-repetidor-700",
        internet: "700 Mega",
        name: "Vivo Fibra + Repetidor",
        price: "R$ 99,99/mês",
        repetidor: {
          name: "Vivo Wi-Fi 6 Repetidor",
          price: "R$ 440"
        },
        popular: true,
        button: "Assinar oferta",
        buttonSecondary: "Mais detalhes"
      },
      {
        id: "fibra-repetidor-1gb",
        internet: "1 Giga",
        name: "Vivo Fibra + Repetidor",
        price: "R$ 299,99/mês",
        repetidor: {
          name: "Vivo Wi-Fi 6 Repetidor",
          price: "R$ 440"
        },
        popular: false,
        button: "Assinar oferta",
        buttonSecondary: "Mais detalhes"
      }
    ]
  },

  // Seção Solução Ideal
  solucao: {
    title: "Solução ideal de conectividade para seu negócio",
    description: "O Wi-Fi Mesh é perfeito para empresas que precisam de conectividade confiável em ambientes amplos. Com múltiplos pontos de acesso, você garante que todos os colaboradores tenham acesso rápido e estável à internet, independentemente de onde estejam na empresa.",
    subtitle: "Exemplos de negócios que podem ser beneficiados pela tecnologia Mesh",
    examples: [
      {
        routers: 1,
        coverage: "350 m²",
        description: "Escritórios pequenos, consultórios médicos, lojas compactas"
      },
      {
        routers: 2,
        coverage: "700 m²",
        description: "Escritórios médios, clínicas, restaurantes pequenos"
      },
      {
        routers: 3,
        coverage: "1050 m²",
        description: "Empresas grandes, hospitais, shopping centers"
      },
      {
        routers: 4,
        coverage: "1400 m²",
        description: "Complexos empresariais, universidades, grandes eventos"
      }
    ],
    features: [
      {
        title: "Ampla cobertura",
        description: "Cobertura uniforme em toda a área da empresa"
      },
      {
        title: "Mais flexibilidade",
        description: "Adicione pontos conforme sua empresa cresce"
      },
      {
        title: "Alta performance",
        description: "Velocidade máxima em todos os dispositivos"
      },
      {
        title: "Sem interrupções",
        description: "Transição automática entre pontos de acesso"
      }
    ]
  },

  // Serviços Inclusos
  servicos: {
    title: "Serviços inclusos nos pacotes de internet para empresas",
    description: "Além da internet fibra ótica e do repetidor Wi-Fi 6, você conta com uma série de serviços exclusivos para empresas.",
    services: [
      {
        title: "Suporte e atendimento especial para empresas",
        description: "Equipe dedicada para resolver suas necessidades empresariais"
      },
      {
        title: "Conexão mais estável",
        description: "Internet fibra ótica com 99,9% de disponibilidade"
      },
      {
        title: "Internet mais rápida do Brasil",
        description: "Velocidade simétrica de até 1GB"
      },
      {
        title: "Instalação Wi-Fi grátis",
        description: "Instalação profissional do repetidor sem custo adicional"
      },
      {
        title: "Aplicativos para seu negócio",
        description: "Ferramentas digitais para gestão empresarial"
      }
    ]
  },

  // FAQ
  faq: {
    title: "Principais dúvidas",
    questions: [
      {
        question: "O que é Wi-Fi Mesh?",
        answer: "Wi-Fi Mesh é uma tecnologia que cria uma rede sem fio unificada usando múltiplos pontos de acesso. Cada repetidor se comunica com os outros, eliminando pontos mortos e garantindo sinal forte em toda a área coberta."
      },
      {
        question: "Qual a diferença entre Wi-Fi 5 e Wi-Fi 6?",
        answer: "O Wi-Fi 6 oferece maior velocidade, menor latência, melhor eficiência energética e suporte a mais dispositivos simultâneos comparado ao Wi-Fi 5."
      },
      {
        question: "O que é Wi-Fi 6?",
        answer: "Wi-Fi 6 é a mais recente geração da tecnologia Wi-Fi, oferecendo velocidades até 3x maiores que o Wi-Fi 5, com melhor performance em ambientes com muitos dispositivos conectados."
      },
      {
        question: "Como faço para instalar o repetidor Wi-Fi?",
        answer: "A instalação é simples e nossa equipe técnica realiza o serviço gratuitamente. O repetidor se conecta automaticamente à sua rede Wi-Fi existente."
      },
      {
        question: "Quantos usuários posso adicionar na minha rede?",
        answer: "O Wi-Fi 6 suporta até 1024 dispositivos simultâneos, muito mais que tecnologias anteriores, ideal para empresas com muitos colaboradores."
      },
      {
        question: "Quantas cidades eu preciso?",
        answer: "A quantidade de repetidores depende do tamanho da sua empresa. Um repetidor cobre até 350m², dois cobrem até 700m², e assim por diante."
      },
      {
        question: "Para comprar o repetidor Wi-Fi, seu prédio precisa ter equipamentos celulares, notebook compatíveis com Wi-Fi?",
        answer: "Sim, é recomendado que os dispositivos sejam compatíveis com Wi-Fi 6 para aproveitar ao máximo a performance, mas também funcionam com dispositivos Wi-Fi 5."
      },
      {
        question: "Qual o diferencial desse repetidor?",
        answer: "Nosso repetidor Wi-Fi 6 oferece cobertura ampla, instalação gratuita, suporte técnico especializado e integração perfeita com a Vivo Fibra."
      }
    ]
  },

  // CTA final
  finalCta: {
    title: "Pronto para ter Wi-Fi Mesh na sua empresa?",
    subtitle: "Fale com nossos especialistas e encontre a solução ideal para sua empresa",
    primaryButton: "Falar com Especialista",
    secondaryButton: "Ver Todos os Pacotes"
  }
}

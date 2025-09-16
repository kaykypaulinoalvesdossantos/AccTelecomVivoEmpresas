export const oitoZeroZeroConfig = {
  hero: {
    badge: "0800 E 0300",
    title: "Rede Inteligente Vivo",
    description: "Para seu cliente, é mais um meio de contato com sua empresa. Para sua empresa, são mais oportunidades de negócios, fidelização e relacionamento com seu cliente!",
    primaryButton: "Solicitar 0800",
    secondaryButton: "Falar com Consultor",
    stats: [
      { number: "0800", label: "Gratuito", icon: "Phone" },
      { number: "0300", label: "Regional", icon: "MapPin" },
      { number: "24/7", label: "Disponível", icon: "Clock" },
      { number: "100%", label: "Nacional", icon: "Globe" }
    ]
  },

  // 0800 Ilimitado Vivo
  plans0800: {
    title: "0800 Ilimitado Vivo",
    contractTerm: "36 meses",
    plans: [
      {
        id: "4-chamadas",
        name: "4 chamadas simultâneas",
        price: "R$ 479,00",
        period: "/mês",
        popular: false,
        features: [
          "Chamadas ilimitadas",
          "URA personalizada",
          "Relatórios básicos",
          "Suporte técnico"
        ]
      },
      {
        id: "6-chamadas",
        name: "6 chamadas simultâneas",
        price: "R$ 699,00",
        period: "/mês",
        popular: true,
        features: [
          "Chamadas ilimitadas",
          "URA avançada",
          "Relatórios detalhados",
          "Suporte prioritário"
        ]
      },
      {
        id: "10-chamadas",
        name: "10 chamadas simultâneas",
        price: "R$ 909,00",
        period: "/mês",
        popular: false,
        features: [
          "Chamadas ilimitadas",
          "URA completa",
          "Relatórios avançados",
          "Suporte premium"
        ]
      },
      {
        id: "15-chamadas",
        name: "15 chamadas simultâneas",
        price: "R$ 1.349,00",
        period: "/mês",
        popular: false,
        features: [
          "Chamadas ilimitadas",
          "URA empresarial",
          "Relatórios completos",
          "Suporte dedicado"
        ]
      },
      {
        id: "30-chamadas",
        name: "30 chamadas simultâneas",
        price: "R$ 2.399,00",
        period: "/mês",
        popular: false,
        features: [
          "Chamadas ilimitadas",
          "URA corporativa",
          "Relatórios executivos",
          "Suporte VIP"
        ]
      },
      {
        id: "60-chamadas",
        name: "60 chamadas simultâneas",
        price: "R$ 4.719,00",
        period: "/mês",
        popular: false,
        features: [
          "Chamadas ilimitadas",
          "URA enterprise",
          "Relatórios customizados",
          "Suporte 24/7"
        ]
      }
    ],
    note: "Valores mínimos! O GN pode aumentar a mensalidade"
  },

  // 0800 Customizado
  plans0800Customizado: {
    title: "0800 Customizado",
    description: "A oferta ideal para customizar o 0800 da Vivo conforme a necessidade do cliente",
    contractTerm: "36 meses",
    tariffs: [
      {
        name: "Tarifa - Local F-F",
        price: "R$ 0,06"
      },
      {
        name: "Tarifa - Local F-M",
        price: "R$ 0,09"
      },
      {
        name: "Tarifa - LDN F-F",
        price: "R$ 0,06"
      },
      {
        name: "Tarifa - LDN F-M",
        price: "R$ 0,09"
      }
    ],
    minimumConsumption: "Você pode adequar o valor do consumo mínimo de acordo com o perfil de uso do cliente."
  },

  // Facilidades Gratuitas
  facilidadesGratuitas: {
    title: "GRÁTIS - Facilidade SUPER",
    features: [
      "Portal de auto serviço",
      "Relatórios online",
      "Bloqueios de telefones públicos",
      "Bloqueio por UF",
      "Mensagem personalizada",
      "Configuração do horário de atendimento"
    ]
  },

  // Serviço URA
  servicoURA: {
    title: "Adicione também o serviço de URA",
    price: "R$ 99",
    period: "por mês",
    description: "URA personalizada com roteamento inteligente e integração completa"
  },

  // Consumo Mínimo
  consumoMinimo: {
    title: "Consumo Mínimo",
    description: "Você pode adequar o valor do consumo mínimo de acordo com o perfil de uso do cliente."
  },

  plans0300: [
    {
      id: "customize-0300",
      name: "Customize",
      description: "Crie seu plano com nossos consultores",
      price: "Sob consulta",
      period: "",
      popular: false,
      features: [
        "Plano personalizado",
        "Consultoria especializada",
        "Configuração sob medida",
        "Suporte dedicado"
      ],
      buttonText: "Consultar"
    },
    {
      id: "0300-basico",
      name: "0300 Básico",
      description: "0300 regional + URA",
      price: "R$ 299",
      period: "/mês",
      popular: false,
      features: [
        "Até 2 linhas simultâneas",
        "URA básica",
        "Relatórios simples",
        "Suporte técnico"
      ],
      buttonText: "Fale com um especialista"
    },
    {
      id: "0300-avancado",
      name: "0300 Avançado",
      description: "0300 regional + URA",
      price: "R$ 449",
      period: "/mês",
      popular: true,
      features: [
        "Até 4 linhas simultâneas",
        "URA avançada",
        "Relatórios detalhados",
        "Suporte prioritário"
      ],
      buttonText: "Fale com um especialista"
    },
    {
      id: "0300-premium",
      name: "0300 Premium",
      description: "0300 regional + URA",
      price: "R$ 649",
      period: "/mês",
      popular: false,
      features: [
        "Até 6 linhas simultâneas",
        "URA completa",
        "Relatórios avançados",
        "Suporte premium"
      ],
      buttonText: "Fale com um especialista"
    }
  ],

  benefits: [
    {
      icon: "Star",
      title: "Maior credibilidade junto aos clientes",
      description: "Números 0800 e 0300 transmitem confiança e profissionalismo para seus clientes"
    },
    {
      icon: "Percent",
      title: "Economia e flexibilidade no recebimento de chamadas",
      description: "Reduza custos operacionais com chamadas gratuitas para seus clientes"
    },
    {
      icon: "BarChart",
      title: "Portal de Relatórios e funcionalidades",
      description: "Acompanhe métricas detalhadas de atendimento e performance"
    },
    {
      icon: "Building",
      title: "Fácil rede de divulgação e memorização do número",
      description: "Números fáceis de lembrar e divulgar em todas as mídias"
    },
    {
      icon: "Phone",
      title: "Possibilidade de operação em conjunto com SIP Trunking e PABX Virtual",
      description: "Integração completa com outras soluções de comunicação"
    },
    {
      icon: "Shield",
      title: "Segurança e confiabilidade",
      description: "Infraestrutura robusta com alta disponibilidade e segurança"
    }
  ],

  howItWorks: [
    {
      step: "1",
      title: "Recepção das Chamadas",
      description: "A plataforma de fácil implantação da Vivo recebe as chamadas, e identifica o número chamado.",
      icon: "Phone"
    },
    {
      step: "2",
      title: "Configuração e Encaminhamento",
      description: "Conforme as configurações definidas, a plataforma encaminha a chamada recebida para o seu 0800, buscando a melhor agenda de espera entre outros.",
      icon: "Settings"
    },
    {
      step: "3",
      title: "Central de Atendimento",
      description: "As chamadas são encaminhadas para o centro de atendimento da sua empresa.",
      icon: "Users"
    },
    {
      step: "4",
      title: "Relatórios e Gestão",
      description: "Acompanhe todas as métricas através da plataforma de performance com informações, relatórios de uso e gestão de chamadas.",
      icon: "BarChart"
    }
  ],

  platform: [
    {
      icon: "BarChart",
      title: "Portal de Relatórios",
      description: "Acompanhe dados como tráfego por horário e suporte relatórios",
      buttonText: "Acessar serviço",
      features: [
        "Relatórios em tempo real",
        "Análise de tráfego por horário",
        "Métricas de atendimento",
        "Exportação de dados"
      ]
    },
    {
      icon: "Settings",
      title: "Portal de Autosserviço",
      description: "Configure e gerencie seus serviços de forma independente",
      buttonText: "Acessar portal",
      features: [
        "Configuração de URA",
        "Gestão de usuários",
        "Configurações de roteamento",
        "Monitoramento em tempo real"
      ]
    },
    {
      icon: "Mic",
      title: "Configurações de URA",
      description: "Personalize a experiência do cliente com URA inteligente",
      buttonText: "Configurar URA",
      features: [
        "Mensagens personalizadas",
        "Roteamento inteligente",
        "Integração com CRM",
        "Gravação de chamadas"
      ]
    }
  ],

  faq: [
    {
      question: "Este é o canal para falar com a Vivo?",
      answer: "Não, este é um serviço para empresas que desejam ter seus próprios números 0800 e 0300. Para falar com a Vivo, use nossos canais de atendimento oficial."
    },
    {
      question: "Qual a diferença entre os números 0800 e 0300?",
      answer: "O 0800 é gratuito para quem liga em todo o território nacional. O 0300 é um número regional que pode ter custos diferenciados dependendo da localização de quem liga."
    },
    {
      question: "Quais os benefícios de contratar 0800 ou 0300 com a Vivo Empresas?",
      answer: "Benefícios incluem maior credibilidade, economia operacional, portal de relatórios completo, fácil memorização do número e integração com outras soluções de comunicação."
    },
    {
      question: "Quem pode contratar os serviços 0800 e 0300?",
      answer: "Qualquer empresa com CNPJ ativo pode contratar nossos serviços de 0800 e 0300. Oferecemos soluções para empresas de todos os portes."
    },
    {
      question: "É possível personalizar o atendimento com 0800 ou 0300?",
      answer: "Sim, oferecemos URA personalizada, configurações de roteamento, mensagens customizadas e integração com sistemas existentes da sua empresa."
    },
    {
      question: "Os números 0800 ou 0300 funcionam com o WhatsApp Business?",
      answer: "Os números 0800 e 0300 são para chamadas de voz. Para WhatsApp Business, você precisará de um número móvel específico para essa funcionalidade."
    },
    {
      question: "Como acompanho o desempenho do meu canal de atendimento?",
      answer: "Através do nosso Portal de Relatórios você pode acompanhar métricas detalhadas como volume de chamadas, tempo de atendimento, horários de pico e muito mais."
    },
    {
      question: "Qual o prazo para ativação do serviço?",
      answer: "O prazo médio para ativação é de 5 a 10 dias úteis após a aprovação da documentação e configuração técnica."
    },
    {
      question: "Existe fidelidade contratual?",
      answer: "Sim, nossos contratos têm fidelidade de 12 meses, com condições especiais para contratos de maior duração."
    },
    {
      question: "É possível contratar um plano personalizado?",
      answer: "Sim, oferecemos o plano Customize que permite criar uma solução sob medida para as necessidades específicas da sua empresa."
    }
  ],

  contact: {
    whatsapp: "https://wa.me/551123629665",
    phone: "1123629665",
    email: "empresas@vivo.com.br"
  }
}

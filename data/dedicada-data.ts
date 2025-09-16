// Dados mockados para a página de Internet Dedicada
// Baseado no print da página oficial da Vivo Empresas

export const dedicadaConfig = {
  // Configurações gerais
  contact: {
    phone: "11 2362-9665",
    whatsapp: "https://wa.me/551123629665",
    supportHours: "24 horas por dia, 7 dias por semana"
  },

  // Informações do hero
  hero: {
    badge: "INTERNET DEDICADA",
    title: "Sua empresa sempre conectada",
    subtitle: "Internet Exclusiva e 100% da velocidade garantida a partir de R$ 89/mês",
    primaryButton: "Contratar plano",
    secondaryButton: "Falar com consultor",
    stats: [
      { number: "99.95%", label: "SLA Garantido", icon: "Shield" },
      { number: "Simétrica", label: "Up = Down", icon: "ArrowUpDown" },
      { number: "1:1", label: "Dedicação", icon: "Users" },
      { number: "4h", label: "Tempo Reparo", icon: "Clock" }
    ]
  },

  // Seção overview
  overview: {
    title: "Internet Dedicada (Link Dedicado): conectividade para sua empresa",
    cards: [
      {
        icon: "Settings",
        title: "Melhores ofertas",
        description: "Planos com preços especiais"
      },
      {
        icon: "Wifi",
        title: "O que é Internet Dedicada",
        description: "Entenda a tecnologia"
      },
      {
        icon: "ArrowRightLeft",
        title: "Diferença entre Internet Dedicada e Vivo Fibra",
        description: "Compare as soluções"
      },
      {
        icon: "Percent",
        title: "Processo de Instalação",
        description: "Como funciona a instalação"
      },
      {
        icon: "HelpCircle",
        title: "Dúvidas Frequentes",
        description: "Tire suas dúvidas"
      }
    ]
  },

  // Planos de internet dedicada
  plans: {
    tabs: ["Internet Dedicada", "Internet Básica"],
    dedicada: [
      {
        id: "dedicada-30",
        name: "Link Dedicado 30 Mega",
        speed: "30 Mbps",
        price: "R$ 500/mês",
        description: "Ideal para pequenas empresas que precisam de conectividade garantida",
        features: [
          "30 Mbps simétrico",
          "SLA 99.9%",
          "IP fixo /29",
          "Suporte 24/7",
          "Tempo reparo 4h",
          "Instalação incluída"
        ],
        popular: false,
        button: "Assinar Link Dedicado"
      },
      {
        id: "dedicada-50",
        name: "Link Dedicado 50 Mega",
        speed: "50 Mbps",
        price: "R$ 700/mês",
        description: "Perfeito para empresas médias com alta demanda de dados",
        features: [
          "50 Mbps simétrico",
          "SLA 99.9%",
          "IP fixo /29",
          "Suporte 24/7",
          "Tempo reparo 4h",
          "Instalação incluída"
        ],
        popular: true,
        button: "Assinar Link Dedicado"
      },
      {
        id: "dedicada-100",
        name: "Link Dedicado 100 Mega",
        speed: "100 Mbps",
        price: "R$ 900/mês",
        description: "Solução completa para empresas de grande porte",
        features: [
          "100 Mbps simétrico",
          "SLA 99.9%",
          "IP fixo /29",
          "Suporte 24/7",
          "Tempo reparo 4h",
          "Instalação incluída"
        ],
        popular: false,
        button: "Assinar Link Dedicado"
      },
      {
        id: "dedicada-custom",
        name: "Acima de 100 Mega",
        speed: "Customizado",
        price: "Consulte valores",
        description: "Soluções personalizadas para grandes corporações",
        features: [
          "Velocidade customizada",
          "SLA 99.9%",
          "IP fixo /29",
          "Suporte 24/7",
          "Tempo reparo 4h",
          "Instalação incluída"
        ],
        popular: false,
        button: "Consultar valores",
        custom: true
      }
    ],
    basica: [
      {
        id: "basica-10",
        name: "Internet Básica 10 Mega",
        speed: "10 Mbps",
        price: "R$ 89/mês",
        originalPrice: "R$ 120/mês",
        discount: "26% OFF",
        description: "Solução econômica para pequenos negócios",
        features: [
          "10 Mbps simétrico",
          "SLA 99.5%",
          "IP fixo /30",
          "Suporte comercial",
          "Tempo reparo 24h",
          "Instalação incluída"
        ],
        popular: false,
        button: "Assinar Internet Básica"
      },
      {
        id: "basica-20",
        name: "Internet Básica 20 Mega",
        speed: "20 Mbps",
        price: "R$ 149/mês",
        originalPrice: "R$ 200/mês",
        discount: "25% OFF",
        description: "Ideal para empresas em crescimento",
        features: [
          "20 Mbps simétrico",
          "SLA 99.7%",
          "IP fixo /29",
          "Suporte prioritário",
          "Tempo reparo 12h",
          "Instalação incluída",
          "Monitoramento básico"
        ],
        popular: true,
        button: "Assinar Internet Básica"
      },
      {
        id: "basica-30",
        name: "Internet Básica 30 Mega",
        speed: "30 Mbps",
        price: "R$ 199/mês",
        originalPrice: "R$ 280/mês",
        discount: "29% OFF",
        description: "Para empresas que precisam de mais velocidade",
        features: [
          "30 Mbps simétrico",
          "SLA 99.8%",
          "IP fixo /28",
          "Suporte especializado",
          "Tempo reparo 8h",
          "Instalação incluída",
          "Monitoramento 24/7",
          "Backup 4G"
        ],
        popular: false,
        button: "Assinar Internet Básica"
      }
    ]
  },

  // Formulário de contato
  contactForm: {
    title: "Vamos Conversar?",
    subtitle: "Entre em contato com a gente para saber sobre Internet Dedicada",
    fields: [
      { name: "nome", label: "Nome completo", type: "text", required: true },
      { name: "telefone", label: "Telefone", type: "tel", required: true },
      { name: "email", label: "E-mail", type: "email", required: true },
      { name: "cnpj", label: "CNPJ", type: "text", required: true }
    ],
    button: "Enviar"
  },

  // Benefícios da conexão exclusiva
  exclusiveConnection: {
    title: "Conexão exclusiva e estabilidade para sua empresa",
    description: "A Internet Dedicada oferece 100% da velocidade garantida, conexão simétrica de upload e download, ideal para empresas que precisam de alta performance e estabilidade em suas operações.",
    benefits: [
      {
        icon: "Bell",
        title: "Atendimento técnico em até 4 horas",
        description: "Suporte especializado com tempo de resposta garantido"
      },
      {
        icon: "FileSearch",
        title: "Relatórios online de desempenho da conectividade",
        description: "Acompanhe a performance da sua conexão em tempo real"
      },
      {
        icon: "Lock",
        title: "Pacotes com proteção de dados, conexões criptografadas e segurança",
        description: "Segurança máxima para seus dados empresariais"
      }
    ],
    button: "Contratar plano"
  },

  // Soluções personalizadas
  tailoredSolutions: {
    title: "Cada empresa tem sua necessidade, a Vivo atende a todas",
    description: "A Vivo Fibra oferece conexões de alta velocidade para diferentes necessidades empresariais, desde navegação básica até operações críticas que exigem estabilidade e performance.",
    button: "Contratar plano"
  },

  // Processo de instalação
  installationProcess: {
    title: "Instalação pensada na sua empresa e sua performance",
    description: "Nosso processo de instalação é cuidadosamente planejado para garantir que sua empresa tenha a melhor experiência possível com a Internet Dedicada.",
    steps: [
      {
        number: 1,
        title: "Restrição de pedido",
        description: "Solicitação do plano dedicado e dados da empresa contratante."
      },
      {
        number: 2,
        title: "Período de análise",
        description: "Envio dos documentos da sua empresa para análise."
      },
      {
        number: 3,
        title: "Processo de agendamento",
        description: "Após a análise, agendaremos a instalação do local e a instalação."
      },
      {
        number: 4,
        title: "Internet Instalada!",
        description: "Sua empresa agora pode aproveitar a Internet Dedicada."
      }
    ],
    button: "Contratar plano"
  },

  // FAQ
  faqs: [
    {
      question: "O que é a Internet Dedicada da Vivo?",
      answer: "A Internet Dedicada da Vivo é um link exclusivo que conecta sua empresa diretamente à nossa rede, garantindo 100% da velocidade contratada 24 horas por dia.",
      category: "dedicada"
    },
    {
      question: "Internet dedicada e banda larga fixa são a mesma coisa?",
      answer: "Não. A Internet Dedicada oferece um link exclusivo para sua empresa, enquanto a banda larga fixa é compartilhada com outros usuários.",
      category: "dedicada"
    },
    {
      question: "Quais são os benefícios da Internet Dedicada da Vivo?",
      answer: "Os principais benefícios incluem velocidade garantida, conexão simétrica, SLA de até 99.95%, suporte especializado e IP fixo.",
      category: "dedicada"
    },
    {
      question: "Como funciona a instalação da Internet Dedicada Vivo?",
      answer: "O processo inclui análise técnica, agendamento da instalação e configuração do equipamento por nossa equipe especializada.",
      category: "dedicada"
    },
    {
      question: "A Internet Dedicada da Vivo inclui modem ou roteador?",
      answer: "Sim, todos os planos incluem o equipamento necessário para a conexão, instalado e configurado por nossa equipe técnica.",
      category: "dedicada"
    },
    {
      question: "Quais modalidades estão disponíveis na contratação de Internet Dedicada?",
      answer: "Oferecemos diferentes modalidades de contratação, incluindo planos mensais e contratos de longo prazo com condições especiais.",
      category: "dedicada"
    },
    {
      question: "Quais velocidades estão disponíveis na Internet Dedicada Vivo?",
      answer: "Oferecemos velocidades a partir de 30 Mbps até velocidades customizadas acima de 100 Mbps, todas com conexão simétrica.",
      category: "dedicada"
    },
    {
      question: "Qual o portfólio de gerenciamento está disponível ao contratar a Internet Dedicada da Vivo?",
      answer: "Oferecemos portal de gerenciamento com relatórios de performance, monitoramento em tempo real e suporte técnico especializado.",
      category: "dedicada"
    },
    {
      question: "Como resolver problemas de acesso aos portais?",
      answer: "Nossa equipe de suporte técnico está disponível 24/7 para resolver qualquer problema de acesso aos portais de gerenciamento.",
      category: "dedicada"
    },
    {
      question: "Qual a latência do link de Internet Dedicada da Vivo?",
      answer: "A latência da Internet Dedicada da Vivo é extremamente baixa, garantindo performance ideal para aplicações críticas.",
      category: "dedicada"
    },
    {
      question: "Qual a diferença entre link dedicado e internet dedicada?",
      answer: "Link dedicado e Internet Dedicada são termos que se referem à mesma tecnologia: uma conexão exclusiva para sua empresa.",
      category: "dedicada"
    }
  ],

  // LAN-to-LAN FAQs
  lanToLanFaqs: [
    {
      question: "O que é LAN-to-LAN?",
      answer: "LAN-to-LAN é uma tecnologia que permite conectar redes locais de diferentes locais através de uma conexão dedicada.",
      category: "lan-to-lan"
    },
    {
      question: "Quais são os benefícios do LAN-to-LAN?",
      answer: "Os benefícios incluem conectividade segura entre filiais, compartilhamento de recursos e comunicação unificada.",
      category: "lan-to-lan"
    }
  ],

  // CTA final
  finalCta: {
    title: "Precisa de um link dedicado?",
    subtitle: "Fale com nossos especialistas e receba uma proposta personalizada para sua empresa",
    primaryButton: "Solicitar Proposta",
    secondaryButton: "Falar com Especialista"
  }
}

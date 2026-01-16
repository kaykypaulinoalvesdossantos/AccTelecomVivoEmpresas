// Dados mockados para a página de Rede Corporativa
// Baseado no print da página oficial da Vivo Empresas

export const redeCorporativaConfig = {
  // Configurações gerais
  contact: {
    phone: "11 98915-0001",
    whatsapp: "https://wa.me/5511989150001",
    supportHours: "24 horas por dia, 7 dias por semana"
  },

  // Informações do hero
  hero: {
    badge: "REDE VPN CORPORATIVA",
    title: "Rede VPN: soluções de internet corporativa",
    subtitle: "Conectividade segura e confiável para sua empresa",
    description: "A Vivo oferece soluções MPLS VPN para comunicação corporativa, garantindo qualidade de serviço e segurança total para sua rede empresarial.",
    primaryButton: "Solicitar Proposta",
    secondaryButton: "Falar com Especialista",
    stats: [
      { number: "99.9%", label: "Disponibilidade", icon: "Shield" },
      { number: "24/7", label: "Suporte", icon: "Clock" },
      { number: "MPLS", label: "Tecnologia", icon: "Network" },
      { number: "Global", label: "Cobertura", icon: "Globe" }
    ]
  },

  // Benefícios da Rede VPN
  benefits: {
    title: "Benefícios e vantagens da Rede VPN:",
    items: [
      {
        icon: "Shield",
        title: "Segurança",
        description: "Segurança total com ambiente dedicado e isolado para sua empresa"
      },
      {
        icon: "Network",
        title: "Plataforma completa",
        description: "Integração completa com a rede da sua empresa utilizando tecnologia MPLS"
      },
      {
        icon: "TrendingUp",
        title: "Escalabilidade e flexibilidade",
        description: "Expansão fácil e modificação de circuitos conforme suas necessidades"
      },
      {
        icon: "Settings",
        title: "Praticidade",
        description: "Instalação e manutenção simplificadas para máxima praticidade"
      },
      {
        icon: "Headphones",
        title: "Suporte",
        description: "Suporte nacional e internacional 24 horas por dia, 7 dias por semana"
      }
    ]
  },

  // Soluções disponíveis
  solutions: {
    title: "Escolha a melhor solução para a sua empresa",
    tabs: ["Banda Larga", "Internet Dedicada", "LAN/WAN", "Internet Box"],
    activeTab: "Banda Larga",
    descriptions: {
      bandaLarga: "Internet banda larga para aplicações que exigem alta performance e conectividade estável para sua empresa.",
      internetDedicada: "Internet dedicada com link exclusivo garantindo 100% da velocidade contratada 24 horas por dia.",
      lanWan: "Soluções LAN/WAN para conectar filiais e escritórios com segurança e alta performance.",
      internetBox: "Internet Box com conectividade 4G para áreas onde a fibra não chega."
    }
  },

  // Planos de fibra empresarial
  fiberPlans: [
    {
      id: "fibra-400",
      name: "400 Mega",
      price: "R$ 79,99/mês",
      features: [
        "Instalação e Wi-Fi Grátis",
        "Vivo Valoriza"
      ],
      popular: false,
      button: "Assine Já"
    },
    {
      id: "fibra-700",
      name: "700 Mega",
      price: "R$ 99,99/mês",
      badge: "MELHOR OFERTA DO MÊS",
      features: [
        "700 Mega + 25 GB - MBM",
        "Instalação e Wi-Fi Grátis",
        "Vivo Valoriza"
      ],
      popular: true,
      button: "Assine Já"
    },
    {
      id: "fibra-600",
      name: "600 Mega",
      price: "R$ 94,99/mês",
      features: [
        "Instalação e Wi-Fi Grátis",
        "Vivo Valoriza"
      ],
      popular: false,
      button: "Assine Já"
    },
    {
      id: "fibra-500",
      name: "500 Mega",
      price: "R$ 89,99/mês",
      features: [
        "500 Mega + Microsoft 365",
        "Instalação e Wi-Fi Grátis",
        "Vivo Valoriza"
      ],
      popular: false,
      button: "Assine Já"
    }
  ],

  // VPN ponto a ponto
  vpnPointToPoint: {
    title: "VPN ponto a ponto Data, Multi ou Prime",
    description: "Serviços VPN MPLS para comunicação segura entre filiais, priorização de aplicações e qualidade de serviço garantida.",
    services: [
      {
        id: "gerenciamento-redes",
        title: "Gerenciamento de Redes: VPN, IP e WAN sob Controle",
        description: "Controle total da sua infraestrutura de rede com monitoramento avançado",
        image: "/professional-business-team-using-smartphones-in-mo.png",
        button: "Confira mais"
      },
      {
        id: "wifi-nova-geracao",
        title: "Wi-Fi: a nova geração da conectividade sem fio",
        description: "Conectividade Wi-Fi de última geração para máxima performance",
        image: "/professional-businesswoman.png",
        button: "Confira mais"
      },
      {
        id: "seguranca-internet",
        title: "Proteja seu negócio: 7 dicas de segurança na internet",
        description: "Dicas essenciais de segurança para pequenas e médias empresas",
        image: "/professional-businessman.png",
        button: "Confira mais"
      }
    ]
  },

  // FAQ
  faq: {
    title: "Rede VPN Corporativa: principais dúvidas",
    questions: [
      {
        question: "O que é VPN?",
        answer: "VPN (Virtual Private Network) é uma tecnologia que cria uma conexão segura e criptografada entre sua empresa e a internet, garantindo privacidade e segurança dos dados."
      },
      {
        question: "O que significa VPN?",
        answer: "VPN significa Virtual Private Network (Rede Privada Virtual), uma tecnologia que permite criar uma conexão segura através de uma rede pública como a internet."
      },
      {
        question: "Como conectar a uma rede corporativa?",
        answer: "Para conectar a uma rede corporativa, você precisa de credenciais fornecidas pela empresa e um cliente VPN configurado em seu dispositivo."
      },
      {
        question: "Quais são os contatos da Central de Relacionamento para serviços de Dados?",
        answer: "Para serviços de dados, entre em contato pelo telefone 11 98915-0001 ou através do WhatsApp. Nossa equipe está disponível 24/7."
      },
      {
        question: "Onde consultar as informações detalhadas dos serviços?",
        answer: "As informações detalhadas dos serviços podem ser consultadas através do portal de autoatendimento ou entrando em contato com nossa equipe comercial."
      },
      {
        question: "Como solicitar o cancelamento dos serviços?",
        answer: "Para solicitar o cancelamento dos serviços, entre em contato com nossa equipe comercial pelo telefone 11 98915-0001 ou através do WhatsApp."
      },
      {
        question: "O que é MPLS?",
        answer: "MPLS (Multiprotocol Label Switching) é uma tecnologia que permite criar redes privadas virtuais com qualidade de serviço garantida e alta performance."
      },
      {
        question: "O que é MPLS e como ele utiliza QoS e CoS?",
        answer: "MPLS utiliza QoS (Quality of Service) e CoS (Class of Service) para criar VPNs seguras e escaláveis, garantindo priorização de tráfego e qualidade de serviço."
      },
      {
        question: "O que é protocolo MPLS?",
        answer: "O protocolo MPLS é um protocolo de rede que utiliza rótulos para encaminhar pacotes de dados de forma eficiente e segura através da rede."
      },
      {
        question: "É possível priorizar o tráfego em uma rede VPN MPLS?",
        answer: "Sim, é possível priorizar o tráfego em uma rede VPN MPLS utilizando tecnologias QoS e CoS para garantir que aplicações críticas tenham prioridade."
      },
      {
        question: "Quais os pacotes disponíveis para o produto de VPN IP?",
        answer: "Oferecemos diversos pacotes para VPN IP, incluindo soluções básicas, intermediárias e avançadas, adaptadas às necessidades de cada empresa."
      },
      {
        question: "Onde consultar informações detalhadas sobre o contrato?",
        answer: "As informações detalhadas sobre o contrato podem ser consultadas através do portal de autoatendimento ou entrando em contato com nossa equipe comercial."
      }
    ]
  },

  // CTA final
  finalCta: {
    title: "Pronto para conectar sua empresa com segurança?",
    subtitle: "Fale com nossos especialistas e receba uma proposta personalizada para sua rede corporativa",
    primaryButton: "Solicitar Proposta",
    secondaryButton: "Falar com Especialista"
  }
}

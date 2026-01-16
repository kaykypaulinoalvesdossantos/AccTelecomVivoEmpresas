export const sipTrunkingConfig = {
  hero: {
    badge: "SIP TRUNKING",
    title: "Voz Avançada Ilimitado Nacional",
    description: "O cliente não se preocupa com a conta no final do mês e fala ilimitado para fixo e móvel nacional",
    primaryButton: "Contratar SIP Trunking",
    secondaryButton: "Falar com Consultor",
    stats: [
      { number: "10", label: "Canais", icon: "Phone" },
      { number: "R$ 450", label: "A partir de", icon: "DollarSign" },
      { number: "24/7", label: "Suporte", icon: "Headphones" },
      { number: "100%", label: "Confiabilidade", icon: "Shield" }
    ]
  },

  overview: {
    title: "Solução de Telefonia IP de alta performance e confiabilidade",
    description: "O SIP Trunking é uma solução de conexão IP para estabelecer comunicação entre sua empresa e a Vivo, oferecendo uma alternativa moderna e flexível às linhas telefônicas tradicionais.",
    plans: [
      {
        id: "10-canais",
        channels: "10 Canais",
        price: "R$ 450,00",
        period: "/mês",
        features: [
          "Chamadas nacionais ilimitadas",
          "Instalação gratuita",
          "Manutenção 24x7",
          "Suporte técnico especializado"
        ],
        popular: false
      },
      {
        id: "15-canais",
        channels: "15 Canais",
        price: "R$ 645,00",
        period: "/mês",
        features: [
          "Chamadas nacionais ilimitadas",
          "Instalação gratuita",
          "Manutenção 24x7",
          "Suporte técnico especializado",
          "Relatórios detalhados"
        ],
        popular: true
      },
      {
        id: "30-canais",
        channels: "30 Canais",
        price: "R$ 1.200,00",
        period: "/mês",
        features: [
          "Chamadas nacionais ilimitadas",
          "Instalação gratuita",
          "Manutenção 24x7",
          "Suporte técnico especializado",
          "Relatórios detalhados",
          "API personalizada"
        ],
        popular: false
      },
      {
        id: "60-canais",
        channels: "60 Canais",
        price: "R$ 2.159,00",
        period: "/mês",
        features: [
          "Chamadas nacionais ilimitadas",
          "Instalação gratuita",
          "Manutenção 24x7",
          "Suporte técnico especializado",
          "Relatórios detalhados",
          "API personalizada",
          "Gestão avançada"
        ],
        popular: false
      },
      {
        id: "90-canais",
        channels: "90 Canais",
        price: "R$ 3.229,00",
        period: "/mês",
        features: [
          "Chamadas nacionais ilimitadas",
          "Instalação gratuita",
          "Manutenção 24x7",
          "Suporte técnico especializado",
          "Relatórios detalhados",
          "API personalizada",
          "Gestão avançada",
          "Suporte prioritário"
        ],
        popular: false
      }
    ]
  },

  // Chamada Identificada
  chamadaIdentificada: {
    title: "Chamada Identificada",
    subtitle: "Mais segurança para seus clientes contra chamadas fraudulentas!",
    description: "O Chamada Identificada (Stir Shaken) é um conjunto de padrões e protocolos de rede usados para verificação e autenticação da origem da chamada. Tais protocolos garantem que o número de telefone exibido no identificador de chamadas não foi falsificado, uma prática conhecida como spoofing.",
    price: "R$ 1,70/mês",
    priceNote: "* Valor por canal contratado no SIP Prateleira. Consultar valores para o SIP Rajada",
    features: [
      "Chamada autenticada através de um selo de verificação",
      "Nome da empresa que está realizando a ligação",
      "Motivo da ligação através de um breve descritivo",
      "Logo da empresa para melhor identificação da marca"
    ],
    availability: "Disponível para vendas nas ofertas de 1P e 2P",
    contractTerm: "36 meses",
    integration: "O Chamada Identificada funciona em conjunto com o SIP Trunking da Vivo",
    integrationNote: "Caso o cliente já possua o serviço SIP da Vivo e deseje contratar o Chamada Identificada, será necessário renegociar seu contrato incluindo o novo produto.",
    importantNotes: [
      "Não há a possibilidade de inclusão do serviço parcialmente nos canais",
      "O serviço é incluído em todos os canais que o cliente possui"
    ],
    regulatoryNote: "Conforme determinação da Anatel, todos os clientes que geram 10 mil ou mais chamadas diárias, serão obrigadas a utilizar os serviços de 0303 ou Chamada Identificada!"
  },

  // Conversor R2
  conversorR2: {
    title: "Conversor R2",
    description: "Não é necessário selecionar o Conversor! Após o input do Vivo SIP a equipe de pós-vendas identificará se o cliente precisará ou não do conversor e em caso positivo, o equipamento será disponibilizado no momento da instalação, sem custo extra!",
    additionalInfo: "Para mais informações do processo acesse o portal VivoB2B"
  },

  // Oferta 2P
  oferta2P: {
    title: "Oferta 2P",
    subtitle: "Vamos acelerar a captura de clientes com mais benefícios e preços competitivos!",
    benefits: [
      "Disponível nas tecnologias GPON, Fibra Dedicada e ERB",
      "Ofertas com Voz Ilimitado Nacional",
      "Válido para as sinalizações SIP",
      "Opções com roteador, gestão básica Monitora",
      "Todas as taxas de instalação são isentas"
    ],
    mainOffer: "Disponível a venda de SIP (10, 15 ou 30 canais) com qualquer velocidade de DADOS!",
    sipOptions: ["10 Canais", "15 Canais", "30 Canais"],
    internetSpeeds: [
      "50 Mega",
      "100 Mega",
      "200 Mega",
      "300 Mega¹",
      "400 Mega¹",
      "500 Mega²",
      "700 Mega³",
      "900 Mega³"
    ],
    flexibility: "Mais Flexibilidade para atender o seu Cliente!",
    conditions: [
      "Consulte viabilidade no SigSeum para verificar se está apto para venda de SIP",
      "Trade-in apenas para Dados",
      "Ofertas válidas para contratos de 36 meses",
      "Válido somente para Altas",
      "Não válido para Provedor e Call Center",
      "¹ Disponível apenas em GPON, ERB e Fibra SWA SP",
      "² 500 Mega apenas em ERB",
      "³ 700 e 900 Mega apenas em SWA SP"
    ]
  },

  // Condições Gerais
  generalConditions: {
    title: "Condições Gerais",
    conditions: [
      "Valores com impostos",
      "Tarifas internacionais: consulte os valores no Simplifique",
      "Taxa de instalação: GRÁTIS",
      "Prazo Contratual: 36 meses. Outros prazos consulte no Simplifique",
      "Para ERB há necessidade de ter numeração disponível/homologada Anatel para efetuar a venda de VIVO SIP",
      "Não válido para Projeto Especial",
      "Não disponível para clientes callcenter ou com tráfego rajada",
      "Somente 1 oferta por endereço",
      "Acesso ERB: liberada para venda na opção de 10 a 150 canais"
    ]
  },

  target: {
    title: "Para quem a solução de SIP Trunking é indicada?",
    audiences: [
      {
        icon: "Phone",
        title: "Grande Volume de Chamadas",
        description: "Clientes com grande volume de chamadas internas, pois permite que um canal de voz tenha até cinco ramais (recomendado)"
      },
      {
        icon: "Building",
        title: "Jornada Presencial e Híbrida",
        description: "Empresa com jornada presencial e híbrida, que mantém aparelhos fixos dentro do escritório"
      },
      {
        icon: "ArrowRight",
        title: "Direcionamento de Chamadas",
        description: "Empresas que direcionam chamadas recebidas a diferentes canais para agilizar o atendimento"
      },
      {
        icon: "CheckCircle",
        title: "Disponibilidade Contínua",
        description: "Empresas que precisam manter o número principal sempre disponível, transferindo ligações para outros canais"
      }
    ]
  },

  benefits: [
    {
      icon: "Map",
      title: "Chamadas Nacionais Ilimitadas",
      description: "Planos com chamadas nacionais ilimitadas com ou sem PABX Físico"
    },
    {
      icon: "Wrench",
      title: "Instalação Gratuita",
      description: "A instalação é gratuita e conta com manutenção 24x7"
    },
    {
      icon: "Shield",
      title: "Compatibilidade Total",
      description: "Solução compatível com aparelhos telefônicos analógicos e IP"
    },
    {
      icon: "Handshake",
      title: "Pacotes Flexíveis",
      description: "Pacotes de acordo com a quantidade de canais necessária"
    },
    {
      icon: "Volume2",
      title: "Qualidade de Som",
      description: "Eliminação de ruídos nas chamadas"
    },
    {
      icon: "ArrowRight",
      title: "Facilidade DDR",
      description: "Facilidade DDR para recebimento de ligações externas sem passar por telefonista"
    },
    {
      icon: "Lock",
      title: "Segurança Total",
      description: "Impossibilidade de interferência externa (grampos)"
    },
    {
      icon: "Star",
      title: "Integração Completa",
      description: "Possibilidade de operação em conjunto com 0800, 0300 e MUN"
    }
  ],

  security: {
    title: "Chamada Identificada e SIP Trunking: segurança e confiabilidade em cada ligação",
    description: "A Chamada Identificada (Caller ID, também conhecida como Stir Shaken) é uma tecnologia avançada para verificar e autenticar chamadas, prevenindo fraudes e garantindo segurança quando integrada ao SIP Trunking da Vivo.",
    benefits: [
      {
        icon: "Handshake",
        title: "Confiança nas Relações",
        description: "Confiança nas relações entre Empresa e Cliente"
      },
      {
        icon: "Shield",
        title: "Redução de Fraudes",
        description: "Redução significativa de tentativas de fraude"
      },
      {
        icon: "Users",
        title: "Fidelização de Clientes",
        description: "Maior fidelização de clientes através da confiança"
      },
      {
        icon: "FileCheck",
        title: "Conformidade Regulamentar",
        description: "Conformidade com regulamentações de telecomunicações"
      }
    ]
  },

  faq: [
    {
      question: "O que é e como funciona o SIP Trunking da Vivo?",
      answer: "O SIP Trunking é uma solução de telefonia IP que conecta sua empresa à rede da Vivo através de uma conexão IP dedicada, oferecendo alta qualidade de voz e recursos avançados de telefonia."
    },
    {
      question: "Qual a diferença entre SIP Trunking, VoIP e linha fixa tradicional?",
      answer: "O SIP Trunking é uma conexão IP dedicada para empresas, o VoIP é a tecnologia de voz sobre IP, e a linha fixa tradicional usa infraestrutura analógica. O SIP Trunking oferece melhor qualidade e recursos."
    },
    {
      question: "Posso usar minha própria conexão com o SIP Trunking Vivo?",
      answer: "Sim, você pode usar sua própria conexão de internet, mas recomendamos uma conexão dedicada para garantir a melhor qualidade de voz e confiabilidade."
    },
    {
      question: "O que são canais e ramais, e qual a relação entre eles?",
      answer: "Canais são as conexões simultâneas de voz, enquanto ramais são as extensões internas. Um canal pode suportar até 5 ramais simultâneos."
    },
    {
      question: "Tenho um PABX com sinalização R2/RDSI. Posso contratar o SIP Trunking?",
      answer: "Sim, nossa solução é compatível com PABX analógicos e digitais, incluindo sistemas com sinalização R2/RDSI."
    },
    {
      question: "Qual o prazo de instalação do SIP Trunking?",
      answer: "O prazo de instalação é de até 15 dias úteis após a aprovação do projeto técnico e disponibilidade de infraestrutura."
    },
    {
      question: "Como funciona a cobrança do SIP Trunking?",
      answer: "A cobrança é mensal e inclui o valor dos canais contratados, chamadas nacionais ilimitadas e suporte técnico 24/7."
    },
    {
      question: "O que é aglutinação de faturas e como solicitar?",
      answer: "Aglutinação permite unificar várias faturas em uma única conta. Pode ser solicitada através do nosso atendimento comercial."
    },
    {
      question: "Posso usar IP fixo com o SIP Trunking da Vivo?",
      answer: "Sim, oferecemos IP fixo como opção adicional para maior estabilidade e segurança na conexão."
    }
  ],

  contact: {
    whatsapp: "https://wa.me/5511989150001",
    phone: "11989150001",
    email: "empresas@vivo.com.br"
  }
}

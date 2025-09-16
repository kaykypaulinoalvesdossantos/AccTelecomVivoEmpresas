export const numeroUnicoConfig = {
  hero: {
    badge: "NÚMERO ÚNICO NACIONAL",
    title: "Número Único Nacional – NUN",
    subtitle: "Recursos sofisticados para o serviço Número Único Nacional",
    description: "Funciona de forma que todas as chamadas recebidas são tarifadas como ligações locais para quem realizou a chamada. Nessa modalidade de serviço, os custos das ligações são compartilhados entre a empresa e o cliente.",
    primaryButton: "Contratar Agora",
    secondaryButton: "Falar com Consultor",
    stats: [
      { number: "67", label: "Localidades", icon: "MapPin" },
      { number: "24/7", label: "Suporte", icon: "Headphones" },
      { number: "100%", label: "Nacional", icon: "Globe" },
      { number: "Baixo", label: "Custo", icon: "DollarSign" }
    ]
  },

  // Planos de Prateleira
  planosPrateleira: {
    title: "10 opções de planos de prateleira",
    tariffs: {
      title: "Tarifas",
      range: "R$ 0,0301 Até R$ 0,1022"
    },
    subscription: {
      title: "Assinatura por CNL Contratada",
      price: "R$ 39,09"
    }
  },

  // Plano Flex
  planoFlex: {
    title: "Opção Plano Flex",
    tariffs: {
      title: "Tarifa Customizada",
      simulation: "Simule no Simplifique/VSW"
    },
    subscription: {
      title: "Assinatura por CNL Contratada",
      price: "R$ 39,09"
    }
  },

  // Facilidades
  facilidades: {
    title: "Facilidades",
    features: [
      "Agendamento por data",
      "Agendamento por horário",
      "Distribuição cíclica",
      "Distribuição sequencial",
      "Distribuição percentual",
      "Restrição de área de abrangência - Fixo",
      "Restrição de área de abrangência – Móvel",
      "Seleção de origem",
      "Mensagem personalizada",
      "Reencaminhamento"
    ],
    monthlyFee: {
      title: "Mensalidade por facilidade e por CN contratada",
      price: "R$ 38,52"
    }
  },

  // Informações Importantes
  importantInfo: [
    "Não é permitido compartilhar o consumo mínimo de Rede Inteligente com a oferta Ilimitado Nacional",
    "Disponível nas 67 CN's atendidas pela rede Vivo",
    "Os valores de assinaturas e facilidades são cobrados por CNL contratada",
    "O preço da fatura mensal é composto pela assinatura por CNLs, somado ao tráfego utilizado, de acordo com a tarifa"
  ],

  benefits: [
    {
      icon: "DollarSign",
      title: "Redução de gastos com telefonia",
      description: "Sua empresa divide os custos de ligação com o organizador de chamada"
    },
    {
      icon: "TrendingUp",
      title: "Otimização dos investimentos",
      description: "Um número único divulgado nas principais cidades do Brasil e que facilita a comunicação com o seu cliente. Disponível em 67 localidades."
    },
    {
      icon: "Phone",
      title: "Redução de gastos com a comunicação",
      description: "Você paga a mesma tarifa para receber chamadas tanto de fixo quanto de móvel"
    },
    {
      icon: "Headphones",
      title: "Suporte",
      description: "Atendimento para sua empresa 24h por dia, sete dias por semana, a partir do Centro de Operações Vivo"
    }
  ],

  differentials: [
    {
      icon: "BarChart",
      title: "Portal de relatórios",
      description: "Com as informações sobre o perfil das chamadas atendidas e não atendidas"
    },
    {
      icon: "Settings",
      title: "Portal de autosserviços",
      description: "Para configuração online, sem necessidade de abertura de chamados na central"
    },
    {
      icon: "User",
      title: "Informações padronizadas",
      description: "E customizadas sobre a não possibilidade de atendimento das chamadas"
    }
  ],

  howItWorks: [
    {
      step: "1",
      title: "Cliente Liga",
      description: "O cliente liga para o número único nacional de qualquer lugar do Brasil",
      icon: "Phone"
    },
    {
      step: "2",
      title: "Tarifação Local",
      description: "O cliente paga apenas uma tarifa de chamada local, independente da distância",
      icon: "DollarSign"
    },
    {
      step: "3",
      title: "Transferência",
      description: "A empresa arca com os custos de transferência até sua sede central",
      icon: "ArrowRight"
    },
    {
      step: "4",
      title: "Atendimento",
      description: "A chamada é direcionada para sua central de atendimento",
      icon: "Headphones"
    }
  ],

  plans: [
    {
      id: "basico",
      name: "Básico",
      description: "Número único nacional",
      price: "Sob consulta",
      period: "",
      popular: false,
      features: [
        "Até 2 linhas simultâneas",
        "URA básica",
        "Relatórios simples",
        "Suporte técnico"
      ],
      buttonText: "Contratar"
    },
    {
      id: "avancado",
      name: "Avançado",
      description: "Número único nacional + URA",
      price: "Sob consulta",
      period: "",
      popular: true,
      features: [
        "Até 4 linhas simultâneas",
        "URA avançada",
        "Relatórios detalhados",
        "Suporte prioritário"
      ],
      buttonText: "Contratar"
    },
    {
      id: "premium",
      name: "Premium",
      description: "Número único nacional + URA",
      price: "Sob consulta",
      period: "",
      popular: false,
      features: [
        "Até 6 linhas simultâneas",
        "URA completa",
        "Relatórios avançados",
        "Suporte premium"
      ],
      buttonText: "Contratar"
    },
    {
      id: "customize",
      name: "Customize",
      description: "Plano personalizado",
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
    }
  ],

  faq: [
    {
      question: "Como funciona o Número Único Nacional?",
      answer: "O cliente liga para o número único e paga apenas uma tarifa de chamada local, independente da distância. A empresa arca com os custos de transferência até sua sede central."
    },
    {
      question: "Em quantas localidades está disponível?",
      answer: "O serviço está disponível em 67 localidades principais do Brasil, cobrindo todas as regiões do país."
    },
    {
      question: "Qual a diferença entre Número Único e 0800?",
      answer: "No Número Único, o cliente paga uma tarifa local e a empresa arca com a transferência. No 0800, a empresa paga todo o custo da chamada."
    },
    {
      question: "Posso personalizar o atendimento?",
      answer: "Sim, oferecemos URA personalizada, configurações de roteamento e integração com sistemas existentes da sua empresa."
    },
    {
      question: "Como acompanho as chamadas?",
      answer: "Através do nosso Portal de Relatórios você pode acompanhar métricas detalhadas como volume de chamadas, tempo de atendimento e origem das ligações."
    },
    {
      question: "Qual o prazo para ativação?",
      answer: "O prazo médio para ativação é de 5 a 10 dias úteis após a aprovação da documentação e configuração técnica."
    },
    {
      question: "Existe fidelidade contratual?",
      answer: "Sim, nossos contratos têm fidelidade de 12 meses, com condições especiais para contratos de maior duração."
    },
    {
      question: "Posso integrar com outros sistemas?",
      answer: "Sim, oferecemos integração com PABX Virtual, SIP Trunking e outros sistemas de comunicação empresarial."
    }
  ],

  contact: {
    whatsapp: "https://wa.me/551123629665",
    phone: "1123629665",
    email: "empresas@vivo.com.br"
  }
}

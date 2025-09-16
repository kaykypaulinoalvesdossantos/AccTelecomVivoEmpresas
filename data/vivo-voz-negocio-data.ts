export const vivoVozNegocioConfig = {
  hero: {
    badge: "VIVO VOZ NEGÓCIO",
    title: "Oferta Aquisição Licença Padrão",
    subtitle: "O Vivo Voz Negócio é ideal para clientes que querem combinar plano de voz ilimitada e PABX com menor investimento",
    description: "Solução completa de central telefônica virtual com PABX e plano de voz ilimitado. Disponível via Simplifique/VSW e FÊNIX para Novas Altas.",
    primaryButton: "Contratar Agora",
    secondaryButton: "Falar com Consultor",
    availability: {
      simplifique: "Disponível via Simplifique/VSW (Alta, Portabilidade, Renegociação e Migração)",
      fenix: "FÊNIX para Novas Altas"
    },
    stats: [
      { number: "HD", label: "Qualidade", icon: "Phone" },
      { number: "24/7", label: "Suporte", icon: "Headphones" },
      { number: "100+", label: "Funcionalidades", icon: "Settings" },
      { number: "99.9%", label: "Disponibilidade", icon: "Shield" }
    ]
  },

  // Licenças Padrão
  standardLicenses: {
    title: "Licença Padrão",
    description: "Valores compostos pela Licença do PABX Virtual + Plano de Voz Ilimitado",
    tiers: [
      {
        range: "1 a 4 Licenças",
        price24: "R$ 55,00/mês",
        price36: "R$ 50,00/mês"
      },
      {
        range: "5 a 8 Licenças",
        price24: "R$ 50,00/mês",
        price36: "R$ 45,00/mês"
      },
      {
        range: "9 a 20 Licenças",
        price24: "R$ 45,00/mês",
        price36: "R$ 40,00/mês"
      },
      {
        range: "21 a 30 Licenças",
        price24: "R$ 40,00/mês",
        price36: "R$ 35,00/mês"
      },
      {
        range: "31 Licenças ou mais",
        price24: "R$ 35,00/mês",
        price36: "R$ 30,00/mês"
      }
    ]
  },

  // Licenças Call Center
  callCenterLicenses: {
    title: "Licença Call Center",
    description: "De 01 a 100** Licenças",
    maxLicenses: "Máximo de contratação de 100 Licenças Call Center por CNPJ",
    tiers: [
      {
        range: "De 01 a 100 Licenças",
        price24: "R$ 60,00/mês",
        price36: "R$ 55,00/mês"
      }
    ],
    features: {
      supervisor: [
        "Interceptação de chamadas",
        "Monitoramento de chamadas",
        "Sussurro que é falar com o agente sem que o cliente final escute",
        "Dashboard de acompanhamento da fila de atendimento",
        "Dashboard de acompanhamento dos agentes logados",
        "Relatórios agendados"
      ],
      agent: [
        "Loga e desloga na fila de atendimento",
        "Login e logout em múltiplas filas de atendimento",
        "Dashboard para o agente",
        "Código personalizado para pausas no atendimento com tabulações como 'Pausa para almoço', 'Banheiro'"
      ]
    }
  },

  // Serviços Adicionais
  additionalServices: {
    title: "Serviços Adicionais",
    services: [
      {
        name: "URA (Interactive Voice Response)",
        icon: "Headphones",
        options: [
          {
            type: "Com 01 nível",
            price: "R$ 40,00/mês"
          },
          {
            type: "Multinível",
            price: "R$ 50,00/mês"
          }
        ],
        note: "Valores URA para 24 e 36 meses"
      },
      {
        name: "Gravador de Ligações",
        icon: "Mic",
        price: "R$ 20,00/mês",
        note: "Valor por licença",
        availability: "Disponível apenas no Simplifique/VSW"
      }
    ]
  },

  // Oferta de Teste
  trialOffer: {
    title: "Oferta de Teste",
    description: "O cliente poderá contratar e testar até cinco licenças sem incidência de multa caso o contrato for cancelado até 30 dias depois da ativação do produto. Utilize esse argumento no contrato de Vivo Voz Negócio no simplifique, para alavancar suas vendas."
  },

  features: [
    {
      icon: "Phone",
      title: "Central Virtual Completa",
      description: "Gerencie todas as chamadas da sua empresa com uma central telefônica moderna e intuitiva"
    },
    {
      icon: "Mic",
      title: "Gravação de Chamadas",
      description: "Registre todas as conversas com qualidade HD e armazenamento seguro em nuvem"
    },
    {
      icon: "BarChart",
      title: "Relatórios Detalhados",
      description: "Analise métricas de comunicação e otimize o atendimento da sua equipe"
    },
    {
      icon: "Users",
      title: "Distribuição Inteligente",
      description: "Direcione chamadas automaticamente para o profissional mais adequado"
    },
    {
      icon: "Smartphone",
      title: "App Mobile",
      description: "Gerencie sua central telefônica de qualquer lugar com nosso aplicativo móvel"
    },
    {
      icon: "Shield",
      title: "Segurança Total",
      description: "Criptografia de ponta a ponta e conformidade com LGPD"
    }
  ],

  benefits: [
    {
      icon: "TrendingUp",
      title: "Aumento de Produtividade",
      description: "Reduza o tempo de resposta e melhore a eficiência do atendimento"
    },
    {
      icon: "DollarSign",
      title: "Redução de Custos",
      description: "Elimine gastos com equipamentos físicos e manutenção"
    },
    {
      icon: "Globe",
      title: "Flexibilidade Total",
      description: "Trabalhe de qualquer lugar com acesso remoto à central"
    },
    {
      icon: "BarChart",
      title: "Insights Valiosos",
      description: "Relatórios detalhados para otimizar sua comunicação"
    },
    {
      icon: "Shield",
      title: "Conformidade LGPD",
      description: "Total conformidade com a Lei Geral de Proteção de Dados"
    },
    {
      icon: "Headphones",
      title: "Suporte Especializado",
      description: "Equipe técnica especializada em comunicação empresarial"
    }
  ],

  faq: [
    {
      question: "O que é o Vivo Voz Negócio?",
      answer: "É uma solução completa de central telefônica virtual que permite gerenciar todas as comunicações da sua empresa através de uma plataforma em nuvem."
    },
    {
      question: "Como funciona a gravação de chamadas?",
      answer: "Todas as chamadas são gravadas automaticamente em qualidade HD e armazenadas de forma segura na nuvem, com acesso controlado por permissões."
    },
    {
      question: "Posso integrar com meu CRM?",
      answer: "Sim, oferecemos integração com os principais sistemas de CRM do mercado, incluindo Salesforce, HubSpot, RD Station e outros."
    },
    {
      question: "Quantos ramais posso ter?",
      answer: "Depende do plano escolhido: Licença Padrão (1-31+ licenças) e Call Center (até 100 licenças por CNPJ)."
    },
    {
      question: "Como funciona o suporte técnico?",
      answer: "Oferecemos suporte especializado para todas as funcionalidades da central telefônica virtual."
    },
    {
      question: "Posso usar o sistema remotamente?",
      answer: "Sim, nossa solução é 100% em nuvem e inclui app mobile para gerenciamento completo de qualquer lugar."
    },
    {
      question: "A solução é compatível com LGPD?",
      answer: "Sim, nossa plataforma é totalmente compatível com a LGPD, incluindo criptografia de dados e controles de acesso."
    },
    {
      question: "Como é feito o treinamento da equipe?",
      answer: "Oferecemos treinamento online, documentação completa e suporte especializado para configuração."
    }
  ],

  // Informações técnicas importantes
  technicalInfo: [
    "Recomendamos que a utilização do produto VVN seja configurada em smartphones (iOS e Android), computadores ou notebooks (Windows e MAC), ATA e aparelhos IP Homologados",
    "Compatível com qualquer rede de Internet, inclusive 4G, Vivo ou concorrência",
    "Referência: cliente deve reservar 6 Mbps de Up/Down em seu link para trafegar até 30 chamadas simultâneas",
    "Trade In não disponível para o produto Vivo Voz Negócio!"
  ],

  contact: {
    whatsapp: "https://wa.me/551123629665",
    phone: "1123629665",
    email: "empresas@vivo.com.br"
  }
}

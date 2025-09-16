export const zero303Config = {
  hero: {
    badge: "AVANÇADOS",
    title: "Código não Geográfico 0303",
    subtitle: "Após a instalação do Vivo SIP Rajada Flex deverá ser gerado o contrato de 0303",
    description: "O Ato nº 10.413/2021 da Anatel, estipula o uso do Código não Geográfico 0303 para todas as empresas que realizam oferta de produtos e serviços por telefone.",
    primaryButton: "Contratar Agora",
    secondaryButton: "Falar com Consultor"
  },

  // Premissas para contratação
  premises: [
    {
      icon: "Phone",
      title: "Vivo Sip Rajada Flex",
      description: "Agora o cliente deverá contratar o serviço de Vivo Sip Rajada Flex para atender a comercialização do 0303"
    },
    {
      icon: "User",
      title: "Processo de Contratação",
      description: "Após a ativação do Vivo Sip Rajada na modalidade FLEX, deverá ser contratado o serviço de 0303. A reserva de numeração do 0303 deverá ser realizada no site da ABR Telecom e posteriormente aberto um protocolo no InfoB2B. Consulte o Guia de Processos!"
    }
  ],

  // Informações sobre tarifação
  pricing: {
    title: "Tarifação das Ligações",
    description: "As ligações serão tarifadas de acordo com o plano do Vivo Sip Rajada Flex. O contrato de 0303 não tarifará as ligações convertidas neste número, e o cliente só pagará caso deseje contratar, as facilidades Básica, Avançada e URA, disponíveis para o 0303."
  },

  // Benefícios dos Portais
  portalBenefits: {
    title: "Benefícios dos Portais de Rede Inteligente",
    description: "Ao contratar o Serviço de 0303 da Vivo, o cliente terá todos os benefícios dos Portais de Rede Inteligente!",
    portals: [
      {
        icon: "BarChart",
        title: "Portal de Relatórios Inbound"
      },
      {
        icon: "Monitor",
        title: "Portal de Auto-Atendimento"
      }
    ],
    note: "Clique aqui para mais informações do Portal RI"
  },

  // Facilidades e Valores
  facilidades: [
    {
      name: "Super",
      price: "Grátis"
    },
    {
      name: "Básica",
      price: "R$ 15,00*"
    },
    {
      name: "Avançada",
      price: "R$ 30,00*"
    },
    {
      name: "URA",
      price: "R$ 99,00*"
    }
  ],

  // Funcionalidades por tipo
  funcionalidades: [
    {
      name: "Relatório de Tráfego",
      basica: true,
      avancada: true,
      super: true,
      ura: false
    },
    {
      name: "Bloqueios (Móvel + Telefone Público)",
      basica: true,
      avancada: true,
      super: true,
      ura: false
    },
    {
      name: "Restrição de chamada (Código nacional, Área Local, Município e Agenda)",
      basica: true,
      avancada: true,
      super: true,
      ura: false
    },
    {
      name: "Distribuição de chamada (cíclica, percentual e sequencial)",
      basica: false,
      avancada: true,
      super: true,
      ura: false
    },
    {
      name: "Seleção de Origem",
      basica: false,
      avancada: true,
      super: true,
      ura: false
    },
    {
      name: "Reencaminamento",
      basica: false,
      avancada: true,
      super: true,
      ura: false
    },
    {
      name: "Controle da fila de atendimento",
      basica: false,
      avancada: false,
      super: true,
      ura: false
    },
    {
      name: "Personalização do áudio",
      basica: false,
      avancada: false,
      super: true,
      ura: false
    },
    {
      name: "Criação e manipulação de Ura",
      basica: false,
      avancada: false,
      super: false,
      ura: true
    }
  ],

  // Informações importantes
  importantInfo: [
    "O Vivo SIP Rajada Flex precisa estar ativo, para que seja possível configurar os ramais de encaminhamento que serão convertidos no número 0303",
    "Empresas que contratam serviços de Call Center com terceiros serão responsáveis pela contratação do CNG 0303. O Call Center por sua vez, será responsável por adquirir a estrutura de Vivo SIP Rajada Flex"
  ],

  contact: {
    whatsapp: "https://wa.me/551123629665",
    phone: "1123629665",
    email: "empresas@vivo.com.br"
  }
}

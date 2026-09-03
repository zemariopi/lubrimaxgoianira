/**
 * Dados editáveis da LUBRIMAX.
 * Substitua os placeholders assim que as informações reais forem confirmadas.
 */

export const CONTATO = {
  // Somente números, com DDI. Ex.: 5562999999999
  whatsappNumero: "55NUMEROAQUI",
  whatsappExibicao: "[WHATSAPP]",
  mensagem:
    "Olá, vim pelo site da LUBRIMAX e gostaria de consultar um atendimento para meu veículo.",
  endereco: "[ENDEREÇO COMPLETO]",
  cidade: "Goianira - GO",
  horario: "[HORÁRIO DE FUNCIONAMENTO]",
  // Cole aqui a URL de incorporação real do Google Maps
  mapaEmbedUrl: "[EMBED / URL REAL DO GOOGLE MAPS]",
};

export const whatsappHref = `https://wa.me/${CONTATO.whatsappNumero}?text=${encodeURIComponent(
  CONTATO.mensagem,
)}`;

export const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Lubrimax", href: "#lubrimax" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Localização", href: "#localizacao" },
  { label: "Dúvidas", href: "#duvidas" },
];

export const SERVICOS = [
  {
    icone: "Droplets",
    nome: "Troca de óleo",
    descricao: "Troca com o óleo indicado para o seu veículo.",
  },
  {
    icone: "Filter",
    nome: "Filtros",
    descricao: "Filtros para manter o motor trabalhando limpo.",
  },
  {
    icone: "Container",
    nome: "Lubrificantes",
    descricao: "Lubrificantes para diferentes tipos de uso.",
  },
  {
    icone: "Beaker",
    nome: "Fluidos automotivos",
    descricao: "Reposição e verificação de fluidos essenciais.",
  },
  {
    icone: "ClipboardCheck",
    nome: "Verificação de itens essenciais",
    descricao: "Conferência de pontos básicos de manutenção.",
  },
  {
    icone: "Wrench",
    nome: "Outros serviços automotivos",
    descricao: "Consulte a equipe para confirmar o atendimento.",
  },
] as const;

export const AVALIACOES = [
  { texto: "[AVALIAÇÃO REAL 01]", autor: "[NOME DO CLIENTE 01]" },
  { texto: "[AVALIAÇÃO REAL 02]", autor: "[NOME DO CLIENTE 02]" },
  { texto: "[AVALIAÇÃO REAL 03]", autor: "[NOME DO CLIENTE 03]" },
];

export const FAQ = [
  {
    pergunta: "Como sei qual óleo meu carro utiliza?",
    resposta:
      "Informe o modelo, o ano e a motorização do seu veículo pelo WhatsApp para receber a orientação da equipe.",
  },
  {
    pergunta: "Vocês fazem troca de óleo?",
    resposta: "Sim. Entre em contato para consultar o atendimento para o seu veículo.",
  },
  {
    pergunta: "Preciso falar antes de ir?",
    resposta:
      "Você pode chamar pelo WhatsApp para consultar o atendimento e tirar dúvidas antes de se deslocar.",
  },
  {
    pergunta: "Quais produtos e serviços a LUBRIMAX oferece?",
    resposta:
      "Consulte a equipe pelo WhatsApp para confirmar o produto ou serviço que você procura.",
  },
  {
    pergunta: "Como chegar à LUBRIMAX?",
    resposta: "A LUBRIMAX está em Goianira-GO. Consulte o mapa disponível nesta página.",
  },
];

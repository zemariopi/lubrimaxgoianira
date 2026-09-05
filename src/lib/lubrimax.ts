/**
 * Dados editáveis da LUBRIMAX.
 * Substitua os placeholders assim que as informações reais forem confirmadas.
 */

export const CONTATO = {
  // Somente números, com DDI. Ex.: 5562999999999
  whatsappNumero: "5562984521986",
  whatsappExibicao: "(62) 98452-1986",
  mensagem:
    "Olá, vim pelo site da LUBRIMAX e gostaria de consultar um atendimento para meu veículo.",
  endereco: "R. Faria Lima, Goianira - GO, 75370-000",
  cidade: "Goianira - GO",
  horario: "Segunda a sexta: 8h às 18h · Sábado: 8h às 12h · Domingo: fechado",
  mapaEmbedUrl:
    "https://www.google.com/maps?q=R.%20Faria%20Lima%2C%20Goianira%20-%20GO%2C%2075370-000&output=embed",
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
    icone: "Disc3",
    nome: "Sistema de freios",
    descricao: "Verificação dos itens do sistema de freios.",
  },
  {
    icone: "Thermometer",
    nome: "Sistema de arrefecimento",
    descricao: "Cuidados com o sistema de arrefecimento do motor.",
  },
  {
    icone: "Snowflake",
    nome: "Ar-condicionado automotivo",
    descricao: "Atendimento para o ar-condicionado do veículo.",
  },
  {
    icone: "Wrench",
    nome: "Outros cuidados automotivos",
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
    pergunta: "Onde fica a LUBRIMAX?",
    resposta:
      "A LUBRIMAX fica em Goianira-GO. O endereço completo será informado nesta página.",
  },
];

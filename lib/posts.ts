// Mock data inicial — será substituído por queries ao Neon na Fase 2.
// O schema final terá esses campos + content (markdown), publishedAt, isPublished.

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO YYYY-MM-DD
  readingTime: string;
  author: string;
  cover?: string | null;
  content: string;
};

const posts: Post[] = [
  {
    slug: "inventario-extrajudicial",
    title: "Inventário extrajudicial: quando vale a pena fazer em cartório",
    excerpt:
      "A Lei 11.441/2007 permite que herdeiros maiores e em acordo façam o inventário diretamente em cartório, em semanas em vez de anos. Veja os requisitos, prazos e custos comparados ao judicial.",
    category: "Sucessões · Imobiliário",
    date: "2026-05-13",
    readingTime: "6 min",
    author: "Joyce Philot Porto",
    cover:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1400&q=80",
    content: `Por décadas, abrir inventário era sinônimo de processo judicial — com anos esperando em fila no fórum, advogado, custas, audiências, herdeiros ansiosos e bens parados. A **Lei 11.441/2007** mudou esse cenário ao permitir que o inventário fosse feito diretamente em cartório, em semanas, desde que cumpridos alguns requisitos.

Quase 20 anos depois, ainda encontramos famílias que vão direto pro judicial por desconhecimento. Vamos esclarecer quando o caminho extrajudicial é viável, como funciona e qual é a economia real.

## O que é o inventário extrajudicial

É a forma de transferir os bens deixados pelo falecido (herança) diretamente aos herdeiros, sem passar pela Justiça. O ato é lavrado em **escritura pública** no Tabelionato de Notas, com base em documentos apresentados pelas partes e pelo advogado.

A escritura tem o mesmo valor jurídico de uma sentença judicial de partilha — registra-se em cartório de imóveis (no caso de bens imóveis), no DETRAN (no caso de veículos), nos bancos (no caso de contas e investimentos), e a transferência é concluída.

## Quando é possível usar o caminho extrajudicial

Os requisitos básicos são quatro:

- **Todos os herdeiros são maiores de idade** (e capazes).
- **Há consenso entre os herdeiros** quanto à partilha — não há disputa.
- **Não há testamento** (com exceções recentes em casos específicos validados pelo CNJ).
- **Todas as partes estão representadas por advogado(s)** — pode ser o mesmo profissional, se não houver conflito de interesse.

> Se algum herdeiro for menor de idade, incapaz ou se houver disputa quanto à partilha, o caminho obrigatório é o judicial.

## Quanto tempo demora um e outro?

| Etapa | Extrajudicial | Judicial |
|---|---|---|
| Reunião documental | 2 a 4 semanas | 2 a 4 semanas |
| Análise e protocolo | 1 a 2 semanas | 1 a 6 meses |
| Lavratura / sentença | 2 a 4 semanas | 6 meses a vários anos |
| **Total estimado** | **1 a 3 meses** | **8 meses a 5+ anos** |

## E os custos?

O **ITCMD** (imposto estadual sobre transmissão causa mortis) é igual nos dois caminhos — varia de 4% a 8% conforme o estado e o valor do patrimônio.

O que muda:

- **Custas judiciais** (no judicial): 1% a 2% do valor da herança.
- **Emolumentos cartoriais** (no extrajudicial): tabelados por estado, geralmente menor.
- **Honorários advocatícios**: tendem a ser menores no extrajudicial.

Na prática, o inventário extrajudicial custa **30% a 50% menos** que o judicial.

## Quando procurar a banca

Após o falecimento, o prazo legal para abrir inventário é de **60 dias**. Passado esse prazo, incide multa sobre o ITCMD em vários estados.

Se você tem uma situação envolvendo sucessão e quer entender o caminho certo para o seu caso, fale com a banca.`,
  },
  {
    slug: "usucapiao",
    title: "Usucapião: 4 modalidades de regularização de imóvel",
    excerpt:
      "Ocupação de imóvel por anos pode gerar direito à propriedade. Mas existem 4 modalidades diferentes (ordinária, extraordinária, especial e familiar) e cada uma exige requisitos próprios. Entenda.",
    category: "Imobiliário · Registral",
    date: "2026-05-06",
    readingTime: "8 min",
    author: "Fabiano Nogueira Porto",
    cover:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1400&q=80",
    content: `Quem ocupa um imóvel por anos, sem oposição do proprietário, pode adquirir o direito à propriedade através da **usucapião**.

É um instituto antigo do direito civil — está no Código Civil desde 1916 — mas que segue gerando dúvidas porque tem várias modalidades, cada uma com requisitos diferentes.

## O que toda usucapião exige

Independentemente da modalidade, três elementos são sempre necessários:

- **Posse mansa e pacífica**: sem oposição do verdadeiro proprietário durante todo o prazo.
- **Posse contínua**: sem interrupção significativa do uso.
- **Animus domini**: a posse com intenção de ser dono — não apenas como inquilino ou comodatário.

> Quem aluga um imóvel **não** pode usucapir, porque a posse é precária.

## As 4 modalidades

### 1. Usucapião extraordinária

- **Prazo:** 15 anos (ou 10 se houver moradia habitual ou obras produtivas)
- **Requisitos extra:** nenhum
- **Quando usar:** ocupa há muitos anos mas não tem documento algum

### 2. Usucapião ordinária

- **Prazo:** 10 anos (ou 5 com moradia habitual)
- **Requisitos extra:** justo título + boa-fé
- **Quando usar:** comprou o imóvel mas a escritura nunca foi registrada

### 3. Usucapião especial (urbana ou rural)

- **Prazo:** 5 anos
- **Requisitos extra (urbana):** imóvel até 250m², morar no imóvel, não ter outra propriedade
- **Quando usar:** imóvel pequeno usado como moradia única

### 4. Usucapião familiar

- **Prazo:** 2 anos
- **Requisitos extra:** ex-cônjuge abandonou o lar, posse exclusiva, imóvel urbano até 250m²
- **Quando usar:** abandono do lar conjugal há mais de 2 anos

## Judicial ou extrajudicial?

Desde 2015, a usucapião pode ser feita **diretamente em cartório**. Mas só dá certo quando há consenso de todos os confrontantes. Se alguém contestar, volta pro judicial.

## Quando procurar a banca

Antes de iniciar qualquer ação, é essencial fazer um **diagnóstico** do imóvel. Evita prosseguir num caminho que vai falhar.

Se você ocupa um imóvel há anos e quer regularizar, fale com a banca.`,
  },
];

export function getAllPosts(): Post[] {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug);
}

export function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const months = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];
  return `${String(d).padStart(2, "0")} de ${months[m - 1]} de ${y}`;
}

-- =====================================================================
-- Migration 001 — Schema inicial
-- =====================================================================

-- Configurações chave-valor (paleta, efeitos da logo, hero mode/image, etc.)
CREATE TABLE IF NOT EXISTS settings (
  key        VARCHAR(64) PRIMARY KEY,
  value      TEXT NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Equipe (advogados + apoio)
CREATE TABLE IF NOT EXISTS team_members (
  id              SERIAL PRIMARY KEY,
  name            VARCHAR(255) NOT NULL,
  role            VARCHAR(128) NOT NULL,
  oab_credentials TEXT[],
  photo_url       TEXT,
  initials        VARCHAR(4),
  bio             TEXT,
  display_order   INTEGER NOT NULL DEFAULT 0,
  is_active       BOOLEAN NOT NULL DEFAULT TRUE,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS team_members_active_order_idx
  ON team_members (is_active, display_order);

-- Artigos do blog
CREATE TABLE IF NOT EXISTS posts (
  id            SERIAL PRIMARY KEY,
  slug          VARCHAR(255) NOT NULL UNIQUE,
  title         VARCHAR(255) NOT NULL,
  excerpt       TEXT NOT NULL,
  category      VARCHAR(128),
  cover_url     TEXT,
  content       TEXT NOT NULL,
  author        VARCHAR(128),
  reading_time  VARCHAR(32),
  is_published  BOOLEAN NOT NULL DEFAULT FALSE,
  published_at  TIMESTAMPTZ,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS posts_published_idx
  ON posts (is_published, published_at DESC);

-- =====================================================================
-- Seed inicial
-- =====================================================================

-- Configurações default
INSERT INTO settings (key, value) VALUES
  ('palette',             'navy'),
  ('hero_mode',           'logo'),
  ('hero_image_url',      ''),
  ('hero_logo_entrance',  'slide'),
  ('hero_logo_idle',      'none')
ON CONFLICT (key) DO NOTHING;

-- Equipe inicial (espelho do mock data anterior)
INSERT INTO team_members
  (name,                       role,                  oab_credentials,                                  initials, bio,                                                                              display_order)
VALUES
  ('Fabiano Nogueira Porto',   'Sócio fundador',     ARRAY['OAB/RJ 136.764', 'OAB/ES 40.045'],         'FP',     NULL,                                                                             1),
  ('Joyce Philot Porto',       'Sócia',              ARRAY['OAB/ES 39.084'],                            'JP',     NULL,                                                                             2),
  ('Adriana Monteiro',         'Advogada',           ARRAY['OAB/RJ 219.879'],                            'AM',     NULL,                                                                             3),
  ('Regiane Negreiro',         'Advogada',           ARRAY['OAB/RJ 246.420'],                            'RN',     NULL,                                                                             4),
  ('Mariana Silva',            'Assistente Jurídica', NULL,                                              'MS',     'Atendimento ao cliente, organização de processos e acompanhamento de prazos.', 5),
  ('Carla Santos',             'Secretária',         NULL,                                              'CS',     'Agenda, recepção, documentação e suporte administrativo aos dois escritórios.', 6)
ON CONFLICT DO NOTHING;

-- Posts iniciais (espelho dos 2 artigos do mock)
INSERT INTO posts (slug, title, excerpt, category, cover_url, content, author, reading_time, is_published, published_at)
VALUES (
  'inventario-extrajudicial',
  'Inventário extrajudicial: quando vale a pena fazer em cartório',
  'A Lei 11.441/2007 permite que herdeiros maiores e em acordo façam o inventário diretamente em cartório, em semanas em vez de anos. Veja os requisitos, prazos e custos comparados ao judicial.',
  'Sucessões · Imobiliário',
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1400&q=80',
  E'Por décadas, abrir inventário era sinônimo de processo judicial — com anos esperando em fila no fórum, advogado, custas, audiências, herdeiros ansiosos e bens parados. A **Lei 11.441/2007** mudou esse cenário ao permitir que o inventário fosse feito diretamente em cartório, em semanas, desde que cumpridos alguns requisitos.\n\nQuase 20 anos depois, ainda encontramos famílias que vão direto pro judicial por desconhecimento. Vamos esclarecer quando o caminho extrajudicial é viável, como funciona e qual é a economia real.\n\n## O que é o inventário extrajudicial\n\nÉ a forma de transferir os bens deixados pelo falecido (herança) diretamente aos herdeiros, sem passar pela Justiça. O ato é lavrado em **escritura pública** no Tabelionato de Notas.\n\n## Quando é possível usar o caminho extrajudicial\n\nOs requisitos básicos são quatro:\n\n- Todos os herdeiros são maiores de idade\n- Há consenso entre os herdeiros quanto à partilha\n- Não há testamento\n- Todas as partes estão representadas por advogado(s)\n\n> Se algum herdeiro for menor de idade ou houver disputa, o caminho obrigatório é o judicial.\n\n## Quando procurar a banca\n\nApós o falecimento, o prazo legal é de **60 dias** pra abrir inventário, sob pena de multa sobre o ITCMD.',
  'Joyce Philot Porto',
  '6 min',
  TRUE,
  '2026-05-13'::timestamptz
), (
  'usucapiao',
  'Usucapião: 4 modalidades de regularização de imóvel',
  'Ocupação de imóvel por anos pode gerar direito à propriedade. Mas existem 4 modalidades diferentes (ordinária, extraordinária, especial e familiar) e cada uma exige requisitos próprios. Entenda.',
  'Imobiliário · Registral',
  'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1400&q=80',
  E'Quem ocupa um imóvel por anos, sem oposição do proprietário, pode adquirir o direito à propriedade através da **usucapião**.\n\nÉ um instituto antigo do direito civil, mas que segue gerando dúvidas porque tem várias modalidades.\n\n## O que toda usucapião exige\n\n- Posse mansa e pacífica\n- Posse contínua\n- Animus domini\n\n## As 4 modalidades\n\n### 1. Extraordinária\n\nPrazo de 15 anos (ou 10 com moradia habitual). Não exige justo título nem boa-fé.\n\n### 2. Ordinária\n\nPrazo de 10 anos (ou 5 com moradia). Exige justo título + boa-fé.\n\n### 3. Especial\n\nPrazo de 5 anos. Imóvel pequeno usado como moradia única.\n\n### 4. Familiar\n\nPrazo de 2 anos. Casos de abandono do lar conjugal.\n\n## Quando procurar a banca\n\nAntes de iniciar, fazemos diagnóstico do imóvel pra evitar caminhos inviáveis.',
  'Fabiano Nogueira Porto',
  '8 min',
  TRUE,
  '2026-05-06'::timestamptz
)
ON CONFLICT (slug) DO NOTHING;

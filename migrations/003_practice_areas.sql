-- Migration: tabela practice_areas
-- Contexto: cria CRUD de áreas de atuação editáveis pelo admin.
-- Antes era hardcoded em components/Areas.tsx; agora vem do DB com seed
-- contendo as 8 áreas originais.

CREATE TABLE IF NOT EXISTS practice_areas (
  id            SERIAL PRIMARY KEY,
  title         VARCHAR(128) NOT NULL,
  body          TEXT NOT NULL,
  icon          VARCHAR(64) NOT NULL DEFAULT 'document',
  highlighted   BOOLEAN NOT NULL DEFAULT FALSE,
  display_order INTEGER NOT NULL DEFAULT 0,
  is_active     BOOLEAN NOT NULL DEFAULT TRUE,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS practice_areas_active_order_idx
  ON practice_areas (is_active, display_order);

-- Seed com as 8 áreas que estavam hardcoded em components/Areas.tsx
INSERT INTO practice_areas (title, body, icon, highlighted, display_order, is_active)
VALUES
  (
    'Direito Imobiliário',
    'Compra e venda, contratos, regularização, usucapião, despejo, reintegração de posse. Atuação extrajudicial em cartórios.',
    'house', TRUE, 1, TRUE
  ),
  (
    'Direito de Família',
    'Divórcio, guarda, pensão alimentícia, união estável, regime de bens e planejamento sucessório familiar.',
    'heart', FALSE, 2, TRUE
  ),
  (
    'Sucessões',
    'Inventário judicial e extrajudicial, testamento, partilha em vida e regularização de heranças.',
    'document', FALSE, 3, TRUE
  ),
  (
    'Direito do Consumidor',
    'Indenizações, vício de produto, cobrança indevida, negativação indevida e relações de consumo em geral.',
    'cart', FALSE, 4, TRUE
  ),
  (
    'Trabalhista',
    'Rescisões, verbas indenizatórias, assédio, FGTS, horas extras e consultoria pra empregadores.',
    'briefcase', FALSE, 5, TRUE
  ),
  (
    'Previdenciário',
    'Aposentadorias, BPC/LOAS, revisão de benefícios, auxílio-doença e planejamento previdenciário.',
    'shield', FALSE, 6, TRUE
  ),
  (
    'Criminal',
    'Defesa em inquéritos e ações penais, audiências de custódia, recursos e direito penal econômico.',
    'gavel', FALSE, 7, TRUE
  ),
  (
    'Pessoas com Deficiência',
    'Defesa de direitos garantidos pelo Estatuto da PCD, benefícios, acessibilidade e responsabilidade civil.',
    'accessibility', FALSE, 8, TRUE
  )
ON CONFLICT DO NOTHING;

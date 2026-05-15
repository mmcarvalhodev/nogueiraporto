# Nogueira Porto Advogados — Site Institucional

Site institucional da banca **Nogueira Porto Advogados** (Niterói, RJ + Vila Velha, ES).

Áreas: Direito Imobiliário, Registral e Notarial · Família · Sucessões · Consumidor · Trabalhista · Previdenciário · Criminal · Pessoas com Deficiência.

## Status do projeto

| Fase | Estado |
|---|---|
| Mockup HTML estático | ✅ Concluído |
| Versão Next.js + admin | 🚧 Em desenvolvimento |
| Deploy de produção | 🟡 Aguardando aprovação do cliente |

## Mockup atual (esta versão)

Mockup HTML estático para validação visual com o cliente. Inclui:

- Home com hero, áreas de atuação, equipe, FAQ, contato e listagem de artigos
- 2 páginas de artigo de teste (inventário extrajudicial · usucapião)
- 3 paletas de cores selecionáveis (Marinho · Verde · Preto & Dourado)
- Efeitos da logo configuráveis (entrada + contínuo)
- Modal de qualificação antes do WhatsApp
- Responsivo (mobile-first)

**Preview público:** https://nogueiraporto-preview.netlify.app

## Estrutura

```
.
├── index.html                          Home institucional
├── logo-np.png                         Logo da banca
└── artigos/
    ├── inventario-extrajudicial.html
    └── usucapiao.html
```

## Próximos passos

1. Aprovação visual pelo cliente (paleta + efeitos da logo)
2. Migração para Next.js 16 + TypeScript + Tailwind
3. Painel administrativo (gestão de equipe + posts editáveis)
4. Integração Neon (PostgreSQL) + Cloudinary (imagens)
5. Deploy no Netlify (auto-deploy via GitHub)
6. Apontamento do domínio `nogueiraporto.adv.br`

## Stack final prevista

- **Framework:** Next.js 16 (App Router, Server Actions)
- **Estilo:** Tailwind CSS v4 + Cormorant Garamond + Inter
- **Banco:** Neon (PostgreSQL serverless · São Paulo)
- **Imagens:** Cloudinary (upload assinado)
- **Hospedagem:** Netlify (auto-deploy)
- **Domínio:** nogueiraporto.adv.br (mantido no Registro.br)

## Desenvolvido por

M. M. Carvalho · MEI 41.180.810/0001-54

📧 mmcarvalho.dev@gmail.com · 💬 (21) 99809-2744

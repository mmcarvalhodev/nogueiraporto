type Area = {
  title: string;
  body: string;
  highlighted?: boolean;
  icon: React.ReactNode;
};

const areas: Area[] = [
  {
    title: "Direito Imobiliário",
    body: "Compra e venda, contratos, regularização, usucapião, despejo, reintegração de posse. Atuação extrajudicial em cartórios.",
    highlighted: true,
    icon: (
      <path d="M3 12l9-9 9 9M5 10v10h14V10" />
    ),
  },
  {
    title: "Direito de Família",
    body: "Divórcio, guarda, pensão alimentícia, união estável, regime de bens e planejamento sucessório familiar.",
    icon: (
      <path d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.18L12 21z" />
    ),
  },
  {
    title: "Sucessões",
    body: "Inventário judicial e extrajudicial, testamento, partilha em vida e regularização de heranças.",
    icon: <path d="M3 7h18M3 12h18M3 17h12" />,
  },
  {
    title: "Direito do Consumidor",
    body: "Indenizações, vício de produto, cobrança indevida, negativação indevida e relações de consumo em geral.",
    icon: (
      <>
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.7 13.4a2 2 0 002 1.6h9.7a2 2 0 002-1.6L23 6H6" />
      </>
    ),
  },
  {
    title: "Trabalhista",
    body: "Rescisões, verbas indenizatórias, assédio, FGTS, horas extras e consultoria pra empregadores.",
    icon: (
      <>
        <rect x="4" y="6" width="16" height="14" rx="2" />
        <path d="M8 6V4a2 2 0 014 0v2" />
      </>
    ),
  },
  {
    title: "Previdenciário",
    body: "Aposentadorias, BPC/LOAS, revisão de benefícios, auxílio-doença e planejamento previdenciário.",
    icon: (
      <>
        <path d="M5 8a7 7 0 1114 0A7 7 0 015 8z" />
        <path d="M9 14l-2 7 5-3 5 3-2-7" />
      </>
    ),
  },
  {
    title: "Criminal",
    body: "Defesa em inquéritos e ações penais, audiências de custódia, recursos e direito penal econômico.",
    icon: <path d="M3 12l3 3 5-5 4 4 6-6" />,
  },
  {
    title: "Pessoas com Deficiência",
    body: "Defesa de direitos garantidos pelo Estatuto da PCD, benefícios, acessibilidade e responsabilidade civil.",
    icon: (
      <>
        <circle cx="12" cy="8" r="3" />
        <path d="M12 11v6M8 14h8" />
      </>
    ),
  },
];

export default function Areas() {
  return (
    <section id="areas" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="text-[11px] uppercase tracking-[0.3em] text-accent mb-3">
            Áreas de atuação
          </div>
          <h2
            className="font-serif text-3xl md:text-4xl mb-4"
            style={{ color: "var(--bg-dark)" }}
          >
            Como podemos te ajudar
          </h2>
          <div className="gold-rule w-24 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area) =>
            area.highlighted ? (
              <article
                key={area.title}
                className="card-hover bg-dark text-light rounded-2xl p-8 relative overflow-hidden"
              >
                <div
                  className="w-12 h-12 rounded-full grid place-items-center mb-5"
                  style={{ background: "var(--accent)" }}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="var(--bg-dark)"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    {area.icon}
                  </svg>
                </div>
                <h3 className="font-serif text-2xl mb-3">{area.title}</h3>
                <p className="text-light-soft leading-relaxed text-sm mb-4">
                  {area.body}
                </p>
                <span className="inline-flex items-center gap-1 text-accent text-xs font-medium uppercase tracking-wider">
                  Especialidade principal
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </span>
              </article>
            ) : (
              <article
                key={area.title}
                className="card-hover rounded-2xl p-8 border bg-page"
                style={{ borderColor: "var(--border-soft)" }}
              >
                <div className="w-12 h-12 rounded-full bg-dark grid place-items-center mb-5">
                  <svg
                    className="w-6 h-6 text-accent"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    {area.icon}
                  </svg>
                </div>
                <h3
                  className="font-serif text-2xl mb-3"
                  style={{ color: "var(--bg-dark)" }}
                >
                  {area.title}
                </h3>
                <p className="leading-relaxed text-sm text-dark">
                  {area.body}
                </p>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}

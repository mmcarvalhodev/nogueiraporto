export const site = {
  name: "Nogueira Porto Advogados",
  shortName: "Nogueira Porto",
  tagline: "Direito Imobiliário, Registral e Notarial",
  url: "https://www.nogueiraporto.adv.br",
  email: "contato@nogueiraporto.adv.br",
  cnpj: null as string | null,
  offices: [
    {
      id: "niteroi",
      city: "Niterói",
      state: "RJ",
      address: "Av. Hernani do Amaral Peixoto, 479",
      neighborhood: "Centro",
      whatsapp: {
        number: "5521995018495",
        display: "(21) 99501-8495",
        href: "https://wa.me/5521995018495?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20orienta%C3%A7%C3%A3o%20jur%C3%ADdica.",
      },
    },
    {
      id: "vilavelha",
      city: "Vila Velha",
      state: "ES",
      address: "Av. Champagnat, 583, sala 906",
      neighborhood: "Praia da Costa",
      whatsapp: {
        number: "5527996649954",
        display: "(27) 99664-9954",
        href: "https://wa.me/5527996649954?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20orienta%C3%A7%C3%A3o%20jur%C3%ADdica.",
      },
    },
  ],
  primaryWhatsapp: {
    number: "5521995018495",
    display: "(21) 99501-8495",
    href: "https://wa.me/5521995018495?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20orienta%C3%A7%C3%A3o%20jur%C3%ADdica.",
  },
  oab: {
    rj: ["136.764", "219.879", "246.420"],
    es: ["40.045", "39.084"],
  },
  social: {
    instagram: "",
    facebook: "",
    linkedin: "",
  },
} as const;

export type Office = (typeof site.offices)[number];

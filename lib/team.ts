// Mock data inicial — será substituído por queries ao Neon na Fase 2 (admin).
// O schema final terá esses campos + photoUrl, bio, displayOrder, isActive.

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  initials: string;
  photoUrl?: string | null;
  oab?: string[];
  bio?: string;
  displayOrder: number;
};

export const teamMembers: TeamMember[] = [
  {
    id: "fabiano",
    name: "Fabiano Nogueira Porto",
    role: "Sócio fundador",
    initials: "FP",
    oab: ["OAB/RJ 136.764", "OAB/ES 40.045"],
    displayOrder: 1,
  },
  {
    id: "joyce",
    name: "Joyce Philot Porto",
    role: "Sócia",
    initials: "JP",
    oab: ["OAB/ES 39.084"],
    displayOrder: 2,
  },
  {
    id: "adriana",
    name: "Adriana Monteiro",
    role: "Advogada",
    initials: "AM",
    oab: ["OAB/RJ 219.879"],
    displayOrder: 3,
  },
  {
    id: "regiane",
    name: "Regiane Negreiro",
    role: "Advogada",
    initials: "RN",
    oab: ["OAB/RJ 246.420"],
    displayOrder: 4,
  },
  {
    id: "mariana",
    name: "Mariana Silva",
    role: "Assistente Jurídica",
    initials: "MS",
    bio: "Atendimento ao cliente, organização de processos e acompanhamento de prazos.",
    displayOrder: 5,
  },
  {
    id: "carla",
    name: "Carla Santos",
    role: "Secretária",
    initials: "CS",
    bio: "Agenda, recepção, documentação e suporte administrativo aos dois escritórios.",
    displayOrder: 6,
  },
];

export function getActiveTeam(): TeamMember[] {
  return [...teamMembers].sort((a, b) => a.displayOrder - b.displayOrder);
}

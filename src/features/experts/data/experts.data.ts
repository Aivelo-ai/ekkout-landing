export type Expert = {
  name: string;
  role: string;
  description: string;
  initials: string;
};

export const experts: Expert[] = [
  {
    name: "Frédéric Palacin",
    role: "Communication & marketing digital",
    description: "Plus de 10 ans d’expérience en agence de communication bordelaise.",
    initials: "FP",
  },
  {
    name: "Jean Robert",
    role: "Commerce & immobilier commercial",
    description: "20 ans d’expérience terrain, ancien franchiseur.",
    initials: "JR",
  },
  {
    name: "Patrice Gerometta",
    role: "Fonds de commerce & transmission",
    description: "15 ans d’expérience en direction d’agence immobilière.",
    initials: "PG",
  },
];

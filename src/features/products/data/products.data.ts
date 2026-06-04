import type { Product } from "../model/product.types";

export const products: Product[] = [
  {
    id: "formation-fonds-commerce",
    slug: "comprendre-le-fonds-de-commerce",
    type: "formation",
    title: "Comprendre le fonds de commerce",
    description: "Les fondamentaux pour évaluer, acheter ou céder avec méthode.",
    priceInCents: 39000,
    features: ["5h de contenu", "Accès 12 mois", "Ressources pratiques"],
  },
  {
    id: "formation-bail-commercial",
    slug: "negocier-le-bail-commercial",
    type: "formation",
    title: "Négocier le bail commercial",
    description: "Comprendre les clauses, les risques et les leviers de négociation.",
    priceInCents: 39000,
    features: ["4h de contenu", "Cas concrets", "Accès 12 mois"],
  },
  {
    id: "ebook-bail-commercial",
    slug: "le-bail-commercial",
    type: "ebook",
    title: "Le bail commercial",
    description: "Un guide clair pour éviter les mauvaises surprises avant signature.",
    priceInCents: 2900,
    features: ["PDF sécurisé", "Accès immédiat", "Guide pratique"],
  },
  {
    id: "ebook-cession-fonds-commerce",
    slug: "creation-et-cession-de-fonds-de-commerce",
    type: "ebook",
    title: "Création et cession de fonds de commerce",
    description: "Les étapes clés pour structurer son projet commercial.",
    priceInCents: 2900,
    features: ["PDF sécurisé", "Méthode terrain", "Checklists incluses"],
  },
];

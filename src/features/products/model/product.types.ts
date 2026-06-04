export type ProductType = "formation" | "ebook";

export type Product = {
  id: string;
  slug: string;
  type: ProductType;
  title: string;
  description: string;
  priceInCents: number;
  features: string[];
};

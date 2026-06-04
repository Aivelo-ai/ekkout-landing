import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Product } from "../model/product.types";
import { Button } from "@/shared/ui/Button/Button";

type ProductCardProps = {
  product: Product;
};

function formatPrice(valueInCents: number) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(valueInCents / 100);
}

export function ProductCard({ product }: ProductCardProps) {
  const label = product.type === "formation" ? "Formation" : "E-book";

  return (
    <article className={`product-card product-card--${product.type}`}>
      <div className="product-card__visual">
        <p className="product-card__type">{label}</p>
        <h3>{product.title}</h3>
      </div>

      <div className="product-card__body">
        <p>{product.description}</p>

        <ul className="product-card__features">
          {product.features.map((feature) => (
            <li key={feature}>
              <CheckCircle2 size={16} />
              {feature}
            </li>
          ))}
        </ul>

        <div className="product-card__footer">
          <span className="product-card__price">{formatPrice(product.priceInCents)}</span>
          <Button href={`#${product.slug}`} variant="light">
            Découvrir <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </article>
  );
}

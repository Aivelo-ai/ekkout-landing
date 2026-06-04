import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import type { Ebook } from "../model/product.types";
import { Button } from "@/shared/ui/Button/Button";

type EbookCardProps = {
  ebook: Ebook;
};

export function EbookCard({ ebook }: EbookCardProps) {
  return (
    <article className="ebook-card">
      <div className="ebook-cover" style={{ "--cover-color": ebook.coverColor } as CSSProperties}>
        <small>EKKOUT</small>
        <span>{ebook.shortTitle}</span>
        <i aria-hidden="true" />
      </div>

      <div>
        <span className="ebook-card__meta">{ebook.category}</span>
        <h3>{ebook.title}</h3>
        <p>{ebook.description}</p>

        <div className="ebook-card__footer">
          <span className="price">{ebook.price}</span>
          <Button href={`#${ebook.id}`} variant="ink">
            Acheter <ArrowRight size={15} />
          </Button>
        </div>
      </div>
    </article>
  );
}

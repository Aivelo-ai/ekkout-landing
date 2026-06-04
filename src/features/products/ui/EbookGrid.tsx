import { ebooks } from "../data/ebooks.data";
import { EbookCard } from "./EbookCard";

export function EbookGrid() {
  return (
    <div className="ebook-grid">
      {ebooks.map((ebook) => (
        <EbookCard ebook={ebook} key={ebook.id} />
      ))}
    </div>
  );
}

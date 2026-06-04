import { LockKeyhole } from "lucide-react";
import { Container } from "@/shared/ui/Container/Container";
import { Logo } from "@/shared/ui/Logo/Logo";

export function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__top">
          <div className="footer__brand">
            <Logo variant="light" />
            <p>
              Formation en immobilier de commerce. E-books, ressources et bientôt parcours de
              formation pour sécuriser vos décisions.
            </p>
          </div>

          <div className="footer__links">
            <div>
              <strong>Navigation</strong>
              <a href="#ebooks">E-books</a>
              <a href="#experts">Experts</a>
              <a href="#blog">Blog</a>
            </div>
            <div>
              <strong>Légal</strong>
              <a href="#cgv">CGV</a>
              <a href="#mentions-legales">Mentions légales</a>
              <a href="#confidentialite">Confidentialité</a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} EKKOUT</span>
          <span>
            <LockKeyhole size={14} style={{ display: "inline", verticalAlign: "-2px" }} /> Paiement
            sécurisé par Stripe
          </span>
        </div>
      </Container>
    </footer>
  );
}

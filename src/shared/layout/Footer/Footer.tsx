import { Container } from "@/shared/ui/Container/Container";

export function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__inner">
          <div>
            <strong>EKKOUT</strong>
            <p>Formations et guides pratiques pour l’immobilier de commerce.</p>
          </div>
          <p>© {new Date().getFullYear()} — Socle landing page.</p>
        </div>
      </Container>
    </footer>
  );
}

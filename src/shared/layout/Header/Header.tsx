import { UserRound } from "lucide-react";
import { Button } from "@/shared/ui/Button/Button";
import { Container } from "@/shared/ui/Container/Container";

const navItems = [
  { label: "Formations", href: "#formations" },
  { label: "E-books", href: "#formations" },
  { label: "Certification RS6977", href: "#certification" },
  { label: "Les experts", href: "#experts" },
  { label: "École EKKOUT", href: "#ecole" },
];

export function Header() {
  return (
    <header className="header">
      <Container>
        <div className="header__inner">
          <a className="logo" href="/" aria-label="Accueil EKKOUT">
            <span className="logo__mark" aria-hidden="true">▥</span>
            <span className="logo__text">
              <strong>EKKOUT</strong>
              <span>Formations & guides experts</span>
            </span>
          </a>

          <nav className="nav" aria-label="Navigation principale">
            {navItems.map((item) => (
              <a key={item.href + item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header__actions">
            <Button href="#espace" variant="light">
              <UserRound size={17} />
              Mon espace
            </Button>
            <Button href="#contact">Contact</Button>
          </div>
        </div>
      </Container>
    </header>
  );
}

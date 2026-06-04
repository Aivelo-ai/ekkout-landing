import { UserRound } from "lucide-react";
import { Button } from "@/shared/ui/Button/Button";
import { Container } from "@/shared/ui/Container/Container";
import { Logo } from "@/shared/ui/Logo/Logo";

const navigation = [
  { label: "E-books", href: "#ebooks" },
  { label: "Experts", href: "#experts" },
  { label: "Bientôt", href: "#bientot" },
  { label: "Blog", href: "#blog" },
];

export function Header() {
  return (
    <header className="site-header">
      <Container>
        <div className="site-header__inner">
          <a href="/" aria-label="Accueil EKKOUT">
            <Logo />
          </a>

          <nav className="site-nav" aria-label="Navigation principale">
            {navigation.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <Button href="#espace" variant="outlineDark">
              <UserRound size={16} />
              Mon espace
            </Button>
            <Button href="#ebooks" variant="ink">
              Voir les e-books
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}

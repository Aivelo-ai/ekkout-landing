import { ArrowRight, BadgeCheck, LockKeyhole } from "lucide-react";
import { Header } from "@/shared/layout/Header/Header";
import { Footer } from "@/shared/layout/Footer/Footer";
import { Container } from "@/shared/ui/Container/Container";
import { Button } from "@/shared/ui/Button/Button";
import { SectionTitle } from "@/shared/ui/SectionTitle/SectionTitle";
import { EbookGrid } from "@/features/products/ui/EbookGrid";
import { ExpertGrid } from "@/features/experts/ui/ExpertGrid";
import { UpcomingGrid } from "@/features/upcoming/ui/UpcomingGrid";
import { BlogGrid } from "@/features/blog/ui/BlogGrid";

const stats = [
  { value: "45 ans", label: "d’expérience cumulée" },
  { value: "3", label: "experts spécialisés" },
  { value: "2", label: "guides essentiels" },
  { value: "100%", label: "accessible en ligne" },
];

export function HomePage() {
  return (
    <div className="site-shell">
      <Header />

      <main>
        <section className="hero">
          <Container>
            <div className="hero__inner">
              <div className="hero__content">
                <p className="eyebrow">Fonds de commerce · Bail commercial · Immobilier de commerce</p>
                <h1 className="hero__title">
                  Sécurisez l’achat, la cession et le bail de votre <span>fonds de commerce.</span>
                </h1>
                <p className="hero__lead">
                  Des guides clairs, signés par trois experts qui cumulent 45 ans de terrain.
                  Pour décider sans vous tromper, avant de signer.
                </p>

                <div className="hero__actions">
                  <Button href="#ebooks" variant="gold">
                    Voir les e-books <ArrowRight size={16} />
                  </Button>
                  <Button href="#experts" variant="outlineLight">
                    Rencontrer les experts
                  </Button>
                </div>

                <div className="hero__chips">
                  <span className="chip">France Compétences</span>
                  <span className="chip">45 ans d’expérience</span>
                  <span className="chip">3 experts</span>
                  <span className="chip">
                    <LockKeyhole size={13} /> Paiement sécurisé
                  </span>
                </div>
              </div>

              <aside className="hero-visual" aria-label="Visuel EKKOUT immobilier de commerce">
                <img src="/images/ekkout-hero-visual.png" alt="" />
              </aside>
            </div>
          </Container>
        </section>

        <section className="stats" aria-label="Chiffres clés EKKOUT">
          <Container>
            <div className="stats__grid">
              {stats.map((stat) => (
                <div className="stat" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="section section--cream" id="ebooks">
          <Container>
            <SectionTitle
              eyebrow="Nos e-books"
              title="Des guides pour décider sereinement"
              description="Deux ressources premium pour comprendre les sujets qui coûtent cher quand ils sont mal maîtrisés : le bail commercial et le fonds de commerce."
            />
            <EbookGrid />
          </Container>
        </section>

        <section className="section section--cream" id="experts">
          <Container>
            <SectionTitle
              eyebrow="Les experts"
              title="45 ans d’expérience, trois spécialités"
              description="La crédibilité EKKOUT repose sur trois profils complémentaires : communication, commerce, immobilier commercial et transmission."
            />
            <ExpertGrid />
          </Container>
        </section>

        <section className="section section--dark" id="bientot">
          <Container>
            <SectionTitle
              eyebrow="Bientôt"
              title="Ce qui arrive chez EKKOUT"
              description="La structure est pensée pour évoluer vers les formations en ligne, la certification, puis l’école physique."
            />
            <UpcomingGrid />
          </Container>
        </section>

        <section className="section section--cream" id="blog">
          <Container>
            <SectionTitle
              eyebrow="Ressources"
              title="Le blog"
              description="Des contenus pédagogiques pour capter le trafic SEO et préparer les futurs clients avant l’achat."
            />
            <BlogGrid />
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}

import { ArrowRight, BadgeCheck, BookOpen, Clock3, GraduationCap, ShieldCheck, Target, UsersRound } from "lucide-react";
import { Footer } from "@/shared/layout/Footer/Footer";
import { Header } from "@/shared/layout/Header/Header";
import { Button } from "@/shared/ui/Button/Button";
import { Container } from "@/shared/ui/Container/Container";
import { SectionHeader } from "@/shared/ui/SectionHeader/SectionHeader";
import { ProductGrid } from "@/features/products/ui/ProductGrid";
import { ExpertsGrid } from "@/features/experts/ui/ExpertsGrid";
import { CertificationBlock } from "@/features/certification/ui/CertificationBlock";

const trustItems = [
  {
    icon: <ShieldCheck size={24} />,
    title: "Des contenus concrets",
    text: "Basés sur des cas réels et l’expérience terrain.",
  },
  {
    icon: <BadgeCheck size={24} />,
    title: "Certification visible",
    text: "RS6977 mise en avant dès le premier écran.",
  },
  {
    icon: <Target size={24} />,
    title: "Décisions sécurisées",
    text: "Éviter les erreurs coûteuses avant signature.",
  },
  {
    icon: <GraduationCap size={24} />,
    title: "Évolutif école",
    text: "Prêt pour les sessions physiques à Bordeaux.",
  },
];

export function HomePage() {
  return (
    <>
      <Header />

      <main>
        <section className="hero">
          <Container>
            <div className="hero__inner">
              <div>
                <p className="eyebrow">Formations certifiées pour entrepreneurs</p>
                <h1 className="hero__title">
                  Sécurisez votre projet de <span>fonds de commerce</span> avant de signer.
                </h1>
                <p className="hero__lead">
                  Formations en ligne et guides pratiques conçus par trois experts du commerce,
                  de l’immobilier commercial et de la transmission d’entreprise.
                </p>

                <div className="hero__actions">
                  <Button href="#formations">
                    Voir les formations <ArrowRight size={17} />
                  </Button>
                  <Button href="#formations" variant="secondary">
                    Découvrir les e-books
                  </Button>
                </div>

                <div className="hero__metrics">
                  <span><UsersRound size={18} />45 ans d’expérience cumulée</span>
                  <span><BadgeCheck size={18} />Formation certifiante RS6977</span>
                  <span><Clock3 size={18} />Accès immédiat en ligne</span>
                </div>
              </div>

              <aside className="cert-card" aria-label="Certification RS6977">
                <div className="cert-card__seal">
                  <BadgeCheck size={38} />
                </div>
                <h2>RS6977</h2>
                <p>
                  Certification enregistrée France Compétences, utilisée comme preuve de confiance
                  centrale dans le parcours EKKOUT.
                </p>
                <div className="cert-card__logos">
                  <span>France Compétences</span>
                  <span>République Française</span>
                </div>
              </aside>
            </div>
          </Container>
        </section>

        <section className="trust-strip" aria-label="Arguments de confiance">
          <Container>
            <div className="trust-strip__grid">
              {trustItems.map((item) => (
                <div className="trust-item" key={item.title}>
                  <div className="trust-item__icon">{item.icon}</div>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="products-section" id="formations">
          <Container>
            <div className="products-top">
              <SectionHeader
                eyebrow="Catalogue"
                title="Nos formations et guides"
                description="Un socle court, clair et orienté action pour accompagner les futurs acquéreurs, créateurs et commerçants."
              />
              <Button href="#contact" variant="light">
                Voir tout le catalogue <ArrowRight size={16} />
              </Button>
            </div>

            <ProductGrid />
          </Container>
        </section>

        <section className="experts-section" id="experts">
          <Container>
            <div className="experts-top">
              <SectionHeader
                eyebrow="Expertise terrain"
                title="Trois associés, 45 ans d’expérience cumulée"
                description="Chaque profil renforce une brique de confiance : marketing, commerce, immobilier commercial et transmission d’entreprise."
              />
            </div>

            <ExpertsGrid />
          </Container>
        </section>

        <CertificationBlock />

        <section className="cta-section" id="ecole">
          <Container>
            <div className="cta-card">
              <div>
                <p className="eyebrow">Phase 2</p>
                <h2>Un socle prêt pour l’école physique EKKOUT.</h2>
                <p>
                  La landing est pensée pour évoluer vers une page campus, un calendrier de sessions,
                  des inscriptions présentielles et un espace apprenant plus complet.
                </p>
              </div>
              <Button href="#contact">
                Préparer la suite <BookOpen size={17} />
              </Button>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}

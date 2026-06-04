import { BadgeCheck, Landmark, ShieldCheck } from "lucide-react";

export function CertificationBlock() {
  const items = [
    {
      icon: <BadgeCheck size={24} />,
      title: "Certification RS6977",
      text: "Un pilier de confiance à rendre visible dès l’arrivée sur le site.",
    },
    {
      icon: <Landmark size={24} />,
      title: "Référentiel reconnu",
      text: "Une page dédiée permettra d’expliquer clairement le cadre et les modalités.",
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Décisions sécurisées",
      text: "Les contenus sont orientés vers les risques concrets rencontrés par les entrepreneurs.",
    },
  ];

  return (
    <section className="certification-section" id="certification">
      <div className="container">
        <div className="certification-block">
          <div>
            <p className="eyebrow">Preuve de confiance</p>
            <h2>
              La certification <span>RS6977</span> devient un vrai élément de design.
            </h2>
            <p>
              Elle n’est plus reléguée en bas de page : elle structure le hero, les pages formations
              et les arguments de réassurance tout au long du parcours d’achat.
            </p>
          </div>

          <ul className="certification-list">
            {items.map((item) => (
              <li key={item.title}>
                {item.icon}
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

import type { Expert } from "../data/experts.data";

type ExpertCardProps = {
  expert: Expert;
};

export function ExpertCard({ expert }: ExpertCardProps) {
  return (
    <article className="expert-card">
      <div className="expert-card__avatar" aria-hidden="true">
        {expert.initials}
      </div>
      <h3>{expert.name}</h3>
      <strong>{expert.role}</strong>
      <p>{expert.description}</p>
    </article>
  );
}

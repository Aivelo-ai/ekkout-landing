import { experts } from "../data/experts.data";

export function ExpertGrid() {
  return (
    <div className="expert-grid">
      {experts.map((expert) => (
        <article className="expert-card" key={expert.name}>
          <div className="expert-card__avatar">{expert.initials}</div>
          <h3>{expert.name}</h3>
          <p>{expert.role}</p>
          <strong>{expert.experience}</strong>
        </article>
      ))}
    </div>
  );
}

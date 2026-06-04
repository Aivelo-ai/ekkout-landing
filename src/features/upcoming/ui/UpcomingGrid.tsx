import { upcomingItems } from "../data/upcoming.data";

export function UpcomingGrid() {
  return (
    <div className="upcoming-grid">
      {upcomingItems.map((item) => {
        const Icon = item.icon;
        return (
          <article className="upcoming-card" key={item.title}>
            <Icon size={25} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <span className="badge-soon">Bientôt</span>
          </article>
        );
      })}
    </div>
  );
}

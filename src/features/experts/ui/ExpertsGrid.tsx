import { experts } from "../data/experts.data";
import { ExpertCard } from "./ExpertCard";

export function ExpertsGrid() {
  return (
    <div className="experts-grid">
      {experts.map((expert) => (
        <ExpertCard key={expert.name} expert={expert} />
      ))}
    </div>
  );
}

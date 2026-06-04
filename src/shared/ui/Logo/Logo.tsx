type LogoProps = {
  variant?: "default" | "light";
};

export function Logo({ variant = "default" }: LogoProps) {
  const isLight = variant === "light";
  const stroke = isLight ? "#F5F2EC" : "#0E1A23";

  return (
    <span className={`logo logo--${variant}`} aria-label="EKKOUT">
      <svg width="33" height="40" viewBox="0 0 40 48" fill="none" aria-hidden="true">
        <path
          d="M8 47V11H32V47"
          stroke={stroke}
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="6"
          y1="9.3"
          x2="34"
          y2="9.3"
          stroke="#C9A24A"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <polygon points="20,14 31,11.5 31,44 20,46.5" fill="#C9A24A" />
        <circle cx="22.5" cy="30" r="1.1" fill="#0E1A23" />
      </svg>

      <span>
        <span className="logo__word">EKKOUT</span>
        <span className="logo__tagline">Formations & guides experts</span>
      </span>
    </span>
  );
}

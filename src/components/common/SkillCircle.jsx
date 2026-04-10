export function SkillCircle({ name, percent = 70 }) {
  const r = 54;
  const circumference = 2 * Math.PI * r;
  const filled = (percent / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-3 w-[150px]">
      <div className="relative size-[150px]">
        <svg width="150" height="150" viewBox="0 0 150 150">
          <circle
            cx="75"
            cy="75"
            r={r}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="10"
          />
          <circle
            cx="75"
            cy="75"
            r={r}
            fill="none"
            stroke="#93c5fd"
            strokeWidth="10"
            strokeDasharray={`${filled} ${circumference}`}
            strokeLinecap="round"
            transform="rotate(-90 75 75)"
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center font-sans text-body3 text-dove">
          {percent}%
        </span>
      </div>
      <span className="font-gmarket text-body3 text-dove text-center">
        {name}
      </span>
    </div>
  );
}

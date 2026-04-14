import { useState, useEffect } from "react";

export function SkillCircle({ name, percent = 70, triggered = false }) {
  const r = 54;
  const circumference = 2 * Math.PI * r;
  const offset = circumference - (percent / 100) * circumference;

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggered) return;
    let start = 0;
    const duration = 1200;
    const step = 16;
    const increment = percent / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= percent) {
        setCount(percent);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [triggered, percent]);

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
            strokeDasharray={circumference}
            strokeDashoffset={triggered ? offset : circumference}
            strokeLinecap="round"
            transform="rotate(-90 75 75)"
            style={{ transition: 'stroke-dashoffset 1.2s ease-in-out' }}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center font-sans text-body3 text-dove">
          {count}%
        </span>
      </div>
      <span className="font-a2z text-body3 text-dove text-center">
        {name}
      </span>
    </div>
  );
}

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

export function SkillCircle({ name, percent = 70, triggered = false }) {
  const r = 54;
  const circumference = 2 * Math.PI * r;
  const offset = circumference - (percent / 100) * circumference;

  const [count, setCount] = useState(0);
  const circleRef = useRef(null);

  useEffect(() => {
    if (!triggered) return;
    const ctx = { value: 0 };
    const tween = gsap.to(circleRef.current, {
      attr: { "stroke-dashoffset": offset },
      duration: 1.2,
      ease: "power2.inOut",
    });
    const countTween = gsap.to(ctx, {
      value: percent,
      duration: 1.2,
      ease: "power2.inOut",
      onUpdate: () => setCount(Math.floor(ctx.value)),
    });
    return () => {
      tween.kill();
      countTween.kill();
    };
  }, [triggered, offset, percent]);

  return (
    <div className="flex flex-col items-center gap-3 w-[80px] sm:w-[110px] md:w-[130px] lg:w-[150px]">
      <div className="relative size-[80px] sm:size-[110px] md:size-[130px] lg:size-[150px]">
        <svg width="100%" height="100%" viewBox="0 0 150 150">
          <circle
            cx="75"
            cy="75"
            r={r}
            fill="none"
            stroke="var(--color-skill-track)"
            strokeWidth="10"
          />
          <circle
            ref={circleRef}
            cx="75"
            cy="75"
            r={r}
            fill="none"
            stroke="var(--color-skill-fill)"
            strokeWidth="10"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            strokeLinecap="round"
            transform="rotate(-90 75 75)"
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center font-sans text-body3 text-dove">
          {count}%
        </span>
      </div>
      <span className="font-a2z text-[10px] sm:text-xs md:text-body3 text-dove text-center">
        {name}
      </span>
    </div>
  );
}

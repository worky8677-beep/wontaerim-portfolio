import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const fromMap = {
  left:  { x: -60, opacity: 0 },
  right: { x: 60, opacity: 0 },
  up:    { y: 40, opacity: 0 },
  down:  { y: -40, opacity: 0 },
};

export function useGsapReveal(direction = "up", { duration = 0.8 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mm = gsap.matchMedia();

    const build = (start) =>
      gsap.from(el, {
        ...fromMap[direction],
        duration,
        ease: "power2.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: "play none none none",
          once: true,
        },
      });

    mm.add("(min-aspect-ratio: 1/1)", () => {
      const tween = build("top 80%");
      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });

    mm.add("(max-aspect-ratio: 1/1)", () => {
      const tween = build("top 95%");
      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });

    return () => mm.revert();
  }, [direction, duration]);

  return ref;
}

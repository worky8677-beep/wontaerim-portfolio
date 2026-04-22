import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeadTitle } from "../components/common/HeadTitle";
import { SkillCircle } from "../components/common/SkillCircle";
import { skills } from "../data/SkillItems";

gsap.registerPlugin(ScrollTrigger);

export default function SkillsSection() {
  const sectionRef = useRef(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 50%",
      onEnter: () => setTriggered(true),
      once: true,
    });
    return () => st.kill();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="w-full min-h-0 py-16 md:min-h-[1080px] bg-white flex items-center justify-center"
    >
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-[60px] md:gap-[111px] px-6 md:px-10">
        <HeadTitle title="Skills" />
        {/* 원형 — 481px 이상 */}
        <div className="hidden sm:flex flex-col gap-[24px] sm:gap-[40px] md:gap-[90px]">
          <div className="flex justify-between">
            {skills.slice(0, 5).map((skill, i) => (
              <SkillCircle key={i} triggered={triggered} {...skill} />
            ))}
          </div>
          <div className="flex justify-between">
            {skills.slice(5, 10).map((skill, i) => (
              <SkillCircle key={i} triggered={triggered} {...skill} />
            ))}
          </div>
        </div>

        {/* 막대형 — 480px 이하 */}
        <div className="flex flex-col gap-5 sm:hidden">
          {skills.map((skill, i) => (
            <div key={i} className="flex flex-col gap-1">
              <div className="flex justify-between font-a2z text-xs text-dove">
                <span>{skill.name}</span>
                <span>{triggered ? skill.percent : 0}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-snowflake overflow-hidden">
                <div
                  className="h-full rounded-full bg-fern/70 transition-all duration-[1200ms] ease-[power2.inOut]"
                  style={{ width: triggered ? `${skill.percent}%` : "0%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

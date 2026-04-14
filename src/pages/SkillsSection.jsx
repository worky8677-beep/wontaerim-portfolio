import { useRef, useState, useEffect } from "react";
import { HeadTitle } from "../components/common/HeadTitle";
import { SkillCircle } from "../components/common/SkillCircle";

const skills = [
  { name: "HTML/CSS", percent: 90 },
  { name: "Javascript", percent: 80 },
  { name: "React", percent: 80 },
  { name: "Figma", percent: 90 },
  { name: "Python", percent: 70 },
  { name: "Photoshop", percent: 90 },
  { name: "Illustrator", percent: 80 },
  { name: "Premier pro", percent: 90 },
  { name: "After Effect", percent: 80 },
  { name: "Notion", percent: 90 },
];

export default function SkillsSection() {
  const sectionRef = useRef(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="w-full min-h-[1080px] bg-white flex items-center justify-center"
    >
      <div className="w-[1280px] mx-auto flex flex-col gap-[111px] px-10">
        <HeadTitle title="Skills" />
        <div className="flex flex-col gap-[90px]">
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
      </div>
    </section>
  );
}

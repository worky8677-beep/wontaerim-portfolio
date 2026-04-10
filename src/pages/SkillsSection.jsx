import { HeadTitle } from "../components/common/HeadTitle";
import { SkillCircle } from "../components/common/SkillCircle";

const skills = [
  { name: "Figma" },
  { name: "Photoshop" },
  { name: "Illustrator" },
  { name: "Premiere Pro" },
  { name: "After Effects" },
  { name: "Protopie" },
  { name: "HTML" },
  { name: "CSS" },
  { name: "JavaScript" },
  { name: "React" },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full min-h-[1080px] bg-white flex items-center justify-center">
      <div className="w-[1280px] mx-auto flex flex-col gap-[111px] px-10">
        <HeadTitle title="Skills" />
        <div className="flex flex-col gap-[90px]">
          <div className="flex justify-between">
            {skills.slice(0, 5).map((skill, i) => (
              <SkillCircle key={i} {...skill} />
            ))}
          </div>
          <div className="flex justify-between">
            {skills.slice(5, 10).map((skill, i) => (
              <SkillCircle key={i} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

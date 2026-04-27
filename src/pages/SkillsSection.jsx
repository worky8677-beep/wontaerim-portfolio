import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HeadTitle } from "../components/common/HeadTitle";
import { skillCategories } from "../data/SkillItems";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="w-full bg-white pt-16 pb-32 md:pt-24 md:pb-48 flex items-center justify-center"
    >
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-[60px] md:gap-[80px] px-6 md:px-10">
        <HeadTitle title="Skills" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.label}
              className="rounded-2xl p-6 md:p-8 bg-linear-[145deg] from-white to-alabaster border border-silver/40 shadow-[0_4px_20px_rgba(0,0,0,0.07),inset_0_1px_0_rgba(255,255,255,1)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,1)] hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className={`size-10 rounded-xl flex items-center justify-center ${cat.iconBg}`}>
                  <FontAwesomeIcon icon={cat.icon} className={`text-sm ${cat.iconColor}`} />
                </div>
                <span className="font-a2z text-xs tracking-[0.12em] text-dove">
                  {cat.label}
                </span>
</div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-5 py-2 rounded-full border font-a2z text-xs tracking-[0.08em] ${cat.tagClass}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

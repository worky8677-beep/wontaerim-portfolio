import { HeadTitle } from "../components/common/HeadTitle";
import { ExperienceItem } from "../components/common/ExperienceItem";
import { ExperienceColumn } from "../components/common/ExperienceColumn";
import { useGsapReveal } from "../hooks/useGsapReveal";
import { experiences, educations, certifications } from "../data/EduExItems";

export default function EduExSection() {
  const expRef = useGsapReveal("left");
  const bottomRef = useGsapReveal("right");

  return (
    <section
      id="edu-ex"
      className="w-full bg-white flex items-center justify-center py-16 desktop:py-[120px]"
    >
      <div className="w-full max-w-[1280px] flex flex-col gap-[60px] desktop:gap-[80px] px-6 desktop:px-10">
        {/* Experience 풀 width */}
        <div
          ref={expRef}
          className="flex flex-col gap-10"
        >
          <HeadTitle title="Experience" color="text-forest" />
          <div className="grid grid-cols-1 gap-y-[30px] pl-[18px] desktop:grid-cols-3 desktop:gap-x-[60px]">
            {experiences.map((item, i) => (
              <ExperienceItem key={i} {...item} />
            ))}
          </div>
        </div>
        {/* Education + Certification 2단 */}
        <div
          ref={bottomRef}
          className="grid grid-cols-1 gap-y-[60px] desktop:grid-cols-2 desktop:gap-x-[60px]"
        >
          <ExperienceColumn title="Education" items={educations} />
          <ExperienceColumn title="Certification" items={certifications} />
        </div>
      </div>
    </section>
  );
}

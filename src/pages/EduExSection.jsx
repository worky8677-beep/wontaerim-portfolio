import { useEffect, useRef } from "react";
import { HeadTitle } from "../components/common/HeadTitle";
import { ExperienceItem } from "../components/common/ExperienceItem";

const experiences = [
  {
    start: "2020.02",
    end: "2023.10",
    title: "앨범 제작 프로젝트",
    description: "팀&솔로 앨범 발매. 작사, 작곡, 프로듀싱 및 콘텐츠 제작",
    isFirst: true,
  },
  {
    start: "2022.12",
    end: "2023.12",
    title: "꼬마들 음악학원 기타학원 강사",
    description: "학습자 이해를 기반으로 수강생 수준에 맞춘 커리큘럼 지도",
  },
  {
    start: "2023.03",
    end: "2025.02",
    title: "여행 유튜브 영상 제작",
    description: "프리미어 프로를 활용한 영상 편집 및 콘텐츠 제작",
  },
];

const educations = [
  { start: "2016.02", end: "2021.02", title: "백석대학교 실용음악전공" },
  { start: "2025.10", end: "2026.04", title: "생성형 AI 개발기획자 양성과정" },
];
const certifications = [
  { start: "2021.02", end: "", title: "문화예술교육사 2급" },
  { start: "2026.01", end: "", title: "GTQ 포토샵 1급" },
];

export default function EduExSection() {
  const expRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 },
    );

    if (expRef.current) observer.observe(expRef.current);
    if (bottomRef.current) observer.observe(bottomRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="edu-ex"
      className="w-full bg-white flex items-center justify-center py-[120px]"
    >
      <div className="w-[1280px] flex flex-col gap-[80px] px-10">
        {/* Experience 풀 width */}
        <div ref={expRef} className="fade-left flex flex-col gap-10">
          <HeadTitle title="Experience" color="text-forest" />
          <div className="grid grid-cols-3 gap-x-[60px] gap-y-[30px] pl-[18px]">
            {experiences.map((item, i) => (
              <ExperienceItem key={i} {...item} />
            ))}
          </div>
        </div>
        {/* Education + Certification 2단 */}
        <div
          ref={bottomRef}
          className="fade-right grid grid-cols-2 gap-x-[60px]"
        >
          <div className="flex flex-col gap-10">
            <HeadTitle title="Education" color="text-forest" />
            <div className="flex flex-col gap-10 pl-[18px]">
              {educations.map((item, i) => (
                <ExperienceItem key={i} {...item} />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <HeadTitle title="Certification" color="text-forest" />
            <div className="flex flex-col gap-10 pl-[18px]">
              {certifications.map((item, i) => (
                <ExperienceItem key={i} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

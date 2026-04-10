import { HeadTitle } from "../components/common/HeadTitle";
import { ExperienceItem } from "../components/common/ExperienceItem";

const experiences = [
  { start: "22.02", end: "2021.12", title: "문화예술학부 행정조교", description: "학부 행정업무 지원 및 교내 행사 운영 진행", isFirst: true },
  { start: "22.02", end: "2023.10", title: "앨범 제작 프로젝트", description: "팀&솔로 앨범 발매. 작사, 작곡, 프로듀싱 및 콘텐츠 제작" },
  { start: "22.02", end: "2023.12", title: "꼬마들 음악학원 기타학원 강사", description: "학습자 이해를 기반으로 수강생 수준에 맞춘 커리큘럼 지도" },
  { start: "22.02", end: "2025.02", title: "여행 유튜브 영상 제작", description: "프리미어 프로를 활용한 영상 편집 및 콘텐츠 제작" },
  { start: "22.02", end: "2025.05", title: "제과점 리피칩 매니저", description: "매장 운영 및 고객 응대, 제과 및 판매" },
];

const educations = [
  { start: "22.02", end: "2021.02", title: "문화예술학부 실용음악전공", description: "백석대학교" },
  { start: "22.02", end: "2026.04", title: "생성형 AI 개발기획자 양성과정", description: "AI를 활용한 코딩 & 영상제작 과정" },
];

const certifications = [
  { start: "22.02", end: "", title: "문화예술교육사 2급" },
  { start: "22.02", end: "", title: "GTQ 포토샵 1급" },
];

export default function EduExSection() {
  return (
    <section id="edu-ex" className="w-full min-h-[1080px] bg-white flex items-center justify-center">
      <div className="w-[1280px] flex items-start justify-between px-10">
        {/* 왼쪽: Experience */}
        <div className="flex flex-col gap-10 w-[557px]">
          <HeadTitle title="Experience" color="text-forest" />
          <div className="flex flex-col gap-[30px] pl-[18px]">
            {experiences.map((item, i) => (
              <ExperienceItem key={i} {...item} />
            ))}
          </div>
        </div>

        {/* 오른쪽: Education + Certification */}
        <div className="flex flex-col gap-24 w-[600px]">
          <div className="flex flex-col gap-10">
            <HeadTitle title="Education" color="text-forest" />
            <div className="flex flex-col gap-[30px] pl-[18px]">
              {educations.map((item, i) => (
                <ExperienceItem key={i} {...item} />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <HeadTitle title="Certification" color="text-forest" />
            <div className="flex flex-col gap-[30px] pl-[18px]">
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

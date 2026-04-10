import { HeadTitle } from "../components/common/HeadTitle";
import { OtherCard } from "../components/common/OtherCard";

const others = [
  { category: "Music", title: "팀 & 솔로 앨범 제작", href: "#" },
  { category: "Video", title: "여행 유튜브 콘텐츠", href: "#" },
  { category: "Design", title: "그래픽 디자인 작업", href: "#" },
  { category: "AI", title: "AI 생성 콘텐츠", href: "#" },
];

export default function OtherSection() {
  return (
    <section id="other" className="w-full min-h-[1080px] bg-white flex items-center justify-center py-12">
      <div className="w-[1280px] mx-auto flex flex-col gap-[74px] px-10">
        <HeadTitle title="Other" />
        <div className="grid grid-cols-2 gap-10">
          {others.map((item, i) => (
            <OtherCard key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

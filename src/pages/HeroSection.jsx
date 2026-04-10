import { Fiveline } from "../components/common/Fiveline";

const taerimPhoto = "https://www.figma.com/api/mcp/asset/38399f52-820f-424c-932b-801efc574254";
const starIcon = "https://www.figma.com/api/mcp/asset/3ca0d495-fdb0-4f4b-88dd-6271dd8053d8";
const northStar = "https://www.figma.com/api/mcp/asset/163fc35a-4c06-44de-a403-7a9d937056cd";
const gitIcon = "https://www.figma.com/api/mcp/asset/bc1e7b99-76ac-4898-a3de-bc435ae79a9c";
const resumeIcon = "https://www.figma.com/api/mcp/asset/14c649ee-5e86-4b7e-8ded-28d3107c61d8";

export default function HeroSection() {
  return (
    <header className="relative w-full h-screen min-h-[1080px] bg-white overflow-hidden flex items-center justify-center">
      <div className="absolute inset-[0_0_225px_0] bg-white/60" />

      {/* Fiveline 장식 */}
      <div className="absolute left-[-83px] top-[376px] rotate-180 -scale-y-100 pointer-events-none">
        <Fiveline />
      </div>

      {/* 북극성 아이콘 (오른쪽 상단) */}
      <div className="absolute left-[1087px] top-[67px] size-[93px]">
        <img src={northStar} alt="" className="size-full" />
      </div>

      {/* 버튼 그룹 */}
      <div className="absolute left-[1143px] top-[483px] flex flex-col gap-4">
        <a
          href="#"
          className="flex items-center gap-[10px] bg-btn-blue px-[80px] pr-[50px] py-[21px] shadow-[3px_4px_8px_0px_#b2b2b2]"
        >
          <span className="font-gmarket font-bold text-h5 text-cobalt">이력서</span>
          <img src={resumeIcon} alt="" className="size-[30px]" />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-[10px] bg-btn-pink px-[80px] pr-[50px] py-[21px] shadow-[3px_4px_8px_0px_#b2b2b2] rotate-[6.82deg]"
        >
          <span className="font-gmarket font-bold text-h5 text-orchid">깃허브</span>
          <img src={gitIcon} alt="" className="size-[30px]" />
        </a>
      </div>

      {/* 메인 사진 */}
      <div className="absolute left-[572px] top-[63px] w-[759px] h-[893px]">
        <div className="absolute left-1/2 -translate-x-1/2 top-[-18px] w-[522px] h-[777px] overflow-hidden shadow-[0px_30px_50px_0px_rgba(0,0,0,0.15)]">
          <img src={taerimPhoto} alt="원태림" className="absolute inset-0 w-full h-full object-cover" />
          <img src={starIcon} alt="" className="absolute left-[46px] top-[48px] size-[84px]" />
          <span className="absolute left-[calc(50%-130.55px)] top-[61px] -translate-y-1/2 text-white/80 text-[24px] leading-[26px]">✦</span>
        </div>
        {/* 그라디언트 오버레이 */}
        <div
          className="absolute left-[-0.68px] top-[707px] w-[679px] h-[139px]"
          style={{ background: "linear-gradient(181deg, rgba(254,255,252,0) 4%, rgb(253,255,250) 37%, rgb(253,255,249) 112%)" }}
        />
        {/* 북극성 아이콘 (사진 왼쪽) */}
        <img src={northStar} alt="" className="absolute left-[43.7px] top-[323.84px] size-[93px]" />
      </div>

      {/* 하단 대형 텍스트 */}
      <div className="absolute bottom-[50px] left-1/2 -translate-x-1/2 whitespace-nowrap text-center">
        <p className="font-gmarket font-bold text-gallery tracking-[-1.6px]">
          <span className="text-[128px] leading-[80px]">원</span>
          <span className="text-huge leading-[80px]">하는 형태로 울림있는 </span>
          <span className="text-[128px] leading-[80px]">디자인</span>
        </p>
      </div>
    </header>
  );
}

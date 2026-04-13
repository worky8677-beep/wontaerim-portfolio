import subprofile from "../../img/profile.png";

// 상단 스캘럽 경로 생성 (흰 배경이 반원으로 파고드는 형태)
const r = 24;
const count = 32;
const totalW = count * r * 2;
const scallopsPath =
  `M0,0 H${totalW} V${r} ` +
  Array.from({ length: count }, (_, i) =>
    `A${r},${r} 0 0,1 ${totalW - (i + 1) * r * 2},${r}`
  ).join(" ") +
  " Z";

export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden min-h-[700px] bg-linear-[to_bottom] from-[#dfffab] to-white">
      {/* 상단 스캘럽 */}
      <svg
        viewBox={`0 0 ${totalW} ${r * 2}`}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0 w-full z-10"
        style={{ height: `${r * 2}px` }}
      >
        <path d={scallopsPath} fill="white" />
      </svg>

      {/* 콘텐츠 */}
      <div
        className="relative z-10 max-w-[1280px] mx-auto px-10 flex items-center min-h-[700px]"
        style={{ paddingTop: `${r * 2}px` }}
      >
        {/* 왼쪽: 프로필 사진 */}
        <div className="w-1/2 flex items-end h-[560px]">
          <img
            src={subprofile}
            alt="원태림"
            className="h-full object-contain object-bottom"
          />
        </div>

        {/* 오른쪽: 텍스트 */}
        <div className="w-1/2 flex flex-col gap-6">
          <p className="font-gmarket font-bold text-h3 text-forest">
            Let's talk!
          </p>
          <a
            href="mailto:trw9701@gmail.com"
            className="font-gmarket font-bold text-[64px] leading-tight text-forest tracking-[-1.6px] hover:text-dove transition-colors"
          >
            trw9701@gmail.com
          </a>
          <p className="font-gmarket font-bold text-h4 text-mine">
            010-2256-7019
          </p>
        </div>
      </div>
    </footer>
  );
}

import { useState } from "react";
import subprofile from "../../img/profile.png";

function CopyItem({ text, children, className }) {
  const [state, setState] = useState("idle"); // idle | hover | copied

  function handleCopy() {
    navigator.clipboard.writeText(text);
    setState("copied");
    setTimeout(() => setState("idle"), 2000);
  }

  return (
    <div className="relative inline-block">
      <button
        onClick={handleCopy}
        onMouseEnter={() => setState((s) => (s !== "copied" ? "hover" : s))}
        onMouseLeave={() => setState((s) => (s !== "copied" ? "idle" : s))}
        className={className}
      >
        {children}
      </button>
      {/* 말풍선 + 꼬리 묶음 */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 right-[calc(100%+6px)] flex items-center pointer-events-none transition-all duration-200 ${
          state !== "idle" ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
        }`}
      >
        <span
          className={`font-a2z text-sm px-4 py-2 rounded-[12px] whitespace-nowrap ${
            state === "copied" ? "bg-lime text-charcoal" : "bg-charcoal text-white"
          }`}
        >
          {state === "copied" ? "복사 완료!" : "복사하기"}
        </span>
        <span
          className={`border-[6px] border-transparent shrink-0 ${
            state === "copied" ? "border-l-lime" : "border-l-charcoal"
          }`}
        />
      </div>
    </div>
  );
}

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
          <p className="font-a2z font-bold text-h3 text-forest">
            Let's talk!
          </p>
          <CopyItem
            text="trw9701@gmail.com"
            className="font-a2z font-bold text-[64px] leading-tight text-forest tracking-[-1.6px] hover:text-dove transition-colors text-left"
          >
            trw9701@gmail.com
          </CopyItem>
          <CopyItem
            text="010-2256-7019"
            className="font-a2z font-bold text-h4 text-mine hover:text-dove transition-colors text-left"
          >
            010-2256-7019
          </CopyItem>
        </div>
      </div>
    </footer>
  );
}

import { useState } from "react";
import { useGsapReveal } from "../../hooks/useGsapReveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { LinkButton } from "./LinkButton";
import resumePdf from "../../img/resume_20260413.pdf";

function CopyItem({ text, children, className }) {
  const [state, setState] = useState("idle");

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
      <div
        style={{ left: "calc(100% + 6px)" }}
        className={`absolute top-1/2 -translate-y-1/2 flex items-center pointer-events-none transition-all duration-200 ${
          state !== "idle" ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
        }`}
      >
        <span className={`border-[6px] border-transparent shrink-0 ${state === "copied" ? "border-r-lime" : "border-r-charcoal"}`} />
        <span className={`font-a2z text-sm px-4 py-2 rounded-[12px] whitespace-nowrap ${state === "copied" ? "bg-lime text-charcoal" : "bg-charcoal text-white"}`}>
          {state === "copied" ? "복사 완료!" : "복사하기"}
        </span>
      </div>
    </div>
  );
}

const DOME_H = 200;      // CSS border-radius 세로값 = SVG 아치 세로 반지름
const TEXT_PAD = 20;     // 아치 가장자리 글자가 잘리지 않도록 SVG 하단 여유
const OVF = 0.25;        // 양쪽으로 25%씩 뷰포트 밖으로 넘겨 코너를 숨김
const VB_W = 1440;
const EXT_W = VB_W * (1 + 2 * OVF); // 확장된 전체 너비 (viewBox 기준)

// 텍스트를 10번 반복해서 루프가 끊기지 않게 (더 넓어진 아치에 대응)
const arcText = Array(10).fill(
  "  UI/UX Designer  ✦   Content Createor  ✦  Let's work together!  ✦  Won Taerim    ✦"
).join("");

export function Footer() {
  const contentRef = useGsapReveal("left");

  return (
    <footer id="contact" className="relative bg-white overflow-hidden">

      {/* 돔 배경 — 양쪽 OVF%씩 넘겨 날카로운 코너를 화면 밖으로 숨김 */}
      <div
        className="absolute top-0 bottom-0"
        style={{
          left: `${-OVF * 100}%`,
          right: `${-OVF * 100}%`,
          borderTopLeftRadius: `50% ${DOME_H}px`,
          borderTopRightRadius: `50% ${DOME_H}px`,
          background: 'linear-gradient(to bottom, var(--color-mint), white)',
        }}
      />

      {/* 아치형 마퀴 텍스트 — 돔과 같은 너비/위치로 맞춤 */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 pointer-events-none select-none z-20"
        height={DOME_H + TEXT_PAD}
        viewBox={`0 0 ${EXT_W} ${DOME_H + TEXT_PAD}`}
        preserveAspectRatio="none"
        overflow="hidden"
        style={{ left: `${-OVF * 100}%`, width: `${(1 + 2 * OVF) * 100}%` }}
      >
        <defs>
          <path
            id="dome-arc"
            d={`M 0,${DOME_H} A ${EXT_W / 2},${DOME_H} 0 0,1 ${EXT_W},${DOME_H}`}
          />
        </defs>
        <text
          fontSize="30"
          fontFamily="'Paperlogy', sans-serif"
          fontWeight="300"
          fill="rgba(136, 136, 136, 0.55)"
          letterSpacing="0.5"
          dy="40"
        >
          <textPath href="#dome-arc" startOffset="0%">
            {arcText}
            {/* 텍스트 10반복 → 한 반복분(10%) 이동하면 seamless 루프 */}
            <animate
              attributeName="startOffset"
              from="0%"
              to="10%"
              dur="28s"
              repeatCount="indefinite"
            />
          </textPath>
        </text>
      </svg>

      {/* 콘텐츠 */}
      <div
        className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 flex flex-col items-center justify-center gap-4 desktop:gap-6"
        style={{ paddingTop: `${DOME_H-80}px`, paddingBottom: `${DOME_H * 0.3}px`, minHeight: `${DOME_H * 1}px` }}
      >
        {/* Available 뱃지 */}
        <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-3 py-1.5">
          <span className="w-2 h-2 rounded-full bg-fern animate-pulse" />
          <span className="font-a2z text-xs text-fern font-semibold tracking-wider">Available for work</span>
        </div>

        <div ref={contentRef} className="flex flex-col items-center gap-4 desktop:gap-5 w-full">
          <p className="font-paperlogy font-bold text-body2 md:text-h4 lg:text-hero text-forest text-center">
            Let&apos;s talk!
          </p>

          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faEnvelope} className="text-dove text-h5 shrink-0" />
            <CopyItem
              text="trw9701@gmail.com"
              className="font-paperlogy font-normal text-body2 md:text-sub lg:text-h5 leading-tight text-dove tracking-wider hover:text-dove transition-colors text-left"
            >
              trw9701@gmail.com
            </CopyItem>
          </div>

          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faPhone} className="text-dove text-h5 shrink-0" />
            <CopyItem
              text="010-2256-7019"
              className="font-paperlogy font-normal text-body2 md:text-sub lg:text-h5 leading-tight text-dove tracking-wider hover:text-dove transition-colors text-left"
            >
              010-2256-7019
            </CopyItem>
          </div>

          <div className="flex flex-col gap-3 items-center desktop:flex-row desktop:gap-5 mt-2">
            <LinkButton icon={faGithub} href="https://github.com/worky8677-beep" target="_blank" rel="noreferrer" starCursor>
              깃허브 보기
            </LinkButton>
            <LinkButton icon={faFileLines} href={resumePdf} target="_blank" rel="noreferrer">
              이력서 보기
            </LinkButton>
          </div>
        </div>
      </div>

      {/* 카피라이트 */}
      <div className="relative z-10 py-4 px-6 md:px-10 border-t border-forest/10">
        <p className="font-a2z text-xs text-dove text-center">
          © 2025 Taerim Won · Designed &amp; Built by 원태림
        </p>
      </div>
    </footer>
  );
}

import { useState } from "react";
import { useGsapReveal } from "../../hooks/useGsapReveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { LinkButton } from "./LinkButton";
import subprofile from "../../img/profile.png";
import resumePdf from "../../img/resume_20260413.pdf";

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
        style={{ left: "calc(100% + 6px)" }}
        className={`absolute top-1/2 -translate-y-1/2 flex items-center pointer-events-none transition-all duration-200 ${
          state !== "idle" ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
        }`}
      >
        <span
          className={`border-[6px] border-transparent shrink-0 ${
            state === "copied" ? "border-r-lime" : "border-r-charcoal"
          }`}
        />
        <span
          className={`font-a2z text-sm px-4 py-2 rounded-[12px] whitespace-nowrap ${
            state === "copied" ? "bg-lime text-charcoal" : "bg-charcoal text-white"
          }`}
        >
          {state === "copied" ? "복사 완료!" : "복사하기"}
        </span>
      </div>
    </div>
  );
}

// 상단 스캘럽 경로 생성 (녹색 버블이 위로 솟아오르는 형태)
const r = 40;
const count = 20;
const totalW = count * r * 2;
const scallopsPath =
  `M0,${r} ` +
  Array.from({ length: count }, (_, i) =>
    `A${r},${r} 0 0,0 ${(i + 1) * r * 2},${r}`
  ).join(" ") +
  ` V${r * 2} H0 Z`;

export function Footer() {
  const leftRef = useGsapReveal("left");
  const rightRef = useGsapReveal("right");

  return (
    <footer
      id="contact"
      className="relative z-10 min-h-[500px] md:min-h-[600px] lg:min-h-[700px] bg-linear-[to_bottom] from-mint to-white"
    >
      {/* 상단 스캘럽 — 녹색 버블이 위로 솟아오름 */}
      <svg
        viewBox={`0 0 ${totalW} ${r * 2}`}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-0 w-full z-10 overflow-hidden"
        style={{ top: `-${r}px`, height: `${r * 2}px` }}
      >
        <path d={scallopsPath} fill="var(--color-mint)" />
      </svg>

      {/* 콘텐츠 */}
      <div
        className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 desktop:px-10 flex flex-col desktop:flex-row items-center min-h-[500px] desktop:min-h-[700px]"
        style={{ paddingTop: `${r * 2}px` }}
      >
        {/* 왼쪽: 프로필 사진 */}
        <div ref={leftRef} className="flex w-full md:w-1/2 items-end justify-center md:justify-start h-[260px] md:h-[420px] lg:h-[560px]">
          <img
            src={subprofile}
            alt="원태림"
            className="h-full object-contain object-bottom"
          />
        </div>

        {/* 오른쪽: 텍스트 */}
        <div ref={rightRef} className="w-full desktop:w-1/2 flex flex-col gap-4 desktop:gap-6 pb-10 desktop:pb-0">
          <p className="font-paperlogy font-bold text-body2 md:text-h4 lg:text-display text-forest">
            Let&apos;s talk!
          </p>
          <div className="flex items-center gap-3">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-dove text-h5 shrink-0"
            />
            <CopyItem
              text="trw9701@gmail.com"
              className="font-paperlogy font-normal text-body2 md:text-sub lg:text-h5 leading-tight text-dove tracking-wider hover:text-dove transition-colors text-left"
            >
              trw9701@gmail.com
            </CopyItem>
          </div>
          <div className="flex items-center gap-3">
            <FontAwesomeIcon
              icon={faPhone}
              className="text-dove text-h5 shrink-0"
            />
            <CopyItem
              text="010-2256-7019"
              className="font-paperlogy font-normal text-body2 md:text-sub lg:text-h5 leading-tight text-dove tracking-wider hover:text-dove transition-colors text-left"
            >
              010-2256-7019
            </CopyItem>
          </div>

          {/* 버튼 */}
          <div className="flex flex-col gap-3 items-start desktop:flex-row desktop:gap-5 mt-2">
            <LinkButton
              icon={faGithub}
              href="https://github.com/worky8677-beep"
              target="_blank"
              rel="noreferrer"
              starCursor
            >
              깃허브 보기
            </LinkButton>
            <LinkButton
              icon={faFileLines}
              href={resumePdf}
              target="_blank"
              rel="noreferrer"
            >
              이력서 보기
            </LinkButton>
          </div>
        </div>
      </div>
    </footer>
  );
}

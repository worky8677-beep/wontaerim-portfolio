import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Fiveline } from "../components/common/Fiveline";
import { LinkButton } from "../components/common/LinkButton";
import taerimPhoto from "../img/mainprofile.png";
import resumePdf from "../img/resume_20260413.pdf";

const northStar =
  "https://www.figma.com/api/mcp/asset/2d03ce86-541d-45bc-86c0-08889bce2f05";

export default function HeroSection() {
  return (
    <header className="relative w-full h-screen bg-white overflow-hidden">
      {/* Fiveline 장식 */}
      <div className="absolute left-[-83px] top-[200px] rotate-180 -scale-y-100 pointer-events-none z-0">
        <Fiveline />
      </div>

      {/* 북극성 — 화면 상단 우측 */}
      <img
        src={northStar}
        alt=""
        className="absolute right-[38%] top-[8%] size-[52px] z-20 pointer-events-none"
      />

      {/* 메인 콘텐츠 레이아웃 */}
      <div className="relative z-10 w-full h-full max-w-[1280px] mx-auto px-10 flex items-center">
        {/* 왼쪽: 텍스트 + 버튼 */}
        <div className="flex flex-col gap-10 w-[70%]">
          <div>
            <p className="font-gmarket font-bold text-hero text-dove">
              원하는 형태로 울림있게
            </p>
            <p className="font-gmarket font-bold text-hero text-dove flex items-center gap-4">
              <span className="bg-lime px-2">크리에이터</span> 원태림입니다
              <span className="text-[28px] text-lime">✦</span>
            </p>
          </div>

          {/* 버튼 */}
          <div className="flex gap-5">
            <LinkButton
              icon={faGithub}
              href="https://github.com/worky8677-beep"
              target="_blank"
              rel="noreferrer"
            >
              깃허브 보기
            </LinkButton>
            <LinkButton icon={faFileLines} href={resumePdf} target="_blank" rel="noreferrer">
              이력서 보기
            </LinkButton>
          </div>
        </div>

        {/* 오른쪽: 사진 + 블롭 */}
        <div className="absolute right-0 top-0 w-[48%] h-full">
            {/* 원 1: 우상단 큰 원 */}
          <div className="absolute rounded-full bg-cream opacity-40 mix-blend-hard-light w-[420px] h-[420px] right-[2%] top-[10%] pointer-events-none" />
          {/* 원 2: 좌하단 작은 원 */}
          <div className="absolute rounded-full bg-chartreuse opacity-35 mix-blend-hard-light w-[300px] h-[300px] left-[2%] bottom-[20%] pointer-events-none" />

          {/* 인물 사진 */}
          <img
            src={taerimPhoto}
            alt="원태림"
            className="absolute bottom-10 left-0 w-full h-[95%] object-contain object-center z-10"
          />
        </div>
      </div>

      {/* 물결 — 헤더 하단 */}
      <div className="absolute bottom-0 left-0 w-full z-10">
        <svg
          className="w-full min-h-[100px] max-h-[150px]"
          style={{ display: "block", height: "15vh" }}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(215,240,172,0.7)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(215,240,172,0.5)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(215,240,172,0.3)"
            />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#d7f0ac" />
          </g>
        </svg>
        <div className="absolute inset-0 bg-linear-[to_bottom] from-transparent to-white pointer-events-none" />
      </div>
    </header>
  );
}

import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Fiveline } from "../components/common/Fiveline";
import { LinkButton } from "../components/common/LinkButton";
import { ScrambleText } from "../components/common/ScrambleText";
import taerimPhoto from "../img/mainprofile.png";
import resumePdf from "../img/resume_20260413.pdf";
import northStar from "../img/icon-northstar.png";
import Star from "../img/icon-star.png";

export default function HeroSection() {
  return (
    <header className="relative w-full h-screen bg-white overflow-hidden">
      {/* Fiveline 장식 */}
      <div className="absolute left-[-83px] top-[200px] rotate-180 -scale-y-100 pointer-events-none z-0">
        <Fiveline />
      </div>

      {/* 메인 콘텐츠 — max-width 컨테이너로 가운데 정렬 */}
      <div className="relative z-10 w-full h-full flex items-center">
        <div className="relative w-full max-w-[1654px] mx-auto h-full px-16">
        {/* 왼쪽: 텍스트 + 버튼 */}
        <div className="absolute left-16 top-1/3 -translate-y-1/2 flex flex-col gap-20 w-[60%]">
          <div>
            {/* 줄 1 — 먼저 올라옴 */}
            <div className="overflow-hidden">
              <p
                className="font-a2z font-bold text-hero text-dove"
                style={{ animation: 'text-reveal 1.1s cubic-bezier(0.34, 1.4, 0.64, 1) 0.2s both' }}
              >
                원하는 형태로 울림있게
              </p>
            </div>
            {/* 줄 2 — 0.25s 뒤에 올라옴 */}
            <div className="overflow-hidden">
              <p
                className="font-a2z font-bold text-hero text-dove flex items-center gap-4"
                style={{ animation: 'text-reveal 1.1s cubic-bezier(0.34, 1.4, 0.64, 1) 0.45s both' }}
              >
                {/* 번갈아 슬라이딩되는 단어 슬롯 */}
                <span className="highlight-lime px-2">
                  <ScrambleText />
                </span>
                원태림입니다
              </p>
            </div>
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

        {/* 오른쪽: 사진 + 블롭 */}
        <div className="absolute right-0 top-0 w-[50%] h-full">
          {/* 원 1: 우상단 큰 원 */}
          <div className="absolute rounded-full bg-cream opacity-40 mix-blend-hard-light w-[420px] h-[420px] right-[2%] top-[10%] pointer-events-none z-[1]" />
          {/* 원 2: 좌하단 작은 원 */}
          <div className="absolute rounded-full bg-chartreuse opacity-35 mix-blend-hard-light w-[300px] h-[300px] left-[2%] bottom-[20%] pointer-events-none z-[1]" />

          {/* 별들 */}
          <img
            src={northStar}
            alt=""
            style={{ animation: 'twinkle-a 5.3s ease-in-out infinite' }}
            className="absolute left-[30%] top-[15%] size-[52px] z-[5] pointer-events-none"
          />
          <img
            src={northStar}
            alt=""
            style={{ animation: 'twinkle-b 4.1s ease-in-out 0.7s infinite' }}
            className="absolute right-[2%] bottom-[35%] size-[52px] z-[5] pointer-events-none"
          />
          <span style={{ animation: 'twinkle-c 5.9s ease-in-out 0.3s infinite' }} className="absolute right-[31%] top-[19%] text-[22px] text-lime z-[5] pointer-events-none">
            ✦
          </span>
          <span style={{ animation: 'twinkle-a 4.8s ease-in-out 0.4s infinite' }} className="absolute left-[18%] top-[55%] text-[28px] text-lime z-[5] pointer-events-none">
            ✦
          </span>
          <img
            src={Star}
            alt=""
            style={{ animation: 'twinkle-b 3.1s ease-in-out 0.8s infinite' }}
            className="absolute left-[18%] top-[30%] size-[16px] z-[5] pointer-events-none"
          />
          <span style={{ animation: 'twinkle-c 3.5s ease-in-out 0.9s infinite' }} className="absolute right-[2%] bottom-[50%] text-[22px] text-lime z-[5] pointer-events-none">
            ✦
          </span>

          {/* 인물 사진 */}
          <img
            src={taerimPhoto}
            alt="원태림"
            className="absolute bottom-10 left-0 w-full h-[95%] object-contain object-center z-10"
          />
        </div>
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

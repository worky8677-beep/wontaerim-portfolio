import { Fiveline } from "../components/common/Fiveline";

import taerimPhoto from "../img/mainprofile.png";
const starIcon =
  "https://www.figma.com/api/mcp/asset/3ca0d495-fdb0-4f4b-88dd-6271dd8053d8";
const northStar =
  "https://www.figma.com/api/mcp/asset/163fc35a-4c06-44de-a403-7a9d937056cd";

export default function HeroSection() {
  return (
    <header className="relative w-full h-screen bg-white pt-[60px]">
      {/* 헤더 본문 */}
      <div className="relative w-full h-full flex items-center">
        {/* Fiveline 장식 — 제일 뒤 */}
        <div className="absolute left-[-83px] top-[200px] rotate-180 -scale-y-100 pointer-events-none z-0">
          <Fiveline />
        </div>

        {/* 콘텐츠 — 앞으로 */}
        <div className="relative z-10 w-full h-full max-w-[1280px] mx-auto px-16 flex items-center justify-between">
          {/* 왼쪽: 텍스트 */}
          <div className="flex flex-col gap-6">
            <p className="font-gmarket font-bold text-display text-gallery leading-10">
              원하는 형태로 울림있게
            </p>
            <p className="font-gmarket font-bold text-display text-gallery leading-10">
              <span className="bg-lime px-2">크리에이터</span> 원태림입니다
            </p>
          </div>

          {/* 오른쪽: 사진 + 데코 */}
          <div className="relative w-[600px] h-[700px] shrink-0">
            <img
              src={northStar}
              alt=""
              className="absolute right-[430px] top-[40px] size-[60px]"
            />
            <img
              src={northStar}
              alt=""
              className="absolute right-[60px] top-[10px] size-[40px]"
            />
            <div className="absolute left-10 bottom-10 w-[520px] h-[680px] overflow-hidden">
              <img
                src={taerimPhoto}
                alt="원태림"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <img
              src={starIcon}
              alt=""
              className="absolute left-[40px] top-[40px] size-[60px]"
            />
          </div>
        </div>

        {/* 물결 — 헤더 하단에 붙임 */}
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

          {/* 흰색 그라디언트 오버레이 */}
          <div className="absolute inset-0 bg-linear-[to_bottom] from-transparent to-white pointer-events-none" />
        </div>
      </div>
    </header>
  );
}

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Fiveline } from "../components/common/Fiveline";
import { LinkButton } from "../components/common/LinkButton";
import { ScrambleText } from "../components/common/ScrambleText";
import taerimPhoto from "../img/mainprofile.png";
import resumePdf from "../img/resume_20260413.pdf";
import northStar from "../img/icon-northstar.png";
import Star from "../img/icon-star.png";

gsap.registerPlugin(MotionPathPlugin);

export default function HeroSection() {
  const subtitleRef = useRef(null);
  const titleRef = useRef(null);
  const starRef = useRef(null);
  const star2Ref = useRef(null);
  const star3Ref = useRef(null);
  const star4Ref = useRef(null);
  const star5Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([subtitleRef.current, titleRef.current], { yPercent: 110 });

      const tl = gsap.timeline();
      tl.to(subtitleRef.current, {
        yPercent: 0,
        duration: 1.1,
        ease: "back.out(1.4)",
        delay: 0.2,
      }).to(
        titleRef.current,
        {
          yPercent: 0,
          duration: 1.1,
          ease: "back.out(1.4)",
        },
        "-=0.85",
      );

      const wavePath = [
        { x: 0, y: 0 },
        { x: -200, y: -60 },
        { x: -400, y: 0 },
        { x: -600, y: 60 },
        { x: -800, y: 0 },
        { x: -1000, y: -60 },
        { x: -1200, y: 0 },
      ];
      const wavePathReverse = wavePath.map((p) => ({ x: -p.x, y: p.y }));

      const makeWaveTween = (target, path, delay = 0) => {
        if (delay > 0) {
          gsap.set(target, { opacity: 0 });
          gsap.to(target, { opacity: 1, duration: 0.6, delay });
        }
        gsap.to(target, {
          duration: 10,
          repeat: -1,
          ease: "none",
          delay,
          motionPath: { path, curviness: 1.5 },
        });
      };

      makeWaveTween(starRef.current, wavePath);
      makeWaveTween(star2Ref.current, wavePathReverse, 1);
      makeWaveTween(star3Ref.current, wavePath, 1);
      makeWaveTween(star4Ref.current, wavePathReverse, 1);
      makeWaveTween(star5Ref.current, wavePath);
    });

    return () => ctx.revert();
  }, []);

  return (
    <header className="relative w-full h-screen desktop:h-[80vh] bg-white overflow-hidden">
      {/* Fiveline 장식 — 데스크탑만 */}
      <div className="hidden desktop:block absolute left-[-83px] top-[200px] rotate-180 -scale-y-100 pointer-events-none z-0">
        <Fiveline />
      </div>

      {/* 배경 장식 레이어 — 원 + 별 */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* 원 1 — 우측 상단 */}
        <div
          className="absolute rounded-full bg-cream opacity-40 mix-blend-hard-light
          w-[26vw] h-[26vw] max-w-[420px] max-h-[420px]
          right-[18%] top-[12%]"
        />
        {/* 원 2 — 좌측 하단 */}
        <div
          className="absolute rounded-full bg-chartreuse opacity-35 mix-blend-hard-light
          w-[18vw] h-[18vw] max-w-[300px] max-h-[300px]
        right-[30%] bottom-[32%]"
        />

        {/* 별 */}
        <span ref={star2Ref} className="absolute left-[-8%] top-[15%] block w-[5vw] max-w-[52px] min-w-[20px] star2">
          <img src={northStar} alt="" style={{ animation: "twinkle-a 5.3s ease-in-out infinite" }} className="block w-full" />
        </span>
        <span ref={star3Ref} className="absolute right-[5%] bottom-[40%] block w-[5vw] max-w-[52px] min-w-[20px] star3">
          <img src={northStar} alt="" style={{ animation: "twinkle-b 4.1s ease-in-out 0.7s infinite" }} className="block w-full" />
        </span>
        <span style={{ animation: "twinkle-c 5.9s ease-in-out 0.3s infinite" }} className="absolute right-[35%] top-[22%] text-[3vw] desktop:text-[22px] text-lime">
          ✦
        </span>
        <span ref={star4Ref} className="star4 absolute left-[8%] top-[55%] inline-block">
          <span style={{ animation: "twinkle-a 4.8s ease-in-out 0.4s infinite" }} className="inline-block text-[3.5vw] desktop:text-[28px] text-lime">
            ✦
          </span>
        </span>
        <span ref={star5Ref} className="star5 absolute left-[40%] top-[30%] block w-[2vw] max-w-[16px] min-w-[10px]">
          <img src={Star} alt="" style={{ animation: "twinkle-b 3.1s ease-in-out 0.8s infinite" }} className="block w-full" />
        </span>
        <span ref={starRef} className="absolute right-[10%] bottom-[55%] inline-block star">
          <span style={{ animation: "twinkle-c 3.5s ease-in-out 0.9s infinite" }} className="inline-block text-[3vw] desktop:text-[22px] text-lime">
            ✦
          </span>
        </span>
      </div>

      {/* 메인 콘텐츠 — 중앙 집중형 */}
      <div className="relative z-10 w-full h-screen desktop:h-[80vh] leading-none tracking-tighter flex items-center justify-center">
        <div className="grid grid-cols-1 content-start desktop:flex desktop:flex-row place-items-center items-center justify-center gap-6 w-full max-w-[1100px] h-full px-8">
          {/* 텍스트 영역 */}
          <div className="col-start-1 row-start-1 desktop:col-start-auto desktop:row-start-auto flex flex-col items-center text-center desktop:items-start desktop:text-left gap-8 z-20 desktop:gap-20 shrink-0 whitespace-nowrap">
            <div>
              <div className="overflow-hidden pt-3 -mt-3">
                <p ref={subtitleRef} className="font-paperlogy font-thin text-sub mb-4 desktop:text-display text-dove leading-none h-fit">
                  <span className="jump-1">원</span>하는 형<span className="jump-2">태</span>로 울<span className="jump-3">림</span>있게!
                </p>
              </div>
              <div className="overflow-hidden">
                <p ref={titleRef} className="font-paperlogy font-bold text-hero text-dove flex flex-col items-center desktop:items-start gap-2 leading-none">
                  <span className="highlight-lime px-2 tracking-normal inline-block" style={{ lineHeight: "var(--text-hero)" }}>
                    <ScrambleText />
                  </span>
                  <span className="inline-flex items-center gap-x-4" style={{ lineHeight: "var(--text-hero)" }}>
                    <span className="font-bold">원태림</span>
                    <span className="font-extralight text-sub desktop:text-display">입니다</span>
                  </span>
                </p>
              </div>
            </div>

            {/* 버튼 */}
            <div className="flex flex-row gap-3 items-center desktop:gap-5">
              <LinkButton icon={faGithub} href="https://github.com/worky8677-beep" target="_blank" rel="noreferrer" className="justify-center w-[130px] desktop:w-auto" starCursor>
                깃허브 보기
              </LinkButton>
              <LinkButton icon={faFileLines} href={resumePdf} target="_blank" rel="noreferrer" className="justify-center w-[130px] desktop:w-auto">
                이력서 보기
              </LinkButton>
            </div>
          </div>

          {/* 사진 영역 */}
          <div className="col-start-1 row-start-1 desktop:col-start-auto desktop:row-start-auto desktop:flex-1 h-full flex items-center justify-center desktop:justify-start z-10 min-w-0">
            <img src={taerimPhoto} alt="원태림" className="w-[80vw] h-auto object-contain desktop:w-auto desktop:h-full desktop:max-w-none desktop:object-left" />
          </div>
        </div>
      </div>

      {/* 물결 — 헤더 하단 */}
      <div className="absolute bottom-0 left-0 w-full z-10">
        <svg className="w-full min-h-[100px] max-h-[150px]" style={{ display: "block", height: "15vh" }} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="var(--color-lime)" opacity="0.7" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="var(--color-lime)" opacity="0.5" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="var(--color-lime)" opacity="0.3" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="var(--color-lime)" />
          </g>
        </svg>
        <div className="absolute inset-0 bg-linear-[to_bottom] from-transparent to-white pointer-events-none" />
      </div>
    </header>
  );
}

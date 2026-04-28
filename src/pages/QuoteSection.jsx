import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import northStar from "../img/icon-northstar.png";
import Star from "../img/icon-star.png";
import fivelineImg from "../img/fiveline.png";

export default function QuoteSection() {
  const s1Ref = useRef(null);
  const s2Ref = useRef(null);
  const s3Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(s1Ref.current, { x: 18, y: -12, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(s2Ref.current, { x: -14, y: 10, duration: 3.5, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 0.6 });
      gsap.to(s3Ref.current, { x: 10, y: -8, duration: 5, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1.2 });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full bg-white py-16 md:py-24 flex items-center justify-center overflow-hidden">
      {/* fiveline 배경 */}
      <div className="absolute inset-0 flex items-center pointer-events-none z-0">
        <img src={fivelineImg} alt="" className="w-full h-auto opacity-60" />
      </div>

      {/* 별 */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        {/* outer: GSAP float / inner: CSS twinkle */}
        <span ref={s1Ref} className="absolute left-[25%] top-[40%] block w-[40px]">
          <img
            src={northStar}
            alt=""
            className="w-full block"
            style={{ animation: "twinkle-a 5.3s ease-in-out infinite" }}
          />
        </span>
        <span ref={s2Ref} className="absolute right-[25%] top-[35%] inline-block">
          <span
            className="inline-block text-[28px] text-lime"
            style={{ animation: "twinkle-b 4.1s ease-in-out 0.7s infinite" }}
          >✦</span>
        </span>
        <span ref={s3Ref} className="absolute left-[50%] top-[15%] block w-[16px]">
          <img
            src={Star}
            alt=""
            className="w-full block"
            style={{ animation: "twinkle-c 3.5s ease-in-out 0.9s infinite" }}
          />
        </span>
      </div>

      {/* 텍스트 */}
      <p className="relative z-10 font-instrument text-h4 md:text-h3 text-dove italic text-center px-6">
        Always learning, Always growing !
      </p>
    </section>
  );
}

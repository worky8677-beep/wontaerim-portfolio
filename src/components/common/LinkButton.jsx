import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function LinkButton({ icon, href, children, target, rel, className = "" }) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`group relative flex items-center gap-2 desktop:gap-3 px-4 py-2 desktop:px-8 desktop:py-4 rounded-full border border-lime bg-white overflow-hidden shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] font-a2z text-xs desktop:text-body2 text-dove leading-none ${className}`}
    >
      {/* 물결이 아래에서 차오르는 liquid 레이어 */}
      <div
        className="absolute left-0 right-0 top-full group-hover:-top-5 transition-[top] duration-500 ease-in-out"
        style={{ height: "calc(100% + 20px)" }}
      >
        {/* 파형 SVG — 200% 너비로 좌→우 이동해 물결처럼 보임 */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="wave-svg absolute top-0 left-0 h-5"
          viewBox="0 0 400 20"
          preserveAspectRatio="none"
          style={{ width: "200%" }}
        >
          <path
            fill="#d7f0ac"
            d="M0,10 C25,0 75,20 100,10 C125,0 175,20 200,10 C225,0 275,20 300,10 C325,0 375,20 400,10 V20 H0 Z"
          />
        </svg>
        {/* 파형 아래 solid 라임 채움 */}
        <div className="absolute left-0 right-0 bottom-0 bg-lime" style={{ top: "19px" }} />
      </div>

      <FontAwesomeIcon icon={icon} className="relative z-10 block" />
      <span className="relative z-10">{children}</span>
    </a>
  );
}

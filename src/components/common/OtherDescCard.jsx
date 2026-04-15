import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export function OtherDescCard({ item, onClose }) {
  if (!item) return null;

  return (
    <div className={`w-full h-full rounded-[24px] bg-[#f2f5ea] p-10 flex flex-col gap-6 relative`}>

      {/* 닫기 버튼 */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/60 text-dove flex items-center justify-center hover:bg-white transition-colors"
      >
        <FontAwesomeIcon icon={faXmark} className="text-sm" />
      </button>

      {/* 제목 */}
      <h4 className="font-a2z font-bold text-charcoal pr-10" style={{ fontSize: "40px", lineHeight: "1.3" }}>
        {item.title}
      </h4>

      {/* 카테고리 + 지원기관 태그 */}
      <div className="flex gap-2 flex-wrap">
        <span className="bg-white px-4 py-2 rounded-full font-a2z text-sm text-dove tracking-[0.64px] uppercase">
          {item.category}
        </span>
        {item.support && (
          <span className="bg-white px-4 py-2 rounded-full font-a2z text-sm text-dove tracking-[0.64px]">
            {item.support}
          </span>
        )}
      </div>

      {/* 정보 */}
      <div className="flex flex-col gap-3 font-a2z text-[20px] font-semibold">
        {item.releaseDate && (
          <div className="flex gap-8">
            <span className="text-dove w-24 shrink-0">발매년월</span>
            <span className="text-charcoal">{item.releaseDate}</span>
          </div>
        )}
        {item.type && (
          <div className="flex gap-8">
            <span className="text-dove w-24 shrink-0">기&nbsp;&nbsp;여&nbsp;&nbsp;도</span>
            <span className="text-charcoal">{item.type}</span>
          </div>
        )}
        {item.trackCount && (
          <div className="flex gap-8">
            <span className="text-dove w-24 shrink-0">수록곡</span>
            <span className="text-charcoal">{item.trackCount}곡</span>
          </div>
        )}
      </div>

      {/* 설명 */}
      {item.desc && (
        <p className="font-a2z text-[18px] text-charcoal leading-[1.75] tracking-[0.5px]">
          {item.desc}
        </p>
      )}

      {/* 링크 */}
      {item.href && (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="self-start font-a2z text-sm font-bold text-forest hover:underline transition-colors mt-2"
        >
          스트리밍 바로가기 →
        </a>
      )}
    </div>
  );
}

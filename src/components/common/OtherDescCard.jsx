import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export function OtherDescCard({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="w-full h-full rounded-[24px] bg-[#f2f5ea] p-10 flex flex-col gap-6 relative">

      {/* 닫기 버튼 */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/60 text-dove flex items-center justify-center hover:bg-white transition-colors"
      >
        <FontAwesomeIcon icon={faXmark} className="text-sm" />
      </button>

      {/* 제목 */}
      <h4 className="font-a2z font-bold text-charcoal pr-10 whitespace-pre-line" style={{ fontSize: "48px", lineHeight: "1.3" }}>
        {item.title}
      </h4>

      {/* 카테고리 태그 */}
      <div>
        <span className="bg-white px-4 py-2 rounded-full font-a2z text-sm text-dove tracking-[0.64px] uppercase">
          {item.category}
        </span>
      </div>

      {/* 정보 — 2x2 그리드 */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-5">
        {item.releaseDate && (
          <div className="flex flex-col gap-1">
            <span className="font-a2z text-[16px] text-dove">발매년월</span>
            <span className="font-a2z text-[24px] font-semibold text-charcoal">{item.releaseDate}</span>
          </div>
        )}
        {item.albumType && (
          <div className="flex flex-col gap-1">
            <span className="font-a2z text-[16px] text-dove">앨범형식 / 곡수</span>
            <span className="font-a2z text-[24px] font-semibold text-charcoal">
              {item.albumType}{item.trackCount ? ` / ${item.trackCount}곡` : ""}
            </span>
          </div>
        )}
        {item.type && (
          <div className="flex flex-col gap-1">
            <span className="font-a2z text-[16px] text-dove">타입</span>
            <span className="font-a2z text-[24px] font-semibold text-charcoal">{item.type}</span>
          </div>
        )}
        {item.support && (
          <div className="flex flex-col gap-1">
            <span className="font-a2z text-[16px] text-dove">지원기관</span>
            <span className="font-a2z text-[24px] font-semibold text-charcoal">{item.support}</span>
          </div>
        )}
      </div>

      {/* 설명 */}
      {item.description && (
        <p className="font-a2z text-[18px] text-charcoal leading-[1.75] tracking-[0.5px]">
          {item.description}
        </p>
      )}

      {/* 링크 */}
      {item.href && (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="self-start font-a2z text-sm font-bold text-forest hover:underline transition-colors mt-auto"
        >
          스트리밍 바로가기 →
        </a>
      )}
    </div>
  );
}

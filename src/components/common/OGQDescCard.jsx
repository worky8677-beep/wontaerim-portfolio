import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export function OGQDescCard({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="group w-full h-full rounded-[24px] overflow-hidden relative">
      {/* 스크롤 이미지 */}
      {item.detailImage ? (
        <img
          src={item.detailImage}
          alt={item.title}
          className="w-full h-auto translate-y-0 group-hover:-translate-y-[calc(100%-560px)] transition-transform duration-[2500ms] ease-in-out"
        />
      ) : (
        <div className="w-full h-full bg-alabaster" />
      )}

      {/* 닫기 버튼 */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/60 text-dove flex items-center justify-center hover:bg-white transition-colors z-10"
      >
        <FontAwesomeIcon icon={faXmark} className="text-sm" />
      </button>

      {/* 하단 텍스트 — 흰색 그라디언트 위에 */}
      <div className="absolute bottom-0 left-0 right-0 px-7 pb-8 pt-28 bg-linear-[180deg] from-white/0 to-white">
        {/* 제목 + 카테고리 태그 */}
        <div className="flex items-center gap-3 mb-5">
          <h4
            className="font-a2z font-bold text-charcoal whitespace-pre-line"
            style={{ fontSize: "40px", lineHeight: "1.2" }}
          >
            {item.title}
          </h4>
          <span className="bg-white px-4 py-2 rounded-full font-a2z text-sm text-charcoal tracking-[0.64px] uppercase shrink-0">
            {item.category}
          </span>
        </div>

        {/* 상세 정보 */}
        <div className="flex flex-col gap-2 font-a2z text-[20px] font-semibold">
          {item.releaseDate && (
            <div className="flex gap-7">
              <span className="text-dove w-24 shrink-0">제작년월</span>
              <span className="text-charcoal">{item.releaseDate}</span>
            </div>
          )}
          {item.program && (
            <div className="flex gap-7">
              <span className="text-dove w-24 shrink-0">프로그램</span>
              <span className="text-charcoal">{item.program}</span>
            </div>
          )}
          {item.desc && (
            <p className="font-a2z text-[16px] text-charcoal leading-relaxed mt-1">
              {item.desc}
            </p>
          )}
        </div>

        {/* 링크 */}
        {item.href && (
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 font-a2z text-sm font-bold text-forest hover:underline"
          >
            OGQ 바로가기 →
          </a>
        )}
      </div>
    </div>
  );
}

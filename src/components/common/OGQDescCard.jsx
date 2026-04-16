import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export function OGQDescCard({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="group w-full h-full rounded-[24px] overflow-hidden relative border border-gallery/30">
      {/* 스크롤 이미지 */}
      {item.detailImage ? (
        <div className="w-full translate-y-0 group-hover:-translate-y-[calc(100%-560px)] transition-transform duration-[2500ms] ease-in-out">
          <img
            src={item.detailImage}
            alt={item.title}
            className="w-full h-auto"
          />
          <div className="w-full h-[220px] bg-white" />
        </div>
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
      <div className="absolute bottom-0 left-0 right-0 px-7 pb-2 pt-28 bg-linear-[180deg] from-white/0 to-white">
        {/* 제목 */}
        <div className="mb-5">
          <h4
            className="font-a2z font-bold text-charcoal whitespace-pre-line"
            style={{ fontSize: "48px", lineHeight: "1.3" }}
          >
            {item.title}
          </h4>
        </div>

        {/* 상세 정보 — 2열 그리드 + 카테고리 태그 우하단 */}
        <div className="relative grid grid-cols-2 gap-x-6 gap-y-4 mb-4">
          {item.releaseDate && (
            <div className="flex flex-col gap-1">
              <span className="font-a2z text-[16px] text-dove">제작년월</span>
              <span className="font-a2z text-[24px] font-semibold text-charcoal">
                {item.releaseDate}
              </span>
            </div>
          )}
          {item.program && (
            <div className="flex flex-col gap-1">
              <span className="font-a2z text-[16px] text-dove">
                사용 프로그램
              </span>
              <span className="font-a2z text-[24px] font-semibold text-charcoal">
                {item.program}
              </span>
            </div>
          )}
          {item.category && (
            <span className="justify-self-end self-end bg-cream px-4 py-2 rounded-full font-a2z text-sm text-charcoal tracking-[0.64px] uppercase">
              {item.category}
            </span>
          )}
        </div>

        {/* 설명 */}
        {item.description && (
          <p className="font-a2z text-[16px] text-charcoal leading-relaxed tracking-[0.5px] mb-4">
            {item.description}
          </p>
        )}

        {/* 링크 */}
        {item.href && (
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-a2z text-sm font-bold text-forest hover:underline"
          >
            OGQ 바로가기 →
          </a>
        )}
      </div>
    </div>
  );
}

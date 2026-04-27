import { CloseButton } from "./CloseButton";
import { InfoRow } from "./InfoRow";
import { CategoryBadge } from "./CategoryBadge";

export function OGQDescCard({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="group w-full h-full rounded-[24px] overflow-hidden relative border border-gallery/30">
      {/* 이미지 */}
      {item.detailImage ? (
        item.detailEffect === "zoom" ? (
          <div className="w-full h-full overflow-hidden">
            <img
              src={item.detailImage}
              alt={item.title}
              className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700 ease-in-out"
            />
          </div>
        ) : (
          <div className="w-full translate-y-0 group-hover:-translate-y-[calc(100%-560px)] transition-transform duration-[2500ms] ease-in-out">
            <img
              src={item.detailImage}
              alt={item.title}
              className="w-full h-auto"
            />
            <div className="w-full h-[220px] bg-white" />
          </div>
        )
      ) : (
        <div className="w-full h-full bg-alabaster" />
      )}

      <CloseButton onClick={onClose} />

      {/* 하단 텍스트 — 흰색 그라디언트 위에 */}
      <div className="absolute bottom-0 left-0 right-0 px-7 pb-2 pt-28 bg-linear-[180deg] from-white/0 to-white">
        {/* 제목 */}
        <div className="mb-5">
          <h4
            className="font-a2z font-bold text-charcoal whitespace-pre-line text-h4 lg:text-display"
            style={{ lineHeight: "1.3" }}
          >
            {item.title}
          </h4>
        </div>

        {/* 상세 정보 — 2열 그리드 + 카테고리 태그 우하단 */}
        <div className="relative grid grid-cols-2 gap-x-6 gap-y-4 mb-4">
          <InfoRow label="제작년월" value={item.releaseDate} />
          <InfoRow label="사용 프로그램" value={item.program} />
          {item.category && (
            <CategoryBadge
              label={item.category}
              bgClass="bg-cream"
              textClass="text-charcoal"
              className="justify-self-end self-end"
            />
          )}
        </div>

        {/* 설명 */}
        {item.description && (
          <p className="font-a2z text-xs lg:text-body3 text-charcoal leading-relaxed tracking-[0.5px] mb-4">
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

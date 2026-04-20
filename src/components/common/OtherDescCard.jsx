import { CloseButton } from "./CloseButton";
import { InfoRow } from "./InfoRow";
import { CategoryBadge } from "./CategoryBadge";

export function OtherDescCard({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="w-full h-full rounded-[24px] bg-snowflake p-10 flex flex-col gap-6 relative">

      <CloseButton onClick={onClose} />

      {/* 제목 */}
      <h4 className="font-a2z font-bold text-charcoal pr-10 whitespace-pre-line text-h4 md:text-h4 lg:text-display" style={{ lineHeight: "1.3" }}>
        {item.title}
      </h4>

      {/* 카테고리 태그 */}
      <div>
        <CategoryBadge label={item.category} />
      </div>

      {/* 정보 — 2x2 그리드 */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-5">
        <InfoRow label="발매년월" value={item.releaseDate} />
        <InfoRow
          label="앨범형식 / 곡수"
          value={item.albumType && `${item.albumType}${item.trackCount ? ` / ${item.trackCount}곡` : ""}`}
        />
        <InfoRow label="타입" value={item.type} />
        <InfoRow label="지원기관" value={item.support} />
      </div>

      {/* 설명 */}
      {item.description && (
        <p className="font-a2z text-body3 lg:text-body2 text-charcoal leading-[1.75] tracking-[0.5px]">
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

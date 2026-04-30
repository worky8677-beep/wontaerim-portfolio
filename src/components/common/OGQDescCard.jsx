import { CloseButton } from "./CloseButton";
import { InfoRow } from "./InfoRow";
import { CategoryBadge } from "./CategoryBadge";

export function OGQDescCard({ item, onClose }) {
  if (!item) return null;

  // 프로그램 문자열을 칩 배열로 변환
  const tools = item.program ? item.program.split(",").map(s => s.trim()) : [];

  return (
    <div className="group w-full h-full rounded-[24px] bg-alabaster flex flex-col relative overflow-hidden">
      <CloseButton onClick={onClose} />

      {/* 상단 이미지 섹션 (스크롤 가능하게 유지) */}
      <div className="flex-1 overflow-y-auto bg-white custom-scrollbar">
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
            </div>
          )
        ) : (
          <div className="w-full h-full bg-alabaster flex items-center justify-center font-paperlogy text-silver">No Image</div>
        )}
      </div>

      {/* 하단 텍스트 정보 섹션 */}
      <div className="p-6 desktop:p-8 flex flex-col gap-6 bg-alabaster">
        {/* 헤더 섹션 */}
        <div className="flex flex-col gap-2 pr-10">
          <p className="font-paperlogy text-xs text-silver tracking-widest uppercase">{item.category || "Artwork"}</p>
          <h4 className="font-paperlogy font-bold text-mine text-2xl desktop:text-3xl leading-tight">
            {item.title}
          </h4>
        </div>

        {/* 정보 섹션 */}
        <div className="flex flex-col gap-6">
          {/* 설명글 */}
          {item.description && (
            <div className="flex flex-col gap-2">
              <p className="font-paperlogy font-bold text-sm text-mine">Description</p>
              <p className="font-paperlogy text-sm desktop:text-base text-dove leading-relaxed">
                {item.description}
              </p>
            </div>
          )}

          {/* 사용 프로그램 (칩 디자인) */}
          {tools.length > 0 && (
            <div className="flex flex-col gap-2">
              <p className="font-paperlogy font-bold text-sm text-mine">Tools Used</p>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <span key={index} className="px-3 py-1 bg-gallery rounded-full font-paperlogy text-[10px] desktop:text-xs text-mine">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* 링크 버튼 */}
          {item.href && (
            <div className="mt-auto flex justify-end">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-paperlogy text-sm font-bold text-white bg-forest px-6 py-3 rounded-full border border-transparent hover:bg-white hover:text-forest hover:border-forest transition-colors shadow-sm"
              >
                OGQ 바로가기 →
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

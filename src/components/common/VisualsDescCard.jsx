import { CloseButton } from "./CloseButton";

export function VisualsDescCard({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="w-full h-full rounded-[24px] bg-alabaster p-6 desktop:p-8 flex flex-col gap-6 relative overflow-y-auto">
      <CloseButton onClick={onClose} />

      {/* 헤더 섹션 */}
      <div className="flex flex-col gap-2 pr-10">
        <p className="font-paperlogy text-xs text-silver tracking-widest uppercase">Visual Works</p>
        <h4 className="font-paperlogy font-bold text-mine text-2xl desktop:text-3xl leading-tight">
          {item.title}
        </h4>
      </div>

      {/* 이미지/프리뷰 섹션 */}
      <div className="w-full aspect-video rounded-xl overflow-hidden shadow-sm">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* 정보 섹션 */}
      <div className="flex flex-col gap-6">
        {/* 설명글 */}
        {item.desc && (
          <div className="flex flex-col gap-2">
            <p className="font-paperlogy font-bold text-sm text-mine">Description</p>
            <p className="font-paperlogy text-sm desktop:text-base text-dove leading-relaxed">
              {item.desc}
            </p>
          </div>
        )}

        {/* 사용 프로그램 */}
        {item.programs && (
          <div className="flex flex-col gap-2">
            <p className="font-paperlogy font-bold text-sm text-mine">Tools Used</p>
            <div className="flex flex-wrap gap-2">
              {item.programs.map((tool, index) => (
                <span key={index} className="px-3 py-1 bg-gallery rounded-full font-paperlogy text-[10px] desktop:text-xs text-mine">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* 영상 링크 버튼 */}
        {item.href && (
          <div className="mt-auto flex justify-end">
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-paperlogy text-sm font-bold text-white bg-forest px-6 py-3 rounded-full border border-transparent hover:bg-white hover:text-forest hover:border-forest transition-colors shadow-sm"
            >
              WATCH VIDEO →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

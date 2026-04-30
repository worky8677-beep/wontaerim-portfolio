export function OtherCard({ image, title, desc, isSelected, onClick, category, aspect, forceSquare }) {
  const isOGQ = category === "Artwork";
  const isVideo = aspect === "video" && !forceSquare;
  return (
    <div
      onClick={onClick}
      className={`group w-full cursor-pointer rounded-[24px] p-2 transition-all duration-300 ${
        isSelected ? "bg-cream" : "bg-transparent hover:bg-alabaster"
      }`}
    >
      <div
        className={`relative w-full rounded-[18px] overflow-hidden ${
          isVideo ? "aspect-video" : "h-[160px] md:h-[200px] lg:h-[260px]"
        } ${isOGQ ? "border border-gallery/30" : ""}`}
      >
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-alabaster" />
        )}

        {/* 호버 오버레이 */}
        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/60 transition-colors duration-300 flex flex-col items-center justify-center p-5">
          <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex flex-col gap-3 items-center text-center">
            <p className="font-a2z text-white font-medium text-sub leading-snug whitespace-pre-line">
              {title}
            </p>
            {desc && (
              <p className="font-a2z text-white/70 text-sm leading-snug">
                {desc}
              </p>
            )}
            <div className="flex flex-col items-center">
              <div className="mt-2 px-4 py-1.5 rounded-full bg-lime text-mine font-paperlogy font-bold text-[10px] desktop:text-xs tracking-tight transition-transform active:scale-95">
                VIEW DETAIL
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

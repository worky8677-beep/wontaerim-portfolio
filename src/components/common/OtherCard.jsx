export function OtherCard({ image, title, desc, isSelected, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`group w-full cursor-pointer rounded-[24px] p-2 transition-all duration-300 ${
        isSelected
          ? "bg-[#fffeba]"
          : "bg-transparent hover:bg-alabaster"
      }`}
    >
      <div
        className="relative w-full h-[260px] rounded-[18px] overflow-hidden"
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
          <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex flex-col gap-1 items-center text-center">
            <p className="font-a2z text-white font-medium text-sub leading-snug">
              {title}
            </p>
            {desc && (
              <p className="font-a2z text-white/70 text-sm leading-snug">
                {desc}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function OtherCard({ image, title, desc, href, aspect = "square" }) {
  const aspectMap = {
    square: "aspect-square",
    video: "aspect-video",
  };

  const Tag = href ? "a" : "div";

  return (
    <Tag href={href} className="group w-full cursor-pointer">
      <div
        className={`relative w-full ${aspectMap[aspect]} rounded-[24px] overflow-hidden shadow-[0px_10px_31px_0px_rgba(0,0,0,0.03)]`}
      >
        {/* 이미지 */}
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
    </Tag>
  );
}

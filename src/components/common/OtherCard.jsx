export function OtherCard({ image, category, title, href = "#" }) {
  return (
    <a href={href} className="group block w-[580px] h-[400px] bg-white border border-gallery rounded-[24px] overflow-hidden shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1),0px_4px_6px_-1px_rgba(0,0,0,0.1)] relative">
      <div className="w-full h-[280px] overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        ) : (
          <div className="w-full h-full bg-alabaster" />
        )}
      </div>
      <div className="p-6 flex flex-col gap-2">
        {category && (
          <span className="font-gmarket text-xs text-dove tracking-[0.64px] uppercase">{category}</span>
        )}
        <h4 className="font-gmarket font-bold text-sub text-forest">{title}</h4>
      </div>
    </a>
  );
}

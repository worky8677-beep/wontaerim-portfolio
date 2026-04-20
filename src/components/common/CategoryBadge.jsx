export function CategoryBadge({ label, bgClass = "bg-white", textClass = "text-dove", className = "" }) {
  return (
    <span className={`${bgClass} ${textClass} ${className} px-4 py-2 rounded-full font-a2z text-sm tracking-[0.64px] uppercase`}>
      {label}
    </span>
  );
}

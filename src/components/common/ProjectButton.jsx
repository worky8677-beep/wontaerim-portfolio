const arrowUrl = "https://www.figma.com/api/mcp/asset/c638e3bc-7169-46ea-8d82-e915d11e7b34";

export function ProjectButton({ label, href = "#" }) {
  return (
    <a href={href} className="flex items-center gap-1 font-a2z font-bold text-h5 text-forest hover:text-fern bg-[linear-gradient(to_right,var(--color-lime),var(--color-lime))] bg-no-repeat bg-left bg-[length:0%_100%] hover:bg-[length:100%_100%] transition-[background-size,color,transform] duration-700 ease-in-out hover:-translate-y-1">
      {label}
      <span className="inline-block rotate-180 -scale-y-100 size-[33px]">
        <img src={arrowUrl} alt="" className="size-full" />
      </span>
    </a>
  );
}

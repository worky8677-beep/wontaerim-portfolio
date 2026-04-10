const asteriskGreen = "https://www.figma.com/api/mcp/asset/ed13a602-1e5b-4012-aa5a-faf8b01ca09d";
const asteriskGrey = "https://www.figma.com/api/mcp/asset/cc1a0215-7c92-4f3d-98f7-137495a51007";

export function ExperienceItem({ start, end, title, description, isFirst = false }) {
  return (
    <div className="flex flex-col gap-4">
      <div
        className={`inline-flex gap-[5px] items-center px-[10px] py-[5px] rounded-[10px] self-start ${isFirst ? "bg-snowflake" : "bg-alabaster"}`}
      >
        <div className="size-2 overflow-hidden">
          <img
            src={isFirst ? asteriskGreen : asteriskGrey}
            alt=""
            className="size-full"
          />
        </div>
        <span className="font-gmarket text-xs text-dove tracking-widest">{start}</span>
        {end && <span className="text-xs text-dove">–</span>}
        {end && <span className="font-gmarket text-xs text-dove tracking-widest">{end}</span>}
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-gmarket font-normal text-body1 text-charcoal">
          {title}
        </p>
        {description && (
          <p className="font-gmarket text-body3 text-dove leading-6">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

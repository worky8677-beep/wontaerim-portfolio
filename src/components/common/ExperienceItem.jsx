import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";

export function ExperienceItem({ start, end, title, description }) {
  return (
    <div className="flex flex-col gap-4 border-snowflake">
      <div className="inline-flex gap-[5px] items-center px-[10px] py-[5px] rounded-[10px] self-start bg-snowflake">
        <FontAwesomeIcon icon={faAsterisk} className="size-2 text-fern/50 " />
        <span className="font-a2z text-xs text-dove tracking-widest">{start}</span>
        {end && <span className="text-xs text-dove">–</span>}
        {end && <span className="font-a2z text-xs text-dove tracking-widest">{end}</span>}
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-a2z font-normal text-body1 text-charcoal">{title}</p>
        {description && (
          <p className="font-a2z text-body3 text-dove leading-6">{description}</p>
        )}
      </div>
    </div>
  );
}
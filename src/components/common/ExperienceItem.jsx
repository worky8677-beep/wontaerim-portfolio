import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";

export function ExperienceItem({ start, end, title, description }) {
  return (
    <div className="flex flex-col gap-4 border-snowflake">
      <div className="inline-flex gap-[4px] sm:gap-[5px] items-center px-[7px] py-[3px] sm:px-[10px] sm:py-[5px] rounded-[8px] sm:rounded-[10px] self-start bg-snowflake">
        <FontAwesomeIcon
          icon={faAsterisk}
          className="size-[6px] sm:size-2 text-fern/50"
        />
        <span className="font-a2z text-[10px] sm:text-xs text-dove tracking-widest">
          {start}
        </span>
        {end && <span className="text-[10px] sm:text-xs text-dove">–</span>}
        {end && (
          <span className="font-a2z text-[10px] sm:text-xs text-dove tracking-widest">
            {end}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-a2z font-normal text-body3 sm:text-body1 text-charcoal">
          {title}
        </p>
        {description && (
          <p className="font-a2z font-light text-[12px] sm:text-body3 text-dove leading-3 sm:leading-6 whitespace-pre-line">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
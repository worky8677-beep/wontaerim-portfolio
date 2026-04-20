import { HeadTitle } from "./HeadTitle";
import { ExperienceItem } from "./ExperienceItem";

export function ExperienceColumn({ title, items }) {
  return (
    <div className="flex flex-col gap-10">
      <HeadTitle title={title} color="text-forest" />
      <div className="flex flex-col gap-10 pl-[18px]">
        {items.map((item, i) => (
          <ExperienceItem key={i} {...item} />
        ))}
      </div>
    </div>
  );
}

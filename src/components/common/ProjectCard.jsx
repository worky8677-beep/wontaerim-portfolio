const arrowUrl = "https://www.figma.com/api/mcp/asset/c638e3bc-7169-46ea-8d82-e915d11e7b34";

function ProjectBtn({ label, href = "#" }) {
  return (
    <a href={href} className="flex items-center gap-1 font-gmarket font-bold text-h5 text-forest">
      {label}
      <span className="inline-block rotate-180 -scale-y-100 size-[33px]">
        <img src={arrowUrl} alt="" className="size-full" />
      </span>
    </a>
  );
}

export function ProjectCard({ number, title, tags = [], duration, contribution, description, image, docsHref, linkLabel, linkHref }) {
  return (
    <div className="bg-white border border-gallery rounded-[24px] shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1),0px_4px_6px_-1px_rgba(0,0,0,0.1)] flex gap-10 items-center overflow-hidden px-10 py-8 w-full">
      <div className="shrink-0 w-[540px] h-[500px] rounded-[24px] overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col justify-between h-[500px] w-[540px]">
        <div className="flex flex-col gap-5">
          <p className="font-gmarket text-body3 text-forest tracking-[0.96px]">
            Project #{number}
          </p>
          <h3 className="font-gmarket font-bold text-display text-charcoal tracking-tight">
            {title}
          </h3>
          <div className="flex gap-[10px] flex-wrap">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-alabaster px-4 py-2 rounded-full font-gmarket text-body3 text-forest tracking-[0.64px]"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-[27px] font-gmarket font-normal text-sub">
            <div className="flex flex-col gap-[10px] w-[6rem] shrink-0 text-dove">
             <span className="flex justify-between">
              <span>제</span>
              <span>작</span>
              <span>기</span>
              <span>간</span></span>
              <span className="flex justify-between">
                <span>기</span>
                <span>여</span>
                <span>도</span>
              </span>
            </div>
            <div className="flex flex-col gap-[10px] text-forest">
              <span>{duration}</span>
              <span>{contribution}</span>
            </div>
          </div>
          <p className="font-gmarket text-body2 text-charcoal leading-[31.5px]">
            {description}
          </p>
        </div>
        <div className="flex gap-[10px] items-center justify-end">
          {docsHref && <ProjectBtn label="기획서" href={docsHref} />}
          {linkHref && <ProjectBtn label={linkLabel} href={linkHref} />}
        </div>
      </div>
    </div>
  );
}

import { ProjectButton } from "./ProjectButton";
import { useGsapReveal } from "../../hooks/useGsapReveal";

export function ProjectCard({ number, title, tags = [], duration, contribution, description, image, embed, bgImage, docsHref, docsLabel = "기획서", docs2Href, docs2Label, linkLabel, linkHref, reverse }) {
  const ref = useGsapReveal(reverse ? "right" : "left", { duration: 0.6 });

  return (
    <div
      ref={ref}
      className="flex flex-col"
    >

      <div className={`flex flex-col desktop:flex-row gap-8 desktop:gap-20 items-center ${reverse ? "desktop:flex-row-reverse" : "desktop:flex-row"}`}>

        <div
          className="shrink-0 w-full h-[260px] md:w-[340px] md:h-[320px] lg:w-[540px] lg:h-[480px] rounded-[20px] overflow-hidden relative"
          style={bgImage ? { backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" } : {}}
        >
          {embed && bgImage ? (
            <div
              className="absolute overflow-hidden rounded-[36px]"
              style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: "220px", height: "460px" }}
            >
              <iframe
                src={embed}
                className="absolute"
                style={{ left: "-50px", top: "-115px", width: "320px", height: "690px" }}
                allowFullScreen
              />
            </div>
          ) : embed ? (
            <iframe src={embed} className="w-full h-full" allowFullScreen />
          ) : (
            <img src={image} alt={title} className="w-full h-full object-cover" />
          )}
        </div>

        <div className="flex flex-col gap-4 desktop:gap-6 flex-1 min-w-0">
          <p className="font-a2z text-xs md:text-xs lg:text-body3 text-dove tracking-[0.96px]">
            Project #{number}
          </p>
          <h3 className="font-a2z font-bold text-h4 md:text-h3 lg:text-display text-charcoal tracking-tight">
            {title}
          </h3>
          <div className="flex gap-[10px] flex-wrap">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-alabaster px-3 py-1 desktop:px-4 desktop:py-2 rounded-full font-a2z text-xs desktop:text-body3 text-forest tracking-[0.64px]"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-[27px] font-a2z font-normal text-body3 md:text-body3 lg:text-sub">
            <div className="flex flex-col gap-[2px] w-[5rem] md:w-[5rem] lg:w-[6rem] shrink-0 text-dove">
              <span className="flex justify-between">
                <span>제</span><span>작</span><span>기</span><span>간</span>
              </span>
              <span className="flex justify-between">
                <span>기</span><span>여</span><span>도</span>
              </span>
            </div>
            <div className="flex flex-col gap-[2px] text-forest">
              <span>{duration}</span>
              <span>{contribution}</span>
            </div>
          </div>
          <p className="font-a2z text-body3 lg:text-body2 text-charcoal leading-4 lg:leading-[31.5px] tracking-normal">
            {description}
          </p>
          <div className="flex gap-[10px] items-center">
            {docsHref && <ProjectButton label={docsLabel} href={docsHref} />}
            {docs2Href && <ProjectButton label={docs2Label} href={docs2Href} />}
            {linkHref && <ProjectButton label={linkLabel} href={linkHref} />}
          </div>
        </div>

      </div>
    </div>
  );
}
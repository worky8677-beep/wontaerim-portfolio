import { useEffect, useRef, useState } from "react";
import { ProjectButton } from "./ProjectButton";

export function ProjectCard({ number, title, tags = [], duration, contribution, description, image, embed, bgImage, docsHref, docsLabel = "기획서", docs2Href, docs2Label, linkLabel, linkHref, reverse, isFirst }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flex flex-col transition-none ${visible ? (reverse ? "animate-slide-from-right-slow" : "animate-slide-from-left") : "opacity-0"}`}
    >

      <div className={`flex gap-20 items-center ${reverse ? "flex-row-reverse" : "flex-row"}`}>

        <div
          className="shrink-0 w-[540px] h-[480px] rounded-[20px] overflow-hidden relative"
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

        <div className="flex flex-col gap-6 flex-1">
          <p className="font-a2z text-body3 text-dove tracking-[0.96px]">
            Project #{number}
          </p>
          <h3 className="font-a2z font-bold text-display text-charcoal tracking-tight">
            {title}
          </h3>
          <div className="flex gap-[10px] flex-wrap">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-alabaster px-4 py-2 rounded-full font-a2z text-body3 text-forest tracking-[0.64px]"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-[27px] font-a2z font-normal text-sub">
            <div className="flex flex-col gap-[2px] w-[6rem] shrink-0 text-dove">
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
          <p className="font-a2z text-body2 text-charcoal leading-[31.5px]">
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
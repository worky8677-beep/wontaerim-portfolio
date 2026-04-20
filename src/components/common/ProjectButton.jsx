import arrowImg from "../../img/icon- arrowleft.png";

export function ProjectButton({ label, href = "#" }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="project-btn flex items-center gap-2 font-a2z font-bold text-body2 lg:text-h5 text-forest hover:text-fern">
      {label}
      <img src={arrowImg} alt="" className="size-[20px]" />
    </a>
  );
}

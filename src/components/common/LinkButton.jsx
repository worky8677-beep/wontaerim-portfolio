import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const btnStyle = {
  backgroundImage:
    "linear-gradient(-60deg, rgb(255,250,201) 1%, rgb(208,255,129) 94%)",
};

export function LinkButton({ icon, href, children, target, rel }) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      style={btnStyle}
      className="flex items-center gap-3 px-8 py-4 rounded-full shadow-[5.5px_13.75px_27.5px_0px_rgba(0,0,0,0.15)] font-gmarket font-regular text-body2 text-dove leading-none"
    >
      <FontAwesomeIcon icon={icon} className="block -translate-y-px" />
      {children}
    </a>
  );
}

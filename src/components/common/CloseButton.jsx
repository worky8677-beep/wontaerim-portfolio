import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export function CloseButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/60 text-dove flex items-center justify-center hover:bg-white transition-colors z-10"
    >
      <FontAwesomeIcon icon={faXmark} className="text-sm" />
    </button>
  );
}

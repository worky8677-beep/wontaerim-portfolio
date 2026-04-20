import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export function SliderArrowButton({ direction, onClick }) {
  const isLeft = direction === "left";
  return (
    <button
      onClick={onClick}
      className={`absolute ${isLeft ? "-left-7" : "-right-7"} top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-gallery text-dove shadow-sm flex items-center justify-center hover:bg-alabaster transition-colors z-10`}
    >
      <FontAwesomeIcon icon={isLeft ? faChevronLeft : faChevronRight} className="text-sm" />
    </button>
  );
}

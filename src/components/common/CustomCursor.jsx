import { useEffect, useRef, useState } from "react";
import starImg from "../../img/cursor2.png";
import ministarImg from "../../img/cursor.svg";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const rafRef = useRef(null);
  const [onButton, setOnButton] = useState(false);

  useEffect(() => {
    function onMove(e) {
      mouse.current = { x: e.clientX, y: e.clientY };
    }

    function onOver(e) {
      if (e.target.closest("[data-star-cursor]")) setOnButton(true);
    }

    function onOut(e) {
      if (e.target.closest("[data-star-cursor]")) setOnButton(false);
    }

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    function tick() {
      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(${mouse.current.x - 4}px, ${mouse.current.y - 4}px)`;
      }

      ring.current.x += (mouse.current.x - ring.current.x) * 0.1;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.1;

      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate(${ring.current.x - 20}px, ${ring.current.y - 20}px)`;
      }

      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      document.body.style.cursor = "";
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* 작은 별 */}
      <img
        ref={dotRef}
        src={ministarImg}
        className="fixed top-0 left-0 w-3 h-3 z-[9999] pointer-events-none"
      />

      {/* 큰 원 / 별 */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 z-[9999] pointer-events-none"
      >
        {onButton ? (
          <img
            src={starImg}
            className="w-full h-full object-contain"
          />
        ) : (
          <div className="w-full h-full rounded-full border border-forest opacity-20 transition-opacity duration-200" />
        )}
      </div>
    </>
  );
}

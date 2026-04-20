import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import logoImg from "../../img/logo.png";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("header");
    if (!hero) return;

    // hero가 20% 미만 남으면 = About에 80% 이상 진입
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(entry.intersectionRatio < 0.2),
      { threshold: Array.from({ length: 21 }, (_, i) => i * 0.05) }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const spring = "0.5s cubic-bezier(0.34, 1.56, 0.64, 1)";

  return (
    <div
      className="fixed top-0 inset-x-0 z-50"
      style={{
        padding: scrolled
          ? `12px clamp(24px, calc((100% - 1280px) / 2), 9999px)`
          : "0",
        transition: `padding ${spring}`,
      }}
    >
      <nav
        className="w-full h-[60px] flex items-center justify-center desktop:justify-between px-6 desktop:px-20"
        style={{
          borderRadius: scrolled ? "24px" : "0px",
          background: scrolled ? "rgba(255, 255, 255, 0.85)" : "white",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.07)" : "none",
          transition: `border-radius ${spring}, background ${spring}, box-shadow 0.3s ease`,
        }}
      >
        <img src={logoImg} className="h-10 w-auto" />
        <div className="hidden desktop:flex items-center gap-[30px] font-a2z text-label tracking-[0.72px] uppercase text-dove">
          <a href="#about" className="hover:text-forest transition-colors">About ME</a>
          <a href="#edu-ex" className="hover:text-forest transition-colors">Experience</a>
          <a href="#projects" className="hover:text-forest transition-colors">Projects</a>
          <a href="#contact" className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-lime text-forest hover:bg-chartreuse transition-colors">
            Contact
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
      </nav>
    </div>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-silver relative overflow-hidden min-h-[600px] flex flex-col justify-end">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-gmarket font-bold text-[200px] leading-none text-silver/40 tracking-[-4px]">
          contact
        </span>
      </div>
      <div className="relative z-10 flex justify-end px-[320px] pb-20 pt-32">
        <div className="flex flex-col gap-6 text-right">
          <a href="mailto:rolling.of.won@gmail.com" className="font-gmarket font-bold text-[56px] leading-tight text-forest hover:text-dove transition-colors">
            rolling.of.won@gmail.com
          </a>
          <p className="font-gmarket font-bold text-h4 text-dove">
            010-2256-7019
          </p>
          <p className="font-gmarket font-bold text-h4 text-dove">
            Let's talk!
          </p>
        </div>
      </div>
    </footer>
  );
}

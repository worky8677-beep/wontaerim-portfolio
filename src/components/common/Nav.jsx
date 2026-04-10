export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 h-[60px] bg-white z-50 flex items-center justify-between px-9">
      <div className="w-10 h-10 rounded-[50px] bg-lime" />
      <div className="flex gap-[30px] font-gmarket text-label tracking-[0.72px] uppercase text-dove">
        <a href="#about" className="hover:text-forest transition-colors">About ME</a>
        <a href="#edu-ex" className="hover:text-forest transition-colors">Experience</a>
        <a href="#projects" className="hover:text-forest transition-colors">Projects</a>
        <a href="#contact" className="hover:text-forest transition-colors">Contact</a>
      </div>
    </nav>
  );
}

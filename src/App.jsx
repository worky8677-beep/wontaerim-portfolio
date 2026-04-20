import { useEffect } from "react";
import { Outlet } from "react-router";
import Lenis from "lenis";
import { Nav } from "./components/common/Nav";
import { Footer } from "./components/common/Footer";
import { ScrollToTop } from "./components/common/ScrollToTop";
import CustomCursor from "./components/common/CustomCursor";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      <Nav />
      <main className="pt-[60px]">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
      <CustomCursor />
    </>
  );
}

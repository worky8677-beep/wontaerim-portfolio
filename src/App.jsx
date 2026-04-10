import { Outlet } from "react-router";
import { Nav } from "./components/common/Nav";
import { Footer } from "./components/common/Footer";

export default function App() {
  return (
    <>
      <Nav />
      <main className="pt-[60px]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

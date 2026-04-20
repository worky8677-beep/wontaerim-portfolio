import { lazy, Suspense } from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";

const EduExSection = lazy(() => import("./EduExSection"));
const ProjectsSection = lazy(() => import("./ProjectsSection"));
const OtherSection = lazy(() => import("./OtherSection"));
const SkillsSection = lazy(() => import("./SkillsSection"));

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Suspense fallback={<div className="h-screen bg-white" />}>
        <EduExSection />
        <ProjectsSection />
        <OtherSection />
        <SkillsSection />
      </Suspense>
    </>
  );
}

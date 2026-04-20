import { HeadTitle } from "../components/common/HeadTitle";
import { ProjectCard } from "../components/common/ProjectCard";
import { projects } from "../data/ProjectItems";

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full bg-white py-16 desktop:py-[160px]">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-[60px] desktop:gap-[100px] px-6 desktop:px-10">
        <HeadTitle title="Projects" />
        <div className="flex flex-col gap-16 desktop:gap-60">
          {projects.map((project) => (
            <ProjectCard
              key={project.number}
              {...project}
              reverse={project.number % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

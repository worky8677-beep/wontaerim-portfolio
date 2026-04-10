import { HeadTitle } from "../components/common/HeadTitle";
import { ProjectCard } from "../components/common/ProjectCard";

const projectImg = "https://www.figma.com/api/mcp/asset/b9b2f72c-8328-418a-a588-01c7bd3e245c";

const projects = [
  {
    number: 1,
    title: "브루다 커피 어플 리디자인",
    tags: ["FIGMA"],
    duration: "2주",
    contribution: "40%",
    description: "피그마를 이용해서 작업한 팀프로젝트 입니다! 저는 주로 디자인을 맡아 작업하였고 팀원들과 함께한 기획에 맞춰 어플을 리디자인 했습니다. 피그마를 이용해 처음 했던 협업이라 피그마를 익히며 작업했던 기억이 납니다.",
    image: projectImg,
    docsHref: "#",
    linkLabel: "프로토타입",
    linkHref: "#",
  },
  {
    number: 2,
    title: "키즈 OTT 구현",
    tags: ["REACT", "FIGMA"],
    duration: "2주",
    contribution: "33%",
    description: "팀프로젝트로 OTT 서비스를 기획하고 바이브코딩으로 구현해보았습니다. 리액트로 구현한 처음으로 만든 팀 프로젝트입니다.",
    image: projectImg,
    docsHref: "#",
    linkLabel: "깃허브",
    linkHref: "#",
  },
  {
    number: 3,
    title: "항공사 홈페이지 구현",
    tags: ["HTML", "CSS", "JAVASCRIPT"],
    duration: "3주",
    contribution: "100%",
    description: "처음으로 자바스크립트를 이용한 홈페이지 구현 프로젝트입니다. 스와이퍼 코드를 가져다 사용했는데, 기존 코드와 충돌하는 바람에 수정하는데 애를 먹었던 기억이 납니다. 기존 항공사 페이지에서 더 예매하고 정보를 보기 편하게 수정해보았습니다.",
    image: projectImg,
    docsHref: "#",
    linkLabel: "깃허브",
    linkHref: "#",
  },
  {
    number: 4,
    title: "AI를 이용한 광고 영상",
    tags: ["KLING", "PREMIER PRO"],
    duration: "1주",
    contribution: "100%",
    description: "투썸플레이스의 케이크를 발렌타인데이 시즌에 맞춰 광고영상을 만들어보았습니다. 매 시즌 라이징 여배우들을 이용해서 케이크를 홍보하는 투썸의 기존 광고 스타일에 맞춰 여배우 이미지 프롬프트를 만들었고, 얼굴의 변형을 막기 위해 디테일한 프롬프트를 작성하려고 노력했습니다.",
    image: projectImg,
    docsHref: "#",
    linkLabel: "영상 보러가기",
    linkHref: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full bg-white py-[296px]">
      <div className="w-[1280px] mx-auto flex flex-col gap-[70px] px-10">
        <HeadTitle title="Projects" />
        <div className="flex flex-col gap-[70px]">
          {projects.map((project) => (
            <ProjectCard key={project.number} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

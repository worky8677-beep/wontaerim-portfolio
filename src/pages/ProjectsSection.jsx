import { HeadTitle } from "../components/common/HeadTitle";
import { ProjectCard } from "../components/common/ProjectCard";
import brewdaImg from "../img/projectbrewda.png";
import aerokImg from "../img/Areok.png";
import cafe from "../img/cafe.jpg";

const projectImg = "https://www.figma.com/api/mcp/asset/b9b2f72c-8328-418a-a588-01c7bd3e245c";

const projects = [
  {
    number: 1,
    title: "브루다 커피 어플 리디자인",
    tags: ["FIGMA"],
    duration: "2주",
    contribution: "40%",
    description:
      "피그마를 이용해서 작업한 팀프로젝트 입니다! 저는 주로 디자인을 맡아 작업하였고 팀원들과 함께한 기획에 맞춰 어플을 리디자인 했습니다. 피그마를 이용해 처음 했던 협업이라 피그마를 익히며 작업했던 기억이 납니다.",
    image: brewdaImg,
    embed:
      "https://embed.figma.com/proto/0HWO0KeTPRSWFqPFsiozAp/3%ED%8C%80-%EC%95%B1%EB%94%94%EC%9E%90%EC%9D%B8-%EB%B8%8C%EB%A3%A8%EB%8B%A4%EC%BB%A4%ED%94%BC?node-id=4-2&page-id=0%3A1&starting-point-node-id=4%3A59&embed-host=share",
    docsHref: "https://www.figma.com/deck/7XbK3mX0A5Mh7KpRKrep6A",
    docsLabel: "기획서",
    linkLabel: "프로토타입",
    linkHref:
      "https://www.figma.com/proto/0HWO0KeTPRSWFqPFsiozAp/3%ED%8C%80-%EC%95%B1%EB%94%94%EC%9E%90%EC%9D%B8-%EB%B8%8C%EB%A3%A8%EB%8B%A4%EC%BB%A4%ED%94%BC?node-id=4-2&page-id=0%3A1&starting-point-node-id=4%3A59&t=sotOiTMq2V0vfedt-1",
  },
  {
    number: 2,
    title: "키즈 OTT 구현",
    tags: ["REACT", "FIGMA"],
    duration: "2주",
    contribution: "33%",
    description:
      "팀프로젝트로 OTT 서비스를 기획하고 바이브코딩으로 구현해보았습니다. 리액트로 구현한 처음으로 만든 팀 프로젝트입니다.",
    image: projectImg,
    docsLabel: "기획서",
    docsHref: "https://www.figma.com/deck/lWmxeRkSTy8fAjOO77747g",
    docs2Label: "구현화면",
    docs2Href: "https://rookiz-front.onrender.com/",

    linkLabel: "깃허브",
    linkHref: "https://github.com/worky8677-beep/rookiz-deploy.git",
  },
  {
    number: 3,
    title: "항공사 홈페이지 구현",
    tags: ["HTML", "CSS", "JAVASCRIPT"],
    duration: "3주",
    contribution: "100%",
    description:
      "처음으로 자바스크립트를 이용한 홈페이지 구현 프로젝트입니다. 스와이퍼 코드를 가져다 사용했는데, 기존 코드와 충돌하는 바람에 수정하는데 애를 먹었던 기억이 납니다. 기존 항공사 페이지에서 더 예매하고 정보를 보기 편하게 수정해보았습니다.",
    image: aerokImg,
    docsLabel: "구현화면",
    docsHref: "https://worky8677-beep.github.io/projectA/",

    linkLabel: "깃허브",
    linkHref: "https://github.com/worky8677-beep/projectA",
  },
  {
    number: 4,
    title: "AI를 이용한 광고 영상",
    tags: ["KLING", "PREMIER PRO"],
    duration: "1주",
    contribution: "100%",
    description:
      "투썸플레이스의 케이크를 발렌타인데이 시즌에 맞춰 광고영상을 만들어보았습니다. 매 시즌 라이징 여배우들을 이용해서 케이크를 홍보하는 투썸의 기존 광고 스타일에 맞춰 여배우 이미지 프롬프트를 만들었고, 얼굴의 변형을 막기 위해 디테일한 프롬프트를 작성하려고 노력했습니다.",
    image: cafe,
    docsHref: null,
    linkLabel: "영상 보러가기",
    linkHref:
      "https://drive.google.com/file/d/1_KE-zDC8xWWfJxTpw5uQmBA4VkvLntMX/view?usp=drive_link",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full bg-white py-[160px]">
      <div className="w-[1280px] mx-auto flex flex-col gap-[100px] px-10">
        <HeadTitle title="Projects" />
        <div className="flex flex-col gap-60">
          {projects.map((project) => (
            <ProjectCard
              key={project.number}
              {...project}
              reverse={project.number % 2 === 0}
              isFirst={project.number === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
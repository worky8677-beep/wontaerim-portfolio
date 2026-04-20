import brewdaImg from "../img/projectbrewda.png";
import brewdaBgImg from "../img/brewda.png";
import aerokImg from "../img/Aerok.png";
import cafe from "../img/cafe.jpg";
import rookiz from "../img/rookiz.png";

export const projects = [
  {
    number: 1,
    title: "브루다 커피 어플 리디자인",
    tags: ["FIGMA"],
    duration: "2주",
    contribution: "40%",
    description: `앱스토어 리뷰 분석과 직접 사용 경험을 바탕으로 브루다 커피 앱을 리디자인한 팀 프로젝트입니다. 퀵오더 카드 수 제한 등 실사용자 불편을 반영해 메인화면을 개선했고, 메인 → 메뉴탐색 → 결제로 이어지는 핵심 플로우를 새롭게 설계했습니다.\n디자인 리드로서 업무를 분배하는 과정에서 팀원마다 결과물 스타일이 달라지는 문제가 있었습니다. 공통 컴포넌트를 전수 제작하고 크기·간격이 레이아웃과 일치하는지 함께 검토하는 방식으로 해결해 일관된 디자인을 완성했습니다.`,
    image: brewdaImg,
    bgImage: brewdaBgImg,
    embed:
      "https://embed.figma.com/proto/0HWO0KeTPRSWFqPFsiozAp/3%ED%8C%80-%EC%95%B1%EB%94%94%EC%9E%90%EC%9D%B8-%EB%B8%8C%EB%A3%A8%EB%8B%A4%EC%BB%A4%ED%94%BC?node-id=4-2&scaling=scale-down&content-scaling=responsive&starting-point-node-id=4%3A59&page-id=0%3A1&embed-host=share&hide-ui=1",
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
    description: `React와 FastAPI 기반으로 TMDB API를 연동한 키즈 OTT 서비스입니다.\n팀 전원이 GitHub 브랜치 협업을 처음 경험하며 머지 후 기존 코드가 동작하지 않거나 충돌이 발생하는 문제가 반복됐습니다. 이를 해결하기 위해 한 명이 푸시하면 전원이 즉시 pull하는 규칙과, 각자 담당 파일을 사전에 공유해 작업 영역을 분리하는 방식을 팀 내 협업 규칙으로 정하고 작업을 마무리했습니다.`,
    image: rookiz,
    docsLabel: "기획서",
    docsHref: "https://www.figma.com/deck/lWmxeRkSTy8fAjOO77747g",
    docs2Label: "구현화면",
    docs2Href: "https://rookiz-front-qd0k.onrender.com/",
    linkLabel: "깃허브",
    linkHref: "https://github.com/worky8677-beep/Rookiz-final",
  },
  {
    number: 3,
    title: "항공사 홈페이지 구현",
    tags: ["HTML", "CSS", "JAVASCRIPT"],
    duration: "3주",
    contribution: "100%",
    description: `국내 저가 항공사 레이아웃을 리서치하고 에어로케이 홈페이지를 HTML, CSS, JavaScript로 직접 구현한 개인 프로젝트입니다. 여러 항공사 UI를 분석해 더 보기 편한 레이아웃으로 재구성했습니다. 스와이퍼 라이브러리를 처음 사용하면서 기존 코드와 충돌이 발생했습니다. 두 코드를 직접 비교 분석해 충돌 지점을 파악하고 수정하며 문제를 해결했습니다.`,
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
    description: `투썸플레이스의 케이크를 발렌타인데이 시즌에 맞춰 광고영상을 만들어보았습니다. 매 시즌 라이징 여배우들을 이용해서 케이크를 홍보하는 투썸의 기존 광고 스타일에 맞춰 여배우 이미지 프롬프트를 만들었고, 얼굴의 변형을 막기 위해 디테일한 프롬프트를 작성하려고 노력했습니다.`,
    image: cafe,
    docsHref: null,
    linkLabel: "영상 보러가기",
    linkHref:
      "https://drive.google.com/file/d/1_KE-zDC8xWWfJxTpw5uQmBA4VkvLntMX/view?usp=drive_link",
  },
];

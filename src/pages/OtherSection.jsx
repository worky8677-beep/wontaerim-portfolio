import { useState } from "react";
import ministarImg from "../img/icon-ministar.png";
import { HeadTitle } from "../components/common/HeadTitle";
import { OtherCard } from "../components/common/OtherCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import blueImg from "../img/music/blue.jpg";
import cloverImg from "../img/music/clover.jpg";
import earthImg from "../img/music/earth.jpg";
import eterImg from "../img/music/eter.jpg";
import gasaImg from "../img/music/gasa.jpg";
import gongalImg from "../img/music/gongal.jpg";
import letterImg from "../img/music/letter.jpg";
import mHaruImg from "../img/music/m-haru.jpg";
import mUsImg from "../img/music/m-us.jpg";
import puddleImg from "../img/music/puddle.jpg";
import worldImg from "../img/music/world.jpg";

const others = [
  {
    id: 1,
    category: "Music",
    title: "클로버",
    desc: "",
    aspect: "square",
    image: cloverImg,
    href: "#",
  },
  {
    id: 2,
    category: "Music",
    title: "사월의 편지(feat.원태림)",
    desc: "",
    aspect: "square",
    image: letterImg,
    href: "#",
  },
  {
    id: 3,
    category: "Music",
    title: "영원",
    desc: "",
    aspect: "square",
    image: eterImg,
    href: "#",
  },
  {
    id: 4,
    category: "Music",
    title: "공갈",
    desc: "",
    aspect: "square",
    image: gongalImg,
    href: "#",
  },
  {
    id: 5,
    category: "Music",
    title: "세상의 모든 말과 노래",
    desc: "",
    aspect: "square",
    image: worldImg,
    href: "#",
  },
  {
    id: 6,
    category: "Music",
    title: "하루의 결",
    desc: "",
    aspect: "square",
    image: mHaruImg,
    href: "#",
  },
  {
    id: 7,
    category: "Music",
    title: "아무가사 챌린지",
    desc: "",
    aspect: "square",
    image: gasaImg,
    href: "#",
  },
  {
    id: 8,
    category: "Music",
    title: "지구의 너, 우주의 나",
    desc: "",
    aspect: "square",
    image: earthImg,
    href: "#",
  },
  {
    id: 9,
    category: "Music",
    title: "우리가 결이 될때",
    desc: "",
    aspect: "square",
    image: mUsImg,
    href: "#",
  },
  {
    id: 10,
    category: "Music",
    title: "웅덩이",
    desc: "",
    aspect: "square",
    image: puddleImg,
    href: "#",
  },
  {
    id: 11,
    category: "Music",
    title: "나의 우울",
    desc: "",
    aspect: "square",
    image: blueImg,
    href: "#",
  },
  {
    id: 12,
    category: "YouTube",
    title: "영상 제목 1",
    aspect: "video",
    image: null,
    href: "#",
  },
  {
    id: 13,
    category: "YouTube",
    title: "영상 제목 2",
    aspect: "video",
    image: null,
    href: "#",
  },
  {
    id: 14,
    category: "YouTube",
    title: "영상 제목 3",
    aspect: "video",
    image: null,
    href: "#",
  },
  {
    id: 15,
    category: "YouTube",
    title: "영상 제목 4",
    aspect: "video",
    image: null,
    href: "#",
  },
  {
    id: 16,
    category: "OGQ",
    title: "스티커 1",
    aspect: "square",
    image: null,
    href: "#",
  },
  {
    id: 17,
    category: "OGQ",
    title: "스티커 2",
    aspect: "square",
    image: null,
    href: "#",
  },
  {
    id: 18,
    category: "OGQ",
    title: "스티커 3",
    aspect: "square",
    image: null,
    href: "#",
  },
  {
    id: 19,
    category: "OGQ",
    title: "스티커 4",
    aspect: "square",
    image: null,
    href: "#",
  },
];

const tabs = ["All", "Music", "YouTube", "OGQ"];
const PAGE_SIZE = 8;

// 배열을 PAGE_SIZE 크기로 잘라서 페이지 배열 만들기
function chunkArray(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

export default function OtherSection() {
  const [active, setActive] = useState("All");
  const [page, setPage] = useState(0);

  const isPaged = active === "All" || active === "Music";

  const sourceItems =
    active === "All" ? others : others.filter((o) => o.category === active);

  // 페이지 배열: [[page0 items], [page1 items], ...]
  const pages = isPaged ? chunkArray(sourceItems, PAGE_SIZE) : [sourceItems];
  const totalPages = pages.length;

  const hasPrev = isPaged && page > 0;
  const hasNext = isPaged && page < totalPages - 1;

  function handleTab(tab) {
    setActive(tab);
    setPage(0);
  }

  return (
    <section id="other" className="w-full bg-white py-24">
      <div className="w-[1280px] mx-auto px-10 flex flex-col gap-[48px]">
        <HeadTitle title="Other Works" />

        {/* 탭 필터 */}
        <div className="flex gap-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-a2z transition-colors duration-200 ${
                active === tab
                  ? "bg-forest text-white"
                  : "bg-alabaster text-dove hover:bg-gallery"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 슬라이더 영역 */}
        <div className="relative flex items-start">
          {/* 왼쪽 화살표 */}
          {hasPrev && (
            <button
              onClick={() => setPage((p) => p - 1)}
              className="absolute -left-14 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-gallery text-dove shadow-sm flex items-center justify-center hover:bg-alabaster transition-colors z-10"
            >
              <FontAwesomeIcon icon={faChevronLeft} className="text-sm" />
            </button>
          )}

          {/* 슬라이드 트랙 — overflow hidden으로 현재 페이지만 보임 */}
          <div className="w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${page * 100}%)` }}
            >
              {pages.map((pageItems, i) => (
                <div key={i} className="min-w-full grid grid-cols-4 gap-8">
                  {pageItems.map((item) => (
                    <OtherCard key={item.id} {...item} />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* 오른쪽 화살표 */}
          {hasNext && (
            <button
              onClick={() => setPage((p) => p + 1)}
              className="absolute -right-14 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-gallery text-dove shadow-sm flex items-center justify-center hover:bg-alabaster transition-colors z-10"
            >
              <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
            </button>
          )}
        </div>

        {/* 도트 인디케이터 */}
        {isPaged && totalPages > 1 && (
          <div className="flex items-center justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className="flex items-center justify-center w-4 h-4"
              >
                {i === page
                  ? <img src={ministarImg} className="w-4 h-4" />
                  : <span className="w-2 h-2 rounded-full bg-gallery block" />
                }
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

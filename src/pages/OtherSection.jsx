import { useState } from "react";
import { HeadTitle } from "../components/common/HeadTitle";
import { OtherCard } from "../components/common/OtherCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { OtherDescCard } from "../components/common/OtherDescCard";
import { OGQDescCard } from "../components/common/OGQDescCard";
import ministarImg from "../img/icon-ministar.png";
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
    aspect: "square",
    image: cloverImg,
    releaseDate: "2026.05",
    type: "솔로",
    support: "",
    trackCount: 1,
    desc: "",
    href: null,
  },
  {
    id: 2,
    category: "Music",
    title: "사월의 편지(feat.원태림)",
    aspect: "square",
    image: letterImg,
    releaseDate: "",
    type: "팀",
    support: "",
    trackCount: 1,
    desc: "",
    href: null,
  },
  {
    id: 3,
    category: "Music",
    title: "영원",
    aspect: "square",
    image: eterImg,
    releaseDate: "",
    type: "솔로",
    support: "",
    trackCount: 1,
    desc: "",
    href: null,
  },
  {
    id: 4,
    category: "Music",
    title: "공갈",
    aspect: "square",
    image: gongalImg,
    releaseDate: "",
    type: "솔로",
    support: "",
    trackCount: 1,
    desc: "",
    href: null,
  },
  {
    id: 5,
    category: "Music",
    title: "세상의 모든 말과 노래",
    aspect: "square",
    image: worldImg,
    releaseDate: "",
    type: "솔로",
    support: "충남음악창작소",
    trackCount: 1,
    desc: "",
    href: null,
  },
  {
    id: 6,
    category: "Music",
    title: "하루의 결",
    aspect: "square",
    image: mHaruImg,
    releaseDate: "",
    type: "팀",
    support: "",
    trackCount: 1,
    desc: "",
    href: null,
  },
  {
    id: 7,
    category: "Music",
    title: "아무가사 챌린지",
    aspect: "square",
    image: gasaImg,
    releaseDate: "",
    type: "솔로",
    support: "",
    trackCount: 1,
    desc: "",
    href: null,
  },
  {
    id: 8,
    category: "Music",
    title: "지구의 너, 우주의 나",
    aspect: "square",
    image: earthImg,
    releaseDate: "",
    type: "솔로",
    support: "",
    trackCount: 1,
    desc: "",
    href: null,
  },
  {
    id: 9,
    category: "Music",
    title: "우리가 결이 될때",
    aspect: "square",
    image: mUsImg,
    releaseDate: "",
    type: "팀",
    support: "",
    trackCount: 1,
    desc: "",
    href: null,
  },
  {
    id: 10,
    category: "Music",
    title: "웅덩이",
    aspect: "square",
    image: puddleImg,
    releaseDate: "",
    type: "솔로",
    support: "",
    trackCount: 1,
    desc: "",
    href: null,
  },
  {
    id: 11,
    category: "Music",
    title: "나의 우울",
    aspect: "square",
    image: blueImg,
    releaseDate: "",
    type: "솔로",
    support: "",
    trackCount: 1,
    desc: "",
    href: null,
  },
  {
    id: 12,
    category: "YouTube",
    title: "영상 제목 1",
    aspect: "video",
    image: null,
    href: null,
  },
  {
    id: 13,
    category: "YouTube",
    title: "영상 제목 2",
    aspect: "video",
    image: null,
    href: null,
  },
  {
    id: 14,
    category: "YouTube",
    title: "영상 제목 3",
    aspect: "video",
    image: null,
    href: null,
  },
  {
    id: 15,
    category: "YouTube",
    title: "영상 제목 4",
    aspect: "video",
    image: null,
    href: null,
  },
  {
    id: 16,
    category: "OGQ",
    title: "스티커 1",
    aspect: "square",
    image: null,
    href: null,
  },
  {
    id: 17,
    category: "OGQ",
    title: "스티커 2",
    aspect: "square",
    image: null,
    href: null,
  },
  {
    id: 18,
    category: "OGQ",
    title: "스티커 3",
    aspect: "square",
    image: null,
    href: null,
  },
  {
    id: 19,
    category: "OGQ",
    title: "스티커 4",
    aspect: "square",
    image: null,
    href: null,
  },
];

const tabs = ["All", "Music", "YouTube", "OGQ"];

function chunkArray(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size)
    result.push(arr.slice(i, i + size));
  return result;
}

export default function OtherSection() {
  const [active, setActive] = useState("All");
  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState(null);

  const isPaged = active === "All" || active === "Music";
  const effectiveSize = selected ? 4 : 8;
  const sourceItems =
    active === "All" ? others : others.filter((o) => o.category === active);
  const pages = isPaged
    ? chunkArray(sourceItems, effectiveSize)
    : [sourceItems];
  const totalPages = pages.length;
  const hasPrev = isPaged && page > 0;
  const hasNext = isPaged && page < totalPages - 1;

  function handleCardClick(item) {
    if (item.category !== "Music" && item.category !== "OGQ") return;
    setSelected((prev) => (prev?.id === item.id ? null : item));
    setPage(0);
  }

  function handleTab(tab) {
    setActive(tab);
    setPage(0);
    setSelected(null);
  }

  return (
    <section id="other" className="w-full bg-white py-24">
      <div className="w-[1280px] mx-auto px-10 flex flex-col gap-[48px]">
        <HeadTitle title="Other Works" />

        {/* 탭 */}
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

        {/* 슬라이더 + 상세 패널 */}
        <div className="flex gap-8 items-stretch h-[560px]">
          {/* 슬라이더 영역 */}
          <div
            className={`relative flex-shrink-0 transition-all duration-500 ${selected ? "w-[584px]" : "w-full"}`}
          >
            {hasPrev && (
              <button
                onClick={() => setPage((p) => p - 1)}
                className="absolute -left-7 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-gallery text-dove shadow-sm flex items-center justify-center hover:bg-alabaster transition-colors z-10"
              >
                <FontAwesomeIcon icon={faChevronLeft} className="text-sm" />
              </button>
            )}

            <div className="overflow-hidden p-2 -m-2">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${page * 100}%)` }}
              >
                {pages.map((pageItems, i) => (
                  <div
                    key={`${i}-${active}-${!!selected}`}
                    className={`min-w-full grid gap-6 content-start animate-slide-from-right ${selected ? "grid-cols-2" : "grid-cols-4"}`}
                  >
                    {pageItems.map((item) => (
                      <OtherCard
                        key={item.id}
                        {...item}
                        isSelected={selected?.id === item.id}
                        onClick={() => handleCardClick(item)}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {hasNext && (
              <button
                onClick={() => setPage((p) => p + 1)}
                className="absolute -right-7 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-gallery text-dove shadow-sm flex items-center justify-center hover:bg-alabaster transition-colors z-10"
              >
                <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
              </button>
            )}
          </div>

          {/* 상세 패널 */}
          <div
            className={`flex-shrink-0 overflow-hidden transition-all duration-500 ${selected ? "w-[584px]" : "w-0"}`}
          >
            <div
              className={`w-[584px] h-full transition-transform duration-500 ease-in-out ${selected ? "translate-x-0" : "translate-x-full"}`}
            >
              {selected?.category === "OGQ" ? (
                <OGQDescCard
                  item={selected}
                  onClose={() => setSelected(null)}
                />
              ) : (
                <OtherDescCard
                  item={selected}
                  onClose={() => setSelected(null)}
                  className="h-full"
                />
              )}
            </div>
          </div>
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
                {i === page ? (
                  <img src={ministarImg} className="w-4 h-4" alt="" />
                ) : (
                  <span className="w-2 h-2 rounded-full bg-gallery block" />
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

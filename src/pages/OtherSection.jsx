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
import { musicItems } from "../data/MusicItems.jsx";
import { youtubeItems } from "../data/YoutubeItems.jsx";
import { ogqItems } from "../data/OgqItems.jsx";

const others = [...musicItems, ...youtubeItems, ...ogqItems];

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
  }

  function handleTab(tab) {
    setActive(tab);
    setPage(0);
    setSelected(null);
  }

  return (
    <section id="other" className="w-full bg-white py-24">
      <div className="w-[1280px] mx-auto px-10 flex flex-col gap-[48px]">
        <HeadTitle title="Creative Works" />

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
        <div className="flex gap-8 items-stretch h-[578px]">
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
                    className={`min-w-full grid gap-6 content-start animate-slide-from-right ${selected ? "grid-cols-2" : active === "YouTube" ? "grid-cols-3" : "grid-cols-4"}`}
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
              className={`w-[584px] h-full transition-transform duration-500 ease-in-out p-2  ${selected ? "translate-x-0" : "translate-x-full"}`}
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

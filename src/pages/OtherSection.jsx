import { useState } from "react";
import { HeadTitle } from "../components/common/HeadTitle";
import { OtherCard } from "../components/common/OtherCard";
import { SliderArrowButton } from "../components/common/SliderArrowButton";
import { OtherDescCard } from "../components/common/OtherDescCard";
import { OGQDescCard } from "../components/common/OGQDescCard";
import ministarImg from "../img/icon-ministar.png";
import { musicItems } from "../data/MusicItems.jsx";
import { youtubeItems } from "../data/YoutubeItems.jsx";
import { ogqItems } from "../data/OgqItems.jsx";

const others = [...musicItems, ...youtubeItems, ...ogqItems];

const allById = Object.fromEntries(others.map((o) => [o.id, o]));
const orderedAll = [1, 5, 20, 17, 14, 3, 12, 21, 18, 4, 13, 19, 6, 16, 9, 7, 10, 2, 11, 8]
  .map((id) => allById[id])
  .filter(Boolean);

const tabs = ["All", "Music", "Video", "Artwork"];

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

  const isPaged = active === "All" || active === "Music" || !!selected;
  const effectiveSize = selected ? 4 : 8;
  const sourceItems =
    active === "All" ? orderedAll : others.filter((o) => o.category === active);
  const pages = isPaged
    ? chunkArray(sourceItems, effectiveSize)
    : [sourceItems];
  const totalPages = pages.length;
  const hasPrev = isPaged && page > 0;
  const hasNext = isPaged && page < totalPages - 1;

  function handleCardClick(item) {
    if (item.category !== "Music" && item.category !== "Artwork") return;
    setSelected((prev) => {
      if (prev?.id === item.id) return null;
      setPage(0);
      return item;
    });
  }

  function handleTab(tab) {
    setActive(tab);
    setPage(0);
    setSelected(null);
  }

  return (
    <section id="other" className="w-full bg-white py-16 desktop:py-24">
      <div className="w-full max-w-[1280px] mx-auto px-6 desktop:px-10 flex flex-col gap-8 desktop:gap-[48px]">
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
        <div className="flex gap-6 desktop:gap-8 items-stretch h-[380px] desktop:h-[578px]">
          {/* 슬라이더 영역 */}
          <div
            className={`relative flex-shrink-0 transition-all duration-500 ${selected ? "w-[calc(50%-12px)] md:w-[calc(50%-16px)] lg:w-[584px]" : "w-full"}`}
          >
            {hasPrev && (
              <SliderArrowButton direction="left" onClick={() => setPage((p) => p - 1)} />
            )}

            <div className="overflow-hidden p-2 -m-2">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${page * 100}%)` }}
              >
                {pages.map((pageItems, i) => (
                  <div
                    key={`${i}-${active}-${!!selected}`}
                    className={`min-w-full grid gap-4 desktop:gap-6 content-start animate-slide-from-right ${selected ? "grid-cols-2" : active === "Video" ? "grid-cols-3" : "grid-cols-4"}`}
                  >
                    {pageItems.map((item) => (
                      <OtherCard
                        key={item.id}
                        {...item}
                        isSelected={selected?.id === item.id}
                        onClick={() => handleCardClick(item)}
                        forceSquare={active === "All"}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {hasNext && (
              <SliderArrowButton direction="right" onClick={() => setPage((p) => p + 1)} />
            )}
          </div>

          {/* 상세 패널 */}
          <div
            className={`flex-shrink-0 overflow-hidden transition-all duration-500 ${selected ? "w-[calc(50%-12px)] md:w-[calc(50%-16px)] lg:w-[584px]" : "w-0"}`}
          >
            <div
              className={`w-full lg:w-[584px] h-full transition-transform duration-500 ease-in-out p-2 ${selected ? "translate-x-0" : "translate-x-full"}`}
            >
              {selected?.category === "Artwork" ? (
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

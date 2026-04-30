import { useState } from "react";
import { OtherCard } from "../components/common/OtherCard";
import { SliderArrowButton } from "../components/common/SliderArrowButton";
import { OtherDescCard } from "../components/common/OtherDescCard";
import { OGQDescCard } from "../components/common/OGQDescCard";
import ministarImg from "../img/icon-ministar.png";
import { musicItems } from "../data/MusicItems.jsx";
import { youtubeItems } from "../data/YoutubeItems.jsx";
import { ogqItems } from "../data/OgqItems.jsx";

const others = [...musicItems, ...youtubeItems, ...ogqItems];

const tabs = ["Visuals", "Music", "Artwork"];

function getCategory(tab) {
  if (tab === "Visuals") return "Video";
  return tab;
}

function chunkArray(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size)
    result.push(arr.slice(i, i + size));
  return result;
}

export default function OtherSection() {
  const [active, setActive] = useState("Visuals");
  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState(null);

  const isPaged = active === "Music" || !!selected;
  const effectiveSize = selected ? 4 : 8;
  const sourceItems = others.filter((o) => o.category === getCategory(active));
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
        {/* 타이틀 */}
        <div className="relative flex justify-center items-center h-[100px] desktop:h-[136px] overflow-hidden">
          <div className="rotate-[-3.57deg]">
            <div className="bg-lime flex items-center justify-center py-[10px] w-[280px] desktop:w-[573px]">
              <p className="font-paperlogy font-bold text-[36px] desktop:text-[64px] text-dove tracking-[-1.6px] whitespace-nowrap leading-[50px] desktop:leading-[80px]">
                Creative Works!
              </p>
            </div>
          </div>
        </div>

        {/* 탭 */}
        <div className="flex w-full gap-3 desktop:gap-[20px]">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTab(tab)}
              className={`flex-1 py-2 desktop:py-[11px] rounded-full font-paperlogy font-Regular text-xs desktop:text-2xl border transition-colors duration-200 ${
                active === tab
                  ? "bg-mine text-white border-mine"
                  : "border-silver text-dove bg-transparent hover:border-gallery"
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
                    className={`min-w-full grid gap-4 desktop:gap-6 content-start animate-slide-from-right ${selected ? "grid-cols-2" : active === "Visuals" ? "grid-cols-3" : "grid-cols-4"}`}
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

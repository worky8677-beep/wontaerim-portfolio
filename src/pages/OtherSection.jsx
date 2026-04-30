import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { OtherCard } from "../components/common/OtherCard";
import { OtherDescCard } from "../components/common/OtherDescCard";
import { OGQDescCard } from "../components/common/OGQDescCard";
import { VisualsDescCard } from "../components/common/VisualsDescCard";
import { CustomArrowButton } from "../components/common/CustomArrowButton";
import { musicItems } from "../data/MusicItems.jsx";
import { youtubeItems } from "../data/YoutubeItems.jsx";
import { ogqItems } from "../data/OgqItems.jsx";

const others = [...musicItems, ...youtubeItems, ...ogqItems];
const tabs = ["Visuals", "Music", "Artwork"];

const scatterPos = [
  { top: "0%",  left: "2%",  rotate: -5 },
  { top: "33%", left: "40%", rotate:  6 },
  { top: "64%", left: "7%",  rotate: -3 },
];

function getCategory(tab) {
  if (tab === "Visuals") return "Video";
  return tab;
}

const layoutTransition = { duration: 0.5, ease: "easeInOut" };

export default function OtherSection() {
  const [active, setActive] = useState("Visuals");
  const [selected, setSelected] = useState(null);
  const [showUp, setShowUp] = useState(false);
  const [showDown, setShowDown] = useState(false);
  const scrollRef = useRef(null);

  const sourceItems = others.filter((o) => o.category === getCategory(active));

  // 스크롤 한계 체크 (수직 방향)
  const checkScrollLimits = () => {
    const el = scrollRef.current;
    if (el) {
      const { scrollTop, scrollHeight, clientHeight } = el;
      const isScrollable = scrollHeight > clientHeight + 20;
      setShowUp(isScrollable && scrollTop > 10);
      setShowDown(isScrollable && scrollTop + clientHeight < scrollHeight - 10);
    }
  };

  // 수직 스크롤 이동 함수 (버튼은 좌우 디자인이지만 리스트는 상하 이동)
  const scrollByAmount = (amount) => {
    const el = scrollRef.current;
    if (el) {
      el.scrollBy({
        top: amount,
        behavior: "smooth"
      });
      [100, 300, 600].forEach(t => setTimeout(checkScrollLimits, t));
    }
  };

  useEffect(() => {
    const timers = [100, 300, 600, 1000].map(t => setTimeout(checkScrollLimits, t));
    return () => timers.forEach(t => clearTimeout(t));
  }, [active, selected, sourceItems]);

  function handleCardClick(item) {
    if (item.category !== "Music" && item.category !== "Artwork" && item.category !== "Video") return;
    setSelected((prev) => (prev?.id === item.id ? null : item));
  }

  function handleTab(tab) {
    setActive(tab);
    setSelected(null);
  }

  return (
    <section id="other" className="w-full bg-white py-16 desktop:py-24">
      <div className="w-full max-w-[1280px] mx-auto px-6 desktop:px-10 flex flex-col gap-8 desktop:gap-[48px]">

        <div className="relative flex justify-center items-center h-[100px] desktop:h-[136px] overflow-hidden">
          <div className="rotate-[-3.57deg]">
            <div className="bg-lime flex items-center justify-center py-[10px] w-[280px] desktop:w-[573px]">
              <p className="font-paperlogy font-bold text-[36px] desktop:text-[64px] text-mine tracking-[-1.6px] whitespace-nowrap leading-[50px] desktop:leading-[80px]">
                Creative Works!
              </p>
            </div>
          </div>
        </div>

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

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {active === "Visuals" ? (
              <LayoutGroup id="visuals">
                <div className="relative flex gap-6 desktop:gap-8 h-[380px] desktop:h-[578px]">
                  <motion.div layout style={{ flex: 1, minWidth: 0, position: "relative" }}>
                    {selected ? (
                      sourceItems.map((item, i) => {
                        const pos = scatterPos[i] || scatterPos[0];
                        const isActive = selected?.id === item.id;
                        return (
                          <motion.div
                            key={item.id}
                            layoutId={`vc-${item.id}`}
                            onClick={() => handleCardClick(item)}
                            style={{
                              position: "absolute",
                              top: pos.top,
                              left: pos.left,
                              width: "48%",
                              aspectRatio: "16/9",
                              cursor: "pointer",
                              borderRadius: "12px",
                              overflow: "hidden",
                            }}
                            animate={{
                              rotate: pos.rotate,
                              opacity: isActive ? 1 : 0.65,
                              boxShadow: isActive ? "0 0 0 4px #d7f0ac" : "0 0 0 0px transparent",
                            }}
                            whileHover={{ opacity: isActive ? 1 : 0.9 }}
                            transition={{
                              layout: layoutTransition,
                              rotate: layoutTransition,
                              opacity: { duration: 0.3 },
                              boxShadow: { duration: 0.3 },
                            }}
                          >
                            <img src={item.image} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                            <div className="absolute inset-0 bg-charcoal/0 group hover:bg-charcoal/60 transition-colors duration-300 flex flex-col items-center justify-center p-4">
                              <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex flex-col gap-2 items-center text-center">
                                <p className="font-paperlogy text-white font-bold text-xs desktop:text-base leading-snug">{item.title}</p>
                                <div className="mt-1 px-3 py-1 rounded-full bg-lime text-mine font-paperlogy font-bold text-[10px] desktop:text-xs tracking-tight">VIEW DETAIL</div>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })
                    ) : (
                      <div className="grid grid-cols-3 gap-4 desktop:gap-6">
                        {sourceItems.map((item) => (
                          <motion.div
                            key={item.id}
                            layoutId={`vc-${item.id}`}
                            onClick={() => handleCardClick(item)}
                            whileHover={{ scale: 1.03 }}
                            transition={{ layout: layoutTransition }}
                            style={{ cursor: "pointer", borderRadius: "12px", overflow: "hidden", aspectRatio: "16/9", position: "relative" }}
                          >
                            <img src={item.image} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                            <div className="absolute inset-0 bg-charcoal/0 group hover:bg-charcoal/60 transition-colors duration-300 flex flex-col items-center justify-center p-4">
                              <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex flex-col gap-2 items-center text-center">
                                <p className="font-paperlogy text-white font-bold text-xs desktop:text-base leading-snug">{item.title}</p>
                                <div className="mt-1 px-3 py-1 rounded-full bg-lime text-mine font-paperlogy font-bold text-[10px] desktop:text-xs tracking-tight">VIEW DETAIL</div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </motion.div>

                  <AnimatePresence>
                    {selected && (
                      <motion.div
                        key="visuals-detail"
                        initial={{ x: "100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: "100%", opacity: 0 }}
                        transition={{ duration: 0.45, ease: "easeInOut" }}
                        className="flex-shrink-0 h-full"
                        style={{ width: "calc(50% - 12px)" }}
                      >
                        <VisualsDescCard item={selected} onClose={() => setSelected(null)} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </LayoutGroup>
            ) : (
              <LayoutGroup id={active.toLowerCase()}>
                <div className="flex gap-6 desktop:gap-8 items-center">
                  <div className="flex-1 flex flex-col gap-8">
                    {/* 수직 그리드 (기본 그리드 유지) */}
                    <div
                      ref={scrollRef}
                      onScroll={checkScrollLimits}
                      className="w-full h-[380px] desktop:h-[578px] overflow-hidden transition-[width] duration-500 ease-in-out"
                    >
                      <div className={`grid gap-3 desktop:gap-4 content-start pb-2 ${selected ? "grid-cols-2" : "grid-cols-4"}`}>
                        {sourceItems.map((item) => (
                          <motion.div key={item.id} layout="position" transition={layoutTransition}>
                            <OtherCard
                              {...item}
                              isSelected={selected?.id === item.id}
                              onClick={() => handleCardClick(item)}
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* 하단 버튼 영역 (위치 고정) */}
                    <div className="flex justify-center items-center gap-6 h-10">
                      {/* 왼쪽 버튼 영역 */}
                      <div className="w-10 h-10 flex items-center justify-center">
                        <AnimatePresence>
                          {showUp && (
                            <motion.div 
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.8 }}
                            >
                              <CustomArrowButton direction="prev" onClick={() => scrollByAmount(-400)} />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* 오른쪽 버튼 영역 */}
                      <div className="w-10 h-10 flex items-center justify-center">
                        <AnimatePresence>
                          {showDown && (
                            <motion.div 
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.8 }}
                            >
                              <CustomArrowButton direction="next" onClick={() => scrollByAmount(400)} />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {selected && (
                      <motion.div
                        key={`${active.toLowerCase()}-detail-${selected.id}`}
                        initial={{ x: "100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: "100%", opacity: 0 }}
                        transition={{ duration: 0.45, ease: "easeInOut" }}
                        className="flex-shrink-0 h-[380px] desktop:h-[578px]"
                        style={{ width: "calc(50% - 12px)" }}
                      >
                        {active === "Music" ? (
                          <OtherDescCard item={selected} onClose={() => setSelected(null)} />
                        ) : (
                          <OGQDescCard item={selected} onClose={() => setSelected(null)} />
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </LayoutGroup>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";

export function CustomArrowButton({ direction = "next", onClick, disabled }) {
  // 화살표 SVG 경로 (주신 데이터 기반)
  const arrowPath = (
    <svg viewBox="0 0 512 512" className="w-3 h-3 fill-current">
      <path d="M319.1 217c20.2 20.2 19.9 53.2-.6 73.7s-53.5 20.8-73.7.6l-190-190c-20.1-20.2-19.8-53.2.7-73.7S109 6.8 129.1 27l190 190z"/>
      <path d="M319.1 290.5c20.2-20.2 19.9-53.2-.6-73.7s-53.5-20.8-73.7-.6l-190 190c-20.2 20.2-19.9 53.2.6 73.7s53.5 20.8 73.7.6l190-190z"/>
    </svg>
  );

  // 화살표 애니메이션 설정 (주신 bounceAlpha 재현)
  const arrowVariants = {
    initial: { x: 0, opacity: 1 },
    animate: {
      x: [0, 5, -5, 0],
      opacity: [1, 0, 0, 1],
      transition: {
        duration: 1.4,
        repeat: Infinity,
        ease: "linear",
      }
    }
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`group relative w-10 h-10 border-2 rounded-full flex items-center justify-center transition-all ${
        disabled 
          ? "border-gallery text-silver cursor-not-allowed" 
          : "border-mine text-mine cursor-pointer hover:bg-mine hover:text-lime"
      } ${direction === "prev" ? "rotate-180" : ""}`}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* 첫 번째 화살표 */}
        <motion.div
          variants={arrowVariants}
          initial="initial"
          whileHover="animate"
          className="absolute left-[25%]"
        >
          {arrowPath}
        </motion.div>
        {/* 두 번째 화살표 (약간 뒤에 배치) */}
        <motion.div
          variants={arrowVariants}
          initial="initial"
          whileHover="animate"
          transition={{ delay: 0.2 }}
          className="absolute left-[45%]"
        >
          {arrowPath}
        </motion.div>
      </div>
    </button>
  );
}

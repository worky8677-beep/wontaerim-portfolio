import { useState, useEffect, useRef } from 'react';

const WORDS = ['크리에이터', 'UI/UX 디자이너'];
const TYPE_SPEED = 120;   // 타이핑 속도 (ms, 높을수록 느림)
const DELETE_SPEED = 70;  // 지우기 속도 (ms)
const HOLD_TIME = 2500;   // 완성 후 대기 시간 (ms)

export function ScrambleText() {
  const [display, setDisplay] = useState('크리에이터');
  const state = useRef({ wordIdx: 0, charIdx: WORDS[0].length, isDeleting: false });
  const timerRef = useRef(null);

  useEffect(() => {
    function tick() {
      const { wordIdx, charIdx, isDeleting } = state.current;
      const current = WORDS[wordIdx];

      if (isDeleting) {
        state.current.charIdx = charIdx - 1;
        setDisplay(current.slice(0, charIdx - 1));

        if (charIdx - 1 === 0) {
          // 다 지워짐 → 다음 단어 타이핑 시작
          state.current.isDeleting = false;
          state.current.wordIdx = (wordIdx + 1) % WORDS.length;
          timerRef.current = setTimeout(tick, TYPE_SPEED);
        } else {
          timerRef.current = setTimeout(tick, DELETE_SPEED);
        }
      } else {
        state.current.charIdx = charIdx + 1;
        setDisplay(current.slice(0, charIdx + 1));

        if (charIdx + 1 === current.length) {
          // 다 타이핑됨 → 대기 후 삭제 시작
          state.current.isDeleting = true;
          timerRef.current = setTimeout(tick, HOLD_TIME);
        } else {
          timerRef.current = setTimeout(tick, TYPE_SPEED);
        }
      }
    }

    // 처음엔 완성된 상태로 HOLD_TIME 후 삭제 시작
    state.current.isDeleting = true;
    timerRef.current = setTimeout(tick, HOLD_TIME);

    return () => clearTimeout(timerRef.current);
  }, []);

  return <span>{display}<span className="animate-pulse font-thin opacity-30">|</span></span>;
}

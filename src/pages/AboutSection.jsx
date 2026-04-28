import { HeadTitle } from "../components/common/HeadTitle";
import subprofile from "../img/subprofile.png";
import { useGsapReveal } from "../hooks/useGsapReveal";

function InfoRow({ label, value }) {
  const chars = label.split("");
  return (
    <div className="flex items-center gap-2 font-sans text-body3 sm:text-body2 text-dove tracking-[0.5px]">
      {/* 글자마다 균등 배치 */}
      <span className="inline-flex justify-between w-[88px] shrink-0">
        {chars.map((c, i) => (
          <span key={i}>{c}</span>
        ))}
      </span>
      <span className="shrink-0">:</span>
      <span>{value}</span>
    </div>
  );
}

export default function AboutSection() {
  const leftRef = useGsapReveal("left");
  const rightRef = useGsapReveal("right");

  return (
    <section
      id="about"
      className="w-full bg-white flex items-center justify-center py-16 desktop:py-40"
    >
      <div className="w-full max-w-[1280px] mx-auto px-6 desktop:px-16 flex flex-col lg:flex-row items-start gap-10 desktop:gap-16">
        {/* 사진 — 모바일/태블릿: 전체 너비, 데스크탑: 고정 너비 */}
        <div
          ref={leftRef}
          className="relative w-[260px] h-[360px] mx-auto md:w-[340px] md:h-[460px] md:mx-auto lg:w-[400px] lg:mt-10 lg:h-full lg:mx-0 lg:shrink-0"
        >
          {/* 이미지 + 하단 그라디언트 */}
          <div className="relative w-full h-full overflow-hidden">
            <img
              src={subprofile}
              alt="원태림"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute bottom-0 left-0 w-full h-5 bg-linear-[to_bottom] from-transparent to-white pointer-events-none" />
          </div>

          {/* 떠다니는 칩 — 바깥 div: 위치+각도, 안쪽 div: 애니메이션 */}
          {/* 👇 top-* right-* 부분만 바꾸면 768 미만 위치 조절 */}
          <div className="absolute top-8 right-1 md:top-8 md:right-10 -rotate-6">
            <div className="chip-iridescent animate-float-1 backdrop-blur-md rounded-full px-2.5 py-1 text-xs xs:px-4 xs:py-2 xs:text-sm font-sans text-charcoal whitespace-nowrap">
              #Figma
            </div>
          </div>
          <div className="absolute top-50 left-1 md:top-50 md:left-3 rotate-3">
            <div className="chip-iridescent animate-float-2 backdrop-blur-md rounded-full px-2.5 py-1 text-xs xs:px-4 xs:py-2 xs:text-sm font-sans text-charcoal whitespace-nowrap">
              #UI/UX
            </div>
          </div>
          <div className="absolute top-80 right-1 md:top-100 md:right-3 -rotate-2">
            <div className="chip-iridescent animate-float-3 backdrop-blur-md rounded-full px-2.5 py-1 text-xs xs:px-4 xs:py-2 xs:text-sm font-sans text-charcoal whitespace-nowrap">
              #Premiere Pro
            </div>
          </div>
        </div>

        {/* 콘텐츠 */}
        <div
          ref={rightRef}
          className="flex flex-col gap-8 flex-1 bg-white rounded-[24px] px-6 py-6 desktop:px-10 desktop:py-10"
        >
          <div className="flex flex-col gap-9 desktop:gap-8">
            <HeadTitle title="About me" />
            {/* 이름 */}
            <div className="flex gap-3 items-baseline">
              <span className="font-a2z font-semibold text-h5 sm:text-h3 text-charcoal">
                원태림
              </span>
              <span className="font-a2z font-semibold text-body2 sm:text-h4 text-charcoal">
                Won Tae Rim
              </span>
            </div>
            {/* 상세 정보 */}
            <div className="flex flex-col gap-2 sm:gap-4 md:grid md:grid-flow-col md:grid-rows-2 md:gap-x-[90px] md:gap-y-4 lg:flex lg:flex-col lg:gap-2">
              <InfoRow label="전화번호" value="010-2256-7019" />
              <InfoRow label="이메일" value="trw9701@gmail.com" />
              <InfoRow label="거주" value="서울시 은평구" />
              <InfoRow label="생년월일" value="1997.01.17" />
            </div>
            {/* 소개 텍스트 */}
            <div className="font-sans text-label sm:text-sub text-charcoal leading-[36px] sm:leading-[42px]">
              <p>
                음악을 만들고, 영상을 찍고, 무대를 기획했습니다. 무엇을 해도
                <br className="hidden lg:inline" /> &quot;어떻게 하면 더 잘
                전달될까&quot;를 고민해온 사람입니다. 그 질문이 저를 UI/UX
                디자인으로 데려왔습니다. 배움과 만드는 일을 멈춘 적이 없습니다.{" "}
                배우고 만들고 연결하며 좋은 경험을 만드는 디자이너가 되겠습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

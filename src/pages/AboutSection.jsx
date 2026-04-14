import { useEffect, useRef } from "react";
import { HeadTitle } from "../components/common/HeadTitle";
import subprofile from "../img/subprofile.png";

function InfoRow({ label, value }) {
  const chars = label.split("");
  return (
    <div className="flex items-center gap-2 font-sans text-body2 text-dove tracking-[0.5px]">
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
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 },
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="w-full bg-white flex items-center justify-center py-40"
    >
      <div className="w-full max-w-[1280px] mx-auto px-16 flex items-start gap-16">
        {/* 왼쪽: 사진 */}
        <div
          ref={leftRef}
          className="fade-left relative shrink-0 w-[400px] h-full overflow-hidden"
        >
          <img
            src={subprofile}
            alt="원태림"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute bottom-0 left-0 w-full h-5 bg-linear-[to_bottom] from-transparent to-white pointer-events-none" />
        </div>

        {/* 오른쪽: 콘텐츠 */}
        <div
          ref={rightRef}
          className="fade-right flex flex-col gap-10 flex-1 bg-white rounded-[24px] px-10 py-10"
        >
          {/* About me 헤딩 */}
          <div className="flex flex-col gap-10">
            <HeadTitle title="About me" />
            {/* 이름 */}
            <div className="flex gap-3 items-baseline">
              <span className="font-a2z font-semibold text-h3 text-charcoal">
                원태림
              </span>
              <span className="font-a2z font-semibold text-h4 text-charcoal">
                Won Tae Rim
              </span>
            </div>
            {/* 상세 정보 */}
            <div className="flex flex-col gap-4">
              <InfoRow label="전화번호" value="010-2256-7019" />
              <InfoRow label="이메일" value="trw9701@gmail.com" />
              <InfoRow label="거주" value="서울시 은평구" />
              <InfoRow label="생년월일" value="1997.01.17" />
            </div>
            {/* 소개 텍스트 */}
            <div className="font-sans text-sub text-charcoal leading-[42px]">
              <p>
                음악을 만들고, 영상을 찍고, 무대를 기획했습니다. 무엇을 해도 <br /> "어떻게 하면
                더 잘 전달될까"를 고민해온 사람입니다. 그 질문이 저를 UI/UX
                디자인으로 데려왔습니다. 배움과 만드는 일을 멈춘 적이 없습니다.{" "}
                좋은 경험을 만드는 디자이너로 계속 나아가겠습니다.
              </p>
            </div>{" "}
          </div>
        </div>
      </div>
    </section>
  );
}

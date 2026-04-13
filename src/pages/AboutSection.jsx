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
  return (
    <section
      id="about"
      className="w-full bg-white flex items-center justify-center py-40"
    >
      <div className="w-full max-w-[1280px] mx-auto px-16 flex items-start gap-16">
        {/* 왼쪽: 사진 */}
        <div className="shrink-0 w-[400px] h-[560px] bg-white border-b border-silver overflow-hidden">
          <img
            src={subprofile}
            alt="원태림"
            className=" w-full h-full object-cover object-top origin-top"
          />
        </div>

        {/* 오른쪽: 콘텐츠 */}
        <div className="flex flex-col gap-10 flex-1 bg-white rounded-[24px] px-10 py-10">
          {/* About me 헤딩 */}
          <div className="flex flex-col gap-5">
            <HeadTitle title="About me" />

            {/* 이름 */}
            <div className="flex items-center gap-3 h-[63px]">
              <span className="font-gmarket font-semibold text-h3 text-charcoal">
                원태림
              </span>
              <span className="font-gmarket font-bold text-h4 text-mine">
                Won Tae Rim
              </span>
            </div>

            {/* 상세 정보 */}
            <div className="flex flex-col gap-4">
              <InfoRow label="전화번호" value="010-2256-7019" />
              <InfoRow label="이메일" value="rolling.of.won@gmail.com" />
              <InfoRow label="거주" value="서울시 은평구" />
              <InfoRow label="생년월일" value="1997.01.17" />
            </div>
          </div>

          {/* 소개 텍스트 */}
          <div className="font-sans text-sub text-charcoal leading-[42px]">
            <p>
              음악을 전공하며 쌓은 콘텐츠 기획력과 사용자 감각을 바탕으로 UX/ UI
              디자인에 뛰어들었습니다. <strong>HTML, CSS, JavaScript</strong>를
              직접 학습하며{" "}
              <strong>개발자와 소통할 수 있는 디자이너를 목표</strong>로
              앞으로도 배움을 멈추지 않고 함께{" "}
              <strong>성장하는 디자이너</strong>가 되겠습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

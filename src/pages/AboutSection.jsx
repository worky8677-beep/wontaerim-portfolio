import { HeadTitle } from "../components/common/HeadTitle";

const aboutPhoto = "https://www.figma.com/api/mcp/asset/34a6f8cf-aba6-4250-9f71-b932a9e36a50";

export default function AboutSection() {
  return (
    <section id="about" className="w-full min-h-[1080px] bg-white flex items-center justify-center py-[270px]">
      <div className="w-[1280px] bg-white border border-gallery rounded-[24px] shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1),0px_4px_6px_-1px_rgba(0,0,0,0.1)] flex gap-10 items-start px-10 py-10">
        {/* 왼쪽: 사진 */}
        <div className="shrink-0 w-[390px] h-[485px] rounded-[39px] overflow-hidden">
          <img src={aboutPhoto} alt="원태림" className="w-full h-[138%] object-cover object-top" />
        </div>

        {/* 오른쪽: 정보 */}
        <div className="flex flex-col gap-10 w-[738px]">
          <div className="flex flex-col gap-5">
            <HeadTitle title="About me" />

            {/* 이름 */}
            <div className="flex items-center h-[63px]">
              <span className="font-gmarket font-semibold text-h3 text-mine">원태림</span>
              <span className="font-gmarket font-bold text-h4 text-shark ml-2">Won Tae Rim</span>
            </div>

            {/* 상세 정보 */}
            <div className="grid grid-cols-2 gap-x-[10px] gap-y-[10px] font-gmarket text-body2 text-dove tracking-[0.5px]">
              <div className="flex gap-2">
                <span className="whitespace-nowrap">주소 :</span>
                <span>서울시 은평구</span>
              </div>
              <div className="flex gap-2">
                <span className="whitespace-nowrap">번호 :</span>
                <span>010-2256-7019</span>
              </div>
              <div className="flex gap-2">
                <span className="whitespace-nowrap">생년월일 :</span>
                <span>1997.01.17</span>
              </div>
              <div className="flex gap-2">
                <span className="whitespace-nowrap">이메일 :</span>
                <span>rolling.of.won@gmail.com</span>
              </div>
            </div>
          </div>

          {/* 소개 텍스트 */}
          <div className="font-gmarket text-sub text-charcoal leading-[42px]">
            <p>
              음악을 전공하며 쌓은 콘텐츠 기획력과 사용자 감각을 바탕으로 UX/ UI 디자인에 뛰어들었습니다.{" "}
              <strong>HTML, CSS, JavaScript</strong>를 직접 학습하며{" "}
              <strong>개발자와 소통할 수 있는 디자이너를 목표</strong>로 앞으로도 배움을 멈추지 않고 함께{" "}
              <strong>성장하는 디자이너</strong>가 되겠습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

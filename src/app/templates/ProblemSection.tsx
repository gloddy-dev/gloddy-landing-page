import Image from "next/image";

export default function ProblemSection() {
  return (
    <section className="flex justify-center items-center bg-white h-[80vh] lg:h-[740px] w-full px-2 lg:px-0">
      <div className="flex flex-row flex-wrap h-full lg:h-fit items-start lg:items-center max-w-7xl w-full justify-between mx-auto">
        <div className="flex flex-col gap-4 textl-[#101011] text-4xl lg:text-5xl mb-auto mt-auto lg:mt-0 items-start ">
          <span className="text-[#99999F] text-xl">
            Gloddy는 이럴때 유용해요
          </span>
          <span className="font-bold">이런 고민하신 적</span>
          <span className="font-light">있으신가요?</span>
        </div>
        <div className="flex flex-col justify-center gap-4 lg:gap-8 h-fit lg:h-full my-auto lg:my-0 w-full max-w-3xl ml-auto">
          <div className="flex justify-between gap-6 mr-auto">
            <div className="relative m-auto w-[64px] h-[64px] lg:w-[96px] lg:h-[96px]">
              <Image src={"/face3.png"} alt="face-image-1" fill sizes="96px" />
            </div>
            <div className="flex flex-col text-xl lg:text-3xl gap-2 px-4 lg:px-8 py-3 lg:py-5 text-[#4A4A4D] speech-bubble bg-[#F2F3F6]">
              <span>외국인 인력이 필요한데</span>
              <span className="font-bold">검증된 분을 모시기가 어려워요!</span>
            </div>
          </div>

          <div className="flex justify-between gap-6 ml-auto">
            <div className="relative m-auto w-[64px] h-[64px] lg:w-[96px] lg:h-[96px]">
              <Image src={"/face1.png"} alt="face-image-1" fill sizes="96px" />
            </div>
            <div className="flex flex-col text-xl lg:text-3xl gap-2 px-4 lg:px-8 py-3 lg:py-5 text-[#4A4A4D] speech-bubble bg-[#F2F3F6]">
              <span>기업 핏에 꼭 맞게</span>
              <span className="font-bold">
                선별한 후보자만 소개받고 싶어요!
              </span>
            </div>
          </div>

          <div className="flex justify-between gap-6 mr-auto">
            <div className="relative m-auto w-[64px] h-[64px] lg:w-[96px] lg:h-[96px]">
              <Image src={"/face2.png"} alt="face-image-1" fill sizes="96px" />
            </div>
            <div className="flex flex-col text-xl lg:text-3xl gap-2 px-4 lg:px-8 py-3 lg:py-5 text-[#4A4A4D] speech-bubble bg-[#F2F3F6]">
              <span>모집부터 선발까지</span>
              <span className="font-bold">전 과정을 도와주면 좋겠어요.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

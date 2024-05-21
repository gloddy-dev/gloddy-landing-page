import Image from "next/image";
import HeroImage from "/background.png";
import Button from "../components/Button";
import Tags from "../components/Tags";

export default function HeroSection() {
  return (
    <section className='min-h-screen w-full relative'>
      <div className='w-full flex flex-col justify-center gap-7 items-center absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2'>
        <span className='text-5xl lg:text-7xl text-white mx-auto text-center font-bold'>
          Gloddy Recruiter
        </span>
        <div className='flex flex-col justify-center bg-[#D7DBE7] items-center w-[90%] lg:w-full max-w-[800px] rounded-[200px] h-[100px] lg:h-[160px] m-4'>
          <div
            className='w-full h-full rounded-[200px]'
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(9,9,121,0) 35%, rgba(6,71,162,0) 65%, rgba(255,255,255,1) 100%)",
            }}
          >
            <Tags />
          </div>
        </div>

        <div className='text-xl lg:text-2xl whitespace-pre-wrap text-white/[88%] text-center'>
          <span className='font-bold'>
            {"국내에서 외국인 인재를 찾고 싶을 때!\n"}
          </span>
          <span>기업 핏에 딱 맞는 외국인 맞춤 채용 솔루션</span>
        </div>
        <Button message='1:1 상담 신청하기' />
      </div>
      <Image
        src={"/background.png"}
        alt='hero-background-image'
        fill
        className='object-cover'
      />
    </section>
  );
}

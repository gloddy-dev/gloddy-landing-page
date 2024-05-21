import Image from 'next/image';

export default function MiddleBanner() {
  return (
    <div className="relative w-full h-96 lg:h-80 ">
      <Image src={'/background-2.png'} alt={'MiddleBanner'} fill />
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-0 lg:justify-between h-full w-full max-w-7xl mx-auto">
        <div className="flex flex-col text-2xl text-center lg:text-start lg:text-4xl gap-4 z-10">
          <span>1:1 맞춤 글로벌 인력 매칭 서비스</span>
          <span className="font-bold">Gloddy Recruiter로 해결하세요!</span>
        </div>
        <div className="flex relative w-full justify-center border-2 shadow-xl border-[#D6DBE7] items-center gap-3 max-w-md rounded-full h-24 bg-[#FFFFFF]">
          <Image src={'/lens.png'} alt="banner-icon" width={40} height={40} />
          <span className="text-4xl font-bold text-[#4A4A4D]">
            Gloddy Recruiter
          </span>
        </div>
      </div>
    </div>
  );
}

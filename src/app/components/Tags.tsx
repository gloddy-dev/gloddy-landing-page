import Image from "next/image";

export default function Tags() {
  return (
    <div className='flex justify-center items-center gap-3 font-bold p-2'>
      <div className='relative w-20 h-20'>
        <Image src='/lens.png' fill sizes='80px' alt='lens-image' />
      </div>
      <span className='text-4xl lg:text-6xl'>해외 시장 조사</span>
    </div>
  );
}

import gsap from 'gsap';
import { twMerge } from 'tailwind-merge';
import { ReactNode, useEffect, useRef } from 'react';

export interface ProcessContentProps {
  index: number;
  title: string;
  desc: ReactNode;
  focus: boolean;
  onClick: () => void;
}

const colorSet = [
  'bg-[#1249FC]',
  'bg-[#F92929]',
  'bg-[#882CFF]',
  'bg-[#FFB904]',
];

export default function ProcessContent({
  title,
  desc,
  index,
  focus,
  onClick,
}: ProcessContentProps) {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (focus) {
      gsap.to(container.current, {
        duration: 0.3,
        height: 'auto',
        opacity: 1,
      });
    } else {
      gsap.to(container.current, {
        duration: 0.3,
        height: 0,
        opacity: 0,
      });
    }
  }, [focus]);

  return (
    <div
      className={'flex gap-5 w-[95%] lg:w-full cursor-pointer'}
      onClick={onClick}
    >
      <div
        className={twMerge(
          'flex justify-center items-center text-white w-6 h-6 lg:w-8 lg:h-8  lg:text-xl rounded-full',
          focus ? colorSet[index] : 'bg-[#99999F]',
        )}
      >
        {index + 1}
      </div>
      <div className={'flex flex-col gap-4'}>
        <div
          className={twMerge(
            'text-2xl lg:text-3xl font-bold',
            focus ? '' : 'text-[#99999F]',
          )}
        >
          {title}
        </div>
        <div
          ref={container}
          className={'desc whitespace-pre-wrap h-0 opacity-0 text-[#4C4A4D]'}
        >
          {desc}
        </div>
      </div>
    </div>
  );
}

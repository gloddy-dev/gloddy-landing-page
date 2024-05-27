'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { twMerge } from 'tailwind-merge';

interface ToggleCardProps {
  title: string;
  desc: ReactNode;
}

export function ToggleCard({ title, desc }: ToggleCardProps) {
  const [open, setOpen] = useState<boolean>(false);
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (open) {
      gsap.to(container.current, {
        duration: 0.1,
        opacity: 1,
        height: 'auto',
        padding: 12,
      });
    } else {
      gsap.to(container.current, {
        duration: 0.1,
        opacity: 0,
        height: 0,
        padding: 0,
      });
    }
  }, [open]);

  return (
    <div className={'mx-auto w-[95%] lg:w-full'}>
      <div
        className={twMerge(
          'w-full cursor-pointer border border-[#E1E1E8] p-6 rounded-lg text-[#4D4D4A]',
          open ? 'border-b-0 rounded-b-none' : '',
        )}
        onClick={() => setOpen((pre) => !pre)}
      >
        <div className={'flex justify-between text-lg lg:text-2xl'}>
          <div>{title}</div>
          <Image
            className={'my-auto'}
            src={'/down-arrow.png'}
            alt={''}
            width={16}
            height={16}
          />
        </div>
      </div>
      <div
        ref={container}
        className={twMerge(
          'text-sm lg:text-md h-0 border border-[#E1E1E8] whitespace-pre-wrap bg-[#F8F8F9] rounded-xl rounded-t-0',
          open ? 'rounded-t-none' : '',
        )}
      >
        {desc}
      </div>
    </div>
  );
}

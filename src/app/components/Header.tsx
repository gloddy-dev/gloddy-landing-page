'use client';

import Image from 'next/image';
import Button from './Button';
import { scrollToMeeting } from '@/app/util/scroll';

export default function Header() {
  return (
    <header className="flex justify-between items-center h-[80px] fixed w-full lg:mx-auto sm:mx-4 z-20 py-[10px]">
      <div className="flex justify-between items-center h-full w-full mx-2 lg:mx-auto max-w-7xl">
        <Image
          src="/gloddy-logo.png"
          alt="gloddy-logo"
          width={120}
          height={44}
        />
        <Button message="1:1 상담 신청" size="sm" onClick={scrollToMeeting} />
      </div>
    </header>
  );
}

'use client';

import Image from 'next/image';
import Button from '@/app/components/Button';
import { scrollToMeeting } from '@/app/util/scroll';

export function FinalBanner() {
  return (
    <section className={'relative w-full h-full object-cover z-0'}>
      <div
        className={
          'relative flex flex-col z-10 gap-10 py-20 w-full h-full justify-center items-center'
        }
      >
        <span className={'text-white text-4xl font-bold'}>
          Gloddy Recrutier와 함께 글로벌 인재를 채용해보세요
        </span>
        <Button message={'1:1 상담 신청하기'} onClick={scrollToMeeting} />
      </div>
      <Image src={'/final-banner.png'} alt={'final-banner'} fill />
    </section>
  );
}

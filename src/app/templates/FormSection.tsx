'use client';

import Form from '@/app/components/Form';
import Button from '@/app/components/Button';
import { scrollToMeeting } from '@/app/util/scroll';

export default function FormSection() {
  return (
    <section
      id="meeting"
      className="flex flex-col justify-center items-center w-full h-full bg-[#F2F3F7]"
    >
      <div className="flex flex-col gap-16 w-full max-w-7xl my-24 h-full justify-center">
        <div className={'flex flex-col text-center gap-4'}>
          <span className={'text-2xl text-[#99999F]'}>1:1 상담 신청</span>
          <span
            className={
              'whitespace-pre-wrap font-bold text-6xl leading-[4.5rem]'
            }
          >
            {'Gloddy Recrutier로\n함께할 인재를 찾아보세요'}
          </span>
        </div>
        <Form />
        <div className={'w-fit mx-auto'}>
          <Button message={'1:1 상담 신청하기'} onClick={scrollToMeeting} />
        </div>
      </div>
    </section>
  );
}

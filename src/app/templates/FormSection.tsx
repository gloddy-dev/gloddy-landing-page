'use client';

import Form from '@/app/components/Form';

export interface FormValue {
  email: string;
  uname: string;
  phonenumber: string;
  company: string;
  descinfo: string;
  type: string;
  privateInfo: string;
  country: string;
}

export default function FormSection() {
  return (
    <section
      id="meeting"
      className="flex flex-col justify-center items-center w-full h-full bg-[#F2F3F7]"
    >
      <div className="flex flex-col gap-16 w-full max-w-7xl my-24 h-full justify-center">
        <div className={'flex flex-col text-center gap-4'}>
          <span className={'text-xl lg:text-2xl text-[#99999F]'}>
            1:1 상담 신청
          </span>
          <span
            className={
              'whitespace-pre-wrap font-bold text-4xl lg:text-6xl leading-10 lg:leading-[4.5rem]'
            }
          >
            {'Gloddy Recrutier로\n함께할 인재를 찾아보세요'}
          </span>
        </div>
        <Form />
      </div>
    </section>
  );
}

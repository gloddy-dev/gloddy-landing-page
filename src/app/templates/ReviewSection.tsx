'use client';

import ReviewSwiperSlide from '@/app/components/ReviewSwiperSlide';

export default function ReviewSection() {
  return (
    <section className="flex flex-col justify-center items-center w-full h-screen max-h-[600px] lg:max-h-[1080px]">
      <div className="flex flex-col gap-16 w-full my-auto h-full justify-center">
        <div
          className={
            'flex flex-col justify-center mx-auto max-w-7xl w-full items-center gap-12 break-keep text-center'
          }
        >
          <span className={'text-3xl lg:text-6xl font-bold'}>
            진짜 고객 후기를 확인하세요!
          </span>
          <span
            className={
              'text-xl lg:text-3xl whitespace-pre-wrap lg:whitespace-nowrap'
            }
          >
            {'지금도 Gloddy Recrutier를 통해\n다양한 매칭이 이뤄지고 있습니다.'}
          </span>
        </div>

        <div className={'w-full h-full max-h-[400px] lg:max-h-[600px]'}>
          <ReviewSwiperSlide />
        </div>
      </div>
    </section>
  );
}

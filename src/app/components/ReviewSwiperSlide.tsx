import { Swiper, SwiperSlide } from 'swiper/react';
import Image, { StaticImageData } from 'next/image';
import gsap from 'gsap';

import 'swiper/css';

import ReviewImage1 from '/public/review1.png';
import ReviewImage2 from '/public/review2.png';
import ReviewImage3 from '/public/review3.png';
import ReviewImage4 from '/public/review4.png';

import { Autoplay } from 'swiper/modules';
import { RefObject, useRef } from 'react';

const reviewContents: Sliderprops[] = [
  {
    tag: '정규직',
    desc: '해외 진출을 위해 일본인 직원이 필요했는데\n필요한 요건만 갖춘 인원을 채용할 수 있었어요!',
    team: 'IT기업 해외 채용팀',
    image: ReviewImage1,
  },
  {
    tag: '파트타임',
    desc: '유럽 국적의 피팅 모델이 급하게 필요했는데\n일주일 내로 적합한 인원을 소개받았어요!',
    team: '패션 브랜드 채용팀',
    image: ReviewImage2,
  },
  {
    tag: '인턴',
    desc: '중국어, 영어, 한국어 3개 국어에\n능숙한 직원이 필요했는데\n한 달 내로 수월하게 채용했어요.',
    team: '글로벌 투자 회사 채용팀',
    image: ReviewImage3,
  },
  {
    tag: '파트타임',
    desc: '베트남 시장 진출을 위한 제품 테스트에\n베트남 학생을 대상을 모집하여\n손쉽게 인터뷰했어요',
    team: '식품 브랜드 채용팀',
    image: ReviewImage4,
  },
];

export interface Sliderprops {
  tag: string;
  desc: string;
  team: string;
  image: StaticImageData;
}

export default function ReviewSwiperSlide() {
  const slide1 = useRef<HTMLDivElement>(null);
  const slide2 = useRef<HTMLDivElement>(null);
  const slide3 = useRef<HTMLDivElement>(null);
  const slide4 = useRef<HTMLDivElement>(null);

  const handleSwiperSliderActivate = (
    slide: RefObject<HTMLDivElement>,
    activate: boolean,
  ) => {
    if (!slide.current) return;

    if (activate) {
      gsap.to(slide.current, {
        y: -30,
      });
    } else {
      gsap.to(slide.current, {
        y: 0,
      });
    }
  };

  return (
    <Swiper
      modules={[Autoplay]}
      className={'h-full'}
      spaceBetween={20}
      slidesPerView={'auto'}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      centeredSlides={true}
    >
      <SwiperSlide className={'max-w-5xl mt-auto'}>
        {({ isActive }) => {
          handleSwiperSliderActivate(slide1, isActive);
          return (
            <div ref={slide1} className={'relative w-full h-full object-cover'}>
              <Image
                className={'rounded-2xl'}
                src={reviewContents[0].image}
                alt={'swiper-image'}
                fill
                sizes={'1000px'}
              />
              <div
                className={
                  'flex absolute flex-col w-full h-full z-20 text-white p-6 lg:p-14 justify-between'
                }
              >
                <div className={'flex flex-col gap-6'}>
                  <div
                    className={
                      'px-3 py-1 lg:px-5 lg:py-[6px] text-sm lg:text-md rounded-full w-fit bg-black/75'
                    }
                  >
                    {reviewContents[0].tag}
                  </div>
                  <div
                    className={
                      'font-bold text-2xl lg:text-4xl whitespace-pre-wrap lg:leading-[3.5rem] break-keep'
                    }
                  >
                    {reviewContents[0].desc}
                  </div>
                </div>
                <div>{reviewContents[0].team}</div>
              </div>
            </div>
          );
        }}
      </SwiperSlide>
      <SwiperSlide className={'max-w-5xl mt-auto'}>
        {({ isActive }) => {
          handleSwiperSliderActivate(slide2, isActive);
          return (
            <div ref={slide2} className={'relative w-full h-full object-cover'}>
              <Image
                className={'rounded-2xl'}
                src={reviewContents[1].image}
                alt={'swiper-image'}
                fill
                sizes={'1000px'}
              />
              <div
                className={
                  'flex absolute flex-col w-full h-full z-20 text-white p-6 lg:p-14 justify-between'
                }
              >
                <div className={'flex flex-col gap-6'}>
                  <div
                    className={
                      'px-3 py-1 lg:px-5 lg:py-[6px] text-sm lg:text-md rounded-full w-fit bg-black/75'
                    }
                  >
                    {reviewContents[1].tag}
                  </div>
                  <div
                    className={
                      'font-bold text-2xl lg:text-4xl whitespace-pre-wrap lg:leading-[3.5rem] break-keep'
                    }
                  >
                    {reviewContents[1].desc}
                  </div>
                </div>
                <div>{reviewContents[1].team}</div>
              </div>
            </div>
          );
        }}
      </SwiperSlide>
      <SwiperSlide className={'max-w-5xl mt-auto'}>
        {({ isActive }) => {
          handleSwiperSliderActivate(slide3, isActive);
          return (
            <div ref={slide3} className={'relative w-full h-full object-cover'}>
              <Image
                className={'rounded-2xl'}
                src={reviewContents[2].image}
                alt={'swiper-image'}
                fill
                sizes={'1000px'}
              />
              <div
                className={
                  'flex absolute flex-col w-full h-full z-20 text-white p-6 lg:p-14 justify-between'
                }
              >
                <div className={'flex flex-col gap-6'}>
                  <div
                    className={
                      'px-3 py-1 lg:px-5 lg:py-[6px] text-sm lg:text-md rounded-full w-fit bg-black/75'
                    }
                  >
                    {reviewContents[2].tag}
                  </div>
                  <div
                    className={
                      'font-bold text-2xl lg:text-4xl whitespace-pre-wrap lg:leading-[3.5rem] break-keep'
                    }
                  >
                    {reviewContents[2].desc}
                  </div>
                </div>
                <div>{reviewContents[2].team}</div>
              </div>
            </div>
          );
        }}
      </SwiperSlide>
      <SwiperSlide className={'max-w-5xl mt-auto'}>
        {({ isActive }) => {
          handleSwiperSliderActivate(slide4, isActive);
          return (
            <div ref={slide4} className={'relative w-full h-full object-cover'}>
              <Image
                className={'rounded-2xl'}
                src={reviewContents[3].image}
                alt={'swiper-image'}
                fill
                sizes={'1000px'}
              />
              <div
                className={
                  'flex absolute flex-col w-full h-full z-20 text-white p-6 lg:p-14 justify-between'
                }
              >
                <div className={'flex flex-col gap-6'}>
                  <div
                    className={
                      'px-3 py-1 lg:px-5 lg:py-[6px] text-sm lg:text-md rounded-full w-fit bg-black/75'
                    }
                  >
                    {reviewContents[3].tag}
                  </div>
                  <div
                    className={
                      'font-bold text-2xl lg:text-4xl whitespace-pre-wrap lg:leading-[3.5rem] break-keep'
                    }
                  >
                    {reviewContents[3].desc}
                  </div>
                </div>
                <div className={'text-xl'}>{reviewContents[3].team}</div>
              </div>
            </div>
          );
        }}
      </SwiperSlide>
    </Swiper>
  );
}

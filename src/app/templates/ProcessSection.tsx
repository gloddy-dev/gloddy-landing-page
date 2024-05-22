'use client';

import gsap from 'gsap';
import ProcessOne from '/public/process1.png';
import ProcessTow from '/public/process2.png';
import ProcessThree from '/public/process3.png';
import ProcessFour from '/public/process4.png';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import ProcessContent from '@/app/components/ProcessContent';

const processImageSet = [ProcessOne, ProcessTow, ProcessThree, ProcessFour];

const processContent = [
  {
    title: '상담을 통한 맞춤 공고 제작',
    desc: '- 기업과 상담을 통한 모집 유형 파악\n- 핏에 맞는 모집 공고 및 홍보글 제작',
  },
  {
    title: '적합 인원 리스트업 후 전달',
    desc: '- 홍보로 모집된 인원을 리스트업하여 전달 \n- 평균 10~15일 소요 (모집 내용별 상이)',
  },
  {
    title: '면접을 통한 선발 진행',
    desc: '- 지원자 면접 진행 후 최종 인원 선발\n- 기업 내부 일정별 상이',
  },
  {
    title: '최종 선발 완료 후 수수료 정산',
    desc: '비용 안내 보러가기 →',
  },
];

export default function ProcessSection() {
  const container = useRef<HTMLDivElement | null>(null);

  const [focusProcess, setFocusProcess] = useState<number>(0);

  const showImageContainer = () => {
    gsap.to(container.current, { opacity: 0, duration: 0.3 });
  };

  useEffect(() => {
    gsap.to(container.current, { opacity: 1, duration: 0.01 });
  }, [focusProcess]);

  return (
    <section className="flex flex-col justify-center items-center w-full h-full lg:h-screen lg:max-h-[1080px]  my-24 lg:my-0">
      <div className="flex flex-col gap-12 lg:gap-20 max-w-7xl w-full my-auto h-full justify-center break-keep">
        <div
          className={
            'ml-2 lg:ml-0 text-3xl lg:text-5xl font-bold w-[80%] lg:w-full'
          }
        >
          채용은 이런 과정으로 이루어집니다.
        </div>
        <div className={'flex flex-col gap-6 lg:gap-0 lg:flex-row w-full'}>
          <div
            className={
              'flex flex-col gap-2 lg:gap-0 w-full justify-evenly items-center'
            }
          >
            {processContent.map((process, index) => (
              <ProcessContent
                key={`${process.title}-${index}`}
                index={index}
                focus={focusProcess == index}
                title={process.title}
                desc={process.desc}
                onClick={() => setFocusProcess(index)}
              />
            ))}
          </div>
          <div className={'relative mx-auto w-[95%] lg:w-full h-full'}>
            <div
              ref={container}
              className={
                'z-10 absolute w-full h-full top-0 left-0 bg-white opacity-0'
              }
            ></div>
            <Image
              src={processImageSet[focusProcess]}
              alt={'process-image'}
              onLoad={() => showImageContainer()}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

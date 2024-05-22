'use client';
import Image from 'next/image';
import { scrollToMeeting } from '@/app/util/scroll';

export default function AdvantageSection() {
  return (
    <section className="flex flex-col justify-center items-center w-full h-full lg:h-screen lg:max-h-[1080px]">
      <div className="flex flex-col gap-12 max-w-7xl w-full h-full items-start lg:items-center justify-center break-keep">
        <div
          className={
            'text-3xl lg:text-center lg:text-[52px] w-[80%] lg:w-full ml-2 lg:ml-0 font-bold'
          }
        >
          Gloddy Recruiter를 사용해야 하는 이유
        </div>
        <div
          className={
            'flex flex-col w-[95%] mx-auto lg:w-full justify-center gap-6 h-full lg:h-[70vh] lg:max-h-[700px]'
          }
        >
          <div
            className={
              'flex flex-col lg:flex-row justify-between gap-8 lg:gap-0 lg:items-center card-gradientr-bg rounded-2xl h-full p-7 lg:p-14'
            }
          >
            <div className={'flex gap-6 flex-col justify-between h-full'}>
              <span
                className={'text-2xl lg:text-4xl font-bold mr-auto lg:mr-0'}
              >
                검증된 외국인 선발
              </span>
              <span className={'whitespace-pre-wrap lg:text-xl text-[#4A4A4D]'}>
                {
                  '불특정 다수가 아닌,\n관리중인 커뮤니티와 홍보 채널로\n검증된 학생을 우선 추천합니다.'
                }
              </span>
            </div>
            <div className="relative mt-auto w-full h-20 lg:w-[32rem] lg:h-32">
              <Image
                src={'/trailling-tossface.png'}
                alt="tossface-image"
                fill
              />
            </div>
          </div>
          <div className={'flex flex-col lg:flex-row gap-6 h-full'}>
            <div
              className={
                'flex flex-col gap-6 justify-between card-gradientr-bg2 p-7 lg:p-14 lg:w-[400px] rounded-2xl'
              }
            >
              <span className={'text-2xl lg:text-4xl font-bold'}>
                매니저 전담 관리
              </span>
              <span className={'whitespace-pre-wrap lg:text-xl text-[#4A4A4D]'}>
                {
                  '공고 등록, 홍보, 면접 전/후까지\n전체 과정을 담당 매니저가 서포트'
                }
              </span>
            </div>
            <div className="flex flex-row justify-between card-gradientr-bg3 p-7 lg:p-14 h-full grow rounded-2xl">
              <div className={'flex gap-6 flex-col justify-between '}>
                <div className={'flex gap-1 flex-col'}>
                  <span className={'text-2xl lg:text-4xl font-bold'}>
                    결제는 나중에!
                  </span>
                  <div
                    onClick={() => scrollToMeeting('faq')}
                    className={'lg:text-xl text-[#9B9A96] cursor-pointer'}
                  >
                    {'비용 안내 보러가기 →'}
                  </div>
                </div>
                <span
                  className={'whitespace-pre-wrap lg:text-xl text-[#4A4A4D]'}
                >
                  {'최종 인원 모집 완료 후\n비용이 청구되는 후불형 서비스'}
                </span>
              </div>
              <div className="relative mt-auto h-12 w-12 ml-auto lg:w-24 lg:h-24">
                <Image
                  className="mt-auto"
                  src={'/money.png'}
                  alt="tossface-image"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

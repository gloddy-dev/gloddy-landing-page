import Image from 'next/image';
import { PersonalInfo } from '@/app/components/PersonalInfo';

export default function IntroduceSection() {
  return (
    <section className="flex flex-col justify-center items-center w-full h-screen max-h-[1080px]">
      <div className="flex flex-col gap-16 max-w-7xl w-full my-auto h-full justify-center">
        <div className="flex flex-col text-4xl w-full">
          <span className="text-2xl text-[#99999F] mb-6">Gloddy 소개</span>
          <span className="mb-3">
            유학생 커뮤니티와 취업 프로그램 운영 노하우로
          </span>
          <span className="font-bold">
            기업에 맞는 최적의 유학생 인재를 연결합니다.
          </span>
        </div>
        <div className="flex h-1/2">
          <div className="flex flex-col w-full h-full gap-4">
            <div className={'flex gap-4 h-full'}>
              <div className="flex flex-col justify-between p-8 w-[45%] h-full max-h-60 rounded-xl card-shadow border border-[#EFEFEF]">
                <div className="whitespace-pre-wrap text-[#4A4A4D] text-xl">
                  {'유학생 커뮤니티\n운영 기간'}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-5xl font-bold">2년</span>
                  <Image
                    className="mt-auto"
                    src={'/introduce-1.png'}
                    alt="indroduce-icon-1"
                    width={41}
                    height={40}
                  />
                </div>
              </div>
              <div className="flex flex-col justify-between p-8 w-[45%] h-full max-h-60 rounded-xl card-shadow border border-[#EFEFEF]">
                <div className="whitespace-pre-wrap text-[#4A4A4D] text-xl">
                  {'커뮤니티 내\n유학생 소속 대학'}
                </div>
                <div className="flex justify-between items-center">
                  <div className="relative w-full h-14 ">
                    <Image
                      src={'/logo-trailling.png'}
                      alt="school-logo"
                      fill
                      sizes="250px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={'flex gap-4 h-full'}>
              <div className="flex flex-col justify-between p-8 w-[45%] h-full max-h-60 rounded-xl card-shadow border border-[#EFEFEF]">
                <div className="whitespace-pre-wrap text-[#4A4A4D] text-xl">
                  {'유학생 서비스\n제공 국가'}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-5xl font-bold">16개국</span>
                  <Image
                    className="mt-auto"
                    src={'/korea.png'}
                    alt="indroduce-icon-1"
                    width={41}
                    height={40}
                  />
                </div>
              </div>
              <div className="flex flex-col justify-between p-8 w-[45%] h-full max-h-60 rounded-xl card-shadow border border-[#EFEFEF]">
                <div className="whitespace-pre-wrap text-[#4A4A4D] text-xl">
                  {'유학생 모임\n누적 진행수'}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-5xl font-bold">200회</span>
                  <Image
                    className="mt-auto"
                    src={'/party.png'}
                    alt="indroduce-icon-1"
                    width={41}
                    height={40}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full h-full max-w-[606px] max-h-[500px] object-cover">
            <Image
              className={'my-auto'}
              src={'/introduce.png'}
              alt={'introduce-image'}
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
}

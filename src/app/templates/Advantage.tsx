import Image from 'next/image';

export default function Advantage() {
  return (
    <section className="flex flex-col justify-center items-center w-full h-screen max-h-[1080px]">
      <div className="flex flex-col gap-12 max-w-7xl w-full h-full items-center justify-center">
        <div className={'text-[52px] font-bold'}>
          Gloddy Recruiter를 사용해야 하는 이유
        </div>
        <div
          className={
            'flex flex-col w-full justify-center gap-6 h-[70vh] max-h-[700px]'
          }
        >
          <div
            className={
              'flex justify-between items-center card-gradientr-bg rounded-2xl h-full p-16'
            }
          >
            <div className={'flex flex-col justify-between h-full'}>
              <span className={'text-4xl font-bold'}>검증된 외국인 선발</span>
              <span className={'whitespace-pre-wrap text-xl text-[#4A4A4D]'}>
                {
                  '불특정 다수가 아닌,\n관리중인 커뮤니티와 홍보 채널로\n검증된 학생을 우선 추천합니다.'
                }
              </span>
            </div>
            <div className="relative mt-auto w-[32rem] h-32">
              <Image
                src={'/trailling-tossface.png'}
                alt="tossface-image"
                fill
              />
            </div>
          </div>
          <div className={'flex gap-6 h-full'}>
            <div
              className={
                'flex flex-col justify-between card-gradientr-bg2 p-14 w-[400px] rounded-2xl'
              }
            >
              <span className={'text-4xl font-bold'}>매니저 전담 관리</span>
              <span className={'whitespace-pre-wrap text-xl text-[#4A4A4D]'}>
                {
                  '공고 등록, 홍보, 면접 전/후까지\n전체 과정을 담당 매니저가 서포트'
                }
              </span>
            </div>
            <div className="flex justify-between card-gradientr-bg3 p-14 h-full grow rounded-2xl">
              <div className={'flex flex-col justify-between '}>
                <div className={'flex flex-col'}>
                  <span className={'text-4xl font-bold'}>결제는 나중에!</span>
                  <span className={'text-xl text-[#9B9A96]'}>
                    {'비용 안내 보러가기 →'}
                  </span>
                </div>
                <span className={'whitespace-pre-wrap text-xl text-[#4A4A4D]'}>
                  {'최종 인원 모집 완료 후\n비용이 청구되는 후불형 서비스'}
                </span>
              </div>
              <Image
                className="mt-auto"
                src={'/money.png'}
                alt="tossface-image"
                width={120}
                height={120}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

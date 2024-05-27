import { ToggleCard } from '@/app/components/ToggleCard';

export function FaqSection() {
  return (
    <section
      id={'faq'}
      className={'w-full h-[50vh] lg:h-screen lg:max-h-[900px]'}
    >
      <div
        className={
          'flex flex-col w-full max-w-7xl h-full gap-10 mx-auto justify-center items-center'
        }
      >
        <div className={'text-3xl lg:text-5xl font-bold text-center'}>
          자주 묻는 질문
        </div>

        <div className={'w-full flex flex-col gap-3'}>
          <ToggleCard
            title={'서비스 이용 방법이 어떻게 되나요?'}
            desc={
              '상담 신청서를 제출해주시면 개별 연락을 드릴 예정입니다.\n기업 핏에 맞는 채용 공고를 제작한 후 홍보를 진행합니다.'
            }
          />
          <ToggleCard
            title={'서비스 이용료는 어떻게 되나요?'}
            desc={
              <span>
                {
                  '모집 유형에 따라 수수료가 달라집니다.\n- 파트 타임: 기업 측과 협상 후 수수료 산정\n- 인턴,정규직: 채용 확정 후 대금 지불하는 후불형 서비스\n        합격자 연봉의 7% -> 5% 수수료 발생. '
                }
                <span
                  className={
                    'text-[#E94735] text-xs lg:text-sm bg-[#FEF6F5] py-[2px] px-1 rounded-md border border-[#E94735]'
                  }
                >
                  특가할인중
                </span>
                {
                  '\n\n저렴한 서비스 이용료를 보장합니다.\n일반 헤드헌팅 서비스 수수료인 15%의 1/3 비용\n최종 합격자가 2개월 이내에 퇴사 시, 채용 수수료의 85% 환급해 드립니다.'
                }
              </span>
            }
          />
        </div>
      </div>
    </section>
  );
}

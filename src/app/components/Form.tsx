'use client';

import Input from '@/app/components/Input';
import TextArea from '@/app/components/TextArea';
import Dropdown, { DropDownOptionType } from '@/app/components/DropDown';
import { useState } from 'react';
import Image from 'next/image';

export default function Form() {
  const [doprdown, setDropdown] = useState<string>('선택');
  const [agreeCheck, setAgreeCheck] = useState<boolean>(false);
  const dropdownOptions: DropDownOptionType[] = [
    {
      name: '단기/파트타임',
      onClick: () => setDropdown('단기/파트타임'),
    },
    {
      name: '인턴',
      onClick: () => setDropdown('인턴'),
    },
    {
      name: '정규직',
      onClick: () => setDropdown('정규직'),
    },
  ];

  return (
    <form
      className={
        'flex flex-col gap-12 w-full bg-white rounded-2xl p-14 border border-[#EFEFEF]'
      }
    >
      <div className={'text-[#E94735] text-end'}>* 필수 입력 사항입니다.</div>
      <div className={'flex w-full gap-6 flex-wrap lg:flex-nowrap'}>
        <Input
          id={'e-mail'}
          label={'이메일 주소'}
          placeholder={'담당자 이메일 주소를 입력해 주세요.'}
        />
        <Input
          id={'phone-number'}
          label={'휴대폰 번호'}
          placeholder={'담당자 휴대폰 번호를 입력해 주세요.'}
        />
      </div>
      <div className={'flex w-full gap-6 flex-wrap lg:flex-nowrap'}>
        <Input
          id={'company'}
          label={'기업명'}
          placeholder={'기업명을 입력해 주세요.'}
        />
        <Input
          id={'name'}
          label={'이름'}
          placeholder={'담당자 이름을 입력해 주세요.'}
        />
      </div>
      <div className={'flex w-full gap-6 flex-wrap lg:flex-nowrap'}>
        <Dropdown
          id={'type'}
          label={'모집 유형'}
          options={dropdownOptions}
          placeholder={'선택'}
        />
        <Input
          id={'country'}
          label={'선호 국가'}
          important={false}
          placeholder={'국가명을 입력해 주세요.'}
        />
      </div>
      <TextArea
        id={'desc'}
        label={'문의 내용'}
        placeholder={
          '업무 내용, 근무 시간, 페이, 요청 사항 등을 작성해 주세요.'
        }
      />
      <div className={'flex flex-col gap-4'}>
        <span className={'text-2xl font-semibold'}>
          개인정보 수집 및 이용에 대한 안내
          <span className={'text-[#E94735]'}>*</span>
        </span>
        <div
          className={
            'flex flex-col gap-12 w-full h-full p-10 border border-[#E1E1E8] rounded-xl whitespace-pre-wrap'
          }
        >
          <div className={'text-xl text-[#4D4D4A] leading-8'}>
            {
              '(주)글로디는 상담 문의를 처리하기 위해 다음과 같이 개인정보를 수집 및 이용하며,\n이용자의 개인정보를 안정하게 취급하는데 최선을 다하고 있습니다.'
            }
          </div>

          <div
            className={
              'flex w-full rounded-xl border text-[#4D4D4A] border-[#E1E1E8] border-l-0 border-r-0'
            }
          >
            <div className={'flex flex-col text-xl w-full'}>
              <div className={'bg-[#F2F3F7] p-4 rounded-tl-xl'}>수집항목</div>
              <div className={'p-4'}>
                {'(필수) 기업정보(기업명)\n(필수) 이름, 이메일, 휴대폰 번호'}
              </div>
            </div>
            <div
              className={
                'flex flex-col text-xl w-full border border-[#E1E1E8] border-t-0 border-b-0'
              }
            >
              <div className={'bg-[#F2F3F7] p-4'}>수집항목</div>
              <div className={'p-4'}>
                {'(필수) 기업정보(기업명)\n(필수) 이름, 이메일, 휴대폰 번호'}
              </div>
            </div>
            <div className={'flex flex-col text-xl w-full'}>
              <div className={'bg-[#F2F3F7] rounded-tr p-4'}>수집항목</div>
              <div className={'p-4'}>
                {'(필수) 기업정보(기업명)\n(필수) 이름, 이메일, 휴대폰 번호'}
              </div>
            </div>
          </div>

          <div className={'text-xl text-[#4D4D4A] leading-8'}>
            {
              '위 동의를 거부할 권리가 있으며, 동의를 거부하실 경우 문의 처리 및 결과 회신이 제한됩니다.'
            }
          </div>

          <div
            className={
              'flex justify-between w-full bg-[#E8EDFC] p-4 rounded-xl'
            }
          >
            <span className={'text-xl font-semibold'}>
              위 내용에 동의합니다.<span className={'text-[#E94735]'}>*</span>
            </span>

            <Image
              className={'m-auto'}
              onClick={() => setAgreeCheck((pre) => !pre)}
              src={agreeCheck ? '/checkbox-check.png' : '/checkbox.png'}
              alt={'checkbox'}
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
    </form>
  );
}

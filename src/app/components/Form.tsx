'use client';

import Input from '@/app/components/Input';
import TextArea from '@/app/components/TextArea';
import Dropdown, { DropDownOptionType } from '@/app/components/DropDown';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { FormValue } from '../templates/FormSection';
import Button from './Button';
import gsap from 'gsap';

function LoadingOverlay() {
  const loadingRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.to(loadingRef.current, {
      rotate: 360,
      repeat: -1,
      duration: 1,
    });
  }, []);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div ref={loadingRef}>
        <Image
          src={'/loading.png'}
          alt="loading-image"
          width={64}
          height={64}
        />
      </div>
    </div>
  );
}

export default function Form() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormValue>();

  const onSubmit: SubmitHandler<FormValue> = async (data) => {
    console.log(data);
    try {
      setLoading(true);
      const response = await fetch('/api/google', {
        method: 'POST',
        body: JSON.stringify({
          email: data.email,
          uname: data.uname,
          country: data.country,
          phonenumber: data.phonenumber,
          company: data.company,
          type: data.type,
          descinfo: data.descinfo,
          privateInfo: data.privateInfo,
        }),
      });
      if (response.ok) {
        alert('1:1 상담 요청이 완료되었습니다!');
        return;
      }
      throw new Error();
    } catch (e) {
      console.log(e);
      alert('에러가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

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
    <div className="relative">
      {loading && <LoadingOverlay />}
      <form
        className={'flex flex-col gap-12 w-full '}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div
          className={
            'flex flex-col gap-12 w-full bg-white rounded-2x px-2 py-10 lg:p-14 border border-[#EFEFEF]'
          }
        >
          <div className={'text-[#E94735] text-sm lg:text-md text-end'}>
            * 필수 입력 사항입니다.
          </div>
          <div className={'flex w-full gap-6 flex-wrap lg:flex-nowrap'}>
            <Input
              id={'email'}
              label={'이메일 주소'}
              placeholder={'담당자 이메일 주소를 입력해 주세요.'}
              register={register('email', {
                required: true,
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: '이메일 형식이 올바르지 않습니다.',
                },
              })}
              errors={errors}
            />
            <Input
              id={'phonenumber'}
              label={'휴대폰 번호'}
              placeholder={'담당자 휴대폰 번호를 -없이 입력해 주세요.'}
              register={register('phonenumber', {
                required: true,
                pattern: {
                  value: /^\d{11}$/,
                  message: '휴대폰 번호 형식이 올바르지 않습니다.',
                },
              })}
              errors={errors}
            />
          </div>
          <div className={'flex w-full gap-6 flex-wrap lg:flex-nowrap'}>
            <Input
              id={'company'}
              label={'기업명'}
              placeholder={'기업명을 입력해 주세요.'}
              register={register('company', {
                required: true,
                pattern: {
                  value: /^.{1,}$/,
                  message: '최소 1자 이상 적어주세요.',
                },
              })}
              errors={errors}
            />
            <Input
              id={'uname'}
              label={'이름'}
              placeholder={'담당자 이름을 입력해 주세요.'}
              register={register('uname', {
                required: true,
                pattern: {
                  value: /^.{1,}$/,
                  message: '최소 1자 이상 적어주세요.',
                },
              })}
              errors={errors}
            />
          </div>
          <div className={'flex w-full gap-6 flex-wrap lg:flex-nowrap'}>
            <Controller
              name="type"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Dropdown
                  label="모집 유형"
                  options={dropdownOptions}
                  placeholder="선택"
                  onSelect={field.onChange}
                  errors={errors}
                />
              )}
            />

            <Input
              id={'country'}
              label={'선호 국가'}
              important={false}
              placeholder={'국가명을 입력해 주세요.'}
              register={register('country')}
            />
          </div>
          <TextArea
            id={'descinfo'}
            label={'문의 내용'}
            placeholder={
              '업무 내용, 근무 시간, 페이, 요청 사항 등을 작성해 주세요.'
            }
            register={register('descinfo', {
              required: true,
              pattern: {
                value: /^.{1,}$/,
                message: '최소 10자 이상 적어주세요.',
              },
            })}
            errors={errors}
          />
          <div className={'flex flex-col gap-4'}>
            <span className={'text-xl lg:text-2xl font-semibold'}>
              개인정보 수집 및 이용에 대한 안내
              <span className={'text-[#E94735]'}>*</span>
            </span>
            <div
              className={
                'flex flex-col gap-12 w-full h-full p-6 lg:p-10 border border-[#E1E1E8] rounded-xl whitespace-pre-wrap'
              }
            >
              <div className={'lg:text-xl text-[#4D4D4A] leading-8'}>
                {
                  '(주)글로디는 상담 문의를 처리하기 위해 다음과 같이 개인정보를 수집 및 이용하며,\n이용자의 개인정보를 안정하게 취급하는데 최선을 다하고 있습니다.'
                }
              </div>

              <div
                className={
                  'flex flex-col lg:flex-row w-full rounded-xl border text-[#4D4D4A] border-[#E1E1E8] border-l-0 border-r-0'
                }
              >
                <div className={'flex flex-col lg:text-xl w-full'}>
                  <div className={'bg-[#F2F3F7] p-4 rounded-tl-xl'}>
                    수집항목
                  </div>
                  <div className={'p-4'}>
                    {
                      '(필수) 기업정보(기업명)\n(필수) 이름, 이메일, 휴대폰 번호'
                    }
                  </div>
                </div>
                <div
                  className={
                    'flex flex-col lg:text-xl w-full border border-[#E1E1E8] border-l-0 border-r-0 lg:border-l-1 lg:border-r-1   lg:border-t-0 lg:border-b-0'
                  }
                >
                  <div className={'bg-[#F2F3F7] p-4'}>수집목적</div>
                  <div className={'p-4'}>
                    {'서비스 상담\n서비스 안내 및 지원'}
                  </div>
                </div>
                <div className={'flex flex-col lg:text-xl w-full'}>
                  <div className={'bg-[#F2F3F7] rounded-tr p-4'}>보유기간</div>
                  <div className={'p-4'}>{'3년 보관 후 삭제'}</div>
                </div>
              </div>

              <div className={'lg:text-xl text-[#4D4D4A] leading-8'}>
                {
                  '위 동의를 거부할 권리가 있으며, 동의를 거부하실 경우 문의 처리 및 결과 회신이 제한됩니다.'
                }
              </div>
              <Controller
                name="privateInfo"
                control={control}
                rules={{ required: '동의는 필수입니다.' }}
                render={({ field }) => (
                  <div
                    className={
                      'flex justify-between w-full bg-[#E8EDFC] p-4 rounded-xl'
                    }
                    onClick={() => field.onChange(!field.value)}
                  >
                    <span className={'lg:text-xl font-semibold'}>
                      위 내용에 동의합니다.
                      <span className={'text-[#E94735]'}>*</span>
                    </span>
                    <div className="flex justify-center items-center w-8 h-8">
                      <Image
                        className={'m-auto'}
                        src={
                          field.value ? '/checkbox-check.png' : '/checkbox.png'
                        }
                        alt={'checkbox'}
                        width={24}
                        height={24}
                      />
                    </div>
                  </div>
                )}
              />

              {errors.privateInfo && (
                <span className="text-[#E94735] lg:text-xl pl-1">
                  {errors.privateInfo.message}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className={'w-fit mx-auto'}>
          <Button type="submit" message={'1:1 상담 신청하기'} />
        </div>
      </form>
    </div>
  );
}

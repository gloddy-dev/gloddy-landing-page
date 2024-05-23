import { useState } from 'react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import {
  UseFormRegisterReturn,
  UseFormSetValue,
  UseFormTrigger,
} from 'react-hook-form';
import { FormValue } from '../templates/FormSection';

export type DropDownOptionType = {
  name: string;
  onClick: () => void;
  value?: string | number;
};

interface DropDownProps {
  id?: 'type';
  label: string;
  important?: boolean;
  options: DropDownOptionType[];
  className?: string;
  placeholder: string;
  errors?: {
    [key: string]: {
      message?: string;
    };
  };
  onSelect: (value: string | number) => void;
}
export default function Dropdown({
  id = 'type',
  options,
  label,
  important = true,
  placeholder,
  errors,
  onSelect,
}: DropDownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mainContentState, setMainContentState] = useState<string | null>(null);

  const handleClickOption = (option: DropDownOptionType) => {
    setMainContentState(option.name);
    option.onClick();
    setIsOpen(false);
    onSelect(option.name);
  };

  return (
    <div className={'w-full h-full'}>
      <label className="lg:text-xl">
        {label}
        <span
          className={`${important ? 'lg:text-xl text-[#E94735]' : 'hidden'}`}
        >
          *
        </span>
      </label>
      <div
        className={'relative w-full h-full mt-2 cursor-pointer rounded-lg'}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={twMerge(
            'flex justify-between rounded-lg p-4 lg:text-xl',
            isOpen
              ? 'border border-t-[#E1E1E8] border-l-[#E1E1E8] border-r-[#E1E1E8] border-b-0 rounded-b-none shadow-lg'
              : 'border border-[#E1E1E8]',
          )}
        >
          <p
            className={twMerge(
              mainContentState !== null ? '' : 'text-[#858899]',
            )}
          >
            {mainContentState === null ? placeholder : mainContentState}
          </p>
          {!isOpen && (
            <Image
              className={'my-auto'}
              src={'/down-arrow.png'}
              alt={'drop-down-icon'}
              width={16}
              height={16}
            />
          )}
        </div>
        {isOpen && (
          <div
            className={twMerge(
              'absolute w-full rounded-lg bg-white',
              isOpen
                ? 'border border-b-[#E1E1E8] border-l-[#E1E1E8] border-r-[#E1E1E8] border-t-0 rounded-t-none shadow-lg'
                : 'border border-[#E1E1E8]',
            )}
          >
            {options.map((option) => (
              <div
                key={option.name}
                className="w-full lg:text-xl hover:bg-brand-color p-4 text-primary-dark hover:rounded-lg hover:bg-gray-100"
                onClick={() => handleClickOption(option)}
              >
                {option.name}
              </div>
            ))}
          </div>
        )}
        {errors && errors[id] && (
          <span className="text-[#E94735] lg:text-xl pl-1">
            {errors[id]?.message || '필수 입력 사항입니다.'}
          </span>
        )}
      </div>
    </div>
  );
}

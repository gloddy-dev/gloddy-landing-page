import { register } from 'module';
import { UseFormRegisterReturn } from 'react-hook-form';

interface TextAreaProps {
  label: string;
  id: string;
  important?: boolean;
  placeholder: string;
  register: UseFormRegisterReturn<string>;
  errors?: {
    [key: string]: {
      message?: string;
    };
  };
}

export default function TextArea({
  label,
  placeholder,
  id,
  important = true,
  register,
  errors,
}: TextAreaProps) {
  return (
    <div className={'flex flex-col w-full mx-auto'}>
      <label htmlFor={id} className="lg:text-xl">
        {label}
        <span
          className={`${important ? 'lg:text-xl text-[#E94735]' : 'hidden'}`}
        >
          *
        </span>
      </label>
      <textarea
        id={id}
        placeholder={placeholder}
        {...register}
        className={
          'min-h-52 border border-[#E1E1E8] focus:border-[#2B2D36] mt-2 lg:text-xl rounded-lg w-full p-4 placeholder:text-[#858899] break-keep'
        }
      ></textarea>
      {errors && errors[id] && (
        <span className="text-[#E94735] lg:text-xl pl-1">
          {errors[id]?.message || '필수 입력 사항입니다.'}
        </span>
      )}
    </div>
  );
}

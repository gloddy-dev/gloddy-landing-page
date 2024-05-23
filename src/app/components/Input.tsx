import {
  FieldValue,
  UseFormRegister,
  UseFormRegisterReturn,
  useForm,
} from 'react-hook-form';

interface InputProps {
  id: string;
  label: string;
  placeholder: string;
  important?: boolean;
  register: UseFormRegisterReturn<string>;
  errors?: {
    [key: string]: {
      message?: string;
    };
  };
}

export default function Input({
  id,
  label,
  placeholder,
  register,
  important = true,
  errors,
}: InputProps) {
  return (
    <div className={'w-full mx-auto'}>
      <label htmlFor={id} className="lg:text-xl">
        {label}
        <span
          className={`${important ? 'lg:text-xl text-[#E94735]' : 'hidden'}`}
        >
          *
        </span>
      </label>
      <input
        type="text"
        id={id}
        {...register}
        className="border border-[#E1E1E8] focus:border-[#2B2D36] mt-2 lg:text-xl rounded-lg w-full p-4 placeholder:text-[#858899]"
        placeholder={placeholder}
      />
      {errors && errors[id] && (
        <span className="text-[#E94735] lg:text-xl pl-1">
          {errors[id]?.message || '필수 입력 사항입니다.'}
        </span>
      )}
    </div>
  );
}

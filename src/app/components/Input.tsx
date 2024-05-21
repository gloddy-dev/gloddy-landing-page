interface InputProps {
  label: string;
  id: string;
  important?: boolean;
  placeholder: string;
}

export default function Input({
  id,
  label,
  placeholder,
  important = true,
}: InputProps) {
  return (
    <div className={'w-full mx-auto'}>
      <label htmlFor={id} className="text-xl">
        {label}
        <span className={`${important ? 'text-xl text-[#E94735]' : 'hidden'}`}>
          *
        </span>
      </label>
      <input
        type="text"
        id={id}
        className="border border-[#E1E1E8] focus:border-[#2B2D36] mt-2 text-xl rounded-lg w-full p-4 placeholder:text-[#858899]"
        placeholder={placeholder}
        required={important}
      />
    </div>
  );
}

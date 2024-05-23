'use client';

import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  message: string;
  size?: 'lg' | 'sm';
  onClick?: () => void;
  type?: 'submit' | 'button';
}

const buttonSize = {
  lg: 'px-5 py-2 lg:text-xl',
  sm: 'px-4 py-[10px] text-sm',
};

export default function Button({
  type = 'button',
  onClick,
  message,
  size = 'lg',
}: ButtonProps) {
  return (
    <button
      type={type}
      className={twMerge(
        'bg-[#1249FC]/[88%] rounded-3xl text-white cursor-pointer',
        buttonSize[size],
      )}
      onClick={onClick}
    >
      {message}
    </button>
  );
}

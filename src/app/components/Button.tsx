import { twMerge } from "tailwind-merge";

interface ButtonProps {
  message: string;
  size?: "lg" | "sm";
}

const buttonSize = {
  lg: "px-5 py-2 text-xl",
  sm: "px-4 py-[10px] text-sm",
};

export default function Button({ message, size = "lg" }: ButtonProps) {
  return (
    <div
      className={twMerge(
        "bg-[#1249FC]/[88%] rounded-3xl text-white",
        buttonSize[size]
      )}
    >
      {message}
    </div>
  );
}

import Image from "next/image";
import Button from "./Button";

export default function Header() {
  return (
    <header className='flex justify-between items-center h-[80px] fixed w-full max-w-7xl lg:mx-auto sm:mx-4 z-20 py-[10px]'>
      <Image src='/gloddy-logo.png' alt='gloddy-logo' width={120} height={44} />
      <Button message='1:1 상담 신청' size='sm' />
    </header>
  );
}

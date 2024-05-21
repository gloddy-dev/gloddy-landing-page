export function Footer() {
  return (
    <footer className={'w-full h-screen max-h-56 bg-[#232426]'}>
      <div
        className={
          'flex flex-col  gap-6 text-[16px] text-white/55 w-full max-w-7xl h-full mx-auto justify-center'
        }
      >
        <div>{'(주)글로디'}</div>
        <div className={'whitespace-pre-wrap'}>
          {
            '사업자 등록번호: 116-18-08199   |   대표: 안기현     공동대표: 양동근\n217, Samuiwon Startup Center, 26 Kyungheedae-ro, Dongdaemun-gu, Seoul, South Korea '
          }
        </div>
      </div>
    </footer>
  );
}

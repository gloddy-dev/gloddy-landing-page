import type { Metadata } from 'next';
import localFont from 'next/font/local';

import './globals.css';

const SansFont = localFont({
  src: 'fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: 'Gloddy Recruiter',
  description: 'Gloddy 외국인 유학생 채용 서비스',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${SansFont.variable} text-[#101011]`}>{children}</body>
    </html>
  );
}

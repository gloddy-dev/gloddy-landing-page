import Header from './components/Header';
import HeroSection from './templates/HeroSection';
import ProblemSection from './templates/ProblemSection';
import MiddleBanner from './templates/MiddleBanner';
import IntroduceSection from './templates/IntroduceSection';
import AdvantageSection from '@/app/templates/AdvantageSection';
import ReviewSection from '@/app/templates/ReviewSection';
import ProcessSection from '@/app/templates/ProcessSection';
import FormSection from '@/app/templates/FormSection';
import { FaqSection } from '@/app/templates/FaqSection';
import { FinalBanner } from '@/app/templates/FinalBanner';
import { Footer } from '@/app/templates/Footer';
import { Suspense } from 'react';

export default function Home() {
  return (
    <main className={'flex flex-col gap-28 lg:gap-0'}>
      <Header />
      <HeroSection />
      <ProblemSection />
      <MiddleBanner />
      <IntroduceSection />
      <AdvantageSection />
      <ProcessSection />
      <ReviewSection />
      <FormSection />
      <FaqSection />
      <div>
        <FinalBanner />
        <Footer />
      </div>
    </main>
  );
}

import Header from './components/Header';
import HeroSection from './templates/HeroSection';
import ProblemSection from './templates/ProblemSection';
import MiddleBanner from './templates/MiddleBanner';
import Introduce from './templates/Introduce';
import Advantage from '@/app/templates/Advantage';
import Review from '@/app/templates/Review';
import Process from '@/app/templates/Process';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ProblemSection />
      <MiddleBanner />
      <Introduce />
      <Advantage />
      <Process />
      <Review />
    </main>
  );
}

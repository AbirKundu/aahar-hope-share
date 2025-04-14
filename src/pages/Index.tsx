
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import MapPreview from '@/components/MapPreview';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
        <MapPreview />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

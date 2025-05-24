
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import FoodGallery from '@/components/FoodGallery';
import FoodListings from '@/components/FoodListings';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Dashboard from '@/components/Dashboard';
import { useAuth } from '@/contexts/AuthContext';

const Index = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        {isAuthenticated && (
          <section className="py-10 bg-white">
            <div className="container mx-auto px-4">
              <Dashboard />
            </div>
          </section>
        )}
        <FoodListings />
        <FoodGallery />
        <HowItWorks />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

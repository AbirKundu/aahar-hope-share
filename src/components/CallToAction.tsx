
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-orange-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <Heart className="h-16 w-16 text-white animate-pulse" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Join Our Mission to End Hunger & Food Waste
        </h2>
        
        <p className="text-orange-100 max-w-2xl mx-auto mb-10 text-lg">
          Whether you have food to share or you're seeking assistance, 
          Aahar brings our community together through the simple act of sharing.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-white text-orange-600 hover:bg-orange-100 rounded-full px-8 py-6 text-lg font-medium">
            <Link to="/share">Share Food Now</Link>
          </Button>
          <Button asChild variant="outline" className="border-white text-orange-600 bg-white hover:bg-orange-50 rounded-full px-8 py-6 text-lg font-medium">
            <Link to="/find">Find Available Food</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

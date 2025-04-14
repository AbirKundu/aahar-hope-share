
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/40 to-red-500/40 z-10" />
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1541123603104-512919d6a96c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')",
          filter: "brightness(0.8)"
        }}
      />
      
      <div className="container mx-auto px-4 z-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}>
            No food should go to waste.<br />
            <span className="text-orange-100">No soul should sleep hungry.</span>
          </h1>
          
          <p className="text-white text-lg md:text-xl mb-8 opacity-90 max-w-2xl">
            Aahar connects people with excess food to those who need it most. Join our mission to reduce food waste and hunger in our community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 rounded-full font-medium text-lg transition-transform hover:scale-105">
              <Link to="/share">Share Food</Link>
            </Button>
            <Button asChild variant="outline" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white px-8 py-6 rounded-full font-medium text-lg transition-transform hover:scale-105">
              <Link to="/find">Find Food</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;


import { Utensils, MapPin, Clock } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Utensils className="w-12 h-12 text-orange-500" />,
      title: "Share Your Food",
      description: "Post details about your excess food, including type, quantity, and for how long it will be available."
    },
    {
      icon: <MapPin className="w-12 h-12 text-orange-500" />,
      title: "Pin Your Location",
      description: "Mark the exact spot where the food can be collected using our interactive map."
    },
    {
      icon: <Clock className="w-12 h-12 text-orange-500" />,
      title: "Connect & Collect",
      description: "Those in need can find your listing and collect the food within the specified time frame."
    }
  ];

  return (
    <section className="py-20 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">A simple 3-step process to share food and reduce waste in our community</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="flex justify-center mb-6">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

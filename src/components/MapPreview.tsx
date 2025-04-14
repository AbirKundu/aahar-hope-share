
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

const MapPreview = () => {
  const [mockLocations] = useState([
    { id: 1, name: "Homemade Dinner", type: "Cooked Meal", availability: "5:00 PM - 8:00 PM", location: "Park Street" },
    { id: 2, name: "Fresh Vegetables", type: "Raw Food", availability: "10:00 AM - 2:00 PM", location: "Central Market" },
    { id: 3, name: "Bakery Items", type: "Bread & Pastries", availability: "3:00 PM - 7:00 PM", location: "Baker Avenue" },
  ]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Available Food Near You</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See what's available in your area right now
          </p>
        </div>
        
        <div className="mb-8 relative h-80 bg-gray-200 rounded-xl overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-lg z-10">
              <MapPin className="mx-auto h-8 w-8 text-orange-500 mb-2" />
              <p className="text-gray-700 font-medium">
                Map view will show available food locations
              </p>
              <Button className="mt-4 bg-orange-500 hover:bg-orange-600">
                View Full Map
              </Button>
            </div>
          </div>
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-50" 
            style={{ 
              backgroundImage: "url('https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x400&maptype=roadmap')",
            }}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockLocations.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow overflow-hidden group">
              <div className="h-48 bg-orange-100 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                  <span className="text-white font-medium">{item.name}</span>
                  <span className="text-orange-100 text-sm">{item.type}</span>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Available:</p>
                    <p className="font-medium">{item.availability}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500 text-sm mb-1">Location:</p>
                    <p className="font-medium">{item.location}</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-2 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-colors">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button asChild className="bg-orange-500 hover:bg-orange-600">
            <a href="/find">See All Available Food</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MapPreview;

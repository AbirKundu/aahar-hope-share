
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Search, MapPin, Clock, Filter } from 'lucide-react';

const FindFood = () => {
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map');
  const mockFoodItems = [
    {
      id: 1,
      name: "Homemade Dinner",
      description: "Freshly cooked vegetable curry and rice, enough for 4 people",
      location: "123 Park Street, Mumbai",
      distance: "0.8 km",
      availableUntil: "8:00 PM",
      type: "Vegetarian"
    },
    {
      id: 2,
      name: "Bakery Leftovers",
      description: "Assorted bread, pastries and cookies from today's baking",
      location: "45 Baker Avenue, Mumbai",
      distance: "1.2 km",
      availableUntil: "6:30 PM",
      type: "Vegetarian"
    },
    {
      id: 3,
      name: "Restaurant Extras",
      description: "Packaged meals from our lunch service, includes rice and curry dishes",
      location: "78 Main Road, Mumbai",
      distance: "2.5 km",
      availableUntil: "9:00 PM",
      type: "Mixed"
    },
    {
      id: 4,
      name: "Fresh Fruits",
      description: "Oranges, apples and bananas that won't be sold today",
      location: "34 Market Street, Mumbai",
      distance: "3.1 km",
      availableUntil: "7:15 PM",
      type: "Vegan"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-16 flex-grow">
        <div className="bg-orange-50 py-6">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center flex-wrap gap-4">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Find Available Food</h1>
              
              <div className="flex space-x-2">
                <Button 
                  variant={viewMode === 'map' ? 'default' : 'outline'} 
                  onClick={() => setViewMode('map')}
                  className={viewMode === 'map' ? 'bg-orange-500 hover:bg-orange-600' : ''}
                >
                  Map View
                </Button>
                <Button 
                  variant={viewMode === 'list' ? 'default' : 'outline'} 
                  onClick={() => setViewMode('list')}
                  className={viewMode === 'list' ? 'bg-orange-500 hover:bg-orange-600' : ''}
                >
                  List View
                </Button>
              </div>
            </div>

            <div className="mt-4 flex flex-col md:flex-row gap-4">
              <div className="flex-grow relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input className="pl-10" placeholder="Search by food type, location, etc." />
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  <span>Filter</span>
                </Button>
                <Button className="bg-orange-500 hover:bg-orange-600">Search</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {viewMode === 'map' ? (
            <div className="bg-gray-200 rounded-lg h-[600px] flex items-center justify-center">
              <div className="text-center p-8 bg-white/90 backdrop-blur-sm rounded-lg">
                <MapPin className="h-10 w-10 text-orange-500 mx-auto mb-3" />
                <h3 className="text-xl font-medium mb-2">Map View</h3>
                <p className="text-gray-600 mb-4">This will display an interactive map showing all available food locations near you.</p>
                <Button className="bg-orange-500 hover:bg-orange-600">Use My Location</Button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockFoodItems.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all">
                  <div className="h-40 bg-orange-100"></div>
                  <CardContent className="p-5">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                        {item.type}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm my-2">{item.description}</p>
                    
                    <div className="flex items-center gap-1 text-sm text-gray-500 mt-3">
                      <MapPin className="h-4 w-4 text-orange-500" />
                      <span>{item.location}</span>
                      <span className="ml-auto font-medium">{item.distance}</span>
                    </div>
                    
                    <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                      <Clock className="h-4 w-4 text-orange-500" />
                      <span>Available until {item.availableUntil}</span>
                    </div>
                    
                    <Button className="w-full mt-4 bg-orange-500 hover:bg-orange-600">
                      Get Directions
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FindFood;

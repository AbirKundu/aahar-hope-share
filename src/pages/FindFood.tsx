
import { useState, useEffect, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Search, MapPin, Clock, Filter } from 'lucide-react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const FindFood = () => {
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map');
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');

  const mockFoodItems = [
    {
      id: 1,
      name: "Homemade Vegetable Curry & Rice",
      description: "Freshly cooked vegetable curry and rice, enough for 4 people",
      location: "123 Park Street, Mumbai",
      distance: "0.8 km",
      availableUntil: "8:00 PM",
      type: "Vegetarian",
      coordinates: [72.8777, 19.0760] as [number, number], // Mumbai coordinates with type assertion
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80"
    },
    {
      id: 2,
      name: "Assorted Fresh Bakery Items",
      description: "Assorted bread, pastries and cookies from today's baking",
      location: "45 Baker Avenue, Mumbai",
      distance: "1.2 km",
      availableUntil: "6:30 PM",
      type: "Vegetarian",
      coordinates: [72.8856, 19.0822] as [number, number], // Slight offset from Mumbai with type assertion
      image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80"
    },
    {
      id: 3,
      name: "Restaurant Lunch Extras",
      description: "Packaged meals from our lunch service, includes rice and curry dishes",
      location: "78 Main Road, Mumbai",
      distance: "2.5 km",
      availableUntil: "9:00 PM",
      type: "Mixed",
      coordinates: [72.8900, 19.0700] as [number, number], // Type assertion
      image: "https://images.unsplash.com/photo-1567337710282-00832b415979?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1930&q=80"
    },
    {
      id: 4,
      name: "Fresh Fruits Assortment",
      description: "Oranges, apples and bananas that won't be sold today",
      location: "34 Market Street, Mumbai",
      distance: "3.1 km",
      availableUntil: "7:15 PM",
      type: "Vegan",
      coordinates: [72.8750, 19.0650] as [number, number], // Type assertion
      image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 5,
      name: "Home-cooked Biryani",
      description: "Delicious vegetable biryani, freshly prepared today",
      location: "56 Garden Road, Mumbai",
      distance: "1.8 km",
      availableUntil: "8:30 PM",
      type: "Vegetarian",
      coordinates: [72.8650, 19.0800] as [number, number], // Type assertion
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 6,
      name: "Mixed Vegetables",
      description: "Fresh vegetables from our local farm, surplus from today's harvest",
      location: "90 Farm Lane, Mumbai",
      distance: "4.2 km",
      availableUntil: "6:00 PM",
      type: "Vegan",
      coordinates: [72.9000, 19.0900] as [number, number], // Type assertion
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1184&q=80"
    }
  ];

  useEffect(() => {
    if (viewMode === 'map' && mapContainer.current && !map.current) {
      if (!mapboxToken) return;
      
      mapboxgl.accessToken = mapboxToken;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [72.8777, 19.0760] as [number, number], // Default to Mumbai with type assertion
        zoom: 12
      });

      // Add navigation controls
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
      
      // Add markers for each food item
      mockFoodItems.forEach(item => {
        const el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundImage = 'url(https://img.icons8.com/color/48/000000/marker.png)';
        el.style.width = '32px';
        el.style.height = '32px';
        el.style.backgroundSize = '100%';
        
        new mapboxgl.Marker(el)
          .setLngLat(item.coordinates)
          .setPopup(new mapboxgl.Popup({ offset: 25 })
            .setHTML(`<h3>${item.name}</h3><p>${item.description}</p>`))
          .addTo(map.current);
      });
      
      return () => {
        if (map.current) {
          map.current.remove();
          map.current = null;
        }
      };
    }
  }, [viewMode, mapboxToken]);

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
            <div className="bg-gray-200 rounded-lg h-[600px] flex items-center justify-center relative">
              {!mapboxToken ? (
                <div className="text-center p-8 bg-white/90 backdrop-blur-sm rounded-lg z-10 absolute">
                  <MapPin className="h-10 w-10 text-orange-500 mx-auto mb-3" />
                  <h3 className="text-xl font-medium mb-2">Enter Mapbox Token</h3>
                  <p className="text-gray-600 mb-4">Please enter your Mapbox access token to view the map:</p>
                  <Input 
                    className="mb-4" 
                    placeholder="Enter Mapbox token..." 
                    value={mapboxToken}
                    onChange={(e) => setMapboxToken(e.target.value)}
                  />
                  <Button className="bg-orange-500 hover:bg-orange-600">Set Token</Button>
                </div>
              ) : null}
              <div 
                ref={mapContainer} 
                className="w-full h-full rounded-lg"
                style={{ display: mapboxToken ? 'block' : 'none' }}
              />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockFoodItems.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all">
                  <div className="h-48 bg-orange-100 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
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

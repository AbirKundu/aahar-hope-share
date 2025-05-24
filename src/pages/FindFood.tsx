
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Users, Search, Filter } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L, { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Define a custom marker icon
const customMarkerIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

interface FoodItem {
  id: number;
  title: string;
  type: string;
  availableTime: string;
  location: string;
}

const FindFood = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  // Mock data for available food
  const availableFood: FoodItem[] = [
    {
      id: 1,
      title: "Homemade Dinner",
      type: "Cooked Meal",
      availableTime: "5:00 PM - 8:00 PM",
      location: "Park Street"
    },
    {
      id: 2,
      title: "Fresh Vegetables",
      type: "Raw Food",
      availableTime: "10:00 AM - 2:00 PM",
      location: "Central Market"
    },
    {
      id: 3,
      title: "Bakery Items",
      type: "Bread & Pastries",
      availableTime: "3:00 PM - 7:00 PM",
      location: "Baker Avenue"
    },
  ];

  // Filtered food based on search query and filter type
  const filteredFood = availableFood.filter(food => {
    const matchesSearch = food.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      food.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === 'all' || food.type === filterType;
    return matchesSearch && matchesType;
  });

  // Bangladesh center coordinates (Dhaka)
  const bangladeshCenter: LatLngExpression = [23.8103, 90.4125];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-white shadow-md py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-gray-800">Find Available Food</h1>
        </div>
      </header>

      {/* Search and Filters Section */}
      <section className="py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search for food or locations..."
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-orange-200"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="relative">
            <select
              className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option value="all">All Types</option>
              <option value="Cooked Meal">Cooked Meal</option>
              <option value="Raw Food">Raw Food</option>
              <option value="Bread & Pastries">Bread & Pastries</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <Filter className="h-5 w-5" />
            </div>
          </div>
        </div>
      </section>

      {/* Food Listings Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Available Food</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFood.map(food => (
              <Card key={food.id}>
                <CardHeader>
                  <CardTitle>{food.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-gray-600 text-sm mb-2">
                    <Clock className="h-4 w-4 mr-2" />
                    Available: {food.availableTime}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="h-4 w-4 mr-2" />
                    Location: {food.location}
                  </div>
                  <Button className="mt-4 w-full">View Details</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section - Bangladesh OpenStreetMap */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Food Locations in Bangladesh</h2>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <MapContainer
              center={bangladeshCenter}
              zoom={7}
              style={{ height: '400px', width: '100%' }}
              className="z-10"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
            </MapContainer>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FindFood;


import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, ChefHat } from 'lucide-react';

const FoodListings = () => {
  const availableFood = [
    {
      id: 1,
      title: "Homemade Dinner",
      type: "Cooked Meal",
      description: "Fresh home-cooked Indian meal with rice, dal, and vegetables",
      availableTime: "5:00 PM - 8:00 PM",
      location: "Park Street",
      image: "https://images.unsplash.com/photo-1567337710282-00832b415979?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      donor: "Priya's Kitchen"
    },
    {
      id: 2,
      title: "Fresh Vegetables",
      type: "Raw Food",
      description: "Organic vegetables including tomatoes, onions, and leafy greens",
      availableTime: "10:00 AM - 2:00 PM",
      location: "Central Market",
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      donor: "Green Farm Co-op"
    },
    {
      id: 3,
      title: "Bakery Items",
      type: "Bread & Pastries",
      description: "Fresh bread, croissants, and pastries from morning batch",
      availableTime: "3:00 PM - 7:00 PM",
      location: "Baker Avenue",
      image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      donor: "Sunshine Bakery"
    },
    {
      id: 4,
      title: "Pizza Slices",
      type: "Cooked Meal",
      description: "Leftover pizza from lunch service - margherita and vegetable",
      availableTime: "2:00 PM - 5:00 PM",
      location: "Food Court Mall",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      donor: "Tony's Pizzeria"
    },
    {
      id: 5,
      title: "Traditional Biryani",
      type: "Cooked Meal",
      description: "Vegetable biryani with raita and pickle",
      availableTime: "7:00 PM - 9:00 PM",
      location: "Spice Street",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      donor: "Spice Garden"
    },
    {
      id: 6,
      title: "Fresh Fruit Basket",
      type: "Raw Food",
      description: "Seasonal fruits including apples, bananas, and oranges",
      availableTime: "9:00 AM - 6:00 PM",
      location: "Community Center",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      donor: "Fruit Vendors Association"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Available Food Near You
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Fresh food available for pickup right now in your area
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {availableFood.map((food) => (
            <Card key={food.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={food.image} 
                  alt={food.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{food.title}</CardTitle>
                  <span className="text-sm bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
                    {food.type}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{food.description}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2 text-orange-500" />
                    Available: {food.availableTime}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 text-orange-500" />
                    Location: {food.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <ChefHat className="w-4 h-4 mr-2 text-orange-500" />
                    By: {food.donor}
                  </div>
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="px-8 py-2 border-orange-600 text-orange-600 hover:bg-orange-50">
            See All Available Food
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FoodListings;

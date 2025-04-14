
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Clock, MapPin, Upload, Utensils } from 'lucide-react';

const ShareFood = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Share Your Extra Food</h1>
              <p className="text-gray-600">
                Fill out the form below to share your excess food with those in need. Your generosity can make a big difference.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Food Details</CardTitle>
                <CardDescription>
                  Please provide accurate information to help others find your food donation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="foodName">Food Name</Label>
                    <div className="flex">
                      <div className="bg-orange-100 p-2 flex items-center rounded-l-md border border-r-0 border-input">
                        <Utensils className="h-5 w-5 text-orange-500" />
                      </div>
                      <Input id="foodName" placeholder="e.g., Homemade Dinner, Bakery Items, etc." className="rounded-l-none" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea 
                      id="description" 
                      placeholder="Please describe what food you're sharing and for how many people it would be suitable."
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="quantity">Quantity (Servings)</Label>
                      <Input id="quantity" type="number" min="1" placeholder="e.g., 4" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="type">Food Type</Label>
                      <Input id="type" placeholder="e.g., Vegetarian, Non-veg, Vegan" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="image">Upload Image (Optional)</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center hover:border-orange-300 transition-colors cursor-pointer">
                      <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                      <p className="text-sm text-gray-500">
                        Drag & drop an image here, or click to browse
                      </p>
                      <input id="image" type="file" className="hidden" accept="image/*" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Pickup Location</Label>
                    <div className="flex">
                      <div className="bg-orange-100 p-2 flex items-center rounded-l-md border border-r-0 border-input">
                        <MapPin className="h-5 w-5 text-orange-500" />
                      </div>
                      <Input id="location" placeholder="Enter a location or use current location" className="rounded-l-none" />
                    </div>
                    <div className="h-40 bg-gray-200 rounded-md mt-2">
                      {/* Map placeholder */}
                      <div className="w-full h-full flex items-center justify-center">
                        <p className="text-gray-500">Map will be displayed here</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="availableFrom">Available From</Label>
                      <div className="flex">
                        <div className="bg-orange-100 p-2 flex items-center rounded-l-md border border-r-0 border-input">
                          <Clock className="h-5 w-5 text-orange-500" />
                        </div>
                        <Input id="availableFrom" type="time" className="rounded-l-none" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="availableUntil">Available Until</Label>
                      <div className="flex">
                        <div className="bg-orange-100 p-2 flex items-center rounded-l-md border border-r-0 border-input">
                          <Clock className="h-5 w-5 text-orange-500" />
                        </div>
                        <Input id="availableUntil" type="time" className="rounded-l-none" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact">Contact Information (Optional)</Label>
                    <Input id="contact" placeholder="Phone number or other contact information" />
                    <p className="text-xs text-gray-500">This will be shared with people who want to collect the food.</p>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button className="bg-orange-500 hover:bg-orange-600">Share Food</Button>
              </CardFooter>
            </Card>

            <div className="mt-10 text-center">
              <p className="text-sm text-gray-500">
                By sharing food, you agree to our <a href="#" className="text-orange-500 hover:underline">Terms of Service</a> and <a href="#" className="text-orange-500 hover:underline">Community Guidelines</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShareFood;

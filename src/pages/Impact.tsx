
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock, Calendar, MapPin, Users, TrendingUp, Award, Leaf, BarChart, Gift, Heart, Globe } from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart as RechartBar,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';

const Impact = () => {
  const foodDistributionData = [
    { month: 'Jan', meals: 1200 },
    { month: 'Feb', meals: 1900 },
    { month: 'Mar', meals: 2400 },
    { month: 'Apr', meals: 3200 },
    { month: 'May', meals: 4000 },
    { month: 'Jun', meals: 4800 },
    { month: 'Jul', meals: 5500 },
    { month: 'Aug', meals: 6200 },
    { month: 'Sep', meals: 7100 },
    { month: 'Oct', meals: 7800 },
    { month: 'Nov', meals: 8500 },
    { month: 'Dec', meals: 9200 },
  ];

  const foodTypeData = [
    { name: 'Cooked Meals', value: 45 },
    { name: 'Fresh Produce', value: 25 },
    { name: 'Bakery Items', value: 15 },
    { name: 'Packaged Foods', value: 15 },
  ];

  const environmentalImpactData = [
    { name: 'Water Saved (liters)', value: 980000 },
    { name: 'CO2 Emissions Prevented (kg)', value: 45000 },
    { name: 'Land Use Avoided (sqm)', value: 12000 },
  ];

  const locationData = [
    { name: 'Dhaka', value: 45 },
    { name: 'Chittagong', value: 25 },
    { name: 'Sylhet', value: 15 },
    { name: 'Rajshahi', value: 15 },
  ];

  const COLORS = ['#FF8042', '#00C49F', '#FFBB28', '#0088FE'];

  const impactMilestones = [
    {
      date: 'June 2022',
      title: 'Aahar Launch',
      description: 'Our journey began in Dhaka with 10 dedicated volunteers.'
    },
    {
      date: 'September 2022',
      title: '1,000 Meals Delivered',
      description: 'Reached our first major milestone of 1,000 meals delivered to those in need.'
    },
    {
      date: 'December 2022',
      title: 'Expanded to Chittagong',
      description: 'Expanded operations to Chittagong with 25 new volunteers joining our cause.'
    },
    {
      date: 'March 2023',
      title: 'Corporate Partnerships',
      description: 'Partnered with 5 major restaurant chains to reduce food waste.'
    },
    {
      date: 'August 2023',
      title: '10,000 Meals Milestone',
      description: '10,000 meals delivered across 2 major cities in Bangladesh.'
    },
    {
      date: 'January 2024',
      title: 'Mobile App Launch',
      description: 'Launched our mobile app to make food donation and collection easier.'
    },
    {
      date: 'May 2024',
      title: 'National Recognition',
      description: 'Received national award for contribution to reducing hunger and food waste.'
    }
  ];

  const impactStories = [
    {
      name: "Community Center Partnership",
      location: "Mirpur, Dhaka",
      description: "Our partnership with the Mirpur Community Center has allowed us to regularly provide meals to over 100 homeless individuals each week.",
      stats: "5,200+ meals delivered per year"
    },
    {
      name: "School Lunch Program",
      location: "Chittagong",
      description: "By redirecting surplus restaurant food to underfunded schools, we've helped ensure that 450 children receive a nutritious lunch each day.",
      stats: "85,000+ school lunches provided"
    },
    {
      name: "Disaster Relief Support",
      location: "Sylhet Region",
      description: "During the 2023 floods, our volunteer network quickly mobilized to provide emergency food supplies to affected areas.",
      stats: "12,000+ emergency meals distributed"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="bg-orange-50 py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">Our Impact</h1>
            <p className="mt-4 text-center text-gray-600 max-w-3xl mx-auto">
              Through the dedication of our volunteers, donors, and community partners, 
              we've made significant strides in reducing food waste and hunger in Bangladesh.
            </p>
          </div>
        </div>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-10">
              <Tabs defaultValue="impact">
                <div className="flex justify-center mb-6">
                  <TabsList>
                    <TabsTrigger value="impact">
                      <Heart className="h-4 w-4 mr-2" />
                      Social Impact
                    </TabsTrigger>
                    <TabsTrigger value="environmental">
                      <Leaf className="h-4 w-4 mr-2" />
                      Environmental Impact
                    </TabsTrigger>
                    <TabsTrigger value="stories">
                      <Users className="h-4 w-4 mr-2" />
                      Impact Stories
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="impact">
                  <h2 className="text-2xl font-bold text-center mb-10">Food Distribution Impact</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-4xl font-bold text-orange-500">9,200+</CardTitle>
                        <CardDescription>Meals Served</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 text-sm">Nutritious meals delivered to those in need</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-4xl font-bold text-orange-500">150+</CardTitle>
                        <CardDescription>Regular Donors</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 text-sm">Restaurants, homes, and businesses donating regularly</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-4xl font-bold text-orange-500">50+</CardTitle>
                        <CardDescription>Dedicated Volunteers</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 text-sm">Working tirelessly to collect and distribute food</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-4xl font-bold text-orange-500">4,600+</CardTitle>
                        <CardDescription>Kg Food Saved</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 text-sm">Food waste diverted from landfills</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <TrendingUp className="h-5 w-5 mr-2 text-orange-500" />
                          Monthly Meals Distribution
                        </CardTitle>
                        <CardDescription>Growth in meals served over the past year</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-80">
                          <ResponsiveContainer width="100%" height="100%">
                            <LineChart
                              data={foodDistributionData}
                              margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                              }}
                            >
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="month" />
                              <YAxis />
                              <Tooltip />
                              <Line 
                                type="monotone" 
                                dataKey="meals" 
                                stroke="#ff7846" 
                                activeDot={{ r: 8 }} 
                                strokeWidth={2}
                              />
                            </LineChart>
                          </ResponsiveContainer>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Award className="h-5 w-5 mr-2 text-orange-500" />
                          Food Type Distribution
                        </CardTitle>
                        <CardDescription>Breakdown of food types donated</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-80">
                          <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                              <Pie
                                data={foodTypeData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                              >
                                {foodTypeData.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                              </Pie>
                              <Legend />
                              <Tooltip />
                            </PieChart>
                          </ResponsiveContainer>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="environmental">
                  <h2 className="text-2xl font-bold text-center mb-10">Environmental Impact</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <Card className="bg-green-50">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-4xl font-bold text-green-600">980K</CardTitle>
                        <CardDescription>Liters of Water Saved</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 text-sm">By preventing food waste, we save the water used in production</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-green-50">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-4xl font-bold text-green-600">45K</CardTitle>
                        <CardDescription>kg CO₂ Emissions Prevented</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 text-sm">Reduced greenhouse gas emissions from landfill food waste</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-green-50">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-4xl font-bold text-green-600">12K</CardTitle>
                        <CardDescription>sqm Land Use Avoided</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 text-sm">By utilizing existing food, less land is needed for production</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="max-w-4xl mx-auto">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Leaf className="h-5 w-5 mr-2 text-green-500" />
                          Environmental Savings
                        </CardTitle>
                        <CardDescription>Resources saved through food waste reduction</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-80">
                          <ResponsiveContainer width="100%" height="100%">
                            <RechartBar
                              data={environmentalImpactData}
                              margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                              }}
                            >
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="name" />
                              <YAxis />
                              <Tooltip />
                              <Bar dataKey="value" fill="#4ade80" />
                            </RechartBar>
                          </ResponsiveContainer>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <div className="mt-8 bg-green-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <Globe className="h-6 w-6 mr-2 text-green-600" />
                        Sustainable Development Goals Impact
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="font-bold mb-2 text-green-700">SDG 2</div>
                          <div className="text-sm">Zero Hunger</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="font-bold mb-2 text-green-700">SDG 11</div>
                          <div className="text-sm">Sustainable Cities & Communities</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="font-bold mb-2 text-green-700">SDG 12</div>
                          <div className="text-sm">Responsible Consumption & Production</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="font-bold mb-2 text-green-700">SDG 13</div>
                          <div className="text-sm">Climate Action</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="font-bold mb-2 text-green-700">SDG 17</div>
                          <div className="text-sm">Partnerships for the Goals</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="stories">
                  <h2 className="text-2xl font-bold text-center mb-10">Impact Stories</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {impactStories.map((story, index) => (
                      <Card key={index} className="overflow-hidden">
                        <div className="h-40 bg-orange-100">
                          <div className="h-full w-full flex items-center justify-center">
                            <Heart className="h-16 w-16 text-orange-300" />
                          </div>
                        </div>
                        <CardHeader>
                          <CardTitle>{story.name}</CardTitle>
                          <CardDescription className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1 text-orange-500" />
                            {story.location}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 mb-4">{story.description}</p>
                          <div className="bg-orange-50 p-3 rounded-md border border-orange-100">
                            <p className="text-sm font-semibold text-orange-700">{story.stats}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  <div className="text-center mt-8">
                    <h3 className="text-lg font-semibold mb-4">How we're distributed across Bangladesh</h3>
                    <div className="max-w-md mx-auto">
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={locationData}
                              cx="50%"
                              cy="50%"
                              labelLine={false}
                              outerRadius={80}
                              fill="#8884d8"
                              dataKey="value"
                              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            >
                              {locationData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Pie>
                            <Legend />
                            <Tooltip />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-10 text-center">
                    <Button className="bg-orange-500 hover:bg-orange-600">
                      <Gift className="mr-2 h-4 w-4" />
                      Support Our Cause
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-10">Our Journey</h2>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-200"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {impactMilestones.map((milestone, index) => (
                  <div 
                    key={index} 
                    className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className="md:w-1/2"></div>
                    <div className="hidden md:flex items-center justify-center">
                      <div className="bg-orange-500 rounded-full h-4 w-4 z-10"></div>
                    </div>
                    <div className="md:w-1/2 md:px-8">
                      <Card className="relative md:mx-6">
                        <CardHeader>
                          <div className="flex items-center">
                            <Calendar className="h-5 w-5 text-orange-500 mr-2" />
                            <span className="text-orange-500 font-medium">{milestone.date}</span>
                          </div>
                          <CardTitle className="mt-2">{milestone.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <h3 className="text-xl font-semibold mb-4">Our Team</h3>
              <p className="max-w-2xl mx-auto text-gray-600 mb-8">
                Meet the dedicated individuals working tirelessly to make our mission a reality.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                <div className="text-center">
                  <div className="h-32 w-32 mx-auto rounded-full bg-orange-100 flex items-center justify-center mb-3">
                    <User className="h-16 w-16 text-orange-300" />
                  </div>
                  <h4 className="font-medium">Mizanur Rahman Tazim</h4>
                  <p className="text-sm text-gray-500">Director</p>
                </div>
                
                <div className="text-center">
                  <div className="h-32 w-32 mx-auto rounded-full bg-orange-100 flex items-center justify-center mb-3">
                    <User className="h-16 w-16 text-orange-300" />
                  </div>
                  <h4 className="font-medium">Mostafa Tahsin Ekleel</h4>
                  <p className="text-sm text-gray-500">Co-Founder</p>
                </div>
                
                <div className="text-center">
                  <div className="h-32 w-32 mx-auto rounded-full bg-orange-100 flex items-center justify-center mb-3">
                    <User className="h-16 w-16 text-orange-300" />
                  </div>
                  <h4 className="font-medium">Safwat Afreen Bushra</h4>
                  <p className="text-sm text-gray-500">Operations Manager</p>
                </div>
                
                <div className="text-center">
                  <div className="h-32 w-32 mx-auto rounded-full bg-orange-100 flex items-center justify-center mb-3">
                    <User className="h-16 w-16 text-orange-300" />
                  </div>
                  <h4 className="font-medium">Abir Kundu</h4>
                  <p className="text-sm text-gray-500">Technology Lead</p>
                </div>
                
                <div className="text-center">
                  <div className="h-32 w-32 mx-auto rounded-full bg-orange-100 flex items-center justify-center mb-3">
                    <User className="h-16 w-16 text-orange-300" />
                  </div>
                  <h4 className="font-medium">Maishan Nadis Sindeed</h4>
                  <p className="text-sm text-gray-500">Outreach Coordinator</p>
                </div>
                
                <div className="text-center">
                  <div className="h-32 w-32 mx-auto rounded-full bg-orange-100 flex items-center justify-center mb-3">
                    <User className="h-16 w-16 text-orange-300" />
                  </div>
                  <h4 className="font-medium">Proma Barua</h4>
                  <p className="text-sm text-gray-500">Financial Manager</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Impact;

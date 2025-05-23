
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Calendar, MapPin, Users, TrendingUp, Award } from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
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

  const COLORS = ['#FF8042', '#00C49F', '#FFBB28', '#0088FE'];

  const impactMilestones = [
    {
      date: 'June 2022',
      title: 'Aahar Launch',
      description: 'Our journey began in Mumbai with 10 dedicated volunteers.'
    },
    {
      date: 'September 2022',
      title: '1,000 Meals Delivered',
      description: 'Reached our first major milestone of 1,000 meals delivered to those in need.'
    },
    {
      date: 'December 2022',
      title: 'Expanded to Delhi',
      description: 'Expanded operations to Delhi with 25 new volunteers joining our cause.'
    },
    {
      date: 'March 2023',
      title: 'Corporate Partnerships',
      description: 'Partnered with 5 major restaurant chains to reduce food waste.'
    },
    {
      date: 'August 2023',
      title: '10,000 Meals Milestone',
      description: '10,000 meals delivered across 2 major cities in India.'
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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="bg-orange-50 py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">Our Impact</h1>
            <p className="mt-4 text-center text-gray-600 max-w-3xl mx-auto">
              Through the dedication of our volunteers, donors, and community partners, 
              we've made significant strides in reducing food waste and hunger in India.
            </p>
          </div>
        </div>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
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
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Impact;


import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, UserCheck, Award, AlertCircle, CheckCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Volunteer = () => {
  const { user, isAuthenticated, hasRole } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    experience: '',
    availability: '',
    reason: ''
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application submitted!",
      description: "We'll review your application and get back to you soon.",
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      experience: '',
      availability: '',
      reason: ''
    });
  };

  // Sample volunteer tasks for demonstration
  const volunteerTasks = [
    {
      id: 1,
      title: "Food Collection",
      location: "Restaurant Row, Gulshan",
      date: "June 5, 2024",
      time: "5:00 PM - 6:30 PM",
      status: "Available",
      volunteers: 0,
      requiredVolunteers: 2,
    },
    {
      id: 2,
      title: "Food Distribution",
      location: "Community Center, Dhanmondi",
      date: "June 6, 2024",
      time: "12:00 PM - 2:00 PM",
      status: "Available",
      volunteers: 1,
      requiredVolunteers: 4,
    },
    {
      id: 3,
      title: "Packaging Assistance",
      location: "Central Kitchen, Mohakhali",
      date: "June 7, 2024",
      time: "9:00 AM - 11:00 AM",
      status: "Full",
      volunteers: 3,
      requiredVolunteers: 3,
    }
  ];

  // Sample training materials for volunteers
  const trainingMaterials = [
    {
      id: 1,
      title: "Food Safety Basics",
      description: "Learn the fundamentals of food safety, handling, and storage.",
      duration: "30 min",
      type: "Video",
      required: true,
    },
    {
      id: 2,
      title: "Volunteer Guidelines",
      description: "Essential information for all volunteers to ensure quality service.",
      duration: "15 min",
      type: "Document",
      required: true,
    },
    {
      id: 3,
      title: "Using the Mobile App",
      description: "How to use our mobile application for task management and reporting.",
      duration: "20 min",
      type: "Interactive",
      required: false,
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <div className="bg-orange-50 py-10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Join Our Volunteer Network</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Together, we can make a significant impact on reducing food waste and hunger in our community.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-10">
          {isAuthenticated && hasRole('volunteer') ? (
            <Tabs defaultValue="available-tasks">
              <TabsList className="mb-8">
                <TabsTrigger value="available-tasks">Available Tasks</TabsTrigger>
                <TabsTrigger value="my-schedule">My Schedule</TabsTrigger>
                <TabsTrigger value="training">Training</TabsTrigger>
              </TabsList>
              
              <TabsContent value="available-tasks">
                <h2 className="text-2xl font-bold mb-6">Available Volunteer Opportunities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {volunteerTasks.map(task => (
                    <Card key={task.id} className={task.status === "Full" ? "opacity-70" : ""}>
                      <CardHeader>
                        <CardTitle>{task.title}</CardTitle>
                        <CardDescription>{task.status === "Available" ? 
                          `${task.volunteers}/${task.requiredVolunteers} volunteers assigned` : 
                          "This opportunity is full"}
                        </CardDescription>
                        <Badge className={task.status === "Available" ? "bg-green-500" : "bg-gray-500"}>
                          {task.status}
                        </Badge>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 text-orange-500 mr-2" />
                            <span>{task.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 text-orange-500 mr-2" />
                            <span>{task.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 text-orange-500 mr-2" />
                            <span>{task.time}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button 
                          disabled={task.status === "Full"} 
                          className="w-full bg-orange-500 hover:bg-orange-600"
                        >
                          Sign Up
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="my-schedule">
                <h2 className="text-2xl font-bold mb-6">My Volunteer Schedule</h2>
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Tasks</CardTitle>
                    <CardDescription>Your confirmed volunteer activities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 rounded-md bg-orange-50 border border-orange-100">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium">Food Distribution</h3>
                            <div className="flex items-center text-sm text-gray-600 mt-1">
                              <Calendar className="h-4 w-4 text-orange-500 mr-1" />
                              <span>June 6, 2024</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-600 mt-1">
                              <Clock className="h-4 w-4 text-orange-500 mr-1" />
                              <span>12:00 PM - 2:00 PM</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-600 mt-1">
                              <MapPin className="h-4 w-4 text-orange-500 mr-1" />
                              <span>Community Center, Dhanmondi</span>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">Cancel</Button>
                        </div>
                      </div>
                      
                      <h3 className="font-semibold mt-6 mb-2">Completed Tasks</h3>
                      <div className="p-4 rounded-md bg-gray-100 border border-gray-200">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium">Food Collection</h3>
                            <div className="flex items-center text-sm text-gray-600 mt-1">
                              <Calendar className="h-4 w-4 text-orange-500 mr-1" />
                              <span>May 30, 2024</span>
                            </div>
                            <div className="flex items-center text-sm text-green-600 mt-1">
                              <CheckCircle className="h-4 w-4 mr-1" />
                              <span>Completed</span>
                            </div>
                          </div>
                          <Badge className="bg-gray-500">+20 points</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="training">
                <h2 className="text-2xl font-bold mb-6">Volunteer Training Materials</h2>
                <div className="space-y-4">
                  {trainingMaterials.map(material => (
                    <Card key={material.id}>
                      <CardHeader>
                        <div className="flex justify-between">
                          <CardTitle>{material.title}</CardTitle>
                          {material.required && (
                            <Badge className="bg-blue-500">Required</Badge>
                          )}
                        </div>
                        <CardDescription>{material.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Clock className="h-4 w-4 text-orange-500" />
                          <span>{material.duration}</span>
                          <span className="mx-2">•</span>
                          <span>{material.type}</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="bg-orange-500 hover:bg-orange-600">
                          Start Training
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          ) : (
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Become a Volunteer</h2>
              <Card>
                <CardHeader>
                  <CardTitle>Volunteer Application</CardTitle>
                  <CardDescription>
                    Complete this form to join our volunteer network. We'll review your application and get back to you soon.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                        <Input 
                          id="name" 
                          name="name" 
                          value={formData.name} 
                          onChange={handleChange} 
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          value={formData.email} 
                          onChange={handleChange} 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                        <Input 
                          id="phone" 
                          name="phone" 
                          value={formData.phone} 
                          onChange={handleChange} 
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="address" className="text-sm font-medium">Address</label>
                        <Input 
                          id="address" 
                          name="address" 
                          value={formData.address} 
                          onChange={handleChange} 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="experience" className="text-sm font-medium">Previous Volunteer Experience</label>
                      <Textarea 
                        id="experience" 
                        name="experience" 
                        value={formData.experience} 
                        onChange={handleChange} 
                        rows={3}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="availability" className="text-sm font-medium">Availability</label>
                      <Input 
                        id="availability" 
                        name="availability" 
                        placeholder="e.g., Weekends, Evenings, etc." 
                        value={formData.availability} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="reason" className="text-sm font-medium">Why do you want to volunteer with us?</label>
                      <Textarea 
                        id="reason" 
                        name="reason" 
                        value={formData.reason} 
                        onChange={handleChange} 
                        rows={4}
                        required 
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                      Submit Application
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Volunteer;

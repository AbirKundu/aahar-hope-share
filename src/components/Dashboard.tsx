
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAuth } from '@/contexts/AuthContext';
import { MapPin, Bell, Award, Clock, User, ArrowRight, ChevronDown, CheckCircle, AlertCircle, Truck, UserCheck } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Dashboard = () => {
  const { user, hasRole } = useAuth();
  const [expanded, setExpanded] = useState({
    donations: false,
    deliveries: false
  });

  if (!user) {
    return (
      <Card className="my-4">
        <CardHeader>
          <CardTitle>Join Aahar Today</CardTitle>
          <CardDescription>Login or register to access personalized features</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Sign in to access your dashboard based on your role.</p>
        </CardContent>
      </Card>
    );
  }

  // Donor Dashboard
  const donorDashboard = (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="h-5 w-5 text-orange-500" />
          Donor Dashboard
        </CardTitle>
        <CardDescription>Manage your food donations</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-medium text-gray-700">Your Active Donations</h3>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-xs"
                onClick={() => setExpanded({...expanded, donations: !expanded.donations})}
              >
                {expanded.donations ? 'Show less' : 'View all'}
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${expanded.donations ? 'rotate-180' : ''}`} />
              </Button>
            </div>
            
            <div className="space-y-3">
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="flex items-center">
                      <p className="font-medium">Home-cooked dinner</p>
                      <Badge className="ml-2 bg-green-500">Assigned</Badge>
                    </div>
                    <p className="text-sm text-gray-600">Expires in 2 hours</p>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-orange-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Volunteer: Rahul K.</p>
                      <p className="text-xs text-gray-500">Est. pickup in 15 minutes</p>
                    </div>
                    <Button size="sm" variant="outline" className="text-xs">
                      Track <Truck className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
              
              {expanded.donations && (
                <>
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="flex items-center">
                          <p className="font-medium">Leftover lunch buffet</p>
                          <Badge className="ml-2 bg-yellow-500">Pending</Badge>
                        </div>
                        <p className="text-sm text-gray-600">Expires in 5 hours</p>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-orange-200">
                      <p className="text-xs text-gray-500">Waiting for volunteer assignment...</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 p-4 rounded-lg border border-gray-200">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="flex items-center">
                          <p className="font-medium">Birthday party leftovers</p>
                          <Badge variant="outline" className="ml-2">Completed</Badge>
                        </div>
                        <p className="text-sm text-gray-600">May 20, 2024</p>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">Delivered by: Anita G.</p>
                          <div className="flex items-center text-xs text-green-600">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            <span>Successfully delivered</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <Button className="w-full bg-orange-500 hover:bg-orange-600">Create New Donation</Button>
        </div>
      </CardContent>
    </Card>
  );

  // Volunteer Dashboard
  const volunteerDashboard = (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Award className="h-5 w-5 text-orange-500" />
          Volunteer Dashboard
        </CardTitle>
        <CardDescription>View your tasks and rewards</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium text-gray-700">Your Points</h3>
            <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200 px-3">
              {user.points || 0} points
            </Badge>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-medium text-gray-700">Assigned Pickups</h3>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-xs"
                onClick={() => setExpanded({...expanded, deliveries: !expanded.deliveries})}
              >
                {expanded.deliveries ? 'Show less' : 'View all'}
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${expanded.deliveries ? 'rotate-180' : ''}`} />
              </Button>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <p className="font-medium">Home-cooked dinner</p>
                  <div className="flex items-center text-xs text-gray-600 mt-1">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>1.2 km away - Andheri East</span>
                  </div>
                </div>
                <Badge className="bg-blue-500">In Progress</Badge>
              </div>
              <div className="mt-3 pt-3 border-t border-orange-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Donor: Priya M.</p>
                    <div className="flex items-center text-xs text-gray-600 mt-1">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>Pickup by 7:30 PM</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="text-xs">
                      Contact
                    </Button>
                    <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-xs">
                      Navigate
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {expanded.deliveries && (
              <div className="bg-gray-100 p-4 rounded-lg border border-gray-200">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <p className="font-medium">Restaurant leftovers</p>
                    <div className="flex items-center text-xs text-gray-600 mt-1">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span>2.5 km away - Bandra West</span>
                    </div>
                  </div>
                  <Badge variant="outline">Completed</Badge>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Delivered to: Community Center</p>
                      <div className="flex items-center text-xs text-green-600">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        <span>+20 points earned</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <h3 className="font-medium text-gray-700 mt-6">Nearby Pickups</h3>
            <div className="space-y-3">
              <div className="bg-orange-50 p-3 rounded-lg border border-orange-100 flex justify-between items-center">
                <div>
                  <p className="font-medium">Fresh vegetables</p>
                  <div className="flex items-center text-xs text-gray-600">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>1.2 km away</span>
                  </div>
                </div>
                <Button size="sm" className="bg-orange-500 hover:bg-orange-600">Accept</Button>
              </div>
              
              <div className="bg-orange-50 p-3 rounded-lg border border-orange-100 flex justify-between items-center">
                <div>
                  <p className="font-medium">Bakery items</p>
                  <div className="flex items-center text-xs text-gray-600">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>2.5 km away</span>
                  </div>
                </div>
                <Button size="sm" className="bg-orange-500 hover:bg-orange-600">Accept</Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">View Navigation</Button>
        <Button variant="outline" className="flex items-center gap-1">
          <Bell className="h-4 w-4" />
          Notifications
        </Button>
      </CardFooter>
    </Card>
  );

  // Recipient Dashboard
  const recipientDashboard = (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-orange-500" />
          Find Food Near You
        </CardTitle>
        <CardDescription>Available food and distribution points</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-3">
            <h3 className="font-medium text-gray-700">Distribution Points Today</h3>
            <div className="bg-orange-50 p-3 rounded-lg border border-orange-100">
              <p className="font-medium">Community Center</p>
              <div className="flex items-center text-xs text-gray-600 mt-1">
                <MapPin className="h-3 w-3 mr-1" />
                <span>123 Park Street</span>
              </div>
              <div className="flex items-center text-xs text-gray-600 mt-1">
                <Clock className="h-3 w-3 mr-1" />
                <span>5:00 PM - 7:00 PM</span>
              </div>
              <div className="mt-3 flex justify-end">
                <Button size="sm" className="text-xs bg-orange-500 hover:bg-orange-600">
                  Get Directions
                </Button>
              </div>
            </div>
            
            <div className="bg-orange-50 p-3 rounded-lg border border-orange-100">
              <p className="font-medium">Public School #5</p>
              <div className="flex items-center text-xs text-gray-600 mt-1">
                <MapPin className="h-3 w-3 mr-1" />
                <span>45 Education Road</span>
              </div>
              <div className="flex items-center text-xs text-gray-600 mt-1">
                <Clock className="h-3 w-3 mr-1" />
                <span>12:00 PM - 2:00 PM</span>
              </div>
              <div className="mt-3 flex justify-end">
                <Button size="sm" className="text-xs bg-orange-500 hover:bg-orange-600">
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
          <Button className="w-full bg-orange-500 hover:bg-orange-600">Request Food Delivery</Button>
        </div>
      </CardContent>
    </Card>
  );

  // Admin Dashboard
  const adminDashboard = (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Admin Dashboard
        </CardTitle>
        <CardDescription>Monitor platform activity</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="deliveries" className="w-full">
          <div className="border-b px-6">
            <TabsList className="h-12">
              <TabsTrigger value="deliveries" className="data-[state=active]:border-orange-500">Deliveries</TabsTrigger>
              <TabsTrigger value="users" className="data-[state=active]:border-orange-500">Users</TabsTrigger>
              <TabsTrigger value="analytics" className="data-[state=active]:border-orange-500">Analytics</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="deliveries" className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-gray-700">Active Deliveries</h3>
                <Badge className="bg-orange-500">{5} Active</Badge>
              </div>
              
              <div className="overflow-auto max-h-96">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">ID</TableHead>
                      <TableHead>Food</TableHead>
                      <TableHead>Volunteer</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>ETA</TableHead>
                      <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">#45237</TableCell>
                      <TableCell>Home-cooked dinner</TableCell>
                      <TableCell>Rahul K.</TableCell>
                      <TableCell><Badge className="bg-blue-500">In Transit</Badge></TableCell>
                      <TableCell>10 min</TableCell>
                      <TableCell className="text-right">
                        <Button size="sm" variant="ghost">Track</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">#45238</TableCell>
                      <TableCell>Restaurant leftovers</TableCell>
                      <TableCell>Priya M.</TableCell>
                      <TableCell><Badge className="bg-green-500">Assigned</Badge></TableCell>
                      <TableCell>25 min</TableCell>
                      <TableCell className="text-right">
                        <Button size="sm" variant="ghost">Track</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">#45239</TableCell>
                      <TableCell>Fresh vegetables</TableCell>
                      <TableCell>—</TableCell>
                      <TableCell><Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Pending</Badge></TableCell>
                      <TableCell>—</TableCell>
                      <TableCell className="text-right">
                        <Button size="sm" variant="ghost">Assign</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">#45240</TableCell>
                      <TableCell>Bakery items</TableCell>
                      <TableCell>—</TableCell>
                      <TableCell><Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Pending</Badge></TableCell>
                      <TableCell>—</TableCell>
                      <TableCell className="text-right">
                        <Button size="sm" variant="ghost">Assign</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">#45236</TableCell>
                      <TableCell>Catering surplus</TableCell>
                      <TableCell>Arjun S.</TableCell>
                      <TableCell><Badge className="bg-blue-500">In Transit</Badge></TableCell>
                      <TableCell>15 min</TableCell>
                      <TableCell className="text-right">
                        <Button size="sm" variant="ghost">Track</Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="users" className="p-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-gray-700">Latest User Activities</h3>
                <Button size="sm">Manage Users</Button>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-green-50 border border-green-100 rounded-lg">
                  <UserCheck className="h-5 w-5 text-green-500 mr-3" />
                  <div>
                    <p className="text-sm">
                      <span className="font-medium">Volunteer Anita G.</span> completed food delivery to <span className="font-medium">Community Center</span>
                    </p>
                    <p className="text-xs text-gray-500">10 minutes ago</p>
                  </div>
                </div>
                
                <div className="flex items-center p-3 bg-blue-50 border border-blue-100 rounded-lg">
                  <User className="h-5 w-5 text-blue-500 mr-3" />
                  <div>
                    <p className="text-sm">
                      <span className="font-medium">New donor Ravi J.</span> registered and created first donation
                    </p>
                    <p className="text-xs text-gray-500">35 minutes ago</p>
                  </div>
                  <Button size="sm" variant="ghost" className="ml-auto">
                    Review
                  </Button>
                </div>
                
                <div className="flex items-center p-3 bg-amber-50 border border-amber-100 rounded-lg">
                  <AlertCircle className="h-5 w-5 text-amber-500 mr-3" />
                  <div>
                    <p className="text-sm">
                      <span className="font-medium">User Sandeep K.</span> reported an issue with food quality
                    </p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                  <Button size="sm" variant="ghost" className="ml-auto">
                    Review
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="analytics" className="p-6">
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="py-3">
                    <CardTitle className="text-sm text-gray-500">Total Deliveries</CardTitle>
                  </CardHeader>
                  <CardContent className="py-0">
                    <p className="text-3xl font-bold">1,248</p>
                    <p className="text-xs text-green-600 flex items-center">
                      <ArrowRight className="h-3 w-3 mr-1 rotate-45" />
                      <span>+12.5% from last month</span>
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="py-3">
                    <CardTitle className="text-sm text-gray-500">Active Donors</CardTitle>
                  </CardHeader>
                  <CardContent className="py-0">
                    <p className="text-3xl font-bold">87</p>
                    <p className="text-xs text-green-600 flex items-center">
                      <ArrowRight className="h-3 w-3 mr-1 rotate-45" />
                      <span>+5.3% from last month</span>
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="py-3">
                    <CardTitle className="text-sm text-gray-500">Active Volunteers</CardTitle>
                  </CardHeader>
                  <CardContent className="py-0">
                    <p className="text-3xl font-bold">42</p>
                    <p className="text-xs text-amber-600 flex items-center">
                      <ArrowRight className="h-3 w-3 mr-1 -rotate-45" />
                      <span>-2.1% from last month</span>
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <Button className="w-full">View Full Analytics</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Welcome, {user.name}</h2>
      
      {hasRole('donor') && donorDashboard}
      {hasRole('volunteer') && volunteerDashboard}
      {hasRole('recipient') && recipientDashboard}
      {hasRole('admin') && adminDashboard}
    </div>
  );
};

export default Dashboard;

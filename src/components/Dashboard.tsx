
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { MapPin, Bell, Award, Clock, User } from 'lucide-react';

const Dashboard = () => {
  const { user, hasRole } = useAuth();

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

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Welcome, {user.name}</h2>
      
      {/* Donor Dashboard */}
      {hasRole('donor') && (
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
                <h3 className="font-medium text-gray-700 mb-2">Your Active Donations</h3>
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-medium">Home-cooked dinner</p>
                      <p className="text-sm text-gray-600">Expires in 2 hours</p>
                    </div>
                    <Badge className="bg-green-500">Assigned</Badge>
                  </div>
                  <div className="mt-3 pt-3 border-t border-orange-200">
                    <p className="text-sm font-medium">Volunteer: Rahul K.</p>
                    <p className="text-xs text-gray-500">Est. pickup in 15 minutes</p>
                  </div>
                </div>
              </div>
              <Button className="w-full bg-orange-500 hover:bg-orange-600">Create New Donation</Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Volunteer Dashboard */}
      {hasRole('volunteer') && (
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
                <h3 className="font-medium text-gray-700">Nearby Pickups</h3>
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
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">View Navigation</Button>
            <Button variant="outline" className="flex items-center gap-1">
              <Bell className="h-4 w-4" />
              Notifications
            </Button>
          </CardFooter>
        </Card>
      )}

      {/* Recipient Dashboard */}
      {hasRole('recipient') && (
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
                </div>
              </div>
              <Button className="w-full bg-orange-500 hover:bg-orange-600">Request Food Delivery</Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Admin Dashboard */}
      {hasRole('admin') && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Admin Dashboard
            </CardTitle>
            <CardDescription>Monitor platform activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Active Deliveries</h3>
                <div className="overflow-auto max-h-60">
                  <table className="min-w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="py-2 text-left text-xs font-medium text-gray-500">ID</th>
                        <th className="py-2 text-left text-xs font-medium text-gray-500">Volunteer</th>
                        <th className="py-2 text-left text-xs font-medium text-gray-500">Status</th>
                        <th className="py-2 text-left text-xs font-medium text-gray-500">ETA</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 text-sm">#45237</td>
                        <td className="py-2 text-sm">Rahul K.</td>
                        <td className="py-2 text-sm"><Badge>In Transit</Badge></td>
                        <td className="py-2 text-sm">10 min</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 text-sm">#45238</td>
                        <td className="py-2 text-sm">Priya M.</td>
                        <td className="py-2 text-sm"><Badge>Assigned</Badge></td>
                        <td className="py-2 text-sm">25 min</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" className="w-full">User Management</Button>
                <Button variant="outline" className="w-full">Approval Queue</Button>
                <Button variant="outline" className="w-full">Reports</Button>
                <Button variant="outline" className="w-full">Settings</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Dashboard;

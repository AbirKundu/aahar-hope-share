
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { BarChart, PieChart, LineChart } from '@/components/ui/chart';
import { useToast } from '@/components/ui/use-toast';
import { Check, X, AlertTriangle, User, Users, UserCheck, MessageSquare, Calendar, Clock, Settings, Shield, Search, Filter, Download, Edit, Trash2, Eye, Lock } from 'lucide-react';
import { Navigate } from 'react-router-dom';

const Admin = () => {
  const { user, hasRole, isAuthenticated } = useAuth();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Redirect non-admin users
  if (!isAuthenticated || !hasRole('admin')) {
    return <Navigate to="/" replace />;
  }

  // Sample data for demonstration
  const donations = [
    { id: 'D1001', donor: 'Restaurant ABC', food: 'Mixed Curry', quantity: '5kg', status: 'pending', date: '2024-06-01' },
    { id: 'D1002', donor: 'Bakery XYZ', food: 'Bread and Pastries', quantity: '3kg', status: 'approved', date: '2024-06-02' },
    { id: 'D1003', donor: 'Supermarket 123', food: 'Fresh Produce', quantity: '10kg', status: 'completed', date: '2024-05-30' },
    { id: 'D1004', donor: 'Hotel Grand', food: 'Cooked Meals', quantity: '8kg', status: 'rejected', date: '2024-05-29' },
    { id: 'D1005', donor: 'Wedding Hall', food: 'Biryani', quantity: '15kg', status: 'approved', date: '2024-06-03' },
  ];

  const volunteers = [
    { id: 'V2001', name: 'Rahim Ahmed', email: 'rahim@example.com', phone: '01712345678', tasks: 5, status: 'active' },
    { id: 'V2002', name: 'Fatima Khan', email: 'fatima@example.com', phone: '01812345678', tasks: 3, status: 'pending' },
    { id: 'V2003', name: 'Karim Rahman', email: 'karim@example.com', phone: '01912345678', tasks: 8, status: 'active' },
    { id: 'V2004', name: 'Nadia Islam', email: 'nadia@example.com', phone: '01612345678', tasks: 0, status: 'inactive' },
    { id: 'V2005', name: 'Omar Faruk', email: 'omar@example.com', phone: '01512345678', tasks: 12, status: 'active' },
  ];

  const reports = [
    { id: 'R3001', type: 'Food Quality', reporter: 'Recipient', severity: 'high', status: 'investigating', date: '2024-06-01' },
    { id: 'R3002', type: 'Volunteer Conduct', reporter: 'Donor', severity: 'medium', status: 'resolved', date: '2024-05-28' },
    { id: 'R3003', type: 'App Bug', reporter: 'Volunteer', severity: 'low', status: 'pending', date: '2024-06-02' }
  ];

  const handleStatusChange = (id: string, newStatus: string) => {
    toast({
      title: "Status updated",
      description: `Item ${id} status changed to ${newStatus}`,
    });
  };

  const handleDeleteItem = (id: string, type: string) => {
    toast({
      title: "Item deleted",
      description: `${type} ${id} has been removed from the system`,
    });
  };

  // Filter function
  const filteredDonations = donations.filter(donation => 
    (filterStatus === 'all' || donation.status === filterStatus) &&
    (donation.donor.toLowerCase().includes(searchTerm.toLowerCase()) || 
     donation.food.toLowerCase().includes(searchTerm.toLowerCase()) ||
     donation.id.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16 pb-10">
        <div className="bg-gray-50 py-6 border-b">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
                <p className="text-gray-600">Manage donations, volunteers, and system settings</p>
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600">
                <Settings className="h-4 w-4 mr-2" />
                System Settings
              </Button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6">
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-4xl font-bold text-orange-500">152</CardTitle>
                <CardDescription>Active Donations</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">+12% from last month</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-4xl font-bold text-orange-500">48</CardTitle>
                <CardDescription>Registered Volunteers</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">+5% from last month</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-4xl font-bold text-orange-500">1,240</CardTitle>
                <CardDescription>Meals Distributed</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">+18% from last month</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-4xl font-bold text-orange-500">5</CardTitle>
                <CardDescription>Pending Reports</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">-2 from last week</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <Tabs defaultValue="donations">
            <TabsList className="mb-6">
              <TabsTrigger value="donations">
                <Calendar className="h-4 w-4 mr-2" />
                Donations
              </TabsTrigger>
              <TabsTrigger value="volunteers">
                <UserCheck className="h-4 w-4 mr-2" />
                Volunteers
              </TabsTrigger>
              <TabsTrigger value="reports">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Reports
              </TabsTrigger>
              <TabsTrigger value="analytics">
                <BarChart className="h-4 w-4 mr-2" />
                Analytics
              </TabsTrigger>
            </TabsList>

            {/* Donations Tab */}
            <TabsContent value="donations">
              <Card>
                <CardHeader>
                  <CardTitle>Manage Donations</CardTitle>
                  <CardDescription>Review and manage all food donations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="relative flex-grow">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <Input 
                        placeholder="Search donations..." 
                        className="pl-10" 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <div className="flex gap-2">
                      <Select value={filterStatus} onValueChange={setFilterStatus}>
                        <SelectTrigger className="w-[180px]">
                          <Filter className="h-4 w-4 mr-2" />
                          <SelectValue placeholder="Filter by status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Statuses</SelectItem>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="approved">Approved</SelectItem>
                          <SelectItem value="completed">Completed</SelectItem>
                          <SelectItem value="rejected">Rejected</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button variant="outline" className="flex items-center gap-2">
                        <Download className="h-4 w-4" />
                        Export
                      </Button>
                    </div>
                  </div>

                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>ID</TableHead>
                          <TableHead>Donor</TableHead>
                          <TableHead>Food Items</TableHead>
                          <TableHead>Quantity</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredDonations.map(donation => (
                          <TableRow key={donation.id}>
                            <TableCell className="font-medium">{donation.id}</TableCell>
                            <TableCell>{donation.donor}</TableCell>
                            <TableCell>{donation.food}</TableCell>
                            <TableCell>{donation.quantity}</TableCell>
                            <TableCell>{donation.date}</TableCell>
                            <TableCell>
                              <Badge className={
                                donation.status === 'approved' ? 'bg-green-500' :
                                donation.status === 'pending' ? 'bg-yellow-500' :
                                donation.status === 'completed' ? 'bg-blue-500' :
                                'bg-red-500'
                              }>
                                {donation.status}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <div className="flex justify-end gap-2">
                                <Button variant="ghost" size="sm">
                                  <Eye className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <Button variant="ghost" size="sm">
                                      <Trash2 className="h-4 w-4 text-red-500" />
                                    </Button>
                                  </DialogTrigger>
                                  <DialogContent>
                                    <DialogHeader>
                                      <DialogTitle>Delete Donation</DialogTitle>
                                      <DialogDescription>
                                        Are you sure you want to delete donation {donation.id}? This action cannot be undone.
                                      </DialogDescription>
                                    </DialogHeader>
                                    <DialogFooter>
                                      <Button variant="outline">Cancel</Button>
                                      <Button 
                                        variant="destructive"
                                        onClick={() => handleDeleteItem(donation.id, 'Donation')}
                                      >
                                        Delete
                                      </Button>
                                    </DialogFooter>
                                  </DialogContent>
                                </Dialog>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="text-sm text-gray-600">
                    Showing {filteredDonations.length} of {donations.length} donations
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Previous</Button>
                    <Button variant="outline" size="sm">Next</Button>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Volunteers Tab */}
            <TabsContent value="volunteers">
              <Card>
                <CardHeader>
                  <CardTitle>Manage Volunteers</CardTitle>
                  <CardDescription>Review volunteer applications and manage current volunteers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>ID</TableHead>
                          <TableHead>Name</TableHead>
                          <TableHead>Contact</TableHead>
                          <TableHead>Tasks Completed</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {volunteers.map(volunteer => (
                          <TableRow key={volunteer.id}>
                            <TableCell className="font-medium">{volunteer.id}</TableCell>
                            <TableCell>{volunteer.name}</TableCell>
                            <TableCell>
                              <div>{volunteer.email}</div>
                              <div className="text-sm text-gray-500">{volunteer.phone}</div>
                            </TableCell>
                            <TableCell>{volunteer.tasks}</TableCell>
                            <TableCell>
                              <Badge className={
                                volunteer.status === 'active' ? 'bg-green-500' :
                                volunteer.status === 'pending' ? 'bg-yellow-500' :
                                'bg-gray-500'
                              }>
                                {volunteer.status}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <div className="flex justify-end gap-2">
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <Button variant="ghost" size="sm">
                                      <Edit className="h-4 w-4" />
                                    </Button>
                                  </DialogTrigger>
                                  <DialogContent>
                                    <DialogHeader>
                                      <DialogTitle>Update Status</DialogTitle>
                                      <DialogDescription>
                                        Change the status for volunteer {volunteer.name}
                                      </DialogDescription>
                                    </DialogHeader>
                                    <div className="py-4">
                                      <Select defaultValue={volunteer.status}>
                                        <SelectTrigger>
                                          <SelectValue placeholder="Select status" />
                                        </SelectTrigger>
                                        <SelectContent>
                                          <SelectItem value="active">Active</SelectItem>
                                          <SelectItem value="pending">Pending</SelectItem>
                                          <SelectItem value="inactive">Inactive</SelectItem>
                                        </SelectContent>
                                      </Select>
                                    </div>
                                    <DialogFooter>
                                      <Button 
                                        className="bg-orange-500 hover:bg-orange-600"
                                        onClick={() => handleStatusChange(volunteer.id, 'active')}
                                      >
                                        Save Changes
                                      </Button>
                                    </DialogFooter>
                                  </DialogContent>
                                </Dialog>
                                <Button variant="ghost" size="sm">
                                  <Lock className="h-4 w-4" />
                                </Button>
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <Button variant="ghost" size="sm">
                                      <Trash2 className="h-4 w-4 text-red-500" />
                                    </Button>
                                  </DialogTrigger>
                                  <DialogContent>
                                    <DialogHeader>
                                      <DialogTitle>Remove Volunteer</DialogTitle>
                                      <DialogDescription>
                                        Are you sure you want to remove volunteer {volunteer.name} from the system? This action cannot be undone.
                                      </DialogDescription>
                                    </DialogHeader>
                                    <DialogFooter>
                                      <Button variant="outline">Cancel</Button>
                                      <Button 
                                        variant="destructive"
                                        onClick={() => handleDeleteItem(volunteer.id, 'Volunteer')}
                                      >
                                        Remove
                                      </Button>
                                    </DialogFooter>
                                  </DialogContent>
                                </Dialog>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Reports Tab */}
            <TabsContent value="reports">
              <Card>
                <CardHeader>
                  <CardTitle>Manage Reports & Issues</CardTitle>
                  <CardDescription>Review and address reported issues</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>ID</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Reporter</TableHead>
                          <TableHead>Severity</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {reports.map(report => (
                          <TableRow key={report.id}>
                            <TableCell className="font-medium">{report.id}</TableCell>
                            <TableCell>{report.type}</TableCell>
                            <TableCell>{report.reporter}</TableCell>
                            <TableCell>
                              <Badge className={
                                report.severity === 'high' ? 'bg-red-500' :
                                report.severity === 'medium' ? 'bg-yellow-500' :
                                'bg-blue-500'
                              }>
                                {report.severity}
                              </Badge>
                            </TableCell>
                            <TableCell>{report.date}</TableCell>
                            <TableCell>
                              <Badge variant="outline" className={
                                report.status === 'resolved' ? 'border-green-200 text-green-800 bg-green-50' :
                                report.status === 'investigating' ? 'border-blue-200 text-blue-800 bg-blue-50' :
                                'border-yellow-200 text-yellow-800 bg-yellow-50'
                              }>
                                {report.status}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <div className="flex justify-end gap-2">
                                <Button variant="ghost" size="sm">
                                  <Eye className="h-4 w-4" />
                                </Button>
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <Button variant="ghost" size="sm">
                                      <Edit className="h-4 w-4" />
                                    </Button>
                                  </DialogTrigger>
                                  <DialogContent>
                                    <DialogHeader>
                                      <DialogTitle>Update Report Status</DialogTitle>
                                      <DialogDescription>
                                        Change the status for report {report.id}
                                      </DialogDescription>
                                    </DialogHeader>
                                    <div className="py-4">
                                      <Select defaultValue={report.status}>
                                        <SelectTrigger>
                                          <SelectValue placeholder="Select status" />
                                        </SelectTrigger>
                                        <SelectContent>
                                          <SelectItem value="pending">Pending</SelectItem>
                                          <SelectItem value="investigating">Investigating</SelectItem>
                                          <SelectItem value="resolved">Resolved</SelectItem>
                                        </SelectContent>
                                      </Select>
                                    </div>
                                    <DialogFooter>
                                      <Button 
                                        className="bg-orange-500 hover:bg-orange-600"
                                        onClick={() => handleStatusChange(report.id, 'resolved')}
                                      >
                                        Save Changes
                                      </Button>
                                    </DialogFooter>
                                  </DialogContent>
                                </Dialog>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Food Distribution by Area</CardTitle>
                    <CardDescription>Total food distributed by location</CardDescription>
                  </CardHeader>
                  <CardContent className="h-80">
                    <div className="text-center text-gray-500 mt-20">
                      [Chart Visualization Placeholder]
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Volunteer Activity</CardTitle>
                    <CardDescription>Task completion by volunteers</CardDescription>
                  </CardHeader>
                  <CardContent className="h-80">
                    <div className="text-center text-gray-500 mt-20">
                      [Chart Visualization Placeholder]
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;

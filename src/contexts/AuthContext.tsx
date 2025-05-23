
import React, { createContext, useContext, useState, useEffect } from 'react';

// Define role types
export type UserRole = 'donor' | 'volunteer' | 'recipient' | 'admin' | 'guest';

// Interface for the user object
export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  points?: number; // For volunteers
  status: 'active' | 'suspended';
  permissions?: string[]; // Added for fine-grained access control
}

// Interface for the auth context
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  hasRole: (role: UserRole | UserRole[]) => boolean;
  hasPermission: (permission: string) => boolean; // Added for permission check
}

// Create the context with default values
const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  login: async () => {},
  logout: () => {},
  hasRole: () => false,
  hasPermission: () => false,
});

// Sample users for demo purposes (would be replaced with database in real app)
const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Donor',
    email: 'donor@example.com',
    role: 'donor',
    status: 'active',
  },
  {
    id: '2',
    name: 'Volunteer Hero',
    email: 'volunteer@example.com',
    role: 'volunteer',
    points: 120,
    status: 'active',
    permissions: ['collect_food', 'deliver_food']
  },
  {
    id: '3',
    name: 'Needy Person',
    email: 'recipient@example.com',
    role: 'recipient',
    status: 'active',
  },
  {
    id: '4',
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'admin',
    status: 'active',
    permissions: ['manage_users', 'manage_donations', 'manage_volunteers', 'view_reports', 'manage_system']
  },
];

// Provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for stored auth on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('aahar_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  // Mock login function - in real app would call an API
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Find user by email (would be replaced with actual auth)
      const foundUser = mockUsers.find(u => u.email === email);
      if (foundUser && foundUser.status === 'active') {
        setUser(foundUser);
        localStorage.setItem('aahar_user', JSON.stringify(foundUser));
      } else {
        throw new Error(foundUser?.status === 'suspended' ? 'Account suspended' : 'Invalid credentials');
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('aahar_user');
  };

  // Function to check if user has a specific role or roles
  const hasRole = (role: UserRole | UserRole[]) => {
    if (!user) return false;
    
    if (Array.isArray(role)) {
      return role.includes(user.role);
    }
    
    return user.role === role;
  };

  // Function to check if user has a specific permission
  const hasPermission = (permission: string) => {
    if (!user || !user.permissions) return false;
    
    // Admin users have all permissions
    if (user.role === 'admin') return true;
    
    return user.permissions.includes(permission);
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      isLoading,
      login,
      logout,
      hasRole,
      hasPermission,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);


import { UserRole } from '../contexts/AuthContext';

// Status types
export type FoodStatus = 'available' | 'assigned' | 'in_transit' | 'delivered' | 'expired';
export type PickupStatus = 'pending' | 'assigned' | 'in_progress' | 'completed' | 'cancelled';

// Food donation model
export interface FoodDonation {
  id: string;
  donorId: string;
  donorName: string;
  foodName: string;
  description: string;
  quantity: string;
  imageUrl?: string;
  location: {
    address: string;
    lat: number;
    lng: number;
  };
  createdAt: Date;
  expiresAt: Date;
  status: FoodStatus;
  assignedTo?: string;
}

// Pickup task model
export interface PickupTask {
  id: string;
  foodDonationId: string;
  volunteerId: string | null;
  volunteerName?: string;
  pickupLocation: {
    address: string;
    lat: number;
    lng: number;
  };
  dropLocation: {
    address: string;
    lat: number;
    lng: number;
  };
  status: PickupStatus;
  assignedAt?: Date;
  pickupTime?: Date;
  deliveryTime?: Date;
  pointsAwarded?: number;
}

// Food request model
export interface FoodRequest {
  id: string;
  recipientId: string;
  recipientName: string;
  numberOfPeople: number;
  requestType: 'pickup' | 'delivery';
  location?: {
    address: string;
    lat: number;
    lng: number;
  };
  status: 'pending' | 'approved' | 'fulfilled' | 'rejected';
  createdAt: Date;
  notes?: string;
}

// Notification model
export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
  createdAt: Date;
  relatedTo?: {
    type: 'donation' | 'pickup' | 'request';
    id: string;
  };
}

// Role-based permission map
export const ROLE_PERMISSIONS: Record<UserRole, string[]> = {
  donor: [
    'create:donation',
    'read:own_donations',
    'update:own_donations',
    'delete:own_donations',
    'read:assigned_volunteer'
  ],
  volunteer: [
    'read:available_pickups',
    'update:assigned_pickups',
    'read:own_rewards',
    'read:navigation'
  ],
  recipient: [
    'create:request',
    'read:own_requests',
    'read:distribution_points'
  ],
  admin: [
    'read:all',
    'create:all',
    'update:all',
    'delete:all',
    'manage:users',
    'approve:requests'
  ],
  guest: [
    'read:public'
  ]
};

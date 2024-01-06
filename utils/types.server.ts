import type { AvaliabilityType, CustomerType, ParkingStatus, parkingspot_details, parkingspots, price } from "@prisma/client";

export interface LoginForm {
  email: string;
  password: string;
}

export type RegisterForm = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export interface ParkingSpot {
  price: number | null;
  created_at: Date;
  updated_at: Date | null;
  street?: string;
  postal_code: number;
  city: string;
  notes: string;
  show_street_nr: boolean;
  status: ParkingStatus; // Assuming ParkingStatus is an enum or type you've defined
  owner_id: string;
  id: string;
  availability_type: AvaliabilityType | null; // Assuming AvaliabilityType is an enum or type you've defined
  customer_type: CustomerType; // Assuming CustomerType is an enum or type you've defined
  parkingspot_details_parkingspot_details_spot_idToparkingspots?: parkingspot_details; // This should match the actual data you have
  prices?: price; // This should match the actual data you have
}

export type ParkingSpotWithDetailsAndPrice = parkingspots | null & {
  prices?: price ,
  parkingspot_details_parkingspot_details_spot_idToparkingspots?: parkingspot_details;
};

export type LoaderResponse = ParkingSpotWithDetailsAndPrice & {
  error?: string;
};
import type { parkingspot_details, parkingspots, price } from "@prisma/client";

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

export type ParkingSpotWithDetailsAndPrice = parkingspots | null & {
  prices?: price ,
  parkingspot_details_parkingspot_details_spot_idToparkingspots?: parkingspot_details;
};

export type LoaderResponse = ParkingSpotWithDetailsAndPrice & {
  error?: string;
};
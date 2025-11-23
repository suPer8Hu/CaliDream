
export type Language = 'zh' | 'en';

export interface Hotel {
  name: string;
  category: 'Luxury' | 'Comfort' | 'Budget'; // Type of hotel
  priceRange: string; // e.g. "$150 - $250"
  rating: number;
  description: string;
  bookingUrl: string; // URL for booking/search
}

export interface Spot {
  name: string;
  description: string;
  photoTip: string;
  isInstaWorthy: boolean;
  ticketInfo: string; // e.g. "Free" or "$30"
  coordinates: { lat: number; lng: number };
}

export interface ItineraryDay {
  id: number;
  date: string;
  title: string;
  route: string;
  shortDesc: string;
  description: string;
  miles: number;
  driveTime: string;
  mainStops: Spot[];
  hotels: Hotel[]; // Changed from single hotel to array
  mapQuery: string; // For Google Maps link
}

export interface AiInsight {
  ootd: string; // Outfit of the day
  hiddenGem: string;
  photographyAdvice: string;
  hashtags: string[];
}

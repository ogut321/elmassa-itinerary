export type ItineraryDay = {
  day: number;
  title: string;
  location: string;
  description: string;
};

export type SiteSettings = {
  companyName?: string;
  logoUrl?: string;
  whatsappNumber?: string;
  address?: string;
  email?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  primaryColor?: string;
  secondaryColor?: string;
};

export type TravelPackage = {
  slug: string;
  title: string;
  month?: string;
  departureDate?: string;
  returnDate?: string;
  duration?: string;
  summary?: string;
  highlights?: string[];
  itinerary?: ItineraryDay[];
  dailyItinerary?: ItineraryDay[];
  price?: number;
  priceNote?: string;
  airline?: string;
  galleryImages?: string[];
  pdfItineraryUrl?: string;
};

export type ItineraryDay = {
  day: number;
  title: string;
  location: string;
  description: string;
};

export type TravelPackage = {
  slug: string;
  title: string;
  month: string;
  departureDate: string;
  returnDate: string;
  duration: string;
  summary: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  priceNote: string;
};

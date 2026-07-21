import type { TravelPackage } from "@/types/package";

export const packages: TravelPackage[] = [
  {
    slug: "november-2026",
    title: "November 2026 Holy Land Journey",
    month: "November 2026",
    departureDate: "5 November 2026",
    returnDate: "16 November 2026",
    duration: "12 days / 11 nights",
    summary:
      "A carefully guided pilgrimage through Jerusalem, Bethlehem, Nazareth, Galilee, and other sacred landmarks with premium hospitality from El Massa.",
    highlights: [
      "Visit Jerusalem, Bethlehem, Nazareth, Cana, and the Sea of Galilee",
      "Comfortable accommodation selected for access and rest",
      "Daily guided spiritual program with thoughtful pacing",
      "Dedicated El Massa coordination from departure to return",
    ],
    itinerary: [
      {
        day: 1,
        title: "Departure to the Holy Land",
        location: "International departure",
        description:
          "Begin the journey with El Massa assistance, group coordination, and travel preparation for a meaningful pilgrimage.",
      },
      {
        day: 2,
        title: "Arrival and Welcome",
        location: "Tel Aviv / Jerusalem",
        description:
          "Arrive, transfer to the hotel, settle in, and gather for a warm welcome briefing about the days ahead.",
      },
      {
        day: 3,
        title: "Jerusalem Sacred Sites",
        location: "Jerusalem",
        description:
          "Explore the Old City surroundings and key biblical landmarks with time for prayer, reflection, and guided context.",
      },
      {
        day: 4,
        title: "Bethlehem Pilgrimage",
        location: "Bethlehem",
        description:
          "Visit Bethlehem and the Nativity area, with a balanced program designed for devotion, learning, and rest.",
      },
      {
        day: 5,
        title: "Mount of Olives and Reflection",
        location: "Jerusalem",
        description:
          "Spend the day around panoramic holy sites and reflective stops connected to the final days of Christ.",
      },
      {
        day: 6,
        title: "Galilee Journey",
        location: "Galilee",
        description:
          "Travel north to the Galilee region, visiting landscapes and communities central to the Gospel story.",
      },
      {
        day: 7,
        title: "Sea of Galilee",
        location: "Tiberias / Galilee",
        description:
          "Experience the serenity of the Sea of Galilee and surrounding ministry sites with guided devotional moments.",
      },
      {
        day: 8,
        title: "Nazareth and Cana",
        location: "Nazareth / Cana",
        description:
          "Discover Nazareth and Cana, connecting the itinerary to stories of family, faith, and discipleship.",
      },
      {
        day: 9,
        title: "Jordan Valley Route",
        location: "Jordan Valley",
        description:
          "Continue through significant biblical geography with selected stops and time to absorb the journey.",
      },
      {
        day: 10,
        title: "Jerusalem at Leisure",
        location: "Jerusalem",
        description:
          "A flexible day for prayer, optional visits, shopping, and quiet personal reflection before departure preparations.",
      },
      {
        day: 11,
        title: "Farewell Gathering",
        location: "Jerusalem",
        description:
          "Conclude the pilgrimage with a final group moment, check-out coordination, and airport transfer planning.",
      },
      {
        day: 12,
        title: "Return Home",
        location: "International return",
        description:
          "Return home on 16 November 2026 carrying memories, fellowship, and renewed spiritual perspective.",
      },
    ],
    priceNote: "Package pricing and inclusions will be announced soon.",
  },
];

export function getPackageBySlug(slug: string) {
  return packages.find((travelPackage) => travelPackage.slug === slug);
}

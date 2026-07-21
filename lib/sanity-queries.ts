import {groq} from "next-sanity";
import {packages as fallbackPackages} from "@/data/packages";
import {hasSanityConfig, sanityClient} from "@/lib/sanity";
import type {SiteSettings, TravelPackage} from "@/types/package";

const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{companyName, whatsappNumber, address, email, heroTitle, heroSubtitle, primaryColor, secondaryColor, "logoUrl": logo.asset->url}`;
const packagesQuery = groq`*[_type == "package" && status == "Published"] | order(departureDate asc){"slug": slug.current, "title": packageName, departureDate, returnDate, duration, price, airline, "galleryImages": galleryImages[].asset->url, "pdfItineraryUrl": pdfItinerary.asset->url, dailyItinerary[]{day, title, location, description}}`;

export async function getSiteSettings(): Promise<SiteSettings> {
  if (!hasSanityConfig) return {};

  return (await sanityClient.fetch<SiteSettings | null>(siteSettingsQuery, {}, {next: {revalidate: 60}})) ?? {};
}

export async function getPublishedPackages(): Promise<TravelPackage[]> {
  if (!hasSanityConfig) return fallbackPackages;

  const sanityPackages = await sanityClient.fetch<TravelPackage[]>(packagesQuery, {}, {next: {revalidate: 60}});
  return sanityPackages.length > 0 ? sanityPackages : fallbackPackages;
}

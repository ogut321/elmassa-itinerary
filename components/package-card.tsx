import Link from "next/link";
import type { TravelPackage } from "@/types/package";

function formatDisplayDate(date?: string) {
  if (!date) return "To be announced";
  const parsed = new Date(`${date}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return date;
  return new Intl.DateTimeFormat("en", {day: "numeric", month: "long", year: "numeric"}).format(parsed);
}

export function PackageCard({ travelPackage }: { travelPackage: TravelPackage }) {
  const highlights = travelPackage.highlights ?? [];
  const departureDate = formatDisplayDate(travelPackage.departureDate);
  const returnDate = formatDisplayDate(travelPackage.returnDate);
  const month = travelPackage.month ?? departureDate;
  const summary = travelPackage.summary ?? `${travelPackage.duration ?? "A curated"} El Massa travel package${travelPackage.airline ? ` with ${travelPackage.airline}` : ""}.`;

  return (
    <article className="overflow-hidden rounded-[2rem] border border-teal-900/10 bg-white shadow-2xl shadow-teal-950/10">
      <div className="bg-[linear-gradient(135deg,#0F766E,#083f3b)] p-8 text-white">
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-gold">{month}</p>
        <h3 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl">{travelPackage.title}</h3>
        <p className="mt-4 text-sm leading-6 text-teal-50">{summary}</p>
      </div>
      <div className="p-8">
        <dl className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-teal-50 p-4">
            <dt className="text-xs font-bold uppercase tracking-widest text-primary">Departure</dt>
            <dd className="mt-1 font-bold text-slate-950">{departureDate}</dd>
          </div>
          <div className="rounded-2xl bg-amber-50 p-4">
            <dt className="text-xs font-bold uppercase tracking-widest text-amber-700">Return</dt>
            <dd className="mt-1 font-bold text-slate-950">{returnDate}</dd>
          </div>
        </dl>
        <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-600">
          {highlights.slice(0, 3).map((highlight) => (
            <li key={highlight} className="flex gap-3">
              <span className="mt-2 size-2 shrink-0 rounded-full bg-gold" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
        <Link
          href={`/paket/${travelPackage.slug}`}
          className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-4 text-sm font-extrabold text-white transition hover:bg-teal-800 sm:w-auto"
        >
          View itinerary
        </Link>
      </div>
    </article>
  );
}

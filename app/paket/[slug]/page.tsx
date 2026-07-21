import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { getPackageBySlug, packages } from "@/data/packages";

type PackagePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return packages.map((travelPackage) => ({ slug: travelPackage.slug }));
}

export async function generateMetadata({ params }: PackagePageProps): Promise<Metadata> {
  const { slug } = await params;
  const travelPackage = getPackageBySlug(slug);

  if (!travelPackage) {
    return { title: "Package not found | El Massa Itinerary" };
  }

  return {
    title: `${travelPackage.title} | El Massa Itinerary`,
    description: travelPackage.summary,
  };
}

export default async function PackagePage({ params }: PackagePageProps) {
  const { slug } = await params;
  const travelPackage = getPackageBySlug(slug);

  if (!travelPackage) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="bg-[linear-gradient(135deg,#0F766E,#083f3b)] py-16 text-white sm:py-24">
        <Container>
          <Link href="/" className="text-sm font-bold text-teal-50 transition hover:text-gold">← Back to home</Link>
          <p className="mt-10 text-sm font-extrabold uppercase tracking-[0.35em] text-gold">{travelPackage.month}</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-[-0.04em] sm:text-6xl">{travelPackage.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-teal-50">{travelPackage.summary}</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              ["Departure", travelPackage.departureDate],
              ["Return", travelPackage.returnDate],
              ["Duration", travelPackage.duration],
            ].map(([label, value]) => (
              <div key={label} className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur">
                <p className="text-xs font-bold uppercase tracking-widest text-gold">{label}</p>
                <p className="mt-2 text-lg font-extrabold">{value}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="h-fit rounded-[2rem] border border-teal-900/10 bg-slate-50 p-6 lg:sticky lg:top-28">
            <h2 className="text-2xl font-black text-slate-950">Package highlights</h2>
            <ul className="mt-6 space-y-4 text-sm leading-6 text-slate-600">
              {travelPackage.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-2 size-2 shrink-0 rounded-full bg-gold" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-2xl bg-white p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-primary">Pricing</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{travelPackage.priceNote}</p>
            </div>
          </aside>
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-gold">Daily itinerary</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">A balanced 12-day sacred route</h2>
            <div className="mt-8 space-y-5">
              {travelPackage.itinerary.map((day) => (
                <article key={day.day} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                    <div className="grid size-14 shrink-0 place-items-center rounded-2xl bg-primary text-sm font-black text-white">{day.day}</div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-gold">{day.location}</p>
                      <h3 className="mt-2 text-xl font-extrabold text-slate-950">{day.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{day.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
}

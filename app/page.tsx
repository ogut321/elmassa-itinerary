import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { PackageCard } from "@/components/package-card";
import { Container } from "@/components/container";
import { getPublishedPackages, getSiteSettings } from "@/lib/sanity-queries";

export default async function Home() {
  const [siteSettings, packages] = await Promise.all([getSiteSettings(), getPublishedPackages()]);
  const heroTitle = siteSettings.heroTitle || "Journey to The Holy Land";
  const heroSubtitle = siteSettings.heroSubtitle || "Thoughtfully curated itineraries for sacred travel, premium comfort, and guided moments of reflection across the places that shaped faith history.";

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.28),transparent_32%),linear-gradient(135deg,#f8fffd,#ffffff_45%,#effaf8)] py-20 sm:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.35em] text-gold">Premium pilgrimage experiences</p>
            <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-[-0.05em] text-slate-950 sm:text-6xl lg:text-7xl">
              {heroTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {heroSubtitle}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#packages" className="rounded-full bg-primary px-7 py-4 text-center text-sm font-extrabold text-white shadow-xl shadow-teal-900/20 transition hover:-translate-y-0.5 hover:bg-teal-800">
                Explore packages
              </a>
              <a href="#about" className="rounded-full border border-primary/20 bg-white px-7 py-4 text-center text-sm font-extrabold text-primary transition hover:border-primary hover:bg-teal-50">
                About El Massa
              </a>
            </div>
          </div>
          <div className="rounded-[2.5rem] border border-white bg-white/70 p-4 shadow-2xl shadow-teal-950/10 backdrop-blur">
            <div className="min-h-[420px] rounded-[2rem] bg-[linear-gradient(160deg,rgba(15,118,110,0.95),rgba(15,118,110,0.62)),url('https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center p-8 text-white">
              <div className="flex h-full min-h-[356px] flex-col justify-end">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-gold">November 2026</p>
                <p className="mt-3 text-3xl font-black">5–16 November 2026</p>
                <p className="mt-4 max-w-sm text-sm leading-6 text-teal-50">A signature Holy Land journey prepared with care, clarity, and reverence.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section id="packages" className="py-20 sm:py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-gold">Featured packages</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950">Upcoming El Massa journeys</h2>
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {packages.map((travelPackage) => <PackageCard key={travelPackage.slug} travelPackage={travelPackage} />)}
          </div>
        </Container>
      </section>
      <section id="about" className="bg-slate-50 py-20 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-gold">About El Massa</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950">Pilgrimage planning with premium attention to detail.</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              ["Curated routes", "Programs shaped around sacred landmarks, daily rhythm, and meaningful reflection."],
              ["Traveler care", "Clear coordination, practical information, and supportive service throughout the journey."],
              ["Premium feel", "Elegant planning details, comfortable pacing, and a calm booking experience."],
              ["Faith focus", "Itineraries designed to help groups encounter the Holy Land with reverence."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-3xl bg-white p-6 shadow-lg shadow-slate-900/5">
                <h3 className="text-lg font-extrabold text-primary">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
}
